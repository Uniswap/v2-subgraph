/* eslint-disable prefer-const */
import { log, BigInt, BigDecimal, store } from '@graphprotocol/graph-ts'
import {
  Exchange,
  Asset,
  UniswapFactory,
  Transaction,
  Migration,
  // UniswapDayData,
  // ExchangeDayData,
  // TokenDayData,
  MintEvent,
  Reserve,
  BurnEvent,
  SwapEvent,
  Bundle,
  RemoveLiquidityEvent,
  LiquidityTokenTransfer
} from '../../types/schema'
import {
  ExchangeV2Contract as ExchangeContract,
  Mint,
  Burn,
  Swap,
  Transfer,
  Sync
} from '../../types/templates/ExchangeV2Contract/ExchangeV2Contract'
// import {
//   updateUniswapHistoricalData,
//   updateExchangeHistoricalData,
//   updateTokenHistoricalData
// } from './historicalUpdates'
// import { updateExchangeDayData, updateTokenDayData, updateUniswapDayData } from './dayUpdates'
import { getEthPriceInUSD } from './priceOracle'
import {
  convertTokenToDecimal,
  ADDRESS_ZERO,
  ONE_BI,
  ZERO_BD,
  equalToZero,
  createUser,
  createLiquidityPosition
} from './helpers'

// function updateCounters(): void {
//   const uniswap = Uniswap.load('1')
//   uniswap.exchangeHistoryEntityCount = uniswap.exchangeHistoryEntityCount.plus(ONE_BI)
//   uniswap.uniswapHistoryEntityCount = uniswap.uniswapHistoryEntityCount.plus(ONE_BI)
//   uniswap.tokenHistoryEntityCount = uniswap.tokenHistoryEntityCount.plus(ONE_BI)
//   uniswap.reserveEntityCount = uniswap.reserveEntityCount.plus(ONE_BI)
//   uniswap.txCount = uniswap.txCount.plus(ONE_BI)
//   uniswap.save()
// }

/**
 * Search through graph to find derived Eth per token.
 * @todo update to be derived ETH (add stablecoin estimates)
 *
 **/
function findEthPerToken(token: Asset, maxDepthReached: boolean): BigDecimal {
  if (token.wethExchange != null) {
    const wethExchange = Exchange.load(token.wethExchange)
    if (wethExchange.base == token.id) {
      // our token is token 0
      return wethExchange.targetPrice
    } else {
      // our token is token 1
      return wethExchange.basePrice
    }
  } else if (!maxDepthReached) {
    const allExchanges = token.allExchanges as Array<string>
    for (let i = 0; i < allExchanges.length; i++) {
      const currentExchange = Exchange.load(allExchanges[i])
      if (currentExchange.base == token.id) {
        // our token is token 0
        const otherToken = Asset.load(currentExchange.target)
        const otherTokenEthPrice = findEthPerToken(otherToken as Asset, true)
        if (otherTokenEthPrice != null) {
          return currentExchange.targetPrice.times(otherTokenEthPrice)
        }
      } else {
        // our token is token 1
        const otherToken = Asset.load(currentExchange.base)
        const otherTokenEthPrice = findEthPerToken(otherToken as Asset, true)
        if (otherTokenEthPrice != null) {
          return currentExchange.basePrice.times(otherTokenEthPrice)
        }
      }
    }
  }
  return ZERO_BD /** @todo may want to return null */
}

function isCompleteMint(mintId: string): boolean {
  return MintEvent.load(mintId).sender !== null // sufficient checks
}

/**
 * Both mint and burn have at least 1 transfer event, an optional second,
 * both of which occur before the final <burn> or <mint> event.
 *
 * To handle this, we create optional fields in the mint and burn entities.
 * If we find a case with two transfers, we overwrite old values.
 *
 * 1. if mint, create new mint entity if needed
 * 2. same for burn
 * 3. in both bases, if the last entity in array is complete then we know
 *    that we must be on the second transfer in the order. In this case,
 *    overwrite the old values and shift them to "fee" slots (because first
 *    transfer must have been the fee transfer).
 */
