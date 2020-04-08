/* eslint-disable prefer-const */
import { BigInt, BigDecimal, store, log } from '@graphprotocol/graph-ts'
import {
  Pair,
  Token,
  UniswapFactory,
  Transaction,
  // Migration,
  UniswapDayData,
  PairDayData,
  TokenDayData,
  Mint as MintEvent,
  Burn as BurnEvent,
  SwapEvent,
  Bundle,
  LiquidityTokenTransfer
} from '../types/schema'
import { Pair as PairContract, Mint, Burn, Swap, Transfer, Sync } from '../types/templates/Pair/Pair'

import { updatePairDayData, updateTokenDayData, updateUniswapDayData } from './dayUpdates'

import { getEthPriceInUSD } from './priceOracle'
import {
  convertTokenToDecimal,
  ADDRESS_ZERO,
  FACTORY_ADDRESS,
  ONE_BI,
  ZERO_BD,
  createUser,
  createLiquidityPosition
} from './helpers'

/**
 * Search through graph to find derived Eth per token.
 * @todo update to be derived ETH (add stablecoin estimates)
 **/
function findEthPerToken(token: Token, maxDepthReached: boolean): BigDecimal {
  if (token.wethPair != null) {
    const wethPair = Pair.load(token.wethPair)
    if (wethPair.token0 == token.id) {
      // our token is token 0
      return wethPair.token1Price
    } else {
      // our token is token 1
      return wethPair.token0Price
    }
  } else if (!maxDepthReached) {
    const allPairs = token.allPairs as Array<string>
    for (let i = 0; i < allPairs.length; i++) {
      const currentPair = Pair.load(allPairs[i])
      if (currentPair.token0 == token.id) {
        // our token is token 0
        const otherToken = Token.load(currentPair.token1)
        const otherTokenEthPrice = findEthPerToken(otherToken as Token, true)
        if (otherTokenEthPrice != null) {
          return currentPair.token1Price.times(otherTokenEthPrice)
        }
      } else {
        // our token is token 1
        const otherToken = Token.load(currentPair.token0)
        const otherTokenEthPrice = findEthPerToken(otherToken as Token, true)
        if (otherTokenEthPrice != null) {
          return currentPair.token0Price.times(otherTokenEthPrice)
        }
      }
    }
  }
  return ZERO_BD /** @todo may want to return null */
}

function isCompleteMint(mintId: string): boolean {
  return MintEvent.load(mintId).sender !== null // sufficient checks
}

