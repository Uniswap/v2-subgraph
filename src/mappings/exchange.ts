/* eslint-disable prefer-const */
import { Address, BigInt, BigDecimal, log } from '@graphprotocol/graph-ts'
import {
  Exchange,
  Bundle,
  Token,
  User,
  UserExchangeData,
  Uniswap,
  Transaction,
  UniswapDayData,
  UniswapHistoricalData,
  ExchangeHistoricalData,
  ExchangeDayData,
  TokenHistoricalData,
  TokenDayData,
  Mint as MintEvent,
  Reserve,
  Sync as SyncEvent,
  Burn as BurnEvent,
  Swap as SwapEvent
} from '../types/schema'
import { Mint, Burn, Swap, Transfer, Sync } from '../types/Exchange/Exchange'
import { getEthPriceInUSD } from '../mappings/priceOracle'
import { convertTokenToDecimal, oneBigInt, zeroBD, zeroBigInt, equalToZero } from '../helpers'

function createUserDataEntity(id: string, user: Address, exchange: Address): void {
  const userExchangeData = new UserExchangeData(id)
  userExchangeData.userAddress = user
  userExchangeData.user = user.toHex()
  userExchangeData.exchange = exchange.toHexString()
  userExchangeData.token0Deposited = zeroBD()
  userExchangeData.token0Withdrawn = zeroBD()
  userExchangeData.token1Deposited = zeroBD()
  userExchangeData.token1Withdrawn = zeroBD()
  userExchangeData.uniTokenBalance = zeroBD()
  userExchangeData.token0Bought = zeroBD()
  userExchangeData.token0Sold = zeroBD()
  userExchangeData.token1Bought = zeroBD()
  userExchangeData.token1Sold = zeroBD()
  userExchangeData.save()
}

function updateExchangeHistorical(exchangeHistoricalData: ExchangeHistoricalData, exchange: Exchange): void {
  const bundle = Bundle.load('1')
  exchangeHistoricalData.token0Balance = exchange.token0Balance
  exchangeHistoricalData.token1Balance = exchange.token1Balance
  exchangeHistoricalData.combinedBalanceETH = exchange.combinedBalanceETH
  exchangeHistoricalData.combinedBalanceUSD = exchange.combinedBalanceETH.times(bundle.ethPrice)
  exchangeHistoricalData.totalUniToken = exchange.totalUniToken
  exchangeHistoricalData.tradeVolumeToken0 = exchange.tradeVolumeToken0
  exchangeHistoricalData.tradeVolumeToken1 = exchange.tradeVolumeToken1
  exchangeHistoricalData.tradeVolumeETH = exchange.tradeVolumeETH
  exchangeHistoricalData.tradeVolumeUSD = exchange.tradeVolumeUSD
  exchangeHistoricalData.token0Price = exchange.token0Price
  exchangeHistoricalData.token1Price = exchange.token1Price
  exchangeHistoricalData.totalTxsCount = exchange.totalTxsCount
  exchangeHistoricalData.save()
}

function createExchangeDayData(dayExchangeID: string, dayStartTimestamp: i32, eventAddress: Address): void {
  const exchangeDayData = new ExchangeDayData(dayExchangeID)
  const exchange = Exchange.load(eventAddress.toHexString())
  exchangeDayData.date = dayStartTimestamp
  exchangeDayData.token0 = exchange.token0
  exchangeDayData.token1 = exchange.token1
  exchangeDayData.exchangeAddress = eventAddress
  exchangeDayData.token0Balance = zeroBD()
  exchangeDayData.token1Balance = zeroBD()
  exchangeDayData.dailyVolumeToken0 = zeroBD()
  exchangeDayData.dailyVolumeToken1 = zeroBD()
  exchangeDayData.dailyVolumeUSD = zeroBD()
  exchangeDayData.dailyTxns = zeroBigInt()
  exchangeDayData.combinedBalanceETH = zeroBD()
  exchangeDayData.combinedBalanceUSD = zeroBD()
  exchangeDayData.save()
}

function updateTokenHistoricalData(tokenHistoricalData: TokenHistoricalData, token: Token, timestamp: i32): void {
  const bundle = Bundle.load('1')
  tokenHistoricalData.token = token.id
  tokenHistoricalData.timestamp = timestamp
  tokenHistoricalData.tradeVolumeToken = token.tradeVolumeToken
  tokenHistoricalData.tradeVolumeETH = token.tradeVolumeETH
  tokenHistoricalData.tradeVolumeUSD = token.tradeVolumeUSD
  tokenHistoricalData.totalLiquidityToken = token.totalLiquidityToken
  tokenHistoricalData.totalLiquidityETH = token.totalLiquidityETH
  tokenHistoricalData.totalLiquidityUSD = token.totalLiquidityETH.times(bundle.ethPrice)
  tokenHistoricalData.priceETH = token.derivedETH as BigDecimal
  tokenHistoricalData.priceUSD = token.derivedETH.times(bundle.ethPrice)
  tokenHistoricalData.save()
}

const maxExchangeDayDatas = 10

function createTokenDayData(id: string, token: Token, dayStartTimestamp: i32): void {
  const tokenDayData = new TokenDayData(id)
  tokenDayData.date = dayStartTimestamp
  tokenDayData.token = token.id
  tokenDayData.dailyVolumeToken = zeroBD()
  tokenDayData.dailyVolumeETH = zeroBD()
  tokenDayData.dailyVolumeUSD = zeroBD()
  tokenDayData.dailyTxns = zeroBigInt()
  tokenDayData.totalLiquidityToken = zeroBD()
  tokenDayData.totalLiquidityETH = zeroBD()
  tokenDayData.totalLiquidityUSD = zeroBD()
  tokenDayData.maxStored = maxExchangeDayDatas
  tokenDayData.mostLiquidPairs = token.mostLiquidPairs
  tokenDayData.save()
}

function updateExchangeDayData(exchangeDayData: ExchangeDayData, exchange: Exchange): void {
  const bundle = Bundle.load('1')
  exchangeDayData.token0Balance = exchange.token0Balance
  exchangeDayData.token1Balance = exchange.token1Balance
  exchangeDayData.combinedBalanceETH = exchange.combinedBalanceETH
  exchangeDayData.combinedBalanceUSD = exchange.combinedBalanceETH.times(bundle.ethPrice)
  exchangeDayData.dailyTxns = exchangeDayData.dailyTxns.plus(oneBigInt())
  exchangeDayData.save()
}

