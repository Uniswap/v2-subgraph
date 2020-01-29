import { Address, BigInt, BigDecimal, log } from '@graphprotocol/graph-ts'
import {
  Exchange,
  Bundle,
  Token,
  User,
  UserExchangeData,
  Uniswap,
  AddLiquidityEvent,
  RemoveLiquidityEvent,
  SwapEvent,
  Transaction,
  UniswapDayData,
  UniswapHistoricalData,
  ExchangeHistoricalData,
  ExchangeDayData,
  TokenHistoricalData,
  TokenDayData
} from '../types/schema'
import { Mint, Burn, Swap } from '../types/Exchange/Exchange'
import { getEthPriceInUSD } from '../mappings/priceOracle'
import { convertTokenToDecimal, oneBigInt, zeroBD, zeroBigInt, equalToZero } from '../helpers'

function createUserDataEntity(id: string, user: Address, exchange: Address): void {
  const userExchangeData = new UserExchangeData(id)
  userExchangeData.userAddress = user
  userExchangeData.user = user.toHex()
  userExchangeData.exchange = exchange.toHexString()
  userExchangeData.token0Deposited = zeroBD()
  userExchangeData.token0Withdrawn = zeroBD()
  userExchangeData.token1Deposited = zeroBD()
  userExchangeData.token1Withdrawn = zeroBD()
  userExchangeData.uniTokenBalance = zeroBD()
  userExchangeData.token0Bought = zeroBD()
  userExchangeData.token0Sold = zeroBD()
  userExchangeData.token1Bought = zeroBD()
  userExchangeData.token1Sold = zeroBD()
  userExchangeData.save()
}

function createUniswapDayData(dayID: i32, dayStartTimestamp: i32): void {
  const uniswapDayData = new UniswapDayData(dayID.toString())
  uniswapDayData.date = dayStartTimestamp
  uniswapDayData.dailyVolumeUSD = zeroBD()
  uniswapDayData.totalVolumeUSD = zeroBD()
  uniswapDayData.totalLiquidityUSD = zeroBD()
  uniswapDayData.txCount = zeroBigInt()
  uniswapDayData.save()
}

// can update to be arbitrarily deep later, cap at conditional depth of 1 now
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
  return zeroBD()
}

