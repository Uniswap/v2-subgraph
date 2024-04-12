import { Address, BigInt } from '@graphprotocol/graph-ts'

// Initialize a Token Definition with the attributes
export class TokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt

  // Get all tokens with a static defintion
  static getStaticDefinitions(): Array<TokenDefinition> {
    const staticDefinitions: Array<TokenDefinition> = [
      {
        address: Address.fromString('0xe0b7927c4af23765cb51314a0e0521a9645f0e2a'),
        symbol: 'DGD',
        name: 'DGD',
        decimals: BigInt.fromI32(9),
      },
      {
        address: Address.fromString('0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9'),
        symbol: 'AAVE',
        name: 'Aave Token',
        decimals: BigInt.fromI32(18),
      },
      {
        address: Address.fromString('0xeb9951021698b42e4399f9cbb6267aa35f82d59d'),
        symbol: 'LIF',
        name: 'Lif',
        decimals: BigInt.fromI32(18),
      },
      {
        address: Address.fromString('0xbdeb4b83251fb146687fa19d1c660f99411eefe3'),
        symbol: 'SVD',
        name: 'savedroid',
        decimals: BigInt.fromI32(18),
      },
      {
        address: Address.fromString('0xbb9bc244d798123fde783fcc1c72d3bb8c189413'),
        symbol: 'TheDAO',
        name: 'TheDAO',
        decimals: BigInt.fromI32(16),
      },
      {
        address: Address.fromString('0x38c6a68304cdefb9bec48bbfaaba5c5b47818bb2'),
        symbol: 'HPB',
        name: 'HPBCoin',
        decimals: BigInt.fromI32(18),
      },
    ]
    return staticDefinitions
  }

  // Helper for hardcoded tokens
  static fromAddress(tokenAddress: Address): TokenDefinition | null {
    const staticDefinitions = this.getStaticDefinitions()
    const tokenAddressHex = tokenAddress.toHexString()

    // Search the definition using the address
    for (let i = 0; i < staticDefinitions.length; i++) {
      const staticDefinition = staticDefinitions[i]
      if (staticDefinition.address.toHexString() == tokenAddressHex) {
        return staticDefinition
      }
    }

    // If not found, return null
    return null
  }
}
