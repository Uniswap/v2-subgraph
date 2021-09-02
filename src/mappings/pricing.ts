/* eslint-disable prefer-const */
import { Pair, Token, Bundle, Pool } from '../types/schema'
import { BigDecimal, Address, BigInt, log } from '@graphprotocol/graph-ts'
import {
  WETH_ADDRESS,
  DAI_ADDRESS,
  USDC_ADDRESS,
  USDT_ADDRESS,
  ETH_PRICING_POOLS,
  MINIMUM_USD_THRESHOLD_NEW_PAIRS,
  MINIMUM_LIQUIDITY_THRESHOLD_ETH
} from '../config/constants'
import { ZERO_BD, ONE_BD, BD_100, BD_90, BD_10 } from './utils'

function getAvgPrice(pools: Pool[], totalLiquidityETH: BigDecimal): BigDecimal {
  let price = ZERO_BD
  for (let i = 0; i < pools.length; ++i) {
    let pool = pools[i]
    let vReserveEth = pool.token0 == WETH_ADDRESS ? pool.vReserve0 : pool.vReserve1
    let vReserveUSD = pool.token0 == WETH_ADDRESS ? pool.vReserve1 : pool.vReserve0
    let poolPrice = vReserveUSD.div(vReserveEth)
    price = price.plus(poolPrice.times(vReserveEth).div(totalLiquidityETH))
  }
  log.debug('---------------- getAvgPrice {} {} ------------', [price.toString(), totalLiquidityETH.toString()])
  return price
}

export function getEthPriceInUSD(): BigDecimal {
  let pools: Pool[] = []
  let totalLiquidityETH = ZERO_BD
  let splits = ETH_PRICING_POOLS.split('|')

  for (let i = 0; i < splits.length; ++i) {
    let address = splits[i]
    let pool = Pool.load(address)

    if (pool === null) continue
    if (pool.vReserve0.equals(ZERO_BD) && pool.vReserve1.equals(ZERO_BD)) continue // pool is not initialized yet

    let percentToken0 = pool.reserve0
      .div(pool.vReserve0)
      .times(BD_100)
      .div(pool.reserve0.div(pool.vReserve0).plus(pool.reserve1.div(pool.vReserve1)))
    if (percentToken0.gt(BD_90) || percentToken0.lt(BD_10)) continue // pool depleted in 1 side

    let vReserveEth = pool.token0 == WETH_ADDRESS ? pool.vReserve0 : pool.vReserve1
    let reserveEth = pool.token0 == WETH_ADDRESS ? pool.reserve0 : pool.reserve1
    if (reserveEth.le(MINIMUM_LIQUIDITY_THRESHOLD_ETH)) continue

    totalLiquidityETH = totalLiquidityETH.plus(vReserveEth)
    pools.push(pool!)
  }
  // has at least 1 pool meet all criteria
  if (pools.length != 0) {
    return getAvgPrice(pools, totalLiquidityETH)
  }

  log.debug('---------------- eth bundle dont have any pair meeting all criteria-------------', [])
  for (let i = 0; i < splits.length; ++i) {
    let pool = Pool.load(splits[i])

    if (pool === null) continue
    if (pool.vReserve0.equals(ZERO_BD) && pool.vReserve1.equals(ZERO_BD)) continue // pool is not initialized yet

    let vReserveEth = pool.token0 == WETH_ADDRESS ? pool.vReserve0 : pool.vReserve1
    totalLiquidityETH = totalLiquidityETH.plus(vReserveEth)
    pools.push(pool!)
  }
  if (pools.length != 0) {
    return getAvgPrice(pools, totalLiquidityETH)
  }

  log.debug('---------------- eth bundle dont have any pair -------------', [])
  return ZERO_BD
}

