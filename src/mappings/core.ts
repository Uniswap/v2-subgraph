/* eslint-disable prefer-const */
import { BigInt, BigDecimal, store } from '@graphprotocol/graph-ts'
import {
  Pair,
  Token,
  UniswapFactory,
  Transaction,
  UniswapDayData,
  PairDayData,
  TokenDayData,
  Mint as MintEvent,
  Burn as BurnEvent,
  Swap as SwapEvent,
  Bundle
} from '../types/schema'
import { Pair as PairContract, Mint, Burn, Swap, Transfer, Sync } from '../types/templates/Pair/Pair'

import { updatePairDayData, updateTokenDayData, updateUniswapDayData } from './dayUpdates'

import { getEthPriceInUSD, findEthPerToken } from './pricing'
import {
  convertTokenToDecimal,
  ADDRESS_ZERO,
  FACTORY_ADDRESS,
  ONE_BI,
  createUser,
  createLiquidityPosition
} from './helpers'

function isCompleteMint(mintId: string): boolean {
  return MintEvent.load(mintId).sender !== null // sufficient checks
}

export function handleTransfer(event: Transfer): void {
  let factory = UniswapFactory.load(FACTORY_ADDRESS)
  let transactionHash = event.transaction.hash.toHexString()

  // user stats
  let from = event.params.from
  createUser(from)
  let to = event.params.to
  createUser(to)

  let pair = Pair.load(event.address.toHexString())
  let pairContract = PairContract.bind(event.address)
  let newTotalSupply = pairContract.totalSupply()

  // liquidity token amount being transfered
  let value = convertTokenToDecimal(event.params.value, 18)
  let transaction = Transaction.load(transactionHash)

  if (transaction == null) {
    transaction = new Transaction(transactionHash)
    transaction.blockNumber = event.block.number
    transaction.timestamp = event.block.timestamp
    transaction.mints = []
    transaction.swaps = []
    transaction.burns = []
  }

  // load mints from transaction
  let mints = transaction.mints

  // mint
  if (from.toHexString() == ADDRESS_ZERO) {
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
      mint.timestamp = transaction.timestamp
      mint.save()

      // update mints in transaction
      let newMints = transaction.mints
      newMints.push(mint.id)
      transaction.mints = newMints

      // save entities
      transaction.save()
      factory.save()
    }
  }

  // burn
  if (event.params.to.toHexString() == ADDRESS_ZERO && event.params.from.toHexString() == pair.id) {
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
    burn.timestamp = transaction.timestamp

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
  }

  if (from.toHexString() != ADDRESS_ZERO && from.toHexString() != pair.id) {
    let fromUserLiquidityPosition = createLiquidityPosition(event.address, from)
    fromUserLiquidityPosition.liquidityTokenBalance = convertTokenToDecimal(pairContract.balanceOf(from), 18)
    if (newTotalSupply == BigInt.fromI32(0)) {
      fromUserLiquidityPosition.poolOwnership = BigDecimal.fromString('0.0')
    } else {
      fromUserLiquidityPosition.poolOwnership = fromUserLiquidityPosition.liquidityTokenBalance.div(
        convertTokenToDecimal(newTotalSupply, 18)
      )
    }
    fromUserLiquidityPosition.save()
  }

  if (event.params.to.toHexString() != ADDRESS_ZERO && to.toHexString() != pair.id) {
    let toUserLiquidityPosition = createLiquidityPosition(event.address, to)
    toUserLiquidityPosition.liquidityTokenBalance = convertTokenToDecimal(pairContract.balanceOf(to), 18)
    if (newTotalSupply == BigInt.fromI32(0)) {
      toUserLiquidityPosition.poolOwnership = BigDecimal.fromString('0.0')
    } else {
      toUserLiquidityPosition.poolOwnership = toUserLiquidityPosition.liquidityTokenBalance.div(
        convertTokenToDecimal(newTotalSupply, 18)
      )
    }
    toUserLiquidityPosition.save()
  }

  transaction.save()
}

