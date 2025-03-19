import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

export const FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'

export const REFERENCE_TOKEN = '0x4200000000000000000000000000000000000006'
export const STABLE_TOKEN_PAIRS = ['0x5a5189307eae50b0ef16eff3812b798091a4dd52']

// token where amounts should contribute to tracked volume and liquidity
export const WHITELIST: string[] = [
  '0x4200000000000000000000000000000000000006', // WETH
  '0x79a02482a880bce3f13e09da970dc34db4cd24d1', // USDCE
  '0x03c7054bcb39f7b2e5b2c7acb37583e32d70cfa3', // WBTC
  '0x2cfc85d8e48f8eab294be644d9e25c3030863003', // WLD
  '0x859dbe24b90c9f2f7742083d3cf59ca41f55be5d', // SDAI
]

export const STABLECOINS = [
  '0x79a02482a880bce3f13e09da970dc34db4cd24d1', // USDCE
]

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('40000')

// minimum liquidity for price to get tracked
export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('2')

export class TokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt
}

export const STATIC_TOKEN_DEFINITIONS: TokenDefinition[] = []

export const SKIP_TOTAL_SUPPLY: string[] = []