export function handleMint(event: Mint): void {
  const exchangeId = event.address.toHex()
  const exchange = Exchange.load(exchangeId)

  if (exchange !== null) {
    const token0 = Token.load(exchange.token0)
    const token1 = Token.load(exchange.token1)

    const token0Amount = convertTokenToDecimal(event.params.amount0, token0.decimals)
    const token1Amount = convertTokenToDecimal(event.params.amount1, token1.decimals)
    exchange.token0Balance = exchange.token0Balance.plus(token0Amount)
    exchange.token1Balance = exchange.token1Balance.plus(token1Amount)
    exchange.token0Price = exchange.token0Balance.div(exchange.token1Balance).truncate(18)
    exchange.token1Price = exchange.token1Balance.div(exchange.token0Balance).truncate(18)
    exchange.totalTxsCount = exchange.totalTxsCount.plus(oneBigInt())
    exchange.save()

    // if a token within the bundle, update the prices
    const bundle = Bundle.load('1')

    // update the eth price if needed
    const ethPrice = getEthPriceInUSD(event.block.number)
    bundle.ethPrice = ethPrice
    bundle.save()

    // this is the weighted algorithm
    const ethPerToken0 = findEthPerToken(token0 as Token, false)
    const usdPerToken0 = bundle.ethPrice.times(ethPerToken0)
    const ethPerToken1 = findEthPerToken(token1 as Token, false)
    const usdPerToken1 = bundle.ethPrice.times(ethPerToken1)

    token0.derivedETH = ethPerToken0
    token0.totalLiquidityToken = token0.totalLiquidityToken.plus(token0Amount)
    token0.totalLiquidityUSD = token0.totalLiquidityUSD.plus(usdPerToken0.times(token0Amount))
    token1.derivedETH = ethPerToken1
    token1.totalLiquidityToken = token1.totalLiquidityToken.plus(token1Amount)
    token1.totalLiquidityUSD = token1.totalLiquidityUSD.plus(usdPerToken1.times(token1Amount))

    // get new amounts of USD and ETH for tracking
    const amountTotalETH = ethPerToken1.times(token1Amount).plus(ethPerToken0.times(token0Amount))
    const amountTotalUSD = usdPerToken1.times(token1Amount).plus(usdPerToken0.times(token0Amount))

    exchange.combinedBalanceUSD = exchange.combinedBalanceUSD.plus(amountTotalUSD)
    exchange.combinedBalanceEth = exchange.combinedBalanceEth.plus(amountTotalETH)

    token0.save()
    token1.save()
    exchange.save()

    // Nov 2 2018 is 1541116800 for dayStartTimestamp and 17837 for dayID
    const timestamp = event.block.timestamp.toI32()
    const dayID = timestamp / 86400
    const dayStartTimestamp = dayID * 86400
    const dayExchangeID = event.address
      .toHexString()
      .concat('-')
      .concat(BigInt.fromI32(dayID).toString())

    const userID = event.params.sender.toHex()
    let user = User.load(userID)
    if (user == null) {
      user = new User(userID)
      user.save()
    }
    const userExchangeID = exchange.id
      .toString()
      .concat('-')
      .concat(event.params.sender.toHexString())
    let userExchangeData = UserExchangeData.load(userExchangeID)
    if (userExchangeData == null) {
      createUserDataEntity(userExchangeID, event.params.sender, event.address)
      userExchangeData = UserExchangeData.load(userExchangeID) // reload here
    }
    userExchangeData.token0Deposited = userExchangeData.token0Deposited.plus(token0Amount)
    userExchangeData.token1Deposited = userExchangeData.token1Deposited.plus(token1Amount)
    userExchangeData.save()

    const uniswap = Uniswap.load('1')
    uniswap.totalLiquidityEth = uniswap.totalLiquidityEth.plus(amountTotalETH)
    uniswap.totalLiquidityUSD = uniswap.totalLiquidityUSD.plus(amountTotalUSD)
    uniswap.exchangeHistoryEntityCount = uniswap.exchangeHistoryEntityCount.plus(oneBigInt())
    uniswap.uniswapHistoryEntityCount = uniswap.uniswapHistoryEntityCount.plus(oneBigInt())
    uniswap.tokenHistoryEntityCount = uniswap.tokenHistoryEntityCount.plus(oneBigInt())
    uniswap.txCount = uniswap.txCount.plus(oneBigInt())
    uniswap.save()

    const uniswapHistoricalData = new UniswapHistoricalData(uniswap.uniswapHistoryEntityCount.toString())
    uniswapHistoricalData.timestamp = event.block.timestamp.toI32()
    uniswapHistoricalData.totalVolumeUSD = uniswap.totalVolumeUSD
    uniswapHistoricalData.totalLiquidityUSD = uniswap.totalLiquidityUSD
    uniswapHistoricalData.txCount = uniswap.txCount
    uniswapHistoricalData.save()

    let uniswapDayData = UniswapDayData.load(dayID.toString())
    if (uniswapDayData == null) {
      createUniswapDayData(dayID, dayStartTimestamp)
      uniswapDayData = UniswapDayData.load(dayID.toString())
    }

    uniswapDayData.totalVolumeUSD = uniswap.totalVolumeUSD
    uniswapDayData.totalLiquidityUSD = uniswap.totalLiquidityUSD
    uniswapDayData.txCount = uniswap.txCount
    uniswapDayData.save()

    const eventId = uniswap.txCount.toString().concat('-add-liquidity')
    const addLiquidityEvent = new AddLiquidityEvent(eventId)
    addLiquidityEvent.token0Amount = token0Amount
    addLiquidityEvent.token1Amount = token1Amount
    addLiquidityEvent.save()

    const txId = event.transaction.hash
      .toHexString()
      .concat('-')
      .concat(event.address.toHexString())
    let transaction = Transaction.load(txId)
    if (transaction == null) {
      transaction = new Transaction(txId)
    }
    const addLiquidityEvents = transaction.addLiquidityEvents || []
    addLiquidityEvents.push(addLiquidityEvent.id)
    transaction.addLiquidityEvents = addLiquidityEvents
    transaction.exchange = exchange.id
    transaction.token0 = exchange.token0
    transaction.token1 = exchange.token1
    transaction.valueUSD = amountTotalUSD
    transaction.valueETH = amountTotalETH
    transaction.block = event.block.number.toI32()
    transaction.timestamp = event.block.timestamp.toI32()
    transaction.user = event.params.sender
    transaction.save()

    const exchangeHistoricalData = new ExchangeHistoricalData(uniswap.exchangeHistoryEntityCount.toString())
    exchangeHistoricalData.exchangeAddress = event.address
    exchangeHistoricalData.timestamp = event.block.timestamp.toI32()
    exchangeHistoricalData.type = 'AddLiquidity'
    exchangeHistoricalData.token0Balance = exchange.token0Balance
    exchangeHistoricalData.token1Balance = exchange.token1Balance
    exchangeHistoricalData.combinedBalanceUSD = exchange.combinedBalanceUSD
    exchangeHistoricalData.totalUniToken = exchange.totalUniToken
    exchangeHistoricalData.tradeVolumeToken0 = exchange.tradeVolumeToken0
    exchangeHistoricalData.tradeVolumeToken1 = exchange.tradeVolumeToken1
    exchangeHistoricalData.tradeVolumeEth = exchange.tradeVolumeEth
    exchangeHistoricalData.tradeVolumeUSD = exchange.tradeVolumeUSD
    exchangeHistoricalData.token0Price = exchange.token0Price
    exchangeHistoricalData.token1Price = exchange.token1Price
    exchangeHistoricalData.totalTxsCount = exchange.totalTxsCount
    exchangeHistoricalData.save()

    let exchangeDayData = ExchangeDayData.load(dayExchangeID)
    if (exchangeDayData == null) {
      exchangeDayData = new ExchangeDayData(dayExchangeID)
      exchangeDayData.date = dayStartTimestamp
      exchangeDayData.exchangeAddress = event.address
      exchangeDayData.token0Balance = zeroBD()
      exchangeDayData.token1Balance = zeroBD()
      exchangeDayData.dailyVolumeToken0 = zeroBD()
      exchangeDayData.dailyVolumeToken1 = zeroBD()
      exchangeDayData.dailyVolumeUSD = zeroBD()
      exchangeDayData.dailyTxns = zeroBigInt()
      exchangeDayData.combinedBalanceUSD = zeroBD()
    }
    exchangeDayData.token0Balance = exchange.token0Balance
    exchangeDayData.token1Balance = exchange.token1Balance
    exchangeDayData.combinedBalanceUSD = exchange.combinedBalanceUSD
    exchangeDayData.dailyTxns = exchangeDayData.dailyTxns.plus(oneBigInt())
    exchangeDayData.save()

    const tokenHistoricalData0 = new TokenHistoricalData(uniswap.tokenHistoryEntityCount.toString().concat('-token0'))
    tokenHistoricalData0.token = token0.id
    tokenHistoricalData0.timestamp = event.block.timestamp.toI32()
    tokenHistoricalData0.tradeVolumeToken = token0.tradeVolumeToken
    tokenHistoricalData0.tradeVolumeETH = token0.tradeVolumeETH
    tokenHistoricalData0.tradeVolumeUSD = token0.tradeVolumeUSD
    tokenHistoricalData0.totalLiquidityToken = token0.totalLiquidityToken
    tokenHistoricalData0.totalLiquidityUSD = token0.totalLiquidityUSD
    tokenHistoricalData0.priceEth = ethPerToken0
    tokenHistoricalData0.priceUSD = usdPerToken0
    tokenHistoricalData0.save()

    const tokenHistoricalData1 = new TokenHistoricalData(uniswap.tokenHistoryEntityCount.toString().concat('-token1'))
    tokenHistoricalData1.token = token1.id
    tokenHistoricalData1.timestamp = event.block.timestamp.toI32()
    tokenHistoricalData1.tradeVolumeToken = token1.tradeVolumeToken
    tokenHistoricalData1.tradeVolumeETH = token1.tradeVolumeETH
    tokenHistoricalData1.tradeVolumeUSD = token1.tradeVolumeUSD
    tokenHistoricalData1.totalLiquidityToken = token1.totalLiquidityToken
    tokenHistoricalData1.totalLiquidityUSD = token1.totalLiquidityUSD
    tokenHistoricalData1.priceEth = ethPerToken1
    tokenHistoricalData1.priceUSD = usdPerToken1
    tokenHistoricalData1.save()

    const token0DayID = token0.id
      .toString()
      .concat('-')
      .concat(BigInt.fromI32(dayID).toString())
    let token0DayData = TokenDayData.load(token0DayID)
    if (token0DayData == null) {
      token0DayData = new TokenDayData(token0DayID)
      token0DayData.date = dayStartTimestamp
      token0DayData.token = token0.id
      token0DayData.dailyVolumeToken = zeroBD()
      token0DayData.dailyVolumeETH = zeroBD()
      token0DayData.dailyVolumeUSD = zeroBD()
      token0DayData.dailyTxns = zeroBigInt()
      token0DayData.totalLiquidityToken = zeroBD()
      token0DayData.totalLiquidityUSD = zeroBD()
    }
    token0DayData.dailyVolumeToken = token0DayData.dailyVolumeToken.plus(token0Amount)
    token0DayData.dailyVolumeETH = token0DayData.dailyVolumeETH.plus(token0Amount.times(ethPerToken0))
    token0DayData.dailyVolumeUSD = token0DayData.dailyVolumeUSD.plus(
      token0Amount.times(ethPerToken0).times(bundle.ethPrice)
    )
    token0DayData.dailyTxns = token0DayData.dailyTxns.plus(oneBigInt())
    token0DayData.totalLiquidityToken = token0.totalLiquidityToken
    token0DayData.totalLiquidityUSD = token0.totalLiquidityUSD
    token0DayData.save()

    const token1DayID = token1.id
      .toString()
      .concat('-')
      .concat(BigInt.fromI32(dayID).toString())
    let token1DayData = TokenDayData.load(token1DayID)
    if (token1DayData == null) {
      token1DayData = new TokenDayData(token1DayID)
      token1DayData.date = dayStartTimestamp
      token1DayData.token = token1.id
      token1DayData.dailyVolumeToken = zeroBD()
      token1DayData.dailyVolumeETH = zeroBD()
      token1DayData.dailyVolumeUSD = zeroBD()
      token1DayData.dailyTxns = zeroBigInt()
      token1DayData.totalLiquidityToken = zeroBD()
      token1DayData.totalLiquidityUSD = zeroBD()
    }
    token1DayData.dailyVolumeToken = token1DayData.dailyVolumeToken.plus(token1Amount)
    token1DayData.dailyVolumeETH = token1DayData.dailyVolumeETH.plus(token1Amount.times(ethPerToken1))
    token1DayData.dailyVolumeUSD = token1DayData.dailyVolumeUSD.plus(
      token1Amount.times(ethPerToken1).times(bundle.ethPrice)
    )
    token1DayData.dailyTxns = token0DayData.dailyTxns.plus(oneBigInt())
    token1DayData.totalLiquidityToken = token1.totalLiquidityToken
    token1DayData.totalLiquidityUSD = token1.totalLiquidityUSD
    token1DayData.save()
  }
}

