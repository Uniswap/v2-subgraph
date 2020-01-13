import { BigInt, BigDecimal, Address, log } from '@graphprotocol/graph-ts'
import {
  TokenPurchase,
  EthPurchase,
  AddLiquidity,
  RemoveLiquidity,
  Transfer
} from '../types/templates/Exchange/Exchange'

import {
  User,
  UserExchangeData,
  Transaction,
  Exchange,
  Uniswap,
  ExchangeHistoricalData,
  ExchangeDayData,
  AddLiquidityEvent,
  RemoveLiquidityEvent,
  TokenPurchaseEvent,
  EthPurchaseEvent,
  UniswapDayData,
  UniswapHistoricalData
} from '../types/schema'
import { uniswapUSDOracle } from './uniswapOracle'

import {
  bigDecimalExp18,
  zeroBD,
  zeroBigInt,
  oneBigInt,
  convertEthToDecimal,
  convertTokenToDecimal,
  equalToZero
} from '../helpers'

function createUserDataEntity(id: string, user: Address, exchange: Address): void {
  const userExchangeData = new UserExchangeData(id)

  userExchangeData.userAddress = user
  userExchangeData.user = user.toHex()
  userExchangeData.exchange = exchange.toHexString()

  userExchangeData.ethDeposited = zeroBD()
  userExchangeData.tokensDeposited = zeroBD()
  userExchangeData.ethWithdrawn = zeroBD()
  userExchangeData.tokensWithdrawn = zeroBD()
  userExchangeData.uniTokenBalance = zeroBD()

  userExchangeData.ethBought = zeroBD()
  userExchangeData.ethSold = zeroBD()
  userExchangeData.tokensBought = zeroBD()
  userExchangeData.tokensSold = zeroBD()
  userExchangeData.ethFeesPaid = zeroBD()
  userExchangeData.tokenFeesPaid = zeroBD()
  userExchangeData.ethFeesInUSD = zeroBD()
  userExchangeData.tokenFeesInUSD = zeroBD()
  userExchangeData.save()
}

