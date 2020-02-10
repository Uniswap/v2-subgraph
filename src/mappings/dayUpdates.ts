/* eslint-disable prefer-const */
import { BigInt, BigDecimal, EthereumEvent } from '@graphprotocol/graph-ts'
import { Exchange, Bundle, Token, Uniswap, UniswapDayData, ExchangeDayData, TokenDayData } from '../types/schema'
import { ONE_BI, ZERO_BD, ZERO_BI } from '../helpers'

function updateStoredExchanges(tokenDayData: TokenDayData, exchangeDayID: string): void {
  const exchangeDayData = ExchangeDayData.load(exchangeDayID.toString())
  const newList = tokenDayData.mostLiquidPairs
  let alreadyInList = false
  // check if exchange is already in list, make sure to compare on exchange
  for (let i = 0; i < newList.length; i++) {
    const currentExchangeData = ExchangeDayData.load(newList[i])
    if (currentExchangeData.exchangeAddress.toHexString() == exchangeDayData.exchangeAddress.toHexString()) {
      alreadyInList = true
      newList[i] = exchangeDayData.id
    }
  }
  // set to impossibly high number
  let minTokenLiquidity = new BigDecimal(BigInt.fromI32(I32.MAX_VALUE))
  let minIndex = 0
  if (newList.length < tokenDayData.maxStored && !alreadyInList) {
    newList.push(exchangeDayData.id)
  } else if (!alreadyInList) {
    // loop through stored list and find min token liquidity
    for (let i = 0; i < newList.length; i++) {
      const currentPairs = tokenDayData.mostLiquidPairs as Array<string>
      const id = currentPairs[i]
      const currentExchangeDayData = ExchangeDayData.load(id.toString())
      const globalToken = tokenDayData.token
      const localToken0 = currentExchangeDayData.token0
      // if our token of interest is token0, compare against that
      if (globalToken == localToken0) {
        if (currentExchangeDayData.token0Balance < minTokenLiquidity) {
          minTokenLiquidity = currentExchangeDayData.token0Balance
          minIndex = i
        }
      }
      // our token of interest must be token 1
      else {
        if (currentExchangeDayData.token1Balance < minTokenLiquidity) {
          minTokenLiquidity = currentExchangeDayData.token1Balance
          minIndex = i
        }
      }
    }
    // if current token has more liquidity than min, replace it
    if (tokenDayData.totalLiquidityToken > minTokenLiquidity) {
      newList[minIndex] = exchangeDayData.id
    }
  }
  tokenDayData.mostLiquidPairs = newList
  const token = Token.load(tokenDayData.token)
  token.mostLiquidPairs = newList
  token.save()
  tokenDayData.save()
}

/**
 * Loop through stored token datas and find minimum liquidity in ETH.
 * If new token is higher than min, replace min list at min index.
 */
function updateStoredTokens(tokenDayData: TokenDayData, dayID: i32): void {
  const uniswap = Uniswap.load('1')
  const uniswapDayData = UniswapDayData.load(dayID.toString())
  const newList = uniswapDayData.mostLiquidTokens
  let alreadyInList = false
  // check if token is already in the list
  for (let i = 0; i < newList.length; i++) {
    const currentDayData = TokenDayData.load(newList[i].toString())
    if (currentDayData.token.toString() == tokenDayData.token.toString()) {
      alreadyInList = true
      newList[i] = tokenDayData.id
    }
  }
  let minIndex = 0
  if (newList.length < uniswapDayData.maxStored && !alreadyInList) {
    newList.push(tokenDayData.id)
  } else if (!alreadyInList) {
    let localMinLiquidity = new BigDecimal(BigInt.fromI32(I32.MAX_VALUE))
    // loop through stored list and find min liquidity
    for (let i = 0; i < newList.length; i++) {
      const currentDayData = TokenDayData.load(newList[i].toString())
      if (currentDayData.totalLiquidityETH < localMinLiquidity) {
        localMinLiquidity = currentDayData.totalLiquidityETH
        minIndex = i
      }
    }
    // if current token has more liquidity than min, replace it
    if (tokenDayData.totalLiquidityETH > localMinLiquidity) {
      newList[minIndex] = tokenDayData.id
    }
  }
  uniswapDayData.mostLiquidTokens = newList
  uniswap.mostLiquidTokens = newList
  uniswap.save()
  uniswapDayData.save()
}

const maxTokenDayDatas = 10
const maxExchangeDayDatas = 10