export function handleBurn(event: Burn): void {
  const exchangeId = event.address.toHex()
  const exchange = Exchange.load(exchangeId)

  if (exchange !== null) {
    const token0 = Token.load(exchange.token0)
    const token1 = Token.load(exchange.token1)

    const token0Amount = convertTokenToDecimal(event.params.amount0, token0.decimals)
    const token1Amount = convertTokenToDecimal(event.params.amount1, token1.decimals)
    exchange.token0Balance = exchange.token0Balance.minus(token0Amount)
    exchange.token1Balance = exchange.token1Balance.minus(token1Amount)
    exchange.token0Price = exchange.token0Balance.div(exchange.token1Balance).truncate(18)
    exchange.token1Price = exchange.token1Balance.div(exchange.token0Balance).truncate(18)
    exchange.totalTxsCount = exchange.totalTxsCount.plus(oneBigInt())

    const ethPriceInUSD = getEthPriceInUSD(event.block.number)

    const ethPerToken0 = findEthPerToken(token0 as Token, false)
    const usdPerToken0 = ethPriceInUSD.times(ethPerToken0)
    token0.priceEth = ethPerToken0
    token0.priceUSD = usdPerToken0
    token0.totalLiquidityToken = token0.totalLiquidityToken.minus(token0Amount)
    token0.totalLiquidityUSD = token0.totalLiquidityUSD.plus(usdPerToken0.times(token0Amount))

    const ethPerToken1 = findEthPerToken(token1 as Token, false)
    const usdPerToken1 = ethPriceInUSD.times(ethPerToken1)
    token1.priceEth = ethPerToken1
    token1.priceUSD = usdPerToken1
    token1.totalLiquidityToken = token1.totalLiquidityToken.minus(token1Amount)
    token1.totalLiquidityUSD = token1.totalLiquidityUSD.plus(usdPerToken1.times(token1Amount))

    // get new amounts of USD and ETH for tracking
    const amountTotalETH = ethPerToken1.times(token1Amount).plus(ethPerToken0.times(token0Amount))
    const amountTotalUSD = usdPerToken1.times(token1Amount).plus(usdPerToken0.times(token0Amount))

    exchange.combinedBalanceUSD = exchange.combinedBalanceUSD.minus(amountTotalUSD)
    exchange.combinedBalanceEth = exchange.combinedBalanceEth.minus(amountTotalETH)

    token0.save()
    token1.save()
    exchange.save()

    const userID = event.params.sender.toHex()
    let user = User.load(userID)
    if (user == null) {
      user = new User(userID)
      user.save()
    }

    const userExchangeID = exchange.id
      .toString()
      .concat('-')
      .concat(event.params.sender.toHexString())
    let userExchangeData = UserExchangeData.load(userExchangeID)
    if (userExchangeData == null) {
      createUserDataEntity(userExchangeID, event.params.sender, event.address)
      userExchangeData = UserExchangeData.load(userExchangeID) // reload here
    }
    userExchangeData.token0Withdrawn = userExchangeData.token0Withdrawn.plus(token0Amount)
    userExchangeData.token1Withdrawn = userExchangeData.token1Withdrawn.plus(token1Amount)
    userExchangeData.save()

    const uniswap = Uniswap.load('1')
    uniswap.totalLiquidityEth = uniswap.totalLiquidityEth.minus(amountTotalETH)
    uniswap.totalLiquidityUSD = uniswap.totalLiquidityUSD.minus(amountTotalUSD)
    uniswap.exchangeHistoryEntityCount = uniswap.exchangeHistoryEntityCount.plus(oneBigInt())
    uniswap.uniswapHistoryEntityCount = uniswap.uniswapHistoryEntityCount.plus(oneBigInt())
    uniswap.tokenHistoryEntityCount = uniswap.tokenHistoryEntityCount.plus(oneBigInt())
    uniswap.txCount = uniswap.txCount.plus(oneBigInt())
    uniswap.save()

    const uniswapHistoricalData = new UniswapHistoricalData(uniswap.uniswapHistoryEntityCount.toString())
    uniswapHistoricalData.timestamp = event.block.timestamp.toI32()
    uniswapHistoricalData.totalVolumeUSD = uniswap.totalVolumeUSD
    uniswapHistoricalData.totalLiquidityUSD = uniswap.totalLiquidityUSD
    uniswapHistoricalData.txCount = uniswap.txCount
    uniswapHistoricalData.save()

    // Nov 2 2018 is 1541116800 for dayStartTimestamp and 17837 for dayID
    const timestamp = event.block.timestamp.toI32()
    const dayID = timestamp / 86400
    const dayStartTimestamp = dayID * 86400
    const id = event.address
      .toHexString()
      .concat('-')
      .concat(BigInt.fromI32(dayID).toString())
    let uniswapDayData = UniswapDayData.load(dayID.toString())
    if (uniswapDayData == null) {
      createUniswapDayData(dayID, dayStartTimestamp)
      uniswapDayData = UniswapDayData.load(dayID.toString())
    }

    uniswapDayData.totalVolumeUSD = uniswap.totalVolumeUSD
    uniswapDayData.totalLiquidityUSD = uniswap.totalLiquidityUSD
    uniswapDayData.txCount = uniswap.txCount
    uniswapDayData.save()

    const eventId = uniswap.txCount.toString().concat('-remove-liquidity')
    const removeLiquidityEvent = new RemoveLiquidityEvent(eventId)
    removeLiquidityEvent.token0Amount = token0Amount
    removeLiquidityEvent.token1Amount = token1Amount
    removeLiquidityEvent.save()

    const txId = event.transaction.hash
      .toHexString()
      .concat('-')
      .concat(event.address.toHexString())
    let transaction = Transaction.load(txId)
    if (transaction == null) {
      transaction = new Transaction(txId)
    }
    const removeLiquidityEvents = transaction.addLiquidityEvents || []
    removeLiquidityEvents.push(removeLiquidityEvent.id)
    transaction.removeLiquidityEvents = removeLiquidityEvents
    transaction.exchange = exchange.id
    transaction.token0 = exchange.token0
    transaction.token1 = exchange.token1
    transaction.valueUSD = amountTotalUSD
    transaction.valueETH = amountTotalETH
    transaction.block = event.block.number.toI32()
    transaction.timestamp = event.block.timestamp.toI32()
    transaction.user = event.params.sender
    transaction.save()

    const exchangeHistoricalData = new ExchangeHistoricalData(uniswap.exchangeHistoryEntityCount.toString())
    exchangeHistoricalData.exchangeAddress = event.address
    exchangeHistoricalData.timestamp = event.block.timestamp.toI32()
    exchangeHistoricalData.type = 'RemoveLiquidity'
    exchangeHistoricalData.token0Balance = exchange.token0Balance
    exchangeHistoricalData.token1Balance = exchange.token1Balance
    exchangeHistoricalData.combinedBalanceUSD = exchange.combinedBalanceUSD
    exchangeHistoricalData.totalUniToken = exchange.totalUniToken
    exchangeHistoricalData.tradeVolumeToken0 = exchange.tradeVolumeToken0
    exchangeHistoricalData.tradeVolumeToken1 = exchange.tradeVolumeToken1
    exchangeHistoricalData.tradeVolumeEth = exchange.tradeVolumeEth
    exchangeHistoricalData.tradeVolumeUSD = exchange.tradeVolumeUSD
    exchangeHistoricalData.token0Price = exchange.token0Price
    exchangeHistoricalData.token1Price = exchange.token1Price
    exchangeHistoricalData.totalTxsCount = exchange.totalTxsCount
    exchangeHistoricalData.save()

    let exchangeDayData = ExchangeDayData.load(id)
    if (exchangeDayData == null) {
      exchangeDayData = new ExchangeDayData(id)
      exchangeDayData.date = dayStartTimestamp
      exchangeDayData.exchangeAddress = event.address
      exchangeDayData.token0Balance = zeroBD()
      exchangeDayData.token1Balance = zeroBD()
      exchangeDayData.dailyVolumeToken0 = zeroBD()
      exchangeDayData.dailyVolumeToken1 = zeroBD()
      exchangeDayData.dailyVolumeUSD = zeroBD()
      exchangeDayData.dailyTxns = zeroBigInt()
      exchangeDayData.combinedBalanceUSD = zeroBD()
    }
    exchangeDayData.token0Balance = exchange.token0Balance
    exchangeDayData.token1Balance = exchange.token1Balance
    exchangeDayData.combinedBalanceUSD = exchange.combinedBalanceUSD
    exchangeDayData.dailyTxns = exchangeDayData.dailyTxns.plus(oneBigInt())
    exchangeDayData.save()

    const tokenHistoricalData0 = new TokenHistoricalData(uniswap.tokenHistoryEntityCount.toString().concat('-token0'))
    tokenHistoricalData0.token = token0.id
    tokenHistoricalData0.timestamp = event.block.timestamp.toI32()
    tokenHistoricalData0.tradeVolumeToken = token0.tradeVolumeToken
    tokenHistoricalData0.tradeVolumeETH = token0.tradeVolumeETH
    tokenHistoricalData0.tradeVolumeUSD = token0.tradeVolumeUSD
    tokenHistoricalData0.totalLiquidityToken = token0.totalLiquidityToken
    tokenHistoricalData0.totalLiquidityUSD = token0.totalLiquidityUSD
    tokenHistoricalData0.priceEth = ethPerToken1
    tokenHistoricalData0.priceUSD = usdPerToken1
    tokenHistoricalData0.save()

    const tokenHistoricalData1 = new TokenHistoricalData(uniswap.tokenHistoryEntityCount.toString().concat('-token1'))
    tokenHistoricalData1.token = token1.id
    tokenHistoricalData1.timestamp = event.block.timestamp.toI32()
    tokenHistoricalData1.tradeVolumeToken = token1.tradeVolumeToken
    tokenHistoricalData1.tradeVolumeETH = token1.tradeVolumeETH
    tokenHistoricalData1.tradeVolumeUSD = token1.tradeVolumeUSD
    tokenHistoricalData1.totalLiquidityToken = token1.totalLiquidityToken
    tokenHistoricalData1.totalLiquidityUSD = token1.totalLiquidityUSD
    tokenHistoricalData1.priceEth = ethPerToken1
    tokenHistoricalData1.priceUSD = usdPerToken1
    tokenHistoricalData1.save()

    const token0DayID = token0.id
      .toString()
      .concat('-')
      .concat(BigInt.fromI32(dayID).toString())
    let token0DayData = TokenDayData.load(token0DayID)
    if (token0DayData == null) {
      token0DayData = new TokenDayData(token0DayID)
      token0DayData.date = dayStartTimestamp
      token0DayData.token = token0.id
      token0DayData.dailyVolumeToken = zeroBD()
      token0DayData.dailyVolumeETH = zeroBD()
      token0DayData.dailyVolumeUSD = zeroBD()
      token0DayData.dailyTxns = zeroBigInt()
      token0DayData.totalLiquidityToken = zeroBD()
      token0DayData.totalLiquidityUSD = zeroBD()
    }
    token0DayData.dailyVolumeToken = token0DayData.dailyVolumeToken.plus(token0Amount)
    token0DayData.dailyVolumeETH = token0DayData.dailyVolumeETH.plus(token0Amount.times(ethPerToken0))
    token0DayData.dailyVolumeUSD = token0DayData.dailyVolumeUSD.plus(
      token0Amount.times(ethPerToken0).times(ethPriceInUSD)
    )
    token0DayData.dailyTxns = token0DayData.dailyTxns.plus(oneBigInt())
    token0DayData.totalLiquidityToken = token0.totalLiquidityToken
    token0DayData.totalLiquidityUSD = token0.totalLiquidityUSD
    token0DayData.save()

    const token1DayID = token1.id
      .toString()
      .concat('-')
      .concat(BigInt.fromI32(dayID).toString())
    let token1DayData = TokenDayData.load(token1DayID)
    if (token1DayData == null) {
      token1DayData = new TokenDayData(token1DayID)
      token1DayData.date = dayStartTimestamp
      token1DayData.token = token1.id
      token1DayData.dailyVolumeToken = zeroBD()
      token1DayData.dailyVolumeETH = zeroBD()
      token1DayData.dailyVolumeUSD = zeroBD()
      token1DayData.dailyTxns = zeroBigInt()
      token1DayData.totalLiquidityToken = zeroBD()
      token1DayData.totalLiquidityUSD = zeroBD()
    }
    token1DayData.dailyVolumeToken = token1DayData.dailyVolumeToken.plus(token1Amount)
    token1DayData.dailyVolumeETH = token1DayData.dailyVolumeETH.plus(token1Amount.times(ethPerToken1))
    token1DayData.dailyVolumeUSD = token1DayData.dailyVolumeUSD.plus(
      token1Amount.times(ethPerToken1).times(ethPriceInUSD)
    )
    token1DayData.dailyTxns = token0DayData.dailyTxns.plus(oneBigInt())
    token1DayData.totalLiquidityToken = token1.totalLiquidityToken
    token1DayData.totalLiquidityUSD = token1.totalLiquidityUSD
    token1DayData.save()
  }
}

