/* eslint-disable prefer-const */
import { BigDecimal, EthereumEvent } from '@graphprotocol/graph-ts'
import {
  Exchange,
  Bundle,
  Asset,
  Uniswap,
  UniswapHistoricalData,
  ExchangeHistoricalData,
  TokenHistoricalData
} from '../../types/schema'
import { ONE_BI } from './helpers'

export function updateUniswapHistoricalData(event: EthereumEvent): void {
  const uniswap = Uniswap.load('1')
  const uniswapHistoricalData = new UniswapHistoricalData(uniswap.uniswapHistoryEntityCount.toString())

  uniswapHistoricalData.timestamp = event.block.timestamp.toI32()
  uniswapHistoricalData.totalVolumeUSD = uniswap.totalVolumeUSD
  uniswapHistoricalData.totalVolumeETH = uniswap.totalVolumeETH
  uniswapHistoricalData.totalLiquidityUSD = uniswap.totalLiquidityUSD
  uniswapHistoricalData.totalLiquidityETH = uniswap.totalLiquidityETH
  uniswapHistoricalData.txCount = uniswap.txCount
  uniswapHistoricalData.save()
}

export function updateExchangeHistoricalData(event: EthereumEvent, eventType: string): void {
  const uniswap = Uniswap.load('1')
  const bundle = Bundle.load('1')
  const exchange = Exchange.load(event.address.toHex())

  let exchangeHistoricalData = new ExchangeHistoricalData(uniswap.exchangeHistoryEntityCount.toString())
  exchangeHistoricalData.exchangeAddress = event.address
  exchangeHistoricalData.timestamp = event.block.timestamp.toI32()
  exchangeHistoricalData.type = eventType
  exchangeHistoricalData.baseBalance = exchange.baseBalance
  exchangeHistoricalData.targetBalance = exchange.targetBalance
  exchangeHistoricalData.combinedBalanceETH = exchange.combinedBalanceETH
  exchangeHistoricalData.combinedBalanceUSD = exchange.combinedBalanceETH.times(bundle.ethPrice)
  exchangeHistoricalData.totalUniToken = exchange.totalUniToken
  exchangeHistoricalData.tradeVolumeBase = exchange.tradeVolumeBase
  exchangeHistoricalData.tradeVolumeTarget = exchange.tradeVolumeTarget
  exchangeHistoricalData.tradeVolumeETH = exchange.tradeVolumeETH
  exchangeHistoricalData.tradeVolumeUSD = exchange.tradeVolumeUSD
  exchangeHistoricalData.basePrice = exchange.basePrice
  exchangeHistoricalData.targetPrice = exchange.targetPrice
  exchangeHistoricalData.totalTxsCount = exchange.totalTxsCount
  exchangeHistoricalData.save()
}

export function updateTokenHistoricalData(token: Asset, event: EthereumEvent): void {
  const uniswap = Uniswap.load('1')
  const bundle = Bundle.load('1')
  const tokenHistoricalData = new TokenHistoricalData(uniswap.tokenHistoryEntityCount.toString())

  tokenHistoricalData.token = token.id
  tokenHistoricalData.timestamp = event.block.timestamp.toI32()
  tokenHistoricalData.tradeVolumeToken = token.tradeVolume
  tokenHistoricalData.tradeVolumeETH = token.tradeVolumeETH
  tokenHistoricalData.tradeVolumeUSD = token.tradeVolumeUSD
  tokenHistoricalData.totalLiquidityToken = token.totalLiquidity
  tokenHistoricalData.totalLiquidityETH = token.totalLiquidityETH
  tokenHistoricalData.totalLiquidityUSD = token.totalLiquidityETH.times(bundle.ethPrice)
  tokenHistoricalData.priceETH = token.derivedETH as BigDecimal
  tokenHistoricalData.priceUSD = token.derivedETH.times(bundle.ethPrice)
  tokenHistoricalData.save()

  uniswap.tokenHistoryEntityCount = uniswap.tokenHistoryEntityCount.plus(ONE_BI)
  uniswap.save()
}
