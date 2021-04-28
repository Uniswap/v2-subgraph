/* eslint-disable prefer-const */
import { log, BigDecimal, BigInt, Address, EthereumEvent } from '@graphprotocol/graph-ts'
import { ERC20 } from '../types/DmmFactory/ERC20'
import { ERC20SymbolBytes } from '../types/DmmFactory/ERC20SymbolBytes'
import { ERC20NameBytes } from '../types/DmmFactory/ERC20NameBytes'
import { LiquidityPosition, User, Pair, Pool, LiquidityPositionSnapshot, Bundle, Token } from '../types/schema'
import { Factory as FactoryContract } from '../types/templates/Pool/Factory'
import { KNC_ADDRESS, KNC_NAME, KNC_SYMBOL, KNCL_ADDRESS, KNCL_NAME, KNCL_SYMBOL } from '../config/constants'

// this need to configure to read from environment variable
export let FACTORY_ADDRESS = '0x833e4083b7ae46cea85695c4f7ed25cdad8886de'
export let ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
export const ADDRESS_LOCK = '0xffffffffffffffffffffffffffffffffffffffff'

export let factoryContract = FactoryContract.bind(Address.fromString(FACTORY_ADDRESS))

export let ZERO_BD = BigDecimal.fromString('0')
export let ONE_BD = BigDecimal.fromString('1')
export let MINUS_BD = BigDecimal.fromString('-1')
export let ZERO_BI = BigInt.fromI32(0)
export let ONE_BI = BigInt.fromI32(1)
export let BI_18 = BigInt.fromI32(18)
export let BD_10000 = BigDecimal.fromString('10000')
export let BD_100 = BigDecimal.fromString('100')
export let BD_90 = BigDecimal.fromString('90')
export let BD_10 = BigDecimal.fromString('10')

export function isNullEthValue(value: string): boolean {
  return value == '0x0000000000000000000000000000000000000000000000000000000000000001'
}

export function fetchTokenSymbol(tokenAddress: Address): string {
  // hard coded overrides
  if (tokenAddress.toHexString() == '0xe0b7927c4af23765cb51314a0e0521a9645f0e2a') {
    return 'DGD'
  }
  if (tokenAddress.toHexString() == '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9') {
    return 'AAVE'
  }

  if (tokenAddress.toHexString() == KNC_ADDRESS) {
    return KNC_SYMBOL
  }

  if (tokenAddress.toHexString() == KNCL_ADDRESS) {
    return KNCL_SYMBOL
  }

  let contract = ERC20.bind(tokenAddress)
  let contractSymbolBytes = ERC20SymbolBytes.bind(tokenAddress)

  // try types string and bytes32 for symbol
  let symbolValue = 'unknown'
  let symbolResult = contract.try_symbol()
  if (symbolResult.reverted) {
    let symbolResultBytes = contractSymbolBytes.try_symbol()
    if (!symbolResultBytes.reverted) {
      // for broken pairs that have no symbol function exposed
      if (!isNullEthValue(symbolResultBytes.value.toHexString())) {
        symbolValue = symbolResultBytes.value.toString()
      }
    }
  } else {
    symbolValue = symbolResult.value
  }

  return symbolValue
}

export function fetchTokenName(tokenAddress: Address): string {
  // hard coded overrides
  if (tokenAddress.toHexString() == '0xe0b7927c4af23765cb51314a0e0521a9645f0e2a') {
    return 'DGD'
  }
  if (tokenAddress.toHexString() == '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9') {
    return 'Aave Token'
  }

  if (tokenAddress.toHexString() == KNC_ADDRESS) {
    return KNC_NAME
  }

  if (tokenAddress.toHexString() == KNCL_ADDRESS) {
    return KNCL_NAME
  }

  let contract = ERC20.bind(tokenAddress)
  let contractNameBytes = ERC20NameBytes.bind(tokenAddress)

  // try types string and bytes32 for name
  let nameValue = 'unknown'
  let nameResult = contract.try_name()
  if (nameResult.reverted) {
    let nameResultBytes = contractNameBytes.try_name()
    if (!nameResultBytes.reverted) {
      // for broken exchanges that have no name function exposed
      if (!isNullEthValue(nameResultBytes.value.toHexString())) {
        nameValue = nameResultBytes.value.toString()
      }
    }
  } else {
    nameValue = nameResult.value
  }

  return nameValue
}

