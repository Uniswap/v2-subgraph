/* eslint-disable prefer-const */
import { Pair, Token } from '../types/schema'
import { BigDecimal, Address } from '@graphprotocol/graph-ts/index'
import { ZERO_BD } from './helpers'

const DAI_WETH_EXCHANGE = '0x3ddd4674c99979ead4a3160f12567c90a07f0e94'
const DAI_ADDRESS = '0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735'

const USDC_EXCHANGE = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
const USDC_WETH_EXCHANGE = '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc'

export function getEthPriceInUSD(): BigDecimal {
  let daiPerETH = ZERO_BD
  let daiWethPair = Pair.load(Address.fromString(DAI_WETH_EXCHANGE).toHexString())
  if (daiWethPair != null) {
    if (daiWethPair.token0 == DAI_ADDRESS) {
      daiPerETH = daiWethPair.token0Price // dai per weth
    } else {
      daiPerETH = daiWethPair.token1Price // dai per weth
    }
  }

  let usdcPerETH = ZERO_BD
  let usdcWethPair = Pair.load(Address.fromString(USDC_WETH_EXCHANGE).toHexString())
  if (usdcWethPair != null) {
    if (usdcWethPair.token0 == USDC_EXCHANGE) {
      usdcPerETH = usdcWethPair.token0Price // dai per weth
    } else {
      usdcPerETH = usdcWethPair.token1Price // dai per weth
    }
  }

  if (daiPerETH !== ZERO_BD && usdcPerETH !== ZERO_BD) {
    return daiPerETH.plus(usdcPerETH).div(BigDecimal.fromString('2'))
  } else if (daiPerETH !== ZERO_BD && usdcPerETH === ZERO_BD) {
    return daiPerETH
  } else if (daiPerETH === ZERO_BD && usdcPerETH !== ZERO_BD) {
    return usdcPerETH
  } else {
    return BigDecimal.fromString('0') // only for some blocks before DAI creation
  }
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
