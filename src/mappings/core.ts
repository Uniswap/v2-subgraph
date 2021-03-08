/* eslint-disable prefer-const */
import { BigInt, BigDecimal, store, Address, log } from "@graphprotocol/graph-ts";
import { Pool as PoolContract, Transfer, Mint, Burn, Swap, Sync } from "../types/templates/Pool/Pool";
import { DmmFactory, 
  Pair, 
  Pool,
  Token,
  Transaction,
  Mint as MintEvent,
  Burn as BurnEvent,
  Swap as SwapEvent,
  Bundle } from "../types/schema";
import { updatePairDayData, updateTokenDayData, updateUniswapDayData, updatePairHourData, updatePoolDayData, updatePoolHourData } from './dayUpdates';
import { getEthPriceInUSD, findEthPerToken, getTrackedVolumeUSD, getTrackedLiquidityUSD } from './pricing';
import { createUser, 
  convertTokenToDecimal, 
  ADDRESS_ZERO, 
  FACTORY_ADDRESS, 
  ONE_BI,
  ZERO_BD,
  BI_18,
  createLiquidityPosition,
  createLiquiditySnapshot } from "./utils";

function isCompleteMint(mintId: string): boolean {
  return MintEvent.load(mintId).sender !== null // sufficient checks
}

export function handleTransfer(event: Transfer): void {
  log.debug("___ handle transfer ___", [])
  // ignore initial transfers for first adds
  if (event.params.to.toHexString() == ADDRESS_ZERO && event.params.value.equals(BigInt.fromI32(1000))) {
    return
  }

  let factory = DmmFactory.load(FACTORY_ADDRESS)
  let transactionHash = event.transaction.hash.toHexString()

  // user stats
  let from = event.params.from
  createUser(from)
  let to = event.params.to
  createUser(to)

  // get pair and load contract
  // const pair = Pair.load(event.address.toHexString())
  let pool = Pool.load(event.address.toHexString())
  let poolContract = PoolContract.bind(event.address)
  let token0 = Token.load(pool.token0)
  let token1 = Token.load(pool.token1)

  let pair = Pair.load(token0.id + "-" + token1.id)

  // liquidity token amount being transfered
  let value = convertTokenToDecimal(event.params.value, BI_18)

  // get or create transaction
  let transaction = Transaction.load(transactionHash)
  if (transaction === null) {
    transaction = new Transaction(transactionHash)
    transaction.blockNumber = event.block.number
    transaction.timestamp = event.block.timestamp
    transaction.mints = []
    transaction.burns = []
    transaction.swaps = []
  }

  // mints
  let mints = transaction.mints
  if (from.toHexString() == ADDRESS_ZERO) {
    // update total supply
    pair.totalSupply = pair.totalSupply.plus(value)
    pair.save()

    // update total supply pool
    pool.totalSupply = pool.totalSupply.plus(value)
    pool.save()

    // create new mint if no mints so far or if last one is done already
    if (mints.length === 0 || isCompleteMint(mints[mints.length - 1])) {
      let mint = new MintEvent(
        event.transaction.hash
          .toHexString()
          .concat('-')
          .concat(BigInt.fromI32(mints.length).toString())
      )
      mint.transaction = transaction.id
      mint.pool = pool.id
      mint.pair = pair.id
      mint.to = to
      mint.liquidity = value
      mint.timestamp = transaction.timestamp
      mint.transaction = transaction.id
      mint.save()

      // update mints in transaction
      transaction.mints = mints.concat([mint.id])

      // save entities
      transaction.save()
      factory.save()
    }
  }

  // case where direct send first on ETH withdrawls
  if (event.params.to.toHexString() == pool.id) {
    let burns = transaction.burns
    let burn = new BurnEvent(
      event.transaction.hash
        .toHexString()
        .concat('-')
        .concat(BigInt.fromI32(burns.length).toString())
    )
    burn.transaction = transaction.id
    burn.pool = pool.id
    burn.pair = pair.id
    burn.liquidity = value
    burn.timestamp = transaction.timestamp
    burn.to = event.params.to
    burn.sender = event.params.from
    burn.needsComplete = true
    burn.transaction = transaction.id
    burn.save()

    // TODO: Consider using .concat() for handling array updates to protect
    // against unintended side effects for other code paths.
    burns.push(burn.id)
    transaction.burns = burns
    transaction.save()
  }

  // burn
  if (event.params.to.toHexString() == ADDRESS_ZERO && event.params.from.toHexString() == pool.id) {
    pair.totalSupply = pair.totalSupply.minus(value)
    pair.save()

    pool.totalSupply = pool.totalSupply.minus(value)
    pool.save()

    // this is a new instance of a logical burn
    let burns = transaction.burns
    let burn: BurnEvent
    if (burns.length > 0) {
      let currentBurn = BurnEvent.load(burns[burns.length - 1])
      if (currentBurn.needsComplete) {
        burn = currentBurn as BurnEvent
      } else {
        burn = new BurnEvent(
          event.transaction.hash
            .toHexString()
            .concat('-')
            .concat(BigInt.fromI32(burns.length).toString())
        )
        burn.transaction = transaction.id
        burn.needsComplete = false
        burn.pool = pool.id
        burn.pair = pair.id
        burn.liquidity = value
        burn.transaction = transaction.id
        burn.timestamp = transaction.timestamp
      }
    } else {
      burn = new BurnEvent(
        event.transaction.hash
          .toHexString()
          .concat('-')
          .concat(BigInt.fromI32(burns.length).toString())
      )
      burn.transaction = transaction.id
      burn.needsComplete = false
      burn.pair = pair.id
      burn.pool = pool.id
      burn.liquidity = value
      burn.transaction = transaction.id
      burn.timestamp = transaction.timestamp
    }

    // if this logical burn included a fee mint, account for this
    if (mints.length !== 0 && !isCompleteMint(mints[mints.length - 1])) {
      let mint = MintEvent.load(mints[mints.length - 1])
      burn.feeTo = mint.to
      burn.feeLiquidity = mint.liquidity
      // remove the logical mint
      store.remove('Mint', mints[mints.length - 1])
      // update the transaction

      // TODO: Consider using .slice().pop() to protect against unintended
      // side effects for other code paths.
      mints.pop()
      transaction.mints = mints
      transaction.save()
    }
    burn.save()
    // if accessing last one, replace it
    if (burn.needsComplete) {
      // TODO: Consider using .slice(0, -1).concat() to protect against
      // unintended side effects for other code paths.
      burns[burns.length - 1] = burn.id
    }
    // else add new one
    else {
      // TODO: Consider using .concat() for handling array updates to protect
      // against unintended side effects for other code paths.
      burns.push(burn.id)
    }
    transaction.burns = burns
    transaction.save()
  }
  // TODO fix liquidity position !!!!!!!!!!!!!!!
  if (from.toHexString() != ADDRESS_ZERO && from.toHexString() != pool.id) {
    let fromUserLiquidityPosition = createLiquidityPosition(event.address, pair.id, from)
    fromUserLiquidityPosition.liquidityTokenBalance = convertTokenToDecimal(poolContract.balanceOf(from), BI_18)
    fromUserLiquidityPosition.save()
    createLiquiditySnapshot(fromUserLiquidityPosition, event)
  }

  if (event.params.to.toHexString() != ADDRESS_ZERO && to.toHexString() != pool.id) {
    let toUserLiquidityPosition = createLiquidityPosition(event.address, pair.id, to)
    toUserLiquidityPosition.liquidityTokenBalance = convertTokenToDecimal(poolContract.balanceOf(to), BI_18)
    toUserLiquidityPosition.save()
    createLiquiditySnapshot(toUserLiquidityPosition, event)
  }

  transaction.save()
}