// token where amounts should contribute to tracked volume and liquidity
let WHITELIST: string[] = [
  WETH_ADDRESS, // WETH
  // '0x85cc44e3b1a035dbdcaeb3aac0e3d2017264c6dc', // DAI - ropsten
  // '0x342452418bf808bfedcb8ae88a7792852777646e', // USDC - ropsten
  // '0x2a555b1cb74025c3decccedaa9b469ff7efe60d3', // USDT

  USDT_ADDRESS, // new USDT
  USDC_ADDRESS, // new USDC
  DAI_ADDRESS // new DAI

  // '0x0000000000085d4780b73119b644ae5ecd22b376', // TUSD
  // '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643', // cDAI
  // '0x39aa39c021dfbae8fac545936693ac917d5e7563', // cUSDC
  // '0x86fadb80d8d2cff3c3680819e4da99c10232ba0f', // EBASE
  // '0x57ab1ec28d129707052df4df418d58a2d46d5f51', // sUSD
  // '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2', // MKR
  // '0xc00e94cb662c3520282e6f5717214004a7f26888', // COMP
  // '0x514910771af9ca656af840dff83e8264ecf986ca', //LINK
  // '0x960b236a07cf122663c4303350609a66a7b288c0', //ANT
  // '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f', //SNX
  // '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e', //YFI
  // '0xdf5e0e81dff6faf3a7e52ba697820c5e32d806a8' // yCurv
]

/**
 * Search through graph to find derived Eth per token.
 * @todo update to be derived ETH (add stablecoin estimates)
 **/
export function findEthPerToken(token: Token): BigDecimal {
  if (token.id == WETH_ADDRESS) {
    return ONE_BD
  }

  let totalPoolPrice = ZERO_BD
  let totalPoolNum = ZERO_BD

  // loop through whitelist and check if paired with any
  for (let i = 0; i < WHITELIST.length; ++i) {
    let pair = Pair.load(token.id + '_' + WHITELIST[i])
    if (pair === null) {
      pair = Pair.load(WHITELIST[i] + '_' + token.id)
    }
    if (pair === null) {
      continue
    }

    let pools = pair.pools
    for (let j = 0; j < pools.length; ++j) {
      let pool = Pool.load(pools[j])
      // there is a case when 2 pools are created at the same blocks
      // so the 2nd pool is not exist in the storage yet
      if (pool === null) continue

      // if pool is just created, skip it
      if (pool.vReserve0.equals(ZERO_BD) && pool.vReserve1.equals(ZERO_BD)) continue

      let percentToken0 = pool.reserve0
        .div(pool.vReserve0)
        .times(BD_100)
        .div(pool.reserve0.div(pool.vReserve0).plus(pool.reserve1.div(pool.vReserve1)))

      if (percentToken0.gt(BD_90) || percentToken0.lt(BD_10)) continue

      if (pool.token0 == token.id && pool.reserveETH.gt(MINIMUM_LIQUIDITY_THRESHOLD_ETH)) {
        let token1 = Token.load(pool.token1)
        if (token1 === null) {
          continue
        }
        if(token1.derivedETH.equals(ZERO_BD)) {
          continue
        }
        let tokenPrice = pool.token1Price.times(token1.derivedETH)
        totalPoolPrice = totalPoolPrice.plus(tokenPrice) // return token1 per our token * Eth per token 1
        totalPoolNum = totalPoolNum.plus(ONE_BD)
      }
      if (pool.token1 == token.id && pool.reserveETH.gt(MINIMUM_LIQUIDITY_THRESHOLD_ETH)) {
        let token0 = Token.load(pool.token0)
        if (token0 === null) {
          continue
        }
        if(token0.derivedETH.equals(ZERO_BD)) {
          continue
        }
        let tokenPrice = pool.token0Price.times(token0.derivedETH)
        totalPoolPrice = totalPoolPrice.plus(tokenPrice) // return token0 per our token * ETH per token 0
        totalPoolNum = totalPoolNum.plus(ONE_BD)
      }
    }
  }

  if (totalPoolNum.gt(ZERO_BD)) {
    return totalPoolPrice.div(totalPoolNum)
  }

  return ZERO_BD // nothing was found return 0
}

/**
 * Accepts tokens and amounts, return tracked amount based on token whitelist
 * If one token on whitelist, return amount in that token converted to USD.
 * If both are, return average of two amounts
 * If neither is, return 0
 */
