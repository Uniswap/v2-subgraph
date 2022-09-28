import { PairHourData, PoolHourData } from './../types/schema'
/* eslint-disable prefer-const */
import { BigInt, ethereum } from '@graphprotocol/graph-ts'
import {
  Pair,
  Pool,
  Bundle,
  Token,
  DmmFactory,
  DmmDayData,
  PairDayData,
  TokenDayData,
  PoolDayData
} from '../types/schema'
import { ONE_BI, ZERO_BD, ZERO_BI } from './utils'
import { DMM_STATIC_FEE_FACTORY_ADDRESS, DMM_DYNAMIC_FEE_FACTORY_ADDRESS } from '../config/constants'

export function updateDmmDayData(event: ethereum.Event): DmmDayData {
  let dynamicFeeFactory = DmmFactory.load(DMM_DYNAMIC_FEE_FACTORY_ADDRESS)
  let staticFeeFactory = DmmFactory.load(DMM_STATIC_FEE_FACTORY_ADDRESS)

  let timestamp = event.block.timestamp.toI32()
  let dayID = timestamp / 86400
  let dayStartTimestamp = dayID * 86400
  let dayData = DmmDayData.load(dayID.toString())
  if (dayData === null) {
    dayData = new DmmDayData(dayID.toString())
    dayData.date = dayStartTimestamp
    dayData.dailyVolumeUSD = ZERO_BD
    dayData.dailyVolumeETH = ZERO_BD
    dayData.totalVolumeUSD = ZERO_BD
    dayData.totalVolumeETH = ZERO_BD
    dayData.dailyVolumeUntracked = ZERO_BD
  }

  let totalLiquidityUSD1 = ZERO_BD
  let totalLiquidityUSD2 = ZERO_BD

  let totalLiquidityETH1 = ZERO_BD
  let totalLiquidityETH2 = ZERO_BD

  let txCount1 = ZERO_BI
  let txCount2 = ZERO_BI

  if (dynamicFeeFactory != null) {
    totalLiquidityUSD1 = dynamicFeeFactory.totalLiquidityUSD
    totalLiquidityETH1 = dynamicFeeFactory.totalLiquidityETH
    txCount1 = dynamicFeeFactory.txCount
  }

  if (staticFeeFactory != null) {
    totalLiquidityUSD2 = staticFeeFactory.totalLiquidityUSD
    totalLiquidityETH2 = staticFeeFactory.totalLiquidityETH
    txCount2 = staticFeeFactory.txCount
  }

  dayData.totalLiquidityUSD = totalLiquidityUSD1.plus(totalLiquidityUSD2)
  dayData.totalLiquidityETH = totalLiquidityETH1.plus(totalLiquidityETH2)
  dayData.txCount = txCount1.plus(txCount2)
  dayData.save()

  return dayData as DmmDayData
}

export function updatePairDayData(event: ethereum.Event, pairId: string): PairDayData {
  let timestamp = event.block.timestamp.toI32()
  let dayID = timestamp / 86400
  let dayStartTimestamp = dayID * 86400
  let dayPairID = pairId.concat('-').concat(BigInt.fromI32(dayID).toString())
  let pair = Pair.load(pairId)
  let pairDayData = PairDayData.load(dayPairID)
  if (pairDayData === null) {
    pairDayData = new PairDayData(dayPairID)
    pairDayData.date = dayStartTimestamp
    pairDayData.token0 = pair.token0
    pairDayData.token1 = pair.token1
    pairDayData.pairAddress = pairId
    pairDayData.dailyVolumeToken0 = ZERO_BD
    pairDayData.dailyVolumeToken1 = ZERO_BD
    pairDayData.dailyVolumeUSD = ZERO_BD
    pairDayData.dailyTxns = ZERO_BI
  }

  pairDayData.totalSupply = pair.totalSupply
  pairDayData.reserve0 = pair.reserve0
  pairDayData.reserve1 = pair.reserve1
  pairDayData.reserveUSD = pair.reserveUSD
  pairDayData.dailyTxns = pairDayData.dailyTxns.plus(ONE_BI)
  pairDayData.save()

  return pairDayData as PairDayData
}

export function updatePairHourData(event: ethereum.Event, pairId: string): PairHourData {
  let timestamp = event.block.timestamp.toI32()
  let hourIndex = timestamp / 3600 // get unique hour within unix history
  let hourStartUnix = hourIndex * 3600 // want the rounded effect
  let hourPairID = pairId.concat('-').concat(BigInt.fromI32(hourIndex).toString())
  let pair = Pair.load(pairId)
  let pairHourData = PairHourData.load(hourPairID)
  if (pairHourData === null) {
    pairHourData = new PairHourData(hourPairID)
    pairHourData.hourStartUnix = hourStartUnix
    pairHourData.pair = pairId
    pairHourData.hourlyVolumeToken0 = ZERO_BD
    pairHourData.hourlyVolumeToken1 = ZERO_BD
    pairHourData.hourlyVolumeUSD = ZERO_BD
    pairHourData.hourlyTxns = ZERO_BI
  }
  pairHourData.reserve0 = pair.reserve0
  pairHourData.reserve1 = pair.reserve1
  pairHourData.reserveUSD = pair.reserveUSD
  pairHourData.hourlyTxns = pairHourData.hourlyTxns.plus(ONE_BI)
  pairHourData.save()

  return pairHourData as PairHourData
}

