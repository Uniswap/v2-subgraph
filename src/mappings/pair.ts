import { BigDecimal } from '@graphprotocol/graph-ts'
import { log } from '@graphprotocol/graph-ts'

import { Burn as BurnEntity, Mint as MintEntity, Pair, Swap as SwapEntity, Token } from '../types/schema'
import { Burn, Mint, Swap, Sync } from '../types/templates/Pair/Pair'
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
}

export function handleSync(event: Sync): void {
  const pair = Pair.load(event.address.toHex())!
  const token0 = Token.load(pair.token0)!
  const token1 = Token.load(pair.token1)!

  const reserve0 = convertTokenToDecimal(event.params.reserve0, token0.decimals)
  const reserve1 = convertTokenToDecimal(event.params.reserve1, token1.decimals)

  const oldReserve0 = pair.reserve0
  const oldReserve1 = pair.reserve1

  pair.reserve0 = reserve0
  pair.reserve1 = reserve1
  pair.save()

  token0.totalLiquidity = token0.totalLiquidity.plus(reserve0.minus(oldReserve0))
  token1.totalLiquidity = token1.totalLiquidity.plus(reserve1.minus(oldReserve1))
  token0.save()
  token1.save()
}
