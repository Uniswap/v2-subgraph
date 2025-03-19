import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

export const FACTORY_ADDRESS = '0x9e5A52f57b3038F1B8EeE45F28b3C1967e22799C'

export const REFERENCE_TOKEN = '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7'
export const STABLE_TOKEN_PAIRS = ['0x6239ae4d661379b71a90c4c79f0a95297342e391']

// token where amounts should contribute to tracked volume and liquidity
export const WHITELIST: string[] = [
  '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7', // WAVAX
  '0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e', // USDC
]

export const STABLECOINS = [
  '0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e', // USDC
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
