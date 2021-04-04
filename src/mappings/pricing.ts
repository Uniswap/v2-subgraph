/* eslint-disable prefer-const */
import { Pair, Token, Bundle, Pool } from '../types/schema'
import { BigDecimal, Address, BigInt, log } from '@graphprotocol/graph-ts'
import { ZERO_BD, factoryContract, ADDRESS_ZERO, ONE_BD, BD_10000, BD_100, BD_90, BD_10 } from './utils'

const WETH_ADDRESS = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
const USDC_WETH_POOL = '0x23c0e614f660aeef5daf87de483931d145b7f5b8' // created 9225802
const DAI_WETH_POOL = '0xda2d12bcc6343f84b627d18fb240ba73141b048a' // created block 9225783
const USDT_WETH_POOL = '0x9744bdde8dd5c6441f797ec9e04fb337ff41d8d9' // created block 9225800

export function getPairReserve(pair: Pair | null, isToken0: boolean): BigDecimal {
  let totalReserve = ZERO_BD

  let arrayPoolAddresses = factoryContract.getPools(Address.fromString(pair.token0), Address.fromString(pair.token1))

  for (let i = 0; i < arrayPoolAddresses.length; ++i) {
    let poolAddr = arrayPoolAddresses[i]
    let pool = Pool.load(poolAddr.toHexString())
    if (pool !== null) {
      if (isToken0) {
        totalReserve = totalReserve.plus(pool.reserve0)
      } else {
        totalReserve = totalReserve.plus(pool.reserve1)
      }
    }
  }
  return totalReserve
}

export function getEthPriceInUSD(): BigDecimal {
  // fetch eth prices for each stablecoin
  let daiPool = Pool.load(DAI_WETH_POOL) // dai is token0
  let usdcPool = Pool.load(USDC_WETH_POOL) // usdc is token0
  let usdtPool = Pool.load(USDT_WETH_POOL) // usdt is token1

  // all 3 have been created
  if (daiPool !== null && usdcPool !== null && usdtPool !== null) {
    let totalLiquidityETH = daiPool.vReserve1.plus(usdcPool.vReserve1).plus(usdtPool.vReserve0)
    log.debug('---------------- token have full pair {}', [totalLiquidityETH.toString()])
    let daiWeight = daiPool.vReserve1.div(totalLiquidityETH)
    let usdcWeight = usdcPool.vReserve1.div(totalLiquidityETH)
    let usdtWeight = usdtPool.vReserve0.div(totalLiquidityETH)
    return daiPool.token0Price
      .times(daiWeight)
      .plus(usdcPool.token0Price.times(usdcWeight))
      .plus(usdtPool.token1Price.times(usdtWeight))
    // dai and USDC have been created
  } else if (daiPool !== null && usdcPool !== null) {
    let totalLiquidityETH = daiPool.vReserve1.plus(usdcPool.vReserve1)
    log.debug('---------------- token only has dai and ust pair', [totalLiquidityETH.toString()])
    let daiWeight = daiPool.vReserve1.div(totalLiquidityETH)
    let usdcWeight = usdcPool.vReserve1.div(totalLiquidityETH)
    return daiPool.token0Price.times(daiWeight).plus(usdcPool.token0Price.times(usdcWeight))
    // USDC is the only pair so far
  } else if (usdcPool !== null) {
    log.debug('---------------- token only usdc pair -------------', [])
    return usdcPool.token0Price
  } else {
    log.debug('---------------- token dont have any pair -------------', [])
    return ZERO_BD
  }
}

