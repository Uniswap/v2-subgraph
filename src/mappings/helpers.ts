/* eslint-disable prefer-const */
import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

import { ERC20 } from '../types/Factory/ERC20'

export const FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'

export const ZERO_BD = BigDecimal.fromString('0')
export const ZERO_BI = BigInt.fromI32(0)
export const ONE_BD = BigDecimal.fromString('1')
export const ONE_BI = BigInt.fromI32(1)

export function fetchTokenDecimals(tokenAddress: Address): BigInt | null {
  let contract = ERC20.bind(tokenAddress)
  let decimalResult = contract.try_decimals()
  if (!decimalResult.reverted) {
    if (decimalResult.value.lt(BigInt.fromI32(255))) {
      return decimalResult.value
    }
  }
  return null
}

export function exponentToBigDecimal(decimals: BigInt): BigDecimal {
  const zeros = '0'.repeat(decimals.toI32())
  const bigDecimalString = `1${zeros}`
  return BigDecimal.fromString(bigDecimalString)
}

export function convertTokenToDecimal(tokenAmount: BigInt, exchangeDecimals: BigInt): BigDecimal {
  if (exchangeDecimals == ZERO_BI) {
    return tokenAmount.toBigDecimal()
  }
  return tokenAmount.toBigDecimal().div(exponentToBigDecimal(exchangeDecimals))
}
