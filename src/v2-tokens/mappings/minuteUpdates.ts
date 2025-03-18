import { BigDecimal, BigInt, ethereum, store } from '@graphprotocol/graph-ts'

import { Bundle, Token, TokenMinuteData } from '../../../generated/schema'
import { ZERO_BD, ZERO_BI } from '../../common/constants'

export function updateTokenMinuteData(token: Token, event: ethereum.Event): TokenMinuteData {
  const bundle = Bundle.load('1')!
  const timestamp = event.block.timestamp.toI32()
  const minuteIndex = timestamp / 60 // get unique hour within unix history
  const minuteStartUnix = minuteIndex * 60 // want the rounded effect
  const tokenMinuteID = token.id.concat('-').concat(minuteIndex.toString())
  let tokenMinuteData = TokenMinuteData.load(tokenMinuteID)
  const tokenPrice = token.derivedETH.times(bundle.ethPrice)
  let isNew = false
  if (!tokenMinuteData) {
    tokenMinuteData = new TokenMinuteData(tokenMinuteID)
    tokenMinuteData.periodStartUnix = minuteStartUnix
    tokenMinuteData.token = token.id
    tokenMinuteData.volume = ZERO_BD
    tokenMinuteData.volumeUSD = ZERO_BD
    tokenMinuteData.untrackedVolumeUSD = ZERO_BD
    tokenMinuteData.feesUSD = ZERO_BD
    tokenMinuteData.open = tokenPrice
    tokenMinuteData.high = tokenPrice
    tokenMinuteData.low = tokenPrice
    tokenMinuteData.close = tokenPrice
    const tokenMinuteArray = token.minuteArray
    tokenMinuteArray.push(minuteIndex)
    token.minuteArray = tokenMinuteArray
    token.save()
    isNew = true
  }

  if (tokenPrice.gt(tokenMinuteData.high)) {
    tokenMinuteData.high = tokenPrice
  }

  if (tokenPrice.lt(tokenMinuteData.low)) {
    tokenMinuteData.low = tokenPrice
  }

  tokenMinuteData.close = tokenPrice
  tokenMinuteData.priceUSD = tokenPrice
  tokenMinuteData.totalValueLocked = BigDecimal.fromString('0')
  tokenMinuteData.totalValueLockedUSD = BigDecimal.fromString('0')
  tokenMinuteData.save()

  if (token.lastMinuteArchived.equals(ZERO_BI) && token.lastMinuteRecorded.equals(ZERO_BI)) {
    token.lastMinuteRecorded = BigInt.fromI32(minuteIndex)
    token.lastMinuteArchived = BigInt.fromI32(minuteIndex - 1)
  }
  if (isNew) {
    const lastMinuteArchived = token.lastMinuteArchived.toI32()
    const stop = minuteIndex - 1680
    if (stop > lastMinuteArchived) {
      archiveMinuteData(token, stop)
    }

    token.lastMinuteRecorded = BigInt.fromI32(minuteIndex)
    token.save()
  }

  // Rolling deletion segment

  //current minute minus 10800 seconds (28 hours)

  return tokenMinuteData as TokenMinuteData
}

function archiveMinuteData(token: Token, end: i32): void {
  // log.warning('ARCHIVING MINUTE - {}   - TOKEN - {}', [token.lastMinuteArchived.toString(), token.id.toHexString()])
  const length = token.minuteArray.length
  const array = token.minuteArray
  const modArray = token.minuteArray
  let last = token.lastMinuteArchived.toI32()
  for (let i = 0; i < length; i++) {
    if (array[i] > end) {
      break
    }
    const tokenMinuteID = token.id.concat('-').concat(array[i].toString())
    // let tokenMinuteData = TokenMinuteData.load(tokenMinuteID)
    // if (tokenMinuteData) {
    store.remove('TokenMinuteData', tokenMinuteID)
    // }
    modArray.shift()
    last = array[i]
    if (BigInt.fromI32(i + 1).equals(BigInt.fromI32(1000))) {
      // log.warning('INTERVAL REACH - {} - LIMITER - {}', [tokenMinuteID, i.toString()])
      break
    }
  }
  if (modArray) {
    token.minuteArray = modArray
  } else {
    token.minuteArray = []
  }
  token.lastMinuteArchived = BigInt.fromI32(last - 1)
  token.save()
}
