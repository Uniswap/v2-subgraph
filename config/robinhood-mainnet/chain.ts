import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

export const FACTORY_ADDRESS = '0x8bceaa40b9acdfaedf85adf4ff01f5ad6517937f'

// Robinhood chain (chainId 4663). Standard ETH-native config: the reference token is WETH, priced
// via the WETH/USDG pair. USDG ("Global Dollar", 6 dec) is the USD stablecoin.
// STABLE_TOKEN_PAIRS is empty until the WETH/USDG v2 pair is created + seeded; until then
// getEthPriceInUSD() returns 0 (USD metrics read 0; indexing still works). This is NOT the Arc
// sentinel (which puts REFERENCE_TOKEN in STABLE_TOKEN_PAIRS to force a price of 1) — WETH is volatile.
const WETH = '0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73'.toLowerCase()
const USDG = '0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168'.toLowerCase()

export const REFERENCE_TOKEN = WETH
export const STABLE_TOKEN_PAIRS: string[] = [] // TODO: [WETH_USDG_PAIR] once the v2 pair is seeded

// token where amounts should contribute to tracked volume and liquidity
export const WHITELIST: string[] = [WETH, USDG]

export const STABLECOINS = [USDG]

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
