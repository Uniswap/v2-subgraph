import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

export const FACTORY_ADDRESS = '0x89e5db8b5aa49aa85ac63f691524311aeb649eba'

// Arc (chainId 5042) is Circle's USDC-native L1: the native gas token is USDC and there is no
// wrapped native (the deployment's "WETH9" slot is the UnsupportedProtocol stub), so pairs pair
// against native USDC and USDC is the reference token. Because the reference token IS the dollar,
// getEthPriceInUSD() returns 1 — opted in by including REFERENCE_TOKEN in STABLE_TOKEN_PAIRS.
const USDC = '0x3600000000000000000000000000000000000000'.toLowerCase()
const EURC = '0x89B50855Aa3bE2F677cD6303Cec089B5F319D72a'.toLowerCase()
const USYC = '0xe9185F0c5F296Ed1797AaE4238D26CCaBEadb86C'.toLowerCase()
const CIRBTC = '0x171A4217b86A807A64eB94757Db6849fb4bDbAA0'.toLowerCase() // cirBTC (BTC-pegged) — whitelist only, not a USD stable

export const REFERENCE_TOKEN = USDC
export const STABLE_TOKEN_PAIRS = [REFERENCE_TOKEN]

// token where amounts should contribute to tracked volume and liquidity
export const WHITELIST: string[] = [USDC, EURC, USYC, CIRBTC]

// USD-pegged stablecoins only (EURC is EUR-pegged, USYC is yield-bearing → excluded)
export const STABLECOINS = [USDC]

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
