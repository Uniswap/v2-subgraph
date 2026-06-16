import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

export const FACTORY_ADDRESS = '0xfe57a6ba1951f69ae2ed4abe23e0f095df500c04'

const WETH = '0x4200000000000000000000000000000000000006'.toLowerCase()
const USDCE = '0xF1815bd50389c46847f0Bda824eC8da914045D14'.toLowerCase()
const USDT0 = '0x0200C29006150606B650577BBE7B6248F58470c1'.toLowerCase()
const WETH_USDCE = '0xfa3a9015e5fd82485835e23260bc98adadca8a01'.toLowerCase()

export const REFERENCE_TOKEN = WETH
export const STABLE_TOKEN_PAIRS = [WETH_USDCE]

// token where amounts should contribute to tracked volume and liquidity
export const WHITELIST: string[] = [WETH, USDCE, USDT0]

export const STABLECOINS = [USDCE, USDT0]

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('40000')

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