const maxTokenDayDatas = 10

function createUniswapDayData(dayID: i32, dayStartTimestamp: i32): void {
  const uniswapDayData = new UniswapDayData(dayID.toString())
  const uniswap = Uniswap.load('1')
  uniswapDayData.date = dayStartTimestamp
  uniswapDayData.dailyVolumeUSD = zeroBD()
  uniswapDayData.dailyVolumeETH = zeroBD()
  uniswapDayData.totalVolumeUSD = zeroBD()
  uniswapDayData.totalVolumeETH = zeroBD()
  uniswapDayData.totalLiquidityUSD = zeroBD()
  uniswapDayData.totalLiquidityETH = zeroBD()
  uniswapDayData.maxStored = maxTokenDayDatas
  uniswapDayData.mostLiquidTokens = uniswap.mostLiquidTokens
  uniswapDayData.txCount = zeroBigInt()
  uniswapDayData.save()
}

function updateStoredExchanges(tokenDayData: TokenDayData, exchangeDayID: string): void {
  const exchangeDayData = ExchangeDayData.load(exchangeDayID.toString())
  const newList = tokenDayData.mostLiquidPairs
  let alreadyInList = false
  // check if exchange is already in list, make sure to compare on exchange
  for (let i = 0; i < newList.length; i++) {
    const currentExchangeData = ExchangeDayData.load(newList[i])
    log.debug('mybug address 1: {}', [currentExchangeData.exchangeAddress.toHexString()])
    log.debug('mybug address 2: {}', [exchangeDayData.exchangeAddress.toHexString()])
    if (currentExchangeData.exchangeAddress.toHexString() == exchangeDayData.exchangeAddress.toHexString()) {
      alreadyInList = true
      newList[i] = exchangeDayData.id
    }
  }
  // set to impossibly high number
  let minTokenLiquidity = new BigDecimal(BigInt.fromI32(I32.MAX_VALUE))
  let minIndex = 0
  if (newList.length < tokenDayData.maxStored && !alreadyInList) {
    newList.push(exchangeDayData.id)
  } else if (!alreadyInList) {
    // loop through stored list and find min token liquidity
    for (let i = 0; i < newList.length; i++) {
      const currentPairs = tokenDayData.mostLiquidPairs as Array<string>
      const id = currentPairs[i]
      const currentExchangeDayData = ExchangeDayData.load(id.toString())
      const globalToken = tokenDayData.token
      const localToken0 = currentExchangeDayData.token0
      // if our token of interest is token0, compare against that
      if (globalToken == localToken0) {
        if (currentExchangeDayData.token0Balance < minTokenLiquidity) {
          minTokenLiquidity = currentExchangeDayData.token0Balance
          minIndex = i
        }
      }
      // our token of interest must be token 1
      else {
        if (currentExchangeDayData.token1Balance < minTokenLiquidity) {
          minTokenLiquidity = currentExchangeDayData.token1Balance
          minIndex = i
        }
      }
    }
    // if current token has more liquidity than min, replace it
    if (tokenDayData.totalLiquidityToken > minTokenLiquidity) {
      newList[minIndex] = exchangeDayData.id
    }
  }
  tokenDayData.mostLiquidPairs = newList
  const token = Token.load(tokenDayData.token)
  token.mostLiquidPairs = newList
  token.save()
  tokenDayData.save()
}

/**
 * Loop through stored token datas and find minimum liquidity in ETH.
 * If new token is higher than min, replace min list at min index.
 */
function updateStoredTokens(tokenDayData: TokenDayData, dayID: i32): void {
  const uniswap = Uniswap.load('1')
  const uniswapDayData = UniswapDayData.load(dayID.toString())
  const newList = uniswapDayData.mostLiquidTokens
  let alreadyInList = false
  // check if token is already in the list
  for (let i = 0; i < newList.length; i++) {
    const currentDayData = TokenDayData.load(newList[i].toString())
    if (currentDayData.token.toString() == tokenDayData.token.toString()) {
      alreadyInList = true
      newList[i] = tokenDayData.id
    }
  }
  let minIndex = 0
  if (newList.length < uniswapDayData.maxStored && !alreadyInList) {
    newList.push(tokenDayData.id)
  } else if (!alreadyInList) {
    let localMinLiquidity = new BigDecimal(BigInt.fromI32(I32.MAX_VALUE))
    // loop through stored list and find min liquidity
    for (let i = 0; i < newList.length; i++) {
      const currentDayData = TokenDayData.load(newList[i].toString())
      if (currentDayData.totalLiquidityETH < localMinLiquidity) {
        localMinLiquidity = currentDayData.totalLiquidityETH
        minIndex = i
      }
    }
    // if current token has more liquidity than min, replace it
    if (tokenDayData.totalLiquidityETH > localMinLiquidity) {
      newList[minIndex] = tokenDayData.id
    }
  }
  uniswapDayData.mostLiquidTokens = newList
  uniswap.mostLiquidTokens = newList
  uniswap.save()
  uniswapDayData.save()
}

/**
 * Save daily stats for token. Reference global list of day datas
 * and add to list if greater liquidity than min.
 */
function updateTokenDayData(exchangeDayID: string, dayID: i32, tokenDayData: TokenDayData, token: Token): void {
  const bundle = Bundle.load('1')
  tokenDayData.totalLiquidityToken = token.totalLiquidityToken
  tokenDayData.totalLiquidityETH = token.totalLiquidityETH
  tokenDayData.totalLiquidityUSD = token.totalLiquidityETH.times(bundle.ethPrice)
  tokenDayData.dailyTxns = tokenDayData.dailyTxns.plus(oneBigInt())
  tokenDayData.save()
  updateStoredTokens(tokenDayData, dayID)
  updateStoredExchanges(tokenDayData, exchangeDayID)
}

/**
 * Search through graph to find derived Eth per token.
 * @todo update to be derived ETH (add stablecoin estimates)
 *
 **/