function createUniswapDayData(dayID: i32, dayStartTimestamp: i32): void {
  const uniswapDayData = new UniswapDayData(dayID.toString())
  uniswapDayData.date = dayStartTimestamp
  uniswapDayData.dailyVolumeInETH = zeroBD()
  uniswapDayData.dailyVolumeInUSD = zeroBD()
  uniswapDayData.totalVolumeInEth = zeroBD()
  uniswapDayData.totalLiquidityInEth = zeroBD()
  uniswapDayData.totalVolumeUSD = zeroBD()
  uniswapDayData.totalLiquidityUSD = zeroBD()
  uniswapDayData.totalTokenSells = zeroBigInt()
  uniswapDayData.totalTokenBuys = zeroBigInt()
  uniswapDayData.totalAddLiquidity = zeroBigInt()
  uniswapDayData.totalRemoveLiquidity = zeroBigInt()
  uniswapDayData.txCount = zeroBigInt()
  uniswapDayData.save()
}
export function handleTokenPurchase(event: TokenPurchase): void {
  /****** Update Exchange ******/
  const exchangeID = event.address.toHex()
  const exchange = Exchange.load(exchangeID)

  if (exchange !== null) {
    const ethAmount = convertEthToDecimal(event.params.eth_sold)
    let tokenAmount: BigDecimal
    if (exchange.tokenDecimals == null || exchange.tokenDecimals == 0) {
      tokenAmount = event.params.tokens_bought.toBigDecimal()
    } else {
      tokenAmount = convertTokenToDecimal(event.params.tokens_bought, exchange.tokenDecimals)
    }
    exchange.ethBalance = exchange.ethBalance.plus(ethAmount)
    exchange.tokenBalance = exchange.tokenBalance.minus(tokenAmount)
    exchange.buyTokenCount = exchange.buyTokenCount.plus(oneBigInt())
    exchange.lastPrice = exchange.price

    // Don't need check to divide by zero here, token is the numerator
    exchange.price = exchange.tokenBalance.div(exchange.ethBalance).truncate(18)
    exchange.combinedBalanceInEth = exchange.ethBalance.plus(exchange.tokenBalance.div(exchange.price)).truncate(18)
    exchange.tradeVolumeToken = exchange.tradeVolumeToken.plus(tokenAmount)
    exchange.tradeVolumeEth = exchange.tradeVolumeEth.plus(ethAmount)
    exchange.totalValue = exchange.totalValue.plus(tokenAmount.times(exchange.price)).truncate(18)
    exchange.weightedAvgPrice = exchange.totalValue.div(exchange.tradeVolumeToken).truncate(18)
    exchange.totalTxsCount = exchange.totalTxsCount.plus(oneBigInt())

    /****** Update User ******/
    const userID = event.params.buyer.toHex()
    let user = User.load(userID)
    if (user == null) {
      user = new User(userID)
      user.save()
    }

    /****** Update UserExchangeData ******/
    const userExchangeID = exchange.tokenAddress
      .toHexString()
      .concat('-')
      .concat(event.params.buyer.toHex())
    let userExchangeData = UserExchangeData.load(userExchangeID)

    // if no userExchangeData yet create new one
    if (userExchangeData == null) {
      createUserDataEntity(userExchangeID, event.params.buyer, event.address)
      userExchangeData = UserExchangeData.load(userExchangeID) // reload here
    }

    //update values
    userExchangeData.ethSold = userExchangeData.ethSold.plus(ethAmount)
    userExchangeData.tokensBought = userExchangeData.tokensBought.plus(tokenAmount)

    const originalEthValue = ethAmount.div(BigDecimal.fromString('1').minus(exchange.fee))
    const fee = originalEthValue.minus(ethAmount).truncate(18)
    userExchangeData.ethFeesPaid = userExchangeData.ethFeesPaid.plus(fee)

    /****** Get ETH in USD Uniswap USD Tokens ******/
    const oneUSDInEth = uniswapUSDOracle(event.block.number)
    if (!equalToZero(oneUSDInEth)) {
      exchange.lastPriceUSD = exchange.priceUSD
      if (equalToZero(exchange.price)) {
        exchange.priceUSD = zeroBD()
      } else {
        exchange.priceUSD = BigDecimal.fromString('1')
          .div(oneUSDInEth)
          .div(exchange.price)
          .truncate(18)
        exchange.combinedBalanceInUSD = exchange.combinedBalanceInEth.div(oneUSDInEth).truncate(18)
      }
      exchange.weightedAvgPriceUSD = bigDecimalExp18()
        .div(oneUSDInEth)
        .div(exchange.weightedAvgPrice)
        .truncate(18)
      userExchangeData.ethFeesInUSD = bigDecimalExp18()
        .times(userExchangeData.ethFeesPaid)
        .div(oneUSDInEth)
        .truncate(18)
    }

    // update now that we have usd price
    exchange.tradeVolumeUSD = exchange.tradeVolumeUSD.plus(ethAmount.times(exchange.price.times(exchange.priceUSD)))

    exchange.save()
    userExchangeData.save()

    // Nov 2 2018 is 1541116800 for dayStartTimestamp and 17837 for dayID
    // Nov 3 2018 would be 1541116800 + 86400 and 17838. And so on, for each exchange
    const timestamp = event.block.timestamp.toI32()
    const dayID = timestamp / 86400
    const dayStartTimestamp = dayID * 86400
    const id = event.address
      .toHexString()
      .concat('-')
      .concat(BigInt.fromI32(dayID).toString())

    /****** Update Global Values ******/
    const uniswap = Uniswap.load('1')
    uniswap.totalVolumeInEth = uniswap.totalVolumeInEth.plus(ethAmount)
    uniswap.totalVolumeUSD = uniswap.totalVolumeUSD.plus(ethAmount.times(exchange.price.times(exchange.priceUSD)))
    uniswap.totalTokenBuys = uniswap.totalTokenBuys.plus(oneBigInt())
    uniswap.exchangeHistoryEntityCount = uniswap.exchangeHistoryEntityCount.plus(oneBigInt())
    uniswap.uniswapHistoryEntityCount = uniswap.uniswapHistoryEntityCount.plus(oneBigInt())
    uniswap.txCount = uniswap.txCount.plus(oneBigInt())
    uniswap.save()

    let uniswapDayData = UniswapDayData.load(dayID.toString())
    if (uniswapDayData == null) {
      createUniswapDayData(dayID, dayStartTimestamp)
      uniswapDayData = UniswapDayData.load(dayID.toString())
    }

    // save the info for historical data based on timestamp
    let uniswapHistoricalData = new UniswapHistoricalData(uniswap.uniswapHistoryEntityCount.toString())
    uniswapHistoricalData = new UniswapHistoricalData(id)
    uniswapHistoricalData.timestamp = event.block.timestamp.toI32()
    uniswapHistoricalData.totalVolumeInEth = uniswap.totalVolumeInEth
    uniswapHistoricalData.totalLiquidityInEth = uniswap.totalLiquidityInEth
    uniswapHistoricalData.totalVolumeUSD = uniswap.totalVolumeUSD
    uniswapHistoricalData.totalLiquidityUSD = uniswap.totalLiquidityUSD
    uniswapHistoricalData.totalTokenSells = uniswap.totalTokenSells
    uniswapHistoricalData.totalTokenBuys = uniswap.totalTokenBuys
    uniswapHistoricalData.totalAddLiquidity = uniswap.totalAddLiquidity
    uniswapHistoricalData.totalRemoveLiquidity = uniswap.totalRemoveLiquidity
    uniswapHistoricalData.txCount = uniswap.txCount
    uniswapHistoricalData.save()

    // save info
    uniswapDayData.dailyVolumeInETH = uniswapDayData.dailyVolumeInETH.plus(ethAmount)
    uniswapDayData.dailyVolumeInUSD = uniswapDayData.dailyVolumeInUSD.plus(
      ethAmount.times(exchange.price.times(exchange.priceUSD))
    )
    uniswapDayData.totalVolumeInEth = uniswap.totalVolumeInEth
    uniswapDayData.totalLiquidityInEth = uniswap.totalLiquidityInEth
    uniswapDayData.totalVolumeUSD = uniswap.totalVolumeUSD
    uniswapDayData.totalLiquidityUSD = uniswap.totalLiquidityUSD
    uniswapDayData.totalTokenSells = uniswap.totalTokenSells
    uniswapDayData.totalTokenBuys = uniswap.totalTokenBuys
    uniswapDayData.totalAddLiquidity = uniswap.totalAddLiquidity
    uniswapDayData.totalRemoveLiquidity = uniswap.totalRemoveLiquidity
    uniswapDayData.txCount = uniswap.txCount
    uniswapDayData.save()

    /******** CREATE TRADE EVENT  ********/
    const eventID = uniswap.totalTokenBuys.plus(uniswap.totalTokenSells)
    const tokenPurchaseEvent = new TokenPurchaseEvent(eventID.toString().concat('-tp'))
    tokenPurchaseEvent.ethAmount = ethAmount
    tokenPurchaseEvent.tokenAmount = tokenAmount
    tokenPurchaseEvent.tokenFee = zeroBD()
    tokenPurchaseEvent.ethFee = fee
    tokenPurchaseEvent.save()

    /****** Update Transaction ******/
    const txId = event.transaction.hash
      .toHexString()
      .concat('-')
      .concat(event.address.toHexString())
    let transaction = Transaction.load(txId)
    if (transaction == null) {
      transaction = new Transaction(txId)
    }
    const tokenPurchaseEvents = transaction.tokenPurchaseEvents || []
    tokenPurchaseEvents.push(tokenPurchaseEvent.id)
    transaction.tokenPurchaseEvents = tokenPurchaseEvents
    transaction.exchangeAddress = event.address
    transaction.block = event.block.number.toI32()
    transaction.timestamp = event.block.timestamp.toI32()
    transaction.user = event.params.buyer
    transaction.fee = fee
    transaction.save()

    /************************************
     * Handle the historical data below *
     ************************************/

    const eh = new ExchangeHistoricalData(uniswap.exchangeHistoryEntityCount.toString())
    eh.exchangeAddress = event.address
    eh.timestamp = event.block.timestamp.toI32()
    eh.type = 'TokenPurchase'
    eh.ethLiquidity = exchange.ethLiquidity
    eh.tokenLiquidity = exchange.tokenLiquidity
    eh.tradeVolumeUSD = exchange.tradeVolumeUSD
    eh.ethBalance = exchange.ethBalance
    eh.tokenBalance = exchange.tokenBalance
    eh.combinedBalanceInEth = exchange.combinedBalanceInEth
    eh.combinedBalanceInUSD = exchange.combinedBalanceInUSD
    eh.totalUniToken = exchange.totalUniToken
    eh.tokenPriceUSD = exchange.priceUSD
    eh.price = exchange.price
    eh.tradeVolumeToken = exchange.tradeVolumeToken
    eh.tradeVolumeEth = exchange.tradeVolumeEth
    eh.feeInEth = fee
    eh.totalTxsCount = exchange.totalTxsCount
    eh.save()

    let exchangeDayData = ExchangeDayData.load(id)
    if (exchangeDayData == null) {
      exchangeDayData = new ExchangeDayData(id)
      exchangeDayData.exchangeAddress = event.address
      exchangeDayData.date = dayStartTimestamp
      exchangeDayData.exchangeAddress = event.address
      exchangeDayData.ethBalance = zeroBD()
      exchangeDayData.tokenBalance = zeroBD()
      exchangeDayData.marginalEthRate = zeroBD()
      exchangeDayData.ethVolume = zeroBD()
      exchangeDayData.totalEvents = zeroBigInt()
      exchangeDayData.tokenPriceUSD = zeroBD()
    }
    exchangeDayData.ethBalance = exchange.ethBalance
    exchangeDayData.tokenBalance = exchange.tokenBalance
    if (!equalToZero(exchange.ethBalance)) {
      exchangeDayData.marginalEthRate = exchange.tokenBalance.div(exchange.ethBalance).truncate(8)
    }
    exchangeDayData.ethVolume = exchangeDayData.ethVolume.plus(ethAmount)
    exchangeDayData.tokenPriceUSD = exchange.priceUSD
    exchangeDayData.totalEvents = exchangeDayData.totalEvents.plus(oneBigInt())
    exchangeDayData.save()
  }
}