export function handleTransfer(event: Transfer): void {
  const factory = UniswapFactory.load(FACTORY_ADDRESS)
  const transactionHash = event.transaction.hash.toHexString()

  // user stats
  const from = event.params.from
  createUser(from)
  const to = event.params.to
  createUser(to)

  let pair = Pair.load(event.address.toHexString())

  const transferId = event.address.toHexString() + '-' + transactionHash + '-' + from.toHex() + '-' + to.toHex()
  let liquidityTokenTransfer = new LiquidityTokenTransfer(transferId)
  liquidityTokenTransfer.pair = event.address.toHexString()
  liquidityTokenTransfer.fromUser = from.toHex()
  liquidityTokenTransfer.toUser = to.toHex()
  liquidityTokenTransfer.amount = event.params.value
  liquidityTokenTransfer.transferType = 'transfer'
  liquidityTokenTransfer.timestamp = event.block.timestamp
  liquidityTokenTransfer.transaction = transactionHash
  let exchangeContract = PairContract.bind(event.address)
  liquidityTokenTransfer.exchangeLiquidityTokenSupplyAfter = exchangeContract.totalSupply()
  liquidityTokenTransfer.exchangeLiquidityTokenSupplyBefore = liquidityTokenTransfer.exchangeLiquidityTokenSupplyAfter
  let fromUserLiquidityTokenBalanceAfter = exchangeContract.balanceOf(from)
  let toUserLiquidityTokenBalanceAfter = exchangeContract.balanceOf(to)
  // TODO: Get token reserves and save to the liquidity event
  // let token0Reserve, token1Reserve, blockTimestampLast = exchangeContract.getReserves();
  liquidityTokenTransfer.fromUserLiquidityTokenBalanceAfter = fromUserLiquidityTokenBalanceAfter
  liquidityTokenTransfer.toUserLiquidityTokenBalanceAfter = toUserLiquidityTokenBalanceAfter

  // liquidity token amount being transfered
  const value = convertTokenToDecimal(event.params.value, 18)
  let transaction = Transaction.load(transactionHash)

  if (transaction == null) {
    transaction = new Transaction(transactionHash)
    transaction.blockNumber = event.block.number
    transaction.timestamp = event.block.timestamp
    transaction.mints = []
    transaction.swaps = []
    transaction.burns = []
  }

  // can't be migrationin this case
  transaction.isMigration = false

  // load mints from transaction
  let mints = transaction.mints

  // mint
  if (from.toHexString() == ADDRESS_ZERO) {
    liquidityTokenTransfer.transferType = 'mint'
    liquidityTokenTransfer.exchangeLiquidityTokenSupplyBefore = liquidityTokenTransfer.exchangeLiquidityTokenSupplyAfter.minus(
      event.params.value
    )

    // update total supply
    pair.totalSupply = pair.totalSupply.plus(value)
    pair.save()

    if (mints.length === 0 || isCompleteMint(mints[mints.length - 1])) {
      let mint = new MintEvent(
        event.transaction.hash
          .toHexString()
          .concat('-')
          .concat(BigInt.fromI32(mints.length).toString())
      )
      mint.pair = pair.id
      mint.to = to
      mint.liquidity = value
      mint.save()

      // update mints in transaction
      const newMints = transaction.mints
      newMints.push(mint.id)
      transaction.mints = newMints

      // save entities
      transaction.save()
      factory.save()
    }
    // there was a remove in v1,now a mint could be a migration
    // if (transaction.removeLiquidityEvents.length > 0) {
    //   transaction.isMigration = true
    //   let migration = Migration.load(txnId)
    //   if (migration == null) {
    //     migration = new Migration(txnId)
    //   }
    //   let totalV1LiquidityRemoved = BigDecimal.fromString('0')
    //   let transactionRemoveLiquidityEvents = transaction.removeLiquidityEvents as Array<string>
    //   log.debug('Migration: {}', [txnId])
    //   for (let i = 0; i < transactionRemoveLiquidityEvents.length; i++) {
    //     log.debug('Migration RL Iter: {}', [i.toString()])
    //     let removeLiquidityEvent = RemoveLiquidityEvent.load(transactionRemoveLiquidityEvents[i])
    //     log.debug('Migration Remove Liquidity - Transaction: {}, Liquidity Id: {}, Iter: {}, UniTokens: {}', [
    //       txnId,
    //       transactionRemoveLiquidityEvents[i],
    //       i.toString(),
    //       removeLiquidityEvent.uniTokensBurned.toString()
    //     ])
    //     totalV1LiquidityRemoved.plus(removeLiquidityEvent.uniTokensBurned)
    //   }
    //   let totalV2LiquidityAdded = BigDecimal.fromString('0')
    //   let transactionMints = transaction.mints as Array<string>
    //   for (let i = 0; i < transactionMints.length; i++) {
    //     let mintEvent = MintEvent.load(transactionMints[i])
    //     totalV2LiquidityAdded.plus(mintEvent.liquidity)
    //   }
    //   migration.totalV1LiquidityRemoved = totalV1LiquidityRemoved
    //   migration.totalV2LiquidityAdded = totalV2LiquidityAdded
    //   migration.transaction = txnId
    //   migration.save()
    // }
  } else {
    const fromUserLiquidityPosition = createLiquidityPosition(event.address, from)
    fromUserLiquidityPosition.liquidityTokenBalance = fromUserLiquidityTokenBalanceAfter
    fromUserLiquidityPosition.exchangeLiquidityTokenSupply = liquidityTokenTransfer.exchangeLiquidityTokenSupplyAfter
    if (liquidityTokenTransfer.exchangeLiquidityTokenSupplyAfter == BigInt.fromI32(0)) {
      fromUserLiquidityPosition.poolOwnership = BigDecimal.fromString('0.0')
    } else {
      fromUserLiquidityPosition.poolOwnership = fromUserLiquidityPosition.liquidityTokenBalance
        .toBigDecimal()
        .div(fromUserLiquidityPosition.exchangeLiquidityTokenSupply.toBigDecimal())
    }
    fromUserLiquidityPosition.save()
    liquidityTokenTransfer.fromUserLiquidityTokenBalanceBefore = fromUserLiquidityTokenBalanceAfter.plus(
      event.params.value
    )
  }
  // burn
  if (event.params.to.toHexString() == ADDRESS_ZERO && event.params.from.toHexString() == pair.id) {
    liquidityTokenTransfer.transferType = 'mint'
    liquidityTokenTransfer.exchangeLiquidityTokenSupplyBefore = liquidityTokenTransfer.exchangeLiquidityTokenSupplyAfter.plus(
      event.params.value
    )
    pair.totalSupply = pair.totalSupply.minus(value)
    pair.save()

    // this is a new instance of a logical burn
    let burns = transaction.burns
    let burn = new BurnEvent(
      event.transaction.hash
        .toHexString()
        .concat('-')
        .concat(BigInt.fromI32(burns.length).toString())
    )
    burn.pair = pair.id
    burn.liquidity = value

    // if this logical burn included a fee mint, account for this
    if (mints.length !== 0 && !isCompleteMint(mints[mints.length - 1])) {
      let mint = MintEvent.load(mints[mints.length - 1])
      burn.feeTo = mint.to
      burn.feeLiquidity = mint.liquidity
      // remove the logical mint
      store.remove('Mint', mints[mints.length - 1])
      // update the transaction
      mints.pop()
      transaction.mints = mints
      transaction.save()
    }
    burn.save()
    burns.push(burn.id)
    transaction.burns = burns

    transaction.save()
  } else {
    const toUserLiquidityPosition = createLiquidityPosition(event.address, from)
    toUserLiquidityPosition.liquidityTokenBalance = toUserLiquidityTokenBalanceAfter
    toUserLiquidityPosition.exchangeLiquidityTokenSupply = liquidityTokenTransfer.exchangeLiquidityTokenSupplyAfter
    if (liquidityTokenTransfer.exchangeLiquidityTokenSupplyAfter == BigInt.fromI32(0)) {
      toUserLiquidityPosition.poolOwnership = BigDecimal.fromString('0.0')
    } else {
      toUserLiquidityPosition.poolOwnership = toUserLiquidityPosition.liquidityTokenBalance
        .toBigDecimal()
        .div(toUserLiquidityPosition.exchangeLiquidityTokenSupply.toBigDecimal())
    }
    toUserLiquidityPosition.save()
    liquidityTokenTransfer.toUserLiquidityTokenBalanceBefore = toUserLiquidityTokenBalanceAfter.minus(
      event.params.value
    )
  }

  if (liquidityTokenTransfer.exchangeLiquidityTokenSupplyBefore == BigInt.fromI32(0)) {
    liquidityTokenTransfer.fromUserPoolOwnershipBefore = BigDecimal.fromString('0.0')
    liquidityTokenTransfer.toUserPoolOwnershipBefore = BigDecimal.fromString('0.0')
  } else {
    liquidityTokenTransfer.fromUserPoolOwnershipBefore = liquidityTokenTransfer.fromUserLiquidityTokenBalanceBefore
      .toBigDecimal()
      .div(liquidityTokenTransfer.exchangeLiquidityTokenSupplyBefore.toBigDecimal())
    liquidityTokenTransfer.toUserPoolOwnershipBefore = liquidityTokenTransfer.toUserLiquidityTokenBalanceBefore
      .toBigDecimal()
      .div(liquidityTokenTransfer.exchangeLiquidityTokenSupplyBefore.toBigDecimal())
  }

  if (liquidityTokenTransfer.exchangeLiquidityTokenSupplyAfter == BigInt.fromI32(0)) {
    liquidityTokenTransfer.fromUserPoolOwnershipAfter = BigDecimal.fromString('0.0')
    liquidityTokenTransfer.toUserPoolOwnershipAfter = BigDecimal.fromString('0.0')
  } else {
    liquidityTokenTransfer.fromUserPoolOwnershipAfter = liquidityTokenTransfer.fromUserLiquidityTokenBalanceAfter
      .toBigDecimal()
      .div(liquidityTokenTransfer.exchangeLiquidityTokenSupplyAfter.toBigDecimal())
    liquidityTokenTransfer.toUserPoolOwnershipAfter = liquidityTokenTransfer.toUserLiquidityTokenBalanceAfter
      .toBigDecimal()
      .div(liquidityTokenTransfer.exchangeLiquidityTokenSupplyAfter.toBigDecimal())
  }
  transaction.save()
  liquidityTokenTransfer.save()
}