export function updatePoolDayData(event: ethereum.Event): PoolDayData {
  let timestamp = event.block.timestamp.toI32()
  let dayID = timestamp / 86400
  let dayStartTimestamp = dayID * 86400
  let dayPoolID = event.address
    .toHexString()
    .concat('-')
    .concat(BigInt.fromI32(dayID).toString())
  let pool = Pool.load(event.address.toHexString())
  let poolDayData = PoolDayData.load(dayPoolID)
  if (poolDayData === null) {
    poolDayData = new PoolDayData(dayPoolID)
    poolDayData.date = dayStartTimestamp
    poolDayData.token0 = pool.token0
    poolDayData.token1 = pool.token1
    poolDayData.poolAddress = event.address
    poolDayData.dailyVolumeToken0 = ZERO_BD
    poolDayData.dailyVolumeToken1 = ZERO_BD
    poolDayData.dailyVolumeUSD = ZERO_BD
    poolDayData.dailyFeeUSD = ZERO_BD
    poolDayData.dailyTxns = ZERO_BI
  }

  poolDayData.totalSupply = pool.totalSupply
  poolDayData.reserve0 = pool.reserve0
  poolDayData.reserve1 = pool.reserve1
  poolDayData.vReserve0 = pool.vReserve0
  poolDayData.vReserve1 = pool.vReserve1
  poolDayData.reserveUSD = pool.reserveUSD
  poolDayData.dailyTxns = poolDayData.dailyTxns.plus(ONE_BI)
  poolDayData.save()

  return poolDayData as PoolDayData
}

export function updatePoolHourData(event: ethereum.Event): PoolHourData {
  let timestamp = event.block.timestamp.toI32()
  let hourIndex = timestamp / 3600 // get unique hour within unix history
  let hourStartUnix = hourIndex * 3600 // want the rounded effect
  let hourPoolID = event.address
    .toHexString()
    .concat('-')
    .concat(BigInt.fromI32(hourIndex).toString())
  let pool = Pool.load(event.address.toHexString())
  let poolHourData = PoolHourData.load(hourPoolID)
  if (poolHourData === null) {
    poolHourData = new PoolHourData(hourPoolID)
    poolHourData.hourStartUnix = hourStartUnix
    poolHourData.pool = event.address.toHexString()
    poolHourData.hourlyVolumeToken0 = ZERO_BD
    poolHourData.hourlyVolumeToken1 = ZERO_BD
    poolHourData.hourlyVolumeUSD = ZERO_BD
    poolHourData.hourlyFeeUSD = ZERO_BD
    poolHourData.hourlyTxns = ZERO_BI
  }

  poolHourData.reserve0 = pool.reserve0
  poolHourData.reserve1 = pool.reserve1
  poolHourData.vReserve0 = pool.vReserve0
  poolHourData.vReserve1 = pool.vReserve1
  poolHourData.reserveUSD = pool.reserveUSD
  poolHourData.hourlyTxns = poolHourData.hourlyTxns.plus(ONE_BI)
  poolHourData.save()

  return poolHourData as PoolHourData
}

export function updateTokenDayData(token: Token, event: ethereum.Event): TokenDayData {
  let bundle = Bundle.load('1')
  let timestamp = event.block.timestamp.toI32()
  let dayID = timestamp / 86400
  let dayStartTimestamp = dayID * 86400
  let tokenDayID = token.id
    .toString()
    .concat('-')
    .concat(BigInt.fromI32(dayID).toString())

  let tokenDayData = TokenDayData.load(tokenDayID)
  if (tokenDayData === null) {
    tokenDayData = new TokenDayData(tokenDayID)
    tokenDayData.date = dayStartTimestamp
    tokenDayData.token = token.id
    tokenDayData.priceUSD = token.derivedETH.times(bundle.ethPrice)
    tokenDayData.dailyVolumeToken = ZERO_BD
    tokenDayData.dailyVolumeETH = ZERO_BD
    tokenDayData.dailyVolumeUSD = ZERO_BD
    tokenDayData.dailyTxns = ZERO_BI
    tokenDayData.totalLiquidityUSD = ZERO_BD
  }
  tokenDayData.priceUSD = token.derivedETH.times(bundle.ethPrice)
  tokenDayData.totalLiquidityToken = token.totalLiquidity
  tokenDayData.totalLiquidityETH = token.totalLiquidity.times(token.derivedETH)
  tokenDayData.totalLiquidityUSD = tokenDayData.totalLiquidityETH.times(bundle.ethPrice)
  tokenDayData.dailyTxns = tokenDayData.dailyTxns.plus(ONE_BI)
  tokenDayData.save()

  /**
   * @todo test if this speeds up sync
   */
  // updateStoredTokens(tokenDayData as TokenDayData, dayID)
  // updateStoredPairs(tokenDayData as TokenDayData, dayPairID)

  return tokenDayData as TokenDayData
}