export function handleMint(event: Mint): void {
  log.debug("___ handle mint ___", [])
  log.debug("!__________ run to handle mint {}", [event.transaction.hash.toHexString()])
  let transaction = Transaction.load(event.transaction.hash.toHexString())
  let mints = transaction.mints
  let mint = MintEvent.load(mints[mints.length - 1])

  // const pair = Pair.load(event.address.toHex())
  log.debug("!!_______ pool address _____ {} ", [event.address.toHex()])
  let pool = Pool.load(event.address.toHex())
  let factory = DmmFactory.load(FACTORY_ADDRESS)

  let token0 = Token.load(pool.token0)
  let token1 = Token.load(pool.token1)

  let pairId = token0.id + "-" + token1.id
  let pair = Pair.load(pairId)

  // update exchange info (except balances, sync will cover that)
  let token0Amount = convertTokenToDecimal(event.params.amount0, token0.decimals)
  let token1Amount = convertTokenToDecimal(event.params.amount1, token1.decimals)

  // update txn counts
  token0.txCount = token0.txCount.plus(ONE_BI)
  token1.txCount = token1.txCount.plus(ONE_BI)

  // get new amounts of USD and ETH for tracking
  let bundle = Bundle.load('1')
  let amountTotalUSD = token1.derivedETH
    .times(token1Amount)
    .plus(token0.derivedETH.times(token0Amount))
    .times(bundle.ethPrice)

  // update txn counts
  pair.txCount = pair.txCount.plus(ONE_BI)
  factory.txCount = factory.txCount.plus(ONE_BI)
  pool.txCount = pool.txCount.plus(ONE_BI)
  log.debug("******* prepare save ************ ", [])
  // save entities
  token0.save()
  token1.save()
  pair.save()
  factory.save()
  pool.save()

  mint.sender = event.params.sender
  mint.amount0 = token0Amount as BigDecimal
  mint.amount1 = token1Amount as BigDecimal
  mint.logIndex = event.logIndex
  mint.amountUSD = amountTotalUSD as BigDecimal
  mint.save()

  // TODO update the LP position !!!!!!!!!!!
  let liquidityPosition = createLiquidityPosition(event.address, pair.id, mint.to as Address)
  createLiquiditySnapshot(liquidityPosition, event)

  // update day entities
  updatePairDayData(event, pairId)
  updatePairHourData(event, pairId)
  updatePoolDayData(event)
  updatePoolHourData(event)
  updateUniswapDayData(event)
  updateTokenDayData(token0 as Token, event)
  updateTokenDayData(token1 as Token, event)
}