export function updateUniswapDayData(event: EthereumEvent): void {
  const uniswap = Uniswap.load('1')
  const timestamp = event.block.timestamp.toI32()
  const dayID = timestamp / 86400
  const dayStartTimestamp = dayID * 86400
  let uniswapDayData = UniswapDayData.load(dayID.toString())
  if (uniswapDayData == null) {
    const uniswapDayData = new UniswapDayData(dayID.toString())
    uniswapDayData.date = dayStartTimestamp
    uniswapDayData.dailyVolumeUSD = ZERO_BD
    uniswapDayData.dailyVolumeETH = ZERO_BD
    uniswapDayData.totalVolumeUSD = ZERO_BD
    uniswapDayData.totalVolumeETH = ZERO_BD
    uniswapDayData.totalLiquidityUSD = ZERO_BD
    uniswapDayData.totalLiquidityETH = ZERO_BD
    uniswapDayData.maxStored = maxTokenDayDatas
    uniswapDayData.mostLiquidTokens = uniswap.mostLiquidTokens
    uniswapDayData.txCount = ZERO_BI
    uniswapDayData.save()
  }
  uniswapDayData = UniswapDayData.load(dayID.toString())
  uniswapDayData.totalLiquidityUSD = uniswap.totalLiquidityUSD
  uniswapDayData.totalLiquidityETH = uniswap.totalLiquidityETH
  uniswapDayData.txCount = uniswap.txCount
  uniswapDayData.save()
}

export function updateExchangeDayData(event: EthereumEvent): void {
  const bundle = Bundle.load('1')
  const timestamp = event.block.timestamp.toI32()
  const dayID = timestamp / 86400
  const dayStartTimestamp = dayID * 86400
  const dayExchangeID = event.address
    .toHexString()
    .concat('-')
    .concat(BigInt.fromI32(dayID).toString())
  const exchange = Exchange.load(event.address.toHexString())
  let exchangeDayData = ExchangeDayData.load(dayExchangeID)
  if (exchangeDayData == null) {
    const exchangeDayData = new ExchangeDayData(dayExchangeID)
    const exchange = Exchange.load(event.address.toHexString())
    exchangeDayData.date = dayStartTimestamp
    exchangeDayData.token0 = exchange.token0
    exchangeDayData.token1 = exchange.token1
    exchangeDayData.exchangeAddress = event.address
    exchangeDayData.token0Balance = ZERO_BD
    exchangeDayData.token1Balance = ZERO_BD
    exchangeDayData.dailyVolumeToken0 = ZERO_BD
    exchangeDayData.dailyVolumeToken1 = ZERO_BD
    exchangeDayData.dailyVolumeUSD = ZERO_BD
    exchangeDayData.dailyTxns = ZERO_BI
    exchangeDayData.combinedBalanceETH = ZERO_BD
    exchangeDayData.combinedBalanceUSD = ZERO_BD
    exchangeDayData.save()
  }
  exchangeDayData = ExchangeDayData.load(dayExchangeID)
  exchangeDayData.token0Balance = exchange.token0Balance
  exchangeDayData.token1Balance = exchange.token1Balance
  exchangeDayData.combinedBalanceETH = exchange.combinedBalanceETH
  exchangeDayData.combinedBalanceUSD = exchange.combinedBalanceETH.times(bundle.ethPrice)
  exchangeDayData.dailyTxns = exchangeDayData.dailyTxns.plus(ONE_BI)
  exchangeDayData.save()
}

export function updateTokenDayData(token: Token, event: EthereumEvent): void {
  const bundle = Bundle.load('1')
  const timestamp = event.block.timestamp.toI32()
  const dayID = timestamp / 86400
  const dayStartTimestamp = dayID * 86400
  const tokenDayID = token.id
    .toString()
    .concat('-')
    .concat(BigInt.fromI32(dayID).toString())
  const dayExchangeID = event.address
    .toHexString()
    .concat('-')
    .concat(BigInt.fromI32(dayID).toString())

  let tokenDayData = TokenDayData.load(tokenDayID)
  if (tokenDayData == null) {
    const tokenDayData = new TokenDayData(tokenDayID)
    tokenDayData.date = dayStartTimestamp
    tokenDayData.token = token.id
    tokenDayData.dailyVolumeToken = ZERO_BD
    tokenDayData.dailyVolumeETH = ZERO_BD
    tokenDayData.dailyVolumeUSD = ZERO_BD
    tokenDayData.dailyTxns = ZERO_BI
    tokenDayData.totalLiquidityToken = ZERO_BD
    tokenDayData.totalLiquidityETH = ZERO_BD
    tokenDayData.totalLiquidityUSD = ZERO_BD
    tokenDayData.maxStored = maxExchangeDayDatas
    tokenDayData.mostLiquidPairs = token.mostLiquidPairs
    tokenDayData.save()
  }
  tokenDayData = TokenDayData.load(tokenDayID)
  tokenDayData.totalLiquidityToken = token.totalLiquidityToken
  tokenDayData.totalLiquidityETH = token.totalLiquidityETH
  tokenDayData.totalLiquidityUSD = token.totalLiquidityETH.times(bundle.ethPrice)
  tokenDayData.dailyTxns = tokenDayData.dailyTxns.plus(ONE_BI)
  tokenDayData.save()
  updateStoredTokens(tokenDayData as TokenDayData, dayID)
  updateStoredExchanges(tokenDayData as TokenDayData, dayExchangeID)
}
