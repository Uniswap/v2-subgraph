import { log, Address } from '@graphprotocol/graph-ts'
import { 
  Uniswap, 
  UniswapFactory,
  Exchange, 
  Asset, 
  // Bundle 
} from '../../types/schema'
import { ExchangeCreated } from '../../types/FactoryV2Contract/FactoryV2Contract'
import { ExchangeV2Contract as ExchangeContract } from '../../types/templates'
import { ZERO_BD, ZERO_BI, fetchTokenSymbol, fetchTokenName, fetchTokenDecimals } from './helpers'

export function handleNewExchange(event: ExchangeCreated): void {
  log.debug("New Exchange: {}", [event.params.exchange.toHex()])
  //setup factory if needed
  let totals = Uniswap.load('1')
  // let v1Equivalent: string = null

  // if no totals entity yet, set up blank initial
  if (totals == null) {
    totals = new Uniswap('1')
    totals.totalExchangeCount = 0
    totals.exchanges = []
    totals.totalVolumeETH = ZERO_BD
    totals.totalLiquidityETH = ZERO_BD
    totals.totalVolumeUSD = ZERO_BD
    totals.totalLiquidityUSD = ZERO_BD
    totals.totalTokenBuys = ZERO_BI
    totals.totalTokenSells = ZERO_BI
    totals.totalAddLiquidity = ZERO_BI
    totals.totalRemoveLiquidity = ZERO_BI
    totals.totalMints = ZERO_BI
    totals.totalBurns = ZERO_BI
    totals.totalSwaps = ZERO_BI
    totals.totalSyncs = ZERO_BI
    totals.exchangeHistoryEntityCount = ZERO_BI
    totals.uniswapHistoryEntityCount = ZERO_BI
    totals.tokenHistoryEntityCount = ZERO_BI
    totals.reserveEntityCount = ZERO_BI
    totals.txCount = ZERO_BI
    totals.mostLiquidTokens = []
  }
  totals.totalExchangeCount = totals.totalExchangeCount + 1
  totals.save()


  let factory = UniswapFactory.load('2')

  // if no factory yet, set up blank initial
  if (factory == null) {
    factory = new UniswapFactory('2')
    factory.address = event.address;
    factory.version = 2
    factory.exchangeCount = 0
    factory.exchanges = []
    factory.totalVolumeETH = ZERO_BD
    factory.totalLiquidityETH = ZERO_BD
    factory.totalVolumeUSD = ZERO_BD
    factory.totalLiquidityUSD = ZERO_BD
    factory.mintCount = ZERO_BI
    factory.burnCount = ZERO_BI
    factory.swapCount = ZERO_BI
    factory.syncCount = ZERO_BI
    factory.exchangeHistoryEntityCount = ZERO_BI
    factory.uniswapHistoryEntityCount = ZERO_BI
    factory.tokenHistoryEntityCount = ZERO_BI   
    factory.reserveEntityCount = ZERO_BI
    factory.totalTokenBuys = ZERO_BI
    factory.totalTokenSells = ZERO_BI
    factory.totalAddLiquidity = ZERO_BI
    factory.totalRemoveLiquidity = ZERO_BI
    factory.txCount = ZERO_BI
    factory.mostLiquidTokens = []
  }
  factory.exchangeCount = factory.exchangeCount + 1
  factory.save()

  // create the tokens
  let token0 = Asset.load(event.params.token0.toHexString())
  let token1 = Asset.load(event.params.token1.toHexString())

  // fetch info if null
  if (token0 == null) {
    token0 = new Asset(event.params.token0.toHexString())
    token0.isToken = true
    token0.symbol = fetchTokenSymbol(event.params.token0)
    token0.name = fetchTokenName(event.params.token0)
    token0.decimals = fetchTokenDecimals(event.params.token0)
    token0.derivedETH = ZERO_BD
    token0.tradeVolume = ZERO_BD
    token0.tradeVolumeETH = ZERO_BD
    token0.tradeVolumeUSD = ZERO_BD
    token0.totalLiquidity = ZERO_BD
    token0.totalLiquidityETH = ZERO_BD
    token0.allExchanges = []
    // token0.mostLiquidPairs = []
  }

  // fetch info if null
  if (token1 == null) {
    token1 = new Asset(event.params.token1.toHexString())
    token1.isToken = true
    token1.symbol = fetchTokenSymbol(event.params.token1)
    token1.name = fetchTokenName(event.params.token1)
    token1.decimals = fetchTokenDecimals(event.params.token1)
    token1.derivedETH = ZERO_BD
    token1.tradeVolume = ZERO_BD
    token1.tradeVolumeETH = ZERO_BD
    token1.tradeVolumeUSD = ZERO_BD
    token1.totalLiquidity = ZERO_BD
    token1.totalLiquidityETH = ZERO_BD
    token1.allExchanges = []
    // token1.mostLiquidPairs = []
  }

  const wethAddress = Address.fromString('0xc778417E063141139Fce010982780140Aa0cD5Ab')
  if (event.params.token0 == wethAddress) {
    token1.wethExchange = event.params.exchange.toHex()
    // if(token1.v1Exchange != null) {
    //   v1Equivalent = token1.v1Exchange
    // }
  }
  if (event.params.token1 == wethAddress) {
    token0.wethExchange = event.params.exchange.toHex()
    // if(token0.v1Exchange != null) {
    //   v1Equivalent = token1.v1Exchange
    // }
  }

  const newAllPairsArray0 = token0.allExchanges
  newAllPairsArray0.push(event.params.exchange.toHexString())
  token0.allExchanges = newAllPairsArray0

  const newAllPairsArray1 = token1.allExchanges
  newAllPairsArray1.push(event.params.exchange.toHexString())
  token1.allExchanges = newAllPairsArray1

  log.debug("Made it to decimals check for: {}", [event.params.exchange.toHex()])
  if (token0.decimals !== null && token1.decimals !== null) {
    log.debug("Made it past decimals check for: {}", [event.params.exchange.toHex()])
    // create the Pair
    const exchange = new Exchange(event.params.exchange.toHexString()) as Exchange
    exchange.version = 2
    // exchange.v1Equivalent = v1Equivalent
    exchange.fee = ZERO_BD
    exchange.base = token0.id
    exchange.target = token1.id
    exchange.startTime = event.block.timestamp.toI32()
    exchange.totalTxsCount = ZERO_BI
    exchange.baseLiquidity = ZERO_BD
    exchange.targetLiquidity = ZERO_BD
    exchange.baseBalance = ZERO_BD
    exchange.targetBalance = ZERO_BD
    exchange.combinedBalanceETH = ZERO_BD
    exchange.combinedBalanceUSD = ZERO_BD
    exchange.totalUniToken = ZERO_BD
    exchange.tradeVolumeBase = ZERO_BD
    exchange.tradeVolumeTarget = ZERO_BD
    exchange.tradeVolumeETH = ZERO_BD
    exchange.tradeVolumeUSD = ZERO_BD
    exchange.basePrice = ZERO_BD
    exchange.targetPrice = ZERO_BD
    // exchange.lastPrice = ZERO_BD
    // exchange.totalValue = ZERO_BD
    // exchange.weightedAvgPrice = ZERO_BD
    // exchange.priceUSD = ZERO_BD
    // exchange.lastPriceUSD = ZERO_BD
    // exchange.weightedAvgPriceUSD = ZERO_BD

    // update totals
    const allExchanges = totals.exchanges
    allExchanges.push(exchange.id)
    totals.exchanges = allExchanges

    // update factory totals
    const factoryExchanges = factory.exchanges
    factoryExchanges.push(exchange.id)
    factory.exchanges = factoryExchanges

    // create the tracked contract based on the template
    ExchangeContract.create(event.params.exchange)
    log.debug("Exchange template created for: {}", [event.params.exchange.toHex()])
    // save updated values
    token0.save()
    token1.save()
    exchange.save()
    totals.save()
    factory.save()
  }
}
