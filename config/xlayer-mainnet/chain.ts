import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

export const FACTORY_ADDRESS = '0xdf38f24fe153761634be942f9d859f3dba857e95'

const WOKB = '0xe538905cf8410324e03A5A23C1c177a474D59b2b'.toLowerCase()
const WETH = '0x5A77f1443D16ee5761d310e38b62f77f726bC71c'.toLowerCase()
const USDT = '0x1E4a5963aBFD975d8c9021ce480b42188849D41d'.toLowerCase()
const USDT0 = '0x779Ded0c9e1022225f8E0630b35a9b54bE713736'.toLowerCase()
const USDC = '0x74b7F16337b8972027F6196A17a631aC6dE26d22'.toLowerCase()
const USDCe = '0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035'.toLowerCase()
const WBTC = '0xEA034fb02eB1808C2cc3adbC15f447B93CbE08e1'.toLowerCase()
const DAI = '0xC5015b9d9161Dca7e18e32f6f25C4aD850731Fd4'.toLowerCase()
const WOKB_USDC = '0x50974759D958dbaC777Fb9D32A68b6AEBCEE2Ee2'.toLowerCase()

export const REFERENCE_TOKEN = WOKB
export const STABLE_TOKEN_PAIRS = [WOKB_USDC]

// token where amounts should contribute to tracked volume and liquidity
export const WHITELIST: string[] = [WOKB, WETH, USDT, USDT0, USDC, USDCe, WBTC, DAI]

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
