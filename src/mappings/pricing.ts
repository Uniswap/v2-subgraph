/* eslint-disable prefer-const */
import { Pair, Token, Bundle } from '../types/schema'
import { BigDecimal, Address } from '@graphprotocol/graph-ts/index'
import { ZERO_BD, factoryContract, ADDRESS_ZERO } from './helpers'

const DAI_WETH_PAIR = '0xa478c2975ab1ea89e8196811f51a7b7ade33eb11'
const DAI_ADDRESS = '0x6b175474e89094c44da98b954eedeac495271d0f'

const USDC_WETH_PAIR = '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc'
const USDC_ADDRESS = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'

const USDT_WETH_PAIR = '0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852'
const USDT_ADDRESS = '0xdac17f958d2ee523a2206206994597c13d831ec7'

const WETH_ADDRESS = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'

// only count derived ETH prices in WETH pairs with at least this much WETH reserve
let ETH_RESERVE_THRESHOLD = BigDecimal.fromString('0.1')

function getTokensPerEth(pairAddress: string, tokenAddress: string): BigDecimal {
  let tokensPerEth = ZERO_BD
  // loop through each stablecoin and find eth price
  let pair = Pair.load(Address.fromString(pairAddress).toHexString())
  if (pair != null) {
    if (pair.token0 == tokenAddress) {
      tokensPerEth = pair.token0Price // token per weth
    } else {
      tokensPerEth = pair.token1Price // token per weth
    }
  }
  return tokensPerEth
}

export function getEthPriceInUSD(): BigDecimal {
  // fetch eth prices for each stablecoin
  let daiPerEth = getTokensPerEth(DAI_WETH_PAIR, DAI_ADDRESS)
  let usdcPerEth = getTokensPerEth(USDC_WETH_PAIR, USDC_ADDRESS)
  let usdtPerEth = getTokensPerEth(USDT_WETH_PAIR, USDT_ADDRESS)

  // return weighted average of prices
  return daiPerEth
    .plus(usdcPerEth)
    .plus(usdtPerEth)
    .div(BigDecimal.fromString('3'))
}

/**
 * Search through graph to find derived Eth per token.
 * @todo update to be derived ETH (add stablecoin estimates)
 **/
export function findEthPerToken(token: Token, maxDepthReached: boolean): BigDecimal {
  let tokenWethPair = factoryContract.getPair(Address.fromString(token.id), Address.fromString(WETH_ADDRESS))

  if (tokenWethPair.toHexString() != ADDRESS_ZERO) {
    let wethPair = Pair.load(tokenWethPair.toHexString())
    if (wethPair.token0 == token.id) {
      if (wethPair.reserve1.gt(ETH_RESERVE_THRESHOLD)) {
        // our token is token 0
        return wethPair.token1Price
      } else {
        return ZERO_BD
      }
    } else {
      if (wethPair.reserve0.gt(ETH_RESERVE_THRESHOLD)) {
        // our token is token 1
        return wethPair.token0Price
      } else {
        return ZERO_BD
      }
    }
  } else if (!maxDepthReached) {
    let allPairs = token.allPairs as Array<string>
    for (let i = 0; i < allPairs.length; i++) {
      let currentPair = Pair.load(allPairs[i])
      if (currentPair.token0 == token.id) {
        // our token is token 0
        let otherToken = Token.load(currentPair.token1)
        let otherTokenEthPrice = findEthPerToken(otherToken as Token, true)
        if (otherTokenEthPrice != null) {
          return currentPair.token1Price.times(otherTokenEthPrice)
        }
      } else {
        // our token is token 1
        let otherToken = Token.load(currentPair.token0)
        let otherTokenEthPrice = findEthPerToken(otherToken as Token, true)
        if (otherTokenEthPrice != null) {
          return currentPair.token0Price.times(otherTokenEthPrice)
        }
      }
    }
  }
  return ZERO_BD /** @todo may want to return null */
}

// token where amounts should contribute to tracked volume and liquidity
let WHITELIST: string[] = [
  '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', // WETH
  '0x6b175474e89094c44da98b954eedeac495271d0f', // DAI
  '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // USDC
  '0xdac17f958d2ee523a2206206994597c13d831ec7', // USDT
  '0x0000000000085d4780b73119b644ae5ecd22b376', // TUSD
  '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643', // cDAI
  '0x39aa39c021dfbae8fac545936693ac917d5e7563', // cUSDC
  '0x86fadb80d8d2cff3c3680819e4da99c10232ba0f', // EBASE
  '0x57ab1ec28d129707052df4df418d58a2d46d5f51', // sUSD
  '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2' // MKR
]

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
  token1: Token
): BigDecimal {
  let bundle = Bundle.load('1')
  let price0 = token0.derivedETH.times(bundle.ethPrice)
  let price1 = token1.derivedETH.times(bundle.ethPrice)

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
