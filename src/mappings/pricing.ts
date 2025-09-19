/* eslint-disable prefer-const */
import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

import { Bundle, Pair, Token } from '../types/schema'
import { factoryContract, normalizeAddress } from './helpers'
import {
  WETH_ADDRESS,
  USDC_WETH_PAIR,
  ADDRESS_ZERO,
  ONE_BD,
  UNTRACKED_PAIRS,
  ZERO_BD,
  WHITELIST,
  MINIMUM_USD_THRESHOLD_NEW_PAIRS,
  MINIMUM_LIQUIDITY_THRESHOLD_ETH,
} from '../constants'

export function getEthPriceInUSD(): BigDecimal {
  // fetch eth prices for each stablecoin
  let usdcPair = Pair.load(USDC_WETH_PAIR) // usdc is token0
  if (usdcPair !== null) {
    let totalLiquidityETH = usdcPair.reserve1
    if (totalLiquidityETH.equals(ZERO_BD)) {
      return ZERO_BD
    }
    let usdcWeight = usdcPair.reserve1.div(totalLiquidityETH)
    return usdcPair.token0Price.times(usdcWeight)
  }

  return ZERO_BD
}

/**
 * Search through graph to find derived Eth per token.
 * @todo update to be derived ETH (add stablecoin estimates)
 **/
export function findEthPerToken(token: Token): BigDecimal {
  if (token.id == WETH_ADDRESS.toHexString()) {
    return ONE_BD
  }
  // loop through whitelist and check if paired with any
  for (let i = 0; i < WHITELIST.length; ++i) {
    let pairAddress = factoryContract.getPair(Address.fromString(token.id), Address.fromString(WHITELIST[i]))
    if (pairAddress.toHexString() != ADDRESS_ZERO) {
      let pair = Pair.load(normalizeAddress(pairAddress))
      if (pair === null) {
        continue
      }
      if (pair.token0 == token.id && pair.reserveETH.gt(MINIMUM_LIQUIDITY_THRESHOLD_ETH)) {
        let token1 = Token.load(pair.token1)
        if (token1 === null) {
          continue
        }
        return pair.token1Price.times(token1.derivedETH as BigDecimal) // return token1 per our token * Eth per token 1
      }
      if (pair.token1 == token.id && pair.reserveETH.gt(MINIMUM_LIQUIDITY_THRESHOLD_ETH)) {
        let token0 = Token.load(pair.token0)
        if (token0 === null) {
          continue
        }
        return pair.token0Price.times(token0.derivedETH as BigDecimal) // return token0 per our token * ETH per token 0
      }
    }
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
  pair: Pair,
): BigDecimal {
  let bundle = Bundle.load('1')!

  let price0 = token0.derivedETH.times(bundle.ethPrice)
  let price1 = token1.derivedETH.times(bundle.ethPrice)

  // dont count tracked volume on these pairs - usually rebass tokens
  if (UNTRACKED_PAIRS.includes(pair.id)) {
    return ZERO_BD
  }

  // if less than 5 LPs, require high minimum reserve amount amount or return 0
  if (pair.liquidityProviderCount.lt(BigInt.fromI32(5))) {
    let reserve0USD = pair.reserve0.times(price0)
    let reserve1USD = pair.reserve1.times(price1)

    // Check whitelist status
    let token0InWhitelist = WHITELIST.includes(token0.id)
    let token1InWhitelist = WHITELIST.includes(token1.id)

    if (token0InWhitelist && token1InWhitelist) {
      let totalReserveUSD = reserve0USD.plus(reserve1USD)
      if (totalReserveUSD.lt(MINIMUM_USD_THRESHOLD_NEW_PAIRS)) {
        return ZERO_BD
      }
    }

    if (token0InWhitelist && !token1InWhitelist) {
      let doubleReserve0USD = reserve0USD.times(BigDecimal.fromString('2'))
      if (doubleReserve0USD.lt(MINIMUM_USD_THRESHOLD_NEW_PAIRS)) {
        return ZERO_BD
      }
    }

    if (!token0InWhitelist && token1InWhitelist) {
      let doubleReserve1USD = reserve1USD.times(BigDecimal.fromString('2'))
      if (doubleReserve1USD.lt(MINIMUM_USD_THRESHOLD_NEW_PAIRS)) {
        return ZERO_BD
      }
    }
  }

  // Check whitelist for final calculation
  let token0InWhitelist = WHITELIST.includes(token0.id)
  let token1InWhitelist = WHITELIST.includes(token1.id)

  // both are whitelist tokens, take average of both amounts
  if (token0InWhitelist && token1InWhitelist) {
    let amount0USD = tokenAmount0.times(price0)
    let amount1USD = tokenAmount1.times(price1)
    let average = amount0USD.plus(amount1USD).div(BigDecimal.fromString('2'))
    return average
  }

  // take full value of the whitelisted token amount
  if (token0InWhitelist && !token1InWhitelist) {
    let amount0USD = tokenAmount0.times(price0)
    return amount0USD
  }

  // take full value of the whitelisted token amount
  if (!token0InWhitelist && token1InWhitelist) {
    let amount1USD = tokenAmount1.times(price1)
    return amount1USD
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
  token1: Token,
): BigDecimal {
  let bundle = Bundle.load('1')!
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