function findEthPerToken(token: Token, maxDepthReached: boolean): BigDecimal {
  if (token.wethExchange != null) {
    const wethExchange = Exchange.load(token.wethExchange.toHexString())
    if (wethExchange.token0 == token.id) {
      // our token is token 0
      return wethExchange.token1Price
    } else {
      // our token is token 1
      return wethExchange.token0Price
    }
  } else if (!maxDepthReached) {
    const allPairs = token.allPairs as Array<string>
    for (let i = 0; i < allPairs.length; i++) {
      const currentExchange = Exchange.load(allPairs[i])
      if (currentExchange.token0 == token.id) {
        // our token is token 0
        const otherToken = Token.load(currentExchange.token1)
        const otherTokenEthPrice = findEthPerToken(otherToken as Token, true)
        if (otherTokenEthPrice != null) {
          return currentExchange.token1Price.times(otherTokenEthPrice)
        }
      } else {
        // our token is token 1
        const otherToken = Token.load(currentExchange.token0)
        const otherTokenEthPrice = findEthPerToken(otherToken as Token, true)
        if (otherTokenEthPrice != null) {
          return currentExchange.token0Price.times(otherTokenEthPrice)
        }
      }
    }
  }
  return zeroBD() /** @todo may want to return null */
}

function isCompleteMint(mintId: string): boolean {
  const mint = MintEvent.load(mintId)
  // check if a value set by mint event has been set
  return mint.sender !== null
}

function isCompleteBurn(burnId: string): boolean {
  const burn = BurnEvent.load(burnId)
  // check if a value set by burn  event has been set
  return burn.sender !== null
}

/**
 * If no txn entity yet create one.
 * If txn, loop through events and see if any reserves need to be filled out.
 * Update balances on exchange.
 */
export function handleSync(event: Sync): void {
  const uniswap = Uniswap.load('1')
  const exchangeId = event.address.toHex()
  const exchange = Exchange.load(exchangeId)
  const token0 = Token.load(exchange.token0)
  const token1 = Token.load(exchange.token1)
  const amount0 = convertTokenToDecimal(event.params.reserve0, token0.decimals)
  const amount1 = convertTokenToDecimal(event.params.reserve1, token1.decimals)
  const txn = event.transaction.hash.toHexString()
  let transaction = Transaction.load(txn)
  if (transaction !== null) {
    uniswap.reserveEntityCount = uniswap.reserveEntityCount.plus(oneBigInt())
    uniswap.save()
    const newReserves = new Reserve(uniswap.reserveEntityCount.toString())
    newReserves.reserve0 = amount0
    newReserves.reserve1 = amount1
    newReserves.save()
    const mints = transaction.mints
    if (mints.length > 0) {
      const latestMint = MintEvent.load(mints[mints.length - 1])
      if (latestMint.reservesPost == null) {
        latestMint.reservesPost = newReserves.id
        latestMint.save()
      }
    }
    const burns = transaction.burns
    if (burns.length > 0) {
      const latestBurn = BurnEvent.load(burns[burns.length - 1])
      if (latestBurn.reservesPost == null) {
        latestBurn.reservesPost = newReserves.id
        latestBurn.save()
      }
    }
  } else {
    transaction = new Transaction(txn)
    transaction.block = event.block.number.toI32()
    transaction.timestamp = event.block.timestamp.toI32()
    transaction.mints = []
    transaction.swaps = []
    transaction.burns = []
    transaction.syncs = []
  }
  const newSyncs = transaction.syncs
  const sync = new SyncEvent(uniswap.syncCount.toString())
  uniswap.syncCount = uniswap.syncCount.plus(oneBigInt())
  newSyncs.push(sync.id)
  transaction.syncs = newSyncs
  transaction.save()
  // update with new values
  exchange.token0Balance = amount0
  exchange.token1Balance = amount1
  exchange.save()
}

/**
 * Both mint and burn have at least 1 transfer event, an optional second,
 * both of which occur before the final <burn> or <mint> event.
 *
 * To handle this, we create optional fields in the mint and burn entities.
 * If we find a case with two transfers, we overwrite old values.
 *
 * 1. if mint, create new mint entity if needed
 * 2. same for burn
 * 3. in both bases, if the last entity in array is complete then we know
 *    that we must be on the second transfer in the order. In this case,
 *    overwrite the old values and shift them to "fee" slots (because first
 *    transfer must have been the fee transfer).
 */
export function handleTransfer(event: Transfer): void {
  const exchangeId = event.address.toHex()
  const uniswap = Uniswap.load('1')
  const txn = event.transaction.hash.toHexString()
  const from = event.params.from
  const to = event.params.to
  const poolTokenAmount = convertTokenToDecimal(event.params.value, 18)
  let transaction = Transaction.load(txn)
  if (transaction == null) {
    transaction = new Transaction(txn)
    transaction.block = event.block.number.toI32()
    transaction.timestamp = event.block.timestamp.toI32()
    transaction.mints = []
    transaction.swaps = []
    transaction.burns = []
    transaction.syncs = []
    transaction.save()
  }
  // mint
  if (from.toHexString() == '0x0000000000000000000000000000000000000000') {
    let mints = transaction.mints
    if (mints.length === 0 || isCompleteMint(mints[mints.length - 1])) {
      uniswap.mintCount = uniswap.mintCount.plus(oneBigInt())
      const mintId = uniswap.mintCount.toString()
      const mint = new MintEvent(mintId)
      mint.exchange = exchangeId
      mint.timestamp = event.block.timestamp.toI32()
      mint.logIndex = event.logIndex
      mint.to = to
      mint.liquidity = poolTokenAmount
      const newMints = transaction.mints
      newMints.push(mint.id)
      transaction.mints = newMints
      uniswap.save()
      transaction.save()
      mint.save()
    } else {
      // second transfer before mint, overwrite old values
      const mintId = uniswap.mintCount.toString()
      const mint = MintEvent.load(mintId)
      mint.feeTo = mint.to
      mint.feeLiquidity = mint.liquidity
      mint.to = to
      mint.liquidity = poolTokenAmount
      mint.save()
    }
  }
  // burn
  if (to.toHexString() == '0x0000000000000000000000000000000000000000') {
    let burns = transaction.burns
    if (burns.length === 0 || isCompleteBurn(burns[burns.length - 1])) {
      uniswap.burnCount = uniswap.burnCount.plus(oneBigInt())
      const burnId = uniswap.burnCount.toString()
      const burn = new BurnEvent(burnId)
      burn.exchange = exchangeId
      burn.timestamp = event.block.timestamp.toI32()
      burn.logIndex = event.logIndex
      burn.liquidity = poolTokenAmount
      const newBurns = transaction.burns
      newBurns.push(burn.id)
      transaction.burns = newBurns
      uniswap.save()
      transaction.save()
      burn.save()
    } else {
      // second transfer before burn, overwrite old values
      const burnId = uniswap.burnCount.toString()
      const burn = BurnEvent.load(burnId)
      burn.feeTo = burn.from
      burn.feeLiquidity = burn.liquidity
      burn.from = from
      burn.liquidity = poolTokenAmount
      burn.save()
    }
  }
}