export function handleMint(event: Mint): void {
  let transaction = Transaction.load(event.transaction.hash.toHexString())
  let mints = transaction.mints
  let mint = MintEvent.load(mints[mints.length - 1])

  const pair = Pair.load(event.address.toHex())
  const uniswap = UniswapFactory.load(FACTORY_ADDRESS)

  const token0 = Token.load(pair.token0)
  const token1 = Token.load(pair.token1)

  // update exchange info (except balances, sync will cover that)
  const token0Amount = convertTokenToDecimal(event.params.amount0, token0.decimals)
  const token1Amount = convertTokenToDecimal(event.params.amount1, token1.decimals)

  pair.totalTxsCount = pair.totalTxsCount.plus(ONE_BI)
  pair.save()

  // ETH/USD prices
  const bundle = Bundle.load('1')
  bundle.ethPrice = getEthPriceInUSD(event.block.number)
  bundle.save()

  // update global token0 info
  const ethPerToken0 = findEthPerToken(token0 as Token, false)
  const usdPerToken0 = bundle.ethPrice.times(ethPerToken0)
  token0.derivedETH = ethPerToken0
  token0.totalLiquidity = token0.totalLiquidity.plus(token0Amount)

  // update global token1 info
  const ethPerToken1 = findEthPerToken(token1 as Token, false)
  const usdPerToken1 = bundle.ethPrice.times(ethPerToken1)
  token1.derivedETH = ethPerToken1
  token1.totalLiquidity = token1.totalLiquidity.plus(token1Amount)

  // get new amounts of USD and ETH for tracking
  const amountTotalETH = ethPerToken1.times(token1Amount).plus(ethPerToken0.times(token0Amount))
  const amountTotalUSD = usdPerToken1.times(token1Amount).plus(usdPerToken0.times(token0Amount))

  // update global liquidity
  uniswap.totalLiquidityETH = uniswap.totalLiquidityETH.plus(amountTotalETH)
  uniswap.totalLiquidityUSD = uniswap.totalLiquidityETH.times(bundle.ethPrice)

  // update exchange liquidity
  pair.reserveUSD = pair.reserveUSD.plus(amountTotalUSD)

  // save entities
  token0.save()
  token1.save()
  pair.save()
  uniswap.save()

  mint.sender = event.params.sender
  mint.pair = pair.id as string
  mint.amountUSD = amountTotalUSD as BigDecimal
  mint.amount0 = token0Amount as BigDecimal
  mint.amount1 = token1Amount as BigDecimal
  mint.save()
}