export function handleEthPurchase(event: EthPurchase): void {
  /****** Update Exchange ******/
  const exchangeID = event.address.toHex()
  const exchange = Exchange.load(exchangeID)
  if (exchange !== null) {
    const ethAmount = convertEthToDecimal(event.params.eth_bought)
    let tokenAmount: BigDecimal
    if (exchange.tokenDecimals == null) {
      tokenAmount = event.params.tokens_sold.toBigDecimal()
    } else {
      tokenAmount = convertTokenToDecimal(event.params.tokens_sold, exchange.tokenDecimals)
    }
    exchange.ethBalance = exchange.ethBalance.minus(ethAmount)
    exchange.tokenBalance = exchange.tokenBalance.plus(tokenAmount)
    exchange.sellTokenCount = exchange.sellTokenCount.plus(oneBigInt())
    exchange.lastPrice = exchange.price

    // Here we must handle div by zero, because someone could have bought all the eth or all the tokens
    if (equalToZero(exchange.ethBalance)) {
      exchange.price = zeroBD()
    } else {
      exchange.price = exchange.tokenBalance.div(exchange.ethBalance).truncate(18)
      exchange.combinedBalanceInEth = exchange.ethBalance.plus(exchange.tokenBalance.div(exchange.price)).truncate(18)
    }

    exchange.tradeVolumeToken = exchange.tradeVolumeToken.plus(tokenAmount)
    exchange.tradeVolumeEth = exchange.tradeVolumeEth.plus(ethAmount)
    exchange.totalValue = exchange.totalValue.plus(tokenAmount.times(exchange.price)).truncate(18)
    exchange.weightedAvgPrice = exchange.totalValue.div(exchange.tradeVolumeToken).truncate(18)
    exchange.totalTxsCount = exchange.totalTxsCount.plus(oneBigInt())

    /****** Update User ******/
    // It is conceivable that user does not exist yet here
    const userID = event.params.buyer.toHex()
    let user = User.load(userID)
    if (user == null) {
      user = new User(userID)
      user.save()
    }

    /****** Update UserExchangeData ******/
    const userExchangeID = exchange.tokenAddress
      .toHexString()
      .concat('-')
      .concat(event.params.buyer.toHex())
    let userExchangeData = UserExchangeData.load(userExchangeID)
    if (userExchangeData == null) {
      createUserDataEntity(userExchangeID, event.params.buyer, event.address)
      userExchangeData = UserExchangeData.load(userExchangeID) // reload here
    }

    userExchangeData.ethBought = userExchangeData.ethBought.plus(ethAmount)
    userExchangeData.tokensSold = userExchangeData.tokensSold.plus(tokenAmount)

    // Fee Calculations
    const originalTokenValue = tokenAmount.div(BigDecimal.fromString('1').minus(exchange.fee))
    const fee = originalTokenValue.minus(tokenAmount).truncate(18)
    userExchangeData.tokenFeesPaid = userExchangeData.tokenFeesPaid.plus(fee)

    /****** Get ETH in USD Uniswap USD Tokens ******/
    const oneUSDInEth = uniswapUSDOracle(event.block.number)
    if (!equalToZero(oneUSDInEth)) {
      exchange.lastPriceUSD = exchange.priceUSD
      if (equalToZero(exchange.price)) {
        exchange.priceUSD = zeroBD()
      } else {
        exchange.priceUSD = BigDecimal.fromString('1')
          .div(oneUSDInEth)
          .div(exchange.price)
        exchange.combinedBalanceInUSD = exchange.combinedBalanceInEth.div(oneUSDInEth)
      }
      exchange.weightedAvgPriceUSD = bigDecimalExp18()
        .div(oneUSDInEth)
        .div(exchange.weightedAvgPrice)
      userExchangeData.tokenFeesInUSD = bigDecimalExp18()
        .times(userExchangeData.tokenFeesPaid)
        .div(oneUSDInEth)
        .div(exchange.price)
    }
    // update now that we have usd price
    exchange.tradeVolumeUSD = exchange.tradeVolumeUSD.plus(ethAmount.times(exchange.price.times(exchange.priceUSD)))

    exchange.save()
    userExchangeData.save()

    // Nov 2 2018 is 1541116800 for dayStartTimestamp and 17837 for dayID
    // Nov 3 2018 would be 1541116800 + 86400 and 17838. And so on, for each exchange
    const timestamp = event.block.timestamp.toI32()
    const dayID = timestamp / 86400
    const dayStartTimestamp = dayID * 86400
    const id = event.address
      .toHexString()
      .concat('-')
      .concat(BigInt.fromI32(dayID).toString())

    /****** Update Global Values ******/
    const uniswap = Uniswap.load('1')
    uniswap.totalVolumeInEth = uniswap.totalVolumeInEth.plus(ethAmount)
    uniswap.totalVolumeUSD = uniswap.totalVolumeUSD.plus(ethAmount.times(exchange.price.times(exchange.priceUSD)))
    uniswap.totalTokenSells = uniswap.totalTokenSells.plus(oneBigInt())
    uniswap.exchangeHistoryEntityCount = uniswap.exchangeHistoryEntityCount.plus(oneBigInt())
    uniswap.uniswapHistoryEntityCount = uniswap.uniswapHistoryEntityCount.plus(oneBigInt())
    uniswap.txCount = uniswap.txCount.plus(oneBigInt())
    uniswap.save()

    let uniswapDayData = UniswapDayData.load(dayID.toString())
    if (uniswapDayData == null) {
      createUniswapDayData(dayID, dayStartTimestamp)
      uniswapDayData = UniswapDayData.load(dayID.toString())
    }

    let uniswapHistoricalData = new UniswapHistoricalData(uniswap.uniswapHistoryEntityCount.toString())
    uniswapHistoricalData = new UniswapHistoricalData(id)
    uniswapHistoricalData.timestamp = event.block.timestamp.toI32()
    uniswapHistoricalData.totalVolumeInEth = uniswap.totalVolumeInEth
    uniswapHistoricalData.totalLiquidityInEth = uniswap.totalLiquidityInEth
    uniswapHistoricalData.totalVolumeUSD = uniswap.totalVolumeUSD
    uniswapHistoricalData.totalLiquidityUSD = uniswap.totalLiquidityUSD
    uniswapHistoricalData.totalTokenSells = uniswap.totalTokenSells
    uniswapHistoricalData.totalTokenBuys = uniswap.totalTokenBuys
    uniswapHistoricalData.totalAddLiquidity = uniswap.totalAddLiquidity
    uniswapHistoricalData.totalRemoveLiquidity = uniswap.totalRemoveLiquidity
    uniswapHistoricalData.txCount = uniswap.txCount
    uniswapHistoricalData.save()

    uniswapDayData.dailyVolumeInETH = uniswapDayData.dailyVolumeInETH.plus(ethAmount)
    uniswapDayData.dailyVolumeInUSD = uniswapDayData.dailyVolumeInUSD.plus(
      ethAmount.times(exchange.price.times(exchange.priceUSD))
    )
    uniswapDayData.totalVolumeInEth = uniswap.totalVolumeInEth
    uniswapDayData.totalLiquidityInEth = uniswap.totalLiquidityInEth
    uniswapDayData.totalVolumeUSD = uniswap.totalVolumeUSD
    uniswapDayData.totalLiquidityUSD = uniswap.totalLiquidityUSD
    uniswapDayData.totalTokenSells = uniswap.totalTokenSells
    uniswapDayData.totalTokenBuys = uniswap.totalTokenBuys
    uniswapDayData.totalAddLiquidity = uniswap.totalAddLiquidity
    uniswapDayData.totalRemoveLiquidity = uniswap.totalRemoveLiquidity
    uniswapDayData.txCount = uniswap.txCount
    uniswapDayData.save()

    /*** Create Trade Event ******/
    const eventID = uniswap.totalTokenBuys.plus(uniswap.totalTokenSells)
    const ethPurchaseEvent = new EthPurchaseEvent(eventID.toString().concat('-ep'))
    ethPurchaseEvent.ethAmount = ethAmount
    ethPurchaseEvent.tokenFee = fee
    ethPurchaseEvent.ethFee = zeroBD()
    ethPurchaseEvent.tokenAmount = tokenAmount
    ethPurchaseEvent.save()

    /****** Update Transaction ******/
    const txId = event.transaction.hash
      .toHexString()
      .concat('-')
      .concat(event.address.toHexString())
    let transaction = Transaction.load(txId)
    if (transaction == null) {
      transaction = new Transaction(txId)
    }
    const ethPurchaseEvents = transaction.ethPurchaseEvents || []
    ethPurchaseEvents.push(ethPurchaseEvent.id)
    transaction.ethPurchaseEvents = ethPurchaseEvents
    transaction.exchangeAddress = event.address
    transaction.block = event.block.number.toI32()
    transaction.timestamp = event.block.timestamp.toI32()
    transaction.user = event.params.buyer
    transaction.fee = fee
    transaction.save()

    /************************************
     * Handle the historical data below *
     ************************************/

    const eh = new ExchangeHistoricalData(uniswap.exchangeHistoryEntityCount.toString())
    eh.exchangeAddress = event.address
    eh.timestamp = event.block.timestamp.toI32()
    eh.type = 'EthPurchase'
    eh.ethLiquidity = exchange.ethLiquidity
    eh.tokenLiquidity = exchange.tokenLiquidity
    eh.tradeVolumeUSD = exchange.tradeVolumeUSD
    eh.ethBalance = exchange.ethBalance
    eh.tokenBalance = exchange.tokenBalance
    eh.combinedBalanceInEth = exchange.combinedBalanceInEth
    eh.combinedBalanceInUSD = exchange.combinedBalanceInUSD
    eh.totalUniToken = exchange.totalUniToken
    eh.tokenPriceUSD = exchange.priceUSD
    eh.price = exchange.price
    eh.tradeVolumeToken = exchange.tradeVolumeToken
    eh.tradeVolumeEth = exchange.tradeVolumeEth
    eh.feeInEth = fee
    eh.totalTxsCount = exchange.totalTxsCount
    if (equalToZero(exchange.price)) {
      eh.feeInEth = zeroBD() // Fee isn't actually zero here, but its hard to calculate this value
    } else {
      eh.feeInEth = fee.div(exchange.price).truncate(18)
      eh.save()
    }

    let exchangeDayData = ExchangeDayData.load(id)
    if (exchangeDayData == null) {
      exchangeDayData = new ExchangeDayData(id)
      exchangeDayData.date = dayStartTimestamp
      exchangeDayData.exchangeAddress = event.address
      exchangeDayData.ethBalance = zeroBD()
      exchangeDayData.tokenBalance = zeroBD()
      exchangeDayData.marginalEthRate = zeroBD()
      exchangeDayData.ethVolume = zeroBD()
      exchangeDayData.totalEvents = zeroBigInt()
      exchangeDayData.tokenPriceUSD = zeroBD()
    }
    exchangeDayData.ethBalance = exchange.ethBalance
    exchangeDayData.tokenBalance = exchange.tokenBalance
    if (!equalToZero(exchange.ethBalance)) {
      exchangeDayData.marginalEthRate = exchange.tokenBalance.div(exchange.ethBalance).truncate(8)
    }
    exchangeDayData.ethVolume = exchangeDayData.ethVolume.plus(ethAmount)
    exchangeDayData.tokenPriceUSD = exchange.priceUSD
    exchangeDayData.totalEvents = exchangeDayData.totalEvents.plus(oneBigInt())
    exchangeDayData.save()
  }
}

