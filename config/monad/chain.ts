import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

export const FACTORY_ADDRESS = '0x182a927119d56008d921126764bf884221b10f59'

export const REFERENCE_TOKEN = '0x3bd359c1119da7da1d913d1c4d2b7c461115433a'
export const STABLE_TOKEN_PAIRS = ['0x3fe12728ea1b89e4bac6e59a9130b61a27d032f8']

// token where amounts should contribute to tracked volume and liquidity
export const WHITELIST: string[] = [
  '0x3bd359c1119da7da1d913d1c4d2b7c461115433a', // WMON
  '0x754704bc059f8c67012fed69bc8a327a5aafb603', // USDC
  '0x00000000efe302beaa2b3e6e1b18d08d69a9012a', // AUSD
  '0xe7cd86e13ac4309349f30b3435a9d337750fc82d', // USDT
  '0xee8c0e9f1bffb4eb878d8f15f368a02a35481242', // WETH
  '0xea17e5a9efebf1477db45082d67010e2245217f1', // WSOL
]

export const STABLECOINS = [
  '0x754704bc059f8c67012fed69bc8a327a5aafb603', // USDC
  '0x00000000efe302beaa2b3e6e1b18d08d69a9012a', // AUSD
  '0xe7cd86e13ac4309349f30b3435a9d337750fc82d', // USDT
]

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('10000')

// minimum liquidity for price to get tracked
export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('100000')

export class TokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt
}

export const STATIC_TOKEN_DEFINITIONS: TokenDefinition[] = []

export const SKIP_TOTAL_SUPPLY: string[] = []
