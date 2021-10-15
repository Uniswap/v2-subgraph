import { BigDecimal } from '@graphprotocol/graph-ts'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const ADDRESS_LOCK = '0xffffffffffffffffffffffffffffffffffffffff'

export const FACTORY_ADDRESS = '0x833e4083b7ae46cea85695c4f7ed25cdad8886de'

export const ETH_PRICING_POOLS = '0xd478953d5572f829f457a5052580cbeaee36c1aa|0x20d6b227f4a5a2a13d520329f01bb1f8f9d2d628|0xf8467ef9de03e83b5a778ac858ea5c2d1fc47188|0xce9874c42dce7fffbe5e48b026ff1182733266cb'

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export let MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('4000')

// minimum liquidity for price to get tracked
export let MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('2') // default is 2

export const WETH_ADDRESS = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
export const DAI_ADDRESS = '0x6b175474e89094c44da98b954eedeac495271d0f'
export const USDC_ADDRESS = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
export const USDT_ADDRESS = '0xdac17f958d2ee523a2206206994597c13d831ec7'

export const KNC_ADDRESS = '0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202'
export const KNC_NAME = 'Kyber Network'
export const KNC_SYMBOL = 'KNC'

export const KNCL_ADDRESS = '0xdd974d5c2e2928dea5f71b9825b8b646686bd200'
export const KNCL_NAME = 'Kyber Network Legacy'
export const KNCL_SYMBOL = 'KNCL'

export let FACTORY_BPS = BigDecimal.fromString('10000')
