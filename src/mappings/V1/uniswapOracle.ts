import { Exchange } from '../../types/schema'
import { BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'
import { equalToZero, ZERO_BD } from './helpers'

export function uniswapUSDOracle(blockNum: BigInt): BigDecimal {
  const DAI_EXCHANGE = '0x09cabec1ead1c0ba254b09efb3ee13841712be14'
  const DAI_BLOCK_CONTRACT_CREATION = 6629140

  const USDC_EXCHANGE = '0x97dec872013f6b5fb443861090ad931542878126'
  const USDC_BLOCK_CONTRACT_CREATION = 7207017 // first block after a non-trivial amount of liquidity was added

  const TUSD_EXCHANGE = '0x4f30e682d0541eac91748bd38a648d759261b8f3'
  const TUSD_BLOCK_CONTRACT_CREATION = 7285332

  let oneUSDInEth: BigDecimal
  const blockNumInt = blockNum.toI32()

  if (blockNumInt > TUSD_BLOCK_CONTRACT_CREATION) {
    const daiExchange = Exchange.load(DAI_EXCHANGE)
    const daiPrice = daiExchange.price

    const usdcExchange = Exchange.load(USDC_EXCHANGE)
    const usdcPrice = usdcExchange.price

    const tusdExchange = Exchange.load(TUSD_EXCHANGE)
    const tusdPrice = tusdExchange.price

    const averagePrice = daiPrice
      .plus(usdcPrice)
      .plus(tusdPrice)
      .div(BigDecimal.fromString('3'))
    if (!equalToZero(averagePrice)) {
      oneUSDInEth = BigDecimal.fromString('1').div(averagePrice)
    } else {
      oneUSDInEth = ZERO_BD
    }
    return oneUSDInEth
  } else if (blockNumInt > USDC_BLOCK_CONTRACT_CREATION) {
    const daiExchange = Exchange.load(DAI_EXCHANGE)
    const daiPrice = daiExchange.price

    const usdcExchange = Exchange.load(USDC_EXCHANGE)
    const usdcPrice = usdcExchange.price

    const averagePrice = daiPrice.plus(usdcPrice).div(BigDecimal.fromString('2'))
    if (!equalToZero(averagePrice)) {
      oneUSDInEth = BigDecimal.fromString('1').div(averagePrice)
    } else {
      oneUSDInEth = ZERO_BD
    }
    return oneUSDInEth
  } else if (blockNumInt >= DAI_BLOCK_CONTRACT_CREATION) {
    const daiExchange = Exchange.load(DAI_EXCHANGE)
    const daiPrice = daiExchange.price

    if (!equalToZero(daiPrice)) {
      oneUSDInEth = BigDecimal.fromString('1').div(daiPrice)
    } else {
      oneUSDInEth = ZERO_BD
    }
    return oneUSDInEth
  } else {
    // probably only for a few events, before the dai exchange was made
    oneUSDInEth = BigDecimal.fromString('0')
    return oneUSDInEth
  }
}
