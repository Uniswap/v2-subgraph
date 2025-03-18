import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

export const FACTORY_ADDRESS = '0x97febbc2adbd5644ba22736e962564b23f5828ce'

export const REFERENCE_TOKEN = '0x4200000000000000000000000000000000000006'
export const STABLE_TOKEN_PAIRS = ['0x50791d0846438124d630b5095c2a3ce95252a46b']

// token where amounts should contribute to tracked volume and liquidity
export const WHITELIST: string[] = [
  '0x4200000000000000000000000000000000000006', // WETH
  '0xba9986d2381edf1da03b0b9c1f8b00dc4aacc369', // bridged USDC
]

export const STABLECOINS = [
  '0xba9986d2381edf1da03b0b9c1f8b00dc4aacc369', // bridged USDC
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