export function handleBurn(event: Burn): void {
  log.debug("___ handle burnt ___", [])
  let transaction = Transaction.load(event.transaction.hash.toHexString())

  // safety check
  if (transaction === null) {
    return
  }

  let burns = transaction.burns
  let burn = BurnEvent.load(burns[burns.length - 1])

  // const pair = Pair.load(event.address.toHex())
  let pool = Pool.load(event.address.toHex())
  let uniswap = DmmFactory.load(FACTORY_ADDRESS)

  //update token info
  let token0 = Token.load(pool.token0)
  let token1 = Token.load(pool.token1)

  let pairId = token0.id + "-" + token1.id
  let pair = Pair.load(pairId)

  let token0Amount = convertTokenToDecimal(event.params.amount0, token0.decimals)
  let token1Amount = convertTokenToDecimal(event.params.amount1, token1.decimals)

  // update txn counts
  token0.txCount = token0.txCount.plus(ONE_BI)
  token1.txCount = token1.txCount.plus(ONE_BI)

  // get new amounts of USD and ETH for tracking
  let bundle = Bundle.load('1')
  let amountTotalUSD = token1.derivedETH
    .times(token1Amount)
    .plus(token0.derivedETH.times(token0Amount))
    .times(bundle.ethPrice)

  // update txn counts
  uniswap.txCount = uniswap.txCount.plus(ONE_BI)
  pair.txCount = pair.txCount.plus(ONE_BI)
  pool.txCount = pool.txCount.plus(ONE_BI)

  // update global counter and save
  token0.save()
  token1.save()
  pair.save()
  uniswap.save()
  pool.save()

  // update burn
  // burn.sender = event.params.sender
  burn.amount0 = token0Amount as BigDecimal
  burn.amount1 = token1Amount as BigDecimal
  // burn.to = event.params.to
  burn.logIndex = event.logIndex
  burn.amountUSD = amountTotalUSD as BigDecimal
  burn.save()

  // //TODO update the LP position !!!!!
  let liquidityPosition = createLiquidityPosition(event.address, pair.id, burn.sender as Address)
  createLiquiditySnapshot(liquidityPosition, event)

  // // update day entities
  updatePairDayData(event, pairId)
  updatePairHourData(event, pairId)
  updatePoolDayData(event)
  updatePoolHourData(event)
  updateUniswapDayData(event)
  updateTokenDayData(token0 as Token, event)
  updateTokenDayData(token1 as Token, event)
}