export function handleTransfer(event: Transfer): void {
  const exchangeId = event.address.toHex()
  const factory = UniswapFactory.load('2')
  const txnId = event.transaction.hash.toHexString()
  const from = event.params.from
  createUser(from)
  const to = event.params.to
  createUser(to)

  let exchange = Exchange.load(exchangeId)

  const transferId = exchangeId + '-' + txnId + '-' + from.toHex() + '-' + to.toHex()
  let liquidityTokenTransfer = new LiquidityTokenTransfer(transferId)
  liquidityTokenTransfer.exchange = exchangeId
  liquidityTokenTransfer.fromUser = from.toHex()
  liquidityTokenTransfer.toUser = to.toHex()
  liquidityTokenTransfer.amount = event.params.value
  liquidityTokenTransfer.transferType = 'transfer'
  liquidityTokenTransfer.timestamp = event.block.timestamp
  liquidityTokenTransfer.transaction = txnId
  let exchangeContract = ExchangeContract.bind(event.address)
  liquidityTokenTransfer.exchangeLiquidityTokenSupplyAfter = exchangeContract.totalSupply()
  liquidityTokenTransfer.exchangeLiquidityTokenSupplyBefore = liquidityTokenTransfer.exchangeLiquidityTokenSupplyAfter
  let fromUserLiquidityTokenBalanceAfter = exchangeContract.balanceOf(from)
  let toUserLiquidityTokenBalanceAfter = exchangeContract.balanceOf(to)
  // TODO: Get token reserves and save to the liquidity event
  // let token0Reserve, token1Reserve, blockTimestampLast = exchangeContract.getReserves();
  liquidityTokenTransfer.fromUserLiquidityTokenBalanceAfter = fromUserLiquidityTokenBalanceAfter
  liquidityTokenTransfer.toUserLiquidityTokenBalanceAfter = toUserLiquidityTokenBalanceAfter

  const value = convertTokenToDecimal(event.params.value, 18)
  let transaction = Transaction.load(txnId)

  if (transaction == null) {
    transaction = new Transaction(txnId)
    transaction.blockNumber = event.block.number
    transaction.timestamp = event.block.timestamp

    transaction.addLiquidityEvents = []
    transaction.removeLiquidityEvents = []
    transaction.ethPurchaseEvents = []
    transaction.tokenPurchaseEvents = []

    transaction.mints = []
    transaction.swaps = []
    transaction.burns = []
  }
  transaction.isMigration = false

  let mints = transaction.mints
  // mint
  if (from.toHexString() == ADDRESS_ZERO) {
    liquidityTokenTransfer.transferType = 'mint'
    liquidityTokenTransfer.exchangeLiquidityTokenSupplyBefore = liquidityTokenTransfer.exchangeLiquidityTokenSupplyAfter.minus(
      event.params.value
    )
    if (mints.length === 0 || isCompleteMint(mints[mints.length - 1])) {
      /****** remove this  ************/
      factory.mintCount = factory.mintCount.plus(ONE_BI)
      /****** remove this  ************/

      let mint = new MintEvent(
        event.transaction.hash
          .toHexString()
          .concat('-')
          .concat(BigInt.fromI32(mints.length).toString())
      )
      mint.exchange = exchange.id

      /** remove this  ********/
      mint.timestamp = event.block.timestamp.toI32()
      mint.logIndex = event.logIndex
      /** remove this  ********/

      mint.to = to
      mint.liquidity = value
      mint.save()

      const newMints = transaction.mints
      newMints.push(mint.id)

      transaction.mints = newMints
      transaction.save()
      factory.save()
    }

    /** remove this  */
    // else {
    //   // second transfer before mint, overwrite old values
    //   const mintId = factory.mintCount.toString()
    //   const mint = MintEvent.load(mintId)
    //   mint.feeTo = mint.to
    //   mint.feeLiquidity = mint.liquidity
    //   mint.to = to
    //   mint.liquidity = value
    //   mint.save()
    // }

    // there was a remove in v1,now a mint could be a migration
    if (transaction.removeLiquidityEvents.length > 0) {
      transaction.isMigration = true
      let migration = Migration.load(txnId)
      if (migration == null) {
        migration = new Migration(txnId)
      }
      let totalV1LiquidityRemoved = BigDecimal.fromString('0')
      let transactionRemoveLiquidityEvents = transaction.removeLiquidityEvents as Array<string>
      log.debug('Migration: {}', [txnId])
      for (let i = 0; i < transactionRemoveLiquidityEvents.length; i++) {
        log.debug('Migration RL Iter: {}', [i.toString()])
        let removeLiquidityEvent = RemoveLiquidityEvent.load(transactionRemoveLiquidityEvents[i])
        log.debug('Migration Remove Liquidity - Transaction: {}, Liquidity Id: {}, Iter: {}, UniTokens: {}', [
          txnId,
          transactionRemoveLiquidityEvents[i],
          i.toString(),
          removeLiquidityEvent.uniTokensBurned.toString()
        ])
        totalV1LiquidityRemoved.plus(removeLiquidityEvent.uniTokensBurned)
      }
      let totalV2LiquidityAdded = BigDecimal.fromString('0')
      let transactionMints = transaction.mints as Array<string>
      for (let i = 0; i < transactionMints.length; i++) {
        let mintEvent = MintEvent.load(transactionMints[i])
        totalV2LiquidityAdded.plus(mintEvent.liquidity)
      }
      migration.totalV1LiquidityRemoved = totalV1LiquidityRemoved
      migration.totalV2LiquidityAdded = totalV2LiquidityAdded
      migration.transaction = txnId
      migration.save()
    }
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
  if (event.params.to.toHexString() === ADDRESS_ZERO && event.params.from.toHexString() === exchange.id) {
    liquidityTokenTransfer.transferType = 'mint'
    liquidityTokenTransfer.exchangeLiquidityTokenSupplyBefore = liquidityTokenTransfer.exchangeLiquidityTokenSupplyAfter.plus(
      event.params.value
    )

    exchange.totalUniToken = exchange.totalUniToken.minus(value)
    exchange.save()

    // this is a new instance of a logical burn
    let burns = transaction.burns
    let burn = new BurnEvent(
      event.transaction.hash
        .toHexString()
        .concat('-')
        .concat(BigInt.fromI32(burns.length).toString())
    )
    burn.exchange = exchange.id
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
    // update the transaction
    burns.push(burn.id)
    transaction.burns = burns
    transaction.save()

    // delete this
    // if (burns.length === 0 || isCompleteBurn(burns[burns.length - 1])) {
    //   factory.burnCount = factory.burnCount.plus(ONE_BI)
    //   const burnId = factory.burnCount.toString()
    //   const burn = new BurnEvent(burnId)
    //   burn.exchange = exchangeId
    //   burn.timestamp = event.block.timestamp.toI32()
    //   burn.logIndex = event.logIndex
    //   burn.liquidity = value
    //   const newBurns = transaction.burns
    //   newBurns.push(burn.id)
    //   transaction.burns = newBurns
    //   factory.save()
    //   burn.save()
    // } else {
    //   // second transfer before burn, overwrite old values
    //   const burnId = factory.burnCount.toString()
    //   const burn = BurnEvent.load(burnId)
    //   burn.feeTo = burn.from
    //   burn.feeLiquidity = burn.liquidity
    //   burn.from = from
    //   burn.liquidity = value
    //   burn.save()
    // }
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

  const exchange = Exchange.load(event.address.toHex())
  // TODO Add in global uniswap aggregations
  const factory = UniswapFactory.load('2')

  if (exchange !== null) {
    const token0 = Asset.load(exchange.base)
    const token1 = Asset.load(exchange.target)

    // update exchange info (except balances, sync will cover that)
    const token0Amount = convertTokenToDecimal(event.params.amount0, token0.decimals)
    const token1Amount = convertTokenToDecimal(event.params.amount1, token1.decimals)
    exchange.basePrice = exchange.baseBalance.div(exchange.targetBalance).truncate(18)
    exchange.targetPrice = exchange.targetBalance.div(exchange.baseBalance).truncate(18)
    exchange.totalTxsCount = exchange.totalTxsCount.plus(ONE_BI)
    exchange.save()

    // ETH/USD prices
    const bundle = Bundle.load('1')
    bundle.ethPrice = getEthPriceInUSD(event.block.number)
    bundle.save()

    // update global token0 info
    const ethPerToken0 = findEthPerToken(token0 as Asset, false)
    const usdPerToken0 = bundle.ethPrice.times(ethPerToken0)
    token0.derivedETH = ethPerToken0
    token0.totalLiquidity = token0.totalLiquidity.plus(token0Amount)
    token0.totalLiquidityETH = token0.totalLiquidity.times(ethPerToken0)

    // update global token1 info
    const ethPerToken1 = findEthPerToken(token1 as Asset, false)
    const usdPerToken1 = bundle.ethPrice.times(ethPerToken1)
    token1.derivedETH = ethPerToken1
    token1.totalLiquidity = token1.totalLiquidity.plus(token1Amount)
    token1.totalLiquidityETH = token1.totalLiquidity.times(ethPerToken1)

    // get new amounts of USD and ETH for tracking
    const amountTotalETH = ethPerToken1.times(token1Amount).plus(ethPerToken0.times(token0Amount))
    const amountTotalUSD = usdPerToken1.times(token1Amount).plus(usdPerToken0.times(token0Amount))

    // update global liquidity
    factory.totalLiquidityETH = factory.totalLiquidityETH.plus(amountTotalETH)
    factory.totalLiquidityUSD = factory.totalLiquidityETH.times(bundle.ethPrice)
    // update exchange liquidity
    exchange.combinedBalanceETH = exchange.combinedBalanceETH.plus(amountTotalETH)
    token0.save()
    token1.save()
    exchange.save()
    factory.save()

    mint.sender = event.params.sender
    mint.exchange = exchange.id as string
    mint.base = token0.id as string
    mint.target = token1.id as string
    mint.valueUSD = amountTotalUSD as BigDecimal
    mint.valueETH = amountTotalETH as BigDecimal
    mint.amountBase = token0Amount as BigDecimal
    mint.amountTarget = token1Amount as BigDecimal
    const newReserves = new Reserve(factory.reserveEntityCount.toString())
    newReserves.reserve0 = exchange.baseBalance.minus(token0Amount) as BigDecimal
    newReserves.reserve1 = exchange.targetBalance.minus(token1Amount) as BigDecimal
    newReserves.save()
    mint.reservesPre = newReserves.id
    mint.save()

    // update counters
    // updateCounters()

    // update historical entities
    // updateUniswapHistoricalData(event)
    // updateExchangeHistoricalData(event, 'mint')
    // updateTokenHistoricalData(token0 as Token, event)
    // updateTokenHistoricalData(token1 as Token, event)

    // update day entities
    // updateExchangeDayData(event)
    // updateUniswapDayData(event)
    // updateTokenDayData(token0 as Token, event)
    // updateTokenDayData(token1 as Token, event)
  }
}

export function handleBurn(event: Burn): void {
  let transaction = Transaction.load(event.transaction.hash.toHexString())

  let burns = transaction.burns
  let burn = BurnEvent.load(burns[burns.length - 1])

  const exchange = Exchange.load(event.address.toHex())
  // TODO Add in global aggregations
  const factory = UniswapFactory.load('2')

  if (exchange !== null) {
    //update token info
    const token0 = Asset.load(exchange.base)
    const token1 = Asset.load(exchange.target)
    const token0Amount = convertTokenToDecimal(event.params.amount0, token0.decimals)
    const token1Amount = convertTokenToDecimal(event.params.amount1, token1.decimals)

    // need to avoid div by 0, check balances first
    if (!equalToZero(exchange.targetBalance)) {
      exchange.basePrice = exchange.baseBalance.div(exchange.targetBalance).truncate(18)
    } else {
      exchange.basePrice = ZERO_BD
    }
    if (!equalToZero(exchange.baseBalance)) {
      exchange.targetPrice = exchange.targetBalance.div(exchange.baseBalance).truncate(18)
    } else {
      exchange.targetPrice = ZERO_BD
    }
    exchange.totalTxsCount = exchange.totalTxsCount.plus(ONE_BI)

    //ETH / USD prices
    const bundle = Bundle.load('1')
    const ethPriceInUSD = getEthPriceInUSD(event.block.number)
    bundle.ethPrice = ethPriceInUSD
    bundle.save()

    // update global token0 info
    const ethPerToken0 = findEthPerToken(token0 as Asset, false)
    const usdPerToken0 = bundle.ethPrice.times(ethPerToken0)
    token0.derivedETH = ethPerToken0
    token0.totalLiquidity = token0.totalLiquidity.minus(token0Amount)
    token0.totalLiquidityETH = token0.totalLiquidity.times(ethPerToken0)

    // update global token1 info
    const ethPerToken1 = findEthPerToken(token1 as Asset, false)
    const usdPerToken1 = bundle.ethPrice.times(ethPerToken1)
    token1.derivedETH = ethPerToken1
    token1.totalLiquidity = token1.totalLiquidity.minus(token1Amount)
    token1.totalLiquidityETH = token1.totalLiquidity.times(ethPerToken1)

    // get new amounts of USD and ETH for tracking
    const amountTotalETH = ethPerToken1.times(token1Amount).plus(ethPerToken0.times(token0Amount))
    const amountTotalUSD = usdPerToken1.times(token1Amount).plus(usdPerToken0.times(token0Amount))

    // update global liquidity
    factory.totalLiquidityETH = factory.totalLiquidityETH.minus(amountTotalETH)
    factory.totalLiquidityUSD = factory.totalLiquidityETH.times(bundle.ethPrice)

    // update global counter and save
    exchange.combinedBalanceETH = exchange.combinedBalanceETH.minus(amountTotalETH)
    token0.save()
    token1.save()
    exchange.save()
    factory.save()

    burn.sender = event.params.sender
    burn.to = event.params.to
    burn.exchange = exchange.id as string
    burn.base = token0.id as string
    burn.target = token1.id as string
    // burnEvent.valueUSD = amountTotalUSD as BigDecimal
    burn.valueETH = amountTotalETH as BigDecimal
    burn.amountBase = token0Amount as BigDecimal
    burn.amountTarget = token1Amount as BigDecimal
    const newReserves = new Reserve(factory.reserveEntityCount.toString())
    newReserves.reserve0 = exchange.baseBalance.plus(token0Amount) as BigDecimal
    newReserves.reserve1 = exchange.targetBalance.plus(token1Amount) as BigDecimal
    newReserves.save()
    burn.reservesPre = newReserves.id
    burn.save()

    // update counters
    // updateCounters()

    // update historical entities
    // updateUniswapHistoricalData(event)
    // updateExchangeHistoricalData(event, 'mint')
    // updateTokenHistoricalData(token0 as Token, event)
    // updateTokenHistoricalData(token1 as Token, event)

    // update day entities
    // updateExchangeDayData(event)
    // updateUniswapDayData(event)
    // updateTokenDayData(token0 as Token, event)
    // updateTokenDayData(token1 as Token, event)
  }
}

export function handleSync(event: Sync): void {
  // TODO: Add in global uniswap values
  const exchange = Exchange.load(event.address.toHex())
  const token0 = Asset.load(exchange.base)
  const token1 = Asset.load(exchange.target)

  // update with new values
  exchange.baseBalance = convertTokenToDecimal(event.params.reserve0, token0.decimals)
  exchange.targetBalance = convertTokenToDecimal(event.params.reserve1, token1.decimals)
  exchange.save()
}

export function handleSwap(event: Swap): void {
  /****** Update Exchange ******/
  const exchangeID = event.address.toHex()
  const exchange = Exchange.load(exchangeID)

  const token0 = Asset.load(exchange.base)
  const token1 = Asset.load(exchange.target)

  let amount0In = convertTokenToDecimal(event.params.amount0In, token0.decimals)
  let amount1In = convertTokenToDecimal(event.params.amount1In, token1.decimals)
  let amount0Out = convertTokenToDecimal(event.params.amount0Out, token0.decimals)
  let amount1Out = convertTokenToDecimal(event.params.amount1Out, token1.decimals)

  // protect against divide by 0

  /****@todo should price go in sync */
  // if (equalToZero(exchange.baseBalance)) {
  //   exchange.targetPrice = ZERO_BD
  // } else {
  //   exchange.targetPrice = exchange.targetBalance.div(exchange.baseBalance).truncate(18)
  // }
  // if (equalToZero(exchange.targetBalance)) {
  //   exchange.basePrice = ZERO_BD
  // } else {
  //   exchange.basePrice = exchange.baseBalance.div(exchange.targetBalance).truncate(18)
  // }
  // update exchange values and save

  exchange.tradeVolumeBase = exchange.tradeVolumeBase.plus(amount0In).plus(amount0Out)
  exchange.tradeVolumeTarget = exchange.tradeVolumeTarget.plus(amount1In).plus(amount1Out)
  exchange.totalTxsCount = exchange.totalTxsCount.plus(ONE_BI)
  exchange.save()

  // //ETH / USD prices
  // const bundle = Bundle.load('1')
  // const ethPriceInUSD = getEthPriceInUSD(event.block.number)
  // bundle.ethPrice = ethPriceInUSD
  // bundle.save()

  // const ethPerToken0 = findEthPerToken(token0 as Asset, false)
  // const usdPerToken0 = bundle.ethPrice.times(ethPerToken0)
  // token0.derivedETH = ethPerToken0

  // const ethPerToken1 = findEthPerToken(token1 as Asset, false)
  // const usdPerToken1 = bundle.ethPrice.times(ethPerToken1)
  // token1.derivedETH = ethPerToken1

  // // get new amounts of USD and ETH for tracking
  // const amountTotalETH = ethPerToken1.times(token1Amount).plus(ethPerToken0.times(token0Amount))
  // const amountTotalUSD = usdPerToken1.times(token1Amount).plus(usdPerToken0.times(token0Amount))

  // update token0 volume and liquidity stats
  // token0.totalLiquidity = token0.totalLiquidity.plus(amount0In)
  // token0.totalLiquidityETH = token0.totalLiquidity.times(ethPerToken0)
  // token0.tradeVolume = token0.tradeVolume.plus(token0Amount)
  // token0.tradeVolumeETH = token0.tradeVolumeETH.plus(token0Amount.times(ethPerToken0))
  // token0.tradeVolumeUSD = token0.tradeVolumeUSD.plus(token0AmountSigned.times(usdPerToken0))

  // // update token1 volume and liquidity stats
  // token1.totalLiquidity = token1.totalLiquidity.plus(token1AmountSigned)
  // token1.totalLiquidityETH = token1.totalLiquidity.times(ethPerToken1)
  // token1.tradeVolume = token1.tradeVolume.plus(token1Amount)
  // token1.tradeVolumeETH = token1.tradeVolumeETH.plus(token1Amount.times(ethPerToken1))
  // token1.tradeVolumeUSD = token0.tradeVolumeUSD.plus(token1AmountSigned.times(usdPerToken1))

  // // update exchange volume data
  // exchange.tradeVolumeETH = exchange.tradeVolumeETH.plus(amountTotalETH)
  // exchange.tradeVolumeUSD = exchange.tradeVolumeUSD.plus(amountTotalUSD)
  // exchange.combinedBalanceETH = exchange.combinedBalanceETH
  //   .plus(token0AmountSigned.times(ethPerToken0))
  //   .plus(token1AmountSigned.times(ethPerToken1))

  // update global values
  // TODO Add in global aggregations
  // const factory = UniswapFactory.load('2')
  // factory.totalVolumeUSD = factory.totalVolumeUSD.plus(amountTotalUSD)
  // factory.totalVolumeETH = factory.totalVolumeETH.plus(amountTotalETH)

  // save entities
  // exchange.save()
  // token0.save()
  // token1.save()
  // factory.save()

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

  // // create swap event and add to transaction
  // const swapId = factory.swapCount
  // factory.swapCount = factory.swapCount.plus(ONE_BI)

  let swaps = transaction.swaps
  let swap = new SwapEvent(
    event.transaction.hash
      .toHexString()
      .concat('-')
      .concat(BigInt.fromI32(swaps.length).toString())
  )

  swap.exchange = exchange.id
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

  // // update transaction with swap event
  // const txId = event.transaction.hash.toHexString()
  // const transaction = Transaction.load(txId.toString())
  // const newSwaps = transaction.swaps
  // newSwaps.push(swapEvent.id)
  // transaction.swaps = newSwaps
  // transaction.save()

  // update counters
  // updateCounters()

  // // update historical entities
  // updateUniswapHistoricalData(event)
  // updateExchangeHistoricalData(event, 'swap')
  // updateTokenHistoricalData(token0 as Token, event)
  // updateTokenHistoricalData(token1 as Token, event)

  // // update day entities
  // // updateExchangeDayData(event)
  // // updateUniswapDayData(event)
  // // updateTokenDayData(token0 as Token, event)
  // // updateTokenDayData(token1 as Token, event)

  // // get ids for date related entities
  // const timestamp = event.block.timestamp.toI32()
  // const dayID = timestamp / 86400
  // const dayExchangeID = event.address
  //   .toHexString()
  //   .concat('-')
  //   .concat(BigInt.fromI32(dayID).toString())

  // // swap specific updating
  // let uniswapDayData = UniswapDayData.load(dayID.toString())
  // uniswapDayData.dailyVolumeUSD = uniswapDayData.dailyVolumeUSD.plus(amountTotalUSD)
  // uniswapDayData.dailyVolumeETH = uniswapDayData.dailyVolumeETH.plus(amountTotalETH)
  // uniswapDayData.save()

  // // swap specific updating
  // const exchangeDayData = ExchangeDayData.load(dayExchangeID)
  // exchangeDayData.dailyVolumeToken0 = exchangeDayData.dailyVolumeToken0.plus(token0Amount)
  // exchangeDayData.dailyVolumeToken1 = exchangeDayData.dailyVolumeToken1.plus(token1Amount)
  // exchangeDayData.dailyVolumeUSD = exchangeDayData.dailyVolumeUSD.plus(amountTotalUSD)
  // exchangeDayData.save()

  // // swap specific updating
  // const token0DayID = token0.id
  //   .toString()
  //   .concat('-')
  //   .concat(BigInt.fromI32(dayID).toString())
  // let token0DayData = TokenDayData.load(token0DayID)
  // token0DayData = TokenDayData.load(token0DayID)
  // token0DayData.dailyVolumeToken = token0DayData.dailyVolumeToken.plus(token0Amount)
  // token0DayData.dailyVolumeETH = token0DayData.dailyVolumeETH.plus(token0Amount.times(ethPerToken0))
  // token0DayData.dailyVolumeUSD = token0DayData.dailyVolumeUSD.plus(
  //   token0Amount.times(ethPerToken0).times(bundle.ethPrice)
  // )
  // token0DayData.save()

  // // swap specific updating
  // const token1DayID = token1.id
  //   .toString()
  //   .concat('-')
  //   .concat(BigInt.fromI32(dayID).toString())
  // let token1DayData = TokenDayData.load(token1DayID)
  // token1DayData = TokenDayData.load(token1DayID)
  // token1DayData.dailyVolumeToken = token1DayData.dailyVolumeToken.plus(token1Amount)
  // token1DayData.dailyVolumeETH = token1DayData.dailyVolumeETH.plus(token1Amount.times(ethPerToken1))
  // token1DayData.dailyVolumeUSD = token1DayData.dailyVolumeUSD.plus(
  //   token1Amount.times(ethPerToken1).times(bundle.ethPrice)
  // )
  // token1DayData.save()
}