// Note - function addLiquidity() will emit events log.AddLiquidity and log.Transfer back to back
export function handleAddLiquidity(event: AddLiquidity): void {
  /****** Update Exchange ******/
  const exchangeID = event.address.toHex()
  const exchange = Exchange.load(exchangeID)

  if (exchange !== null) {
    const ethAmount = convertEthToDecimal(event.params.eth_amount)
    let tokenAmount: BigDecimal
    if (exchange.tokenDecimals == null || exchange.tokenDecimals == 0) {
      tokenAmount = event.params.token_amount.toBigDecimal()
    } else {
      tokenAmount = convertTokenToDecimal(event.params.token_amount, exchange.tokenDecimals)
    }
    exchange.ethBalance = exchange.ethBalance.plus(ethAmount)
    exchange.tokenBalance = exchange.tokenBalance.plus(tokenAmount)
    exchange.ethLiquidity = exchange.ethLiquidity.plus(ethAmount)
    exchange.tokenLiquidity = exchange.tokenLiquidity.plus(tokenAmount)
    exchange.addLiquidityCount = exchange.addLiquidityCount.plus(oneBigInt())
    exchange.totalTxsCount = exchange.totalTxsCount.plus(oneBigInt())
    exchange.lastPrice = exchange.price

    // Don't need check to divide by zero here, adding liquidity would make it impossible
    exchange.price = exchange.tokenBalance.div(exchange.ethBalance).truncate(18)
    exchange.combinedBalanceInEth = exchange.ethBalance.plus(exchange.tokenBalance.div(exchange.price)).truncate(18)

    /****** Update User ******/
    const userID = event.params.provider.toHex()
    let user = User.load(userID)
    if (user == null) {
      user = new User(userID)
      user.save()
    }

    /****** Update UserExchangeData ******/
    const userExchangeID = exchange.tokenAddress
      .toHexString()
      .concat('-')
      .concat(event.params.provider.toHexString())
    let userExchangeData = UserExchangeData.load(userExchangeID)
    if (userExchangeData == null) {
      createUserDataEntity(userExchangeID, event.params.provider, event.address)
      userExchangeData = UserExchangeData.load(userExchangeID) // reload here
    }

    // add liquidity provider to list of token holders
    const holders = exchange.tokenHolders
    holders.push(userExchangeData.id)
    exchange.tokenHolders = holders
    exchange.save()

    userExchangeData.ethDeposited = userExchangeData.ethDeposited.plus(ethAmount)
    userExchangeData.tokensDeposited = userExchangeData.tokensDeposited.plus(tokenAmount)

    /****** Get ETH in USD Uniswap USD Tokens ******/
    const oneUSDInEth = uniswapUSDOracle(event.block.number)
    if (!equalToZero(oneUSDInEth)) {
      exchange.lastPriceUSD = exchange.priceUSD
      if (equalToZero(exchange.price)) {
        exchange.priceUSD = zeroBD()
      } else {
        exchange.priceUSD = BigDecimal.fromString('1')
          .div(oneUSDInEth)
          .div(exchange.price)
        exchange.combinedBalanceInUSD = exchange.combinedBalanceInEth.div(oneUSDInEth)
      }
    }

    exchange.save()
    userExchangeData.save()

    // Nov 2 2018 is 1541116800 for dayStartTimestamp and 17837 for dayID
    // Nov 3 2018 would be 1541116800 + 86400 and 17838. And so on, for each exchange
    const timestamp = event.block.timestamp.toI32()
    const dayID = timestamp / 86400
    const dayStartTimestamp = dayID * 86400
    const id = event.address
      .toHexString()
      .concat('-')
      .concat(BigInt.fromI32(dayID).toString())

    /****** Update Global Values ******/
    const uniswap = Uniswap.load('1')
    // times 2, because equal eth and tokens are always added or removed for liquidity
    uniswap.totalLiquidityInEth = uniswap.totalLiquidityInEth.plus(ethAmount.times(BigDecimal.fromString('2')))
    if (!equalToZero(exchange.price) && !equalToZero(exchange.priceUSD)) {
      uniswap.totalLiquidityUSD = uniswap.totalLiquidityInEth.times(exchange.price).times(exchange.priceUSD)
    }
    uniswap.totalAddLiquidity = uniswap.totalAddLiquidity.plus(oneBigInt())
    uniswap.exchangeHistoryEntityCount = uniswap.exchangeHistoryEntityCount.plus(oneBigInt())
    uniswap.uniswapHistoryEntityCount = uniswap.uniswapHistoryEntityCount.plus(oneBigInt())
    uniswap.txCount = uniswap.txCount.plus(oneBigInt())
    uniswap.save()

    let uniswapDayData = UniswapDayData.load(dayID.toString())
    if (uniswapDayData == null) {
      createUniswapDayData(dayID, dayStartTimestamp)
      uniswapDayData = UniswapDayData.load(dayID.toString())
    }

    let uniswapHistoricalData = new UniswapHistoricalData(uniswap.uniswapHistoryEntityCount.toString())
    uniswapHistoricalData = new UniswapHistoricalData(id)
    uniswapHistoricalData.timestamp = event.block.timestamp.toI32()
    uniswapHistoricalData.totalVolumeInEth = uniswap.totalVolumeInEth
    uniswapHistoricalData.totalLiquidityInEth = uniswap.totalLiquidityInEth
    uniswapHistoricalData.totalVolumeUSD = uniswap.totalVolumeUSD
    uniswapHistoricalData.totalLiquidityUSD = uniswap.totalLiquidityUSD
    uniswapHistoricalData.totalTokenSells = uniswap.totalTokenSells
    uniswapHistoricalData.totalTokenBuys = uniswap.totalTokenBuys
    uniswapHistoricalData.totalAddLiquidity = uniswap.totalAddLiquidity
    uniswapHistoricalData.totalRemoveLiquidity = uniswap.totalRemoveLiquidity
    uniswapHistoricalData.txCount = uniswap.txCount
    uniswapHistoricalData.save()

    uniswapDayData.totalVolumeInEth = uniswap.totalVolumeInEth
    uniswapDayData.totalLiquidityInEth = uniswap.totalLiquidityInEth
    uniswapDayData.totalVolumeUSD = uniswap.totalVolumeUSD
    uniswapDayData.totalLiquidityUSD = uniswap.totalLiquidityUSD
    uniswapDayData.totalTokenSells = uniswap.totalTokenSells
    uniswapDayData.totalTokenBuys = uniswap.totalTokenBuys
    uniswapDayData.totalAddLiquidity = uniswap.totalAddLiquidity
    uniswapDayData.totalRemoveLiquidity = uniswap.totalRemoveLiquidity
    uniswapDayData.txCount = uniswap.txCount
    uniswapDayData.save()

    /** Create Liquidity Event */
    const eventId = uniswap.totalAddLiquidity.plus(uniswap.totalRemoveLiquidity)
    const addLiquidityEvent = new AddLiquidityEvent(eventId.toString().concat('-al'))
    addLiquidityEvent.ethAmount = ethAmount
    addLiquidityEvent.tokenAmount = tokenAmount
    const currentUniTokenAmount = exchange.totalUniToken
    let uniMinted = zeroBD()
    if (!equalToZero(exchange.ethBalance)) {
      uniMinted = ethAmount.times(currentUniTokenAmount.div(exchange.ethBalance))
    }
    addLiquidityEvent.uniTokensMinted = uniMinted
    addLiquidityEvent.save()

    /****** Update Transaction ******/
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
    transaction.exchangeAddress = event.address
    transaction.block = event.block.number.toI32()
    transaction.timestamp = event.block.timestamp.toI32()
    transaction.user = event.params.provider
    transaction.fee = zeroBD()
    transaction.save()

    /************************************
     * Handle the historical data below *
     ************************************/
    const eh = new ExchangeHistoricalData(uniswap.exchangeHistoryEntityCount.toString())
    eh.exchangeAddress = event.address
    eh.timestamp = event.block.timestamp.toI32()
    eh.type = 'AddLiquidity'
    eh.ethLiquidity = exchange.ethLiquidity
    eh.tokenLiquidity = exchange.tokenLiquidity
    eh.tradeVolumeUSD = exchange.tradeVolumeUSD
    eh.ethBalance = exchange.ethBalance
    eh.tokenBalance = exchange.tokenBalance
    eh.combinedBalanceInEth = exchange.combinedBalanceInEth
    eh.combinedBalanceInUSD = exchange.combinedBalanceInUSD
    eh.totalUniToken = exchange.totalUniToken
    eh.tokenPriceUSD = exchange.priceUSD
    eh.price = exchange.price
    eh.tradeVolumeToken = exchange.tradeVolumeToken
    eh.tradeVolumeEth = exchange.tradeVolumeEth
    eh.feeInEth = zeroBD()
    eh.totalTxsCount = exchange.totalTxsCount
    eh.save()

    let exchangeDayData = ExchangeDayData.load(id)
    if (exchangeDayData == null) {
      exchangeDayData = new ExchangeDayData(id)
      exchangeDayData.date = dayStartTimestamp
      exchangeDayData.exchangeAddress = event.address
      exchangeDayData.ethBalance = zeroBD()
      exchangeDayData.tokenBalance = zeroBD()
      exchangeDayData.marginalEthRate = zeroBD()
      exchangeDayData.ethVolume = zeroBD()
      exchangeDayData.tokenPriceUSD = zeroBD()
      exchangeDayData.totalEvents = zeroBigInt()
    }
    exchangeDayData.ethBalance = exchange.ethBalance
    exchangeDayData.tokenBalance = exchange.tokenBalance
    if (!equalToZero(exchange.ethBalance)) {
      exchangeDayData.marginalEthRate = exchange.tokenBalance.div(exchange.ethBalance).truncate(8)
    }
    exchangeDayData.tokenPriceUSD = exchange.priceUSD
    exchangeDayData.totalEvents = exchangeDayData.totalEvents.plus(oneBigInt())
    exchangeDayData.save()
  }
}

