import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

export const FACTORY_ADDRESS = '0x0c3c1c532F1e39EdF36BE9Fe0bE1410313E074Bf'

export const REFERENCE_TOKEN = '0x4200000000000000000000000000000000000006'
export const STABLE_TOKEN_PAIRS = ['0x4c43646304492a925e335f2b6d840c1489f17815']

// token where amounts should contribute to tracked volume and liquidity
export const WHITELIST: string[] = [
  '0x4200000000000000000000000000000000000006', // WETH
  '0x0b2c639c533813f4aa9d7837caf62653d097ff85', // USDC
]

export const STABLECOINS = [
  '0x0b2c639c533813f4aa9d7837caf62653d097ff85', // USDC
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
