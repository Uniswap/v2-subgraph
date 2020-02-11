import { Address } from '@graphprotocol/graph-ts'
import { Uniswap, Exchange, Token, Bundle } from '../types/schema'
import { ExchangeCreated } from '../types/Factory/Factory'
import { Exchange as ExchangeContract } from '../types/templates'
import { ZERO_BD, ZERO_BI, fetchTokenSymbol, fetchTokenName, fetchTokenDecimals } from '../helpers'

export function handleNewExchange(event: ExchangeCreated): void {
  //setup factory if needed
  let uniswap = Uniswap.load('1')
  if (uniswap == null) {
    uniswap = new Uniswap('1')
    uniswap.exchangeCount = 0
    uniswap.exchanges = []
    uniswap.totalVolumeETH = ZERO_BD
    uniswap.totalLiquidityETH = ZERO_BD
    uniswap.totalVolumeUSD = ZERO_BD
    uniswap.totalLiquidityUSD = ZERO_BD
    uniswap.exchangeHistoryEntityCount = ZERO_BI
    uniswap.uniswapHistoryEntityCount = ZERO_BI
    uniswap.tokenHistoryEntityCount = ZERO_BI
    uniswap.reserveEntityCount = ZERO_BI
    uniswap.mintCount = ZERO_BI
    uniswap.burnCount = ZERO_BI
    uniswap.swapCount = ZERO_BI
    uniswap.syncCount = ZERO_BI
    uniswap.txCount = ZERO_BI
    uniswap.mostLiquidTokens = []

    const bundle = new Bundle('1')
    bundle.ethPrice = ZERO_BD
    bundle.save()
  }

  // update and save
  uniswap.exchangeCount = uniswap.exchangeCount + 1
  uniswap.save()

  // create the tokens
  let token0 = Token.load(event.params.token0.toHexString())
  let token1 = Token.load(event.params.token1.toHexString())

  // fetch info if null
  if (token0 == null) {
    token0 = new Token(event.params.token0.toHexString())
    token0.symbol = fetchTokenSymbol(event.params.token0)
    token0.name = fetchTokenName(event.params.token0)
    token0.decimals = fetchTokenDecimals(event.params.token0)
    token0.derivedETH = ZERO_BD
    token0.tradeVolumeToken = ZERO_BD
    token0.tradeVolumeETH = ZERO_BD
    token0.tradeVolumeUSD = ZERO_BD
    token0.totalLiquidityToken = ZERO_BD
    token0.totalLiquidityETH = ZERO_BD
    token0.allPairs = []
    token0.mostLiquidPairs = []
  }

  // fetch info if null
  if (token1 == null) {
    token1 = new Token(event.params.token1.toHexString())
    token1.symbol = fetchTokenSymbol(event.params.token1)
    token1.name = fetchTokenName(event.params.token1)
    token1.decimals = fetchTokenDecimals(event.params.token1)
    token1.derivedETH = ZERO_BD
    token1.tradeVolumeToken = ZERO_BD
    token1.tradeVolumeETH = ZERO_BD
    token1.tradeVolumeUSD = ZERO_BD
    token1.totalLiquidityToken = ZERO_BD
    token1.totalLiquidityETH = ZERO_BD
    token1.allPairs = []
    token1.mostLiquidPairs = []
  }

  const wethAddress = Address.fromString('0xc778417E063141139Fce010982780140Aa0cD5Ab')
  if (event.params.token0 == wethAddress) {
    token1.wethExchange = event.params.exchange
  }
  if (event.params.token1 == wethAddress) {
    token0.wethExchange = event.params.exchange
  }

  const newAllPairsArray0 = token0.allPairs
  newAllPairsArray0.push(event.params.exchange.toHexString())
  token0.allPairs = newAllPairsArray0

  const newAllPairsArray1 = token1.allPairs
  newAllPairsArray1.push(event.params.exchange.toHexString())
  token1.allPairs = newAllPairsArray1

  if (token0.decimals !== null && token1.decimals !== null) {
    // create the Pair
    const exchange = new Exchange(event.params.exchange.toHexString()) as Exchange
    exchange.token0 = token0.id
    exchange.token1 = token1.id
    exchange.startTime = event.block.timestamp.toI32()
    exchange.totalTxsCount = ZERO_BI
    exchange.token0Balance = ZERO_BD
    exchange.token1Balance = ZERO_BD
    exchange.combinedBalanceETH = ZERO_BD
    exchange.totalUniToken = ZERO_BD
    exchange.tradeVolumeToken0 = ZERO_BD
    exchange.tradeVolumeToken1 = ZERO_BD
    exchange.tradeVolumeETH = ZERO_BD
    exchange.tradeVolumeUSD = ZERO_BD
    exchange.token0Price = ZERO_BD
    exchange.token1Price = ZERO_BD

    // update factory
    const currentExchanges = uniswap.exchanges
    currentExchanges.push(exchange.id)
    uniswap.exchanges = currentExchanges

    // create the tracked contract based on the template
    ExchangeContract.create(event.params.exchange)

    // save updated values
    token0.save()
    token1.save()
    exchange.save()
    uniswap.save()
  }
}
