import { assert, test, newMockEvent, dataSourceMock, createMockedFunction } from 'matchstick-as/assembly/index'
import { describe, test } from 'matchstick-as/assembly/index'
import { log } from 'matchstick-as/assembly/log'
import { PairCreated } from '../src/types/Factory/Factory'
import { Address, BigInt, ethereum } from '@graphprotocol/graph-ts'
import { USDC_ADDRESS, USDC_WETH_PAIR, WETH_ADDRESS } from '../src/mappings/pricing'
import { handleNewPair } from '../src/mappings/factory'
import { FACTORY_ADDRESS } from '../src/mappings/helpers'

describe('handleNewPair', () => {
  test('success - first pair created', () => {
    const mockEvent = newMockEvent()
    const token0Address = Address.fromString(USDC_ADDRESS)
    const token1Address = Address.fromString(WETH_ADDRESS)
    const pairAddress = Address.fromString(USDC_WETH_PAIR)
    const parameters = [
      new ethereum.EventParam('token0', ethereum.Value.fromAddress(token0Address)),
      new ethereum.EventParam('token1', ethereum.Value.fromAddress(token1Address)),
      new ethereum.EventParam('pair', ethereum.Value.fromAddress(pairAddress)),
    ]
    const pairCreatedEvent = new PairCreated(
      mockEvent.address,
      mockEvent.logIndex,
      mockEvent.transactionLogIndex,
      mockEvent.logType,
      mockEvent.block,
      mockEvent.transaction,
      parameters,
      mockEvent.receipt,
    )

    // create mock contract calls for token0
    createMockedFunction(token0Address, 'symbol', 'symbol():(string)').returns([ethereum.Value.fromString('USDC')])
    createMockedFunction(token0Address, 'name', 'name():(string)').returns([ethereum.Value.fromString('USD Coin')])
    createMockedFunction(token0Address, 'totalSupply', 'totalSupply():(uint256)').returns([
      ethereum.Value.fromUnsignedBigInt(BigInt.fromString('25533437250258945')),
    ])
    createMockedFunction(token0Address, 'decimals', 'decimals():(uint32)').returns([
      ethereum.Value.fromUnsignedBigInt(BigInt.fromString('6')),
    ])

    // create mock contract calls for token1
    createMockedFunction(token1Address, 'symbol', 'symbol():(string)').returns([ethereum.Value.fromString('WETH')])
    createMockedFunction(token1Address, 'name', 'name():(string)').returns([ethereum.Value.fromString('Wrapped Ether')])
    createMockedFunction(token1Address, 'totalSupply', 'totalSupply():(uint256)').returns([
      ethereum.Value.fromUnsignedBigInt(BigInt.fromString('3074822929070547835778839')),
    ])
    createMockedFunction(token1Address, 'decimals', 'decimals():(uint32)').returns([
      ethereum.Value.fromUnsignedBigInt(BigInt.fromString('18')),
    ])

    handleNewPair(pairCreatedEvent)

    assert.fieldEquals('UniswapFactory', FACTORY_ADDRESS, 'pairCount', '1')
    assert.fieldEquals('UniswapFactory', FACTORY_ADDRESS, 'totalVolumeETH', '0')
    assert.fieldEquals('UniswapFactory', FACTORY_ADDRESS, 'totalLiquidityETH', '0')
    assert.fieldEquals('UniswapFactory', FACTORY_ADDRESS, 'totalVolumeUSD', '0')
    assert.fieldEquals('UniswapFactory', FACTORY_ADDRESS, 'untrackedVolumeUSD', '0')
    assert.fieldEquals('UniswapFactory', FACTORY_ADDRESS, 'totalLiquidityUSD', '0')
    assert.fieldEquals('UniswapFactory', FACTORY_ADDRESS, 'txCount', '0')

    assert.fieldEquals('Bundle', '1', 'ethPrice', '0')

    assert.fieldEquals('Token', USDC_ADDRESS, 'symbol', 'USDC')
    assert.fieldEquals('Token', USDC_ADDRESS, 'name', 'USD Coin')
    assert.fieldEquals('Token', USDC_ADDRESS, 'totalSupply', '25533437250258945')
    assert.fieldEquals('Token', USDC_ADDRESS, 'decimals', '6')
    assert.fieldEquals('Token', USDC_ADDRESS, 'derivedETH', '0')
    assert.fieldEquals('Token', USDC_ADDRESS, 'tradeVolume', '0')
    assert.fieldEquals('Token', USDC_ADDRESS, 'tradeVolumeUSD', '0')
    assert.fieldEquals('Token', USDC_ADDRESS, 'untrackedVolumeUSD', '0')
    assert.fieldEquals('Token', USDC_ADDRESS, 'totalLiquidity', '0')
    assert.fieldEquals('Token', USDC_ADDRESS, 'txCount', '0')

    assert.fieldEquals('Token', WETH_ADDRESS, 'symbol', 'WETH')
    assert.fieldEquals('Token', WETH_ADDRESS, 'name', 'Wrapped Ether')
    assert.fieldEquals('Token', WETH_ADDRESS, 'totalSupply', '3074822929070547835778839')
    assert.fieldEquals('Token', WETH_ADDRESS, 'decimals', '18')
    assert.fieldEquals('Token', WETH_ADDRESS, 'derivedETH', '0')
    assert.fieldEquals('Token', WETH_ADDRESS, 'tradeVolume', '0')
    assert.fieldEquals('Token', WETH_ADDRESS, 'tradeVolumeUSD', '0')
    assert.fieldEquals('Token', WETH_ADDRESS, 'untrackedVolumeUSD', '0')
    assert.fieldEquals('Token', WETH_ADDRESS, 'totalLiquidity', '0')
    assert.fieldEquals('Token', WETH_ADDRESS, 'txCount', '0')

    assert.fieldEquals('Pair', USDC_WETH_PAIR, 'token0', USDC_ADDRESS)
    assert.fieldEquals('Pair', USDC_WETH_PAIR, 'token1', WETH_ADDRESS)
    assert.fieldEquals('Pair', USDC_WETH_PAIR, 'liquidityProviderCount', '0')
    assert.fieldEquals('Pair', USDC_WETH_PAIR, 'createdAtTimestamp', mockEvent.block.timestamp.toString())
    assert.fieldEquals('Pair', USDC_WETH_PAIR, 'createdAtBlockNumber', mockEvent.block.number.toString())
    assert.fieldEquals('Pair', USDC_WETH_PAIR, 'txCount', '0')
    assert.fieldEquals('Pair', USDC_WETH_PAIR, 'reserve0', '0')
    assert.fieldEquals('Pair', USDC_WETH_PAIR, 'reserve1', '0')
    assert.fieldEquals('Pair', USDC_WETH_PAIR, 'trackedReserveETH', '0')
    assert.fieldEquals('Pair', USDC_WETH_PAIR, 'reserveETH', '0')
    assert.fieldEquals('Pair', USDC_WETH_PAIR, 'reserveUSD', '0')
    assert.fieldEquals('Pair', USDC_WETH_PAIR, 'totalSupply', '0')
    assert.fieldEquals('Pair', USDC_WETH_PAIR, 'volumeToken0', '0')
    assert.fieldEquals('Pair', USDC_WETH_PAIR, 'volumeToken1', '0')
    assert.fieldEquals('Pair', USDC_WETH_PAIR, 'volumeUSD', '0')
    assert.fieldEquals('Pair', USDC_WETH_PAIR, 'untrackedVolumeUSD', '0')
    assert.fieldEquals('Pair', USDC_WETH_PAIR, 'token0Price', '0')
    assert.fieldEquals('Pair', USDC_WETH_PAIR, 'token1Price', '0')
  })
})