export function handleMint(event: Mint): void {
  const exchangeId = event.address.toHex()
  const exchange = Exchange.load(exchangeId)

  if (exchange !== null) {
    const token0 = Token.load(exchange.token0)
    const token1 = Token.load(exchange.token1)

    // update exhcnage info (except balances, sync will cover that)
    const token0Amount = convertTokenToDecimal(event.params.amount0, token0.decimals)
    const token1Amount = convertTokenToDecimal(event.params.amount1, token1.decimals)
    exchange.token0Price = exchange.token0Balance.div(exchange.token1Balance).truncate(18)
    exchange.token1Price = exchange.token1Balance.div(exchange.token0Balance).truncate(18)
    exchange.totalTxsCount = exchange.totalTxsCount.plus(oneBigInt())
    exchange.save()

    //ETH / USD prices
    const bundle = Bundle.load('1')
    bundle.ethPrice = getEthPriceInUSD(event.block.number)
    bundle.save()

    // update global token0 info
    const ethPerToken0 = findEthPerToken(token0 as Token, false)
    const usdPerToken0 = bundle.ethPrice.times(ethPerToken0)
    token0.derivedETH = ethPerToken0
    token0.totalLiquidityToken = token0.totalLiquidityToken.plus(token0Amount)
    token0.totalLiquidityETH = token0.totalLiquidityToken.times(ethPerToken0)

    // update global token1 info
    const ethPerToken1 = findEthPerToken(token1 as Token, false)
    const usdPerToken1 = bundle.ethPrice.times(ethPerToken1)
    token1.derivedETH = ethPerToken1
    token1.totalLiquidityToken = token1.totalLiquidityToken.plus(token1Amount)
    token1.totalLiquidityETH = token1.totalLiquidityToken.times(ethPerToken1)

    // get new amounts of USD and ETH for tracking
    const amountTotalETH = ethPerToken1.times(token1Amount).plus(ethPerToken0.times(token0Amount))
    const amountTotalUSD = usdPerToken1.times(token1Amount).plus(usdPerToken0.times(token0Amount))

    // update exchange liquidity
    exchange.combinedBalanceETH = exchange.combinedBalanceETH.plus(amountTotalETH)
    token0.save()
    token1.save()
    exchange.save()

    /**
     * @todo
     *
     * change this from params.sender - it may not be the sender
     * because router is usually the sender
     *
     * need to look at ERC20 transfer events
     *
     * do LP analytics somewhere here
     *
     */
    const userID = event.params.sender.toHex()
    let user = User.load(userID)
    if (user == null) {
      user = new User(userID)
      user.save()
    }
    const userExchangeID = exchange.id
      .toString()
      .concat('-')
      .concat(event.params.sender.toHexString())
    let userExchangeData = UserExchangeData.load(userExchangeID)
    if (userExchangeData == null) {
      createUserDataEntity(userExchangeID, event.params.sender, event.address)
      userExchangeData = UserExchangeData.load(userExchangeID) // reload here
    }
    userExchangeData.token0Deposited = userExchangeData.token0Deposited.plus(token0Amount)
    userExchangeData.token1Deposited = userExchangeData.token1Deposited.plus(token1Amount)
    userExchangeData.save()
    /**
     *
     *  Info above needs updating
     */

    // update counters
    const uniswap = Uniswap.load('1')
    uniswap.totalLiquidityETH = uniswap.totalLiquidityETH.plus(amountTotalETH)
    uniswap.totalLiquidityUSD = uniswap.totalLiquidityETH.times(bundle.ethPrice)
    uniswap.exchangeHistoryEntityCount = uniswap.exchangeHistoryEntityCount.plus(oneBigInt())
    uniswap.uniswapHistoryEntityCount = uniswap.uniswapHistoryEntityCount.plus(oneBigInt())
    uniswap.tokenHistoryEntityCount = uniswap.tokenHistoryEntityCount.plus(oneBigInt())
    uniswap.reserveEntityCount = uniswap.reserveEntityCount.plus(oneBigInt())
    uniswap.txCount = uniswap.txCount.plus(oneBigInt())
    uniswap.save()

    // update global historical data
    const uniswapHistoricalData = new UniswapHistoricalData(uniswap.uniswapHistoryEntityCount.toString())
    uniswapHistoricalData.timestamp = event.block.timestamp.toI32()
    uniswapHistoricalData.totalVolumeUSD = uniswap.totalVolumeUSD
    uniswapHistoricalData.totalVolumeETH = uniswap.totalVolumeETH
    uniswapHistoricalData.totalLiquidityUSD = uniswap.totalLiquidityUSD
    uniswapHistoricalData.totalLiquidityETH = uniswap.totalLiquidityETH
    uniswapHistoricalData.txCount = uniswap.txCount
    uniswapHistoricalData.save()

    // get ids for data specific entities
    const timestamp = event.block.timestamp.toI32()
    const dayID = timestamp / 86400
    const dayStartTimestamp = dayID * 86400
    const dayExchangeID = event.address
      .toHexString()
      .concat('-')
      .concat(BigInt.fromI32(dayID).toString())

    // update global day data
    let uniswapDayData = UniswapDayData.load(dayID.toString())
    if (uniswapDayData == null) {
      createUniswapDayData(dayID, dayStartTimestamp)
      uniswapDayData = UniswapDayData.load(dayID.toString())
    }
    uniswapDayData.totalLiquidityUSD = uniswap.totalLiquidityUSD
    uniswapDayData.totalLiquidityETH = uniswap.totalLiquidityETH
    uniswapDayData.txCount = uniswap.txCount
    uniswapDayData.save()

    // now we know we can complete mint event that was created during transfer
    const mintId = uniswap.mintCount.toString()
    const mintEvent = MintEvent.load(mintId)
    mintEvent.sender = event.params.sender
    mintEvent.exchange = exchange.id as string
    mintEvent.token0 = token0.id as string
    mintEvent.token1 = token1.id as string
    mintEvent.valueUSD = amountTotalUSD as BigDecimal
    mintEvent.valueETH = amountTotalETH as BigDecimal
    mintEvent.amount0 = token0Amount as BigDecimal
    mintEvent.amount1 = token1Amount as BigDecimal
    const newReserves = new Reserve(uniswap.reserveEntityCount.toString())
    newReserves.reserve0 = exchange.token0Balance.minus(token0Amount) as BigDecimal
    newReserves.reserve1 = exchange.token1Balance.minus(token1Amount) as BigDecimal
    newReserves.save()
    mintEvent.reservesPre = newReserves.id
    mintEvent.save()

    // update historical data
    let exchangeHistoricalData = new ExchangeHistoricalData(uniswap.exchangeHistoryEntityCount.toString())
    exchangeHistoricalData.exchangeAddress = event.address
    exchangeHistoricalData.timestamp = event.block.timestamp.toI32()
    exchangeHistoricalData.type = 'mint'
    updateExchangeHistorical(exchangeHistoricalData, exchange as Exchange)

    // day data for exchange
    let exchangeDayData = ExchangeDayData.load(dayExchangeID)
    if (exchangeDayData == null) {
      createExchangeDayData(dayExchangeID as string, dayStartTimestamp as i32, event.address)
    }
    exchangeDayData = ExchangeDayData.load(dayExchangeID)
    updateExchangeDayData(exchangeDayData as ExchangeDayData, exchange as Exchange)
    exchangeDayData.save()

    // history data for token0
    const tokenHistoricalData0 = new TokenHistoricalData(uniswap.tokenHistoryEntityCount.toString().concat('-token0'))
    updateTokenHistoricalData(
      tokenHistoricalData0 as TokenHistoricalData,
      token0 as Token,
      event.block.timestamp.toI32()
    )

    // history data for token1
    const tokenHistoricalData1 = new TokenHistoricalData(uniswap.tokenHistoryEntityCount.toString().concat('-token1'))
    updateTokenHistoricalData(
      tokenHistoricalData1 as TokenHistoricalData,
      token1 as Token,
      event.block.timestamp.toI32()
    )

    // day data for token0
    const token0DayID = token0.id
      .toString()
      .concat('-')
      .concat(BigInt.fromI32(dayID).toString())
    let token0DayData = TokenDayData.load(token0DayID)
    if (token0DayData == null) {
      createTokenDayData(token0DayID as string, token0 as Token, dayStartTimestamp as i32)
    }
    token0DayData = TokenDayData.load(token0DayID)
    updateTokenDayData(dayExchangeID, dayID, token0DayData as TokenDayData, token0 as Token)

    // day data for token1
    const token1DayID = token1.id
      .toString()
      .concat('-')
      .concat(BigInt.fromI32(dayID).toString())
    let token1DayData = TokenDayData.load(token1DayID)
    if (token1DayData == null) {
      createTokenDayData(token1DayID as string, token1 as Token, dayStartTimestamp as i32)
    }
    token1DayData = TokenDayData.load(token1DayID)
    updateTokenDayData(dayExchangeID, dayID, token1DayData as TokenDayData, token1 as Token)
  }
}