// token where amounts should contribute to tracked volume and liquidity
let WHITELIST: string[] = [
  '0x5c1cbdc3b8dd2a3456643a62547ef9aa5e1571f3', // WETH
  // '0x85cc44e3b1a035dbdcaeb3aac0e3d2017264c6dc', // DAI
  // '0x342452418bf808bfedcb8ae88a7792852777646e', // USDC
  // '0x2a555b1cb74025c3decccedaa9b469ff7efe60d3', // USDT

  '0xdac17f958d2ee523a2206206994597c13d831ec7', // new USDT
  '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',  // new USDC
  '0x6b175474e89094c44da98b954eedeac495271d0f', // new DAI


  // '0x0000000000085d4780b73119b644ae5ecd22b376', // TUSD
  // '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643', // cDAI
  // '0x39aa39c021dfbae8fac545936693ac917d5e7563', // cUSDC
  // '0x86fadb80d8d2cff3c3680819e4da99c10232ba0f', // EBASE
  // '0x57ab1ec28d129707052df4df418d58a2d46d5f51', // sUSD
  // '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2', // MKR
  // '0xc00e94cb662c3520282e6f5717214004a7f26888', // COMP
  // '0x514910771af9ca656af840dff83e8264ecf986ca', //LINK
  // '0x960b236a07cf122663c4303350609a66a7b288c0', //ANT
  // '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f', //SNX
  // '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e', //YFI
  // '0xdf5e0e81dff6faf3a7e52ba697820c5e32d806a8' // yCurv
]

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
// let MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('400000')

let MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('1')

// minimum liquidity for price to get tracked
let MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('0') // default is 2

/**
 * Search through graph to find derived Eth per token.
 * @todo update to be derived ETH (add stablecoin estimates)
 **/
export function findEthPerToken(token: Token): BigDecimal {
  if (token.id == WETH_ADDRESS) {
    return ONE_BD
  }
  // loop through whitelist and check if paired with any
  for (let i = 0; i < WHITELIST.length; ++i) {
    let arrayPoolAddresses = factoryContract.getPools(Address.fromString(token.id), Address.fromString(WHITELIST[i]))
    if (arrayPoolAddresses) {
      let totalPoolPrice = ZERO_BD
      let totalPoolNum = ZERO_BD
      for (let j = 0; j < arrayPoolAddresses.length; ++j) {
        let pool = Pool.load(arrayPoolAddresses[j].toHexString())

        let percentToken0 = pool.reserve0.div(pool.vReserve0).times(BD_100).div(  pool.reserve0.div(pool.vReserve0).plus(pool.reserve1.div(pool.vReserve1)) )

        if (percentToken0.gt(BD_90) || percentToken0.lt(BD_10)) continue
 
        if (pool.token0 == token.id && pool.reserveETH.gt(MINIMUM_LIQUIDITY_THRESHOLD_ETH)) {
          let token1 = Token.load(pool.token1)
          let tokenPrice = pool.token1Price.times(token1.derivedETH as BigDecimal)
          totalPoolPrice = totalPoolPrice.plus(tokenPrice) // return token1 per our token * Eth per token 1
          totalPoolNum = totalPoolNum.plus(ONE_BD)
        }
        if (pool.token1 == token.id && pool.reserveETH.gt(MINIMUM_LIQUIDITY_THRESHOLD_ETH)) {
          let token0 = Token.load(pool.token0)
          let tokenPrice = pool.token0Price.times(token0.derivedETH as BigDecimal)
          totalPoolPrice = totalPoolPrice.plus(tokenPrice) // return token0 per our token * ETH per token 0
          totalPoolNum = totalPoolNum.plus(ONE_BD)
        }
      }
      if (totalPoolNum.gt(ZERO_BD)) {
        return totalPoolPrice.div(totalPoolNum)
      }
    }
  }
  return ZERO_BD // nothing was found return 0
}

/**
 * Accepts tokens and amounts, return tracked amount based on token whitelist
 * If one token on whitelist, return amount in that token converted to USD.
 * If both are, return average of two amounts
 * If neither is, return 0
 */
