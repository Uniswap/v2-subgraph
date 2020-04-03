import { BigInt, BigDecimal, Address, log } from '@graphprotocol/graph-ts'
import {
  ExchangeV1Contract as ExchangeContract,
  TokenPurchase,
  EthPurchase,
  AddLiquidity,
  RemoveLiquidity,
  Transfer
} from '../../types/templates/ExchangeV1Contract/ExchangeV1Contract'

import {
  User,
  UserExchangeData,
  Transaction,
  Exchange,
  Asset,
  Uniswap,
  UniswapFactory,
  ExchangeHistoricalData,
  ExchangeDayData,
  AddLiquidityEvent,
  RemoveLiquidityEvent,
  TokenPurchaseEvent,
  EthPurchaseEvent,
  LiquidityTokenTransfer,
  UniswapDayData,
  UniswapHistoricalData
} from '../../types/schema'
import { uniswapUSDOracle } from './uniswapOracle'

import {
  bigDecimalExp18,
  ZERO_BD,
  ZERO_BI,
  oneBigInt,
  convertEthToDecimal,
  convertTokenToDecimal,
  createUser,
  equalToZero,
  createLiquidityPosition
} from './helpers'

// TODO: convert to use createUser for all instances
function createUserDataEntity(id: string, user: Address, exchange: Address): void {
  const userExchangeData = new UserExchangeData(id)

  userExchangeData.userAddress = user
  userExchangeData.user = user.toHex()
  userExchangeData.exchange = exchange.toHexString()

  userExchangeData.baseDeposited = ZERO_BD
  userExchangeData.targetDeposited = ZERO_BD
  userExchangeData.baseWithdrawn = ZERO_BD
  userExchangeData.targetWithdrawn = ZERO_BD
  userExchangeData.uniTokenBalance = ZERO_BD

  userExchangeData.baseBought = ZERO_BD
  userExchangeData.baseSold = ZERO_BD
  userExchangeData.targetBought = ZERO_BD
  userExchangeData.targetSold = ZERO_BD
  userExchangeData.save()
}

