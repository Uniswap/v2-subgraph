import { log, Address } from '@graphprotocol/graph-ts'
import { UniswapFactory, Pair, Token, Bundle } from '../types/schema'
import { PairCreated } from '../types/Factory/Factory'
import { Pair as PairTemplate } from '../types/templates'
import { FACTORY_ADDRESS, ZERO_BD, ZERO_BI, fetchTokenSymbol, fetchTokenName, fetchTokenDecimals } from './helpers'

export function handleNewPair(event: PairCreated): void {
  log.debug('New Exchange: {}', [event.params.pair.toHex()])

  // load factory (create if first exchange)
  let factory = UniswapFactory.load(FACTORY_ADDRESS)
  if (factory == null) {
    factory = new UniswapFactory(FACTORY_ADDRESS)
    factory.pairCount = 0
    factory.pairs = []
    factory.totalVolumeETH = ZERO_BD
    factory.totalLiquidityETH = ZERO_BD
    factory.totalVolumeUSD = ZERO_BD
    factory.totalLiquidityUSD = ZERO_BD
    factory.txCount = ZERO_BI
    factory.mostLiquidTokens = []

    // create new bundle
    const bundle = new Bundle('1')
    bundle.ethPrice = ZERO_BD
    bundle.save()
  }
  factory.pairCount = factory.pairCount + 1
  factory.save()

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
    token0.tradeVolume = ZERO_BD
    token0.tradeVolumeUSD = ZERO_BD
    token0.totalLiquidity = ZERO_BD
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
    token1.tradeVolume = ZERO_BD
    token1.tradeVolumeUSD = ZERO_BD
    token1.totalLiquidity = ZERO_BD
    token1.allPairs = []
    token1.mostLiquidPairs = []
  }

  const newAllPairsArray0 = token0.allPairs
  newAllPairsArray0.push(event.params.pair.toHexString())
  token0.allPairs = newAllPairsArray0

  const newAllPairsArray1 = token1.allPairs
  newAllPairsArray1.push(event.params.pair.toHexString())
  token1.allPairs = newAllPairsArray1

  if (token0.decimals !== null && token1.decimals !== null) {
    const pair = new Pair(event.params.pair.toHexString()) as Pair
    pair.token0 = token0.id
    pair.token1 = token1.id
    pair.createdAtTimestamp = event.block.timestamp
    pair.createdAtBlockNumber = event.block.number
    pair.totalTxsCount = ZERO_BI
    pair.reserve0 = ZERO_BD
    pair.reserve1 = ZERO_BD
    pair.reserveUSD = ZERO_BD
    pair.totalSupply = ZERO_BD
    pair.volumeToken0 = ZERO_BD
    pair.volumeToken1 = ZERO_BD
    pair.volumeUSD = ZERO_BD
    pair.token0Price = ZERO_BD
    pair.token1Price = ZERO_BD

    // set weth exchange if exists
    const WETHAddress = Address.fromString('0xc778417e063141139fce010982780140aa0cd5ab')
    if (event.params.token0 == WETHAddress) {
      token1.wethPair = event.params.pair.toHexString()
    } else if (event.params.token1 == WETHAddress) {
      token0.wethPair = event.params.pair.toHexString()
    }

    // update factory totals
    const factoryPairs = factory.pairs
    factoryPairs.push(pair.id)
    factory.pairs = factoryPairs

    // create the tracked contract based on the template
    PairTemplate.create(event.params.pair)

    // save updated values
    token0.save()
    token1.save()
    pair.save()
    factory.save()
  }
}
