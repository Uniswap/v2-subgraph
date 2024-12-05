import { BigDecimal } from '@graphprotocol/graph-ts'
import { log } from '@graphprotocol/graph-ts'

import { Burn as BurnEntity, Mint as MintEntity, Pair, Token } from '../types/schema'
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
  log.info('Swap event received for pair {}.', [event.address.toHex()])
}

export function handleSync(event: Sync): void {
  log.info('Sync event received for pair {}.', [event.address.toHex()])
}