export function handleSwap(event: Swap): void {
  /****** Update Exchange ******/
  const exchangeID = event.address.toHex()
  const exchange = Exchange.load(exchangeID)
  if (exchange !== null) {
    const token0 = Token.load(exchange.token0)
    const token1 = Token.load(exchange.token1)

    let token0Amount: BigDecimal
    let token1Amount: BigDecimal
    let token0AmountSigned: BigDecimal
    let token1AmountSigned: BigDecimal
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

    exchange.token0Balance = exchange.token0Balance.plus(token0AmountSigned)
    exchange.token1Balance = exchange.token1Balance.plus(token1AmountSigned)
    exchange.tradeVolumeToken0 = exchange.tradeVolumeToken0.plus(token0Amount)
    exchange.tradeVolumeToken1 = exchange.tradeVolumeToken0.plus(token1Amount)
    exchange.save()

    // Here we must handle div by zero, because someone could have bought all the eth or all the tokens
    if (equalToZero(exchange.token0Balance)) {
      exchange.token0Price = zeroBD()
    } else {
      exchange.token1Price = exchange.token1Balance.div(exchange.token0Balance).truncate(18)
    }
    if (equalToZero(exchange.token1Balance)) {
      exchange.token1Price = zeroBD()
    } else {
      exchange.token0Price = exchange.token0Balance.div(exchange.token1Balance).truncate(18)
    }
    exchange.totalTxsCount = exchange.totalTxsCount.plus(oneBigInt())
    exchange.save()

    /****** Update User ******/
    const userID = event.params.sender.toHex()
    let user = User.load(userID)
    if (user == null) {
      user = new User(userID)
      user.save()
    }

    /****** Update UserExchangeData ******/
    const userExchangeID = exchange.id
      .toString()
      .concat('-')
      .concat(event.params.sender.toHex())
    let userExchangeData = UserExchangeData.load(userExchangeID)
    if (userExchangeData == null) {
      createUserDataEntity(userExchangeID, event.params.sender, event.address)
      userExchangeData = UserExchangeData.load(userExchangeID) // reload here
    }

    const ethPriceInUSD = getEthPriceInUSD(event.block.number)

    const ethPerToken0 = findEthPerToken(token0 as Token, false)
    const usdPerToken0 = ethPriceInUSD.times(ethPerToken0)
    token0.priceEth = ethPerToken0
    token0.priceUSD = usdPerToken0

    const ethPerToken1 = findEthPerToken(token1 as Token, false)
    const usdPerToken1 = ethPriceInUSD.times(ethPerToken1)
    token1.priceEth = ethPerToken1
    token1.priceUSD = usdPerToken1

    // get new amounts of USD and ETH for tracking
    const amountTotalETH = ethPerToken1.times(token1Amount).plus(ethPerToken0.times(token0Amount))
    const amountTotalUSD = usdPerToken1.times(token1Amount).plus(usdPerToken0.times(token0Amount))

    if (event.params.tokenIn.toHexString() == token0.id) {
      userExchangeData.token0Sold = userExchangeData.token0Sold.plus(token0Amount)
      userExchangeData.token1Bought = userExchangeData.token1Bought.plus(token1Amount)
    } else {
      userExchangeData.token1Sold = userExchangeData.token1Sold.plus(token1Amount)
      userExchangeData.token0Bought = userExchangeData.token0Bought.plus(token0Amount)
    }

    const totalAmountUSD = token0Amount
      .times(ethPerToken0)
      .times(ethPriceInUSD)
      .plus(token1Amount.times(ethPerToken1).times(ethPriceInUSD))

    // update combined usd
    exchange.combinedBalanceUSD = exchange.combinedBalanceUSD.plus(token0AmountSigned.times(usdPerToken0))
    exchange.combinedBalanceUSD = exchange.combinedBalanceUSD.plus(token1AmountSigned.times(usdPerToken1))
    // update combined eth
    exchange.combinedBalanceEth = exchange.combinedBalanceEth.plus(token0AmountSigned.times(ethPerToken0))
    exchange.combinedBalanceEth = exchange.combinedBalanceEth.plus(token1AmountSigned.times(ethPerToken1))

    // update token liquidity data
    token0.totalLiquidityToken = token0.totalLiquidityToken.plus(token0AmountSigned)
    token1.totalLiquidityToken = token1.totalLiquidityToken.plus(token1AmountSigned)

    // update USD liquidity value
    token0.totalLiquidityUSD = token0.totalLiquidityUSD.plus(usdPerToken0.times(token0AmountSigned))
    token1.totalLiquidityUSD = token1.totalLiquidityUSD.plus(usdPerToken1.times(token1AmountSigned))

    // update token0 volume data
    token0.tradeVolumeToken = token0.tradeVolumeToken.plus(token0Amount)
    token0.tradeVolumeETH = token0.tradeVolumeETH.plus(token0Amount.times(ethPerToken0))
    token0.tradeVolumeUSD = token0.tradeVolumeUSD.plus(token0Amount.times(ethPerToken0).times(ethPriceInUSD))

    // update token1 volume data
    token1.tradeVolumeToken = token1.tradeVolumeToken.plus(token1Amount)
    token1.tradeVolumeETH = token1.tradeVolumeETH.plus(token1Amount.times(ethPerToken1))
    token1.tradeVolumeUSD = token1.tradeVolumeUSD.plus(token1Amount.times(ethPerToken1).times(ethPriceInUSD))

    // update exchange volume data
    exchange.tradeVolumeEth = exchange.tradeVolumeEth.plus(token0Amount.times(ethPerToken0))
    exchange.tradeVolumeEth = exchange.tradeVolumeEth.plus(token1Amount.times(ethPerToken1))
    exchange.tradeVolumeUSD = exchange.tradeVolumeUSD.plus(totalAmountUSD)

    // update now that we have usd price
    exchange.save()
    userExchangeData.save()
    token0.save()
    token1.save()

    // Nov 2 2018 is 1541116800 for dayStartTimestamp and 17837 for dayID
    // Nov 3 2018 would be 1541116800 + 86400 and 17838. And so on, for each exchange
    const timestamp = event.block.timestamp.toI32()
    const dayID = timestamp / 86400
    const dayStartTimestamp = dayID * 86400
    const id = event.address
      .toHexString()
      .concat('-')
      .concat(BigInt.fromI32(dayID).toString())

    const uniswap = Uniswap.load('1')
    uniswap.totalVolumeUSD = uniswap.totalVolumeUSD.plus(amountTotalUSD)
    uniswap.totalVolumeEth = uniswap.totalVolumeEth.plus(amountTotalETH)
    uniswap.exchangeHistoryEntityCount = uniswap.exchangeHistoryEntityCount.plus(oneBigInt())
    uniswap.uniswapHistoryEntityCount = uniswap.uniswapHistoryEntityCount.plus(oneBigInt())
    uniswap.tokenHistoryEntityCount = uniswap.tokenHistoryEntityCount.plus(oneBigInt())
    uniswap.txCount = uniswap.txCount.plus(oneBigInt())
    uniswap.save()

    const uniswapHistoricalData = new UniswapHistoricalData(uniswap.uniswapHistoryEntityCount.toString())
    uniswapHistoricalData.timestamp = event.block.timestamp.toI32()
    uniswapHistoricalData.totalVolumeUSD = uniswap.totalVolumeUSD
    uniswapHistoricalData.totalLiquidityUSD = uniswap.totalLiquidityUSD
    uniswapHistoricalData.txCount = uniswap.txCount
    uniswapHistoricalData.save()

    let uniswapDayData = UniswapDayData.load(dayID.toString())
    if (uniswapDayData == null) {
      createUniswapDayData(dayID, dayStartTimestamp)
      uniswapDayData = UniswapDayData.load(dayID.toString())
    }

    uniswapDayData.totalVolumeUSD = uniswap.totalVolumeUSD
    uniswapDayData.totalLiquidityUSD = uniswap.totalLiquidityUSD
    uniswapDayData.txCount = uniswap.txCount
    uniswapDayData.save()

    const eventId = uniswap.txCount.toString().concat('-swap')
    const swapEvent = new SwapEvent(eventId)
    if (event.params.tokenIn.toHexString() == token0.id) {
      // token in is 0
      const tokenInAmount = convertTokenToDecimal(event.params.amountIn, token0.decimals)
      const tokenOutAmount = convertTokenToDecimal(event.params.amountOut, token1.decimals)
      swapEvent.tokenBoughtAmount = tokenOutAmount
      swapEvent.tokenSoldAmount = tokenInAmount
    } else {
      // token in is 1
      const tokenInAmount = convertTokenToDecimal(event.params.amountIn, token1.decimals)
      const tokenOutAmount = convertTokenToDecimal(event.params.amountOut, token0.decimals)
      swapEvent.tokenBoughtAmount = tokenOutAmount
      swapEvent.tokenSoldAmount = tokenInAmount
    }
    swapEvent.save()

    const txId = event.transaction.hash
      .toHexString()
      .concat('-')
      .concat(event.address.toHexString())
    let transaction = Transaction.load(txId)
    if (transaction == null) {
      transaction = new Transaction(txId)
    }
    const swapEvents = transaction.swapEvents || []
    swapEvents.push(swapEvent.id)
    transaction.swapEvents = swapEvents
    transaction.exchange = exchange.id
    transaction.token0 = exchange.token0
    transaction.token1 = exchange.token1
    transaction.valueUSD = amountTotalUSD
    transaction.valueETH = amountTotalETH
    transaction.block = event.block.number.toI32()
    transaction.timestamp = event.block.timestamp.toI32()
    transaction.user = event.params.sender
    transaction.save()

    const exchangeHistoricalData = new ExchangeHistoricalData(uniswap.exchangeHistoryEntityCount.toString())
    exchangeHistoricalData.exchangeAddress = event.address
    exchangeHistoricalData.timestamp = event.block.timestamp.toI32()
    exchangeHistoricalData.type = 'RemoveLiquidity'
    exchangeHistoricalData.token0Balance = exchange.token0Balance
    exchangeHistoricalData.token1Balance = exchange.token1Balance
    exchangeHistoricalData.combinedBalanceUSD = exchange.combinedBalanceUSD
    exchangeHistoricalData.totalUniToken = exchange.totalUniToken
    exchangeHistoricalData.tradeVolumeToken0 = exchange.tradeVolumeToken0
    exchangeHistoricalData.tradeVolumeToken1 = exchange.tradeVolumeToken1
    exchangeHistoricalData.tradeVolumeEth = exchange.tradeVolumeEth
    exchangeHistoricalData.tradeVolumeUSD = exchange.tradeVolumeUSD
    exchangeHistoricalData.token0Price = exchange.token0Price
    exchangeHistoricalData.token1Price = exchange.token1Price
    exchangeHistoricalData.totalTxsCount = exchange.totalTxsCount
    exchangeHistoricalData.save()

    let exchangeDayData = ExchangeDayData.load(id)
    if (exchangeDayData == null) {
      exchangeDayData = new ExchangeDayData(id)
      exchangeDayData.date = dayStartTimestamp
      exchangeDayData.exchangeAddress = event.address
      exchangeDayData.token0Balance = zeroBD()
      exchangeDayData.token1Balance = zeroBD()
      exchangeDayData.dailyVolumeToken0 = zeroBD()
      exchangeDayData.dailyVolumeToken1 = zeroBD()
      exchangeDayData.dailyVolumeUSD = zeroBD()
      exchangeDayData.dailyTxns = zeroBigInt()
    }
    exchangeDayData.token0Balance = exchange.token0Balance
    exchangeDayData.token1Balance = exchange.token1Balance
    exchangeDayData.dailyVolumeToken0 = exchangeDayData.dailyVolumeToken0.plus(token0Amount)
    exchangeDayData.dailyVolumeToken1 = exchangeDayData.dailyVolumeToken1.plus(token1Amount)
    exchangeDayData.dailyVolumeUSD = exchangeDayData.dailyVolumeUSD.plus(totalAmountUSD)
    exchangeDayData.dailyTxns = exchangeDayData.dailyTxns.plus(oneBigInt())
    exchangeDayData.combinedBalanceUSD = exchange.combinedBalanceUSD
    exchangeDayData.save()

    const tokenHistoricalData0 = new TokenHistoricalData(uniswap.tokenHistoryEntityCount.toString().concat('-token0'))
    tokenHistoricalData0.token = token0.id
    tokenHistoricalData0.timestamp = event.block.timestamp.toI32()
    tokenHistoricalData0.tradeVolumeToken = token0.tradeVolumeToken
    tokenHistoricalData0.tradeVolumeETH = token0.tradeVolumeETH
    tokenHistoricalData0.tradeVolumeUSD = token0.tradeVolumeUSD
    tokenHistoricalData0.totalLiquidityToken = token0.totalLiquidityToken
    tokenHistoricalData0.totalLiquidityUSD = token0.totalLiquidityUSD
    tokenHistoricalData0.priceEth = token0.priceEth
    tokenHistoricalData0.priceUSD = token0.priceUSD
    tokenHistoricalData0.save()

    const tokenHistoricalData1 = new TokenHistoricalData(uniswap.tokenHistoryEntityCount.toString().concat('-token1'))
    tokenHistoricalData1.token = token1.id
    tokenHistoricalData1.timestamp = event.block.timestamp.toI32()
    tokenHistoricalData1.tradeVolumeToken = token1.tradeVolumeToken
    tokenHistoricalData1.tradeVolumeETH = token1.tradeVolumeETH
    tokenHistoricalData1.tradeVolumeUSD = token1.tradeVolumeUSD
    tokenHistoricalData1.totalLiquidityToken = token1.totalLiquidityToken
    tokenHistoricalData1.totalLiquidityUSD = token1.totalLiquidityUSD
    tokenHistoricalData1.priceEth = token1.priceEth
    tokenHistoricalData1.priceUSD = token1.priceUSD
    tokenHistoricalData1.save()

    const token0DayID = token0.id
      .toString()
      .concat('-')
      .concat(BigInt.fromI32(dayID).toString())
    let token0DayData = TokenDayData.load(token0DayID)
    if (token0DayData == null) {
      token0DayData = new TokenDayData(token0DayID)
      token0DayData.date = dayStartTimestamp
      token0DayData.token = token0.id
      token0DayData.dailyVolumeToken = zeroBD()
      token0DayData.dailyVolumeETH = zeroBD()
      token0DayData.dailyVolumeUSD = zeroBD()
      token0DayData.dailyTxns = zeroBigInt()
      token0DayData.totalLiquidityToken = zeroBD()
      token0DayData.totalLiquidityUSD = zeroBD()
    }
    token0DayData.dailyVolumeToken = token0DayData.dailyVolumeToken.plus(token0Amount)
    token0DayData.dailyVolumeETH = token0DayData.dailyVolumeETH.plus(token0Amount.times(ethPerToken0))
    token0DayData.dailyVolumeUSD = token0DayData.dailyVolumeUSD.plus(
      token0Amount.times(ethPerToken0).times(ethPriceInUSD)
    )
    token0DayData.dailyTxns = token0DayData.dailyTxns.plus(oneBigInt())
    token0DayData.totalLiquidityToken = token0.totalLiquidityToken
    token0DayData.totalLiquidityUSD = token0.totalLiquidityUSD
    token0DayData.save()

    const token1DayID = token1.id
      .toString()
      .concat('-')
      .concat(BigInt.fromI32(dayID).toString())
    let token1DayData = TokenDayData.load(token1DayID)
    if (token1DayData == null) {
      token1DayData = new TokenDayData(token1DayID)
      token1DayData.date = dayStartTimestamp
      token1DayData.token = token1.id
      token1DayData.dailyVolumeToken = zeroBD()
      token1DayData.dailyVolumeETH = zeroBD()
      token1DayData.dailyVolumeUSD = zeroBD()
      token1DayData.dailyTxns = zeroBigInt()
      token1DayData.totalLiquidityToken = zeroBD()
      token1DayData.totalLiquidityUSD = zeroBD()
    }
    token1DayData.dailyVolumeToken = token1DayData.dailyVolumeToken.plus(token1Amount)
    token1DayData.dailyVolumeETH = token1DayData.dailyVolumeETH.plus(token1Amount.times(ethPerToken1))
    token1DayData.dailyVolumeUSD = token1DayData.dailyVolumeUSD.plus(
      token1Amount.times(ethPerToken1).times(ethPriceInUSD)
    )
    token1DayData.dailyTxns = token0DayData.dailyTxns.plus(oneBigInt())
    token1DayData.totalLiquidityToken = token1.totalLiquidityToken
    token1DayData.totalLiquidityUSD = token1.totalLiquidityUSD
    token1DayData.save()
  }
}
