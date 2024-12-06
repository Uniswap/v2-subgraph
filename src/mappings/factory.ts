/* eslint-disable prefer-const */
import { log } from '@graphprotocol/graph-ts'

import { PairCreated } from '../types/Factory/Factory'
import { Pair, Token, UniswapFactory } from '../types/schema'
import { Pair as PairTemplate } from '../types/templates'
import { FACTORY_ADDRESS, fetchTokenDecimals, ONE_BI, ZERO_BD } from './helpers'

export function handleNewPair(event: PairCreated): void {
  if (event.params.param3.equals(ONE_BI)) {
    const factory = new UniswapFactory(FACTORY_ADDRESS)
    factory.save()
  }

  if (Token.load(event.params.token0.toHexString()) === null) {
    const decimals = fetchTokenDecimals(event.params.token0)
    if (decimals === null) {
      log.warning('Could not fetch decimals for token {}, skipping creation of pair {}.', [
        event.params.token0.toHexString(),
        event.params.pair.toHexString(),
      ])
      return
    }

    const token0 = new Token(event.params.token0.toHexString())
    token0.decimals = decimals
    token0.totalLiquidity = ZERO_BD
    token0.save()
  }

  if (Token.load(event.params.token1.toHexString()) === null) {
    const decimals = fetchTokenDecimals(event.params.token1)
    if (decimals === null) {
      log.warning('Could not fetch decimals for token {}, skipping creation of pair {}.', [
        event.params.token1.toHexString(),
        event.params.pair.toHexString(),
      ])
      return
    }

    const token1 = new Token(event.params.token1.toHexString())
    token1.decimals = decimals
    token1.totalLiquidity = ZERO_BD
    token1.save()
  }

  const pair = new Pair(event.params.pair.toHexString())
  pair.token0 = event.params.token0.toHexString()
  pair.token1 = event.params.token1.toHexString()
  pair.createdAtTimestamp = event.block.timestamp
  pair.createdAtBlockNumber = event.block.number
  pair.reserve0 = ZERO_BD
  pair.reserve1 = ZERO_BD
  pair.save()

  PairTemplate.create(event.params.pair)
}
