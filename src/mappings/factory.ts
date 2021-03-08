/* eslint-disable prefer-const */
import { log } from "@graphprotocol/graph-ts"
import { DmmFactory, Bundle, Pair, Token, Pool } from "../types/schema"
import { PoolCreated } from "../types/DmmFactory/DmmFactory"
import { Pool as PoolTemplate } from "../types/templates"
import {
  FACTORY_ADDRESS, ZERO_BD, ZERO_BI, BI_18,
  fetchTokenSymbol,
  fetchTokenName,
  fetchTokenTotalSupply,
  fetchTokenDecimals,
  convertTokenToDecimal
} from "./utils"

export function handlePoolCreated(event: PoolCreated): void {
  log.debug("------run to handle pool created ------ ", [])
  // load factory (create if first exchange)
  let factory = DmmFactory.load(FACTORY_ADDRESS)
  if (factory === null) {
    factory = new DmmFactory(FACTORY_ADDRESS)
    factory.pairCount = 0
    factory.totalVolumeETH = ZERO_BD
    factory.totalLiquidityETH = ZERO_BD
    factory.totalVolumeUSD = ZERO_BD
    factory.totalFeeUSD = ZERO_BD
    factory.untrackedVolumeUSD = ZERO_BD
    factory.untrackedFeeUSD = ZERO_BD
    factory.totalLiquidityUSD = ZERO_BD
    factory.txCount = ZERO_BI

    // create new bundle
    let bundle = new Bundle('1')
    bundle.ethPrice = ZERO_BD
    bundle.save()
  }
  factory.pairCount = factory.pairCount + 1
  factory.save()

  log.debug("222------save factory success ------ ", [])
  ///////  PoolCreated (index_topic_1 address token0, index_topic_2 address token1, address pool, uint32 ampBps, uint256 totalPool)

  // create the tokens
  let token0 = Token.load(event.params.token0.toHexString())
  let token1 = Token.load(event.params.token1.toHexString())

  // fetch info if null
  if (token0 === null) {
    token0 = new Token(event.params.token0.toHexString())
    token0.symbol = fetchTokenSymbol(event.params.token0)
    token0.name = fetchTokenName(event.params.token0)
    token0.totalSupply = fetchTokenTotalSupply(event.params.token0)
    let decimals = fetchTokenDecimals(event.params.token0)
    // bail if we couldn't figure out the decimals
    if (decimals === null) {
      log.debug('mybug the decimal on token 0 was null', [])
      return
    }

    token0.decimals = decimals
    token0.derivedETH = ZERO_BD
    token0.tradeVolume = ZERO_BD
    token0.tradeVolumeUSD = ZERO_BD
    token0.untrackedVolumeUSD = ZERO_BD
    token0.totalLiquidity = ZERO_BD
    // token0.allPairs = []
    token0.txCount = ZERO_BI
  }

  log.debug("333------token 000 success ------ ", [])

  // fetch info if null
  if (token1 === null) {
    token1 = new Token(event.params.token1.toHexString())
    token1.symbol = fetchTokenSymbol(event.params.token1)
    token1.name = fetchTokenName(event.params.token1)
    token1.totalSupply = fetchTokenTotalSupply(event.params.token1)
    let decimals = fetchTokenDecimals(event.params.token1)

    // bail if we couldn't figure out the decimals
    if (decimals === null) {
      return
    }
    token1.decimals = decimals
    token1.derivedETH = ZERO_BD
    token1.tradeVolume = ZERO_BD
    token1.tradeVolumeUSD = ZERO_BD
    token1.untrackedVolumeUSD = ZERO_BD
    token1.totalLiquidity = ZERO_BD
    // token1.allPairs = []
    token1.txCount = ZERO_BI
  }

  // log.debug("444------token 111 success ------ ", [])
  // todo find pair with token 0 and token 1
  // if pair exist   -> add pool to pair
  // if pair not found  -> create new pair
  let pairId = token0.id + "-" + token1.id
  let pair = Pair.load(pairId)

  if (pair == null) {
    // create new pair
    let newPair = new Pair(pairId) as Pair
    newPair.token0 = token0.id
    newPair.token1 = token1.id
    // newPair.pools = []
    newPair.liquidityProviderCount = ZERO_BI
    newPair.createdAtTimestamp = event.block.timestamp
    newPair.createdAtBlockNumber = event.block.number
    newPair.txCount = ZERO_BI
    newPair.reserve0 = ZERO_BD
    newPair.reserve1 = ZERO_BD
    newPair.trackedReserveETH = ZERO_BD
    newPair.reserveETH = ZERO_BD
    newPair.reserveUSD = ZERO_BD
    newPair.totalSupply = ZERO_BD
    newPair.volumeToken0 = ZERO_BD
    newPair.volumeToken1 = ZERO_BD
    newPair.volumeUSD = ZERO_BD
    newPair.feeUSD = ZERO_BD
    newPair.untrackedFeeUSD = ZERO_BD
    newPair.untrackedVolumeUSD = ZERO_BD
    newPair.token0Price = ZERO_BD
    newPair.token1Price = ZERO_BD
    newPair.save()

    pair = newPair
  }


  // log.debug("555------pair success ------ ", [])

  
  let pool = new Pool(event.params.pool.toHexString()) as Pool
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
  pool.save()


  // let pairPools = pair.pools 
  // pairPools.push(pool.id)
  // pair.pools = pairPools
  // pair.save()

  // create the tracked contract based on the template
  PoolTemplate.create(event.params.pool)

  // save updated values
  token0.save()
  token1.save()
  // pair.save()
  // factory.save()
}