function createUniswapDayData(dayID: i32, dayStartTimestamp: i32): void {
  const uniswapDayData = new UniswapDayData(dayID.toString())
  uniswapDayData.date = dayStartTimestamp
  uniswapDayData.dailyVolumeETH = ZERO_BD
  uniswapDayData.dailyVolumeUSD = ZERO_BD
  uniswapDayData.totalVolumeETH = ZERO_BD
  uniswapDayData.totalLiquidityETH = ZERO_BD
  uniswapDayData.totalVolumeUSD = ZERO_BD
  uniswapDayData.totalLiquidityUSD = ZERO_BD
  uniswapDayData.txCount = ZERO_BI
  uniswapDayData.mostLiquidTokens = []
  uniswapDayData.save()
}
export function handleTokenPurchase(event: TokenPurchase): void {
  /****** Update Exchange ******/
  const exchangeID = event.address.toHex()
  const exchange = Exchange.load(exchangeID)

  if (exchange !== null) {
    const asset = Asset.load(exchange.target)
    const ethAmount = convertEthToDecimal(event.params.eth_sold)
    let tokenAmount: BigDecimal
    if (asset.decimals == null || asset.decimals == 0) {
      tokenAmount = event.params.tokens_bought.toBigDecimal()
    } else {
      tokenAmount = convertTokenToDecimal(event.params.tokens_bought, asset.decimals)
    }

    exchange.baseBalance = exchange.baseBalance.plus(ethAmount)
    exchange.targetBalance = exchange.targetBalance.minus(tokenAmount)
    // exchange.lastPrice = exchange.price

    if (!equalToZero(exchange.baseBalance)) {
      exchange.targetPrice = exchange.targetBalance.div(exchange.baseBalance).truncate(18)
    }

    if (!equalToZero(exchange.targetPrice)) {
      exchange.combinedBalanceETH = exchange.baseBalance
        .plus(exchange.targetBalance.div(exchange.targetPrice))
        .truncate(18)
    }

    exchange.tradeVolumeTarget = exchange.tradeVolumeTarget.plus(tokenAmount)
    exchange.tradeVolumeETH = exchange.tradeVolumeETH.plus(ethAmount)
    // exchange.totalValue = exchange.totalValue.plus(tokenAmount.times(exchange.price)).truncate(18)

    // if (!equalToZero(exchange.tradeVolumeTarget)) {
    //   exchange.weightedAvgPrice = exchange.totalValue.div(exchange.tradeVolumeTarget).truncate(18)
    // }
    exchange.totalTxsCount = exchange.totalTxsCount.plus(oneBigInt())

    /****** Update User ******/
    const userID = event.params.buyer.toHex()
    let user = User.load(userID)
    if (user == null) {
      user = new User(userID)
      user.save()
    }

    /****** Update UserExchangeData ******/
    const userExchangeID = exchange.target.concat('-').concat(event.params.buyer.toHex())
    let userExchangeData = UserExchangeData.load(userExchangeID)

    // if no userExchangeData yet create new one
    if (userExchangeData == null) {
      createUserDataEntity(userExchangeID, event.params.buyer, event.address)
      userExchangeData = UserExchangeData.load(userExchangeID) // reload here
    }

    //update values
    userExchangeData.baseSold = userExchangeData.baseSold.plus(ethAmount)
    userExchangeData.targetBought = userExchangeData.targetBought.plus(tokenAmount)

    const originalEthValue = ethAmount.div(BigDecimal.fromString('1').minus(exchange.fee))
    const fee = originalEthValue.minus(ethAmount).truncate(18)
    // userExchangeData.ethFeesPaid = userExchangeData.ethFeesPaid.plus(fee)

    /****** Get ETH in USD Uniswap USD Tokens ******/
    // const oneUSDInEth = uniswapUSDOracle(event.block.number)
    // if (!equalToZero(oneUSDInEth)) {
    //   exchange.lastPriceUSD = exchange.priceUSD
    //   if (equalToZero(exchange.price)) {
    //     exchange.priceUSD = ZERO_BD
    //   } else {
    //     exchange.priceUSD = BigDecimal.fromString('1')
    //       .div(oneUSDInEth)
    //       .div(exchange.price)
    //       .truncate(18)
    //     exchange.combinedBalanceUSD = exchange.combinedBalanceETH.div(oneUSDInEth).truncate(18)
    //   }
    //   if (!equalToZero(exchange.weightedAvgPrice)) {
    //     exchange.weightedAvgPriceUSD = bigDecimalExp18()
    //       .div(oneUSDInEth)
    //       .div(exchange.weightedAvgPrice)
    //       .truncate(18)
    //   }
    //   userExchangeData.ethFeesInUSD = bigDecimalExp18()
    //     .times(userExchangeData.ethFeesPaid)
    //     .div(oneUSDInEth)
    //     .truncate(18)
    // }

    // update now that we have usd price
    // exchange.tradeVolumeUSD = exchange.tradeVolumeUSD.plus(ethAmount.times(exchange.price.times(exchange.priceUSD)))

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
    uniswap.totalVolumeETH = uniswap.totalVolumeETH.plus(ethAmount)
    // uniswap.totalVolumeUSD = uniswap.totalVolumeUSD.plus(ethAmount.times(exchange.price.times(exchange.priceUSD)))
    uniswap.totalTokenBuys = uniswap.totalTokenBuys.plus(oneBigInt())
    uniswap.exchangeHistoryEntityCount = uniswap.exchangeHistoryEntityCount.plus(oneBigInt())
    uniswap.uniswapHistoryEntityCount = uniswap.uniswapHistoryEntityCount.plus(oneBigInt())
    uniswap.txCount = uniswap.txCount.plus(oneBigInt())
    uniswap.save()

    const factory = UniswapFactory.load('1')
    factory.totalVolumeETH = factory.totalVolumeETH.plus(ethAmount)
    // factory.totalVolumeUSD = factory.totalVolumeUSD.plus(ethAmount.times(exchange.price.times(exchange.priceUSD)))
    factory.totalTokenBuys = uniswap.totalTokenBuys.plus(oneBigInt())
    factory.exchangeHistoryEntityCount = uniswap.exchangeHistoryEntityCount.plus(oneBigInt())
    factory.uniswapHistoryEntityCount = uniswap.uniswapHistoryEntityCount.plus(oneBigInt())
    factory.txCount = factory.txCount.plus(oneBigInt())
    factory.save()

    let uniswapDayData = UniswapDayData.load(dayID.toString())
    if (uniswapDayData == null) {
      createUniswapDayData(dayID, dayStartTimestamp)
      uniswapDayData = UniswapDayData.load(dayID.toString())
    }

    // save the info for historical data based on timestamp
    let uniswapHistoricalData = new UniswapHistoricalData(uniswap.uniswapHistoryEntityCount.toString())
    uniswapHistoricalData = new UniswapHistoricalData(id)
    uniswapHistoricalData.timestamp = event.block.timestamp.toI32()
    uniswapHistoricalData.totalVolumeETH = uniswap.totalVolumeETH
    uniswapHistoricalData.totalLiquidityETH = uniswap.totalLiquidityETH
    uniswapHistoricalData.totalVolumeUSD = uniswap.totalVolumeUSD
    uniswapHistoricalData.totalLiquidityUSD = uniswap.totalLiquidityUSD
    uniswapHistoricalData.txCount = uniswap.txCount
    uniswapHistoricalData.save()

    // save info
    uniswapDayData.dailyVolumeETH = uniswapDayData.dailyVolumeETH.plus(ethAmount)
    // uniswapDayData.dailyVolumeInUSD = uniswapDayData.dailyVolumeInUSD.plus(
    //   ethAmount.times(exchange.price.times(exchange.priceUSD))
    // )
    uniswapDayData.totalVolumeETH = uniswap.totalVolumeETH
    uniswapDayData.totalLiquidityETH = uniswap.totalLiquidityETH
    uniswapDayData.totalVolumeUSD = uniswap.totalVolumeUSD
    uniswapDayData.totalLiquidityUSD = uniswap.totalLiquidityUSD
    uniswapDayData.txCount = uniswap.txCount
    uniswapDayData.mostLiquidTokens = []
    uniswapDayData.save()

    /******** CREATE TRADE EVENT  ********/
    const eventID = uniswap.totalTokenBuys.plus(uniswap.totalTokenSells)
    const tokenPurchaseEvent = new TokenPurchaseEvent(eventID.toString().concat('-tp'))
    tokenPurchaseEvent.exchange = event.address.toHex()
    tokenPurchaseEvent.ethAmount = ethAmount
    tokenPurchaseEvent.tokenAmount = tokenAmount
    tokenPurchaseEvent.tokenFee = ZERO_BD
    tokenPurchaseEvent.ethFee = fee
    tokenPurchaseEvent.save()

    /****** Update Transaction ******/
    const txId = event.transaction.hash.toHexString()
    let transaction = Transaction.load(txId)
    if (transaction == null) {
      transaction = new Transaction(txId)
    }
    const tokenPurchaseEvents = transaction.tokenPurchaseEvents || []
    tokenPurchaseEvents.push(tokenPurchaseEvent.id)
    transaction.tokenPurchaseEvents = tokenPurchaseEvents
    transaction.blockNumber = event.block.number
    transaction.timestamp = event.block.timestamp
    transaction.mints = []
    transaction.burns = []
    transaction.swaps = []
    transaction.save()

    /************************************
     * Handle the historical data below *
     ************************************/

    const eh = new ExchangeHistoricalData(uniswap.exchangeHistoryEntityCount.toString())
    eh.exchangeAddress = event.address
    eh.timestamp = event.block.timestamp.toI32()
    eh.type = 'TokenPurchase'
    eh.baseLiquidity = exchange.baseLiquidity
    eh.targetLiquidity = exchange.targetLiquidity
    eh.tradeVolumeUSD = exchange.tradeVolumeUSD
    eh.baseBalance = exchange.baseBalance
    eh.targetBalance = exchange.targetBalance
    eh.combinedBalanceETH = exchange.combinedBalanceETH
    eh.combinedBalanceUSD = exchange.combinedBalanceUSD
    eh.totalUniToken = exchange.totalUniToken
    // eh.tokenPriceUSD = exchange.priceUSD
    eh.basePrice = exchange.basePrice
    eh.targetPrice = exchange.targetPrice
    eh.tradeVolumeTarget = exchange.tradeVolumeTarget
    eh.tradeVolumeBase = exchange.tradeVolumeBase
    eh.tradeVolumeETH = exchange.tradeVolumeETH
    // eh.feeInEth = fee
    eh.totalTxsCount = exchange.totalTxsCount
    eh.save()

    let exchangeDayData = ExchangeDayData.load(id)
    if (exchangeDayData == null) {
      exchangeDayData = new ExchangeDayData(id)
      exchangeDayData.exchangeAddress = event.address
      exchangeDayData.date = dayStartTimestamp
      exchangeDayData.exchangeAddress = event.address
      exchangeDayData.ethBalance = ZERO_BD
      exchangeDayData.tokenBalance = ZERO_BD
      exchangeDayData.marginalEthRate = ZERO_BD
      exchangeDayData.ethVolume = ZERO_BD
      exchangeDayData.totalEvents = ZERO_BI
      exchangeDayData.tokenPriceUSD = ZERO_BD
    }
    exchangeDayData.ethBalance = exchange.baseBalance
    exchangeDayData.tokenBalance = exchange.targetBalance
    if (!equalToZero(exchange.baseBalance)) {
      exchangeDayData.marginalEthRate = exchange.targetBalance.div(exchange.baseBalance).truncate(8)
    }
    exchangeDayData.ethVolume = exchangeDayData.ethVolume.plus(ethAmount)
    // exchangeDayData.tokenPriceUSD = exchange.priceUSD
    exchangeDayData.totalEvents = exchangeDayData.totalEvents.plus(oneBigInt())
    exchangeDayData.save()
  }
}

