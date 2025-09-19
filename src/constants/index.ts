import { Address, BigInt, BigDecimal } from '@graphprotocol/graph-ts'

export const ZERO_BI = BigInt.fromI32(0)
export const ONE_BI = BigInt.fromI32(1)
export const ZERO_BD = BigDecimal.fromString('0')
export const ONE_BD = BigDecimal.fromString('1')
export const BI_18 = BigInt.fromI32(18)

// rebass tokens, dont count in tracked volume
export const UNTRACKED_PAIRS: string[] = ['']

// token where amounts should contribute to tracked volume and liquidity
export const WHITELIST: string[] = [
  '0x760afe86e5de5fa0ee542fc7b7b713e1c5425701', // WMON
  '0xf817257fed379853cde0fa4f97ab987181b1e5ea', // USDC
]

// HOT FIX: we cant implement try catch for overflow catching so skip total supply parsing on these tokens that overflow
// TODO: find better way to handle overflo
export const SKIP_TOTAL_SUPPLY: string[] = ['']

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('0')

// minimum liquidity for price to get tracked
export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('0')

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
export const USDC_WETH_PAIR = '0x07a6666f0930f194dd1632a2ec7f8097d600365e'

export const WETH_ADDRESS = Address.fromString('0x760AfE86e5de5fa0Ee542fc7B7B713e1c5425701')
export const FACTORY_ADDRESS = Address.fromString('0xBf6FAB27075fAa8eEDdcc5c17079Ea3813f118B5')
