import { log, BigInt } from '@graphprotocol/graph-ts'
import {
  KyberFairLaunch,
  Deposit as DepositEvent,
  Withdraw as WithdrawEvent,
  Harvest as HarvestEvent
} from '../types/schema'

import { AddNewPool, Deposit, Harvest, Withdraw } from '../types/templates/KyberFairLaunchV2/KyberFairLaunchV2'
import { createOrLoadTransaction } from './utils'

export function handleDeposit(event: Deposit): void {
  log.debug("handleDeposit v2", [])
  let transaction = createOrLoadTransaction(event.transaction.hash, event.block)
  let fairLaunch = KyberFairLaunch.load(event.address.toHex())

  let deposits = transaction.deposits
  let deposit = new DepositEvent(
    event.transaction.hash
      .toHexString()
      .concat('-')
      .concat(BigInt.fromI32(deposits.length).toString())
  )

  deposit.transaction = transaction.id
  deposit.timestamp = event.block.timestamp
  deposit.user = event.params.user
  deposit.amount = event.params.amount
  deposit.poolID = event.params.pid.toI32()
  deposit.fairLaunch = event.address.toHex()
  let stakeTokens = fairLaunch.stakeTokens
  deposit.stakeToken = stakeTokens[deposit.poolID]
  deposit.save()

  transaction.deposits = deposits.concat([deposit.id])
  transaction.save()
}

export function handleWithdraw(event: Withdraw): void {
  log.debug("handleWithdraw v2", [])
  let transaction = createOrLoadTransaction(event.transaction.hash, event.block)
  let fairLaunch = KyberFairLaunch.load(event.address.toHex())

  let withdraws = transaction.withdraws
  let withdraw = new WithdrawEvent(
    event.transaction.hash
      .toHexString()
      .concat('-')
      .concat(BigInt.fromI32(withdraws.length).toString())
  )

  withdraw.transaction = transaction.id
  withdraw.timestamp = event.block.timestamp
  withdraw.user = event.params.user
  withdraw.amount = event.params.amount
  withdraw.poolID = event.params.pid.toI32()
  withdraw.fairLaunch = event.address.toHexString()
  withdraw.fairLaunch = event.address.toHex()
  let stakeTokens = fairLaunch.stakeTokens
  withdraw.stakeToken = stakeTokens[withdraw.poolID]
  withdraw.save()

  transaction.withdraws = withdraws.concat([withdraw.id])
  transaction.save()
}

export function handleAddNewPool(event: AddNewPool): void {
  log.debug("handleAddNewPool v2", [])
  let fairLaunch = KyberFairLaunch.load(event.address.toHex())
  fairLaunch.stakeTokens = fairLaunch.stakeTokens.concat([event.params.stakeToken])
  fairLaunch.save()
}

export function handleHarvest(event: Harvest): void {
  log.debug("handleHarvest v2 {}", [event.address.toHexString()])
  let transaction = createOrLoadTransaction(event.transaction.hash, event.block)
  let fairLaunch = KyberFairLaunch.load(event.address.toHex())

  let harvests = transaction.harvests
  let harvest = new HarvestEvent(
    event.transaction.hash
      .toHexString()
      .concat('-')
      .concat(BigInt.fromI32(harvests.length).toString())
  )

  harvest.transaction = transaction.id
  harvest.timestamp = event.params.timestamp
  harvest.user = event.params.user
  harvest.amount = event.params.lockedAmount
  harvest.poolID = event.params.pid.toI32()
  harvest.fairLaunch = event.address.toHexString()
  harvest.rewardToken = event.params.rewardToken
  harvest.fairLaunch = event.address.toHex()
  let stakeTokens = fairLaunch.stakeTokens
  harvest.stakeToken = stakeTokens[harvest.poolID]
  harvest.save()

  transaction.harvests = harvests.concat([harvest.id])
  transaction.save()
}
