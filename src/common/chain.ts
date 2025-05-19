import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

export const FACTORY_ADDRESS = '0x980f0378dd43098F32fbA290B60706488AC1eB88'

export const REFERENCE_TOKEN = '0x9468Ae2682136c22DdBA3c7c5A836B1BD56bb8dd'
export const STABLE_TOKEN_PAIRS = [
  '0x93cb0b78DBd882B82F007E3c26cbf654a1178DE6',
]

// token where amounts should contribute to tracked volume and liquidity
export const WHITELIST: string[] = [
  '0x9468Ae2682136c22DdBA3c7c5A836B1BD56bb8dd', // WMON
  '0xff1ED545FA636F6dcEc7543B48cf0ea1642Fa7C4', // WBTC
  '0xccd1E5682cc1F33249Ca6d09E32bcBC5A4C83c60', // USDC
]

export const STABLECOINS = [
  '0xccd1E5682cc1F33249Ca6d09E32bcBC5A4C83c60'
]

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('400000')

// minimum liquidity for price to get tracked
export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('2')

export class TokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt
}

export const STATIC_TOKEN_DEFINITIONS: TokenDefinition[] = [
]

export const SKIP_TOTAL_SUPPLY: string[] = []
