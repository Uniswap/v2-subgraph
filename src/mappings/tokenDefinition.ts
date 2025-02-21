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
      {
        address: Address.fromString('0xc8830e229066131080f06623129c145481d68c22'),
        symbol: 'USDC',
        name: 'USDC',
        decimals: BigInt.fromI32(6),
      },
      {
        address: Address.fromString('0xae1cbb015687e8d112013e154941567563c702fb'),
        symbol: 'aUSD',
        name: 'aprMON',
        decimals: BigInt.fromI32(18),
      },
      {
        address: Address.fromString('0x6fe981dbd557f81ff66836af0932cba535cbc343'),
        symbol: 'LINK',
        name: 'ChainLink Token',
        decimals: BigInt.fromI32(18),
      },
      {
        address: Address.fromString('0x61b0e2daf747c0d241a512f76b84bfd0db0a6e7a'),
        symbol: 'WETH',
        name: 'WETH',
        decimals: BigInt.fromI32(18),
      },
      {
        address: Address.fromString('0x5b54153100e40000f6821a7ea8101dc8f5186c2d'),
        symbol: 'SWETH',
        name: 'Swell Ethereum',
        decimals: BigInt.fromI32(18),
      },
      {
        address: Address.fromString('0x5c69ef952f10ec75cc4551b842c79b2c50cad831'),
        symbol: 'GM',
        name: 'GMONAD',
        decimals: BigInt.fromI32(18),
      },
      {
        address: Address.fromString('0x77317eaef8167e9698ff473e1f73b70b59d593f2'),
        symbol: 'ZORG',
        name: 'Zero Organization',
        decimals: BigInt.fromI32(18),
      },
      {
        address: Address.fromString('0x8b3bf8be7c196377bcbe5d1fc26e246b670da00d'),
        symbol: 'BERA',
        name: 'BERA',
        decimals: BigInt.fromI32(18),
      },
      {
        address: Address.fromString('0x8cf69eeb17f094bb37748db4b34380edf5ad4089'),
        symbol: 'sonad',
        name: 'sonic girl monad',
        decimals: BigInt.fromI32(18),
      },
      {
        address: Address.fromString('0x950b5d7dadfaf4c5d322a69e5b1d51670b1ea6a4'),
        symbol: 'MNDY',
        name: 'MOnadyy',
        decimals: BigInt.fromI32(18),
      },
      {
        address: Address.fromString('0x983a01a0808795b2f9cb93b5d2c82d1b79bdb641'),
        symbol: 'aUSD',
        name: 'aUSD',
        decimals: BigInt.fromI32(18),
      },
      {
        address: Address.fromString('0xada1cae393541cb4a8b7158d9dc2880e431d7e19'),
        symbol: 'UM',
        name: 'UNI MONAD',
        decimals: BigInt.fromI32(18),
      },
      {
        address: Address.fromString('0xb51aa5bfcc9c68e8ebf4ed42813e046290c70339'),
        symbol: 'WETH-PMock',
        name: 'WETH Primex Mock',
        decimals: BigInt.fromI32(18),
      },
      {
        address: Address.fromString('0xb9628178f5f6c37f2230e999c9ca6ca2987d55ec'),
        symbol: 'MC',
        name: 'MONAD CIRCLE',
        decimals: BigInt.fromI32(18),
      },
      {
        address: Address.fromString('0xe97d5789640756df455b6a8d4cd3d8f08745795f'),
        symbol: 'MEME',
        name: 'Meme Monad',
        decimals: BigInt.fromI32(18),
      },
      {
        address: Address.fromString('0xe9db3f1be5f082f43950603cbdaa4fdbf15a6f9a'),
        symbol: 'CMON',
        name: 'CYBER MONAD',
        decimals: BigInt.fromI32(18),
      },
      {
        address: Address.fromString('0xffa8435095313111b3b98fe9544246512cd3e4ff'),
        symbol: 'USDC-PMock',
        name: 'USDC Primex Mock',
        decimals: BigInt.fromI32(6),
      },
      {
        address: Address.fromString('0xffb8adc7ab9499b6474981b7d266c86ef4aae20b'),
        symbol: 'MOPE',
        name: 'Monad Pepe',
        decimals: BigInt.fromI32(18),
      },
      {
        address: Address.fromString('0xc393eb7ab1b56484245e0c1eda570bf6b2b3461d'),
        symbol: 'thdx',
        name: 'thdx',
        decimals: BigInt.fromI32(18),
      },
      {
        address: Address.fromString('0x5d876d73f4441d5f2438b1a3e2a51771b337f27a'),
        symbol: 'USDC',
        name: 'USD coin',
        decimals: BigInt.fromI32(6),
      },
      {
        address: Address.fromString('0x624d153d39814a0a1cf0b41cabf77cfa887cddaf'),
        symbol: 'CHDS',
        name: 'CHILL NADS',
        decimals: BigInt.fromI32(18),
      },
      {
        address: Address.fromString('0x04a9d9d4aea93f512a4c7b71993915004325ed38'),
        symbol: 'HEDGE',
        name: 'Hedgemony',
        decimals: BigInt.fromI32(18),
      },
      {
        address: Address.fromString('0x1fdfb12f2282cae0c4466807e34c8ea1f66717a6'),
        symbol: 'Trump',
        name: 'Trump Coin',
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
