import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

export const FACTORY_ADDRESS = '0x1f98400000000000000000000000000000000002'

export const REFERENCE_TOKEN = '0x4200000000000000000000000000000000000006'
export const STABLE_TOKEN_PAIRS = ['0x8cbf356ecf5ae7035583543479996250178527f4']

// token where amounts should contribute to tracked volume and liquidity
export const WHITELIST: string[] = [
  '0x20cab320a855b39f724131c69424240519573f81', // dai
  '0x4200000000000000000000000000000000000006', // weth
  '0x8f187aa05619a017077f5308904739877ce9ea21', // uniswa
]

export const STABLECOINS = [
  '0x20cab320a855b39f724131c69424240519573f81', // dai
  '0x078d782b760474a361dda0af3839290b0ef57ad6', // usd
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