export function getTrackedVolumeUSD(
  tokenAmount0: BigDecimal,
  token0: Token,
  tokenAmount1: BigDecimal,
  token1: Token,
  pool: Pool
): BigDecimal {
  let bundle = Bundle.load('1')
  let price0 = token0.derivedETH.times(bundle.ethPrice)
  let price1 = token1.derivedETH.times(bundle.ethPrice)

  log.debug('__________ get tracked volume usd ___________ {} {} {} {} ', [
    token0.id,
    tokenAmount0.toString(),
    token1.id,
    tokenAmount1.toString()
  ])

  // if less than 5 LPs, require high minimum reserve amount amount or return 0
  if (pool.liquidityProviderCount.lt(BigInt.fromI32(5))) {
    let reserve0USD = pool.reserve0.times(price0)
    let reserve1USD = pool.reserve1.times(price1)

    log.debug('!!!!!!!!!!!!! if less than 5 LPs, require high minimum reserve amount amount or return 0 {} {} {}', [
      reserve0USD.toString(),
      reserve1USD.toString(),
      MINIMUM_USD_THRESHOLD_NEW_PAIRS.toString()
    ])
    if (WHITELIST.includes(token0.id) && WHITELIST.includes(token1.id)) {
      if (reserve0USD.plus(reserve1USD).lt(MINIMUM_USD_THRESHOLD_NEW_PAIRS)) {
        return ZERO_BD
      }
    }
    if (WHITELIST.includes(token0.id) && !WHITELIST.includes(token1.id)) {
      if (reserve0USD.times(BigDecimal.fromString('2')).lt(MINIMUM_USD_THRESHOLD_NEW_PAIRS)) {
        return ZERO_BD
      }
    }
    if (!WHITELIST.includes(token0.id) && WHITELIST.includes(token1.id)) {
      if (reserve1USD.times(BigDecimal.fromString('2')).lt(MINIMUM_USD_THRESHOLD_NEW_PAIRS)) {
        return ZERO_BD
      }
    }
  }

  log.debug('******************* both are whitelist tokens, take average of both amounts* ', [])

  // both are whitelist tokens, take average of both amounts
  if (WHITELIST.includes(token0.id) && WHITELIST.includes(token1.id)) {
    return tokenAmount0
      .times(price0)
      .plus(tokenAmount1.times(price1))
      .div(BigDecimal.fromString('2'))
  }

  // take full value of the whitelisted token amount
  if (WHITELIST.includes(token0.id) && !WHITELIST.includes(token1.id)) {
    return tokenAmount0.times(price0)
  }

  // take full value of the whitelisted token amount
  if (!WHITELIST.includes(token0.id) && WHITELIST.includes(token1.id)) {
    return tokenAmount1.times(price1)
  }

  // neither token is on white list, tracked volume is 0
  return ZERO_BD
}

/**
 * Accepts tokens and amounts, return tracked amount based on token whitelist
 * If one token on whitelist, return amount in that token converted to USD * 2.
 * If both are, return sum of two amounts
 * If neither is, return 0
 */
export function getTrackedLiquidityUSD(
  tokenAmount0: BigDecimal,
  token0: Token,
  tokenAmount1: BigDecimal,
  token1: Token
): BigDecimal {
  let bundle = Bundle.load('1')
  let price0 = token0.derivedETH.times(bundle.ethPrice)
  let price1 = token1.derivedETH.times(bundle.ethPrice)

  // both are whitelist tokens, take average of both amounts
  if (WHITELIST.includes(token0.id) && WHITELIST.includes(token1.id)) {
    return tokenAmount0.times(price0).plus(tokenAmount1.times(price1))
  }

  // take double value of the whitelisted token amount
  if (WHITELIST.includes(token0.id) && !WHITELIST.includes(token1.id)) {
    return tokenAmount0.times(price0).times(BigDecimal.fromString('2'))
  }

  // take double value of the whitelisted token amount
  if (!WHITELIST.includes(token0.id) && WHITELIST.includes(token1.id)) {
    return tokenAmount1.times(price1).times(BigDecimal.fromString('2'))
  }

  // neither token is on white list, tracked volume is 0
  return ZERO_BD
}