export function handleBurn(event: Burn): void {
  let transaction = Transaction.load(event.transaction.hash.toHexString())

  let burns = transaction.burns
  let burn = BurnEvent.load(burns[burns.length - 1])

  const pair = Pair.load(event.address.toHex())
  // TODO Add in global aggregations
  const factory = UniswapFactory.load(FACTORY_ADDRESS)

  //update token info
  const token0 = Token.load(pair.token0)
  const token1 = Token.load(pair.token1)
  const token0Amount = convertTokenToDecimal(event.params.amount0, token0.decimals)
  const token1Amount = convertTokenToDecimal(event.params.amount1, token1.decimals)

  pair.totalTxsCount = pair.totalTxsCount.plus(ONE_BI)

  //ETH / USD prices
  const bundle = Bundle.load('1')
  const ethPriceInUSD = getEthPriceInUSD(event.block.number)
  bundle.ethPrice = ethPriceInUSD
  bundle.save()

  // update global token0 info
  const ethPerToken0 = findEthPerToken(token0 as Token, false)
  const usdPerToken0 = bundle.ethPrice.times(ethPerToken0)
  token0.derivedETH = ethPerToken0
  token0.totalLiquidity = token0.totalLiquidity.minus(token0Amount)

  // update global token1 info
  const ethPerToken1 = findEthPerToken(token1 as Token, false)
  const usdPerToken1 = bundle.ethPrice.times(ethPerToken1)
  token1.derivedETH = ethPerToken1
  token1.totalLiquidity = token1.totalLiquidity.minus(token1Amount)

  // get new amounts of USD and ETH for tracking
  const amountTotalETH = ethPerToken1.times(token1Amount).plus(ethPerToken0.times(token0Amount))
  const amountTotalUSD = usdPerToken1.times(token1Amount).plus(usdPerToken0.times(token0Amount))

  // update global liquidity
  factory.totalLiquidityETH = factory.totalLiquidityETH.minus(amountTotalETH)
  factory.totalLiquidityUSD = factory.totalLiquidityETH.times(bundle.ethPrice)

  // update pair usd liquidity
  pair.reserveUSD = pair.reserveUSD.minus(amountTotalUSD)

  // update global counter and save
  token0.save()
  token1.save()
  pair.save()
  factory.save()

  // update burn
  burn.sender = event.params.sender
  burn.to = event.params.to
  burn.pair = pair.id as string
  burn.amountUSD = amountTotalUSD as BigDecimal
  burn.amount0 = token0Amount as BigDecimal
  burn.amount1 = token1Amount as BigDecimal
  burn.save()
}

