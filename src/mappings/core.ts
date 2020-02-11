/* eslint-disable prefer-const */
import { log, BigInt, BigDecimal } from '@graphprotocol/graph-ts'
import {
  Exchange,
  User,
  OwnershipTokenBalance,
  OwnershipTokenTransfer,
  Token,
  Uniswap,
  Transaction,
  // UniswapDayData,
  // ExchangeDayData,
  // TokenDayData,
  Mint as MintEvent,
  Reserve,
  Sync as SyncEvent,
  Burn as BurnEvent,
  Swap as SwapEvent
} from '../types/schema'
import { Mint, Burn, Swap, Transfer, Sync } from '../types/templates/Exchange/Exchange'
// import {
//   updateUniswapHistoricalData,
//   updateExchangeHistoricalData,
//   updateTokenHistoricalData
// } from './historicalUpdates'
// import { updateExchangeDayData, updateTokenDayData, updateUniswapDayData } from './dayUpdates'
// import { getEthPriceInUSD } from './priceOracle'
import { convertTokenToDecimal, ONE_BI, ZERO_BD, equalToZero, createUser, createOwnershipTokenBalance } from '../helpers'

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
function findEthPerToken(token: Token, maxDepthReached: boolean): BigDecimal {
  if (token.wethExchange != null) {
    const wethExchange = Exchange.load(token.wethExchange.toHexString())
    if (wethExchange.token0 == token.id) {
      // our token is token 0
      return wethExchange.token1Price
    } else {
      // our token is token 1
      return wethExchange.token0Price
    }
  } else if (!maxDepthReached) {
    const allPairs = token.allPairs as Array<string>
    for (let i = 0; i < allPairs.length; i++) {
      const currentExchange = Exchange.load(allPairs[i])
      if (currentExchange.token0 == token.id) {
        // our token is token 0
        const otherToken = Token.load(currentExchange.token1)
        const otherTokenEthPrice = findEthPerToken(otherToken as Token, true)
        if (otherTokenEthPrice != null) {
          return currentExchange.token1Price.times(otherTokenEthPrice)
        }
      } else {
        // our token is token 1
        const otherToken = Token.load(currentExchange.token0)
        const otherTokenEthPrice = findEthPerToken(otherToken as Token, true)
        if (otherTokenEthPrice != null) {
          return currentExchange.token0Price.times(otherTokenEthPrice)
        }
      }
    }
  }
  return ZERO_BD /** @todo may want to return null */
}

function isCompleteMint(mintId: string): boolean {
  const mint = MintEvent.load(mintId)
  // check if a value set by mint event has been set
  return mint.sender !== null
}

function isCompleteBurn(burnId: string): boolean {
  const burn = BurnEvent.load(burnId)
  // check if a value set by burn  event has been set
  return burn.sender !== null
}

/**
 * If no txn entity yet create one.
 * If txn, loop through events and see if any reserves need to be filled out.
 * Update balances on exchange.
 */
