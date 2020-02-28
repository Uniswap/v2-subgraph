import { BigDecimal, Address } from '@graphprotocol/graph-ts'
import { NewExchange } from '../../types/FactoryV1Contract/FactoryV1Contract'
import { Uniswap, UniswapFactory, Bundle, Exchange, Asset } from '../../types/schema'
import { ExchangeV1Contract as ExchangeContract } from '../../types/templates'
import { hardcodedExchanges } from './hardcodedExchanges'
import { ZERO_BD, ZERO_BI, fetchTokenSymbol, fetchTokenName, fetchTokenDecimals, oneBigInt } from './helpers'

function hardcodeExchange(exchangeAddress: string, tokenAddress: Address, timestamp: i32): void {
  const exchange = new Exchange(exchangeAddress) as Exchange

  const tokenAddressStringed = tokenAddress.toHexString()
  const ethStringed = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
  const asset = new Asset(tokenAddressStringed);
  asset.v1Exchange = exchangeAddress
  asset.tradeVolume = ZERO_BD
  asset.tradeVolumeETH = ZERO_BD
  asset.tradeVolumeUSD = ZERO_BD
  asset.totalLiquidity = ZERO_BD
  asset.totalLiquidityETH = ZERO_BD
  let eth = Asset.load(ethStringed)
  if (eth == null) {
    eth = new Asset(ethStringed)
    eth.isToken = false
    eth.name = "ETH"
    eth.symbol = "ETH"
    eth.decimals = 18
    eth.tradeVolume = ZERO_BD
    eth.tradeVolumeETH = ZERO_BD
    eth.tradeVolumeUSD = ZERO_BD
    eth.totalLiquidity = ZERO_BD
    eth.totalLiquidityETH = ZERO_BD
    eth.save()
  } 
  exchange.base = ethStringed;
  exchange.target = tokenAddressStringed;

  exchange.fee = BigDecimal.fromString('0.003')
  exchange.version = 1
  exchange.startTime = timestamp

  exchange.baseLiquidity = ZERO_BD
  exchange.targetLiquidity = ZERO_BD
  exchange.baseBalance = ZERO_BD
  exchange.targetBalance = ZERO_BD
  exchange.combinedBalanceETH = ZERO_BD
  exchange.combinedBalanceUSD = ZERO_BD
  exchange.totalUniToken = ZERO_BD

  exchange.basePrice = ZERO_BD
  exchange.targetPrice = ZERO_BD

  // exchange.lastPrice = ZERO_BD
  exchange.tradeVolumeBase = ZERO_BD
  exchange.tradeVolumeTarget = ZERO_BD
  exchange.tradeVolumeETH = ZERO_BD
  exchange.tradeVolumeUSD = ZERO_BD
  // exchange.totalValue = ZERO_BD
  // exchange.weightedAvgPrice = ZERO_BD
  exchange.totalTxsCount = oneBigInt()

  // exchange.priceUSD = ZERO_BD
  // exchange.lastPriceUSD = ZERO_BD
  // exchange.weightedAvgPriceUSD = ZERO_BD

  for (let i = 0; i < hardcodedExchanges.length; i++) {
    if (tokenAddressStringed.toString() == hardcodedExchanges[i].tokenAddress.toString()) {
      asset.symbol = hardcodedExchanges[i].symbol
      asset.name = hardcodedExchanges[i].name
      asset.decimals = hardcodedExchanges[i].tokenDecimals
      asset.isToken = true
      break
    } else {
      // TODO: handle null cases
      asset.symbol = fetchTokenSymbol(tokenAddress)
      asset.name = fetchTokenName(tokenAddress)
      asset.decimals = fetchTokenDecimals(tokenAddress)
      asset.isToken = true
    }
  }

  // only save for tokens with non null decimals
  if (asset.decimals !== null) {
    // add the exchange for the derived relationship
    const totals = Uniswap.load('1')
    // update totals
    const allExchanges = totals.exchanges
    allExchanges.push(exchange.id)
    totals.exchanges = allExchanges

    const factory = UniswapFactory.load('1')
    // update factory totals
    const factoryExchanges = factory.exchanges
    factoryExchanges.push(exchange.id)
    factory.exchanges = factoryExchanges
    totals.save()
    factory.save()
    exchange.save()
    asset.save()
  }
}

export function handleNewExchange(event: NewExchange): void {
  let totals = Uniswap.load('1')

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

    const bundle = new Bundle('1')
    bundle.ethPrice = ZERO_BD
    bundle.save()
  }
  totals.totalExchangeCount = totals.totalExchangeCount + 1
  totals.save()


  let factory = UniswapFactory.load('1')

  // if no factory yet, set up blank initial
  if (factory == null) {
    factory = new UniswapFactory('1')
    factory.address = event.address;
    factory.version = 1
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

  // create new exchange with data from our hard coded list
  hardcodeExchange(event.params.exchange.toHexString(), event.params.token, event.block.timestamp.toI32()) // TODO - don't hard code, after we have the fix
  ExchangeContract.create(event.params.exchange)
}
