import { Bundle } from './../types/schema'
/* eslint-disable prefer-const */
import { Pair, Token } from '../types/schema'
import { BigDecimal, Address } from '@graphprotocol/graph-ts/index'
import { ZERO_BD } from './helpers'

const DAI_WETH_PAIR = '0xa478c2975ab1ea89e8196811f51a7b7ade33eb11'
const DAI_ADDRESS = '0x6b175474e89094c44da98b954eedeac495271d0f'

const USDC_WETH_PAIR = '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc'
const USDC_ADDRESS = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'

const WETH_ADDRESS = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'

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
  let cumulativeAmount = ZERO_BD

  // fetch eth prices for each stablecoin
  let daiPerEth = deriveEthPrice(DAI_WETH_PAIR, DAI_ADDRESS)
  let usdcPerEth = deriveEthPrice(USDC_WETH_PAIR, USDC_ADDRESS)

  // return weighted average of prices
  cumulativeAmount = daiPerEth.plus(usdcPerEth)
  return cumulativeAmount.div(BigDecimal.fromString('2'))
}

/**
 * Search through graph to find derived Eth per token.
 * @todo update to be derived ETH (add stablecoin estimates)
 **/
export function findEthPerToken(token: Token, maxDepthReached: boolean): BigDecimal {
  if (token.wethPair != null) {
    let wethPair = Pair.load(token.wethPair)
    if (wethPair.token0 == token.id) {
      // our token is token 0
      return wethPair.token1Price
    } else {
      // our token is token 1
      return wethPair.token0Price
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

function getPriceFromAddress(tokenAddress: string): BigDecimal {
  let bundle = Bundle.load('1')
  if (tokenAddress == WETH_ADDRESS) {
    return bundle.ethPrice
  }
  if (tokenAddress == DAI_ADDRESS) {
    return BigDecimal.fromString('1')
  }
  if (tokenAddress == USDC_ADDRESS) {
    return BigDecimal.fromString('1')
  }
  return ZERO_BD
}

export function amountsToUSD(
  tokenAmount0: BigDecimal,
  token0: Token,
  tokenAmount1: BigDecimal,
  token1: Token
): BigDecimal {
  let price0 = getPriceFromAddress(token0.id)
  let price1 = getPriceFromAddress(token1.id)

  if (price0.notEqual(ZERO_BD) && price1.notEqual(ZERO_BD)) {
    return tokenAmount0.times(price0)
  }

  if (price0.notEqual(ZERO_BD) && price1.equals(ZERO_BD)) {
    return tokenAmount0.times(price0)
  }

  if (price1.notEqual(ZERO_BD) && price0.equals(ZERO_BD)) {
    return tokenAmount1.times(price1)
  }

  return ZERO_BD /** @todo may want to return null */
}