export function handleMint(event: Mint): void {
  let transaction = Transaction.load(event.transaction.hash.toHexString())
  let mints = transaction.mints
  let mint = MintEvent.load(mints[mints.length - 1])

  let pair = Pair.load(event.address.toHex())
  let uniswap = UniswapFactory.load(FACTORY_ADDRESS)

  let token0 = Token.load(pair.token0)
  let token1 = Token.load(pair.token1)

  // update exchange info (except balances, sync will cover that)
  let token0Amount = convertTokenToDecimal(event.params.amount0, token0.decimals)
  let token1Amount = convertTokenToDecimal(event.params.amount1, token1.decimals)

  pair.txCount = pair.txCount.plus(ONE_BI)
  pair.save()

  // ETH/USD prices
  let bundle = Bundle.load('1')
  bundle.ethPrice = getEthPriceInUSD()
  bundle.save()

  // update global token0 info
  let ethPerToken0 = findEthPerToken(token0 as Token, false)
  let usdPerToken0 = bundle.ethPrice.times(ethPerToken0)
  token0.derivedETH = ethPerToken0
  token0.totalLiquidity = token0.totalLiquidity.plus(token0Amount)

  // update global token1 info
  let ethPerToken1 = findEthPerToken(token1 as Token, false)
  let usdPerToken1 = bundle.ethPrice.times(ethPerToken1)
  token1.derivedETH = ethPerToken1
  token1.totalLiquidity = token1.totalLiquidity.plus(token1Amount)

  // get new amounts of USD and ETH for tracking
  let amountTotalETH = ethPerToken1.times(token1Amount).plus(ethPerToken0.times(token0Amount))
  let amountTotalUSD = usdPerToken1.times(token1Amount).plus(usdPerToken0.times(token0Amount))

  // update global liquidity
  uniswap.totalLiquidityETH = uniswap.totalLiquidityETH.plus(amountTotalETH)
  uniswap.totalLiquidityUSD = uniswap.totalLiquidityETH.times(bundle.ethPrice)
  uniswap.txCount = uniswap.txCount.plus(ONE_BI)

  // update exchange liquidity
  pair.reserveUSD = pair.reserve0.times(usdPerToken0).plus(pair.reserve1.times(usdPerToken1))

  // save entities
  token0.save()
  token1.save()
  pair.save()
  uniswap.save()

  mint.sender = event.params.sender
  mint.amount0 = token0Amount as BigDecimal
  mint.amount1 = token1Amount as BigDecimal
  mint.logIndex = event.logIndex
  mint.amountUSD = amountTotalUSD as BigDecimal
  mint.save()
}

export function handleBurn(event: Burn): void {
  let transaction = Transaction.load(event.transaction.hash.toHexString())

  let burns = transaction.burns
  let burn = BurnEvent.load(burns[burns.length - 1])

  let pair = Pair.load(event.address.toHex())
  // TODO Add in global aggregations
  let factory = UniswapFactory.load(FACTORY_ADDRESS)

  //update token info
  let token0 = Token.load(pair.token0)
  let token1 = Token.load(pair.token1)
  let token0Amount = convertTokenToDecimal(event.params.amount0, token0.decimals)
  let token1Amount = convertTokenToDecimal(event.params.amount1, token1.decimals)

  pair.txCount = pair.txCount.plus(ONE_BI)

  //ETH / USD prices
  let bundle = Bundle.load('1')
  let ethPriceInUSD = getEthPriceInUSD()
  bundle.ethPrice = ethPriceInUSD
  bundle.save()

  // update global token0 info
  let ethPerToken0 = findEthPerToken(token0 as Token, false)
  let usdPerToken0 = bundle.ethPrice.times(ethPerToken0)
  token0.derivedETH = ethPerToken0
  token0.totalLiquidity = token0.totalLiquidity.minus(token0Amount)

  // update global token1 info
  let ethPerToken1 = findEthPerToken(token1 as Token, false)
  let usdPerToken1 = bundle.ethPrice.times(ethPerToken1)
  token1.derivedETH = ethPerToken1
  token1.totalLiquidity = token1.totalLiquidity.minus(token1Amount)

  // get new amounts of USD and ETH for tracking
  let amountTotalETH = ethPerToken1.times(token1Amount).plus(ethPerToken0.times(token0Amount))
  let amountTotalUSD = usdPerToken1.times(token1Amount).plus(usdPerToken0.times(token0Amount))

  // update global liquidity
  factory.totalLiquidityETH = factory.totalLiquidityETH.minus(amountTotalETH)
  factory.totalLiquidityUSD = factory.totalLiquidityETH.times(bundle.ethPrice)
  factory.txCount = factory.txCount.plus(ONE_BI)

  // update pair usd liquidity
  pair.reserveUSD = pair.reserveUSD.minus(amountTotalUSD)

  // update global counter and save
  token0.save()
  token1.save()
  pair.save()
  factory.save()

  // update burn
  burn.sender = event.params.sender
  burn.amount0 = token0Amount as BigDecimal
  burn.amount1 = token1Amount as BigDecimal
  burn.to = event.params.to
  burn.logIndex = event.logIndex
  burn.amountUSD = amountTotalUSD as BigDecimal
  burn.save()
}

