import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

export const FACTORY_ADDRESS = '0xbf56488c857a881ae7e3bed27cf99c10a7ab7e50'

const WETH = '0x4200000000000000000000000000000000000006'.toLowerCase()
const USDT0 = '0xb8ce59fc3717ada4c02eadf9682a9e934f625ebb'.toLowerCase()
const USDTm = '0xFAfDdbb3FC7688494971a79cc65DCa3EF82079E7'.toLowerCase()
const MEGA = '0x28B7E77f82B25B95953825F1E3eA0E36c1c29861'.toLowerCase()
const WETH_USDT0 = '0xa674eb32ac4036fd4b28febcae23d3817a5fd04c'.toLowerCase()

export const REFERENCE_TOKEN = WETH
export const STABLE_TOKEN_PAIRS = [WETH_USDT0]

// token where amounts should contribute to tracked volume and liquidity
export const WHITELIST: string[] = [WETH, USDT0, USDTm, MEGA]

export const STABLECOINS = [USDT0, USDTm]

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
