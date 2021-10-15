import { BigDecimal } from '@graphprotocol/graph-ts'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const ADDRESS_LOCK = '0xffffffffffffffffffffffffffffffffffffffff'

export const FACTORY_ADDRESS = '{{ factory_address }}'

export const ETH_PRICING_POOLS = '{{ eth_pricing_pools }}'

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export let MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('{{ minimum_usd_threshold_new_pairs }}')

// minimum liquidity for price to get tracked
export let MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('{{ minimum_liquidity_threshold_eth }}') // default is 2

export const WETH_ADDRESS = '{{ weth_address }}'
export const DAI_ADDRESS = '{{ dai_address }}'
export const USDC_ADDRESS = '{{ usdc_address }}'
export const USDT_ADDRESS = '{{ usdt_address }}'

export const KNC_ADDRESS = '{{ knc_address }}'
export const KNC_NAME = 'Kyber Network'
export const KNC_SYMBOL = 'KNC'

export const KNCL_ADDRESS = '{{ kncl_address }}'
export const KNCL_NAME = 'Kyber Network Legacy'
export const KNCL_SYMBOL = 'KNCL'

export let FACTORY_BPS = BigDecimal.fromString('10000')
