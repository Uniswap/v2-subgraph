import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

export const FACTORY_ADDRESS = '0x9b7f6a5c2ea87ed485bc8eb92a21aab84b077453'

const WETH = '0x4200000000000000000000000000000000000006'.toLowerCase()
const MEGABOND = '0x28B7E77f82B25B95953825F1E3eA0E36c1c29861'.toLowerCase()

export const REFERENCE_TOKEN = WOKB
export const STABLE_TOKEN_PAIRS = [WOKB_USDC]

// token where amounts should contribute to tracked volume and liquidity
export const WHITELIST: string[] = []

export const STABLECOINS = [USDC, DAI, USDT]

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('40000')

// minimum liquidity for price to get tracked
export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('25')

export class TokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt
}

export const STATIC_TOKEN_DEFINITIONS: TokenDefinition[] = []

export const SKIP_TOTAL_SUPPLY: string[] = []