export function handleSync(event: Sync): void {
  let pair = Pair.load(event.address.toHex())
  let token0 = Token.load(pair.token0)
  let token1 = Token.load(pair.token1)

  // update pair with new values
  pair.reserve0 = convertTokenToDecimal(event.params.reserve0, token0.decimals)
  pair.reserve1 = convertTokenToDecimal(event.params.reserve1, token1.decimals)
  pair.token0Price = pair.reserve0.div(pair.reserve1)
  pair.token1Price = pair.reserve1.div(pair.reserve0)

  // for all pairs in each token - update their rserves

  pair.save()
}

export function handleSwap(event: Swap): void {
  let pair = Pair.load(event.address.toHexString())
  let token0 = Token.load(pair.token0)
  let token1 = Token.load(pair.token1)
  let amount0In = convertTokenToDecimal(event.params.amount0In, token0.decimals)
  let amount1In = convertTokenToDecimal(event.params.amount1In, token1.decimals)
  let amount0Out = convertTokenToDecimal(event.params.amount0Out, token0.decimals)
  let amount1Out = convertTokenToDecimal(event.params.amount1Out, token1.decimals)

  // totals for volume updates
  let amount0Total = amount0Out.plus(amount0In)
  let amount1Total = amount1Out.plus(amount1In)

  /**
   *  @todo flash swaps?
   */
  pair.volumeToken0 = pair.volumeToken0.plus(amount0Total)
  pair.volumeToken1 = pair.volumeToken1.plus(amount1Total)
  pair.txCount = pair.txCount.plus(ONE_BI)
  pair.save()

  // reset the factory total liquidity before adjusting
  let factory = UniswapFactory.load(FACTORY_ADDRESS)
  factory.totalLiquidityETH = factory.totalLiquidityETH.minus(
    token0.totalLiquidity.times(token0.derivedETH as BigDecimal)
  )
  factory.totalLiquidityETH = factory.totalLiquidityETH.minus(
    token1.totalLiquidity.times(token1.derivedETH as BigDecimal)
  )

  // ETH/USD prices
  let bundle = Bundle.load('1')
  let ethPriceInUSD = getEthPriceInUSD()
  bundle.ethPrice = ethPriceInUSD
  bundle.save()

  let ethPerToken0 = findEthPerToken(token0 as Token, false)
  let usdPerToken0 = bundle.ethPrice.times(ethPerToken0)
  token0.derivedETH = ethPerToken0

  let ethPerToken1 = findEthPerToken(token1 as Token, false)
  let usdPerToken1 = bundle.ethPrice.times(ethPerToken1)
  token1.derivedETH = ethPerToken1

  // get total amounts of derived USD and ETH for tracking
  let amountTotalETH = ethPerToken1.times(amount1Total).plus(ethPerToken0.times(amount0Total))
  let amountTotalUSD = usdPerToken1.times(amount1Total).plus(usdPerToken0.times(amount0Total))

  // update token0 global volume and liquidity stats
  token0.totalLiquidity = token0.totalLiquidity.plus(amount0In).minus(amount0Out)
  token0.tradeVolume = token0.tradeVolume.plus(amount0In.plus(amount0Out))
  token0.tradeVolumeUSD = token0.tradeVolumeUSD.plus(usdPerToken0.times(amount0Total))

  // update token0 global volume and liquidity stats
  token1.totalLiquidity = token1.totalLiquidity.plus(amount1In).minus(amount1Out)
  token1.tradeVolume = token1.tradeVolume.plus(amount1In.plus(amount1Out))
  token1.tradeVolumeUSD = token1.tradeVolumeUSD.plus(usdPerToken1.times(amount1Total))

  // update pair volume data in derived USD
  pair.volumeUSD = pair.volumeUSD.plus(amountTotalUSD)

  // reset factory liquidity amounts
  factory.totalLiquidityETH = factory.totalLiquidityETH.plus(
    token0.totalLiquidity
      .times(token0.derivedETH as BigDecimal)
      .plus(token1.totalLiquidity.times(token1.derivedETH as BigDecimal))
  )
  factory.totalLiquidityUSD = factory.totalLiquidityETH.times(bundle.ethPrice)

  // update global values
  factory.totalVolumeUSD = factory.totalVolumeUSD.plus(amountTotalUSD)
  factory.totalVolumeETH = factory.totalVolumeETH.plus(amountTotalETH)
  factory.txCount = factory.txCount.plus(ONE_BI)

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
  swap.timestamp = transaction.timestamp
  swap.sender = event.params.sender
  swap.amount0In = amount0In
  swap.amount1In = amount1In
  swap.amount0Out = amount0Out
  swap.amount1Out = amount1Out
  swap.to = event.params.to
  swap.logIndex = event.logIndex
  swap.amountUSD = amountTotalUSD
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
  let timestamp = event.block.timestamp.toI32()
  let dayID = timestamp / 86400
  let dayPairID = event.address
    .toHexString()
    .concat('-')
    .concat(BigInt.fromI32(dayID).toString())

  // swap specific updating
  let uniswapDayData = UniswapDayData.load(dayID.toString())
  uniswapDayData.dailyVolumeUSD = uniswapDayData.dailyVolumeUSD.plus(amountTotalUSD)
  uniswapDayData.dailyVolumeETH = uniswapDayData.dailyVolumeETH.plus(amountTotalETH)
  uniswapDayData.save()

  // swap specific updating
  let pairDayData = PairDayData.load(dayPairID)
  pairDayData.dailyVolumeToken0 = pairDayData.dailyVolumeToken0.plus(amount0Total)
  pairDayData.dailyVolumeToken1 = pairDayData.dailyVolumeToken1.plus(amount1Total)
  pairDayData.dailyVolumeUSD = pairDayData.dailyVolumeUSD.plus(amountTotalUSD)
  pairDayData.save()

  // swap specific updating for token0
  let token0DayID = token0.id
    .toString()
    .concat('-')
    .concat(BigInt.fromI32(dayID).toString())
  let token0DayData = TokenDayData.load(token0DayID)

  token0DayData.dailyVolumeToken = token0DayData.dailyVolumeToken.plus(amount0Total)
  token0DayData.dailyVolumeETH = token0DayData.dailyVolumeETH.plus(amount0Total.times(ethPerToken0))
  token0DayData.dailyVolumeUSD = token0DayData.dailyVolumeUSD.plus(
    amount0Total.times(ethPerToken0).times(bundle.ethPrice)
  )

  // save token day data
  token0DayData.save()

  // swap specific updating
  let token1DayID = token1.id
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