export function handleEthPurchase(event: EthPurchase): void {
  /****** Update Exchange ******/
  const exchangeID = event.address.toHex()
  const exchange = Exchange.load(exchangeID)
  if (exchange !== null) {
    const asset = Asset.load(exchange.target)
    const ethAmount = convertEthToDecimal(event.params.eth_bought)
    let tokenAmount: BigDecimal
    if (asset.decimals == null) {
      tokenAmount = event.params.tokens_sold.toBigDecimal()
    } else {
      tokenAmount = convertTokenToDecimal(event.params.tokens_sold, asset.decimals)
    }

    exchange.baseBalance = exchange.baseBalance.minus(ethAmount)
    exchange.targetBalance = exchange.targetBalance.plus(tokenAmount)
    // exchange.lastPrice = exchange.price

    // Here we must handle div by zero, because someone could have bought all the eth or all the tokens
    if (equalToZero(exchange.baseBalance)) {
      exchange.targetPrice = ZERO_BD
    } else {
      exchange.targetPrice = exchange.targetBalance.div(exchange.baseBalance).truncate(18)
      if (!equalToZero(exchange.targetPrice)) {
        exchange.combinedBalanceETH = exchange.baseBalance
          .plus(exchange.targetBalance.div(exchange.targetPrice))
          .truncate(18)
      }
    }

    exchange.tradeVolumeTarget = exchange.tradeVolumeTarget.plus(tokenAmount)
    exchange.tradeVolumeETH = exchange.tradeVolumeETH.plus(ethAmount)
    // exchange.totalValue = exchange.totalValue.plus(tokenAmount.times(exchange.price)).truncate(18)
    // if (!equalToZero(exchange.tradeVolumeTarget)) {
    //   exchange.weightedAvgPrice = exchange.totalValue.div(exchange.tradeVolumeTarget).truncate(18)
    // }
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
    const userExchangeID = exchange.target.concat('-').concat(event.params.buyer.toHex())
    let userExchangeData = UserExchangeData.load(userExchangeID)
    if (userExchangeData == null) {
      createUserDataEntity(userExchangeID, event.params.buyer, event.address)
      userExchangeData = UserExchangeData.load(userExchangeID) // reload here
    }

    userExchangeData.baseBought = userExchangeData.baseBought.plus(ethAmount)
    userExchangeData.targetSold = userExchangeData.targetSold.plus(tokenAmount)

    // Fee Calculations
    const originalTokenValue = tokenAmount.div(BigDecimal.fromString('1').minus(exchange.fee))
    const fee = originalTokenValue.minus(tokenAmount).truncate(18)
    // userExchangeData.tokenFeesPaid = userExchangeData.tokenFeesPaid.plus(fee)

    /****** Get ETH in USD Uniswap USD Tokens ******/
    // const oneUSDInEth = uniswapUSDOracle(event.block.number)
    // if (!equalToZero(oneUSDInEth)) {
    //   exchange.lastPriceUSD = exchange.priceUSD
    //   if (equalToZero(exchange.price)) {
    //     exchange.priceUSD = ZERO_BD
    //   } else {
    //     exchange.priceUSD = BigDecimal.fromString('1')
    //       .div(oneUSDInEth)
    //       .div(exchange.price)
    //     exchange.combinedBalanceUSD = exchange.combinedBalanceETH.div(oneUSDInEth)
    //   }
    //   if (!equalToZero(exchange.weightedAvgPrice)) {
    //     exchange.weightedAvgPriceUSD = bigDecimalExp18()
    //       .div(oneUSDInEth)
    //       .div(exchange.weightedAvgPrice)
    //   }
    //   if (!equalToZero(exchange.price)) {
    //     userExchangeData.tokenFeesInUSD = bigDecimalExp18()
    //       .times(userExchangeData.tokenFeesPaid)
    //       .div(oneUSDInEth)
    //       .div(exchange.price)
    //   }
    // }
    // update now that we have usd price
    // exchange.tradeVolumeUSD = exchange.tradeVolumeUSD.plus(ethAmount.times(exchange.price.times(exchange.priceUSD)))

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
    uniswap.totalVolumeETH = uniswap.totalVolumeETH.plus(ethAmount)
    // uniswap.totalVolumeUSD = uniswap.totalVolumeUSD.plus(ethAmount.times(exchange.price.times(exchange.priceUSD)))
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
    uniswapHistoricalData.totalVolumeETH = uniswap.totalVolumeETH
    uniswapHistoricalData.totalLiquidityETH = uniswap.totalLiquidityETH
    uniswapHistoricalData.totalVolumeUSD = uniswap.totalVolumeUSD
    uniswapHistoricalData.totalLiquidityUSD = uniswap.totalLiquidityUSD
    uniswapHistoricalData.txCount = uniswap.txCount
    uniswapHistoricalData.save()

    uniswapDayData.dailyVolumeETH = uniswapDayData.dailyVolumeETH.plus(ethAmount)
    // uniswapDayData.dailyVolumeInUSD = uniswapDayData.dailyVolumeInUSD.plus(
    //   ethAmount.times(exchange.price.times(exchange.priceUSD))
    // )
    uniswapDayData.totalVolumeETH = uniswap.totalVolumeETH
    uniswapDayData.totalLiquidityETH = uniswap.totalLiquidityETH
    uniswapDayData.totalVolumeUSD = uniswap.totalVolumeUSD
    uniswapDayData.totalLiquidityUSD = uniswap.totalLiquidityUSD
    uniswapDayData.txCount = uniswap.txCount
    uniswapDayData.mostLiquidTokens = []
    uniswapDayData.save()

    /*** Create Trade Event ******/
    const eventID = uniswap.totalTokenBuys.plus(uniswap.totalTokenSells)
    const ethPurchaseEvent = new EthPurchaseEvent(eventID.toString().concat('-ep'))
    ethPurchaseEvent.exchange = event.address.toHex()
    ethPurchaseEvent.ethAmount = ethAmount
    ethPurchaseEvent.tokenFee = fee
    ethPurchaseEvent.ethFee = ZERO_BD
    ethPurchaseEvent.tokenAmount = tokenAmount
    ethPurchaseEvent.save()

    /****** Update Transaction ******/
    const txId = event.transaction.hash.toHexString()
    let transaction = Transaction.load(txId)
    if (transaction == null) {
      transaction = new Transaction(txId)
    }
    const ethPurchaseEvents = transaction.ethPurchaseEvents || []
    ethPurchaseEvents.push(ethPurchaseEvent.id)
    transaction.ethPurchaseEvents = ethPurchaseEvents
    transaction.blockNumber = event.block.number
    transaction.timestamp = event.block.timestamp
    transaction.mints = []
    transaction.burns = []
    transaction.swaps = []
    transaction.save()

    /************************************
     * Handle the historical data below *
     ************************************/

    const eh = new ExchangeHistoricalData(uniswap.exchangeHistoryEntityCount.toString())
    eh.exchangeAddress = event.address
    eh.timestamp = event.block.timestamp.toI32()
    eh.type = 'EthPurchase'
    eh.baseLiquidity = exchange.baseLiquidity
    eh.targetLiquidity = exchange.targetLiquidity
    eh.tradeVolumeUSD = exchange.tradeVolumeUSD
    eh.baseBalance = exchange.baseBalance
    eh.targetBalance = exchange.targetBalance
    eh.combinedBalanceETH = exchange.combinedBalanceETH
    eh.combinedBalanceUSD = exchange.combinedBalanceUSD
    eh.totalUniToken = exchange.totalUniToken
    eh.basePrice = exchange.basePrice
    eh.targetPrice = exchange.targetPrice
    eh.tradeVolumeTarget = exchange.tradeVolumeTarget
    eh.tradeVolumeBase = exchange.tradeVolumeBase
    eh.tradeVolumeETH = exchange.tradeVolumeETH
    // eh.feeInEth = fee
    eh.totalTxsCount = exchange.totalTxsCount
    eh.save()

    let exchangeDayData = ExchangeDayData.load(id)
    if (exchangeDayData == null) {
      exchangeDayData = new ExchangeDayData(id)
      exchangeDayData.date = dayStartTimestamp
      exchangeDayData.exchangeAddress = event.address
      exchangeDayData.ethBalance = ZERO_BD
      exchangeDayData.tokenBalance = ZERO_BD
      exchangeDayData.marginalEthRate = ZERO_BD
      exchangeDayData.ethVolume = ZERO_BD
      exchangeDayData.totalEvents = ZERO_BI
      exchangeDayData.tokenPriceUSD = ZERO_BD
    }
    exchangeDayData.ethBalance = exchange.baseBalance
    exchangeDayData.tokenBalance = exchange.targetBalance
    if (!equalToZero(exchange.baseBalance)) {
      exchangeDayData.marginalEthRate = exchange.targetBalance.div(exchange.baseBalance).truncate(8)
    }
    exchangeDayData.ethVolume = exchangeDayData.ethVolume.plus(ethAmount)
    // exchangeDayData.tokenPriceUSD = exchange.priceUSD
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
    const asset = Asset.load(exchange.target)
    const ethAmount = convertEthToDecimal(event.params.eth_amount)
    let tokenAmount: BigDecimal
    if (asset.decimals == null || asset.decimals == 0) {
      tokenAmount = event.params.token_amount.toBigDecimal()
    } else {
      tokenAmount = convertTokenToDecimal(event.params.token_amount, asset.decimals)
    }
    exchange.baseBalance = exchange.baseBalance.plus(ethAmount)
    exchange.targetBalance = exchange.targetBalance.plus(tokenAmount)
    exchange.baseLiquidity = exchange.baseLiquidity.plus(ethAmount)
    exchange.targetLiquidity = exchange.targetLiquidity.plus(tokenAmount)
    exchange.totalTxsCount = exchange.totalTxsCount.plus(oneBigInt())
    // exchange.lastPrice = exchange.price

    // Don't need check to divide by zero here, adding liquidity would make it impossible
    if (!equalToZero(exchange.baseBalance)) {
      exchange.targetPrice = exchange.targetBalance.div(exchange.baseBalance).truncate(18)
    }
    if (!equalToZero(exchange.targetPrice)) {
      exchange.combinedBalanceETH = exchange.baseBalance
        .plus(exchange.targetBalance.div(exchange.targetPrice))
        .truncate(18)
    }

    /****** Update User ******/
    const userID = event.params.provider.toHex()
    let user = User.load(userID)
    if (user == null) {
      user = new User(userID)
      user.save()
    }

    /****** Update UserExchangeData ******/
    const userExchangeID = exchange.target.concat('-').concat(event.params.provider.toHexString())
    let userExchangeData = UserExchangeData.load(userExchangeID)
    if (userExchangeData == null) {
      createUserDataEntity(userExchangeID, event.params.provider, event.address)
      userExchangeData = UserExchangeData.load(userExchangeID) // reload here
    }
    exchange.save()

    userExchangeData.baseDeposited = userExchangeData.baseDeposited.plus(ethAmount)
    userExchangeData.targetDeposited = userExchangeData.targetDeposited.plus(tokenAmount)

    /****** Get ETH in USD Uniswap USD Tokens ******/
    // const oneUSDInEth = uniswapUSDOracle(event.block.number)
    // if (!equalToZero(oneUSDInEth)) {
    //   exchange.lastPriceUSD = exchange.priceUSD
    //   if (equalToZero(exchange.price)) {
    //     exchange.priceUSD = ZERO_BD
    //   } else {
    //     exchange.priceUSD = BigDecimal.fromString('1')
    //       .div(oneUSDInEth)
    //       .div(exchange.price)
    //     exchange.combinedBalanceUSD = exchange.combinedBalanceETH.div(oneUSDInEth)
    //   }
    // }

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
    uniswap.totalLiquidityETH = uniswap.totalLiquidityETH.plus(ethAmount.times(BigDecimal.fromString('2')))
    // if (!equalToZero(exchange.price) && !equalToZero(exchange.priceUSD)) {
    //   uniswap.totalLiquidityUSD = uniswap.totalLiquidityETH.times(exchange.price).times(exchange.priceUSD)
    // }
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
    uniswapHistoricalData.totalVolumeETH = uniswap.totalVolumeETH
    uniswapHistoricalData.totalLiquidityETH = uniswap.totalLiquidityETH
    uniswapHistoricalData.totalVolumeUSD = uniswap.totalVolumeUSD
    uniswapHistoricalData.totalLiquidityUSD = uniswap.totalLiquidityUSD
    uniswapHistoricalData.txCount = uniswap.txCount
    uniswapHistoricalData.save()

    uniswapDayData.totalVolumeETH = uniswap.totalVolumeETH
    uniswapDayData.totalLiquidityETH = uniswap.totalLiquidityETH
    uniswapDayData.totalVolumeUSD = uniswap.totalVolumeUSD
    uniswapDayData.totalLiquidityUSD = uniswap.totalLiquidityUSD
    uniswapDayData.txCount = uniswap.txCount
    uniswapDayData.mostLiquidTokens = []
    uniswapDayData.save()

    /** Create Liquidity Event */
    const eventId = uniswap.totalAddLiquidity.plus(uniswap.totalRemoveLiquidity)
    const addLiquidityEvent = new AddLiquidityEvent(eventId.toString().concat('-al'))
    addLiquidityEvent.exchange = event.address.toHex()
    addLiquidityEvent.ethAmount = ethAmount
    addLiquidityEvent.tokenAmount = tokenAmount
    const currentUniTokenAmount = exchange.totalUniToken
    let uniMinted = ZERO_BD
    if (!equalToZero(exchange.baseBalance)) {
      uniMinted = ethAmount.times(currentUniTokenAmount.div(exchange.baseBalance))
    }
    addLiquidityEvent.uniTokensMinted = uniMinted
    addLiquidityEvent.save()

    /****** Update Transaction ******/
    const txId = event.transaction.hash.toHexString()
    let transaction = Transaction.load(txId)
    if (transaction == null) {
      transaction = new Transaction(txId)
    }
    const addLiquidityEvents = transaction.addLiquidityEvents || []
    addLiquidityEvents.push(addLiquidityEvent.id)
    transaction.addLiquidityEvents = addLiquidityEvents
    transaction.blockNumber = event.block.number
    transaction.timestamp = event.block.timestamp
    transaction.mints = []
    transaction.burns = []
    transaction.swaps = []
    transaction.save()

    /************************************
     * Handle the historical data below *
     ************************************/
    const eh = new ExchangeHistoricalData(uniswap.exchangeHistoryEntityCount.toString())
    eh.exchangeAddress = event.address
    eh.timestamp = event.block.timestamp.toI32()
    eh.type = 'AddLiquidity'
    eh.baseLiquidity = exchange.baseLiquidity
    eh.targetLiquidity = exchange.targetLiquidity
    eh.tradeVolumeUSD = exchange.tradeVolumeUSD
    eh.baseBalance = exchange.baseBalance
    eh.targetBalance = exchange.targetBalance
    eh.combinedBalanceETH = exchange.combinedBalanceETH
    eh.combinedBalanceUSD = exchange.combinedBalanceUSD
    eh.totalUniToken = exchange.totalUniToken
    // eh.tokenPriceUSD = exchange.priceUSD
    eh.basePrice = exchange.basePrice
    eh.targetPrice = exchange.targetPrice
    eh.tradeVolumeTarget = exchange.tradeVolumeTarget
    eh.tradeVolumeBase = exchange.tradeVolumeBase
    eh.tradeVolumeETH = exchange.tradeVolumeETH
    // eh.feeInEth = ZERO_BD
    eh.totalTxsCount = exchange.totalTxsCount
    eh.save()

    let exchangeDayData = ExchangeDayData.load(id)
    if (exchangeDayData == null) {
      exchangeDayData = new ExchangeDayData(id)
      exchangeDayData.date = dayStartTimestamp
      exchangeDayData.exchangeAddress = event.address
      exchangeDayData.ethBalance = ZERO_BD
      exchangeDayData.tokenBalance = ZERO_BD
      exchangeDayData.marginalEthRate = ZERO_BD
      exchangeDayData.ethVolume = ZERO_BD
      exchangeDayData.tokenPriceUSD = ZERO_BD
      exchangeDayData.totalEvents = ZERO_BI
    }
    exchangeDayData.ethBalance = exchange.baseBalance
    exchangeDayData.tokenBalance = exchange.targetBalance
    if (!equalToZero(exchange.baseBalance)) {
      exchangeDayData.marginalEthRate = exchange.targetBalance.div(exchange.baseBalance).truncate(8)
    }
    // exchangeDayData.tokenPriceUSD = exchange.priceUSD
    exchangeDayData.totalEvents = exchangeDayData.totalEvents.plus(oneBigInt())
    exchangeDayData.save()
  }
}

