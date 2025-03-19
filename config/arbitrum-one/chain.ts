import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

export const FACTORY_ADDRESS = '0xf1D7CC64Fb4452F05c498126312eBE29f30Fbcf9'

export const REFERENCE_TOKEN = '0x82af49447d8a07e3bd95bd0d56f35241523fbab1'
export const STABLE_TOKEN_PAIRS = ['0xf64dfe17c8b87f012fcf50fbda1d62bfa148366a']

// token where amounts should contribute to tracked volume and liquidity
export const WHITELIST: string[] = [
  '0x82af49447d8a07e3bd95bd0d56f35241523fbab1', // WETH
  '0xaf88d065e77c8cc2239327c5edb3a432268e5831', // USDC
]

export const STABLECOINS = [
  '0xaf88d065e77c8cc2239327c5edb3a432268e5831', // USDC
]

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('10000')

// minimum liquidity for price to get tracked
export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('1')

export class TokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt
}

export const STATIC_TOKEN_DEFINITIONS: TokenDefinition[] = []

export const SKIP_TOTAL_SUPPLY: string[] = []
