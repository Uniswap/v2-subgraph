import { BigDecimal } from '@graphprotocol/graph-ts'
import { log } from '@graphprotocol/graph-ts'

import { Burn as BurnEntity, Mint as MintEntity, Pair, Swap as SwapEntity, Token } from '../types/schema'
import { Burn, Mint, Swap } from '../types/templates/Pair/Pair'
import { convertTokenToDecimal } from './helpers'

export function handleMint(event: Mint): void {
  const block = event.block
  const transaction = event.transaction
  const mintId = transaction.hash.toHex() + '#' + event.logIndex.toString()

  const transactionTo = transaction.to

  if (transactionTo === null) {
    log.warning('Could not fetch transaction to address, skipping mint {}.', [mintId])
    return
  }

  const pair = Pair.load(event.address.toHex())!
  const token0 = Token.load(pair.token0)!
  const token1 = Token.load(pair.token1)!

  const token0Amount = convertTokenToDecimal(event.params.amount0, token0.decimals)
  const token1Amount = convertTokenToDecimal(event.params.amount1, token1.decimals)

  const mint = new MintEntity(mintId)
  mint.timestamp = block.timestamp
  mint.blockNumber = block.number
  mint.to = transactionTo
  mint.pair = pair.id
  mint.token0 = token0.id
  mint.token1 = token1.id
  mint.sender = event.params.sender
  mint.amount0 = token0Amount as BigDecimal
  mint.amount1 = token1Amount as BigDecimal
  mint.save()

  token0.totalLiquidity = token0.totalLiquidity.plus(token0Amount)
  token1.totalLiquidity = token1.totalLiquidity.plus(token1Amount)
  token0.save()
  token1.save()
}

export function handleBurn(event: Burn): void {
  const block = event.block
  const transaction = event.transaction
  const burnId = transaction.hash.toHex() + '#' + event.logIndex.toString()

  const pair = Pair.load(event.address.toHex())!
  const token0 = Token.load(pair.token0)!
  const token1 = Token.load(pair.token1)!

  const token0Amount = convertTokenToDecimal(event.params.amount0, token0.decimals)
  const token1Amount = convertTokenToDecimal(event.params.amount1, token1.decimals)

  const burn = new BurnEntity(burnId)
  burn.timestamp = block.timestamp
  burn.blockNumber = block.number
  burn.pair = pair.id
  burn.token0 = token0.id
  burn.token1 = token1.id
  burn.sender = event.params.sender
  burn.amount0 = token0Amount as BigDecimal
  burn.amount1 = token1Amount as BigDecimal
  burn.to = event.params.to
  burn.save()

  token0.totalLiquidity = token0.totalLiquidity.minus(token0Amount)
  token1.totalLiquidity = token1.totalLiquidity.minus(token1Amount)
  token0.save()
  token1.save()
}

export function handleSwap(event: Swap): void {
  const block = event.block
  const transaction = event.transaction
  const swapId = transaction.hash.toHex() + '#' + event.logIndex.toString()

  const pair = Pair.load(event.address.toHex())!
  const token0 = Token.load(pair.token0)!
  const token1 = Token.load(pair.token1)!

  const token0AmountIn = convertTokenToDecimal(event.params.amount0In, token0.decimals)
  const token1AmountIn = convertTokenToDecimal(event.params.amount1In, token1.decimals)
  const token0AmountOut = convertTokenToDecimal(event.params.amount0Out, token0.decimals)
  const token1AmountOut = convertTokenToDecimal(event.params.amount1Out, token1.decimals)

  const swap = new SwapEntity(swapId)
  swap.timestamp = block.timestamp
  swap.blockNumber = block.number
  swap.pair = pair.id
  swap.token0 = token0.id
  swap.token1 = token1.id
  swap.sender = event.params.sender
  swap.amount0In = token0AmountIn
  swap.amount1In = token1AmountIn
  swap.amount0Out = token0AmountOut
  swap.amount1Out = token1AmountOut
  swap.to = event.params.to
  swap.save()

  token0.totalLiquidity = token0.totalLiquidity.minus(token0AmountOut).plus(token0AmountIn)
  token1.totalLiquidity = token1.totalLiquidity.minus(token1AmountOut).plus(token1AmountIn)
  token0.save()
  token1.save()
}