export function handleSync(event: Sync): void {
  const pair = Pair.load(event.address.toHex())
  const token0 = Token.load(pair.token0)
  const token1 = Token.load(pair.token1)

  // update pair with new values
  pair.reserve0 = convertTokenToDecimal(event.params.reserve0, token0.decimals)
  pair.reserve1 = convertTokenToDecimal(event.params.reserve1, token1.decimals)
  pair.token0Price = pair.reserve0.div(pair.reserve1)
  pair.token1Price = pair.reserve1.div(pair.reserve0)
  pair.save()
}

export function handleSwap(event: Swap): void {
  const pair = Pair.load(event.address.toHexString())
  const token0 = Token.load(pair.token0)
  const token1 = Token.load(pair.token1)
  let amount0In = convertTokenToDecimal(event.params.amount0In, token0.decimals)
  let amount1In = convertTokenToDecimal(event.params.amount1In, token1.decimals)
  let amount0Out = convertTokenToDecimal(event.params.amount0Out, token0.decimals)
  let amount1Out = convertTokenToDecimal(event.params.amount1Out, token1.decimals)

  // totals for volume updates
  const amount0Total = amount0Out.plus(amount0In)
  const amount1Total = amount1Out.plus(amount1In)

  /**
   *  @todo flash swaps?
   */
  pair.volumeToken0 = pair.volumeToken0.plus(amount0Total)
  pair.volumeToken1 = pair.volumeToken1.plus(amount1Total)
  pair.totalTxsCount = pair.totalTxsCount.plus(ONE_BI)
  pair.save()

  // ETH/USD prices
  const bundle = Bundle.load('1')
  const ethPriceInUSD = getEthPriceInUSD(event.block.number)
  bundle.ethPrice = ethPriceInUSD
  bundle.save()

  const ethPerToken0 = findEthPerToken(token0 as Token, false)
  const usdPerToken0 = bundle.ethPrice.times(ethPerToken0)
  token0.derivedETH = ethPerToken0

  const ethPerToken1 = findEthPerToken(token1 as Token, false)
  const usdPerToken1 = bundle.ethPrice.times(ethPerToken1)
  token1.derivedETH = ethPerToken1

  // get total amounts of derived USD and ETH for tracking
  const amountTotalETH = ethPerToken1.times(amount1Total).plus(ethPerToken0.times(amount0Total))
  const amountTotalUSD = usdPerToken1.times(amount1Total).plus(usdPerToken0.times(amount0Total))

  // update token0 global volume and liquidity stats
  token0.totalLiquidity = token0.totalLiquidity.plus(amount0In).minus(amount0Out)
  token0.tradeVolume = token0.tradeVolume.plus(amount0In.plus(amount0Out))

  // update token0 global volume and liquidity stats
  token1.totalLiquidity = token1.totalLiquidity.plus(amount1In).minus(amount1Out)
  token1.tradeVolume = token1.tradeVolume.plus(amount1In.plus(amount1Out))

  // update pair volume data in derived USD
  pair.volumeUSD = pair.volumeUSD.plus(amountTotalUSD)

  // update global values
  const factory = UniswapFactory.load(FACTORY_ADDRESS)
  factory.totalVolumeUSD = factory.totalVolumeUSD.plus(amountTotalUSD)
  factory.totalVolumeETH = factory.totalVolumeETH.plus(amountTotalETH)

  // save entities
  pair.save()
  token0.save()
  token1.save()
  factory.save()

  let transaction = Transaction.load(event.transaction.hash.toHexString())
  if (transaction === null) {
    transaction = new Transaction(event.transaction.hash.toHexString())
    transaction.blockNumber = event.block.number
    transaction.timestamp = event.block.timestamp
    transaction.mints = []
    transaction.swaps = []
    transaction.burns = []
    transaction.save()
  }
  let swaps = transaction.swaps
  let swap = new SwapEvent(
    event.transaction.hash
      .toHexString()
      .concat('-')
      .concat(BigInt.fromI32(swaps.length).toString())
  )

  // update swap event
  swap.pair = pair.id
  swap.sender = event.params.sender
  swap.to = event.params.to
  swap.amount0In = amount0In
  swap.amount1In = amount1In
  swap.amount0Out = amount0Out
  swap.amount1Out = amount1Out
  swap.save()

  // update the transaction
  swaps.push(swap.id)
  transaction.swaps = swaps
  transaction.save()

  // update day entities
  updatePairDayData(event)
  updateUniswapDayData(event)
  updateTokenDayData(token0 as Token, event)
  updateTokenDayData(token1 as Token, event)

  // get ids for date related entities
  const timestamp = event.block.timestamp.toI32()
  const dayID = timestamp / 86400
  const dayPairID = event.address
    .toHexString()
    .concat('-')
    .concat(BigInt.fromI32(dayID).toString())

  // swap specific updating
  let uniswapDayData = UniswapDayData.load(dayID.toString())
  uniswapDayData.dailyVolumeUSD = uniswapDayData.dailyVolumeUSD.plus(amountTotalUSD)
  uniswapDayData.dailyVolumeETH = uniswapDayData.dailyVolumeETH.plus(amountTotalETH)
  uniswapDayData.save()

  // swap specific updating
  const pairDayData = PairDayData.load(dayPairID)
  pairDayData.dailyVolumeToken0 = pairDayData.dailyVolumeToken0.plus(amount0Total)
  pairDayData.dailyVolumeToken1 = pairDayData.dailyVolumeToken1.plus(amount1Total)
  pairDayData.dailyVolumeUSD = pairDayData.dailyVolumeUSD.plus(amountTotalUSD)
  pairDayData.save()

  // swap specific updating for token0
  const token0DayID = token0.id
    .toString()
    .concat('-')
    .concat(BigInt.fromI32(dayID).toString())
  let token0DayData = TokenDayData.load(token0DayID)
  token0DayData = TokenDayData.load(token0DayID)

  token0DayData.dailyVolumeToken = token0DayData.dailyVolumeToken.plus(amount0Total)

  token0DayData.dailyVolumeETH = token0DayData.dailyVolumeETH.plus(amount0Total.times(ethPerToken0))

  token0DayData.dailyVolumeUSD = token0DayData.dailyVolumeUSD.plus(
    amount0Total.times(ethPerToken0).times(bundle.ethPrice)
  )

  // save token day data
  token0DayData.save()

  // swap specific updating
  const token1DayID = token1.id
    .toString()
    .concat('-')
    .concat(BigInt.fromI32(dayID).toString())
  let token1DayData = TokenDayData.load(token1DayID)
  token1DayData = TokenDayData.load(token1DayID)

  token1DayData.dailyVolumeToken = token1DayData.dailyVolumeToken.plus(amount1Total)

  token1DayData.dailyVolumeETH = token1DayData.dailyVolumeETH.plus(amount1Total.times(ethPerToken1))

  token1DayData.dailyVolumeUSD = token1DayData.dailyVolumeUSD.plus(
    amount1Total.times(ethPerToken1).times(bundle.ethPrice)
  )

  // save token day data
  token1DayData.save()
}