export function handleBurn(event: Burn): void {
  const exchangeId = event.address.toHex()
  const exchange = Exchange.load(exchangeId)

  if (exchange !== null) {
    //update token info
    const token0 = Token.load(exchange.token0)
    const token1 = Token.load(exchange.token1)
    const token0Amount = convertTokenToDecimal(event.params.amount0, token0.decimals)
    const token1Amount = convertTokenToDecimal(event.params.amount1, token1.decimals)

    // need to avoid div by 0, check balances first
    if (!equalToZero(exchange.token1Balance)) {
      exchange.token0Price = exchange.token0Balance.div(exchange.token1Balance).truncate(18)
    } else {
      exchange.token0Price = zeroBD()
    }
    if (!equalToZero(exchange.token0Balance)) {
      exchange.token1Price = exchange.token1Balance.div(exchange.token0Balance).truncate(18)
    } else {
      exchange.token1Price = zeroBD()
    }
    exchange.totalTxsCount = exchange.totalTxsCount.plus(oneBigInt())

    //ETH / USD prices
    const bundle = Bundle.load('1')
    const ethPriceInUSD = getEthPriceInUSD(event.block.number)
    bundle.ethPrice = ethPriceInUSD
    bundle.save()

    // update global token0 info
    const ethPerToken0 = findEthPerToken(token0 as Token, false)
    const usdPerToken0 = bundle.ethPrice.times(ethPerToken0)
    token0.derivedETH = ethPerToken0
    token0.totalLiquidityToken = token0.totalLiquidityToken.minus(token0Amount)
    token0.totalLiquidityETH = token0.totalLiquidityToken.times(ethPerToken0)

    // update global token1 info
    const ethPerToken1 = findEthPerToken(token1 as Token, false)
    const usdPerToken1 = bundle.ethPrice.times(ethPerToken1)
    token1.derivedETH = ethPerToken1
    token1.totalLiquidityToken = token1.totalLiquidityToken.minus(token1Amount)
    token1.totalLiquidityETH = token1.totalLiquidityToken.times(ethPerToken1)

    // get new amounts of USD and ETH for tracking
    const amountTotalETH = ethPerToken1.times(token1Amount).plus(ethPerToken0.times(token0Amount))
    const amountTotalUSD = usdPerToken1.times(token1Amount).plus(usdPerToken0.times(token0Amount))

    // update global counter and save
    exchange.combinedBalanceETH = exchange.combinedBalanceETH.minus(amountTotalETH)
    token0.save()
    token1.save()
    exchange.save()

    // update global values and counters
    const uniswap = Uniswap.load('1')
    uniswap.totalLiquidityETH = uniswap.totalLiquidityETH.minus(amountTotalETH)
    uniswap.totalLiquidityUSD = uniswap.totalLiquidityETH.times(bundle.ethPrice)
    uniswap.exchangeHistoryEntityCount = uniswap.exchangeHistoryEntityCount.plus(oneBigInt())
    uniswap.uniswapHistoryEntityCount = uniswap.uniswapHistoryEntityCount.plus(oneBigInt())
    uniswap.tokenHistoryEntityCount = uniswap.tokenHistoryEntityCount.plus(oneBigInt())
    uniswap.reserveEntityCount = uniswap.reserveEntityCount.plus(oneBigInt())
    uniswap.txCount = uniswap.txCount.plus(oneBigInt())
    uniswap.save()

    // create historical entity
    const uniswapHistoricalData = new UniswapHistoricalData(uniswap.uniswapHistoryEntityCount.toString())
    uniswapHistoricalData.timestamp = event.block.timestamp.toI32()
    uniswapHistoricalData.totalVolumeUSD = uniswap.totalVolumeUSD
    uniswapHistoricalData.totalVolumeETH = uniswap.totalVolumeETH
    uniswapHistoricalData.totalLiquidityUSD = uniswap.totalLiquidityUSD
    uniswapHistoricalData.totalLiquidityETH = uniswap.totalLiquidityETH
    uniswapHistoricalData.txCount = uniswap.txCount
    uniswapHistoricalData.save()

    // Nov 2 2018 is 1541116800 for dayStartTimestamp and 17837 for dayID
    const timestamp = event.block.timestamp.toI32()
    const dayID = timestamp / 86400
    const dayStartTimestamp = dayID * 86400
    const dayExchangeID = event.address
      .toHexString()
      .concat('-')
      .concat(BigInt.fromI32(dayID).toString())

    // update global day data
    let uniswapDayData = UniswapDayData.load(dayID.toString())
    if (uniswapDayData == null) {
      createUniswapDayData(dayID, dayStartTimestamp)
      uniswapDayData = UniswapDayData.load(dayID.toString())
    }
    uniswapDayData.totalVolumeUSD = uniswap.totalVolumeUSD
    uniswapDayData.totalLiquidityUSD = uniswap.totalLiquidityUSD
    uniswapDayData.totalLiquidityETH = uniswap.totalLiquidityETH
    uniswapDayData.txCount = uniswap.txCount
    uniswapDayData.save()

    // update the remaining values for mint
    const burnId = uniswap.burnCount.toString()
    const burnEvent = BurnEvent.load(burnId)
    burnEvent.sender = event.params.sender
    burnEvent.from = event.params.to
    burnEvent.exchange = exchange.id as string
    burnEvent.token0 = token0.id as string
    burnEvent.token1 = token1.id as string
    burnEvent.valueUSD = amountTotalUSD as BigDecimal
    burnEvent.valueETH = amountTotalETH as BigDecimal
    burnEvent.amount0 = token0Amount as BigDecimal
    burnEvent.amount1 = token1Amount as BigDecimal
    const newReserves = new Reserve(uniswap.reserveEntityCount.toString())
    newReserves.reserve0 = exchange.token0Balance.plus(token0Amount) as BigDecimal
    newReserves.reserve1 = exchange.token1Balance.plus(token1Amount) as BigDecimal
    newReserves.save()
    burnEvent.reservesPre = newReserves.id
    burnEvent.save()

    // update exchange historical data
    const exchangeHistoricalData = new ExchangeHistoricalData(uniswap.exchangeHistoryEntityCount.toString())
    exchangeHistoricalData.exchangeAddress = event.address
    exchangeHistoricalData.timestamp = event.block.timestamp.toI32()
    exchangeHistoricalData.type = 'burn'
    updateExchangeHistorical(exchangeHistoricalData, exchange as Exchange)

    // update exchange daily values
    let exchangeDayData = ExchangeDayData.load(dayExchangeID)
    if (exchangeDayData == null) {
      createExchangeDayData(dayExchangeID as string, dayStartTimestamp as i32, event.address)
    }
    exchangeDayData = ExchangeDayData.load(dayExchangeID)
    updateExchangeDayData(exchangeDayData as ExchangeDayData, exchange as Exchange)
    exchangeDayData.save()

    // uodate historical data for token0
    const tokenHistoricalData0 = new TokenHistoricalData(uniswap.tokenHistoryEntityCount.toString().concat('-token0'))
    updateTokenHistoricalData(
      tokenHistoricalData0 as TokenHistoricalData,
      token0 as Token,
      event.block.timestamp.toI32()
    )

    // uodate historical data for token1
    const tokenHistoricalData1 = new TokenHistoricalData(uniswap.tokenHistoryEntityCount.toString().concat('-token1'))
    updateTokenHistoricalData(
      tokenHistoricalData1 as TokenHistoricalData,
      token1 as Token,
      event.block.timestamp.toI32()
    )

    // uodate day data for token0
    const token0DayID = token0.id
      .toString()
      .concat('-')
      .concat(BigInt.fromI32(dayID).toString())
    let token0DayData = TokenDayData.load(token0DayID)
    if (token0DayData == null) {
      createTokenDayData(token0DayID as string, token0 as Token, dayStartTimestamp as i32)
    }
    token0DayData = TokenDayData.load(token0DayID)
    updateTokenDayData(dayExchangeID, dayID, token0DayData as TokenDayData, token0 as Token)

    // uodate day data for token1
    const token1DayID = token1.id
      .toString()
      .concat('-')
      .concat(BigInt.fromI32(dayID).toString())
    let token1DayData = TokenDayData.load(token1DayID)
    if (token1DayData == null) {
      createTokenDayData(token1DayID as string, token1 as Token, dayStartTimestamp as i32)
    }
    token1DayData = TokenDayData.load(token1DayID)
    updateTokenDayData(dayExchangeID, dayID, token1DayData as TokenDayData, token1 as Token)
  }
}

