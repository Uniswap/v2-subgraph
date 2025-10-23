import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

export const FACTORY_ADDRESS = '0xF62c03E08ada871A0bEb309762E260a7a6a880E6' // Uniswap V2 Factory on Sepolia

// Using Sepolia WETH address
export const REFERENCE_TOKEN = '0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14' // WETH on Sepolia

// These would need to be updated with actual Sepolia pairs if available
export const STABLE_TOKEN_PAIRS: string[] = []

// token where amounts should contribute to tracked volume and liquidity
// These are common tokens on Sepolia with verified addresses
export const WHITELIST: string[] = [
  '0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14', // WETH on Sepolia
  '0x776b6fc2ed15d6bb5fc32e0c89de68683118c62a', // DAI on Sepolia
  '0xf31b086459c2cdac006feedd9080223964a9cddb', // USDC on Sepolia
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