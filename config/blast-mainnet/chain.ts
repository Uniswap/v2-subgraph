import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

export const FACTORY_ADDRESS = '0x5C346464d33F90bABaf70dB6388507CC889C1070'

export const REFERENCE_TOKEN = '0x4300000000000000000000000000000000000004'
export const STABLE_TOKEN_PAIRS = ['0xad06cd451fe4034a6dd515af08e222a3d95b4a1c']

// token where amounts should contribute to tracked volume and liquidity
export const WHITELIST: string[] = [
  '0x4300000000000000000000000000000000000004', // WETH
  '0x4300000000000000000000000000000000000003', // USDB
]

export const STABLECOINS = [
  '0x4300000000000000000000000000000000000003', // USDB
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
