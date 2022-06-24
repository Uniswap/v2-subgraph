import { log, BigInt, Bytes } from '@graphprotocol/graph-ts'
import { KyberFairLaunch, Transaction, Vest as VestEvent } from '../types/schema'
import { KyberFairLaunchV2 as KyberFairLaunchTemplate } from '../types/templates'

import { RewardContractAdded, Vested } from '../types/KyberRewardLockerV2/KyberRewardLockerV2'

import { KyberFairLaunchV2 as KyberFairLaunchContract } from '../types/templates/KyberFairLaunchV2/KyberFairLaunchV2'
import { createOrLoadTransaction, ZERO_BI } from './utils'

export function handleRewardContractAdded(event: RewardContractAdded): void {
  let fairLaunch = KyberFairLaunch.load(event.params.rewardContract.toHex())
  if (fairLaunch !== null) {
    return
  }
  KyberFairLaunchTemplate.create(event.params.rewardContract)
  //init reward contract
  fairLaunch = new KyberFairLaunch(event.params.rewardContract.toHex())
  let fairLaunchContract = KyberFairLaunchContract.bind(event.params.rewardContract)
  let result = fairLaunchContract.try_getRewardTokens()
  if (result.reverted) {
    log.warning('failed to get reward tokens from rewardContract={}', [event.params.rewardContract.toHex()])
    return
  }
  fairLaunch.rewardTokens = result.value as Bytes[]
  let poolLength = fairLaunchContract.poolLength()
  let stakeTokens: Bytes[] = []
  if (poolLength.notEqual(ZERO_BI)) {
    for (let i: i32 = 0; i < fairLaunchContract.poolLength().toI32(); i++) {
      stakeTokens.push(fairLaunchContract.getPoolInfo(BigInt.fromI32(i)).value1)
    }
  }
  fairLaunch.stakeTokens = stakeTokens
  fairLaunch.save()
}

export function handleVestd(event: Vested): void {
  let transaction = createOrLoadTransaction(event.transaction.hash, event.block)

  let vests = transaction.vests
  let vest = new VestEvent(
    event.transaction.hash
      .toHexString()
      .concat('-')
      .concat(BigInt.fromI32(vests.length).toString())
  )

  vest.transaction = transaction.id
  vest.timestamp = event.block.timestamp
  vest.user = event.params.beneficiary
  vest.amount = event.params.vestedQuantity
  vest.rewardToken = event.params.token
  vest.save()

  transaction.vests = vests.concat([vest.id])
  transaction.save()
}
