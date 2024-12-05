/* eslint-disable prefer-const */
import { log } from '@graphprotocol/graph-ts'

import { PairCreated } from '../types/Factory/Factory'
import { Pair, Token, UniswapFactory } from '../types/schema'
import { Pair as PairTemplate } from '../types/templates'
import { FACTORY_ADDRESS, fetchTokenDecimals, ZERO_BI } from './helpers'

export function handleNewPair(event: PairCreated): void {
  let factory = UniswapFactory.load(FACTORY_ADDRESS)
  // if it's the first pair, create the factory and the bundle
  if (factory === null) {
    factory = new UniswapFactory(FACTORY_ADDRESS)
    factory.pairCount = 0
    factory.save()
  }
  factory.pairCount += 1
  factory.save()

  const pairAddress = event.params.pair.toHexString()

  const token0Address = event.params.token0.toHexString()
  let token0 = Token.load(token0Address)
  if (token0 === null) {
    token0 = new Token(token0Address)

    const decimals = fetchTokenDecimals(event.params.token0)
    if (decimals === null) {
      log.warning('Could not fetch decimals for token {}, skipping creation of pair {}.', [token0Address, pairAddress])
      return
    }

    token0.decimals = decimals
    token0.save()
  }

  const token1Address = event.params.token1.toHexString()
  let token1 = Token.load(token1Address)
  if (token1 === null) {
    token1 = new Token(token1Address)

    const decimals = fetchTokenDecimals(event.params.token1)
    if (decimals === null) {
      log.warning('Could not fetch decimals for token {}, skipping creation of pair {}.', [token1Address, pairAddress])
      return
    }

    token1.decimals = decimals
    token1.save()
  }

  let pair = new Pair(pairAddress)
  pair.token0 = token0.id
  pair.token1 = token1.id
  pair.createdAtTimestamp = event.block.timestamp
  pair.createdAtBlockNumber = event.block.number
  pair.save()

  PairTemplate.create(event.params.pair)
}
