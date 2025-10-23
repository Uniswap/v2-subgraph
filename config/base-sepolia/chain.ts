import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

export const FACTORY_ADDRESS = '0x7Ae58f10f7849cA6F5fB71b7f45CB416c9204b1e' // Uniswap V2 Factory on Base Sepolia

// Using Base Sepolia WETH address
export const REFERENCE_TOKEN = '0x4200000000000000000000000000000000000006' // WETH on Base Sepolia

// These would need to be updated with actual Base Sepolia pairs if available
export const STABLE_TOKEN_PAIRS: string[] = []

// token where amounts should contribute to tracked volume and liquidity
// These are common tokens on Base Sepolia with verified addresses
export const WHITELIST: string[] = [
  '0x4200000000000000000000000000000000000006', // WETH on Base Sepolia
  '0xae7bd344982bd507d3dcaa828706d558cf281f13', // DAI on Base Sepolia
  '0x081827b8c3aa05287b5aa2bc3051fbe638f33152', // USDC on Base Sepolia
]

export const STABLECOINS: string[] = []

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

// Token definitions that should be hardcoded
export const STATIC_TOKEN_DEFINITIONS: TokenDefinition[] = []

// Tokens that don't work with some ERC20 calls
export const SKIP_TOTAL_SUPPLY: string[] = []