export function handleSwap(event: Swap): void {
  log.debug("___ handle swap ___", [])

  // const pair = Pair.load(event.address.toHexString())
  let pool = Pool.load(event.address.toHexString())
  let token0 = Token.load(pool.token0)
  let token1 = Token.load(pool.token1)
  let pairId = token0.id + "-" + token1.id
  let pair = Pair.load(pairId)

  let amount0In = convertTokenToDecimal(event.params.amount0In, token0.decimals)
  let amount1In = convertTokenToDecimal(event.params.amount1In, token1.decimals)
  let amount0Out = convertTokenToDecimal(event.params.amount0Out, token0.decimals)
  let amount1Out = convertTokenToDecimal(event.params.amount1Out, token1.decimals)
  let feePercent = convertTokenToDecimal(event.params.feeInPrecision, BI_18)
  // totals for volume updates
  let amount0Total = amount0Out.plus(amount0In)
  let amount1Total = amount1Out.plus(amount1In)

  // ETH/USD prices
  let bundle = Bundle.load('1')

  // get total amounts of derived USD and ETH for tracking
  let derivedAmountETH = token1.derivedETH
    .times(amount1Total)
    .plus(token0.derivedETH.times(amount0Total))
    .div(BigDecimal.fromString('2'))

  log.debug("_____________ swap __ derivedAmountETH ____  {}  eth price: {}", [derivedAmountETH.toString(), bundle.ethPrice.toString()])
  let derivedAmountUSD = derivedAmountETH.times(bundle.ethPrice)

  // only accounts for volume through white listed tokens
  let trackedAmountUSD = getTrackedVolumeUSD(amount0Total, token0 as Token, amount1Total, token1 as Token, pair as Pair)

  log.debug("++++++++ tracked amount usd  {}  ", [trackedAmountUSD.toString()])

  let trackedAmountETH: BigDecimal
  if (bundle.ethPrice.equals(ZERO_BD)) {
    trackedAmountETH = ZERO_BD
  } else {
    trackedAmountETH = trackedAmountUSD.div(bundle.ethPrice)
  }

  // update token0 global volume and token liquidity stats
  token0.tradeVolume = token0.tradeVolume.plus(amount0In.plus(amount0Out))
  token0.tradeVolumeUSD = token0.tradeVolumeUSD.plus(trackedAmountUSD)
  token0.untrackedVolumeUSD = token0.untrackedVolumeUSD.plus(derivedAmountUSD)

  // update token1 global volume and token liquidity stats
  token1.tradeVolume = token1.tradeVolume.plus(amount1In.plus(amount1Out))
  token1.tradeVolumeUSD = token1.tradeVolumeUSD.plus(trackedAmountUSD)
  token1.untrackedVolumeUSD = token1.untrackedVolumeUSD.plus(derivedAmountUSD)

  // update txn counts
  token0.txCount = token0.txCount.plus(ONE_BI)
  token1.txCount = token1.txCount.plus(ONE_BI)

  // update pair volume data, use tracked amount if we have it as its probably more accurate
  pair.volumeUSD = pair.volumeUSD.plus(trackedAmountUSD)
  pair.feeUSD = pair.feeUSD.plus(trackedAmountUSD.times(feePercent))
  pair.volumeToken0 = pair.volumeToken0.plus(amount0Total)
  pair.volumeToken1 = pair.volumeToken1.plus(amount1Total)
  pair.untrackedVolumeUSD = pair.untrackedVolumeUSD.plus(derivedAmountUSD)
  pair.untrackedFeeUSD = pair.untrackedFeeUSD.plus(derivedAmountUSD.times(feePercent))
  pair.txCount = pair.txCount.plus(ONE_BI)
  pair.save()


  // update pool volume data, use tracked amount if we have it as its probably more accurate
  pool.volumeUSD = pool.volumeUSD.plus(trackedAmountUSD)
  pool.feeUSD = pool.feeUSD.plus(trackedAmountUSD.times(feePercent))
  pool.volumeToken0 = pool.volumeToken0.plus(amount0Total)
  pool.volumeToken1 = pool.volumeToken1.plus(amount1Total)
  pool.untrackedVolumeUSD = pool.untrackedVolumeUSD.plus(derivedAmountUSD)
  pool.untrackedFeeUSD = pool.untrackedFeeUSD.plus(derivedAmountUSD.times(feePercent))
  pool.txCount = pool.txCount.plus(ONE_BI)
  pool.save()

  // update global values, only used tracked amounts for volume
  let factory = DmmFactory.load(FACTORY_ADDRESS)
  factory.totalVolumeUSD = factory.totalVolumeUSD.plus(trackedAmountUSD)
  factory.totalFeeUSD = factory.totalFeeUSD.plus(trackedAmountUSD.times(feePercent))
  factory.totalVolumeETH = factory.totalVolumeETH.plus(trackedAmountETH)
  factory.untrackedVolumeUSD = factory.untrackedVolumeUSD.plus(derivedAmountUSD)
  factory.untrackedFeeUSD = factory.untrackedFeeUSD.plus(derivedAmountUSD.times(feePercent))
  factory.txCount = factory.txCount.plus(ONE_BI)

  // save entities
  pool.save()
  pair.save()
  token0.save()
  token1.save()
  factory.save()
  log.debug("_________ swap saved factory ______________", [])

  let transaction = Transaction.load(event.transaction.hash.toHexString())
  if (transaction === null) {
    transaction = new Transaction(event.transaction.hash.toHexString())
    transaction.blockNumber = event.block.number
    transaction.timestamp = event.block.timestamp
    transaction.mints = []
    transaction.swaps = []
    transaction.burns = []
  }
  let swaps = transaction.swaps
  let swap = new SwapEvent(
    event.transaction.hash
      .toHexString()
      .concat('-')
      .concat(BigInt.fromI32(swaps.length).toString())
  )

  // update swap event
  swap.transaction = transaction.id
  swap.pool = pool.id
  swap.pair = pair.id
  swap.timestamp = transaction.timestamp
  swap.transaction = transaction.id
  swap.sender = event.params.sender
  swap.amount0In = amount0In
  swap.amount1In = amount1In
  swap.amount0Out = amount0Out
  swap.amount1Out = amount1Out
  swap.to = event.params.to
  swap.from = event.transaction.from
  swap.logIndex = event.logIndex
  // use the tracked amount if we have it
  swap.amountUSD = trackedAmountUSD === ZERO_BD ? derivedAmountUSD : trackedAmountUSD
  swap.feeUSD = swap.amountUSD.times(feePercent)
  swap.save()

  // update the transaction

  // TODO: Consider using .concat() for handling array updates to protect
  // against unintended side effects for other code paths.
  swaps.push(swap.id)
  transaction.swaps = swaps
  transaction.save()

  // // update day entities
  let pairDayData = updatePairDayData(event, pairId)
  let pairHourData = updatePairHourData(event, pairId)
  let poolDayData = updatePoolDayData(event)
  let poolHourData = updatePoolHourData(event)
  let uniswapDayData = updateUniswapDayData(event)
  let token0DayData = updateTokenDayData(token0 as Token, event)
  let token1DayData = updateTokenDayData(token1 as Token, event)

  // swap specific updating
  uniswapDayData.dailyVolumeUSD = uniswapDayData.dailyVolumeUSD.plus(trackedAmountUSD)
  uniswapDayData.dailyVolumeETH = uniswapDayData.dailyVolumeETH.plus(trackedAmountETH)
  uniswapDayData.dailyVolumeUntracked = uniswapDayData.dailyVolumeUntracked.plus(derivedAmountUSD)
  uniswapDayData.save()

  // swap specific updating for pair
  pairDayData.dailyVolumeToken0 = pairDayData.dailyVolumeToken0.plus(amount0Total)
  pairDayData.dailyVolumeToken1 = pairDayData.dailyVolumeToken1.plus(amount1Total)
  pairDayData.dailyVolumeUSD = pairDayData.dailyVolumeUSD.plus(trackedAmountUSD)
  pairDayData.save()

  // update hourly pair data
  pairHourData.hourlyVolumeToken0 = pairHourData.hourlyVolumeToken0.plus(amount0Total)
  pairHourData.hourlyVolumeToken1 = pairHourData.hourlyVolumeToken1.plus(amount1Total)
  pairHourData.hourlyVolumeUSD = pairHourData.hourlyVolumeUSD.plus(trackedAmountUSD)
  pairHourData.save()

  // swap specific updating for pool
  poolDayData.dailyVolumeToken0 = poolDayData.dailyVolumeToken0.plus(amount0Total)
  poolDayData.dailyVolumeToken1 = poolDayData.dailyVolumeToken1.plus(amount1Total)
  poolDayData.dailyVolumeUSD = poolDayData.dailyVolumeUSD.plus(trackedAmountUSD)
  poolDayData.save()

  // update hourly pool data
  poolHourData.hourlyVolumeToken0 = poolHourData.hourlyVolumeToken0.plus(amount0Total)
  poolHourData.hourlyVolumeToken1 = poolHourData.hourlyVolumeToken1.plus(amount1Total)
  poolHourData.hourlyVolumeUSD = poolHourData.hourlyVolumeUSD.plus(trackedAmountUSD)
  poolHourData.save()

  // swap specific updating for token0
  token0DayData.dailyVolumeToken = token0DayData.dailyVolumeToken.plus(amount0Total)
  token0DayData.dailyVolumeETH = token0DayData.dailyVolumeETH.plus(amount0Total.times(token1.derivedETH as BigDecimal))
  token0DayData.dailyVolumeUSD = token0DayData.dailyVolumeUSD.plus(
    amount0Total.times(token0.derivedETH as BigDecimal).times(bundle.ethPrice)
  )
  token0DayData.save()

  // swap specific updating
  token1DayData.dailyVolumeToken = token1DayData.dailyVolumeToken.plus(amount1Total)
  token1DayData.dailyVolumeETH = token1DayData.dailyVolumeETH.plus(amount1Total.times(token1.derivedETH as BigDecimal))
  token1DayData.dailyVolumeUSD = token1DayData.dailyVolumeUSD.plus(
    amount1Total.times(token1.derivedETH as BigDecimal).times(bundle.ethPrice)
  )
  token1DayData.save()
}

