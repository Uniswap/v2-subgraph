import { BigDecimal } from '@graphprotocol/graph-ts'
import { log } from '@graphprotocol/graph-ts'

import { Mint as MintEntity, Pair, Token, UniswapFactory } from '../types/schema'
import { Burn, Mint, Swap, Sync } from '../types/templates/Pair/Pair'
import { convertTokenToDecimal, FACTORY_ADDRESS, ONE_BI } from './helpers'

export function handleMint(event: Mint): void {
  const block = event.block
  const transaction = event.transaction
  const mintId = transaction.hash.toHex() + '#' + event.logIndex.toString()

  const transactionTo = transaction.to

  if (transactionTo === null) {
    log.warning('Could not fetch transaction to address, skipping mint {}.', [mintId])
    return
  }

  const uniswap = UniswapFactory.load(FACTORY_ADDRESS)!
  const pair = Pair.load(event.address.toHex())!
  const token0 = Token.load(pair.token0)!
  const token1 = Token.load(pair.token1)!

  const token0Amount = convertTokenToDecimal(event.params.amount0, token0.decimals)
  const token1Amount = convertTokenToDecimal(event.params.amount1, token1.decimals)

  token0.txCount = token0.txCount.plus(ONE_BI)
  token1.txCount = token1.txCount.plus(ONE_BI)
  pair.txCount = pair.txCount.plus(ONE_BI)
  uniswap.txCount = uniswap.txCount.plus(ONE_BI)

  token0.save()
  token1.save()
  pair.save()
  uniswap.save()

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
  log.info('Burn event received for pair {}.', [event.address.toHex()])
}

export function handleSwap(event: Swap): void {
  log.info('Swap event received for pair {}.', [event.address.toHex()])
}

export function handleSync(event: Sync): void {
  log.info('Sync event received for pair {}.', [event.address.toHex()])
}