export function handleSync(event: Sync): void {
  const uniswap = Uniswap.load('1')
  const exchangeId = event.address.toHex()
  const exchange = Exchange.load(exchangeId)
  const token0 = Token.load(exchange.token0)
  const token1 = Token.load(exchange.token1)
  const amount0 = convertTokenToDecimal(event.params.reserve0, token0.decimals)
  const amount1 = convertTokenToDecimal(event.params.reserve1, token1.decimals)
  const txn = event.transaction.hash.toHexString()
  let transaction = Transaction.load(txn)
  if (transaction !== null) {
    uniswap.reserveEntityCount = uniswap.reserveEntityCount.plus(ONE_BI)
    uniswap.save()
    const newReserves = new Reserve(uniswap.reserveEntityCount.toString())
    newReserves.reserve0 = amount0
    newReserves.reserve1 = amount1
    newReserves.save()
    const mints = transaction.mints
    if (mints.length > 0) {
      const latestMint = MintEvent.load(mints[mints.length - 1])
      if (latestMint.reservesPost == null) {
        latestMint.reservesPost = newReserves.id
        latestMint.save()
      }
    }
    const burns = transaction.burns
    if (burns.length > 0) {
      const latestBurn = BurnEvent.load(burns[burns.length - 1])
      if (latestBurn.reservesPost == null) {
        latestBurn.reservesPost = newReserves.id
        latestBurn.save()
      }
    }
  } else {
    transaction = new Transaction(txn)
    transaction.block = event.block.number.toI32()
    transaction.timestamp = event.block.timestamp.toI32()
    transaction.mints = []
    transaction.swaps = []
    transaction.burns = []
    transaction.syncs = []
  }
  const newSyncs = transaction.syncs
  const sync = new SyncEvent(uniswap.syncCount.toString())
  uniswap.syncCount = uniswap.syncCount.plus(ONE_BI)
  newSyncs.push(sync.id)
  transaction.syncs = newSyncs
  transaction.save()
  // update with new values
  exchange.token0Balance = amount0
  exchange.token1Balance = amount1
  exchange.save()
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
  const uniswap = Uniswap.load('1')
  const txn = event.transaction.hash.toHexString()
  const from = event.params.from
  const fromUser = createUser(from);
  const to = event.params.to
  const toUser = createUser(to);

  const fromOwnershipTokenBalance = createOwnershipTokenBalance(event.address, from);
  fromOwnershipTokenBalance.amount = fromOwnershipTokenBalance.amount.minus(event.params.value);
  if (fromOwnershipTokenBalance.amount.lt(BigInt.fromI32(0))) log.error("Ownership token balance < 0", [fromOwnershipTokenBalance.id]);
  fromOwnershipTokenBalance.save();

  const toOwnershipTokenBalance = createOwnershipTokenBalance(event.address, from);
  toOwnershipTokenBalance.amount = toOwnershipTokenBalance.amount.plus(event.params.value);
  if (toOwnershipTokenBalance.amount.lt(BigInt.fromI32(0))) log.error("Ownership token balance < 0", [toOwnershipTokenBalance.id]);
  toOwnershipTokenBalance.save();

  const poolTokenAmount = convertTokenToDecimal(event.params.value, 18)
  let transaction = Transaction.load(txn)
  if (transaction == null) {
    transaction = new Transaction(txn)
    transaction.block = event.block.number.toI32()
    transaction.timestamp = event.block.timestamp.toI32()
    transaction.mints = []
    transaction.swaps = []
    transaction.burns = []
    transaction.syncs = []
    transaction.save()
  }
  // mint
  if (from.toHexString() == '0x0000000000000000000000000000000000000000') {
    let mints = transaction.mints
    if (mints.length === 0 || isCompleteMint(mints[mints.length - 1])) {
      uniswap.mintCount = uniswap.mintCount.plus(ONE_BI)
      const mintId = uniswap.mintCount.toString()
      const mint = new MintEvent(mintId)
      mint.exchange = exchangeId
      mint.timestamp = event.block.timestamp.toI32()
      mint.logIndex = event.logIndex
      mint.to = to
      mint.liquidity = poolTokenAmount
      const newMints = transaction.mints
      newMints.push(mint.id)
      transaction.mints = newMints
      uniswap.save()
      transaction.save()
      mint.save()
    } else {
      // second transfer before mint, overwrite old values
      const mintId = uniswap.mintCount.toString()
      const mint = MintEvent.load(mintId)
      mint.feeTo = mint.to
      mint.feeLiquidity = mint.liquidity
      mint.to = to
      mint.liquidity = poolTokenAmount
      mint.save()
    }
  }
  // burn
  if (to.toHexString() == '0x0000000000000000000000000000000000000000') {
    let burns = transaction.burns
    if (burns.length === 0 || isCompleteBurn(burns[burns.length - 1])) {
      uniswap.burnCount = uniswap.burnCount.plus(ONE_BI)
      const burnId = uniswap.burnCount.toString()
      const burn = new BurnEvent(burnId)
      burn.exchange = exchangeId
      burn.timestamp = event.block.timestamp.toI32()
      burn.logIndex = event.logIndex
      burn.liquidity = poolTokenAmount
      const newBurns = transaction.burns
      newBurns.push(burn.id)
      transaction.burns = newBurns
      uniswap.save()
      transaction.save()
      burn.save()
    } else {
      // second transfer before burn, overwrite old values
      const burnId = uniswap.burnCount.toString()
      const burn = BurnEvent.load(burnId)
      burn.feeTo = burn.from
      burn.feeLiquidity = burn.liquidity
      burn.from = from
      burn.liquidity = poolTokenAmount
      burn.save()
    }
  }
}