export function handleSwap(event: Swap): void {
  /****** Update Exchange ******/
  const exchangeID = event.address.toHex()
  const exchange = Exchange.load(exchangeID)
  if (exchange !== null) {
    const token0 = Token.load(exchange.token0)
    const token1 = Token.load(exchange.token1)

    // create values for tracking, signed and unsigned
    let token0Amount: BigDecimal
    let token1Amount: BigDecimal
    let token0AmountSigned: BigDecimal
    let token1AmountSigned: BigDecimal

    // based on which token was bought, set values
    if (event.params.tokenIn.toHexString() == token0.id) {
      token0Amount = convertTokenToDecimal(event.params.amountIn, token0.decimals)
      token1Amount = convertTokenToDecimal(event.params.amountOut, token1.decimals)
      token0AmountSigned = token0Amount
      token1AmountSigned = token1Amount.times(BigDecimal.fromString('-1'))
    } else {
      token0Amount = convertTokenToDecimal(event.params.amountOut, token0.decimals)
      token1Amount = convertTokenToDecimal(event.params.amountIn, token1.decimals)
      token0AmountSigned = token0Amount.times(BigDecimal.fromString('-1'))
      token1AmountSigned = token1Amount
    }

    // protect against divide by 0
    if (equalToZero(exchange.token0Balance)) {
      exchange.token1Price = zeroBD()
    } else {
      exchange.token1Price = exchange.token1Balance.div(exchange.token0Balance).truncate(18)
    }
    if (equalToZero(exchange.token1Balance)) {
      exchange.token0Price = zeroBD()
    } else {
      exchange.token0Price = exchange.token0Balance.div(exchange.token1Balance).truncate(18)
    }
    // update exchange values and save
    exchange.tradeVolumeToken0 = exchange.tradeVolumeToken0.plus(token0Amount)
    exchange.tradeVolumeToken1 = exchange.tradeVolumeToken0.plus(token1Amount)
    exchange.totalTxsCount = exchange.totalTxsCount.plus(oneBigInt())
    exchange.save()

    //ETH / USD prices
    const bundle = Bundle.load('1')
    const ethPriceInUSD = getEthPriceInUSD(event.block.number)
    bundle.ethPrice = ethPriceInUSD
    bundle.save()

    const ethPerToken0 = findEthPerToken(token0 as Token, false)
    const usdPerToken0 = bundle.ethPrice.times(ethPerToken0)
    token0.derivedETH = ethPerToken0

    const ethPerToken1 = findEthPerToken(token1 as Token, false)
    const usdPerToken1 = bundle.ethPrice.times(ethPerToken1)
    token1.derivedETH = ethPerToken1

    // get new amounts of USD and ETH for tracking
    const amountTotalETH = ethPerToken1.times(token1Amount).plus(ethPerToken0.times(token0Amount))
    const amountTotalUSD = usdPerToken1.times(token1Amount).plus(usdPerToken0.times(token0Amount))

    // update token0 volume and liquidity stats
    token0.totalLiquidityToken = token0.totalLiquidityToken.plus(token0AmountSigned)
    token0.totalLiquidityETH = token0.totalLiquidityToken.times(ethPerToken0)
    token0.tradeVolumeToken = token0.tradeVolumeToken.plus(token0Amount)
    token0.tradeVolumeETH = token0.tradeVolumeETH.plus(token0Amount.times(ethPerToken0))
    token0.tradeVolumeUSD = token0.tradeVolumeUSD.plus(token0AmountSigned.times(usdPerToken0))

    // update token1 volume and liquidity stats
    token1.totalLiquidityToken = token1.totalLiquidityToken.plus(token1AmountSigned)
    token1.totalLiquidityETH = token1.totalLiquidityToken.times(ethPerToken1)
    token1.tradeVolumeToken = token1.tradeVolumeToken.plus(token1Amount)
    token1.tradeVolumeETH = token1.tradeVolumeETH.plus(token1Amount.times(ethPerToken1))
    token1.tradeVolumeUSD = token0.tradeVolumeUSD.plus(token1AmountSigned.times(usdPerToken1))

    // update exchange volume data
    exchange.tradeVolumeETH = exchange.tradeVolumeETH.plus(amountTotalETH)
    exchange.tradeVolumeUSD = exchange.tradeVolumeUSD.plus(amountTotalUSD)
    exchange.combinedBalanceETH = exchange.combinedBalanceETH
      .plus(token0AmountSigned.times(ethPerToken0))
      .plus(token1AmountSigned.times(ethPerToken1))
    exchange.save()
    token0.save()
    token1.save()

    /****** Update User ******/
    const userID = event.params.sender.toHex()
    let user = User.load(userID)
    if (user == null) {
      user = new User(userID)
      user.save()
    }

    /****** Update UserExchangeData ******/
    const userExchangeID = exchange.id
      .toString()
      .concat('-')
      .concat(event.params.sender.toHex())
    let userExchangeData = UserExchangeData.load(userExchangeID)
    if (userExchangeData == null) {
      createUserDataEntity(userExchangeID, event.params.sender, event.address)
      userExchangeData = UserExchangeData.load(userExchangeID) // reload here
    }

    if (event.params.tokenIn.toHexString() == token0.id) {
      userExchangeData.token0Sold = userExchangeData.token0Sold.plus(token0Amount)
      userExchangeData.token1Bought = userExchangeData.token1Bought.plus(token1Amount)
    } else {
      userExchangeData.token1Sold = userExchangeData.token1Sold.plus(token1Amount)
      userExchangeData.token0Bought = userExchangeData.token0Bought.plus(token0Amount)
    }
    userExchangeData.save()

    // update global values and entity counters
    const uniswap = Uniswap.load('1')
    uniswap.totalVolumeUSD = uniswap.totalVolumeUSD.plus(amountTotalUSD)
    uniswap.totalVolumeETH = uniswap.totalVolumeETH.plus(amountTotalETH)
    uniswap.totalLiquidityUSD = uniswap.totalLiquidityETH.times(bundle.ethPrice)
    uniswap.exchangeHistoryEntityCount = uniswap.exchangeHistoryEntityCount.plus(oneBigInt())
    uniswap.uniswapHistoryEntityCount = uniswap.uniswapHistoryEntityCount.plus(oneBigInt())
    uniswap.tokenHistoryEntityCount = uniswap.tokenHistoryEntityCount.plus(oneBigInt())
    uniswap.txCount = uniswap.txCount.plus(oneBigInt())
    uniswap.save()

    // update global historical data
    const uniswapHistoricalData = new UniswapHistoricalData(uniswap.uniswapHistoryEntityCount.toString())
    uniswapHistoricalData.timestamp = event.block.timestamp.toI32()
    uniswapHistoricalData.totalVolumeUSD = uniswap.totalVolumeUSD
    uniswapHistoricalData.totalVolumeETH = uniswap.totalVolumeETH
    uniswapHistoricalData.totalLiquidityUSD = uniswap.totalLiquidityUSD
    uniswapHistoricalData.totalLiquidityETH = uniswap.totalLiquidityETH
    uniswapHistoricalData.txCount = uniswap.txCount
    uniswapHistoricalData.save()

    // get ids for date related entities
    const timestamp = event.block.timestamp.toI32()
    const dayID = timestamp / 86400
    const dayStartTimestamp = dayID * 86400
    const dayExchangeID = event.address
      .toHexString()
      .concat('-')
      .concat(BigInt.fromI32(dayID).toString())

    // update global day data
    let uniswapDayData = UniswapDayData.load(dayID.toString())
    if (uniswapDayData == null) {
      createUniswapDayData(dayID, dayStartTimestamp)
      uniswapDayData = UniswapDayData.load(dayID.toString())
    }
    uniswapDayData.dailyVolumeUSD = uniswapDayData.dailyVolumeUSD.plus(amountTotalUSD)
    uniswapDayData.dailyVolumeETH = uniswapDayData.dailyVolumeETH.plus(amountTotalETH)
    uniswapDayData.totalVolumeUSD = uniswap.totalVolumeUSD
    uniswapDayData.totalLiquidityUSD = uniswap.totalLiquidityUSD
    uniswapDayData.totalLiquidityETH = uniswap.totalLiquidityETH
    uniswapDayData.txCount = uniswap.txCount
    uniswapDayData.save()

    // create swap event and add to transaction
    const swapId = uniswap.swapCount
    uniswap.swapCount = uniswap.swapCount.plus(oneBigInt())
    const swapEvent = new SwapEvent(swapId.toString())
    swapEvent.exchange = exchange.id
    swapEvent.timestamp = event.block.timestamp.toI32()
    if (event.params.tokenIn.toHexString() == token0.id) {
      // token in is 0
      const tokenInAmount = convertTokenToDecimal(event.params.amountIn, token0.decimals)
      const tokenOutAmount = convertTokenToDecimal(event.params.amountOut, token1.decimals)
      swapEvent.amountSold = tokenInAmount
      swapEvent.amountBought = tokenOutAmount
      swapEvent.tokenBought = token1.id
      swapEvent.tokenSold = token0.id
    } else {
      // token in is 1
      const tokenInAmount = convertTokenToDecimal(event.params.amountIn, token1.decimals)
      const tokenOutAmount = convertTokenToDecimal(event.params.amountOut, token0.decimals)
      swapEvent.amountSold = tokenInAmount
      swapEvent.amountBought = tokenOutAmount
      swapEvent.tokenBought = token0.id
      swapEvent.tokenSold = token1.id
    }
    swapEvent.valueUSD = amountTotalUSD
    swapEvent.valueETH = amountTotalETH
    swapEvent.logIndex = event.logIndex
    swapEvent.to = event.params.to
    swapEvent.sender = event.params.sender
    swapEvent.save()

    // update transaction with swap event
    const txId = event.transaction.hash.toHexString()
    const transaction = Transaction.load(txId.toString())
    const newSwaps = transaction.swaps
    newSwaps.push(swapEvent.id)
    transaction.swaps = newSwaps
    transaction.save()

    // update exchange historical data
    const exchangeHistoricalData = new ExchangeHistoricalData(uniswap.exchangeHistoryEntityCount.toString())
    exchangeHistoricalData.exchangeAddress = event.address
    exchangeHistoricalData.timestamp = event.block.timestamp.toI32()
    exchangeHistoricalData.type = 'swap'
    updateExchangeHistorical(exchangeHistoricalData, exchange as Exchange)

    // update exchange day data
    let exchangeDayData = ExchangeDayData.load(dayExchangeID)
    if (exchangeDayData == null) {
      createExchangeDayData(dayExchangeID as string, dayStartTimestamp as i32, event.address)
    }
    exchangeDayData = ExchangeDayData.load(dayExchangeID)
    updateExchangeDayData(exchangeDayData as ExchangeDayData, exchange as Exchange)
    exchangeDayData.dailyVolumeToken0 = exchangeDayData.dailyVolumeToken0.plus(token0Amount)
    exchangeDayData.dailyVolumeToken1 = exchangeDayData.dailyVolumeToken1.plus(token1Amount)
    exchangeDayData.dailyVolumeUSD = exchangeDayData.dailyVolumeUSD.plus(amountTotalUSD)
    exchangeDayData.save()

    // update token0 historical data
    const tokenHistoricalData0 = new TokenHistoricalData(uniswap.tokenHistoryEntityCount.toString().concat('-token0'))
    updateTokenHistoricalData(
      tokenHistoricalData0 as TokenHistoricalData,
      token0 as Token,
      event.block.timestamp.toI32()
    )

    // update token1 historical data
    const tokenHistoricalData1 = new TokenHistoricalData(uniswap.tokenHistoryEntityCount.toString().concat('-token1'))
    updateTokenHistoricalData(
      tokenHistoricalData1 as TokenHistoricalData,
      token1 as Token,
      event.block.timestamp.toI32()
    )

    // update token0 day data
    const token0DayID = token0.id
      .toString()
      .concat('-')
      .concat(BigInt.fromI32(dayID).toString())
    let token0DayData = TokenDayData.load(token0DayID)
    if (token0DayData == null) {
      createTokenDayData(token0DayID as string, token0 as Token, dayStartTimestamp as i32)
    }
    token0DayData = TokenDayData.load(token0DayID)
    updateTokenDayData(dayExchangeID, dayID, token0DayData as TokenDayData, token0 as Token)
    token0DayData.dailyVolumeToken = token0DayData.dailyVolumeToken.plus(token0Amount)
    token0DayData.dailyVolumeETH = token0DayData.dailyVolumeETH.plus(token0Amount.times(ethPerToken0))
    token0DayData.dailyVolumeUSD = token0DayData.dailyVolumeUSD.plus(
      token0Amount.times(ethPerToken0).times(bundle.ethPrice)
    )
    token0DayData.save()

    // update token1 day data
    const token1DayID = token1.id
      .toString()
      .concat('-')
      .concat(BigInt.fromI32(dayID).toString())
    let token1DayData = TokenDayData.load(token1DayID)
    if (token1DayData == null) {
      createTokenDayData(token1DayID as string, token1 as Token, dayStartTimestamp as i32)
    }
    token1DayData = TokenDayData.load(token1DayID)
    updateTokenDayData(dayExchangeID, dayID, token1DayData as TokenDayData, token1 as Token)
    token1DayData.dailyVolumeToken = token1DayData.dailyVolumeToken.plus(token1Amount)
    token1DayData.dailyVolumeETH = token1DayData.dailyVolumeETH.plus(token1Amount.times(ethPerToken1))
    token1DayData.dailyVolumeUSD = token1DayData.dailyVolumeUSD.plus(
      token1Amount.times(ethPerToken1).times(bundle.ethPrice)
    )
    token1DayData.save()
  }
}