// Note - function removeLiquidity() will emit events log.AddLiquidity and log.Transfer back to back
export function handleRemoveLiquidity(event: RemoveLiquidity): void {
  log.debug('Remove liquidity event triggered - transaction: {}', [event.transaction.hash.toHex()])
  /****** Update Exchange ******/
  const exchangeID = event.address.toHex()
  const exchange = Exchange.load(exchangeID)

  if (exchange !== null) {
    const asset = Asset.load(exchange.target)
    const ethAmount = convertEthToDecimal(event.params.eth_amount)
    let tokenAmount: BigDecimal
    if (asset.decimals == null || asset.decimals == 0) {
      tokenAmount = event.params.token_amount.toBigDecimal()
    } else {
      tokenAmount = convertTokenToDecimal(event.params.token_amount, asset.decimals)
    }
    exchange.baseBalance = exchange.baseBalance.minus(ethAmount)
    exchange.targetBalance = exchange.targetBalance.minus(tokenAmount)
    exchange.baseLiquidity = exchange.baseLiquidity.minus(ethAmount)
    exchange.targetLiquidity = exchange.targetLiquidity.minus(tokenAmount)
    exchange.totalTxsCount = exchange.totalTxsCount.plus(oneBigInt())
    // exchange.lastPrice = exchange.price
    // Here we must handle div by zero, because someone could have bought all the eth or all the tokens
    if (equalToZero(exchange.baseBalance)) {
      exchange.targetPrice = ZERO_BD
      exchange.combinedBalanceETH = exchange.baseBalance
    } else {
      exchange.targetPrice = exchange.targetBalance.div(exchange.baseBalance).truncate(18)
      if (equalToZero(exchange.targetPrice)) {
        exchange.combinedBalanceETH = exchange.baseBalance
      } else {
        exchange.combinedBalanceETH = exchange.baseBalance
          .plus(exchange.targetBalance.div(exchange.targetPrice))
          .truncate(18)
      }
    }
    /****** Update UserExchangeData ******/
    const userExchangeID = exchange.target.concat('-').concat(event.params.provider.toHex())
    let userExchangeData = UserExchangeData.load(userExchangeID)
    if (userExchangeData == null) {
      createUserDataEntity(userExchangeID, event.params.provider, event.address)
      userExchangeData = UserExchangeData.load(userExchangeID) // reload here
    }
    userExchangeData.baseWithdrawn = userExchangeData.baseWithdrawn.plus(ethAmount)
    userExchangeData.targetWithdrawn = userExchangeData.targetWithdrawn.plus(tokenAmount)
    /****** Get ETH in USD Uniswap USD Tokens ******/
    // const oneUSDInEth = uniswapUSDOracle(event.block.number)
    // if (!equalToZero(oneUSDInEth)) {
    //   exchange.lastPriceUSD = exchange.priceUSD
    //   if (equalToZero(exchange.price)) {
    //     exchange.priceUSD = ZERO_BD
    //   } else {
    //     exchange.priceUSD = BigDecimal.fromString('1')
    //       .div(oneUSDInEth)
    //       .div(exchange.price)
    //     exchange.combinedBalanceUSD = exchange.combinedBalanceETH.div(oneUSDInEth)
    //   }
    // }

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
    uniswap.totalLiquidityETH = uniswap.totalLiquidityETH.minus(ethAmount.times(BigDecimal.fromString('2')))
    // if (!equalToZero(exchange.price) && !equalToZero(exchange.priceUSD)) {
    //   uniswap.totalLiquidityUSD = uniswap.totalLiquidityETH.times(exchange.price).times(exchange.priceUSD)
    // }
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
    uniswapHistoricalData.totalVolumeETH = uniswap.totalVolumeETH
    uniswapHistoricalData.totalLiquidityETH = uniswap.totalLiquidityETH
    uniswapHistoricalData.totalVolumeUSD = uniswap.totalVolumeUSD
    uniswapHistoricalData.totalLiquidityUSD = uniswap.totalLiquidityUSD
    uniswapHistoricalData.txCount = uniswap.txCount
    uniswapHistoricalData.save()

    uniswapDayData.totalVolumeETH = uniswap.totalVolumeETH
    uniswapDayData.totalLiquidityETH = uniswap.totalLiquidityETH
    uniswapDayData.totalVolumeUSD = uniswap.totalVolumeUSD
    uniswapDayData.totalLiquidityUSD = uniswap.totalLiquidityUSD
    uniswapDayData.txCount = uniswap.txCount
    uniswapDayData.mostLiquidTokens = []
    uniswapDayData.save()

    /** Create Liquidity Event */
    const eventID = event.transaction.hash.toHex() + '-' + event.transactionLogIndex.toString()
    log.debug('RL eventID: {}', [eventID])
    const removeLiquidityEvent = new RemoveLiquidityEvent(eventID.concat('-rl'))
    removeLiquidityEvent.exchange = event.address.toHex()
    removeLiquidityEvent.ethAmount = ethAmount
    removeLiquidityEvent.tokenAmount = tokenAmount

    const currentUniTokenAmount = exchange.totalUniToken
    let uniBurned = ZERO_BD
    if (!equalToZero(exchange.baseBalance)) {
      uniBurned = ethAmount.times(currentUniTokenAmount.div(exchange.baseBalance))
    }
    removeLiquidityEvent.uniTokensBurned = uniBurned

    removeLiquidityEvent.save()
    log.debug('Remove liquidity event saved: {}', [eventID.toString().concat('-rl')])
    /****** Update Transaction ******/
    const txId = event.transaction.hash.toHexString()
    let transaction = Transaction.load(txId)
    if (transaction == null) {
      transaction = new Transaction(txId)
    }
    const removeLiquidityEvents = transaction.removeLiquidityEvents || []
    removeLiquidityEvents.push(removeLiquidityEvent.id)
    transaction.removeLiquidityEvents = removeLiquidityEvents
    transaction.blockNumber = event.block.number
    transaction.timestamp = event.block.timestamp
    transaction.mints = []
    transaction.burns = []
    transaction.swaps = []
    transaction.save()

    /************************************
     * Handle the historical data below *
     ************************************/
    const eh = new ExchangeHistoricalData(uniswap.exchangeHistoryEntityCount.toString())
    eh.exchangeAddress = event.address
    eh.timestamp = event.block.timestamp.toI32()
    eh.type = 'RemoveLiquidity'
    eh.baseLiquidity = exchange.baseLiquidity
    eh.targetLiquidity = exchange.targetLiquidity
    eh.tradeVolumeUSD = exchange.tradeVolumeUSD
    eh.baseBalance = exchange.baseBalance
    eh.targetBalance = exchange.targetBalance
    eh.combinedBalanceETH = exchange.combinedBalanceETH
    eh.combinedBalanceUSD = exchange.combinedBalanceUSD
    eh.totalUniToken = exchange.totalUniToken
    // eh.tokenPriceUSD = exchange.priceUSD
    eh.basePrice = exchange.basePrice
    eh.targetPrice = exchange.targetPrice
    eh.tradeVolumeTarget = exchange.tradeVolumeTarget
    eh.tradeVolumeBase = exchange.tradeVolumeBase
    eh.tradeVolumeETH = exchange.tradeVolumeETH
    // eh.feeInEth = ZERO_BD
    eh.totalTxsCount = exchange.totalTxsCount
    eh.save()

    let exchangeDayData = ExchangeDayData.load(id)
    if (exchangeDayData == null) {
      exchangeDayData = new ExchangeDayData(id)
      exchangeDayData.date = dayStartTimestamp
      exchangeDayData.exchangeAddress = event.address
      exchangeDayData.ethBalance = ZERO_BD
      exchangeDayData.tokenBalance = ZERO_BD
      exchangeDayData.marginalEthRate = ZERO_BD
      exchangeDayData.ethVolume = ZERO_BD
      exchangeDayData.totalEvents = ZERO_BI
      exchangeDayData.tokenPriceUSD = ZERO_BD
    }
    exchangeDayData.ethBalance = exchange.baseBalance
    exchangeDayData.tokenBalance = exchange.targetBalance
    if (!equalToZero(exchange.baseBalance)) {
      exchangeDayData.marginalEthRate = exchange.targetBalance.div(exchange.baseBalance).truncate(8)
    }
    // exchangeDayData.tokenPriceUSD = exchange.priceUSD
    exchangeDayData.totalEvents = exchangeDayData.totalEvents.plus(oneBigInt())
    exchangeDayData.save()
  }
}

