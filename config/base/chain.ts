import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

export const FACTORY_ADDRESS = '0x8909Dc15e40173Ff4699343b6eB8132c65e18eC6'

export const REFERENCE_TOKEN = '0x4200000000000000000000000000000000000006'
export const STABLE_TOKEN_PAIRS = ['0x88a43bbdf9d098eec7bceda4e2494615dfd9bb9c']

// token where amounts should contribute to tracked volume and liquidity
export const WHITELIST: string[] = [
  '0x4200000000000000000000000000000000000006', // WETH
  '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913', // USDC
  '0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca', // USDbCC
]

export const STABLECOINS = [
  '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913', // USDC
  '0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca', // USDbC
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
