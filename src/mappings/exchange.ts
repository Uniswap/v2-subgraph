/* eslint-disable prefer-const */
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
  uniswapDayData.totalLiquidityETH = zeroBD()
  uniswapDayData.txCount = zeroBigInt()
  uniswapDayData.save()
}

function updateExchangeHistorical(exchangeHistoricalData: ExchangeHistoricalData, exchange: Exchange): void {
  const bundle = Bundle.load('1')
  exchangeHistoricalData.token0Balance = exchange.token0Balance
  exchangeHistoricalData.token1Balance = exchange.token1Balance
  exchangeHistoricalData.combinedBalanceETH = exchange.combinedBalanceETH
  exchangeHistoricalData.combinedBalanceUSD = exchange.combinedBalanceETH.times(bundle.ethPrice)
  exchangeHistoricalData.totalUniToken = exchange.totalUniToken
  exchangeHistoricalData.tradeVolumeToken0 = exchange.tradeVolumeToken0
  exchangeHistoricalData.tradeVolumeToken1 = exchange.tradeVolumeToken1
  exchangeHistoricalData.tradeVolumeETH = exchange.tradeVolumeETH
  exchangeHistoricalData.tradeVolumeUSD = exchange.tradeVolumeUSD
  exchangeHistoricalData.token0Price = exchange.token0Price
  exchangeHistoricalData.token1Price = exchange.token1Price
  exchangeHistoricalData.totalTxsCount = exchange.totalTxsCount
  exchangeHistoricalData.save()
}

function createExchangeDayData(dayExchangeID: string, dayStartTimestamp: i32, eventAddress: Address): void {
  const exchangeDayData = new ExchangeDayData(dayExchangeID)
  exchangeDayData.date = dayStartTimestamp
  exchangeDayData.exchangeAddress = eventAddress
  exchangeDayData.token0Balance = zeroBD()
  exchangeDayData.token1Balance = zeroBD()
  exchangeDayData.dailyVolumeToken0 = zeroBD()
  exchangeDayData.dailyVolumeToken1 = zeroBD()
  exchangeDayData.dailyVolumeUSD = zeroBD()
  exchangeDayData.dailyTxns = zeroBigInt()
  exchangeDayData.combinedBalanceETH = zeroBD()
  exchangeDayData.combinedBalanceUSD = zeroBD()
  exchangeDayData.save()
}

function updateExchangeDayData(exchangeDayData: ExchangeDayData, exchange: Exchange): void {
  const bundle = Bundle.load('1')
  exchangeDayData.token0Balance = exchange.token0Balance
  exchangeDayData.token1Balance = exchange.token1Balance
  exchangeDayData.combinedBalanceETH = exchange.combinedBalanceETH
  exchangeDayData.combinedBalanceUSD = exchange.combinedBalanceETH.times(bundle.ethPrice)
  exchangeDayData.dailyTxns = exchangeDayData.dailyTxns.plus(oneBigInt())
  exchangeDayData.save()
}

function updateTokenHistoricalData(tokenHistoricalData: TokenHistoricalData, token: Token, timestamp: i32): void {
  const bundle = Bundle.load('1')
  tokenHistoricalData.token = token.id
  tokenHistoricalData.timestamp = timestamp
  tokenHistoricalData.tradeVolumeToken = token.tradeVolumeToken
  tokenHistoricalData.tradeVolumeETH = token.tradeVolumeETH
  tokenHistoricalData.tradeVolumeUSD = token.tradeVolumeUSD
  tokenHistoricalData.totalLiquidityToken = token.totalLiquidityToken
  tokenHistoricalData.totalLiquidityETH = token.totalLiquidityETH
  tokenHistoricalData.totalLiquidityUSD = token.totalLiquidityETH.times(bundle.ethPrice)
  tokenHistoricalData.priceETH = token.derivedETH as BigDecimal
  tokenHistoricalData.priceUSD = token.derivedETH.times(bundle.ethPrice)
  tokenHistoricalData.save()
}

function createTokenDayData(id: string, token: Token, dayStartTimestamp: i32): void {
  const tokenDayData = new TokenDayData(id)
  tokenDayData.date = dayStartTimestamp
  tokenDayData.token = token.id
  tokenDayData.dailyVolumeToken = zeroBD()
  tokenDayData.dailyVolumeETH = zeroBD()
  tokenDayData.dailyVolumeUSD = zeroBD()
  tokenDayData.dailyTxns = zeroBigInt()
  tokenDayData.totalLiquidityToken = zeroBD()
  tokenDayData.totalLiquidityETH = zeroBD()
  tokenDayData.totalLiquidityUSD = zeroBD()
  tokenDayData.save()
}

