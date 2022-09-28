/* eslint-disable prefer-const */
import { log } from '@graphprotocol/graph-ts'
import { DmmFactory, Bundle, Pair, Token, Pool } from '../types/schema'
import {
  SetFeeConfiguration,
  PoolCreated as StaticFeePoolCreatedLegacy
} from '../types/DmmStaticFeeFactoryLegacy/DmmStaticFeeFactoryLegacy'
import { DMM_STATIC_FEE_FACTORY_LEGACY_ADDRESS } from '../config/constants'

import { Pool as PoolTemplate } from '../types/templates'

import { ZERO_BD, ZERO_BI, fetchTokenSymbol, fetchTokenName, fetchTokenTotalSupply, fetchTokenDecimals } from './utils'

function createOrLoadFactory(address: string): DmmFactory {
  // load factory (create if first exchange)
  let factory = DmmFactory.load(address)
  if (factory === null) {
    factory = new DmmFactory(address)
    factory.pairCount = 0
    factory.poolCount = 0
    factory.totalVolumeETH = ZERO_BD
    factory.totalLiquidityETH = ZERO_BD
    factory.totalVolumeUSD = ZERO_BD
    factory.totalFeeUSD = ZERO_BD
    factory.untrackedVolumeUSD = ZERO_BD
    factory.untrackedFeeUSD = ZERO_BD
    factory.totalLiquidityUSD = ZERO_BD
    factory.totalAmplifiedLiquidityETH = ZERO_BD
    factory.totalAmplifiedLiquidityUSD = ZERO_BD
    factory.txCount = ZERO_BI
    factory.governmentFeeBps = 0
    factory.totalProtocolFeeUSD = ZERO_BD

    // create new bundle
    let bundle = new Bundle('1')
    bundle.ethPrice = ZERO_BD
    bundle.save()
  }

  return factory as DmmFactory
}

export function handlePoolCreatedLegacy(event: StaticFeePoolCreatedLegacy): void {
  log.debug('------run to handle PoolCreated event ------ ', [])

  let factory = createOrLoadFactory(event.address.toHexString())

  factory.poolCount = factory.poolCount + 1
  factory.save()

  log.debug('------save factory success ------', [])

  // create the tokens
  let token0 = Token.load(event.params.token0.toHexString())
  let token1 = Token.load(event.params.token1.toHexString())

  // fetch info if null
  if (token0 === null) {
    token0 = new Token(event.params.token0.toHexString())
    token0.symbol = fetchTokenSymbol(event.params.token0)
    token0.name = fetchTokenName(event.params.token0)
    token0.totalSupply = fetchTokenTotalSupply(event.params.token0)
    token0.decimals = fetchTokenDecimals(event.params.token0)
    token0.derivedETH = ZERO_BD
    token0.tradeVolume = ZERO_BD
    token0.tradeVolumeUSD = ZERO_BD
    token0.untrackedVolumeUSD = ZERO_BD
    token0.totalLiquidity = ZERO_BD
    // token0.allPairs = []
    token0.txCount = ZERO_BI
    token0.save()

    log.debug('------fetch token 0 success ------ ', [token0.id])
  }

  // fetch info if null
  if (token1 === null) {
    token1 = new Token(event.params.token1.toHexString())
    token1.symbol = fetchTokenSymbol(event.params.token1)
    token1.name = fetchTokenName(event.params.token1)
    token1.totalSupply = fetchTokenTotalSupply(event.params.token1)
    token1.decimals = fetchTokenDecimals(event.params.token1)
    token1.derivedETH = ZERO_BD
    token1.tradeVolume = ZERO_BD
    token1.tradeVolumeUSD = ZERO_BD
    token1.untrackedVolumeUSD = ZERO_BD
    token1.totalLiquidity = ZERO_BD
    // token1.allPairs = []
    token1.txCount = ZERO_BI
    token1.save()

    log.debug('------fetch token 1 success ------ ', [token1.id])
  }

  let pool = new Pool(event.params.pool.toHexString())
  let pairId = token0.id + '_' + token1.id
  let pair = Pair.load(pairId)

  if (pair == null) {
    // create new pair
    pair = new Pair(pairId)
    pair.token0 = token0.id
    pair.token1 = token1.id
    pair.liquidityProviderCount = ZERO_BI
    pair.createdAtTimestamp = event.block.timestamp
    pair.createdAtBlockNumber = event.block.number
    pair.txCount = ZERO_BI
    pair.reserve0 = ZERO_BD
    pair.reserve1 = ZERO_BD
    pair.trackedReserveETH = ZERO_BD
    pair.reserveETH = ZERO_BD
    pair.reserveUSD = ZERO_BD
    pair.totalSupply = ZERO_BD
    pair.volumeToken0 = ZERO_BD
    pair.volumeToken1 = ZERO_BD
    pair.volumeUSD = ZERO_BD
    pair.feeUSD = ZERO_BD
    pair.untrackedFeeUSD = ZERO_BD
    pair.untrackedVolumeUSD = ZERO_BD
    pair.token0Price = ZERO_BD
    pair.token1Price = ZERO_BD
    pair.pools = []

    factory.pairCount = factory.pairCount + 1
    factory.save()
  }
  pair.pools = pair.pools.concat([pool.id])
  pair.save()

  pool.token0 = token0.id
  pool.token1 = token1.id
  pool.pair = pair.id
  pool.liquidityProviderCount = ZERO_BI
  pool.createdAtTimestamp = event.block.timestamp
  pool.createdAtBlockNumber = event.block.number
  pool.txCount = ZERO_BI
  pool.reserve0 = ZERO_BD
  pool.reserve1 = ZERO_BD
  pool.vReserve0 = ZERO_BD
  pool.vReserve1 = ZERO_BD
  pool.trackedReserveETH = ZERO_BD
  pool.amplifiedTrackedLiquidityEth = ZERO_BD
  pool.reserveETH = ZERO_BD
  pool.reserveUSD = ZERO_BD
  pool.totalSupply = ZERO_BD
  pool.volumeToken0 = ZERO_BD
  pool.volumeToken1 = ZERO_BD
  pool.volumeUSD = ZERO_BD
  pool.feeUSD = ZERO_BD
  pool.untrackedFeeUSD = ZERO_BD
  pool.untrackedVolumeUSD = ZERO_BD
  pool.token0Price = ZERO_BD
  pool.token0PriceMin = ZERO_BD
  pool.token0PriceMax = ZERO_BD

  pool.token1Price = ZERO_BD
  pool.token1PriceMin = ZERO_BD
  pool.token1PriceMax = ZERO_BD

  pool.liquidityPerRisk = ZERO_BD
  pool.amp = event.params.ampBps.toBigDecimal()

  let isStaticFeeLegacy = event.address.toHexString() == DMM_STATIC_FEE_FACTORY_LEGACY_ADDRESS
  if (isStaticFeeLegacy) {
    pool.fee = event.params.feeBps
  }

  pool.save()

  PoolTemplate.create(event.params.pool)
}

export function handleSetFeeConfiguration(event: SetFeeConfiguration): void {
  log.debug('------run to handle SetFeeConfiguration event ------ ', [])

  let factory = createOrLoadFactory(event.address.toHexString())
  factory.governmentFeeBps = event.params.governmentFeeBps
  factory.save()
}