export function fetchTokenTotalSupply(tokenAddress: Address): BigInt {
  let contract = ERC20.bind(tokenAddress)
  let totalSupplyValue = null
  let totalSupplyResult = contract.try_totalSupply()
  if (!totalSupplyResult.reverted) {
    totalSupplyValue = totalSupplyResult as i32
  }
  log.debug('totalSupply', [tokenAddress.toHexString(), totalSupplyValue.toString()])
  return BigInt.fromI32(totalSupplyValue as i32)
}

export function fetchTokenDecimals(tokenAddress: Address): BigInt {
  // hardcode overrides
  if (tokenAddress.toHexString() == '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9') {
    return BigInt.fromI32(18)
  }

  let contract = ERC20.bind(tokenAddress)
  // try types uint8 for decimals
  let decimalValue = null
  let decimalResult = contract.try_decimals()
  if (!decimalResult.reverted) {
    decimalValue = decimalResult.value
  }
  return BigInt.fromI32(decimalValue as i32)
}

export function createUser(address: Address): void {
  let user = User.load(address.toHexString())
  if (user === null) {
    user = new User(address.toHexString())
    user.usdSwapped = ZERO_BD
    user.save()
  }
}

export function exponentToBigDecimal(decimals: BigInt): BigDecimal {
  let bd = BigDecimal.fromString('1')
  for (let i = ZERO_BI; i.lt(decimals as BigInt); i = i.plus(ONE_BI)) {
    bd = bd.times(BigDecimal.fromString('10'))
  }
  return bd
}

export function convertTokenToDecimal(tokenAmount: BigInt, exchangeDecimals: BigInt): BigDecimal {
  if (exchangeDecimals == ZERO_BI) {
    return tokenAmount.toBigDecimal()
  }
  return tokenAmount.toBigDecimal().div(exponentToBigDecimal(exchangeDecimals))
}

export function createLiquidityPosition(poolAddress: Address, pair: string, user: Address): LiquidityPosition {
  let id = poolAddress
    .toHexString()
    .concat('-')
    .concat(user.toHexString())
  let liquidityTokenBalance = LiquidityPosition.load(id)
  if (liquidityTokenBalance === null) {
    let pool = Pool.load(poolAddress.toHexString())
    pool.liquidityProviderCount = pool.liquidityProviderCount.plus(ONE_BI)
    liquidityTokenBalance = new LiquidityPosition(id)
    liquidityTokenBalance.liquidityTokenBalance = ZERO_BD
    liquidityTokenBalance.pair = pair
    liquidityTokenBalance.pool = pool.id
    liquidityTokenBalance.user = user.toHexString()
    liquidityTokenBalance.save()
  }
  if (liquidityTokenBalance === null) log.error('LiquidityTokenBalance is null', [id])
  return liquidityTokenBalance as LiquidityPosition
}

export function createLiquiditySnapshot(position: LiquidityPosition, event: EthereumEvent): void {
  let timestamp = event.block.timestamp.toI32()
  let bundle = Bundle.load('1')
  let pool = Pool.load(position.pool)
  // let pair = Pair.load(position.pair)
  let token0 = Token.load(pool.token0)
  let token1 = Token.load(pool.token1)

  // create new snapshot
  let snapshot = new LiquidityPositionSnapshot(position.id.concat(timestamp.toString()))
  snapshot.liquidityPosition = position.id
  snapshot.timestamp = timestamp
  snapshot.block = event.block.number.toI32()
  snapshot.user = position.user
  snapshot.pair = position.pair
  snapshot.pool = position.pool
  snapshot.token0PriceUSD = token0.derivedETH.times(bundle.ethPrice)
  snapshot.token1PriceUSD = token1.derivedETH.times(bundle.ethPrice)
  snapshot.reserve0 = pool.reserve0
  snapshot.reserve1 = pool.reserve1
  snapshot.reserveUSD = pool.reserveUSD
  snapshot.liquidityTokenTotalSupply = pool.totalSupply
  snapshot.liquidityTokenBalance = position.liquidityTokenBalance
  snapshot.liquidityPosition = position.id
  snapshot.save()
  position.save()
}