// Note - function removeLiquidity() will emit events log.AddLiquidity and log.Transfer back to back
export function handleRemoveLiquidity(event: RemoveLiquidity): void {
  /****** Update Exchange ******/
  const exchangeID = event.address.toHex()
  const exchange = Exchange.load(exchangeID)

  if (exchange !== null) {
    const ethAmount = convertEthToDecimal(event.params.eth_amount)
    let tokenAmount: BigDecimal
    if (exchange.tokenDecimals == null || exchange.tokenDecimals == 0) {
      tokenAmount = event.params.token_amount.toBigDecimal()
    } else {
      tokenAmount = convertTokenToDecimal(event.params.token_amount, exchange.tokenDecimals)
    }
    exchange.ethBalance = exchange.ethBalance.minus(ethAmount)
    exchange.tokenBalance = exchange.tokenBalance.minus(tokenAmount)
    exchange.ethLiquidity = exchange.ethLiquidity.minus(ethAmount)
    exchange.tokenLiquidity = exchange.tokenLiquidity.minus(tokenAmount)
    exchange.removeLiquidityCount = exchange.removeLiquidityCount.plus(oneBigInt())
    exchange.totalTxsCount = exchange.totalTxsCount.plus(oneBigInt())
    exchange.lastPrice = exchange.price
    // Here we must handle div by zero, because someone could have bought all the eth or all the tokens
    if (equalToZero(exchange.ethBalance)) {
      exchange.price = zeroBD()
      exchange.combinedBalanceInEth = exchange.ethBalance
    } else {
      exchange.price = exchange.tokenBalance.div(exchange.ethBalance).truncate(18)
      if (equalToZero(exchange.price)) {
        exchange.combinedBalanceInEth = exchange.ethBalance
      } else {
        exchange.combinedBalanceInEth = exchange.ethBalance.plus(exchange.tokenBalance.div(exchange.price)).truncate(18)
      }
    }
    /****** Update UserExchangeData ******/
    const userExchangeID = exchange.tokenAddress
      .toHexString()
      .concat('-')
      .concat(event.params.provider.toHex())
    let userExchangeData = UserExchangeData.load(userExchangeID)
    if (userExchangeData == null) {
      createUserDataEntity(userExchangeID, event.params.provider, event.address)
      userExchangeData = UserExchangeData.load(userExchangeID) // reload here
    }
    userExchangeData.ethWithdrawn = userExchangeData.ethWithdrawn.plus(ethAmount)
    userExchangeData.tokensWithdrawn = userExchangeData.tokensWithdrawn.plus(tokenAmount)
    /****** Get ETH in USD Uniswap USD Tokens ******/
    const oneUSDInEth = uniswapUSDOracle(event.block.number)
    if (!equalToZero(oneUSDInEth)) {
      exchange.lastPriceUSD = exchange.priceUSD
      if (equalToZero(exchange.price)) {
        exchange.priceUSD = zeroBD()
      } else {
        exchange.priceUSD = BigDecimal.fromString('1')
          .div(oneUSDInEth)
          .div(exchange.price)
        exchange.combinedBalanceInUSD = exchange.combinedBalanceInEth.div(oneUSDInEth)
      }
    }

    exchange.save()
    userExchangeData.save()

    // Nov 2 2018 is 1541116800 for dayStartTimestamp and 17837 for dayID
    // Nov 3 2018 would be 1541116800 + 86400 and 17838. And so on, for each exchange
    const timestamp = event.block.timestamp.toI32()
    const dayID = timestamp / 86400
    const dayStartTimestamp = dayID * 86400
    const id = event.address
      .toHexString()
      .concat('-')
      .concat(BigInt.fromI32(dayID).toString())

    /****** Update Global Values ******/
    const uniswap = Uniswap.load('1')
    // times 2, because equal eth and tokens are always added or removed for liquidity
    uniswap.totalLiquidityInEth = uniswap.totalLiquidityInEth.minus(ethAmount.times(BigDecimal.fromString('2')))
    if (!equalToZero(exchange.price) && !equalToZero(exchange.priceUSD)) {
      uniswap.totalLiquidityUSD = uniswap.totalLiquidityInEth.times(exchange.price).times(exchange.priceUSD)
    }
    uniswap.totalRemoveLiquidity = uniswap.totalRemoveLiquidity.plus(oneBigInt())
    uniswap.exchangeHistoryEntityCount = uniswap.exchangeHistoryEntityCount.plus(oneBigInt())
    uniswap.uniswapHistoryEntityCount = uniswap.uniswapHistoryEntityCount.plus(oneBigInt())
    uniswap.txCount = uniswap.txCount.plus(oneBigInt())
    uniswap.save()

    let uniswapDayData = UniswapDayData.load(dayID.toString())
    if (uniswapDayData == null) {
      createUniswapDayData(dayID, dayStartTimestamp)
      uniswapDayData = UniswapDayData.load(dayID.toString())
    }

    let uniswapHistoricalData = new UniswapHistoricalData(uniswap.uniswapHistoryEntityCount.toString())
    uniswapHistoricalData = new UniswapHistoricalData(id)
    uniswapHistoricalData.timestamp = event.block.timestamp.toI32()
    uniswapHistoricalData.totalVolumeInEth = uniswap.totalVolumeInEth
    uniswapHistoricalData.totalLiquidityInEth = uniswap.totalLiquidityInEth
    uniswapHistoricalData.totalVolumeUSD = uniswap.totalVolumeUSD
    uniswapHistoricalData.totalLiquidityUSD = uniswap.totalLiquidityUSD
    uniswapHistoricalData.totalTokenSells = uniswap.totalTokenSells
    uniswapHistoricalData.totalTokenBuys = uniswap.totalTokenBuys
    uniswapHistoricalData.totalAddLiquidity = uniswap.totalAddLiquidity
    uniswapHistoricalData.totalRemoveLiquidity = uniswap.totalRemoveLiquidity
    uniswapHistoricalData.txCount = uniswap.txCount
    uniswapHistoricalData.save()

    uniswapDayData.totalVolumeInEth = uniswap.totalVolumeInEth
    uniswapDayData.totalLiquidityInEth = uniswap.totalLiquidityInEth
    uniswapDayData.totalVolumeUSD = uniswap.totalVolumeUSD
    uniswapDayData.totalLiquidityUSD = uniswap.totalLiquidityUSD
    uniswapDayData.totalTokenSells = uniswap.totalTokenSells
    uniswapDayData.totalTokenBuys = uniswap.totalTokenBuys
    uniswapDayData.totalAddLiquidity = uniswap.totalAddLiquidity
    uniswapDayData.totalRemoveLiquidity = uniswap.totalRemoveLiquidity
    uniswapDayData.txCount = uniswap.txCount
    uniswapDayData.save()

    /** Create Liquidity Event */
    const eventID = uniswap.totalAddLiquidity.plus(uniswap.totalRemoveLiquidity)
    const removeLiquidityEvent = new RemoveLiquidityEvent(eventID.toString().concat('-rl'))
    removeLiquidityEvent.ethAmount = ethAmount
    removeLiquidityEvent.tokenAmount = tokenAmount

    const currentUniTokenAmount = exchange.totalUniToken
    let uniBurned = zeroBD()
    if (!equalToZero(exchange.ethBalance)) {
      uniBurned = ethAmount.times(currentUniTokenAmount.div(exchange.ethBalance))
    }
    removeLiquidityEvent.uniTokensBurned = uniBurned

    removeLiquidityEvent.save()

    /****** Update Transaction ******/
    const txId = event.transaction.hash
      .toHexString()
      .concat('-')
      .concat(event.address.toHexString())
    let transaction = Transaction.load(txId)
    if (transaction == null) {
      transaction = new Transaction(txId)
    }
    const removeLiquidityEvents = transaction.removeLiquidityEvents || []
    removeLiquidityEvents.push(removeLiquidityEvent.id)
    transaction.removeLiquidityEvents = removeLiquidityEvents
    transaction.exchangeAddress = event.address
    transaction.block = event.block.number.toI32()
    transaction.timestamp = event.block.timestamp.toI32()
    transaction.user = event.params.provider
    transaction.fee = zeroBD()

    transaction.save()

    /************************************
     * Handle the historical data below *
     ************************************/
    const eh = new ExchangeHistoricalData(uniswap.exchangeHistoryEntityCount.toString())
    eh.exchangeAddress = event.address
    eh.timestamp = event.block.timestamp.toI32()
    eh.type = 'RemoveLiquidity'
    eh.ethLiquidity = exchange.ethLiquidity
    eh.tokenLiquidity = exchange.tokenLiquidity
    eh.tradeVolumeUSD = exchange.tradeVolumeUSD
    eh.ethBalance = exchange.ethBalance
    eh.tokenBalance = exchange.tokenBalance
    eh.combinedBalanceInEth = exchange.combinedBalanceInEth
    eh.combinedBalanceInUSD = exchange.combinedBalanceInUSD
    eh.totalUniToken = exchange.totalUniToken
    eh.tokenPriceUSD = exchange.priceUSD
    eh.price = exchange.price
    eh.tradeVolumeToken = exchange.tradeVolumeToken
    eh.tradeVolumeEth = exchange.tradeVolumeEth
    eh.feeInEth = zeroBD()
    eh.totalTxsCount = exchange.totalTxsCount
    eh.save()

    let exchangeDayData = ExchangeDayData.load(id)
    if (exchangeDayData == null) {
      exchangeDayData = new ExchangeDayData(id)
      exchangeDayData.date = dayStartTimestamp
      exchangeDayData.exchangeAddress = event.address
      exchangeDayData.ethBalance = zeroBD()
      exchangeDayData.tokenBalance = zeroBD()
      exchangeDayData.marginalEthRate = zeroBD()
      exchangeDayData.ethVolume = zeroBD()
      exchangeDayData.totalEvents = zeroBigInt()
      exchangeDayData.tokenPriceUSD = zeroBD()
    }
    exchangeDayData.ethBalance = exchange.ethBalance
    exchangeDayData.tokenBalance = exchange.tokenBalance
    if (!equalToZero(exchange.ethBalance)) {
      exchangeDayData.marginalEthRate = exchange.tokenBalance.div(exchange.ethBalance).truncate(8)
    }
    exchangeDayData.tokenPriceUSD = exchange.priceUSD
    exchangeDayData.totalEvents = exchangeDayData.totalEvents.plus(oneBigInt())
    exchangeDayData.save()
  }
}

