import { Address } from '@graphprotocol/graph-ts'
import { Uniswap, Exchange, Token, Bundle } from '../types/schema'
import { ExchangeCreated } from '../types/Factory/Factory'
import { Exchange as ExchangeContract } from '../types/templates'
import { zeroBD, zeroBigInt, fetchTokenSymbol, fetchTokenName, fetchTokenDecimals } from '../helpers'

export function handleNewExchange(event: ExchangeCreated): void {
  //setup factory if needed
  let uniswap = Uniswap.load('1')
  if (uniswap == null) {
    uniswap = new Uniswap('1')
    uniswap.exchangeCount = 0
    uniswap.exchanges = []
    uniswap.totalVolumeETH = zeroBD()
    uniswap.totalLiquidityETH = zeroBD()
    uniswap.totalVolumeUSD = zeroBD()
    uniswap.totalLiquidityUSD = zeroBD()
    uniswap.exchangeHistoryEntityCount = zeroBigInt()
    uniswap.uniswapHistoryEntityCount = zeroBigInt()
    uniswap.tokenHistoryEntityCount = zeroBigInt()
    uniswap.reserveEntityCount = zeroBigInt()
    uniswap.mintCount = zeroBigInt()
    uniswap.burnCount = zeroBigInt()
    uniswap.swapCount = zeroBigInt()
    uniswap.syncCount = zeroBigInt()
    uniswap.txCount = zeroBigInt()
    uniswap.mostLiquidTokens = []

    const bundle = new Bundle('1')
    bundle.ethPrice = zeroBD()
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
    token0.derivedETH = zeroBD()
    token0.tradeVolumeToken = zeroBD()
    token0.tradeVolumeETH = zeroBD()
    token0.tradeVolumeUSD = zeroBD()
    token0.totalLiquidityToken = zeroBD()
    token0.totalLiquidityETH = zeroBD()
    token0.allPairs = []
    token0.mostLiquidPairs = []
  }

  // fetch info if null
  if (token1 == null) {
    token1 = new Token(event.params.token1.toHexString())
    token1.symbol = fetchTokenSymbol(event.params.token1)
    token1.name = fetchTokenName(event.params.token1)
    token1.decimals = fetchTokenDecimals(event.params.token1)
    token1.derivedETH = zeroBD()
    token1.tradeVolumeToken = zeroBD()
    token1.tradeVolumeETH = zeroBD()
    token1.tradeVolumeUSD = zeroBD()
    token1.totalLiquidityToken = zeroBD()
    token1.totalLiquidityETH = zeroBD()
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
    exchange.totalTxsCount = zeroBigInt()
    exchange.token0Balance = zeroBD()
    exchange.token1Balance = zeroBD()
    exchange.combinedBalanceETH = zeroBD()
    exchange.totalUniToken = zeroBD()
    exchange.tradeVolumeToken0 = zeroBD()
    exchange.tradeVolumeToken1 = zeroBD()
    exchange.tradeVolumeETH = zeroBD()
    exchange.tradeVolumeUSD = zeroBD()
    exchange.token0Price = zeroBD()
    exchange.token1Price = zeroBD()

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
