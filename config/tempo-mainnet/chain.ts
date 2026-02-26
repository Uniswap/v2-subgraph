import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

export const FACTORY_ADDRESS = '0xf9ec577a4e45b5278bb7cf60fcbc20c3acaef68f'

const PATHUSD = '0x20C0000000000000000000000000000000000000'.toLowerCase()
const USDT0 = '0x20c00000000000000000000014f22ca97301eb73'.toLowerCase()
const USDCE = '0x20C000000000000000000000b9537d11c60E8b50'.toLowerCase()
const PATH_USD_USDC= "0xa9c9f6912ef077000356340421b5c9d1d094123e".toLowerCase()
const EURC = '0x20c0000000000000000000001621e21F71CF12fb'.toLowerCase()

export const REFERENCE_TOKEN = PATHUSD
export const STABLE_TOKEN_PAIRS = [PATH_USD_USDC]

// token where amounts should contribute to tracked volume and liquidity
export const WHITELIST: string[] = [PATHUSD, USDT0, USDCE, EURC]

export const STABLECOINS = [PATHUSD, USDT0, USDCE]

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('40000')

// minimum liquidity for price to get tracked
export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('2000')

export class TokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt
}

export const STATIC_TOKEN_DEFINITIONS: TokenDefinition[] = []

export const SKIP_TOTAL_SUPPLY: string[] = []
