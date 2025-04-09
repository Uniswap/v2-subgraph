import { ByteArray, Bytes } from '@graphprotocol/graph-ts'

import { PairCreated as PairCreatedEvent } from '../../../generated/Factory/Factory'
import { PairCreated as PairCreatedEntity } from '../../../generated/schema'
import { Pair as PairTemplate } from '../../../generated/templates'

export function handleNewPair(event: PairCreatedEvent): void {
  const transactionHash = event.transaction.hash
  const logIndex = event.logIndex
  const logIndexBytes = Bytes.fromByteArray(ByteArray.fromBigInt(logIndex))
  const pairCreatedId = transactionHash.concat(logIndexBytes)
  const pairCreatedEvent = new PairCreatedEntity(pairCreatedId)
  pairCreatedEvent.transactionHash = transactionHash
  pairCreatedEvent.transactionFrom = event.transaction.from
  pairCreatedEvent.transactionTo = event.transaction.to
  pairCreatedEvent.logAddress = event.address
  pairCreatedEvent.blockNumber = event.block.number
  pairCreatedEvent.logIndex = logIndex
  pairCreatedEvent.timestamp = event.block.timestamp
  pairCreatedEvent.token0 = event.params.token0
  pairCreatedEvent.token1 = event.params.token1
  pairCreatedEvent.pair = event.params.pair
  pairCreatedEvent.pairIndex = event.params.param3
  pairCreatedEvent.save()

  PairTemplate.create(event.params.pair)
}
