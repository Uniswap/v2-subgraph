import { BigDecimal, Address } from '@graphprotocol/graph-ts'
import { NewExchange } from '../types/Factory/Factory'
import { Uniswap, Exchange } from '../types/schema'
import { Exchange as ExchangeContract } from '../types/templates'
import { hardcodedExchanges } from './hardcodedExchanges'
import { zeroBD, zeroBigInt, oneBigInt } from '../helpers'

function hardcodeExchange(exchangeAddress: string, tokenAddress: Address, timestamp: i32): void {
  const exchange = new Exchange(exchangeAddress) as Exchange
  exchange.tokenAddress = tokenAddress

  const tokenAddressStringed = tokenAddress.toHexString()

  exchange.fee = BigDecimal.fromString('0.003')
  exchange.version = 1
  exchange.startTime = timestamp

  exchange.ethLiquidity = zeroBD()
  exchange.tokenLiquidity = zeroBD()
  exchange.ethBalance = zeroBD()
  exchange.tokenBalance = zeroBD()
  exchange.combinedBalanceInEth = zeroBD()
  exchange.combinedBalanceInUSD = zeroBD()
  exchange.totalUniToken = zeroBD()

  exchange.addLiquidityCount = zeroBigInt()
  exchange.removeLiquidityCount = zeroBigInt()
  exchange.sellTokenCount = zeroBigInt()
  exchange.buyTokenCount = zeroBigInt()

  exchange.lastPrice = zeroBD()
  exchange.price = zeroBD()
  exchange.tradeVolumeToken = zeroBD()
  exchange.tradeVolumeEth = zeroBD()
  exchange.tradeVolumeUSD = zeroBD()
  exchange.totalValue = zeroBD()
  exchange.weightedAvgPrice = zeroBD()
  exchange.totalTxsCount = oneBigInt()

  exchange.priceUSD = zeroBD()
  exchange.lastPriceUSD = zeroBD()
  exchange.weightedAvgPriceUSD = zeroBD()
  exchange.tokenHolders = []

  for (let i = 0; i < hardcodedExchanges.length; i++) {
    if (tokenAddressStringed.toString() == hardcodedExchanges[i].tokenAddress.toString()) {
      exchange.tokenSymbol = hardcodedExchanges[i].symbol
      exchange.tokenName = hardcodedExchanges[i].name
      exchange.tokenDecimals = hardcodedExchanges[i].tokenDecimals
      break
    } else {
      exchange.tokenSymbol = 'unknown'
      exchange.tokenName = 'unknown'
      exchange.tokenDecimals = null
    }
  }

  // only save for tokens with non null decimals
  if (exchange.tokenDecimals !== null) {
    // add the exchange for the derived relationship
    const uniswap = Uniswap.load('1')
    const currentExchanges = uniswap.exchanges
    currentExchanges.push(exchange.id)
    uniswap.exchanges = currentExchanges
    uniswap.save()
    exchange.save()
  }
}

export function handleNewExchange(event: NewExchange): void {
  let factory = Uniswap.load('1')

  // if no factory yet, set up blank initial
  if (factory == null) {
    factory = new Uniswap('1')
    factory.exchangeCount = 0
    factory.exchanges = []
    factory.totalVolumeInEth = zeroBD()
    factory.totalLiquidityInEth = zeroBD()
    factory.totalVolumeUSD = zeroBD()
    factory.totalLiquidityUSD = zeroBD()
    factory.totalTokenSells = zeroBigInt()
    factory.totalTokenBuys = zeroBigInt()
    factory.totalAddLiquidity = zeroBigInt()
    factory.totalRemoveLiquidity = zeroBigInt()
    factory.exchangeHistoryEntityCount = zeroBigInt()
    factory.uniswapHistoryEntityCount = zeroBigInt()
    factory.txCount = zeroBigInt()
  }
  factory.exchangeCount = factory.exchangeCount + 1
  factory.save()

  // create new exchange with data from our hard coded list
  hardcodeExchange(event.params.exchange.toHexString(), event.params.token, event.block.timestamp.toI32()) // TODO - don't hard code, after we have the fix

  ExchangeContract.create(event.params.exchange)
}
