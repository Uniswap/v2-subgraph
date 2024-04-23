/* eslint-disable prefer-const */
import { BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

import { Bundle, Pair, Token } from '../types/schema'
import { ONE_BD, UNTRACKED_PAIRS, ZERO_BD } from './helpers'

const WETH_ADDRESS = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
const USDC_WETH_PAIR = '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc' // created 10008355
const DAI_WETH_PAIR = '0xa478c2975ab1ea89e8196811f51a7b7ade33eb11' // created block 10042267
const USDT_WETH_PAIR = '0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852' // created block 10093341

export function getEthPriceInUSD(): BigDecimal {
  // fetch eth prices for each stablecoin
  let daiPair = Pair.load(DAI_WETH_PAIR) // dai is token0
  let usdcPair = Pair.load(USDC_WETH_PAIR) // usdc is token0
  let usdtPair = Pair.load(USDT_WETH_PAIR) // usdt is token1

  // all 3 have been created
  if (daiPair !== null && usdcPair !== null && usdtPair !== null) {
    let totalLiquidityETH = daiPair.reserve1.plus(usdcPair.reserve1).plus(usdtPair.reserve0)
    let daiWeight = daiPair.reserve1.div(totalLiquidityETH)
    let usdcWeight = usdcPair.reserve1.div(totalLiquidityETH)
    let usdtWeight = usdtPair.reserve0.div(totalLiquidityETH)
    return daiPair.token0Price
      .times(daiWeight)
      .plus(usdcPair.token0Price.times(usdcWeight))
      .plus(usdtPair.token1Price.times(usdtWeight))
    // dai and USDC have been created
  } else if (daiPair !== null && usdcPair !== null) {
    let totalLiquidityETH = daiPair.reserve1.plus(usdcPair.reserve1)
    let daiWeight = daiPair.reserve1.div(totalLiquidityETH)
    let usdcWeight = usdcPair.reserve1.div(totalLiquidityETH)
    return daiPair.token0Price.times(daiWeight).plus(usdcPair.token0Price.times(usdcWeight))
    // USDC is the only pair so far
  } else if (usdcPair !== null) {
    return usdcPair.token0Price
  } else {
    return ZERO_BD
  }
}

// token where amounts should contribute to tracked volume and liquidity
export const PRICE_TRACKING_TOKENS: string[] = [
  '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', // WETH
  '0x6b175474e89094c44da98b954eedeac495271d0f', // DAI
  '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // USDC
  '0xdac17f958d2ee523a2206206994597c13d831ec7', // USDT
  '0x0000000000085d4780b73119b644ae5ecd22b376', // TUSD
  '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643', // cDAI
  '0x39aa39c021dfbae8fac545936693ac917d5e7563', // cUSDC
  '0x86fadb80d8d2cff3c3680819e4da99c10232ba0f', // EBASE
  '0x57ab1ec28d129707052df4df418d58a2d46d5f51', // sUSD
  '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2', // MKR
  '0xc00e94cb662c3520282e6f5717214004a7f26888', // COMP
  '0x514910771af9ca656af840dff83e8264ecf986ca', //LINK
  '0x960b236a07cf122663c4303350609a66a7b288c0', //ANT
  '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f', //SNX
  '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e', //YFI
  '0xdf5e0e81dff6faf3a7e52ba697820c5e32d806a8', // yCurv
  '0x853d955acef822db058eb8505911ed77f175b99e', // FRAX
  '0xa47c8bf37f92abed4a126bda807a7b7498661acd', // WUST
  '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984', // UNI
  '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599', // WBTC
  '0x956f47f50a910163d8bf957cf5846d573e7f87ca', // FEI
]

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
let MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('400000')

// minimum liquidity for price to get tracked
let MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('2')

/**
 * Search through graph to find derived Eth per token.
 * @todo update to be derived ETH (add stablecoin estimates)
 **/
export function findEthPerToken(token: Token): BigDecimal {
  if (token.id == WETH_ADDRESS) {
    return ONE_BD
  }
  const priceTrackingPairs = token.priceTrackingPairs
  for (let i = 0; i < priceTrackingPairs.length; i++) {
    const pairAddress = priceTrackingPairs[i]
    const pair = Pair.load(pairAddress)

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

  return ZERO_BD // nothing was found return 0
}

/**
 * Accepts tokens and amounts, return tracked amount based on price tracking tokens
 * If one token is a price tracking token, return amount in that token converted to USD.
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
    if (PRICE_TRACKING_TOKENS.includes(token0.id) && PRICE_TRACKING_TOKENS.includes(token1.id)) {
      if (reserve0USD.plus(reserve1USD).lt(MINIMUM_USD_THRESHOLD_NEW_PAIRS)) {
        return ZERO_BD
      }
    }
    if (PRICE_TRACKING_TOKENS.includes(token0.id) && !PRICE_TRACKING_TOKENS.includes(token1.id)) {
      if (reserve0USD.times(BigDecimal.fromString('2')).lt(MINIMUM_USD_THRESHOLD_NEW_PAIRS)) {
        return ZERO_BD
      }
    }
    if (!PRICE_TRACKING_TOKENS.includes(token0.id) && PRICE_TRACKING_TOKENS.includes(token1.id)) {
      if (reserve1USD.times(BigDecimal.fromString('2')).lt(MINIMUM_USD_THRESHOLD_NEW_PAIRS)) {
        return ZERO_BD
      }
    }
  }

  // both are price tracking tokens, take average of both amounts
  if (PRICE_TRACKING_TOKENS.includes(token0.id) && PRICE_TRACKING_TOKENS.includes(token1.id)) {
    return tokenAmount0.times(price0).plus(tokenAmount1.times(price1)).div(BigDecimal.fromString('2'))
  }

  // take full value of the price tracking token amount
  if (PRICE_TRACKING_TOKENS.includes(token0.id) && !PRICE_TRACKING_TOKENS.includes(token1.id)) {
    return tokenAmount0.times(price0)
  }

  // take full value of the price tracking token amount
  if (!PRICE_TRACKING_TOKENS.includes(token0.id) && PRICE_TRACKING_TOKENS.includes(token1.id)) {
    return tokenAmount1.times(price1)
  }

  // neither token is a price tracking token, tracked volume is 0
  return ZERO_BD
}

/**
 * Accepts tokens and amounts, return tracked amount based on price tracking token list
 * If one token is a price tracking token, return amount in that token converted to USD * 2.
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

  // both are price tracking tokens, take average of both amounts
  if (PRICE_TRACKING_TOKENS.includes(token0.id) && PRICE_TRACKING_TOKENS.includes(token1.id)) {
    return tokenAmount0.times(price0).plus(tokenAmount1.times(price1))
  }

  // take double value of the price tracking token amount
  if (PRICE_TRACKING_TOKENS.includes(token0.id) && !PRICE_TRACKING_TOKENS.includes(token1.id)) {
    return tokenAmount0.times(price0).times(BigDecimal.fromString('2'))
  }

  // take double value of the price tracking token amount
  if (!PRICE_TRACKING_TOKENS.includes(token0.id) && PRICE_TRACKING_TOKENS.includes(token1.id)) {
    return tokenAmount1.times(price1).times(BigDecimal.fromString('2'))
  }

  // neither token is a price tracking token, tracked volume is 0
  return ZERO_BD
}
