import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

export const FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'

const WETH = '0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f'.toLowerCase()
const USDC = '0x176211869cA2b568f2A7D4EE941E073a821EE1ff'.toLowerCase()
const MUSD = '0xacA92E438df0B2401fF60dA7E4337B687a2435DA'.toLowerCase()
const USDT = '0xA219439258ca9da29E9Cc4cE5596924745e12B93'.toLowerCase()
const LINEA = '0x1789e0043623282d5dcc7f213d703c6d8bafbb04'.toLowerCase()
const WBTC = '0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4'.toLowerCase()
const REX33 = '0xe4eEB461Ad1e4ef8b8EF71a33694CCD84Af051C4'.toLowerCase()
const WSTETH = '0xB5beDd42000b71FddE22D3eE8a79Bd49A568fC8F'.toLowerCase()
const EZETH = '0x2416092f143378750bb29b79ed961ab195cceea5'.toLowerCase()
const WEETH = '0x1bf74c010e6320bab11e2e5a532b5ac15e0b8aa6'.toLowerCase()
const USDCE = '0x79a02482a880bce3f13e09da970dc34db4cd24d1'.toLowerCase()

const USDC_WETH = '0x85e140a505ac30857fcf7d082b6dac3ee14da396'.toLowerCase()
export const REFERENCE_TOKEN = WETH

export const STABLE_TOKEN_PAIRS = [USDC_WETH]

// token where amounts should contribute to tracked volume and liquidity
export const WHITELIST: string[] = [WETH, USDC, MUSD, USDT, LINEA, WBTC, REX33, WSTETH, EZETH, WEETH, USDCE]

export const STABLECOINS = [USDC, USDT, MUSD, USDCE]

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
