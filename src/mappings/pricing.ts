import { BigDecimal } from '@graphprotocol/graph-ts'

import { Pair, Token } from '../types/schema'
import { ZERO_BD } from './helpers'

const STABLECOINS: string[] = [
  '0x6b175474e89094c44da98b954eedeac495271d0f', // DAI
  '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // USDC
  '0xdac17f958d2ee523a2206206994597c13d831ec7', // USDT
]

export function isStablecoin(token: string): boolean {
  return STABLECOINS.includes(token)
}

export function updatePrimaryUsdPrices(pair: Pair, token0: Token, token1: Token): void {
  if (isStablecoin(pair.token0) && isStablecoin(pair.token1)) {
    return
  }

  if (isStablecoin(pair.token0)) {
    token1.primaryUsdPrice = pair.reserve0.div(pair.reserve1)
  } else if (isStablecoin(pair.token1)) {
    token0.primaryUsdPrice = pair.reserve1.div(pair.reserve0)
  }
}

export function safeDiv(a: BigDecimal, b: BigDecimal): BigDecimal {
  if (b.equals(ZERO_BD)) {
    return ZERO_BD
  }

  return a.div(b)
}

export function getPrimaryUsdLiquidity(pair: Pair): BigDecimal {
  if (isStablecoin(pair.token0) && isStablecoin(pair.token1)) {
    return pair.reserve0.plus(pair.reserve1)
  }

  if (isStablecoin(pair.token0)) {
    return pair.reserve0
  }

  if (isStablecoin(pair.token1)) {
    return pair.reserve1
  }

  return ZERO_BD
}

export function getUsdPrice(pair: Pair, tokenAddress: string): BigDecimal {
  if (isStablecoin(tokenAddress)) {
    return BigDecimal.fromString('1.0')
  }

  if (isStablecoin(pair.token0)) {
    return safeDiv(pair.reserve0, pair.reserve1)
  }

  if (isStablecoin(pair.token1)) {
    return safeDiv(pair.reserve1, pair.reserve0)
  }

  return ZERO_BD
}

// returns [maxUsdLiquidity, bestUsdPrice]
export function getBestPrimaryUsdPrice(stablecoinPairAddresses: string[], tokenAddress: string): [BigDecimal, BigDecimal] {
  if (isStablecoin(tokenAddress)) {
    return [ZERO_BD, BigDecimal.fromString('1.0')]
  }

  let maxUsdLiquidity = ZERO_BD
  let bestUsdPrice = ZERO_BD

  for (let i = 0; i < stablecoinPairAddresses.length; i++) {
    const pair = Pair.load(stablecoinPairAddresses[i])!
    const primaryUsdLiquidity = getPrimaryUsdLiquidity(pair)
    if (primaryUsdLiquidity.gt(maxUsdLiquidity)) {
      maxUsdLiquidity = primaryUsdLiquidity
      bestUsdPrice = getUsdPrice(pair, tokenAddress)
    }
  }

  return [maxUsdLiquidity, bestUsdPrice]
}