export function handleTransfer(event: Transfer): void {
  const exchangeId = event.address.toHex()
  const txn = event.transaction.hash.toHexString()
  const exchange = Exchange.load(exchangeId)
  const from = event.params._from
  createUser(from)
  const to = event.params._to
  createUser(to)
  if (exchange !== null) {
    const transferId = exchangeId + '-' + txn + '-' + from.toHex() + '-' + to.toHex()
    const liquidityTokenTransfer = new LiquidityTokenTransfer(transferId)
    liquidityTokenTransfer.exchange = exchangeId
    liquidityTokenTransfer.fromUser = from.toHex()
    liquidityTokenTransfer.toUser = to.toHex()
    liquidityTokenTransfer.amount = event.params._value
    liquidityTokenTransfer.transferType = 'transfer'
    liquidityTokenTransfer.timestamp = event.block.timestamp
    liquidityTokenTransfer.transaction = txn
    const exchangeContract = ExchangeContract.bind(event.address)
    liquidityTokenTransfer.exchangeLiquidityTokenSupplyAfter = exchangeContract.totalSupply()
    liquidityTokenTransfer.exchangeLiquidityTokenSupplyBefore = liquidityTokenTransfer.exchangeLiquidityTokenSupplyAfter
    const fromUserLiquidityTokenBalanceAfter = exchangeContract.balanceOf(from)
    const toUserLiquidityTokenBalanceAfter = exchangeContract.balanceOf(to)
    // TODO: Get token reserves and save to the liquidity event
    // let token0Reserve, token1Reserve, blockTimestampLast = exchangeContract.getReserves();
    liquidityTokenTransfer.fromUserLiquidityTokenBalanceAfter = fromUserLiquidityTokenBalanceAfter
    liquidityTokenTransfer.toUserLiquidityTokenBalanceAfter = toUserLiquidityTokenBalanceAfter
    const userToID = exchange.target.concat('-').concat(event.params._to.toHex())
    const userFromID = exchange.target.concat('-').concat(event.params._from.toHex())
    const uniTokens = convertEthToDecimal(event.params._value)

    let isMint = false
    let isBurn = false
    // Handle Minting Case
    if (event.params._from.toHex() == '0x0000000000000000000000000000000000000000') {
      isMint = true
      liquidityTokenTransfer.transferType = 'mint'
      liquidityTokenTransfer.exchangeLiquidityTokenSupplyBefore = liquidityTokenTransfer.exchangeLiquidityTokenSupplyAfter.minus(
        event.params._value
      )
      // exchange.totalUniToken = exchange.totalUniToken.plus(uniTokens)
      exchange.totalUniToken = convertEthToDecimal(liquidityTokenTransfer.exchangeLiquidityTokenSupplyAfter as BigInt)
      let userTo = UserExchangeData.load(userToID)
      if (userTo == null) {
        createUserDataEntity(userToID, event.params._to, event.address)
        userTo = UserExchangeData.load(userToID)
      }
      userTo.uniTokenBalance = userTo.uniTokenBalance.plus(uniTokens)
      exchange.save()
      userTo.save()
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
        event.params._value
      )
    }

    // Handle Burning Case
    if (event.params._to.toHex() == '0x0000000000000000000000000000000000000000') {
      isBurn = true
      // exchange.totalUniToken = exchange.totalUniToken.minus(uniTokens)
      liquidityTokenTransfer.transferType = 'burn'
      liquidityTokenTransfer.exchangeLiquidityTokenSupplyBefore = liquidityTokenTransfer.exchangeLiquidityTokenSupplyAfter.plus(
        event.params._value
      )
      exchange.totalUniToken = convertEthToDecimal(liquidityTokenTransfer.exchangeLiquidityTokenSupplyAfter as BigInt)
      let userFrom = UserExchangeData.load(userFromID)
      if (userFrom == null) {
        createUserDataEntity(userFromID, event.params._from, event.address)
        userFrom = UserExchangeData.load(userFromID)
      }
      userFrom.uniTokenBalance = userFrom.uniTokenBalance.minus(uniTokens)

      exchange.save()
      userFrom.save()
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
        event.params._value
      )
    }
    // Handle normal transfer cases
    if (!isMint && !isBurn) {
      if (equalToZero(exchange.totalUniToken)) {
        log.error('exchange.totalUniToken is zero, ignoring transfer', [])
        return
      }
      const ratio = event.params._value.toBigDecimal().div(exchange.totalUniToken)
      const ethTransferred = ratio.times(exchange.baseBalance)
      const tokenTransferred = ratio.times(exchange.targetBalance)

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
      userTo.baseBought = userTo.baseBought.plus(ethTransferred)
      userTo.targetBought = userTo.targetBought.plus(tokenTransferred)
      userTo.uniTokenBalance = userTo.uniTokenBalance.plus(uniTokens)
      userFrom.baseBought = userTo.baseBought.minus(ethTransferred)
      userFrom.targetBought = userTo.targetBought.minus(tokenTransferred)
      userFrom.uniTokenBalance = userTo.uniTokenBalance.minus(uniTokens)
      userTo.save()
      userFrom.save()
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
    liquidityTokenTransfer.save()
  }
}