export function handleSync(event: Sync): void {
  log.debug("___ handle sync ___", [])
  // const pair = Pair.load(event.address.toHex())
  let pool = Pool.load(event.address.toHex())
  let token0 = Token.load(pool.token0)
  let token1 = Token.load(pool.token1)
  let pair = Pair.load(token0.id + "-" + token1.id)
  let factory = DmmFactory.load(FACTORY_ADDRESS)

  // reset factory liquidity by subtracting onluy tarcked liquidity
  factory.totalLiquidityETH = factory.totalLiquidityETH.minus(pool.trackedReserveETH as BigDecimal)

  // reset token total liquidity amounts
  token0.totalLiquidity = token0.totalLiquidity.minus(pool.reserve0)
  token1.totalLiquidity = token1.totalLiquidity.minus(pool.reserve1)

  // // remove save data for pair
  // pool.reserve0 = convertTokenToDecimal(event.params.reserve0, token0.decimals)
  // pool.reserve1 = convertTokenToDecimal(event.params.reserve1, token1.decimals)

  // if (pool.reserve1.notEqual(ZERO_BD)) pool.token0Price = pool.reserve0.div(pool.reserve1)
  // else pool.token0Price = ZERO_BD
  // if (pool.reserve0.notEqual(ZERO_BD)) pool.token1Price = pool.reserve1.div(pool.reserve0)
  // else pool.token1Price = ZERO_BD

  // pool.save()

  // add save for pool
  pool.reserve0 = convertTokenToDecimal(event.params.reserve0, token0.decimals)
  pool.reserve1 = convertTokenToDecimal(event.params.reserve1, token1.decimals)
  pool.vReserve0 = convertTokenToDecimal(event.params.vReserve0, token0.decimals)
  pool.vReserve1 = convertTokenToDecimal(event.params.vReserve1, token1.decimals)

  if (pool.reserve1.notEqual(ZERO_BD)) pool.token0Price = pool.reserve0.div(pool.reserve1)
  else pool.token0Price = ZERO_BD
  if (pool.reserve0.notEqual(ZERO_BD)) pool.token1Price = pool.reserve1.div(pool.reserve0)
  else pool.token1Price = ZERO_BD

  pool.save()


  // update ETH price now that reserves could have changed
  let bundle = Bundle.load('1')
  bundle.ethPrice = getEthPriceInUSD()
  log.debug("--------------eth price ----------------- {}", [bundle.ethPrice.toString()])
  bundle.save()

  token0.derivedETH = findEthPerToken(token0 as Token)
  token1.derivedETH = findEthPerToken(token1 as Token)
  token0.save()
  token1.save()

  // get tracked liquidity - will be 0 if neither is in whitelist
  let trackedLiquidityETH: BigDecimal
  if (bundle.ethPrice.notEqual(ZERO_BD)) {
    trackedLiquidityETH = getTrackedLiquidityUSD(pair.reserve0, token0 as Token, pair.reserve1, token1 as Token).div(
      bundle.ethPrice
    )
  } else {
    trackedLiquidityETH = ZERO_BD
  }

  // //TODO  use derived amounts within pair !!!
  // pair.trackedReserveETH = trackedLiquidityETH
  // pair.reserveETH = pair.reserve0
  //   .times(token0.derivedETH as BigDecimal)
  //   .plus(pair.reserve1.times(token1.derivedETH as BigDecimal))
  // pair.reserveUSD = pair.reserveETH.times(bundle.ethPrice)


  // use derived amounts within pool
  pool.trackedReserveETH = trackedLiquidityETH
  pool.reserveETH = pool.reserve0
    .times(token0.derivedETH as BigDecimal)
    .plus(pool.reserve1.times(token1.derivedETH as BigDecimal))
  pool.reserveUSD = pool.reserveETH.times(bundle.ethPrice)

  // use tracked amounts globally
  factory.totalLiquidityETH = factory.totalLiquidityETH.plus(trackedLiquidityETH)
  factory.totalLiquidityUSD = factory.totalLiquidityETH.times(bundle.ethPrice)

  // now correctly set liquidity amounts for each token
  token0.totalLiquidity = token0.totalLiquidity.plus(pair.reserve0)
  token1.totalLiquidity = token1.totalLiquidity.plus(pair.reserve1)

  // save entities
  pair.save()
  pool.save()
  factory.save()
  token0.save()
  token1.save()
}