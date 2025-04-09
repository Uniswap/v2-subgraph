import { Mint as MintEvent, Burn as BurnEvent, Swap as SwapEvent, Sync as SyncEvent, Transfer as TransferEvent } from "../../../generated/templates/Pair/Pair";
import { Mint as MintEntity, Burn as BurnEntity, Swap as SwapEntity, Sync as SyncEntity, Transfer as TransferEntity } from "../../../generated/schema";
import { ByteArray, Bytes } from "@graphprotocol/graph-ts";

export function handleMint(event: MintEvent): void {
    const transactionHash = event.transaction.hash
    const logIndex = event.logIndex
    const logIndexBytes = Bytes.fromByteArray(ByteArray.fromBigInt(logIndex))
    const mintId = transactionHash.concat(logIndexBytes)
    const mintEvent = new MintEntity(mintId)
    mintEvent.transactionHash = transactionHash
    mintEvent.transactionFrom = event.transaction.from
    mintEvent.transactionTo = event.transaction.to
    mintEvent.logAddress = event.address
    mintEvent.logIndex = logIndex
    mintEvent.blockNumber = event.block.number
    mintEvent.timestamp = event.block.timestamp
    mintEvent.sender = event.params.sender
    mintEvent.amount0 = event.params.amount0
    mintEvent.amount1 = event.params.amount1
    mintEvent.save()
}

export function handleBurn(event: BurnEvent): void {
    const transactionHash = event.transaction.hash
    const logIndex = event.logIndex
    const logIndexBytes = Bytes.fromByteArray(ByteArray.fromBigInt(logIndex))
    const burnId = transactionHash.concat(logIndexBytes)
    const burnEvent = new BurnEntity(burnId)
    burnEvent.transactionHash = transactionHash
    burnEvent.transactionFrom = event.transaction.from
    burnEvent.transactionTo = event.transaction.to
    burnEvent.logAddress = event.address
    burnEvent.logIndex = logIndex
    burnEvent.blockNumber = event.block.number
    burnEvent.timestamp = event.block.timestamp
    burnEvent.sender = event.params.sender
    burnEvent.amount0 = event.params.amount0
    burnEvent.amount1 = event.params.amount1
    burnEvent.to = event.params.to
    burnEvent.save()
}

export function handleSwap(event: SwapEvent): void {
    const transactionHash = event.transaction.hash
    const logIndex = event.logIndex
    const logIndexBytes = Bytes.fromByteArray(ByteArray.fromBigInt(logIndex))
    const swapId = transactionHash.concat(logIndexBytes)
    const swapEvent = new SwapEntity(swapId)
    swapEvent.transactionHash = transactionHash
    swapEvent.transactionFrom = event.transaction.from
    swapEvent.transactionTo = event.transaction.to
    swapEvent.logAddress = event.address
    swapEvent.logIndex = logIndex
    swapEvent.blockNumber = event.block.number
    swapEvent.timestamp = event.block.timestamp
    swapEvent.sender = event.params.sender
    swapEvent.amount0In = event.params.amount0In
    swapEvent.amount1In = event.params.amount1In
    swapEvent.amount0Out = event.params.amount0Out
    swapEvent.amount1Out = event.params.amount1Out
    swapEvent.to = event.params.to
    swapEvent.save()
}

export function handleSync(event: SyncEvent): void {
    const transactionHash = event.transaction.hash
    const logIndex = event.logIndex
    const logIndexBytes = Bytes.fromByteArray(ByteArray.fromBigInt(logIndex))
    const syncId = transactionHash.concat(logIndexBytes)
    const syncEvent = new SyncEntity(syncId)
    syncEvent.transactionHash = transactionHash
    syncEvent.transactionFrom = event.transaction.from
    syncEvent.transactionTo = event.transaction.to
    syncEvent.logAddress = event.address
    syncEvent.logIndex = logIndex
    syncEvent.blockNumber = event.block.number
    syncEvent.timestamp = event.block.timestamp
    syncEvent.reserve0 = event.params.reserve0
    syncEvent.reserve1 = event.params.reserve1
    syncEvent.save()
}

export function handleTransfer(event: TransferEvent): void {
    const transactionHash = event.transaction.hash
    const logIndex = event.logIndex
    const logIndexBytes = Bytes.fromByteArray(ByteArray.fromBigInt(logIndex))
    const transferId = transactionHash.concat(logIndexBytes)
    const transferEvent = new TransferEntity(transferId)
    transferEvent.transactionHash = transactionHash
    transferEvent.transactionFrom = event.transaction.from
    transferEvent.transactionTo = event.transaction.to
    transferEvent.logAddress = event.address
    transferEvent.logIndex = logIndex
    transferEvent.blockNumber = event.block.number
    transferEvent.timestamp = event.block.timestamp
    transferEvent.from = event.params.from
    transferEvent.to = event.params.to
    transferEvent.value = event.params.value
    transferEvent.save()
}