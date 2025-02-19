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
        address: Address.fromString('0x760afe86e5de5fa0ee542fc7b7b713e1c5425701'),
        symbol: 'WMON',
        name: 'Wrapped Monad',
        decimals: BigInt.fromI32(18),
      },
      {
        address: Address.fromString('0xfbc2d240a5ed44231aca3a9e9066bc4b33f01149'),
        symbol: 'USDT',
        name: 'Tether USD',
        decimals: BigInt.fromI32(6),
      },
      {
        address: Address.fromString('0xf817257fed379853cde0fa4f97ab987181b1e5ea'),
        symbol: 'USDC',
        name: 'USD Coin',
        decimals: BigInt.fromI32(6),
      },
      {
        address: Address.fromString('0xb5a30b0fdc5ea94a52fdc42e3e9760cb8449fb37'),
        symbol: 'WETH',
        name: 'Wrapped ETH',
        decimals: BigInt.fromI32(18),
      },
      {
        address: Address.fromString('0xcaf9244a9d4a79c3229cb354a1919961fa0122b4'),
        symbol: 'TCHOG',
        name: 'TestChog',
        decimals: BigInt.fromI32(18),
      },
      {
        address: Address.fromString('0xa6afcddcd245f902effbf679983ec7f89af4de4d'),
        symbol: 'TMOY',
        name: 'TestMoyaki',
        decimals: BigInt.fromI32(18),
      },
      {
        address: Address.fromString('0xa5020ecbe21d6ef4bf5ab1455bc7f1ad280711c6'),
        symbol: 'TMOL',
        name: 'TestMolandak',
        decimals: BigInt.fromI32(18),
      },
      {
        address: Address.fromString('0x0f0bdebf0f83cd1ee3974779bcb7315f9808c714'),
        symbol: 'DAK',
        name: 'Molandak',
        decimals: BigInt.fromI32(18),
      },
      {
        address: Address.fromString('0xfe140e1dce99be9f4f15d657cd9b7bf622270c50'),
        symbol: 'YAKI',
        name: 'Moyaki',
        decimals: BigInt.fromI32(18),
      },
      {
        address: Address.fromString('0xc188d44ef48a7657697157fd511b8f6cc1a864d8'),
        symbol: 'DOGFOOD',
        name: "Anago's Dog Food",
        decimals: BigInt.fromI32(18),
      },
      {
        address: Address.fromString('0x700c25b191528bbf1dabb2647f073493b4175461'),
        symbol: 'DEER',
        name: 'Deercoin',
        decimals: BigInt.fromI32(18),
      },
      {
        address: Address.fromString('0x88b8e2161dedc77ef4ab7585569d2415a1c1055d'),
        symbol: 'USDT',
        name: 'Tether USD',
        decimals: BigInt.fromI32(6),
      },
      {
        address: Address.fromString('0xe0590015a873bf326bd645c3e1266d4db41c4e6b'),
        symbol: 'CHOG',
        name: 'Chog',
        decimals: BigInt.fromI32(18),
      },
      {
        address: Address.fromString('0xcf5a6076cfa32686c0df13abada2b40dec133f1d'),
        symbol: 'WBTC',
        name: 'Wrapped BTC',
        decimals: BigInt.fromI32(8),
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