export function handleTransfer(event: Transfer): void {
  const exchangeID = event.address.toHex()
  const exchange = Exchange.load(exchangeID)
  if (exchange !== null) {
    const userToID = exchange.tokenAddress
      .toHexString()
      .concat('-')
      .concat(event.params._to.toHex())
    const userFromID = exchange.tokenAddress
      .toHexString()
      .concat('-')
      .concat(event.params._from.toHex())
    const uniTokens = convertEthToDecimal(event.params._value)

    // Handle Minting Case
    if (event.params._from.toHex() == '0x0000000000000000000000000000000000000000') {
      exchange.totalUniToken = exchange.totalUniToken.plus(uniTokens)
      let userTo = UserExchangeData.load(userToID)
      if (userTo == null) {
        createUserDataEntity(userToID, event.params._to, event.address)
        userTo = UserExchangeData.load(userToID)
      }
      userTo.uniTokenBalance = userTo.uniTokenBalance.plus(uniTokens)
      exchange.save()
      userTo.save()

      // Handle Burning Case
    } else if (event.params._to.toHex() == '0x0000000000000000000000000000000000000000') {
      exchange.totalUniToken = exchange.totalUniToken.minus(uniTokens)
      let userFrom = UserExchangeData.load(userFromID)
      if (userFrom == null) {
        createUserDataEntity(userFromID, event.params._from, event.address)
        userFrom = UserExchangeData.load(userFromID)
      }
      userFrom.uniTokenBalance = userFrom.uniTokenBalance.minus(uniTokens)

      exchange.save()
      userFrom.save()

      // Handle normal transfer cases
    } else {
      if (equalToZero(exchange.totalUniToken)) {
        log.error('exchange.totalUniToken is zero, ignoring transfer', [])
        return
      }
      const ratio = event.params._value.toBigDecimal().div(exchange.totalUniToken)
      const ethTransferred = ratio.times(exchange.ethBalance)
      const tokenTransferred = ratio.times(exchange.tokenBalance)

      let userTo = UserExchangeData.load(userToID)
      if (userTo == null) {
        createUserDataEntity(userToID, event.params._to, event.address)
        userTo = UserExchangeData.load(userToID)
      }

      let userFrom = UserExchangeData.load(userFromID)
      if (userFrom == null) {
        createUserDataEntity(userFromID, event.params._from, event.address)
        userFrom = UserExchangeData.load(userFromID)
      }

      // Note - a transfer is considered a direct buy and sell of eth and tokens from 1 user to another
      userTo.ethBought = userTo.ethBought.plus(ethTransferred)
      userTo.tokensBought = userTo.tokensBought.plus(tokenTransferred)
      userTo.uniTokenBalance = userTo.uniTokenBalance.plus(uniTokens)
      userFrom.ethBought = userTo.ethBought.minus(ethTransferred)
      userFrom.tokensBought = userTo.tokensBought.minus(tokenTransferred)
      userFrom.uniTokenBalance = userTo.uniTokenBalance.minus(uniTokens)
      userTo.save()
      userFrom.save()
    }

    /****** Create User  Entities ******/
    let userFromEntity = User.load(event.params._from.toHex())
    if (userFromEntity == null) {
      userFromEntity = new User(event.params._from.toHex())
      userFromEntity.save()
    }
    let userToEntity = User.load(event.params._to.toHex())
    if (userToEntity == null) {
      userToEntity = new User(event.params._to.toHex())
      userToEntity.save()
    }
  }
}
