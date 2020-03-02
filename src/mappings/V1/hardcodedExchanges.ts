export class AsExchange {
  symbol: string
  name: string
  tokenAddress: string
  tokenDecimals: i32
  exchangeAddress: string
}

export const hardcodedExchanges: Array<AsExchange> = [
  {
    symbol: "IAN",
    name: "IanCoin",
    tokenAddress: "0xd58ed19c0a8430b81a655e6c51a0165432f8162c",
    tokenDecimals: 18,
    exchangeAddress: "0xeb9c8cda45b97bb7a94f0a3ae19a83074ae3be12"
  },
  {
    symbol: "HALFETH",
    name: "Half Eth Per Token Coin",
    tokenAddress: "0x0a2c9aeb943d4be25c586ca1a3cc60df908db531",
    tokenDecimals: 18,
    exchangeAddress: "0x70b4aa67ffa8501105a85547a3074307762907ec"
  },
  {
    symbol: 'OCEAN',
    name: 'OceanToken',
    tokenAddress: '0xb9e52bc9c8f39ae354154130d861cba010e7cd7f',
    tokenDecimals: 18,
    exchangeAddress: '0x001c2063445fff5c11c6ac3784f15f27cfce6f29'
  },
  {
    symbol: 'ZIL',
    name: 'Zilliqa',
    tokenAddress: '0x405a656dc1b672800d21a15ef5539d4776f6654c',
    tokenDecimals: 12,
    exchangeAddress: '0x027f1f1765912800f88c450d73c12b45128cc34a'
  },
  {
    symbol: 'MGT',
    name: 'Morgan Governance Token',
    tokenAddress: '0x2b8108c6af2c8455315c15b0a6debc1a76cc6e93',
    tokenDecimals: 18,
    exchangeAddress: '0x03cc9c24b57882db433d20b01edf902fc8eb22fc'
  },
  {
    symbol: 'TEST',
    name: 'Test Tokens',
    tokenAddress: '0x26a5f48d4f34ebfbfdb08bcc22869bfb3214b100',
    tokenDecimals: 18,
    exchangeAddress: '0x03d3b6b5587298dae81dfd32a92aa212fcf969f2'
  },
  {
    symbol: 'SNX',
    name: 'Synthetix Network Token',
    tokenAddress: '0x3224908ba459cb3eeee35e95b9dd3de7a9e39598',
    tokenDecimals: 18,
    exchangeAddress: '0x044f0067779907121f752663e036009dffc4bb9f'
  },
  {
    symbol: 'test3-CM0',
    name: 'test3-CM0',
    tokenAddress: '0xb0cf9448bbd33e81a27515e8f7e2a3bdc1b98db8',
    tokenDecimals: 18,
    exchangeAddress: '0x048b49cda86c6dd51ae6ebd1c84d934258df6831'
  },
  {
    symbol: 'TEST',
    name: 'Test Tokens',
    tokenAddress: '0xa279cc8d1b2e3f42644babeafba991c751aea4bd',
    tokenDecimals: 18,
    exchangeAddress: '0x050a479c386e92f3197a8265f3001ad7a022eb04'
  },
  {
    symbol: 'test-CM0',
    name: 'test-CM0',
    tokenAddress: '0xda567cb14b0bca5ca28befd181e0e3a6930310b5',
    tokenDecimals: 18,
    exchangeAddress: '0x06d014475f84bb45b9cded1cf3a1b8fe3fbaf128'
  },
  {
    symbol: 'HUM',
    name: 'Humanity',
    tokenAddress: '0xbda3825689117bd5624d07345b7b8da5a5e0ef37',
    tokenDecimals: 18,
    exchangeAddress: '0x07076a03827e9a7aca229a1877c488eb2445c457'
  },
  {
    symbol: 'test3-CM0',
    name: 'test3-CM0',
    tokenAddress: '0x9b6503d21e8b3a8b42ec46040d1b09e09f39c5ea',
    tokenDecimals: 18,
    exchangeAddress: '0x078ffca13422b8f4732a6372eb971b148d64c574'
  },
  {
    symbol: 'LINK',
    name: 'ChainLink Token',
    tokenAddress: '0x01be23585060835e02b77ef475b0cc51aa1e0709',
    tokenDecimals: 18,
    exchangeAddress: '0x094aef967d361e2ae3af472718e231dc9134724f'
  },
  {
    symbol: 'DPP',
    name: 'DPP',
    tokenAddress: '0xfc08ea3659a007e2853aa939106e1b2bb541dd2b',
    tokenDecimals: 8,
    exchangeAddress: '0x09a4feef51d3e3944b1f7515740d6eb45a50921e'
  },
  {
    symbol: 'ZNG',
    name: 'ZenGoToken',
    tokenAddress: '0xdfdd4a7298ac0f9c5ed86a3fa027ec9c9377398b',
    tokenDecimals: 8,
    exchangeAddress: '0x09a5ef74286a68c4a2e4c6fae3a86e4807866d0d'
  },
  {
    symbol: 'BNB',
    name: 'Binance',
    tokenAddress: '0x7cd7ab633c62c59b4e6c093384ff581db9b42c6d',
    tokenDecimals: 18,
    exchangeAddress: '0x09f97f4aeac3eb3fe051a5b110709036e183d8d4'
  },
  {
    symbol: 'MANA',
    name: 'Decentraland',
    tokenAddress: '0x7dfe30762f1767a69b83f8080d094cc0414eeed5',
    tokenDecimals: 18,
    exchangeAddress: '0x0a1633745a9162268b8b3acd2010b961b43d2e89'
  },
  {
    symbol: 'UTT2',
    name: 'UniswapTestToken2',
    tokenAddress: '0x76a08e6ad6769ecb71b45affc9e454ed4c8cfcdc',
    tokenDecimals: 18,
    exchangeAddress: '0x0a2c3677c3b79521e8e92a9ea9c3d169b2d3419d'
  },
  {
    symbol: 'ooo',
    name: 'ooo',
    tokenAddress: '0x84d212ac7d68a602a27bae8b212436b81a405c5a',
    tokenDecimals: 18,
    exchangeAddress: '0x0bc8be90750f03c45814fd0c5b1663856e78f7f8'
  },
  {
    symbol: 'SIM',
    name: 'SimpleToken',
    tokenAddress: '0x1c73c83cbf5c39459292e7be82922d69f9d677e6',
    tokenDecimals: 18,
    exchangeAddress: '0x0c32a8c03e96347bab0d4caa8f936818e71a0fab'
  },
  {
    symbol: 'TESTCVL',
    name: 'TestCvl',
    tokenAddress: '0x3e39fa983abcd349d95aed608e798817397cf0d1',
    tokenDecimals: 18,
    exchangeAddress: '0x0df32619bbe4ceb6c56e1f27c520521669283e62'
  },
  {
    symbol: 'UTT',
    name: 'UniswapTestToken',
    tokenAddress: '0x4d2f95fd4c9d167c8bf0729abfa03017db4bd0d5',
    tokenDecimals: 18,
    exchangeAddress: '0x0e3b36958007006a3ba74e51940f1b5d08c9530c'
  },
  {
    symbol: 'WCK',
    name: 'Wrapped CryptoKitties',
    tokenAddress: '0xc58436b8bd99c2c66a5862516dc2c81d45ec8448',
    tokenDecimals: 18,
    exchangeAddress: '0x0edee7d9fc8bae960e25f00970cc0c8fc65c291a'
  },
  {
    symbol: 'PANT',
    name: 'Panvala pan (test)',
    tokenAddress: '0xa6208407afa5b0995421ff608dd84eaaa4c71ae4',
    tokenDecimals: 18,
    exchangeAddress: '0x103bf69e174081321de44cba78f220f5d30931e8'
  },
  {
    symbol: 'uknc',
    name: 'UKNC',
    tokenAddress: '0xf5fa5b5fed2727a0e44ac67f6772e97977aa358b',
    tokenDecimals: 18,
    exchangeAddress: '0x13fbe25404eb11cf03397224f18e592875887823'
  },
  {
    symbol: 'TRINKBY',
    name: 'TESTRINKEBY',
    tokenAddress: '0x619b84e3ee0a127b1a64b7a0519fd051d3a30a87',
    tokenDecimals: 18,
    exchangeAddress: '0x156de901a04896730571c7694473fc4387d6e118'
  },
  {
    symbol: 'TON',
    name: 'TOKEN',
    tokenAddress: '0xb793e259865eb14d2fab83a9627937f2e5ba5a9e',
    tokenDecimals: 18,
    exchangeAddress: '0x15cf2c8e187bc7d6aba2eb1aa6dc0ce84598610c'
  },
  {
    symbol: 'OMG',
    name: 'OmiseGo',
    tokenAddress: '0x732fba98dca813c3a630b53a8bfc1d6e87b1db65',
    tokenDecimals: 18,
    exchangeAddress: '0x160190ff19176ab27e0c59c8282bdb8078f1ae59'
  },
  {
    symbol: 'TAMP',
    name: 'Tampines',
    tokenAddress: '0xbdc5337cbe08f10952864c70bda83df83543d688',
    tokenDecimals: 100,
    exchangeAddress: '0x16549937d079f8040888d82520cb423f9831fea3'
  },
  {
    symbol: 'CKSCLASSIC',
    name: 'Cks Classic Edition 0',
    tokenAddress: '0xbcdd9030611e951c444a4b72d32e8f18c1a87cc9',
    tokenDecimals: 18,
    exchangeAddress: '0x17bded3fb30ed54813ad604d18753fa57e984b6e'
  },
  {
    symbol: 'usD',
    name: 'uniswap Dollar',
    tokenAddress: '0x48068f2dcc80377461c6fcb2f4c4b3d0b154a6cc',
    tokenDecimals: 18,
    exchangeAddress: '0x1876e7b6226babdba20a9eea8af6d6978c20a8b3'
  },
  {
    symbol: 'REP',
    name: 'Augur',
    tokenAddress: '0x930b647320f738d92f5647b2e5c4458497ce3c95',
    tokenDecimals: 18,
    exchangeAddress: '0x19fc308ff4f2dc79e02902dddfe45a2a9e40e55f'
  },
  {
    symbol: 'OCEAN',
    name: 'testUSDSToken2',
    tokenAddress: '0x133d701f9ebe88a007024bf65fe802be8f4229e2',
    tokenDecimals: 18,
    exchangeAddress: '0x1b0cc9f41e6aac488b1b51d8eb749251499bdcfd'
  },
  {
    symbol: 'SIM',
    name: 'SimpleToken',
    tokenAddress: '0xf6896f7211038c579feb5236baae25ed851f2ffb',
    tokenDecimals: 18,
    exchangeAddress: '0x1bf339004d066611752ca95ef0ee71cf0a327aa7'
  },
  {
    symbol: 'OCEAN',
    name: 'SampleToken4',
    tokenAddress: '0xd1d8f3cd9b2da27b719770797c664675b92e131d',
    tokenDecimals: 18,
    exchangeAddress: '0x1cd8e45268dd9ae3abaa0cb4c5921a317e00beeb'
  },
  {
    symbol: 'CE7',
    name: 'ACT Curation Engine',
    tokenAddress: '0xab25bba29b792559d7a81f1aece4bbf523e37d92',
    tokenDecimals: 4,
    exchangeAddress: '0x1ec504e900392cd81e7541449bf63932fe06b3b8'
  },
  {
    symbol: 'XQC',
    name: 'XQCoin',
    tokenAddress: '0xb2ec5d58acf674b9b4ae04b47f2cfe417613ab44',
    tokenDecimals: 6,
    exchangeAddress: '0x1ed3ca845fa8d4edadeeb5e13b812afde4a2655b'
  },
  {
    symbol: 'UUU',
    name: 'Uniswap Test',
    tokenAddress: '0x2bc0a9926a757443e92f9f1f7cb9062835cffd31',
    tokenDecimals: 18,
    exchangeAddress: '0x200cf24ce0defc9bd6f21419eaf23141da44776e'
  },
  {
    symbol: '<b>MORPH</b>',
    name: '<b>Morph</b> Token',
    tokenAddress: '0xd1ff5e233bab4879e28c00975eff24ca9c977fd5',
    tokenDecimals: 18,
    exchangeAddress: '0x2252f81d92524002d931b47160f54ae4f2a4d062'
  },
  {
    symbol: 'OPT',
    name: 'Option Token',
    tokenAddress: '0xfe433a707a13196cd7fd48736abf65922c48ea7e',
    tokenDecimals: 18,
    exchangeAddress: '0x235e02838b45f69ba529952859eab7bef7cb294d'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x9ab8bf1ea7855ded80863dfc2fd9d4558666b34f',
    tokenDecimals: 18,
    exchangeAddress: '0x23afc5496469c476f58eabc719ab6a502f278550'
  },
  {
    symbol: 'SIM',
    name: 'SimpleToken',
    tokenAddress: '0xf81b119eac3b1685070380fb6451a20593ab5f58',
    tokenDecimals: 18,
    exchangeAddress: '0x23d085e7944c75016dc767f04078b99ccc0cc62c'
  },
  {
    symbol: 'TEST',
    name: 'Test Tokens',
    tokenAddress: '0x064918867ef8c006ac146d5dcde058defb4974fc',
    tokenDecimals: 18,
    exchangeAddress: '0x24217dfae2af59ebf697ca234caeeba701809c14'
  },
  {
    symbol: 'PANT',
    name: 'Panvala pan (test)',
    tokenAddress: '0x4912d6abc68e4f02d1fdd6b79ed045c0a0baf772',
    tokenDecimals: 18,
    exchangeAddress: '0x25ead1e8e3a9c38321488bc5417c999e622e36ea'
  },
  {
    symbol: 'OMG',
    name: 'OMGToken',
    tokenAddress: '0x879884c3c46a24f56089f3bbbe4d5e38db5788c0',
    tokenDecimals: 18,
    exchangeAddress: '0x26c226ebb6104676e593f8a070ad6f25cda60f8d'
  },
  {
    symbol: 'wPAY',
    name: 'Wrapped PAY Token',
    tokenAddress: '0xff604fd2c116c0b1d03dd7422ab15c6a571c8bf3',
    tokenDecimals: 18,
    exchangeAddress: '0x27938c87c0b8a094a23778bd27e162223b6021d4'
  },
  {
    symbol: 'TCV',
    name: 'Terciv',
    tokenAddress: '0x7ddaf1e4d4f0f66ce6162e8ea361dc5d2d880054',
    tokenDecimals: 8,
    exchangeAddress: '0x27fa738b96842d3a7a7c28d9dcd27e1e4132c159'
  },
  {
    symbol: 'DTX',
    name: 'DTX',
    tokenAddress: '0x4e3f48091ca657375d2dc39152fe4d8687a3af4c',
    tokenDecimals: 10,
    exchangeAddress: '0x2aefe0e1cdf45435313c13400a4724c34d6a88cd'
  },
  {
    symbol: 'yToken_Sep30',
    name: 'yToken_USDETH_Sep30_0x6af0',
    tokenAddress: '0x9eb52b550403fd420e87e0c8931ee79f981820ff',
    tokenDecimals: 18,
    exchangeAddress: '0x2bfdf1815b7f92fa99dde2333c3e180b18facf2d'
  },
  {
    symbol: 'uOMG',
    name: 'UOMG',
    tokenAddress: '0x3983e204b12b3c02fb0638caf2cd406a62e0ead3',
    tokenDecimals: 18,
    exchangeAddress: '0x2c4bf6af904a7d87d91dbd2456955d63337b4661'
  },
  {
    symbol: 'OCEAN',
    name: 'testUSDSToken3',
    tokenAddress: '0x07030aadefaef6e53bf7a6773bbc187e86301d56',
    tokenDecimals: 18,
    exchangeAddress: '0x2cd5471b6a3fd7486278e78793dce76ea8f6ccce'
  },
  {
    symbol: 'ZRX',
    name: '0x Protocol',
    tokenAddress: '0x8de2f821bc97979b7171e7a6fe065b9e17f73b87',
    tokenDecimals: 18,
    exchangeAddress: '0x2e424b8331d229bf682e41a566f4474ea71c57a9'
  },
  {
    symbol: 'TEST',
    name: 'Test Tokens',
    tokenAddress: '0x5d830762a689c43331f97c1931a48ddd5b18b1c4',
    tokenDecimals: 18,
    exchangeAddress: '0x2e43bb08b66fcf15c65ad76e7429d3fef9820120'
  },
  {
    symbol: '0FUCKS',
    name: '0 Fucks Given Token',
    tokenAddress: '0x0857e498b1ead04f3fe0b1476babc6077a0eac6b',
    tokenDecimals: 18,
    exchangeAddress: '0x2f21e734209997e3832211f8f6fe4a2287bd0a6d'
  },
  {
    symbol: 'TON',
    name: 'TOKEN',
    tokenAddress: '0xa6c2174a93de94c3902e5a697edc72907093f5a0',
    tokenDecimals: 18,
    exchangeAddress: '0x31a29824ee4ae3b62ef88069807d05657f8573f8'
  },
  {
    symbol: 'yBTC_Nov2019',
    name: 'yBTC_Nov29_0x676',
    tokenAddress: '0x8d76b889c0400e51ed9bda7d927695d21031f657',
    tokenDecimals: 18,
    exchangeAddress: '0x32f4b190d8506e8ea0e7fba3db25f5839dc42998'
  },
  {
    symbol: 'MyBAT',
    name: 'Custom BAT',
    tokenAddress: '0x059f0a5f8276be0b0450e4814bda14a582cf5a3a',
    tokenDecimals: 18,
    exchangeAddress: '0x340ca93ea4e03dfc6664bc41817a91342baddbdc'
  },
  {
    symbol: 'TEST',
    name: 'Test Tokens',
    tokenAddress: '0x448b5475bc9352ce878b88692efa505e28107959',
    tokenDecimals: 18,
    exchangeAddress: '0x3495d50e683a2d7b9209a405777121fa35972552'
  },
  {
    symbol: 'TST',
    name: 'TEST',
    tokenAddress: '0x5445bf3a2b7b230964dc818f785036e5c650ef03',
    tokenDecimals: 18,
    exchangeAddress: '0x39a8cda760b0b26bbfc29cdc8c49b6df2eb3402a'
  },
  {
    symbol: 'NT',
    name: 'New Token',
    tokenAddress: '0x5fd04c7a908ee864de95bbc886822306eda49d7e',
    tokenDecimals: 18,
    exchangeAddress: '0x3c06fc70fdeea0e0546bd439fa6e20ef22912b5f'
  },
  {
    symbol: 'AUTX',
    name: 'autx-utility-token',
    tokenAddress: '0xee877638d6ab7283ddc205da2ae515a619c1bc08',
    tokenDecimals: 18,
    exchangeAddress: '0x3cc3920e62f8022bee9c044af13f84339d56d5a3'
  },
  {
    symbol: 'TEST',
    name: 'Test Tokens',
    tokenAddress: '0x39b5c767db0c4e05595060a113e9997c9157491e',
    tokenDecimals: 18,
    exchangeAddress: '0x3d92bc6095870eae368905168a83598f25daa817'
  },
  {
    symbol: 'TEST',
    name: 'Test Tokens',
    tokenAddress: '0x2e2ad0884b975f9595b23c2bfba95972f86bd764',
    tokenDecimals: 18,
    exchangeAddress: '0x3dcb839dacd1db5a1fc1929f175334b56914ae3e'
  },
  {
    symbol: 'SALT',
    name: 'Salt',
    tokenAddress: '0x058832ca736ab027c12367e53915e34e87a6081b',
    tokenDecimals: 8,
    exchangeAddress: '0x3ee0892efb3a52259275ade95b25077dcfedec43'
  },
  {
    symbol: 'OCEAN',
    name: 'OceanToken',
    tokenAddress: '0xcc4d8ecfa6a5c1a84853ec5c0c08cc54cb177a6a',
    tokenDecimals: 18,
    exchangeAddress: '0x416f1ac032d1eee743b18296ab958743b1e61e81'
  },
  {
    symbol: 'sETH',
    name: 'Synth sETH',
    tokenAddress: '0xa83abfdc9e8ee990c3c6c0f56a4b06e0faad583c',
    tokenDecimals: 18,
    exchangeAddress: '0x431295890a123c1542bc85f796fe3baf80dc0e25'
  },
  {
    symbol: 'USD0xaed',
    name: 'USDBTC_Nov29_0xaed',
    tokenAddress: '0x8155a7f42615e2b7ec602d1273b6e8e343b7997f',
    tokenDecimals: 18,
    exchangeAddress: '0x4545c57c00ddc96c9773ba1d97aa7bdf8b40f037'
  },
  {
    symbol: 'MT',
    name: 'Money Token',
    tokenAddress: '0x717c0067f65d0da41474be98a264e2f3714e198c',
    tokenDecimals: 18,
    exchangeAddress: '0x45562b30975192f21422ba361c0bccd1f6581013'
  },
  {
    symbol: 'RKWCC2',
    name: 'Rinkeby Wrapped Coffee Coin',
    tokenAddress: '0xa0857d98b167638081eef794625506f30cc07ef0',
    tokenDecimals: 18,
    exchangeAddress: '0x460faf0f38773dca4d67cce95603aa95d9535f84'
  },
  {
    symbol: 'SNX',
    name: 'Synthetix Network Token',
    tokenAddress: '0xcbbb17d9767bd57fbf4bbf8842e916bcb3826ec1',
    tokenDecimals: 18,
    exchangeAddress: '0x466d5e8cd72ddd2c30d5e0e192fa2f05d79b9157'
  },
  {
    symbol: 'GLD',
    name: 'GUILD Governance',
    tokenAddress: '0x526fe57016fe6a0b5d2a3da298de331ae91feb68',
    tokenDecimals: 18,
    exchangeAddress: '0x47ca69c3387ced671981da0e4ce57cb9ed9ea0aa'
  },
  {
    symbol: 'WCW',
    name: 'Wrapped CheezeWizards',
    tokenAddress: '0xf832fce842e79f69f8e3961e095a00b1eb1f849c',
    tokenDecimals: 18,
    exchangeAddress: '0x480f0946c509b13c28e84bfe31a4ec3fe7b78958'
  },
  {
    symbol: 'OPT',
    name: 'Option Token',
    tokenAddress: '0x5ce2240519b7fdb12bfd4de2d8a14dbeacc0fc83',
    tokenDecimals: 18,
    exchangeAddress: '0x48c68b5ffc185619b61088227905533df7c1f707'
  },
  {
    symbol: 'test-CM0',
    name: 'test-CM0',
    tokenAddress: '0xb684affd8c37ca03ad0a5061f8f86cb1f2d2ad7e',
    tokenDecimals: 18,
    exchangeAddress: '0x4b367441028c0dcee58fb3d0e50d7a933ae0a8fc'
  },
  {
    symbol: 'GST1',
    name: 'Gastoken.io',
    tokenAddress: '0x88d60255f917e3eb94eae199d827dad837fac4cb',
    tokenDecimals: 2,
    exchangeAddress: '0x4b8576335a365c2b68a97b684ea4e145c88a8743'
  },
  {
    symbol: 'ZRX',
    name: '0x',
    tokenAddress: '0xddea378a6ddc8afec82c36e9b0078826bf9e68b6',
    tokenDecimals: 18,
    exchangeAddress: '0x4dcf4017ffbffabb4f8f8378d6c53286590d4625'
  },
  {
    symbol: 'OCEAN',
    name: 'OceanToken',
    tokenAddress: '0xc4d366836ba70bd8eac2591db3340a6182944fbf',
    tokenDecimals: 18,
    exchangeAddress: '0x4f16a37e5f4a1d5b3bc04927a2ae4c6dbbe868c6'
  },
  {
    symbol: 'FIXED',
    name: 'Example Fixed Supply Token',
    tokenAddress: '0x9fa96f465a75837c310dfb4e50dff5b15cc11131',
    tokenDecimals: 18,
    exchangeAddress: '0x507484e1432308efb26adc346c3f81b40823ff5e'
  },
  {
    symbol: 'SIM',
    name: 'SimpleToken',
    tokenAddress: '0xe1ab96d9e4fd81bae04d4db7d78144570e7fa8bb',
    tokenDecimals: 18,
    exchangeAddress: '0x55f3a5455648ffc089f04e45a54806921f868110'
  },
  {
    symbol: 'JCD',
    name: 'J.Chan Dollars',
    tokenAddress: '0xadb5364643f52771afeb52a74be6c21f1ba24342',
    tokenDecimals: 9,
    exchangeAddress: '0x56b238d96150324c98a431eb0d7f326da307e033'
  },
  {
    symbol: 'USD0x85a0',
    name: 'USDBTC_Dec31_0x85a0',
    tokenAddress: '0x4cf6206acf8e2b0124a7574cd2894c79e5870ce5',
    tokenDecimals: 18,
    exchangeAddress: '0x5773153e7a7d7fc81d00cd8365db5f94093d7728'
  },
  {
    symbol: 'OCEAN',
    name: 'OceanToken',
    tokenAddress: '0x51b642686f677f0240de4086cc8744e814f95638',
    tokenDecimals: 18,
    exchangeAddress: '0x58a44f3aa46781c372c377ed6f819969fc804746'
  },
  {
    symbol: 'WETH',
    name: 'Wrapped Ether',
    tokenAddress: '0xc778417e063141139fce010982780140aa0cd5ab',
    tokenDecimals: 18,
    exchangeAddress: '0x591a8905752c35e8bcbcdc3b34e86ff449f53423'
  },
  {
    symbol: 'TST',
    name: 'Test',
    tokenAddress: '0x443420e189d1c05c63ab1165a971fb14c5fb8e6a',
    tokenDecimals: 18,
    exchangeAddress: '0x593c4621bf8b5a438f945e177d065d45c676deee'
  },
  {
    symbol: 'OCEAN',
    name: 'OceanToken',
    tokenAddress: '0xbebcc947ce9e0c118cb9b0837609d75fb4e344bc',
    tokenDecimals: 18,
    exchangeAddress: '0x5bd76d5a8a0979391a163d571c0959b121d1ada4'
  },
  {
    symbol: 'BAT',
    name: 'Basic Attention Token',
    tokenAddress: '0xbf7a7169562078c96f0ec1a8afd6ae50f12e5a99',
    tokenDecimals: 18,
    exchangeAddress: '0x5cedbfc1c6041df417173aa552040d79f09d631c'
  },
  {
    symbol: 'SOCKSCLASSIC',
    name: 'Unisocks Classic Edition 0',
    tokenAddress: '0xf7a5a8a95491ec170738434963b649671b563b88',
    tokenDecimals: 18,
    exchangeAddress: '0x5eab6e8fd8a407f356fd7099a9980426374ef4f7'
  },
  {
    symbol: 'FSDAI',
    name: 'FutureSwap-DAI',
    tokenAddress: '0xad57a8763a8de109ef1dea18fb96c84317a63b0e',
    tokenDecimals: 18,
    exchangeAddress: '0x5f47727a17aa2914f44e3b314f7067bd13f54301'
  },
  {
    symbol: 'test-CM0',
    name: 'test-CM0',
    tokenAddress: '0x77ccd98f514a4728c7c9606a33a1d9861175810e',
    tokenDecimals: 18,
    exchangeAddress: '0x5fa4077128f91e2a0ae0b18617f8614bb184f3c5'
  },
  {
    symbol: 'udai',
    name: 'UDAI',
    tokenAddress: '0xfc9eeab29f19175c1e9f3a6dd1c57c7a6c999567',
    tokenDecimals: 18,
    exchangeAddress: '0x60d64ccfe888b9a7514057b9f4c07f3219d7f6bc'
  },
  {
    symbol: 'sUSD',
    name: 'Synth sUSD',
    tokenAddress: '0x99d2301579b7f1ea9fed495baa082b88e3e6fde1',
    tokenDecimals: 18,
    exchangeAddress: '0x6218b8fbaf17019639650cfc6db9ca17dc0e1847'
  },
  {
    symbol: 'GNT',
    name: 'Golem Network Token',
    tokenAddress: '0x61ebe523dd3fd053a50df31a55e1459e48c45bbc',
    tokenDecimals: 18,
    exchangeAddress: '0x632472db9318fc1e70c8453dc62bc5db65b09035'
  },
  {
    symbol: 'test-CM0',
    name: 'test-CM0',
    tokenAddress: '0x4c57dcb75dae82993922606585c13b682aaaf966',
    tokenDecimals: 18,
    exchangeAddress: '0x6464b42b25818ac49f5be64f33845d4593da234c'
  },
  {
    symbol: 'OHDAI:USDC:A',
    name: 'ohDAI 1:1 USDC A',
    tokenAddress: '0x2c963565978820a6914605e5ce9ca3483c644675',
    tokenDecimals: 6,
    exchangeAddress: '0x65b7b820980c6180faff0efc3cabb7f9fb32aefd'
  },
  {
    symbol: 'TRB',
    name: 'Tellor Tributes',
    tokenAddress: '0x724d1b69a7ba352f11d73fdbdeb7ff869cb22e19',
    tokenDecimals: 18,
    exchangeAddress: '0x65fbd361a7a74b64724123981b557984674b996c'
  },
  {
    symbol: 'AUTX',
    name: 'autx-utility-token',
    tokenAddress: '0x21379f3388ebb28ccca5a001f43e40257874ac6c',
    tokenDecimals: 18,
    exchangeAddress: '0x668e15084308279da01f0b8c9c1ff7a3543ef489'
  },
  {
    symbol: 'REP',
    name: 'Augur',
    tokenAddress: '0x6e894660985207feb7cf89faf048998c71e8ee89',
    tokenDecimals: 18,
    exchangeAddress: '0x67b67cb021a956d1956884b99ce2fb7dc835a080'
  },
  {
    symbol: 'TON',
    name: 'TOKEN',
    tokenAddress: '0x9f271c1cc4cba120e54ce1e331d641603920ed95',
    tokenDecimals: 18,
    exchangeAddress: '0x6880231335957d4cd520cf48638fe67f1b26cdf0'
  },
  {
    symbol: 'RDN',
    name: 'Raiden Token',
    tokenAddress: '0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6',
    tokenDecimals: 18,
    exchangeAddress: '0x6921328b09a7c4c4a7ab9ec5db4cac8d2a8f823e'
  },
  {
    symbol: 'USDC',
    name: 'USD Coin',
    tokenAddress: '0x4dbcdf9b62e891a7cec5a2568c3f4faf9e8abe2b',
    tokenDecimals: 6,
    exchangeAddress: '0x693967a12952e2da9486f4a9fb286cacddba4f6a'
  },
  {
    symbol: 'rt5',
    name: 'rt5',
    tokenAddress: '0x1a399c7a5810652a6452e1ead7019ae74e7ad419',
    tokenDecimals: 8,
    exchangeAddress: '0x6a0cfd48d7b01847e059891a17cadfa0e84d73d4'
  },
  {
    symbol: 'CE7',
    name: 'ACT Curation Engine',
    tokenAddress: '0x89ac41dfbe6fc299a3868c179ed8d60547dce871',
    tokenDecimals: 4,
    exchangeAddress: '0x6d17d17cdcfa6b057213be899eab70bf8ea03f0a'
  },
  {
    symbol: 'SIM',
    name: 'SimpleToken',
    tokenAddress: '0x264537d9448108d8bb8bdb7641c5c5763c2390c5',
    tokenDecimals: 18,
    exchangeAddress: '0x6d54d9a9e7b20fcf698b1f6707c071d6eb19bfb2'
  },
  {
    symbol: 'SIM',
    name: 'SimpleToken',
    tokenAddress: '0x7ca8a893acea3dcba9ee79c3ba1b7a40406e0223',
    tokenDecimals: 18,
    exchangeAddress: '0x6e2c52d10996490fba2f4590273884b8ce4a11a6'
  },
  {
    symbol: 'wPAY',
    name: 'Wrapped PAY Token',
    tokenAddress: '0xecdba5e120abf076b65cd480476bb2bdda28ad26',
    tokenDecimals: 18,
    exchangeAddress: '0x71e5561e12bc4a5dc21536193ec9d7f0c48b4a19'
  },
  {
    symbol: 'TRC',
    name: 'TESTRINKEBYCOT',
    tokenAddress: '0xb08c018fdeb2656ff21d90706ddc85f98f1e61ef',
    tokenDecimals: 18,
    exchangeAddress: '0x76f6bb4ff06b261621ccc3c34744dc788d7ef5e3'
  },
  {
    symbol: 'AUTX',
    name: 'autx-utility-token',
    tokenAddress: '0xd7d07a6a3300bd73f5168b8354735014108020d3',
    tokenDecimals: 18,
    exchangeAddress: '0x77d1dfe6ae6b4820c17f1b11d4fa319937200c9a'
  },
  {
    symbol: 'DAI',
    name: 'Dai Stablecoin',
    tokenAddress: '0xc7ad46e0b8a400bb3c915120d284aafba8fc4735',
    tokenDecimals: 18,
    exchangeAddress: '0x9c92a4582ad8e3d731a73b47b2c6e32cc0fe9cd9'
  },
  {
    symbol: 'GNO',
    name: 'Gnosis',
    tokenAddress: '0xd0dab4e640d95e9e8a47545598c33e31bdb53c7c',
    tokenDecimals: 18,
    exchangeAddress: '0x7c097ea1cfe3ac1ee3e1cda7da7267697d26c193'
  },
  {
    symbol: 'OCEAN',
    name: 'SampleToken',
    tokenAddress: '0x14b40533228ecf2caf6ffaccbd71b1341177dd55',
    tokenDecimals: 18,
    exchangeAddress: '0x7ca899cd3ec5cf2c868d21103e48db62f31f2123'
  },
  {
    symbol: 'sUSD',
    name: 'Synth sUSD',
    tokenAddress: '0x5cd55899568e9a3f414519691543fc6f9b1857c1',
    tokenDecimals: 18,
    exchangeAddress: '0x7d3f4d66f38a236f138bb1d370c4935ef9d7892a'
  },
  {
    symbol: 'yBTC_Oct2019',
    name: 'yBTC_Oct31_0x29ce',
    tokenAddress: '0xbd303c3f7c203c6a129eac1696473998d96e1deb',
    tokenDecimals: 18,
    exchangeAddress: '0x7f87f6ed1bfe212e89f516d6f2f754cc8289172e'
  },
  {
    symbol: 'TTP',
    name: 'Token Template',
    tokenAddress: '0x54403c1c6d67f0bccc9381058c965efe67e83832',
    tokenDecimals: 18,
    exchangeAddress: '0x8004a3416d611703a23024eb62dfb8488d38c1e3'
  },
  {
    symbol: 'MORPH',
    name: 'Morph Token',
    tokenAddress: '0xc3d693d8a52ef1eaf763298b0c0d1a6d5183422b',
    tokenDecimals: 18,
    exchangeAddress: '0x80b24fc02d9b9f72769fab28f240a15c9b54a1e1'
  },
  {
    symbol: 'MRQ',
    name: 'MarsEquity',
    tokenAddress: '0x0289260d7cbfe766e199f77d4c6dceeaaf2066a0',
    tokenDecimals: 18,
    exchangeAddress: '0x8165d899d1220bcc54c157bd5c0e6741f8f481ab'
  },
  {
    symbol: 'AUTX',
    name: 'autx-utility-token',
    tokenAddress: '0x9bad8960b2a6ca2e427e7e7f381cf4a941f3a0f3',
    tokenDecimals: 18,
    exchangeAddress: '0x81a75e2559c1da6370bbad4bd708026aedec962c'
  },
  {
    symbol: 'RLC',
    name: 'iEx.ec Network Token',
    tokenAddress: '0xf1e6ad3a7ef0c86c915f0fedf80ed851809bea90',
    tokenDecimals: 9,
    exchangeAddress: '0x820aeface8b1d74b4988bfba41db60016d58431b'
  },
  {
    symbol: 'FRG',
    name: 'Facerecog Governance',
    tokenAddress: '0x9b04439a09d6d2fc5b1f9fc9def751b1716aa902',
    tokenDecimals: 18,
    exchangeAddress: '0x82daad9071ca66f182949b9f04bbf214f097a716'
  },
  {
    symbol: 'DAI',
    name: 'DAI Stable Coin',
    tokenAddress: '0xef77ce798401dac8120f77dc2debd5455eddacf9',
    tokenDecimals: 18,
    exchangeAddress: '0x887b2182230903993b02952201308500eed70984'
  },
  {
    symbol: 'OMG',
    name: 'OmiseGO',
    tokenAddress: '0x00df91984582e6e96288307e9c2f20b38c8fece9',
    tokenDecimals: 18,
    exchangeAddress: '0x8a21d43291486cff530e0d888c060f97173b285b'
  },
  {
    symbol: 'dt2',
    name: 'dt2',
    tokenAddress: '0x71b33e8c94dd5bf617b91cff9e956c522bf8a12e',
    tokenDecimals: 18,
    exchangeAddress: '0x8c52265a4a5e73363dfc1dfb2d97503055b1f513'
  },
  {
    symbol: 'OCEAN',
    name: 'testUSDSToken3',
    tokenAddress: '0x534145aa0197b425ddf6dae181997beb5f3f41d1',
    tokenDecimals: 18,
    exchangeAddress: '0x8e86048f4869c51e2c392e87f432c378cf7aa2e2'
  },
  {
    symbol: 'OMG',
    name: 'OMGToken',
    tokenAddress: '0xd26114cd6ee289accf82350c8d8487fedb8a0c07',
    tokenDecimals: 18,
    exchangeAddress: '0x8ee0c9d0b443c554cf9451ca54db9397f2bcf0ee'
  },
  {
    symbol: 'TON',
    name: 'TOKEN',
    tokenAddress: '0x358a02d7a3f2e86f34749f179c396a7e05bd7a20',
    tokenDecimals: 18,
    exchangeAddress: '0x9027c8ee58c53c6630bbdd83fea0837a3d1863e4'
  },
  {
    symbol: 'FBF',
    name: 'Family Blockchain Fund',
    tokenAddress: '0xb6e6d715f4ab6d8b9e8cc55366ac3055ba5c72c9',
    tokenDecimals: 8,
    exchangeAddress: '0x90813afa13ea320e0cfcc99e16ca536a30c38e4f'
  },
  {
    symbol: 'TEST',
    name: 'Test Tokens',
    tokenAddress: '0x7373ae45aee452054ce03fa37d15bbb668866999',
    tokenDecimals: 18,
    exchangeAddress: '0x937a487cecd88407e37a6d0e6c65e808ad3d4c4a'
  },
  {
    symbol: 'MKR',
    name: 'Maker',
    tokenAddress: '0xf9ba5210f91d0474bd1e1dcdaec4c58e359aad85',
    tokenDecimals: 18,
    exchangeAddress: '0x93bb63afe1e0180d0ef100d774b473034fd60c36'
  },
  {
    symbol: 'DAI',
    name: 'DAI',
    tokenAddress: '0xef1bc8a8bbb546176e6fca4f6951f710396510b3',
    tokenDecimals: 18,
    exchangeAddress: '0x94723cb984914bae17cc2030c1dcc52eaee92b1a'
  },
  {
    symbol: 'LUB',
    name: 'Consensys Token',
    tokenAddress: '0xf3c583014ce2c2f51edce1410b7c5ec2ebb66487',
    tokenDecimals: 18,
    exchangeAddress: '0x96091c462b092e4b508c9163bcf5099b164ca9e8'
  },
  {
    symbol: 'DML',
    name: 'Example Fixed Supply Token',
    tokenAddress: '0x3195fd025302c62907886b1743405e14a89514b6',
    tokenDecimals: 18,
    exchangeAddress: '0x96cc5fc7deecab897bb5e11a54ae2b11d0aca096'
  },
  {
    symbol: 'X',
    name: 'PERO',
    tokenAddress: '0xcf71ff1990a85bc73609ca83f27d0e123253e447',
    tokenDecimals: 18,
    exchangeAddress: '0x9ab8bf1ea7855ded80863dfc2fd9d4558666b34f'
  },
  {
    symbol: 'BAT',
    name: 'Basic Attention Token',
    tokenAddress: '0xda5b056cfb861282b4b59d29c9b395bcc238d29b',
    tokenDecimals: 18,
    exchangeAddress: '0x9b913956036a3462330b0642b20d3879ce68b450'
  },
  {
    symbol: 'TRYb',
    name: 'BiLira',
    tokenAddress: '0x3196638becfba39ac0c7e5094ebf915203e46c6f',
    tokenDecimals: 6,
    exchangeAddress: '0x9c889a2057888df4b9e56dd936b2c42977119666'
  },
  {
    symbol: 'OPT',
    name: 'Option Token',
    tokenAddress: '0x8bc19f4dce1d6dbb0e6f2df7cb1038ee4aa1c891',
    tokenDecimals: 18,
    exchangeAddress: '0x9d26ee7db2f955b5df6aadb4ef320828790e972f'
  },
  {
    symbol: 'TON',
    name: 'TOKEN',
    tokenAddress: '0xe148294f1d978dd8d3b5dd65909015ec64dff6e1',
    tokenDecimals: 18,
    exchangeAddress: '0x9e79c413f04283d7044a667610652d7e6bc5492a'
  },
  {
    symbol: 'ANT',
    name: 'Aragon',
    tokenAddress: '0x35114d6332be1dde993fb17ec5bce49b6df4a59f',
    tokenDecimals: 18,
    exchangeAddress: '0xa19c740449c4e0c19c97585456ed7306464bca30'
  },
  {
    symbol: 'sETH',
    name: 'Synth sETH',
    tokenAddress: '0x3731ab0e9feee3ef0c427e874265e8f9a9111e27',
    tokenDecimals: 18,
    exchangeAddress: '0xa1b571d290fab6da975b7a95eef80788ba85f4c6'
  },
  {
    symbol: 'OCEAN',
    name: 'SampleToken',
    tokenAddress: '0xa9ed058b081421df9c53561bb02dd2b57bd386f5',
    tokenDecimals: 18,
    exchangeAddress: '0xa27fcc6f359543f518e3c2496e7b053e013f7d04'
  },
  {
    symbol: 'TEST',
    name: 'Test Tokens',
    tokenAddress: '0x4cb9008288900da1caef8a39d8b865a801a1696e',
    tokenDecimals: 18,
    exchangeAddress: '0xa2cb32a9e8be7f7ce76b7d2167e1fca5b18b3147'
  },
  {
    symbol: 'sETH',
    name: 'Synth sETH',
    tokenAddress: '0x3d349105500df8e694fb669b46ff1a9f24027a19',
    tokenDecimals: 18,
    exchangeAddress: '0xa494ebedfdbaa3e99730ce47d90538ecf67f910f'
  },
  {
    symbol: 'TEST',
    name: 'Test Tokens',
    tokenAddress: '0x09d95789098b53263218587387d819de39a3da16',
    tokenDecimals: 18,
    exchangeAddress: '0xa57ba45ceef50de3ab751880206347b409642b23'
  },
  {
    symbol: 'WBTC',
    name: 'Wrapped BTC',
    tokenAddress: '0x577d296678535e4903d59a4c929b718e1d575e0a',
    tokenDecimals: 8,
    exchangeAddress: '0xa877a64c1d419e4fbf74feb0e44b520c0bc03bf7'
  },
  {
    symbol: 'BABA',
    name: 'Synthetic Alibaba Equity Tokens',
    tokenAddress: '0x0574faba5460918a80556ebad20db1f869855957',
    tokenDecimals: 3,
    exchangeAddress: '0xab813cae21ba13c53299199fcc3cebcd3936c759'
  },
  {
    symbol: 'ZRX',
    name: '0x Protocol Token',
    tokenAddress: '0xf22e3f33768354c9805d046af3c0926f27741b43',
    tokenDecimals: 18,
    exchangeAddress: '0xabd44a1d1b9fb0f39fe1d1ee6b1e2a14916d067d'
  },
  {
    symbol: 'yToken_Dec31',
    name: 'yToken_USDETH_Dec31_0x767',
    tokenAddress: '0x24cae71c6b5951a25a0b9490016efd25eddd84c3',
    tokenDecimals: 18,
    exchangeAddress: '0xae6718d20bfcad9b5d428b1d566a5f60e3f3b0ec'
  },
  {
    symbol: 'HUM',
    name: 'Humanity',
    tokenAddress: '0x221c6ab27adfbe330f1126962da2bf3e12c284f6',
    tokenDecimals: 18,
    exchangeAddress: '0xaf0e2feeccede2d15824d3fd39f5b2f5c90e2373'
  },
  {
    symbol: 'DAI',
    name: 'Dai',
    tokenAddress: '0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea',
    tokenDecimals: 18,
    exchangeAddress: '0xaf51baaa766b65e8b3ee0c2c33186325ed01ebd5'
  },
  {
    symbol: 'OCEAN',
    name: 'OceanToken',
    tokenAddress: '0x56f598cf576d923d7723781cb90bfbf41d81089f',
    tokenDecimals: 18,
    exchangeAddress: '0xafd52ef3cb0ee6673ca5ebe0a25686313ff0c283'
  },
  {
    symbol: 'TEST',
    name: 'Test Tokens',
    tokenAddress: '0x5e87c5efe850f759c21e21e440e0fac53ca19ef8',
    tokenDecimals: 18,
    exchangeAddress: '0xafdc3e005c8ae97145a3a6f259a9c77853b6cde8'
  },
  {
    symbol: 'EDU',
    name: 'Education Token',
    tokenAddress: '0xb2711ec0f6729e3d126424787b6e18065e6a81a3',
    tokenDecimals: 18,
    exchangeAddress: '0xb10d4c8655c5fc9ec8e202cbf745347de93b3bfc'
  },
  {
    symbol: 'VIC',
    name: 'Victory',
    tokenAddress: '0xe2fba65a5cd7c3c7f89f86d4b075e4c16bd74950',
    tokenDecimals: 18,
    exchangeAddress: '0xb118106a97018614985d4c972996a2ad3a2f9879'
  },
  {
    symbol: 'TTP',
    name: 'Token Template',
    tokenAddress: '0x13c852a8fee3762604edf6bef45d45a3eaf22012',
    tokenDecimals: 18,
    exchangeAddress: '0xb19102b09f4a7b39989a2599ec101d683cefe1e8'
  },
  {
    symbol: 'TON',
    name: 'TOKEN',
    tokenAddress: '0xdf58837b1343178e192e4d756fc0d8bbb882ae20',
    tokenDecimals: 18,
    exchangeAddress: '0xb277c096b568945844504819bc5559aa9bc08bcf'
  },
  {
    symbol: 'TST',
    name: 'TEST',
    tokenAddress: '0x0bbf0dc480a8f14eb11a5437e32a2035891ed04a',
    tokenDecimals: 18,
    exchangeAddress: '0xb3ae09815acff89bb4ebf437a5c16ffdd9df0cdb'
  },
  {
    symbol: 'FS-V1',
    name: 'FutureSwap V1',
    tokenAddress: '0xccf3ef01d54d2b202d9e019dc77c16ace5e40e76',
    tokenDecimals: 18,
    exchangeAddress: '0xb45e76048ace0777221958ecfca1b4912c4dddd7'
  },
  {
    symbol: 'ZNC',
    name: 'ZeonToken',
    tokenAddress: '0x06444b46c2058292a5e4fb53aa5c9ed938e8ab5f',
    tokenDecimals: 18,
    exchangeAddress: '0xb79e36585c1077d5f8db662e6f6a564b95b851a5'
  },
  {
    symbol: 'GEN',
    name: 'DAOstack',
    tokenAddress: '0x543ff227f64aa17ea132bf9886cab5db55dcaddf',
    tokenDecimals: 18,
    exchangeAddress: '0xbc1fe7196f9ca8b484961229ee3bf1b54eb1acec'
  },
  {
    symbol: 'WCW',
    name: 'Wrapped CheezeWizards',
    tokenAddress: '0x9332b7fbbb160943f0831e13a68f95ba59d926d2',
    tokenDecimals: 18,
    exchangeAddress: '0xbe1b664a9634656df057c353aaac71aff90c7a8f'
  },
  {
    symbol: 'DAI',
    name: 'Dai',
    tokenAddress: '0x1d329f63dbd2dfca686a87c90d4fe4b802f3e34d',
    tokenDecimals: 18,
    exchangeAddress: '0xbe22b737b9140a93c088be49f1408dc1c94f91d1'
  },
  {
    symbol: 'TON',
    name: 'TOKEN',
    tokenAddress: '0xf631c8cd69548eb451403f79241e37c922651ce2',
    tokenDecimals: 18,
    exchangeAddress: '0xbf19ace1b72900a78b8a9c0b6171b1899743e146'
  },
  {
    symbol: 'TST',
    name: 'TEST',
    tokenAddress: '0x36f17057c59bba1300fe298fea7c3fc0dfb8a4a4',
    tokenDecimals: 18,
    exchangeAddress: '0xc3a555da56e90570c1b920cd4a4018d9a39d23aa'
  },
  {
    symbol: 'DAI',
    name: 'Dai Stablecoin',
    tokenAddress: '0xb307901ac0a807402a99879a491836697fec5e62',
    tokenDecimals: 18,
    exchangeAddress: '0xc4395a39daa5f6d33efcadd3f0bc1815f8c5ca13'
  },
  {
    symbol: 'TEST',
    name: 'Test Tokens',
    tokenAddress: '0xafd6d4f0b95fb8d710aa2e70467a19d8d884db65',
    tokenDecimals: 18,
    exchangeAddress: '0xc4df89ad8a831655df198338080558d127c1a700'
  },
  {
    symbol: 'SNX',
    name: 'Synthetix Network Token',
    tokenAddress: '0x00d0cbf196097ddb3b29947729f2105ef9b399bd',
    tokenDecimals: 18,
    exchangeAddress: '0xc4f619cb017cff54273de26ecd378e0189f3d594'
  },
  {
    symbol: 'TEST',
    name: 'Test Tokens',
    tokenAddress: '0x8b38fc6f7dd1e26304a74f933467d88a5b64ef4a',
    tokenDecimals: 18,
    exchangeAddress: '0xc530f585cd6acc65875505b583de5a03a89b15a7'
  },
  {
    symbol: 'BAT',
    name: 'Basic Attention Token',
    tokenAddress: '0x6f1ae50c222c689fbc8d5ce1484ccf5cedef1bb1',
    tokenDecimals: 18,
    exchangeAddress: '0xc796373f7f8807a9f7ed85f92a1cc548f4ae92d3'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x0e3b36958007006a3ba74e51940f1b5d08c9530c',
    tokenDecimals: 18,
    exchangeAddress: '0xc7b7f03cac47cb79d30ac390c263a7e76c67e6ea'
  },
  {
    symbol: 'HYDRO',
    name: 'Hydro Testnet',
    tokenAddress: '0x4959c7f62051d6b2ed6eaed3aaee1f961b145f20',
    tokenDecimals: 18,
    exchangeAddress: '0xc7dd2a62882acb0edc87e0fbf73ee4e22af8936d'
  },
  {
    symbol: 'BAT',
    name: 'Basic Attention Token',
    tokenAddress: '0xbf7bbeef6c56e53f79de37ee9ef5b111335bd2ab',
    tokenDecimals: 18,
    exchangeAddress: '0xc8df100234147e448d9094f058e92ef8be550564'
  },
  {
    symbol: 'WCW',
    name: 'Wrapped CheezeWizards',
    tokenAddress: '0x7c51dc5790eba46abf773841d7666fed88784b9c',
    tokenDecimals: 18,
    exchangeAddress: '0xc9296bcba46f76322519923857fce192636d70d2'
  },
  {
    symbol: 'TST',
    name: 'TEST',
    tokenAddress: '0x8878036d84da3a4e2dd3df500dcae05d2d854036',
    tokenDecimals: 18,
    exchangeAddress: '0xcba70e22db622742a5b50d67d75b58736a6f6e9f'
  },
  {
    symbol: 'RDN',
    name: 'Raiden',
    tokenAddress: '0x3615757011112560521536258c1e7325ae3b48ae',
    tokenDecimals: 18,
    exchangeAddress: '0xcc414932258b0a378dc54244991892e741a40213'
  },
  {
    symbol: 'TEST',
    name: 'Test Tokens',
    tokenAddress: '0x69bebe1237caa5d59b3c563912c13764817c49ab',
    tokenDecimals: 18,
    exchangeAddress: '0xcdabeccab65e31c71670fd2fa225affebd0879c7'
  },
  {
    symbol: 'TON',
    name: 'TOKEN',
    tokenAddress: '0x9e27c05153fe94134348b6d5279a5b622b219799',
    tokenDecimals: 18,
    exchangeAddress: '0xce5afb59e34228855b0de1ce147d69e68daada4d'
  },
  {
    symbol: 'CVC',
    name: 'Civic',
    tokenAddress: '0xaa3a3fb791650b166c9b8f51af7c6e9fc46b1111',
    tokenDecimals: 18,
    exchangeAddress: '0xced18ee03f4ae7e67892d44bde977ec474e1d28c'
  },
  {
    symbol: 'SIM',
    name: 'SimpleToken',
    tokenAddress: '0x4a16fac7a76e1028ed46d9f06fe9abe1e294a864',
    tokenDecimals: 18,
    exchangeAddress: '0xced28231e0596694f62e443f3ebbb60ffbaf6796'
  },
  {
    symbol: 'CM0-2',
    name: 'CM0-2',
    tokenAddress: '0xed51b6889b2dc0e2695eb0966a5798c8cf945be1',
    tokenDecimals: 18,
    exchangeAddress: '0xd273b3f8f78e27b5df08b8d96dbf3ed772ee7715'
  },
  {
    symbol: 'MBS',
    name: 'MBS',
    tokenAddress: '0x4950df52a7494601bfd3186a52d6d57b47434e27',
    tokenDecimals: 18,
    exchangeAddress: '0xd45e1578583f45817a726f505ac22d099dc5bdb4'
  },
  {
    symbol: 'WCC',
    name: 'Wrapped Coffee Coin',
    tokenAddress: '0x79a1772ae1590bd783e246aa4de9580e0d4b49e2',
    tokenDecimals: 18,
    exchangeAddress: '0xd68a4ae0274e1e2a14696cfd6817a59fced51c98'
  },
  {
    symbol: 'TEST',
    name: 'Test Tokens',
    tokenAddress: '0x876622cc103902449352ec1423890943971d92c4',
    tokenDecimals: 18,
    exchangeAddress: '0xd6ee7e73dfb1ea50fd6ccdbf1e81b943018f0d2e'
  },
  {
    symbol: 'DML',
    name: 'DML (Rinkeby)',
    tokenAddress: '0x167c0a202d5dc99dbac22e4d89c683e97fbdd1d1',
    tokenDecimals: 18,
    exchangeAddress: '0xd8d3b99af987a97d9141237b1d1387c172686e98'
  },
  {
    symbol: 'TST',
    name: 'TEST',
    tokenAddress: '0x1d0e318b417d517cd22b73d43bac2a7527449b04',
    tokenDecimals: 18,
    exchangeAddress: '0xd93786d05fb05272d29869dd3e4b20b1c98bc138'
  },
  {
    symbol: 'TON',
    name: 'TOKEN',
    tokenAddress: '0xe4cf3e3c8ef6a4fc11095384cc1a1d5fa822a6ab',
    tokenDecimals: 18,
    exchangeAddress: '0xdab52653b53a560465d58acbd6eea20ddda3e100'
  },
  {
    symbol: 'MNU',
    name: 'Moon Unit',
    tokenAddress: '0x67f729748ec7f2e014a2fd979c96d0c2eea04ce8',
    tokenDecimals: 18,
    exchangeAddress: '0xdb61498fc02754af1d7f5a9b5dac88a3189c65e0'
  },
  {
    symbol: 'SIM',
    name: 'SimpleToken',
    tokenAddress: '0x128cf269a2411ddd6adab64a9bc822c52afcbb9a',
    tokenDecimals: 18,
    exchangeAddress: '0xdb9584c3750f1a2afddd121f789700249bb84867'
  },
  {
    symbol: 'DCA',
    name: 'DCATOKEN',
    tokenAddress: '0x39006aae8e8bdb1af52c913060fc43c0430fe606',
    tokenDecimals: 18,
    exchangeAddress: '0xdcfaf198cfad3b2d7cf8f409021d1f7df7a81766'
  },
  {
    symbol: 'udai',
    name: 'UDAI',
    tokenAddress: '0x5928a84ad4ba28ae1b7d979648c434864324ea1e',
    tokenDecimals: 18,
    exchangeAddress: '0xe092b5c4e8c72d71c1558145478ae94240055488'
  },
  {
    symbol: 'cDAI',
    name: 'Compound Dai 📈',
    tokenAddress: '0x6d7f0754ffeb405d23c51ce938289d4835be3b14',
    tokenDecimals: 8,
    exchangeAddress: '0xe0bcb0a25797a945a6ea1599b6921d02b012410b'
  },
  {
    symbol: 'OPT',
    name: 'Option Token',
    tokenAddress: '0x576238b24826ffac2eee798d6958a080c4806884',
    tokenDecimals: 18,
    exchangeAddress: '0xe0c037de55b0156ea7a61297b62ff5fef702cb16'
  },
  {
    symbol: 'TRST',
    name: 'Trustcoin',
    tokenAddress: '0x87099add3bcc0821b5b151307c147215f839a110',
    tokenDecimals: 6,
    exchangeAddress: '0xe0cf8ca2a59379e99be54b33258eaac08303a2ed'
  },
  {
    symbol: 'RPT',
    name: 'Rupiah Token',
    tokenAddress: '0x58cc4440ca899d18326093fe2c399bca12d7e452',
    tokenDecimals: 2,
    exchangeAddress: '0xe2a6b9a81e987f5e772c592208035ea951134662'
  },
  {
    symbol: 'CE7',
    name: 'ACT Curation Engine',
    tokenAddress: '0xefcb4b54e86449209e784a98114c73102e74d7a9',
    tokenDecimals: 4,
    exchangeAddress: '0xe342428c833f51fe2e220c3c6927476fe6299062'
  },
  {
    symbol: 'OCEAN',
    name: 'testUSDSToken2',
    tokenAddress: '0xf41cdc3766bc30c63ee05b3b63d0b7c2c5f8f2ab',
    tokenDecimals: 18,
    exchangeAddress: '0xe3c1563e21829544aa1efecd5d576b13472a3a40'
  },
  {
    symbol: 'DAI',
    name: 'DAI',
    tokenAddress: '0x4e17c87c52d0e9a0cad3fbc53b77d9514f003807',
    tokenDecimals: 18,
    exchangeAddress: '0xe3f172bfb77ca9c9eace3574d2efa427f80a9bd5'
  },
  {
    symbol: 'BABA',
    name: 'Synthetic Alibaba Equity Tokens',
    tokenAddress: '0xa415db7b85f6791730189a6a35fe85bb6661dd67',
    tokenDecimals: 3,
    exchangeAddress: '0xe52ffaf2934629fa96af2ed3cd01f478066383ed'
  },
  {
    symbol: 'LPSFT-0',
    name: 'LPSFT-0 Token',
    tokenAddress: '0x23b814a57d53b1a7a860194f53401d0d639abed7',
    tokenDecimals: 18,
    exchangeAddress: '0xe5680d8d0141f9cdc1a7562357de21f9b87e5a59'
  },
  {
    symbol: 'ZNG',
    name: 'ZenGoToken',
    tokenAddress: '0xef66ed4d91449c3b1be771e98e239c12e3896e56',
    tokenDecimals: 8,
    exchangeAddress: '0xe913ef6b396b5846d50af7fb6660c6137c56df34'
  },
  {
    symbol: 'BAECH',
    name: 'BaeCoinCash',
    tokenAddress: '0x7dbdceadffa2b9c0fe06e82319910a505dd59751',
    tokenDecimals: 18,
    exchangeAddress: '0xeb7a2b14eea87d145c62dca5eb0f0a3f289ac269'
  },
  {
    symbol: 'APT',
    name: 'AtomicaPremiumToken',
    tokenAddress: '0xd20f89de0b101162d06ac1fd519d2a767d3af39a',
    tokenDecimals: 18,
    exchangeAddress: '0xec73b1a2c73bed5a23421a5ff970be3161093a86'
  },
  {
    symbol: 'XCHF',
    name: 'CryptoFranc',
    tokenAddress: '0x84286f1e0aaa59787131da691b5d5cfc2aff289a',
    tokenDecimals: 18,
    exchangeAddress: '0xee36acee7792b2e65620079c3c69d1441d570862'
  },
  {
    symbol: 'TON',
    name: 'TOKEN',
    tokenAddress: '0x1b612d610cb88e2e72651a4398f0a120c34791a4',
    tokenDecimals: 18,
    exchangeAddress: '0xf035aa63f01e8f0924f3863a77124be172541339'
  },
  {
    symbol: 'SIM',
    name: 'SimpleToken',
    tokenAddress: '0x9fc57821d35d7df92743a447ed22116664f7471e',
    tokenDecimals: 18,
    exchangeAddress: '0xf35d597d5a380bd408728a76a3d5f15d62e5e515'
  },
  {
    symbol: 'SNX',
    name: 'Synthetix Network Token',
    tokenAddress: '0x322a3346bf24363f451164d96a5b5cd5a7f4c337',
    tokenDecimals: 18,
    exchangeAddress: '0xf6d3b6006d5d8f2ca477c16d93a75ae359782809'
  },
  {
    symbol: 'SJC',
    name: 'SeanToken',
    tokenAddress: '0x842b5f2cb93d31ac3a3900adda896b223c7a3042',
    tokenDecimals: 18,
    exchangeAddress: '0xf7ffcf899013aed83548fd93193893ee2fd18c45'
  },
  {
    symbol: 'IAN',
    name: 'ian token',
    tokenAddress: '0xfa15c28acac9816a88b80f94adf0734e5cb39d66',
    tokenDecimals: 18,
    exchangeAddress: '0xf9c85d02a8b8399394a775983675cd90f420bb38'
  },
  {
    symbol: 'TON',
    name: 'TOKEN',
    tokenAddress: '0xe29170c3f5c3c29e07dc81b16b124863c742e859',
    tokenDecimals: 18,
    exchangeAddress: '0xfc4113b34727b677807c5f15ad1ee944109f5ba4'
  },
  {
    symbol: 'yBTC_Dec2019',
    name: 'yBTC_Dec31_0xdd56',
    tokenAddress: '0x41c981379062473097b273e9713bf373e9f6e76c',
    tokenDecimals: 18,
    exchangeAddress: '0xff23faf227304ed18cfb7a181fda61fd2cda5328'
  },
  {
    symbol: 'POOP',
    name: 'SF Poop Token',
    tokenAddress: '0xdd102438d25edf754d40f8549a4a772b6ca30e44',
    tokenDecimals: 18,
    exchangeAddress: '0xff5cf68ed4f53c53fcb0bc4d498d7de9c71f23e9'
  }
]
