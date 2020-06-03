/* eslint-disable prefer-const */
import { Pair, Token } from '../types/schema'
import { BigDecimal, Address, log } from '@graphprotocol/graph-ts/index'
import { ZERO_BD, ONE_BD, factoryContract, ADDRESS_ZERO } from './helpers'

const DAI_WETH_PAIR = '0xa478c2975ab1ea89e8196811f51a7b7ade33eb11'
const DAI_ADDRESS = '0x6b175474e89094c44da98b954eedeac495271d0f'

const USDC_WETH_PAIR = '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc'
const USDC_ADDRESS = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'

const USDT_ADDRESS = '0xdac17f958d2ee523a2206206994597c13d831ec7'
const USDT_WETH_PAIR = '0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852'

const WETH_ADDRESS = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'

// only count derived ETH prices in WETH pairs with at least this much WETH reserve
const ETH_RESERVE_THRESHOLD = BigDecimal.fromString('0.1')
function deriveEthPrice(pairAddress: string, tokenAddress: string): BigDecimal {
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
  let daiPerEth = deriveEthPrice(DAI_WETH_PAIR, DAI_ADDRESS)
  let usdcPerEth = deriveEthPrice(USDC_WETH_PAIR, USDC_ADDRESS)
  let usdtPerEth = deriveEthPrice(USDT_WETH_PAIR, USDT_ADDRESS)

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

// only return price of WETH and stabelcoins in USD, everything else is 0
function getStrictPriceOfToken(tokenAddress: string): BigDecimal {
  let bundle = Bundle.load('1')
  if (tokenAddress == WETH_ADDRESS) {
    return bundle.ethPrice
  }
  if (tokenAddress == DAI_ADDRESS) {
    let dai = Token.load(DAI_ADDRESS)
    if (dai != null) {
      return dai.derivedETH.times(bundle.ethPrice)
    } else {
      return ONE_BD // in the case where DAI pair hasnt been created yet
    }
  }
  if (tokenAddress == USDC_ADDRESS) {
    let usdc = Token.load(USDC_ADDRESS)
    if (usdc != null) {
      return usdc.derivedETH.times(bundle.ethPrice)
    } else {
      return ONE_BD // in the case where DAI pair hasnt been created yet
    }
  }
  return ZERO_BD
}

/**
 * @param tokenAmount0
 * @param token0
 * @param tokenAmount1
 * @param token1
 *
 * Gets the strict volume amount conversion to USD.
 * Checks if either token is stablecoin or WETH,
 * if true, return the amount in that token converted to USD.
 *
 * If neither is stabelcoin or WETH, return 0
 */
export function getTrackedVolumeUSD(
  tokenAmount0: BigDecimal,
  token0: Token,
  tokenAmount1: BigDecimal,
  token1: Token
): BigDecimal {
  let price0 = getStrictPriceOfToken(token0.id)
  let price1 = getStrictPriceOfToken(token1.id)

  // if both not 0, we have a stabelcoin <-> stablecoin pair, or WETH <-> stabelcoin
  // return average of the 2 USD amounts
  if (price0.notEqual(ZERO_BD) && price1.notEqual(ZERO_BD)) {
    return tokenAmount0
      .times(price0)
      .plus(tokenAmount1.times(price1))
      .div(BigDecimal.fromString('2'))
  }

  if (price0.notEqual(ZERO_BD) && price1.equals(ZERO_BD)) {
    return tokenAmount0.times(price0)
  }

  if (price1.notEqual(ZERO_BD) && price0.equals(ZERO_BD)) {
    return tokenAmount1.times(price1)
  }

  return ZERO_BD // case where neither token is ETH or stablecoin
}