function updateTokenDayData(tokenDayData: TokenDayData, token: Token): void {
  const bundle = Bundle.load('1')
  tokenDayData.totalLiquidityToken = token.totalLiquidityToken
  tokenDayData.totalLiquidityETH = token.totalLiquidityETH
  tokenDayData.totalLiquidityUSD = token.totalLiquidityETH.times(bundle.ethPrice)
  tokenDayData.dailyTxns = tokenDayData.dailyTxns.plus(oneBigInt())
  tokenDayData.save()
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

    //ETH / USD prices
    const bundle = Bundle.load('1')
    const ethPriceInUSD = getEthPriceInUSD(event.block.number)
    bundle.ethPrice = ethPriceInUSD
    bundle.save()

    const ethPerToken0 = findEthPerToken(token0 as Token, false)
    const usdPerToken0 = bundle.ethPrice.times(ethPerToken0)
    token0.derivedETH = ethPerToken0
    token0.totalLiquidityToken = token0.totalLiquidityToken.plus(token0Amount)
    token0.totalLiquidityETH = token0.totalLiquidityToken.times(ethPerToken0)

    const ethPerToken1 = findEthPerToken(token1 as Token, false)
    const usdPerToken1 = bundle.ethPrice.times(ethPerToken1)
    token1.derivedETH = ethPerToken1
    token1.totalLiquidityToken = token1.totalLiquidityToken.plus(token1Amount)
    token1.totalLiquidityETH = token1.totalLiquidityToken.times(ethPerToken1)

    // get new amounts of USD and ETH for tracking
    const amountTotalETH = ethPerToken1.times(token1Amount).plus(ethPerToken0.times(token0Amount))
    const amountTotalUSD = usdPerToken1.times(token1Amount).plus(usdPerToken0.times(token0Amount))

    // update exchange liquidity
    exchange.combinedBalanceETH = exchange.combinedBalanceETH.plus(amountTotalETH)

    token0.save()
    token1.save()
    exchange.save()

    /**
     * @todo
     *
     * change this from params.sender - it may not be the sender
     * because router is usually the sender
     *
     * need to look at ERC20 transfer events
     *
     * do LP analytics somewhere here
     *
     */
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
    uniswap.totalLiquidityETH = uniswap.totalLiquidityETH.plus(amountTotalETH)
    uniswap.totalLiquidityUSD = uniswap.totalLiquidityETH.times(bundle.ethPrice)
    uniswap.exchangeHistoryEntityCount = uniswap.exchangeHistoryEntityCount.plus(oneBigInt())
    uniswap.uniswapHistoryEntityCount = uniswap.uniswapHistoryEntityCount.plus(oneBigInt())
    uniswap.tokenHistoryEntityCount = uniswap.tokenHistoryEntityCount.plus(oneBigInt())
    uniswap.txCount = uniswap.txCount.plus(oneBigInt())
    uniswap.save()

    const uniswapHistoricalData = new UniswapHistoricalData(uniswap.uniswapHistoryEntityCount.toString())
    uniswapHistoricalData.timestamp = event.block.timestamp.toI32()
    uniswapHistoricalData.totalVolumeUSD = uniswap.totalVolumeUSD
    uniswapHistoricalData.totalLiquidityUSD = uniswap.totalLiquidityUSD
    uniswapHistoricalData.totalLiquidityETH = uniswap.totalLiquidityETH
    uniswapHistoricalData.txCount = uniswap.txCount
    uniswapHistoricalData.save()

    const timestamp = event.block.timestamp.toI32()
    const dayID = timestamp / 86400
    const dayStartTimestamp = dayID * 86400
    const dayExchangeID = event.address
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
    uniswapDayData.totalLiquidityETH = uniswap.totalLiquidityETH
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

    let exchangeHistoricalData = new ExchangeHistoricalData(uniswap.exchangeHistoryEntityCount.toString())
    exchangeHistoricalData.exchangeAddress = event.address
    exchangeHistoricalData.timestamp = event.block.timestamp.toI32()
    exchangeHistoricalData.type = 'AddLiquidity'
    updateExchangeHistorical(exchangeHistoricalData, exchange as Exchange)

    let exchangeDayData = ExchangeDayData.load(dayExchangeID)
    if (exchangeDayData == null) {
      createExchangeDayData(dayExchangeID as string, dayStartTimestamp as i32, event.address)
    }
    exchangeDayData = ExchangeDayData.load(dayExchangeID)
    updateExchangeDayData(exchangeDayData as ExchangeDayData, exchange as Exchange)
    exchangeDayData.save()

    const tokenHistoricalData0 = new TokenHistoricalData(uniswap.tokenHistoryEntityCount.toString().concat('-token0'))
    updateTokenHistoricalData(
      tokenHistoricalData0 as TokenHistoricalData,
      token0 as Token,
      event.block.timestamp.toI32()
    )

    const tokenHistoricalData1 = new TokenHistoricalData(uniswap.tokenHistoryEntityCount.toString().concat('-token1'))
    updateTokenHistoricalData(
      tokenHistoricalData1 as TokenHistoricalData,
      token1 as Token,
      event.block.timestamp.toI32()
    )

    const token0DayID = token0.id
      .toString()
      .concat('-')
      .concat(BigInt.fromI32(dayID).toString())
    let token0DayData = TokenDayData.load(token0DayID)
    if (token0DayData == null) {
      createTokenDayData(token0DayID as string, token0 as Token, dayStartTimestamp as i32)
    }
    token0DayData = TokenDayData.load(token0DayID)
    updateTokenDayData(token0DayData as TokenDayData, token0 as Token)

    const token1DayID = token1.id
      .toString()
      .concat('-')
      .concat(BigInt.fromI32(dayID).toString())
    let token1DayData = TokenDayData.load(token1DayID)
    if (token1DayData == null) {
      createTokenDayData(token1DayID as string, token1 as Token, dayStartTimestamp as i32)
    }
    token1DayData = TokenDayData.load(token1DayID)
    updateTokenDayData(token1DayData as TokenDayData, token1 as Token)
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

    //ETH / USD prices
    const bundle = Bundle.load('1')
    const ethPriceInUSD = getEthPriceInUSD(event.block.number)
    bundle.ethPrice = ethPriceInUSD
    bundle.save()

    const ethPerToken0 = findEthPerToken(token0 as Token, false)
    const usdPerToken0 = bundle.ethPrice.times(ethPerToken0)
    token0.derivedETH = ethPerToken0
    token0.totalLiquidityToken = token0.totalLiquidityToken.minus(token0Amount)
    token0.totalLiquidityETH = token0.totalLiquidityToken.times(ethPerToken0)

    const ethPerToken1 = findEthPerToken(token1 as Token, false)
    const usdPerToken1 = bundle.ethPrice.times(ethPerToken1)
    token1.derivedETH = ethPerToken1
    token1.totalLiquidityToken = token1.totalLiquidityToken.minus(token1Amount)
    token1.totalLiquidityETH = token1.totalLiquidityToken.times(ethPerToken1)

    // get new amounts of USD and ETH for tracking
    const amountTotalETH = ethPerToken1.times(token1Amount).plus(ethPerToken0.times(token0Amount))
    const amountTotalUSD = usdPerToken1.times(token1Amount).plus(usdPerToken0.times(token0Amount))

    exchange.combinedBalanceETH = exchange.combinedBalanceETH.minus(amountTotalETH)

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
    uniswap.totalLiquidityETH = uniswap.totalLiquidityETH.minus(amountTotalETH)
    uniswap.totalLiquidityUSD = uniswap.totalLiquidityETH.times(bundle.ethPrice)
    uniswap.exchangeHistoryEntityCount = uniswap.exchangeHistoryEntityCount.plus(oneBigInt())
    uniswap.uniswapHistoryEntityCount = uniswap.uniswapHistoryEntityCount.plus(oneBigInt())
    uniswap.tokenHistoryEntityCount = uniswap.tokenHistoryEntityCount.plus(oneBigInt())
    uniswap.txCount = uniswap.txCount.plus(oneBigInt())
    uniswap.save()

    const uniswapHistoricalData = new UniswapHistoricalData(uniswap.uniswapHistoryEntityCount.toString())
    uniswapHistoricalData.timestamp = event.block.timestamp.toI32()
    uniswapHistoricalData.totalVolumeUSD = uniswap.totalVolumeUSD
    uniswapHistoricalData.totalLiquidityUSD = uniswap.totalLiquidityUSD
    uniswapHistoricalData.totalLiquidityETH = uniswap.totalLiquidityETH
    uniswapHistoricalData.txCount = uniswap.txCount
    uniswapHistoricalData.save()

    // Nov 2 2018 is 1541116800 for dayStartTimestamp and 17837 for dayID
    const timestamp = event.block.timestamp.toI32()
    const dayID = timestamp / 86400
    const dayStartTimestamp = dayID * 86400
    const dayExchangeID = event.address
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
    uniswapDayData.totalLiquidityETH = uniswap.totalLiquidityETH
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
    updateExchangeHistorical(exchangeHistoricalData, exchange as Exchange)

    let exchangeDayData = ExchangeDayData.load(dayExchangeID)
    if (exchangeDayData == null) {
      createExchangeDayData(dayExchangeID as string, dayStartTimestamp as i32, event.address)
    }
    exchangeDayData = ExchangeDayData.load(dayExchangeID)
    updateExchangeDayData(exchangeDayData as ExchangeDayData, exchange as Exchange)
    exchangeDayData.save()

    const tokenHistoricalData0 = new TokenHistoricalData(uniswap.tokenHistoryEntityCount.toString().concat('-token0'))
    updateTokenHistoricalData(
      tokenHistoricalData0 as TokenHistoricalData,
      token0 as Token,
      event.block.timestamp.toI32()
    )

    const tokenHistoricalData1 = new TokenHistoricalData(uniswap.tokenHistoryEntityCount.toString().concat('-token1'))
    updateTokenHistoricalData(
      tokenHistoricalData1 as TokenHistoricalData,
      token1 as Token,
      event.block.timestamp.toI32()
    )

    const token0DayID = token0.id
      .toString()
      .concat('-')
      .concat(BigInt.fromI32(dayID).toString())
    let token0DayData = TokenDayData.load(token0DayID)
    if (token0DayData == null) {
      createTokenDayData(token0DayID as string, token0 as Token, dayStartTimestamp as i32)
    }
    token0DayData = TokenDayData.load(token0DayID)
    updateTokenDayData(token0DayData as TokenDayData, token0 as Token)
    token0DayData.save()

    const token1DayID = token1.id
      .toString()
      .concat('-')
      .concat(BigInt.fromI32(dayID).toString())
    let token1DayData = TokenDayData.load(token1DayID)
    if (token1DayData == null) {
      createTokenDayData(token1DayID as string, token1 as Token, dayStartTimestamp as i32)
    }
    updateTokenDayData(token0DayData as TokenDayData, token0 as Token)
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

    //ETH / USD prices
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

    // get new amounts of USD and ETH for tracking
    const amountTotalETH = ethPerToken1.times(token1Amount).plus(ethPerToken0.times(token0Amount))
    const amountTotalUSD = usdPerToken1.times(token1Amount).plus(usdPerToken0.times(token0Amount))

    token0.totalLiquidityToken = token0.totalLiquidityToken.plus(token0AmountSigned)
    token0.totalLiquidityETH = token0.totalLiquidityToken.times(ethPerToken0)
    token0.tradeVolumeToken = token0.tradeVolumeToken.plus(token0Amount)
    token0.tradeVolumeETH = token0.tradeVolumeETH.plus(token0Amount.times(ethPerToken0))
    token0.tradeVolumeUSD = token0.tradeVolumeUSD.plus(token0AmountSigned.times(usdPerToken0))

    token1.totalLiquidityToken = token1.totalLiquidityToken.plus(token1AmountSigned)
    token1.totalLiquidityETH = token1.totalLiquidityToken.times(ethPerToken1)
    token1.tradeVolumeToken = token1.tradeVolumeToken.plus(token1Amount)
    token1.tradeVolumeETH = token1.tradeVolumeETH.plus(token1Amount.times(ethPerToken1))
    token1.tradeVolumeUSD = token0.tradeVolumeUSD.plus(token1AmountSigned.times(usdPerToken1))

    // update exchange volume data
    exchange.tradeVolumeETH = exchange.tradeVolumeETH.plus(amountTotalETH)
    exchange.tradeVolumeUSD = exchange.tradeVolumeUSD.plus(amountTotalUSD)
    exchange.combinedBalanceETH = exchange.combinedBalanceETH
      .plus(token0AmountSigned.times(ethPerToken0))
      .plus(token1AmountSigned.times(ethPerToken1))

    // update now that we have usd price
    exchange.save()
    token0.save()
    token1.save()

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

    if (event.params.tokenIn.toHexString() == token0.id) {
      userExchangeData.token0Sold = userExchangeData.token0Sold.plus(token0Amount)
      userExchangeData.token1Bought = userExchangeData.token1Bought.plus(token1Amount)
    } else {
      userExchangeData.token1Sold = userExchangeData.token1Sold.plus(token1Amount)
      userExchangeData.token0Bought = userExchangeData.token0Bought.plus(token0Amount)
    }
    userExchangeData.save()

    const uniswap = Uniswap.load('1')
    uniswap.totalVolumeUSD = uniswap.totalVolumeUSD.plus(amountTotalUSD)
    uniswap.totalVolumeETH = uniswap.totalVolumeETH.plus(amountTotalETH)
    uniswap.exchangeHistoryEntityCount = uniswap.exchangeHistoryEntityCount.plus(oneBigInt())
    uniswap.uniswapHistoryEntityCount = uniswap.uniswapHistoryEntityCount.plus(oneBigInt())
    uniswap.tokenHistoryEntityCount = uniswap.tokenHistoryEntityCount.plus(oneBigInt())
    uniswap.txCount = uniswap.txCount.plus(oneBigInt())
    uniswap.save()

    const uniswapHistoricalData = new UniswapHistoricalData(uniswap.uniswapHistoryEntityCount.toString())
    uniswapHistoricalData.timestamp = event.block.timestamp.toI32()
    uniswapHistoricalData.totalVolumeUSD = uniswap.totalVolumeUSD
    uniswapHistoricalData.totalLiquidityUSD = uniswap.totalLiquidityUSD
    uniswapHistoricalData.totalLiquidityETH = uniswap.totalLiquidityETH
    uniswapHistoricalData.txCount = uniswap.txCount
    uniswapHistoricalData.save()

    const timestamp = event.block.timestamp.toI32()
    const dayID = timestamp / 86400
    const dayStartTimestamp = dayID * 86400
    const dayExchangeID = event.address
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
    uniswapDayData.totalLiquidityETH = uniswap.totalLiquidityETH
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
    exchangeHistoricalData.type = 'Swap'
    updateExchangeHistorical(exchangeHistoricalData, exchange as Exchange)

    let exchangeDayData = ExchangeDayData.load(dayExchangeID)
    if (exchangeDayData == null) {
      createExchangeDayData(dayExchangeID as string, dayStartTimestamp as i32, event.address)
    }
    exchangeDayData = ExchangeDayData.load(dayExchangeID)
    updateExchangeDayData(exchangeDayData as ExchangeDayData, exchange as Exchange)
    // custom for swaps
    exchangeDayData.dailyVolumeToken0 = exchangeDayData.dailyVolumeToken0.plus(token0Amount)
    exchangeDayData.dailyVolumeToken1 = exchangeDayData.dailyVolumeToken1.plus(token1Amount)
    exchangeDayData.dailyVolumeUSD = exchangeDayData.dailyVolumeUSD.plus(amountTotalUSD)
    exchangeDayData.save()

    const tokenHistoricalData0 = new TokenHistoricalData(uniswap.tokenHistoryEntityCount.toString().concat('-token0'))
    updateTokenHistoricalData(
      tokenHistoricalData0 as TokenHistoricalData,
      token0 as Token,
      event.block.timestamp.toI32()
    )

    const tokenHistoricalData1 = new TokenHistoricalData(uniswap.tokenHistoryEntityCount.toString().concat('-token1'))
    updateTokenHistoricalData(
      tokenHistoricalData1 as TokenHistoricalData,
      token1 as Token,
      event.block.timestamp.toI32()
    )

    const token0DayID = token0.id
      .toString()
      .concat('-')
      .concat(BigInt.fromI32(dayID).toString())
    let token0DayData = TokenDayData.load(token0DayID)
    if (token0DayData == null) {
      createTokenDayData(token0DayID as string, token0 as Token, dayStartTimestamp as i32)
    }
    token0DayData = TokenDayData.load(token0DayID)
    updateTokenDayData(token0DayData as TokenDayData, token0 as Token)
    token0DayData.dailyVolumeToken = token0DayData.dailyVolumeToken.plus(token0Amount)
    token0DayData.dailyVolumeETH = token0DayData.dailyVolumeETH.plus(token0Amount.times(ethPerToken0))
    token0DayData.dailyVolumeUSD = token0DayData.dailyVolumeUSD.plus(
      token0Amount.times(ethPerToken0).times(bundle.ethPrice)
    )
    token0DayData.save()

    const token1DayID = token1.id
      .toString()
      .concat('-')
      .concat(BigInt.fromI32(dayID).toString())
    let token1DayData = TokenDayData.load(token1DayID)
    if (token1DayData == null) {
      createTokenDayData(token1DayID as string, token1 as Token, dayStartTimestamp as i32)
    }
    token1DayData = TokenDayData.load(token1DayID)
    updateTokenDayData(token1DayData as TokenDayData, token1 as Token)
    token1DayData.dailyVolumeToken = token1DayData.dailyVolumeToken.plus(token1Amount)
    token1DayData.dailyVolumeETH = token1DayData.dailyVolumeETH.plus(token1Amount.times(ethPerToken1))
    token1DayData.dailyVolumeUSD = token1DayData.dailyVolumeUSD.plus(
      token1Amount.times(ethPerToken1).times(bundle.ethPrice)
    )
    token1DayData.save()
  }
}
