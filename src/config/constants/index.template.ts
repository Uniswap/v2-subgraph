import { BigDecimal } from '@graphprotocol/graph-ts'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const ADDRESS_LOCK = '0xffffffffffffffffffffffffffffffffffffffff'

export const DMM_DYNAMIC_FEE_FACTORY_ADDRESS = '{{ dmm_dynamic_fee_factory.address }}'
export const DMM_STATIC_FEE_FACTORY_ADDRESS = '{{ dmm_static_fee_factory.address }}'
export const DMM_STATIC_FEE_FACTORY_LEGACY_ADDRESS = '{{ dmm_static_fee_factory_legacy.address }}'

export const ETH_PRICING_POOLS = '{{ eth_pricing_pools }}'

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export let MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('{{ minimum_usd_threshold_new_pairs }}')

// minimum liquidity for price to get tracked
export let MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('{{ minimum_liquidity_threshold_eth }}') // default is 2

export const WRAPPED_NATIVE_ADDRESS = '{{ wrapped_native_address }}'

export const KNC_ADDRESS = '{{ knc_address }}'
export const KNC_NAME = 'Kyber Network'
export const KNC_SYMBOL = 'KNC'

export const KNCL_ADDRESS = '{{ kncl_address }}'
export const KNCL_NAME = 'Kyber Network Legacy'
export const KNCL_SYMBOL = 'KNCL'

export let FACTORY_BPS = BigDecimal.fromString('10000')

export let NETWORK = '{{ network }}'

export let WHITELISTED_TOKENS = '{{ whitelistedTokens }}'