export function getTrackedVolumeUSD(
  tokenAmount0: BigDecimal,
  token0: Token,
  tokenAmount1: BigDecimal,
  token1: Token,
  pool: Pool
): BigDecimal {
  let bundle = Bundle.load('1')
  let price0 = token0.derivedETH.times(bundle.ethPrice)
  let price1 = token1.derivedETH.times(bundle.ethPrice)

  log.debug('__________ get tracked volume usd ___________ {} {} {} {} ', [
    token0.id,
    tokenAmount0.toString(),
    token1.id,
    tokenAmount1.toString()
  ])

  // if less than 5 LPs, require high minimum reserve amount amount or return 0
  if (pool.liquidityProviderCount.lt(BigInt.fromI32(5))) {
    let reserve0USD = pool.reserve0.times(price0)
    let reserve1USD = pool.reserve1.times(price1)

    log.debug('!!!!!!!!!!!!! if less than 5 LPs, require high minimum reserve amount amount or return 0 {} {} {}', [
      reserve0USD.toString(),
      reserve1USD.toString(),
      MINIMUM_USD_THRESHOLD_NEW_PAIRS.toString()
    ])
    if (WHITELIST.includes(token0.id) && WHITELIST.includes(token1.id)) {
      if (reserve0USD.plus(reserve1USD).lt(MINIMUM_USD_THRESHOLD_NEW_PAIRS)) {
        return ZERO_BD
      }
    }
    if (WHITELIST.includes(token0.id) && !WHITELIST.includes(token1.id)) {
      if (reserve0USD.times(BigDecimal.fromString('2')).lt(MINIMUM_USD_THRESHOLD_NEW_PAIRS)) {
        return ZERO_BD
      }
    }
    if (!WHITELIST.includes(token0.id) && WHITELIST.includes(token1.id)) {
      if (reserve1USD.times(BigDecimal.fromString('2')).lt(MINIMUM_USD_THRESHOLD_NEW_PAIRS)) {
        return ZERO_BD
      }
    }
  }

  log.debug('******************* both are whitelist tokens, take average of both amounts* ', [])

  // both are whitelist tokens, take average of both amounts
  if (WHITELIST.includes(token0.id) && WHITELIST.includes(token1.id)) {
    return tokenAmount0
      .times(price0)
      .plus(tokenAmount1.times(price1))
      .div(BigDecimal.fromString('2'))
  }

  // take full value of the whitelisted token amount
  if (WHITELIST.includes(token0.id) && !WHITELIST.includes(token1.id)) {
    return tokenAmount0.times(price0)
  }

  // take full value of the whitelisted token amount
  if (!WHITELIST.includes(token0.id) && WHITELIST.includes(token1.id)) {
    return tokenAmount1.times(price1)
  }

  // neither token is on white list, tracked volume is 0
  return ZERO_BD
}

/**
 * Accepts tokens and amounts, return tracked amount based on token whitelist
 * If one token on whitelist, return amount in that token converted to USD * 2.
 * If both are, return sum of two amounts
 * If neither is, return 0
 */
export function getTrackedLiquidityUSD(
  tokenAmount0: BigDecimal,
  token0: Token,
  tokenAmount1: BigDecimal,
  token1: Token
): BigDecimal {
  let bundle = Bundle.load('1')
  let price0 = token0.derivedETH.times(bundle.ethPrice)
  let price1 = token1.derivedETH.times(bundle.ethPrice)

  // both are whitelist tokens, take average of both amounts
  if (WHITELIST.includes(token0.id) && WHITELIST.includes(token1.id)) {
    return tokenAmount0.times(price0).plus(tokenAmount1.times(price1))
  }

  // take double value of the whitelisted token amount
  if (WHITELIST.includes(token0.id) && !WHITELIST.includes(token1.id)) {
    return tokenAmount0.times(price0).times(BigDecimal.fromString('2'))
  }

  // take double value of the whitelisted token amount
  if (!WHITELIST.includes(token0.id) && WHITELIST.includes(token1.id)) {
    return tokenAmount1.times(price1).times(BigDecimal.fromString('2'))
  }

  // neither token is on white list, tracked volume is 0
  return ZERO_BD
}