export function handleMint(event: Mint): void {
  const exchangeId = event.address.toHex()
  const exchange = Exchange.load(exchangeId)
  const uniswap = Uniswap.load('1')

  // TODO: Figure out if there are any cases where the exchange would not be known about in advance 
  if (exchange !== null) {
    const token0 = Token.load(exchange.token0)
    const token1 = Token.load(exchange.token1)

    // update exchange info (except balances, sync will cover that)
    const token0Amount = convertTokenToDecimal(event.params.amount0, token0.decimals)
    const token1Amount = convertTokenToDecimal(event.params.amount1, token1.decimals)
    exchange.token0Price = exchange.token0Balance.div(exchange.token1Balance).truncate(18)
    exchange.token1Price = exchange.token1Balance.div(exchange.token0Balance).truncate(18)
    exchange.totalTxsCount = exchange.totalTxsCount.plus(ONE_BI)
    exchange.save()

    // ETH/USD prices
    // const bundle = Bundle.load('1')
    // bundle.ethPrice = getEthPriceInUSD(event.block.number)
    // bundle.save()

    // update global token0 info
    const ethPerToken0 = findEthPerToken(token0 as Token, false)
    // const usdPerToken0 = bundle.ethPrice.times(ethPerToken0)
    token0.derivedETH = ethPerToken0
    token0.totalLiquidityToken = token0.totalLiquidityToken.plus(token0Amount)
    token0.totalLiquidityETH = token0.totalLiquidityToken.times(ethPerToken0)

    // update global token1 info
    const ethPerToken1 = findEthPerToken(token1 as Token, false)
    // const usdPerToken1 = bundle.ethPrice.times(ethPerToken1)
    token1.derivedETH = ethPerToken1
    token1.totalLiquidityToken = token1.totalLiquidityToken.plus(token1Amount)
    token1.totalLiquidityETH = token1.totalLiquidityToken.times(ethPerToken1)

    // get new amounts of USD and ETH for tracking
    const amountTotalETH = ethPerToken1.times(token1Amount).plus(ethPerToken0.times(token0Amount))
    // const amountTotalUSD = usdPerToken1.times(token1Amount).plus(usdPerToken0.times(token0Amount))

    // update global liquidity
    uniswap.totalLiquidityETH = uniswap.totalLiquidityETH.plus(amountTotalETH)
    // uniswap.totalLiquidityUSD = uniswap.totalLiquidityETH.times(bundle.ethPrice)

    // update exchange liquidity
    exchange.combinedBalanceETH = exchange.combinedBalanceETH.plus(amountTotalETH)
    token0.save()
    token1.save()
    exchange.save()
    uniswap.save()

    // now we know we can complete mint event that was created during transfer
    const mintId = uniswap.mintCount.toString()
    const mintEvent = MintEvent.load(mintId)
    mintEvent.sender = event.params.sender
    mintEvent.exchange = exchange.id as string
    mintEvent.token0 = token0.id as string
    mintEvent.token1 = token1.id as string
    // mintEvent.valueUSD = amountTotalUSD as BigDecimal
    mintEvent.valueETH = amountTotalETH as BigDecimal
    mintEvent.amount0 = token0Amount as BigDecimal
    mintEvent.amount1 = token1Amount as BigDecimal
    // TODO: Is this better using exchange_address-token_address as the ID?
    const newReserves = new Reserve(uniswap.reserveEntityCount.toString())
    newReserves.reserve0 = exchange.token0Balance.minus(token0Amount) as BigDecimal
    newReserves.reserve1 = exchange.token1Balance.minus(token1Amount) as BigDecimal
    newReserves.save()
    mintEvent.reservesPre = newReserves.id
    mintEvent.save()

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
  const exchangeId = event.address.toHex()
  const exchange = Exchange.load(exchangeId)
  const uniswap = Uniswap.load('1')

  if (exchange !== null) {
    //update token info
    const token0 = Token.load(exchange.token0)
    const token1 = Token.load(exchange.token1)
    const token0Amount = convertTokenToDecimal(event.params.amount0, token0.decimals)
    const token1Amount = convertTokenToDecimal(event.params.amount1, token1.decimals)

    // need to avoid div by 0, check balances first
    if (!equalToZero(exchange.token1Balance)) {
      exchange.token0Price = exchange.token0Balance.div(exchange.token1Balance).truncate(18)
    } else {
      exchange.token0Price = ZERO_BD
    }
    if (!equalToZero(exchange.token0Balance)) {
      exchange.token1Price = exchange.token1Balance.div(exchange.token0Balance).truncate(18)
    } else {
      exchange.token1Price = ZERO_BD
    }
    exchange.totalTxsCount = exchange.totalTxsCount.plus(ONE_BI)

    //ETH / USD prices
    // const bundle = Bundle.load('1')
    // const ethPriceInUSD = getEthPriceInUSD(event.block.number)
    // bundle.ethPrice = ethPriceInUSD
    // bundle.save()

    // update global token0 info
    const ethPerToken0 = findEthPerToken(token0 as Token, false)
    // const usdPerToken0 = bundle.ethPrice.times(ethPerToken0)
    token0.derivedETH = ethPerToken0
    token0.totalLiquidityToken = token0.totalLiquidityToken.minus(token0Amount)
    token0.totalLiquidityETH = token0.totalLiquidityToken.times(ethPerToken0)

    // update global token1 info
    const ethPerToken1 = findEthPerToken(token1 as Token, false)
    // const usdPerToken1 = bundle.ethPrice.times(ethPerToken1)
    token1.derivedETH = ethPerToken1
    token1.totalLiquidityToken = token1.totalLiquidityToken.minus(token1Amount)
    token1.totalLiquidityETH = token1.totalLiquidityToken.times(ethPerToken1)

    // get new amounts of USD and ETH for tracking
    const amountTotalETH = ethPerToken1.times(token1Amount).plus(ethPerToken0.times(token0Amount))
    // const amountTotalUSD = usdPerToken1.times(token1Amount).plus(usdPerToken0.times(token0Amount))

    // update global liquidity
    uniswap.totalLiquidityETH = uniswap.totalLiquidityETH.minus(amountTotalETH)
    // uniswap.totalLiquidityUSD = uniswap.totalLiquidityETH.times(bundle.ethPrice)

    // update global counter and save
    exchange.combinedBalanceETH = exchange.combinedBalanceETH.minus(amountTotalETH)
    token0.save()
    token1.save()
    exchange.save()
    uniswap.save()

    // update the remaining values for mint
    const burnId = uniswap.burnCount.toString()
    const burnEvent = BurnEvent.load(burnId)
    burnEvent.sender = event.params.sender
    burnEvent.from = event.params.to
    burnEvent.exchange = exchange.id as string
    burnEvent.token0 = token0.id as string
    burnEvent.token1 = token1.id as string
    // burnEvent.valueUSD = amountTotalUSD as BigDecimal
    burnEvent.valueETH = amountTotalETH as BigDecimal
    burnEvent.amount0 = token0Amount as BigDecimal
    burnEvent.amount1 = token1Amount as BigDecimal
    const newReserves = new Reserve(uniswap.reserveEntityCount.toString())
    newReserves.reserve0 = exchange.token0Balance.plus(token0Amount) as BigDecimal
    newReserves.reserve1 = exchange.token1Balance.plus(token1Amount) as BigDecimal
    newReserves.save()
    burnEvent.reservesPre = newReserves.id
    burnEvent.save()

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

export function handleSwap(event: Swap): void {
  /****** Update Exchange ******/
  const exchangeID = event.address.toHex()
  const exchange = Exchange.load(exchangeID)
  if (exchange !== null) {
    const token0 = Token.load(exchange.token0)
    const token1 = Token.load(exchange.token1)

    // create values for tracking, signed and unsigned
    let token0Amount: BigDecimal
    let token1Amount: BigDecimal
    let token0AmountSigned: BigDecimal
    let token1AmountSigned: BigDecimal

    // based on which token was bought, set values
    if (event.params.tokenIn.toHexString() == token0.id) {
      token0Amount = convertTokenToDecimal(event.params.amountIn, token0.decimals)
      token1Amount = convertTokenToDecimal(event.params.amountOut, token1.decimals)
      token0AmountSigned = token0Amount
      token1AmountSigned = token1Amount.times(BigDecimal.fromString('-1'))
    } else {
      token0Amount = convertTokenToDecimal(event.params.amountOut, token0.decimals)
      token1Amount = convertTokenToDecimal(event.params.amountIn, token1.decimals)
      token0AmountSigned = token0Amount.times(BigDecimal.fromString('-1'))
      token1AmountSigned = token1Amount
    }

    // protect against divide by 0
    if (equalToZero(exchange.token0Balance)) {
      exchange.token1Price = ZERO_BD
    } else {
      exchange.token1Price = exchange.token1Balance.div(exchange.token0Balance).truncate(18)
    }
    if (equalToZero(exchange.token1Balance)) {
      exchange.token0Price = ZERO_BD
    } else {
      exchange.token0Price = exchange.token0Balance.div(exchange.token1Balance).truncate(18)
    }
    // update exchange values and save
    exchange.tradeVolumeToken0 = exchange.tradeVolumeToken0.plus(token0Amount)
    exchange.tradeVolumeToken1 = exchange.tradeVolumeToken0.plus(token1Amount)
    exchange.totalTxsCount = exchange.totalTxsCount.plus(ONE_BI)
    exchange.save()

    //ETH / USD prices
    // const bundle = Bundle.load('1')
    // const ethPriceInUSD = getEthPriceInUSD(event.block.number)
    // bundle.ethPrice = ethPriceInUSD
    // bundle.save()

    const ethPerToken0 = findEthPerToken(token0 as Token, false)
    // const usdPerToken0 = bundle.ethPrice.times(ethPerToken0)
    token0.derivedETH = ethPerToken0

    const ethPerToken1 = findEthPerToken(token1 as Token, false)
    // const usdPerToken1 = bundle.ethPrice.times(ethPerToken1)
    token1.derivedETH = ethPerToken1

    // get new amounts of USD and ETH for tracking
    const amountTotalETH = ethPerToken1.times(token1Amount).plus(ethPerToken0.times(token0Amount))
    // const amountTotalUSD = usdPerToken1.times(token1Amount).plus(usdPerToken0.times(token0Amount))

    // update token0 volume and liquidity stats
    token0.totalLiquidityToken = token0.totalLiquidityToken.plus(token0AmountSigned)
    token0.totalLiquidityETH = token0.totalLiquidityToken.times(ethPerToken0)
    token0.tradeVolumeToken = token0.tradeVolumeToken.plus(token0Amount)
    token0.tradeVolumeETH = token0.tradeVolumeETH.plus(token0Amount.times(ethPerToken0))
    // token0.tradeVolumeUSD = token0.tradeVolumeUSD.plus(token0AmountSigned.times(usdPerToken0))

    // update token1 volume and liquidity stats
    token1.totalLiquidityToken = token1.totalLiquidityToken.plus(token1AmountSigned)
    token1.totalLiquidityETH = token1.totalLiquidityToken.times(ethPerToken1)
    token1.tradeVolumeToken = token1.tradeVolumeToken.plus(token1Amount)
    token1.tradeVolumeETH = token1.tradeVolumeETH.plus(token1Amount.times(ethPerToken1))
    // token1.tradeVolumeUSD = token0.tradeVolumeUSD.plus(token1AmountSigned.times(usdPerToken1))

    // update exchange volume data
    exchange.tradeVolumeETH = exchange.tradeVolumeETH.plus(amountTotalETH)
    // exchange.tradeVolumeUSD = exchange.tradeVolumeUSD.plus(amountTotalUSD)
    exchange.combinedBalanceETH = exchange.combinedBalanceETH
      .plus(token0AmountSigned.times(ethPerToken0))
      .plus(token1AmountSigned.times(ethPerToken1))

    // update global values
    const uniswap = Uniswap.load('1')
    // uniswap.totalVolumeUSD = uniswap.totalVolumeUSD.plus(amountTotalUSD)
    uniswap.totalVolumeETH = uniswap.totalVolumeETH.plus(amountTotalETH)

    // save entities
    exchange.save()
    token0.save()
    token1.save()
    uniswap.save()

    // create swap event and add to transaction
    const swapId = uniswap.swapCount
    uniswap.swapCount = uniswap.swapCount.plus(ONE_BI)
    const swapEvent = new SwapEvent(swapId.toString())
    swapEvent.exchange = exchange.id
    swapEvent.timestamp = event.block.timestamp.toI32()
    if (event.params.tokenIn.toHexString() == token0.id) {
      // token in is 0
      const tokenInAmount = convertTokenToDecimal(event.params.amountIn, token0.decimals)
      const tokenOutAmount = convertTokenToDecimal(event.params.amountOut, token1.decimals)
      swapEvent.amountSold = tokenInAmount
      swapEvent.amountBought = tokenOutAmount
      swapEvent.tokenBought = token1.id
      swapEvent.tokenSold = token0.id
    } else {
      // token in is 1
      const tokenInAmount = convertTokenToDecimal(event.params.amountIn, token1.decimals)
      const tokenOutAmount = convertTokenToDecimal(event.params.amountOut, token0.decimals)
      swapEvent.amountSold = tokenInAmount
      swapEvent.amountBought = tokenOutAmount
      swapEvent.tokenBought = token0.id
      swapEvent.tokenSold = token1.id
    }
    // swapEvent.valueUSD = amountTotalUSD
    swapEvent.valueETH = amountTotalETH
    swapEvent.logIndex = event.logIndex
    swapEvent.to = event.params.to
    swapEvent.sender = event.params.sender
    swapEvent.save()

    // update transaction with swap event
    const txId = event.transaction.hash.toHexString()
    const transaction = Transaction.load(txId.toString())
    const newSwaps = transaction.swaps
    newSwaps.push(swapEvent.id)
    transaction.swaps = newSwaps
    transaction.save()

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
}
