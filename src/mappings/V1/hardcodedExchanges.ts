export class AsExchange {
  symbol: string
  name: string
  tokenAddress: string
  tokenDecimals: i32
  exchangeAddress: string
}

export const hardcodedExchanges: Array<AsExchange> = [
  {
    symbol: 'MKR',
    name: 'Maker',
    tokenAddress: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
    tokenDecimals: 18,
    exchangeAddress: '0x2c4bd064b998838076fa341a83d007fc2fa50957'
  },
  {
    symbol: 'DAI',
    name: 'Dai Stablecoin v1.0',
    tokenAddress: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
    tokenDecimals: 18,
    exchangeAddress: '0x09cabec1ead1c0ba254b09efb3ee13841712be14'
  },
  {
    symbol: 'GNO',
    name: 'Gnosis Token',
    tokenAddress: '0x6810e776880c02933d47db1b9fc05908e5386b96',
    tokenDecimals: 18,
    exchangeAddress: '0xe8e45431b93215566ba923a7e611b7342ea954df'
  },
  {
    symbol: 'KNC',
    name: 'Kyber Network Crystal',
    tokenAddress: '0xdd974d5c2e2928dea5f71b9825b8b646686bd200',
    tokenDecimals: 18,
    exchangeAddress: '0x49c4f9bc14884f6210f28342ced592a633801a8b'
  },
  {
    symbol: 'LINK',
    name: 'ChainLink Token',
    tokenAddress: '0x514910771af9ca656af840dff83e8264ecf986ca',
    tokenDecimals: 18,
    exchangeAddress: '0xf173214c720f58e03e194085b1db28b50acdeead'
  },
  {
    symbol: 'MANA',
    name: 'Decentraland MANA',
    tokenAddress: '0x0f5d2fb29fb7d3cfee444a200298f468908cc942',
    tokenDecimals: 18,
    exchangeAddress: '0xc6581ce3a005e2801c1e0903281bbd318ec5b5c2'
  },
  {
    symbol: 'LOOM',
    name: 'LoomToken',
    tokenAddress: '0xa4e8c3ec456107ea67d3075bf9e3df3a75823db0',
    tokenDecimals: 18,
    exchangeAddress: '0x417cb32bc991fbbdcae230c7c4771cc0d69daa6b'
  },
  {
    symbol: 'REP',
    name: 'Reputation',
    tokenAddress: '0x1985365e9f78359a9b6ad760e32412f4a445e862',
    tokenDecimals: 18,
    exchangeAddress: '0x48b04d2a05b6b604d8d5223fd1984f191ded51af'
  },
  {
    symbol: 'SNT',
    name: 'Status Network Token',
    tokenAddress: '0x744d70fdbe2ba4cf95131626614a1763df805b9e',
    tokenDecimals: 18,
    exchangeAddress: '0x1aec8f11a7e78dc22477e91ed924fab46e3a88fd'
  },
  {
    symbol: 'SPANK',
    name: 'SPANK',
    tokenAddress: '0x42d6622dece394b54999fbd73d108123806f6a18',
    tokenDecimals: 18,
    exchangeAddress: '0x4e395304655f0796bc3bc63709db72173b9ddf98'
  },
  {
    symbol: 'HAY',
    name: 'HayCoin',
    tokenAddress: '0xfa3e941d1f6b7b10ed84a0c211bfa8aee907965e',
    tokenDecimals: 18,
    exchangeAddress: '0x78bac62f2a4cd3a7cb7da2991affc7b11590f682'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x78bac62f2a4cd3a7cb7da2991affc7b11590f682',
    tokenDecimals: 18,
    exchangeAddress: '0x7ad24a41ce760232ba2885a91f846ea86c9baa41'
  },
  {
    symbol: 'BORIS',
    name: 'BorisCoin',
    tokenAddress: '0x919d0131fa5f77d99fbbbbace50bcb6e62332bf2',
    tokenDecimals: 18,
    exchangeAddress: '0x4e0e28d426caf318747b8e05c8b0564a580e39a7'
  },
  {
    symbol: 'JCD',
    name: 'J Chan Dollar',
    tokenAddress: '0x0ed024d39d55e486573ee32e583bc37eb5a6271f',
    tokenDecimals: 18,
    exchangeAddress: '0x657184e418d43a661a91d567182dc3d1a4179ec4'
  },
  {
    symbol: 'GUSD',
    name: 'Gemini dollar',
    tokenAddress: '0x056fd409e1d7a124bd7017459dfea2f387b6d5cd',
    tokenDecimals: 2,
    exchangeAddress: '0xd883264737ed969d2696ee4b4caf529c2fc2a141'
  },
  {
    symbol: 'ADX',
    name: 'AdEx',
    tokenAddress: '0x4470bb87d77b963a013db939be332f927f2b992e',
    tokenDecimals: 4,
    exchangeAddress: '0xb800445dd982c1311523fd465ac44f55093b2b5b'
  },
  {
    symbol: 'NEXO',
    name: 'Nexo',
    tokenAddress: '0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206',
    tokenDecimals: 18,
    exchangeAddress: '0x069c97dba948175d10af4b2414969e0b88d44669'
  },
  {
    symbol: 'SIM',
    name: 'Simoleon',
    tokenAddress: '0x86c8bf8532aa2601151c9dbbf4e4c4804e042571',
    tokenDecimals: 2,
    exchangeAddress: '0x174dfb6e6e78c95678580b553eee7f282b28c795'
  },
  {
    symbol: 'VERI',
    name: 'Veritaseum',
    tokenAddress: '0x8f3470a7388c05ee4e7af3d01d8c722b0ff52374',
    tokenDecimals: 18,
    exchangeAddress: '0x17e5bf07d696eaf0d14caa4b44ff8a1e17b34de3'
  },
  {
    symbol: 'DNT',
    name: 'district0x Network Token',
    tokenAddress: '0x0abdace70d3790235af448c88547603b945604ea',
    tokenDecimals: 18,
    exchangeAddress: '0xaa3b3810c8aada6cbd2ce262699903ad7ae6a7ef'
  },
  {
    symbol: 'BTU',
    name: 'BTU Protocol',
    tokenAddress: '0xb683d83a532e2cb7dfa5275eed3698436371cc9f',
    tokenDecimals: 18,
    exchangeAddress: '0xea3a62838477082d8f2106c43796d636dc78d8a4'
  },
  {
    symbol: 'sUSD',
    name: 'Synth sUSD',
    tokenAddress: '0x57ab1e02fee23774580c119740129eac7081e9d3',
    tokenDecimals: 18,
    exchangeAddress: '0x69f276abd6456152d519d23086031da7c73f91b8'
  },
  {
    symbol: 'FUN',
    name: 'FunFair',
    tokenAddress: '0x419d0d8bdd9af5e606ae2232ed285aff190e711b',
    tokenDecimals: 8,
    exchangeAddress: '0x60a87cc7fca7e53867facb79da73181b1bb4238b'
  },
  {
    symbol: 'DTH',
    name: 'Dether',
    tokenAddress: '0x5adc961d6ac3f7062d2ea45fefb8d8167d44b190',
    tokenDecimals: 18,
    exchangeAddress: '0xe18256cd23efcdc4f95581e86f61ea1b09afd02a'
  },
  {
    symbol: 'LIF',
    name: 'Lif',
    tokenAddress: '0xeb9951021698b42e4399f9cbb6267aa35f82d59d',
    tokenDecimals: 18,
    exchangeAddress: '0x055bab4bcc17d2ab155fff017fc5e093556c6ad2'
  },
  {
    symbol: 'BAT',
    name: 'Basic Attention Token',
    tokenAddress: '0x0d8775f648430679a709e98d2b0cb6250d2887ef',
    tokenDecimals: 18,
    exchangeAddress: '0x2e642b8d59b45a1d8c5aef716a84ff44ea665914'
  },
  {
    symbol: 'TRAC',
    name: 'Trace Token',
    tokenAddress: '0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f',
    tokenDecimals: 18,
    exchangeAddress: '0x38577ccec0ceffd178fd3be66e1c6f531bfa410e'
  },
  {
    symbol: 'PNK',
    name: 'Pinakion',
    tokenAddress: '0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d',
    tokenDecimals: 18,
    exchangeAddress: '0xf506828b166de88ca2edb2a98d960abba0d2402a'
  },
  {
    symbol: 'BOOTY',
    name: 'BOOTY',
    tokenAddress: '0x6b01c3170ae1efebee1a3159172cb3f7a5ecf9e5',
    tokenDecimals: 18,
    exchangeAddress: '0xef465915f2d6d8183a7d5ee134a53f00c780d3e9'
  },
  {
    symbol: 'CVC',
    name: 'Civic',
    tokenAddress: '0x41e5560054824ea6b0732e656e3ad64e20e94e45',
    tokenDecimals: 8,
    exchangeAddress: '0x1c6c712b1f4a7c263b1dbd8f97fb447c945d3b9a'
  },
  {
    symbol: 'SAN',
    name: 'SANtiment network token',
    tokenAddress: '0x7c5a0ce9267ed19b22f8cae653f198e3e8daf098',
    tokenDecimals: 18,
    exchangeAddress: '0x8a8d7ad4b89d91983cd069c58c4aa9f2f4166298'
  },
  {
    symbol: 'LBA',
    name: 'LibraToken',
    tokenAddress: '0xfe5f141bf94fe84bc28ded0ab966c16b17490657',
    tokenDecimals: 18,
    exchangeAddress: '0xe79fe64771d5351b936eeac6222682c3d878063e'
  },
  {
    symbol: 'PRG',
    name: 'PRG',
    tokenAddress: '0x7728dfef5abd468669eb7f9b48a7f70a501ed29d',
    tokenDecimals: 6,
    exchangeAddress: '0x817e391baf312dc5078cd7a98a7a0255ac63ca48'
  },
  {
    symbol: 'AGI',
    name: 'SingularityNET Token',
    tokenAddress: '0x8eb24319393716668d768dcec29356ae9cffe285',
    tokenDecimals: 8,
    exchangeAddress: '0xdf02ffeafdb79e564ae9fdac6545c5f4c2178400'
  },
  {
    symbol: 'ZRX',
    name: '0x Protocol Token',
    tokenAddress: '0xe41d2489571d322189246dafa5ebde1f4699f498',
    tokenDecimals: 18,
    exchangeAddress: '0xae76c84c9262cdb9abc0c2c8888e62db8e22a0bf'
  },
  {
    symbol: 'ENTRP',
    name: 'Hut34 Entropy Token',
    tokenAddress: '0x5bc7e5f0ab8b2e10d2d0a3f21739fce62459aef3',
    tokenDecimals: 18,
    exchangeAddress: '0xa1c467dc897a36689dbbadcc212b212b4f526e49'
  },
  {
    symbol: 'ICN',
    name: 'ICONOMI',
    tokenAddress: '0x888666ca69e0f178ded6d75b5726cee99a87d698',
    tokenDecimals: 18,
    exchangeAddress: '0x467fb51d54d7e51ee925f7f1a81ad5f2a0211169'
  },
  {
    symbol: 'PTOY',
    name: 'Patientory',
    tokenAddress: '0x8ae4bf2c33a8e667de34b54938b0ccd03eb8cc06',
    tokenDecimals: 8,
    exchangeAddress: '0xe8bc0a210aaf86dab4dd600faca5cfe492e2e084'
  },
  {
    symbol: 'RHOC',
    name: 'RHOC',
    tokenAddress: '0x168296bb09e24a88805cb9c33356536b980d3fc5',
    tokenDecimals: 8,
    exchangeAddress: '0x394e524b47a3ab3d3327f7ff6629dc378c1494a3'
  },
  {
    symbol: 'CND',
    name: 'Cindicator Token',
    tokenAddress: '0xd4c435f5b09f855c3317c8524cb1f586e42795fa',
    tokenDecimals: 18,
    exchangeAddress: '0x21b8a991a203a440c83450564fdefa3db10a5004'
  },
  {
    symbol: 'REN',
    name: 'Republic Token',
    tokenAddress: '0x408e41876cccdc0f92210600ef50372656052a38',
    tokenDecimals: 18,
    exchangeAddress: '0x43892992b0b102459e895b88601bb2c76736942c'
  },
  {
    symbol: 'GRID',
    name: 'GRID Token',
    tokenAddress: '0x12b19d3e2ccc14da04fae33e63652ce469b3f2fd',
    tokenDecimals: 12,
    exchangeAddress: '0x4b17685b330307c751b47f33890c8398df4fe407'
  },
  {
    symbol: 'BNB',
    name: 'BNB',
    tokenAddress: '0xb8c77482e45f1f44de1745f52c74426c631bdd52',
    tokenDecimals: 18,
    exchangeAddress: '0x255e60c9d597dcaa66006a904ed36424f7b26286'
  },
  {
    symbol: 'LAToken',
    name: 'LAToken',
    tokenAddress: '0xe50365f5d679cb98a1dd62d6f6e58e59321bcddf',
    tokenDecimals: 18,
    exchangeAddress: '0x28991ac221054bee3a38ae9ad0fb3d0c3e45d0cf'
  },
  {
    symbol: 'MLN',
    name: 'Melon Token',
    tokenAddress: '0xbeb9ef514a379b997e0798fdcc901ee474b6d9a1',
    tokenDecimals: 18,
    exchangeAddress: '0xaec97872d14ac79e95fff18c169bfd183efc6962'
  },
  {
    symbol: 'e11',
    name: 'Experimental Token',
    tokenAddress: '0x4805f9568bca23bef099c2a317346b42146384a1',
    tokenDecimals: 18,
    exchangeAddress: '0x4785cedbd89c818d60988dc5979b029f3900b54b'
  },
  {
    symbol: '0xBTC',
    name: '0xBitcoin Token',
    tokenAddress: '0xb6ed7644c69416d67b522e20bc294a9a9b405b31',
    tokenDecimals: 8,
    exchangeAddress: '0x701564aa6e26816147d4fa211a0779f1b774bb9b'
  },
  {
    symbol: 'SALT',
    name: 'Salt',
    tokenAddress: '0x4156d3342d5c385a87d264f90653733592000581',
    tokenDecimals: 8,
    exchangeAddress: '0xc0c59cde851bfcbdddd3377ec10ea54a18efb937'
  },
  {
    symbol: 'KIWI',
    name: 'KIWI Token',
    tokenAddress: '0x2bf91c18cd4ae9c2f2858ef9fe518180f7b5096d',
    tokenDecimals: 8,
    exchangeAddress: '0x380fdc8bb8722915076a09479d1bbc75e69c8be0'
  },
  {
    symbol: 'BPT',
    name: 'Blockport Token',
    tokenAddress: '0x327682779bab2bf4d1337e8974ab9de8275a7ca8',
    tokenDecimals: 18,
    exchangeAddress: '0xb2744df7bfbb4802f44fd1b1fd9012502d4af704'
  },
  {
    symbol: 'LPT',
    name: 'Livepeer Token',
    tokenAddress: '0x58b6a8a3302369daec383334672404ee733ab239',
    tokenDecimals: 18,
    exchangeAddress: '0xc4a1c45d5546029fd57128483ae65b56124bfa6a'
  },
  {
    symbol: 'BNTY',
    name: 'Bounty0x Token',
    tokenAddress: '0xd2d6158683aee4cc838067727209a0aaf4359de3',
    tokenDecimals: 18,
    exchangeAddress: '0xd1f3e9b413f5c9fd56f044699c64ff710e7e5a9a'
  },
  {
    symbol: 'WETH',
    name: 'Wrapped Ether',
    tokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    tokenDecimals: 18,
    exchangeAddress: '0xa2881a90bf33f03e7a3f803765cd2ed5c8928dfb'
  },
  {
    symbol: 'ASTRO',
    name: 'AstroTokens',
    tokenAddress: '0x7b22938ca841aa392c93dbb7f4c42178e3d65e88',
    tokenDecimals: 4,
    exchangeAddress: '0xbd4479c98dc21563ba822c3c206d8339698e2dd4'
  },
  {
    symbol: 'HBZ',
    name: 'Helbiz Token',
    tokenAddress: '0xe34e1944e776f39b9252790a0527ebda647ae668',
    tokenDecimals: 18,
    exchangeAddress: '0xd1a8c5ba35752e4b62c71c795a3f6481faa4d36e'
  },
  {
    symbol: 'HUM',
    name: 'Humanity',
    tokenAddress: '0xecf3958d0f82291ca1ff6c9bda8eb3c50ee41ce3',
    tokenDecimals: 18,
    exchangeAddress: '0x7d31fc38ddd7d6907f820f4268f1d8d5d5797826'
  },
  {
    symbol: 'ZIL',
    name: 'Zilliqa',
    tokenAddress: '0x05f4a42e251f2d52b8ed15e9fedaacfcef1fad27',
    tokenDecimals: 12,
    exchangeAddress: '0x7dc095a5cf7d6208cc680fa9866f80a53911041a'
  },
  {
    symbol: 'USDC',
    name: 'USD//C',
    tokenAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    tokenDecimals: 6,
    exchangeAddress: '0x97dec872013f6b5fb443861090ad931542878126'
  },
  {
    symbol: 'ENG',
    name: 'Enigma',
    tokenAddress: '0xf0ee6b27b759c9893ce4f094b49ad28fd15a23e4',
    tokenDecimals: 8,
    exchangeAddress: '0x884715e2dce8757c9ee19739c366b2c7c65f05b1'
  },
  {
    symbol: 'PITCH',
    name: 'PITCH',
    tokenAddress: '0x87f56ee356b434187105b40f96b230f5283c0ab4',
    tokenDecimals: 9,
    exchangeAddress: '0x329c9642efe33a62161dda6b4eb3821965191441'
  },
  {
    symbol: 'CNUS',
    name: 'CoinUs',
    tokenAddress: '0x722f2f3eac7e9597c73a593f7cf3de33fbfc3308',
    tokenDecimals: 18,
    exchangeAddress: '0x30b16fc2b530dbf991e1b15ed953cc4585f0b27c'
  },
  {
    symbol: 'MOR',
    name: 'MoriaToken',
    tokenAddress: '0xa6a7fce4affe059548fc39ebbc74555952a6fb0d',
    tokenDecimals: 18,
    exchangeAddress: '0xbe478403ac906d329fa8ebef1d3f9e0a48067d57'
  },
  {
    symbol: 'REQ',
    name: 'Request Token',
    tokenAddress: '0x8f8221afbb33998d8584a2b05749ba73c37a938a',
    tokenDecimals: 18,
    exchangeAddress: '0xbcdf538581f7167ec8228ec2c9b1cfc2f74788c7'
  },
  {
    symbol: 'DGD',
    name: 'DigixDAO',
    tokenAddress: '0xe0b7927c4af23765cb51314a0e0521a9645f0e2a',
    tokenDecimals: 9,
    exchangeAddress: '0xd55c1ca9f5992a2e5e379dce49abf24294abe055'
  },
  {
    symbol: 'TKN',
    name: 'Monolith TKN',
    tokenAddress: '0xaaaf91d9b90df800df4f55c205fd6989c977e73a',
    tokenDecimals: 8,
    exchangeAddress: '0xb6cfbf322db47d39331e306005dc7e5e6549942b'
  },
  {
    symbol: 'DGX',
    name: 'Digix Gold Token',
    tokenAddress: '0x4f3afec4e5a3f2a6a1a411def7d7dfe50ee057bf',
    tokenDecimals: 9,
    exchangeAddress: '0xb92de8b30584392af27726d5ce04ef3c4e5c9924'
  },
  {
    symbol: 'TRST',
    name: 'Trustcoin',
    tokenAddress: '0xcb94be6f13a1182e4a4b6140cb7bf2025d28e41b',
    tokenDecimals: 6,
    exchangeAddress: '0x95e4649f5209dd292caf1f087b8f1db3be24927f'
  },
  {
    symbol: 'STX',
    name: 'Stox',
    tokenAddress: '0x006bea43baa3f7a6f765f14f10a1a1b08334ef45',
    tokenDecimals: 18,
    exchangeAddress: '0x2afc64cd5e64a32a363ea84b8cad1ce5239a1a3d'
  },
  {
    symbol: 'SWM',
    name: 'Swarm Fund Token',
    tokenAddress: '0x9e88613418cf03dca54d6a2cf6ad934a78c7a17a',
    tokenDecimals: 18,
    exchangeAddress: '0xc3c028721f854bc75967cbe432fb0e221908baa1'
  },
  {
    symbol: 'GNT',
    name: 'Golem Network Token',
    tokenAddress: '0xa74476443119a942de498590fe1f2454d7d4ac0d',
    tokenDecimals: 18,
    exchangeAddress: '0x7d839eb463b121790c99e0f017c21f0189dcc167'
  },
  {
    symbol: 'MYU',
    name: 'MYUBI Token',
    tokenAddress: '0xf3be20da25b31bd6ee4ce4496985b2064304c125',
    tokenDecimals: 18,
    exchangeAddress: '0xb684f9b231accdef385f06038395e27a4e3aa86b'
  },
  {
    symbol: 'LQD',
    name: 'Liquidity.Network Token',
    tokenAddress: '0xd29f0b5b3f50b07fe9a9511f7d86f4f4bac3f8c4',
    tokenDecimals: 18,
    exchangeAddress: '0xe3406e7d0155e0a83236ec25d34cd3d903036669'
  },
  {
    symbol: 'ULT',
    name: 'Unblocked Ledger Token',
    tokenAddress: '0x09617f6fd6cf8a71278ec86e23bbab29c04353a7',
    tokenDecimals: 18,
    exchangeAddress: '0x28d9353611c5a0d5a026a648c05e5d6523e41cbf'
  },
  {
    symbol: 'LIRA',
    name: 'Lira Cash',
    tokenAddress: '0x49aaa160506f7e07e6c3f6cd6316b6866025cdcb',
    tokenDecimals: 8,
    exchangeAddress: '0xb580a2b495917b8577d9a612be068f591e8c20f9'
  },
  {
    symbol: 'FOAM',
    name: 'FOAM Token',
    tokenAddress: '0x4946fcea7c692606e8908002e55a582af44ac121',
    tokenDecimals: 18,
    exchangeAddress: '0xf79cb3bea83bd502737586a6e8b133c378fd1ff2'
  },
  {
    symbol: 'XCHF',
    name: 'CryptoFranc',
    tokenAddress: '0xb4272071ecadd69d933adcd19ca99fe80664fc08',
    tokenDecimals: 18,
    exchangeAddress: '0x8de0d002dc83478f479dc31f76cb0a8aa7ccea17'
  },
  {
    symbol: 'BLUE',
    name: 'Ethereum Blue',
    tokenAddress: '0x539efe69bcdd21a83efd9122571a64cc25e0282b',
    tokenDecimals: 8,
    exchangeAddress: '0x7eb81c7a0b322d31c11064105e14dce6e852e8c1'
  },
  {
    symbol: 'SWT',
    name: 'Swarm City Token',
    tokenAddress: '0xb9e7f8568e08d5659f5d29c4997173d84cdf2607',
    tokenDecimals: 18,
    exchangeAddress: '0x755160062e3e09d34af0a00ff8cab8500e81e0d7'
  },
  {
    symbol: 'RCN',
    name: 'Ripio Credit Network Token',
    tokenAddress: '0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6',
    tokenDecimals: 18,
    exchangeAddress: '0xd91ff16ef92568fc27f466c3c5613e43313ab1dc'
  },
  {
    symbol: 'POA20',
    name: 'POA ERC20 on Foundation',
    tokenAddress: '0x6758b7d441a9739b98552b373703d8d3d14f9e62',
    tokenDecimals: 18,
    exchangeAddress: '0xa2e6b3ef205feaee475937c4883b24e6eb717eef'
  },
  {
    symbol: 'QCH',
    name: 'QChi',
    tokenAddress: '0x687bfc3e73f6af55f0ccca8450114d107e781a0e',
    tokenDecimals: 18,
    exchangeAddress: '0x755899f0540c3548b99e68c59adb0f15d2695188'
  },
  {
    symbol: 'SCHAP',
    name: 'AshleighCoin',
    tokenAddress: '0xe503a034a8c288dfa9583c43691a7b8233e27013',
    tokenDecimals: 18,
    exchangeAddress: '0xd202ee9690e3240aff1631d98c99717a2265fa64'
  },
  {
    symbol: 'FAC',
    name: 'Financial Aid Coin',
    tokenAddress: '0x4b4a70cae3f7c84e36ce9aa19abc98f85db7f058',
    tokenDecimals: 7,
    exchangeAddress: '0x32a29c4269dee1a9e87eb75d66da71591a7aee96'
  },
  {
    symbol: 'SCHAP',
    name: 'AshleighCoin',
    tokenAddress: '0x3638c9e50437f00ae53a649697f288ba68888cc1',
    tokenDecimals: 18,
    exchangeAddress: '0xa0513d82f17c491dc6ab34efd89dc372bb180378'
  },
  {
    symbol: 'C20',
    name: 'Crypto20',
    tokenAddress: '0x26e75307fc0c021472feb8f727839531f112f317',
    tokenDecimals: 18,
    exchangeAddress: '0xf7b5a4b934658025390ff69db302bc7f2ac4a542'
  },
  {
    symbol: 'POW',
    name: 'Proof of work',
    tokenAddress: '0x9709907cb2cf9e16df841f7b145b78c230d8205e',
    tokenDecimals: 18,
    exchangeAddress: '0x6fca96a679490ed8a80c7344799f1b090fd4c94d'
  },
  {
    symbol: 'AMIS',
    name: 'AMIS',
    tokenAddress: '0x949bed886c739f1a3273629b3320db0c5024c719',
    tokenDecimals: 9,
    exchangeAddress: '0x164c93580839f40609ce0250dd4c98a25da175de'
  },
  {
    symbol: 'TheDAO',
    name: 'TheDAO',
    tokenAddress: '0xbb9bc244d798123fde783fcc1c72d3bb8c189413',
    tokenDecimals: 16,
    exchangeAddress: '0xc7c60e9419466939e968db2a88fe64ec41908bb4'
  },
  {
    symbol: 'KIN',
    name: 'Kin',
    tokenAddress: '0x818fc6c2ec5986bc6e2cbf00939d90556ab12ce5',
    tokenDecimals: 18,
    exchangeAddress: '0xb7520a5f8c832c573d6bd0df955fc5c9b72400f7'
  },
  {
    symbol: 'TUSD',
    name: 'TrueUSD',
    tokenAddress: '0x8dd5fbce2f6a956c3022ba3663759011dd51e73e',
    tokenDecimals: 18,
    exchangeAddress: '0x4f30e682d0541eac91748bd38a648d759261b8f3'
  },
  {
    symbol: 'ZCN',
    name: '0chain',
    tokenAddress: '0xb9ef770b6a5e12e45983c5d80545258aa38f3b78',
    tokenDecimals: 10,
    exchangeAddress: '0x1c116d67e0bf0cf5cb0ad5a74a041d26e89271e7'
  },
  {
    symbol: 'MCO',
    name: 'Monaco',
    tokenAddress: '0xb63b606ac810a52cca15e44bb630fd42d8d1d83d',
    tokenDecimals: 8,
    exchangeAddress: '0xedc485266aa0ebe9ccbfc1f255bb5ffea1f9e3cc'
  },
  {
    symbol: 'CRO',
    name: 'CRO',
    tokenAddress: '0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b',
    tokenDecimals: 8,
    exchangeAddress: '0x2135d193bf81abbead93906166f2be32b2492c04'
  },
  {
    symbol: 'GCB',
    name: 'GuangChangBi',
    tokenAddress: '0x74436ae1db59c62bbb3de88d268f7e058dce6d50',
    tokenDecimals: 18,
    exchangeAddress: '0x62ccb0577aa63b8d72449b9fd13b3cdbcf3787d6'
  },
  {
    symbol: 'CMCT',
    name: 'Crowd Machine Compute Token',
    tokenAddress: '0x47bc01597798dcd7506dcca36ac4302fc93a8cfb',
    tokenDecimals: 8,
    exchangeAddress: '0x53e31a941b76ef1b486e86aa39bcd5ae56829870'
  },
  {
    symbol: 'CNN',
    name: 'CNN Token',
    tokenAddress: '0x8713d26637cf49e1b6b4a7ce57106aabc9325343',
    tokenDecimals: 18,
    exchangeAddress: '0xe31a245102fc1ae72f80c6969f6475e85c897bbe'
  },
  {
    symbol: 'ANT',
    name: 'Aragon Network Token',
    tokenAddress: '0x960b236a07cf122663c4303350609a66a7b288c0',
    tokenDecimals: 18,
    exchangeAddress: '0x077d52b047735976dfda76fef74d4d988ac25196'
  },
  {
    symbol: 'ITT',
    name: 'Intelligent Trading Technologies',
    tokenAddress: '0x0aef06dcccc531e581f0440059e6ffcc206039ee',
    tokenDecimals: 8,
    exchangeAddress: '0x20149f1672175c7118bdbf966bfb6a02bf733810'
  },
  {
    symbol: 'DENT',
    name: 'DENT',
    tokenAddress: '0x3597bfd533a99c9aa083587b074434e61eb0a258',
    tokenDecimals: 8,
    exchangeAddress: '0x9709ef0958b831865a97682d9ec08f897fe3b56f'
  },
  {
    symbol: 'MEDIBIT',
    name: 'MEDIBIT',
    tokenAddress: '0x737fa0372c8d001904ae6acaf0552d4015f9c947',
    tokenDecimals: 18,
    exchangeAddress: '0x68326300df49ec6387e75690857424c2ae111750'
  },
  {
    symbol: 'AWC',
    name: 'Atomic Wallet Token',
    tokenAddress: '0xad22f63404f7305e4713ccbd4f296f34770513f4',
    tokenDecimals: 8,
    exchangeAddress: '0x8aa3cc2bf30cb47f290fd4e9b660bc3a685b9b3e'
  },
  {
    symbol: 'IDT',
    name: 'InvestDigital Token',
    tokenAddress: '0x02c4c78c462e32cca4a90bc499bf411fb7bc6afb',
    tokenDecimals: 18,
    exchangeAddress: '0x3fbc2275de71427aaebbe0e5e6bc13fe8f27fa9e'
  },
  {
    symbol: 'HPT',
    name: 'HuobiPoolToken',
    tokenAddress: '0xa66daa57432024023db65477ba87d4e7f5f95213',
    tokenDecimals: 18,
    exchangeAddress: '0xfe3f05c7da9fe53591fab3f920798a67a95747ed'
  },
  {
    symbol: 'ERC20',
    name: 'ERC20',
    tokenAddress: '0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea',
    tokenDecimals: 18,
    exchangeAddress: '0xf50bac10faf905e95ffdc9f35b75ee67117dad2a'
  },
  {
    symbol: 'EDU',
    name: 'EduCoinToken',
    tokenAddress: '0xa0872ee815b8dd0f6937386fd77134720d953581',
    tokenDecimals: 18,
    exchangeAddress: '0x0045d5d2cac7688f7fc36313e69fb5350958936c'
  },
  {
    symbol: 'CRPHT',
    name: 'Crypthealth',
    tokenAddress: '0xcd7d0042fdb92f3dde312aa61af084953aa914ee',
    tokenDecimals: 18,
    exchangeAddress: '0xe1e005d82922303ca9fb5cb6426c2eb07f8e5c84'
  },
  {
    symbol: 'ROL',
    name: 'DICE',
    tokenAddress: '0x2e071d2966aa7d8decb1005885ba1977d6038a65',
    tokenDecimals: 16,
    exchangeAddress: '0xb7836492f5850d9b61d6b71c73697c5b9676208d'
  },
  {
    symbol: 'PAY',
    name: 'TenX Pay Token',
    tokenAddress: '0xb97048628db6b661d4c2aa833e95dbe1a905b280',
    tokenDecimals: 18,
    exchangeAddress: '0x6f1c46e91ce29d430e31205ead148b0bee46b9fc'
  },
  {
    symbol: 'PAI',
    name: 'PCHAIN',
    tokenAddress: '0xb9bb08ab7e9fa0a1356bd4a39ec0ca267e03b0b3',
    tokenDecimals: 18,
    exchangeAddress: '0x7174ef6b9cb528e954508264a9912da905977422'
  },
  {
    symbol: 'SNX',
    name: 'Synthetix Network Token',
    tokenAddress: '0xc011a72400e58ecd99ee497cf89e3775d4bd732f',
    tokenDecimals: 18,
    exchangeAddress: '0x23228ec35e810569495bd0aa4d56e9fad759bb29'
  },
  {
    symbol: 'LOT',
    name: 'lothlor',
    tokenAddress: '0xdcef0710b10ad66bc2194b412fb37c65d4d0a965',
    tokenDecimals: 18,
    exchangeAddress: '0xe69ea0f00b6d399a11030eb6d79e54c486c0e1d1'
  },
  {
    symbol: 'OMG',
    name: 'OMGToken',
    tokenAddress: '0xd26114cd6ee289accf82350c8d8487fedb8a0c07',
    tokenDecimals: 18,
    exchangeAddress: '0xddee242662323a3cff3f9aa139ffa496ac3c73b0'
  },
  {
    symbol: 'WBTC',
    name: 'Wrapped BTC',
    tokenAddress: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    tokenDecimals: 8,
    exchangeAddress: '0x4d2f5cfba55ae412221182d8475bc85799a5644b'
  },
  {
    symbol: 'DKC',
    name: 'ICO GAZUA TOKEN',
    tokenAddress: '0xb5ce43922eb8e73bd2b1fcec33c2dba43cce7e4c',
    tokenDecimals: 18,
    exchangeAddress: '0x5634de511580536296c6ea2eb8ebec271ca76bc2'
  },
  {
    symbol: 'DKC',
    name: 'ICO GAZUA TOKEN',
    tokenAddress: '0x7365877678c744b435ed03b1cac12ab407cba13a',
    tokenDecimals: 18,
    exchangeAddress: '0xc3b03664126f2f192ec658e1c62798c9ebd0ff08'
  },
  {
    symbol: 'PMA',
    name: 'PumaPay',
    tokenAddress: '0x846c66cf71c43f80403b51fe3906b3599d63336f',
    tokenDecimals: 18,
    exchangeAddress: '0xcc36e05eeffac3eb61b696d0bb328f2b08389fb5'
  },
  {
    symbol: 'EDU',
    name: 'EduCoin',
    tokenAddress: '0xf263292e14d9d8ecd55b58dad1f1df825a874b7c',
    tokenDecimals: 18,
    exchangeAddress: '0xab2da28aa5803c8da0f6603e91e16dab3ba542d2'
  },
  {
    symbol: 'HERC',
    name: 'Hercules',
    tokenAddress: '0x6251583e7d997df3604bc73b9779196e94a090ce',
    tokenDecimals: 18,
    exchangeAddress: '0x059ad96e38f027ccd127567dc09b164762bcd695'
  },
  {
    symbol: 'PATH',
    name: 'Path Network Token',
    tokenAddress: '0x7b94a1281db0335c9efd68aca5c98b494d775c70',
    tokenDecimals: 18,
    exchangeAddress: '0x95efaafe52e89992bfd4f33c96ad971fccdc31f6'
  },
  {
    symbol: 'DATA',
    name: 'Streamr DATAcoin',
    tokenAddress: '0x0cf0ee63788a0849fe5297f3407f701e122cc023',
    tokenDecimals: 18,
    exchangeAddress: '0x4f0d6e2179938828cff93da40a8ba1df7519ca8c'
  },
  {
    symbol: 'RPL',
    name: 'Rocket Pool',
    tokenAddress: '0xb4efd85c19999d84251304bda99e90b92300bd93',
    tokenDecimals: 18,
    exchangeAddress: '0x3fb2f18065926ddb33e7571475c509541d15da0e'
  },
  {
    symbol: 'UFR',
    name: 'Upfiring',
    tokenAddress: '0xea097a2b1db00627b2fa17460ad260c016016977',
    tokenDecimals: 18,
    exchangeAddress: '0x2263fd7c62914ab8ec2b5e7b00bc8371a6c0d221'
  },
  {
    symbol: 'RLC',
    name: 'iEx.ec Network Token',
    tokenAddress: '0x607f4c5bb672230e8672085532f7e901544a7375',
    tokenDecimals: 9,
    exchangeAddress: '0xa825cae02b310e9901b4776806ce25db520c8642'
  },
  {
    symbol: 'PAX',
    name: 'PAX',
    tokenAddress: '0x8e870d67f660d95d5be530380d0ec0bd388289e1',
    tokenDecimals: 18,
    exchangeAddress: '0xc040d51b07aea5d94a89bc21e8078b77366fc6c7'
  },
  {
    symbol: 'CNX',
    name: 'Cryptonex (CNX) - Global Blockchain Acquiring',
    tokenAddress: '0x94d6b4fb35fb08cb34aa716ab40049ec88002079',
    tokenDecimals: 8,
    exchangeAddress: '0xbb7cf8a9d6b2aa7d98fb0bf3548a589a68ddb774'
  },
  {
    symbol: 'CAN',
    name: 'CanYaCoin',
    tokenAddress: '0x1d462414fe14cf489c7a21cac78509f4bf8cd7c0',
    tokenDecimals: 6,
    exchangeAddress: '0x066198694b1db74d67007d19a7c4f2fc3a061075'
  },
  {
    symbol: 'MAS',
    name: 'MidasProtocol',
    tokenAddress: '0x23ccc43365d9dd3882eab88f43d515208f832430',
    tokenDecimals: 18,
    exchangeAddress: '0xe2f548a3b898eca923bd61919f2635b071a7f95e'
  },
  {
    symbol: 'DONUT',
    name: 'Donut',
    tokenAddress: '0x23d80c4ee8fb55d4183dd9329296e176dc7464e1',
    tokenDecimals: 18,
    exchangeAddress: '0xed9d5aa6124a3310b80a2468c67763627653887d'
  },
  {
    symbol: 'KRH',
    name: 'KryptoHub',
    tokenAddress: '0x4dadf81edf74e9b1a9ad1f364d51a176be48f0ac',
    tokenDecimals: 18,
    exchangeAddress: '0x08850bd3ce3a8f6b64d724c3dabdbf6f4f8561fc'
  },
  {
    symbol: 'BEE',
    name: 'Bee Token',
    tokenAddress: '0x42237af8b1b3b2063d8377c5de8a4549e7b09ac5',
    tokenDecimals: 18,
    exchangeAddress: '0x356435d47e8f36d5102719704747afb9ddd36747'
  },
  {
    symbol: 'BEE',
    name: 'Bee Token',
    tokenAddress: '0x4d8fc1453a0f359e99c9675954e656d80d996fbf',
    tokenDecimals: 18,
    exchangeAddress: '0xe9078a97eef2bb502a9f792169f9c03626649248'
  },
  {
    symbol: 'ZCI',
    name: '0xchan ICO',
    tokenAddress: '0x236149288602c07b84387d0d75784d73f133142b',
    tokenDecimals: 18,
    exchangeAddress: '0xcfcc608f03c0cee86589e11224f24779212f0fe5'
  },
  {
    symbol: 'BOOTY',
    name: 'BOOTY',
    tokenAddress: '0x824c0659f6940604506aa8fa829d13fde17fb900',
    tokenDecimals: 18,
    exchangeAddress: '0x5a67d8ea5c9bf381fe0da2862cec1ec90a5ca329'
  },
  {
    symbol: 'WPR',
    name: 'WePower Token',
    tokenAddress: '0x4cf488387f035ff08c371515562cba712f9015d4',
    tokenDecimals: 18,
    exchangeAddress: '0x72208a7d8c11cb28c8e6d32e1a070015786c0823'
  },
  {
    symbol: 'EMONT',
    name: 'EtheremonToken',
    tokenAddress: '0x95daaab98046846bf4b2853e23cba236fa394a31',
    tokenDecimals: 8,
    exchangeAddress: '0x2995b7f65cbc1b0ae8095eae314246508c49182a'
  },
  {
    symbol: 'PLAY',
    name: 'Herocoin',
    tokenAddress: '0xe477292f1b3268687a29376116b0ed27a9c76170',
    tokenDecimals: 18,
    exchangeAddress: '0xf43b2329130cfd87b322e49b96681e09f1ef172f'
  },
  {
    symbol: 'BOI',
    name: 'BOI Token',
    tokenAddress: '0x439ce375e3ee4dc203d71958beca3c0f417d65cb',
    tokenDecimals: 18,
    exchangeAddress: '0x262275a4989c96cc6ecde77eb2dda6e13d508c4e'
  },
  {
    symbol: 'HOT',
    name: 'HoloToken',
    tokenAddress: '0x6c6ee5e31d828de241282b9606c8e98ea48526e2',
    tokenDecimals: 18,
    exchangeAddress: '0xd4777e164c6c683e10593e08760b803d58529a8e'
  },
  {
    symbol: 'FT',
    name: 'Fabric Token',
    tokenAddress: '0x78a73b6cbc5d183ce56e786f6e905cadec63547b',
    tokenDecimals: 18,
    exchangeAddress: '0xf5bb20e73c59e0f643ae4bcd89d761ebdec83b73'
  },
  {
    symbol: 'MGN',
    name: 'Magnolia Token',
    tokenAddress: '0xb9625381f086e7b8512e4825f6af1117e9c84d43',
    tokenDecimals: 18,
    exchangeAddress: '0x8809c63af18ec760547426a5c3e122e0a3efbf27'
  },
  {
    symbol: 'AERGO',
    name: 'Aergo',
    tokenAddress: '0xae31b85bfe62747d0836b82608b4830361a3d37a',
    tokenDecimals: 18,
    exchangeAddress: '0x27f99de8a71f09e9e567050192ce3005f0dcd0b3'
  },
  {
    symbol: 'SENT',
    name: 'SENTinel',
    tokenAddress: '0xa44e5137293e855b1b7bc7e2c6f8cd796ffcb037',
    tokenDecimals: 8,
    exchangeAddress: '0x0b5ce6f7cbe0627aa8ad2e7e69ed554c0fe79162'
  },
  {
    symbol: 'RDN',
    name: 'Raiden Token',
    tokenAddress: '0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6',
    tokenDecimals: 18,
    exchangeAddress: '0x7d03cecb36820b4666f45e1b4ca2538724db271c'
  },
  {
    symbol: 'NMR',
    name: 'Numeraire',
    tokenAddress: '0x1776e1f26f98b1a5df9cd347953a26dd3cb46671',
    tokenDecimals: 18,
    exchangeAddress: '0x2bf5a5ba29e60682fc56b2fcf9ce07bef4f6196f'
  },
  {
    symbol: 'GBPP',
    name: 'GBPP',
    tokenAddress: '0xeac034b66aa7538a551a5fcec85e37592233c109',
    tokenDecimals: 16,
    exchangeAddress: '0xf6a0e98be0153e64b34693ba62c10009c697c95a'
  },
  {
    symbol: 'FTM',
    name: 'Fantom Token',
    tokenAddress: '0x4e15361fd6b4bb609fa63c81a2be19d873717870',
    tokenDecimals: 18,
    exchangeAddress: '0x060a0d4539623b6aa28d9fc39b9d6622ad495f41'
  },
  {
    symbol: 'QNT',
    name: 'Quant',
    tokenAddress: '0x4a220e6096b25eadb88358cb44068a3248254675',
    tokenDecimals: 18,
    exchangeAddress: '0xc7eb739e2651484daa1717433de1736a6529cfcc'
  },
  {
    symbol: 'BBO',
    name: 'Bigbom',
    tokenAddress: '0x84f7c44b6fed1080f647e354d552595be2cc602f',
    tokenDecimals: 18,
    exchangeAddress: '0x3c3351e44d32b36bf2af97de6f40b548b00cf654'
  },
  {
    symbol: 'IND',
    name: 'Indorse Token',
    tokenAddress: '0xf8e386eda857484f5a12e4b5daa9984e06e73705',
    tokenDecimals: 18,
    exchangeAddress: '0x57c6e18ee62fc660575db273ffaab02436aad222'
  },
  {
    symbol: 'THETA',
    name: 'Theta Token',
    tokenAddress: '0x3883f5e181fccaf8410fa61e12b59bad963fb645',
    tokenDecimals: 18,
    exchangeAddress: '0x6b4540f5ee32ddd5616c792f713435e6ee4f24ab'
  },
  {
    symbol: 'ST',
    name: 'Simple Token',
    tokenAddress: '0x2c4e8f2d746113d0696ce89b35f0d8bf88e0aeca',
    tokenDecimals: 18,
    exchangeAddress: '0x700520b1e2ccc5bf5fa89a5f7b8fd9beba3f04b0'
  },
  {
    symbol: 'ELEC',
    name: 'ElectrifyAsia',
    tokenAddress: '0xd49ff13661451313ca1553fd6954bd1d9b6e02b9',
    tokenDecimals: 18,
    exchangeAddress: '0x5d40522c20326f2ebcec2d371f250e352e3bed27'
  },
  {
    symbol: 'FGP',
    name: 'FingerPrint',
    tokenAddress: '0xd9a8cfe21c232d485065cb62a96866799d4645f7',
    tokenDecimals: 18,
    exchangeAddress: '0xccd5c9f160379510670f9acd73779dce7e6226b2'
  },
  {
    symbol: 'HOPS',
    name: 'LORDLESS HOPS',
    tokenAddress: '0x471daee6e481b2ab7d2f2f64b8f9b083daae29da',
    tokenDecimals: 18,
    exchangeAddress: '0xe0cce4518ea70d98231c47e5b977ba90cfcec615'
  },
  {
    symbol: 'MFT',
    name: 'Mainframe Token',
    tokenAddress: '0xdf2c7238198ad8b389666574f2d8bc411a4b7428',
    tokenDecimals: 18,
    exchangeAddress: '0x09f448c70c99124024cd9e8dcae6c2f51c0896db'
  },
  {
    symbol: 'GEN',
    name: 'DAOstack',
    tokenAddress: '0x543ff227f64aa17ea132bf9886cab5db55dcaddf',
    tokenDecimals: 18,
    exchangeAddress: '0x26cc0eab6cb650b0db4d0d0da8cb5bf69f4ad692'
  },
  {
    symbol: 'NAC',
    name: 'Nami ICO',
    tokenAddress: '0x8d80de8a78198396329dfa769ad54d24bf90e7aa',
    tokenDecimals: 18,
    exchangeAddress: '0xaa9c9308bb6ef318bab918d1e4aebf284b02b680'
  },
  {
    symbol: 'BEN',
    name: 'Token of Szczepan Bentyn',
    tokenAddress: '0x108c05cac356d93b351375434101cfd3e14f7e44',
    tokenDecimals: 4,
    exchangeAddress: '0x104f5ac4fdf92fd4668a08ac2e305b5bcf3de215'
  },
  {
    symbol: 'BNT',
    name: 'Bancor Network Token',
    tokenAddress: '0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c',
    tokenDecimals: 18,
    exchangeAddress: '0x87d80dbd37e551f58680b4217b23af6a752da83f'
  },
  {
    symbol: 'OPEN',
    name: 'OPEN',
    tokenAddress: '0x69c4bb240cf05d51eeab6985bab35527d04a8c64',
    tokenDecimals: 8,
    exchangeAddress: '0x9801d0e88222e9204025117bada94728885d1a28'
  },
  {
    symbol: 'AEUR',
    name: 'Augmint Euro',
    tokenAddress: '0xc994a2deb02543db1f48688438b9903c4b305ce3',
    tokenDecimals: 2,
    exchangeAddress: '0xd4a6ea5eabfd4048640724f62713ffb1e6292271'
  },
  {
    symbol: 'MLN',
    name: 'Melon Token',
    tokenAddress: '0xec67005c4e498ec7f55e092bd1d35cbc47c91892',
    tokenDecimals: 18,
    exchangeAddress: '0xa931f4eb165ac307fd7431b5ec6eadde53e14b0c'
  },
  {
    symbol: 'EET',
    name: 'Easily Echangeable Token',
    tokenAddress: '0x7c0f856ddb93dfb957eac4513c6a5249c395cae5',
    tokenDecimals: 18,
    exchangeAddress: '0xe4f984870929bb4189ab43def9fc2f339244765e'
  },
  {
    symbol: 'sJPY',
    name: 'Synth sJPY',
    tokenAddress: '0xd9e5a009ec07de76616d7361ed713ef434d71325',
    tokenDecimals: 18,
    exchangeAddress: '0x39b0f27c771ad4236422af5ddc600711eefd93a3'
  },
  {
    symbol: 'ENJ',
    name: 'Enjin Coin',
    tokenAddress: '0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c',
    tokenDecimals: 18,
    exchangeAddress: '0xb99a23b1a4585fc56d0ec3b76528c27cad427473'
  },
  {
    symbol: 'SAI',
    name: 'Sai',
    tokenAddress: '0xf5b403abd806eff15b339909943e2c22ecbac54c',
    tokenDecimals: 18,
    exchangeAddress: '0xa809ef80c0abf701bd1b3b15749aa0a4179ec034'
  },
  {
    symbol: 'sXAU',
    name: 'Synth sXAU',
    tokenAddress: '0xe05d803fa0c5832fa2262465290abb25d6c2bfa3',
    tokenDecimals: 18,
    exchangeAddress: '0xaf294be0577dc703bd7f5b96d34bc9cb110f1e2b'
  },
  {
    symbol: 'EUR',
    name: 'MoneyFold Euro',
    tokenAddress: '0x8e3aeb75392ca824d55479cae07f7f0b765743dd',
    tokenDecimals: 2,
    exchangeAddress: '0x526353fbb4a37eddcebf63f96796a078d908f568'
  },
  {
    symbol: 'JSE',
    name: 'JSE Token',
    tokenAddress: '0x2d184014b5658c453443aa87c8e9c4d57285620b',
    tokenDecimals: 18,
    exchangeAddress: '0xa248a46b97204b6f4d5b05ba824fbea46390d978'
  },
  {
    symbol: 'MTL',
    name: 'Metal',
    tokenAddress: '0xf433089366899d83a9f26a773d59ec7ecf30355e',
    tokenDecimals: 8,
    exchangeAddress: '0xc5d192f702cc7ce84355df9d41af14bde5024cc9'
  },
  {
    symbol: 'NOTES',
    name: 'NOTES',
    tokenAddress: '0x5e6364d4534f780ae053b93b45c8b8840e683eb7',
    tokenDecimals: 18,
    exchangeAddress: '0x9b7036f677a6e4832e9983efa0ce384130248398'
  },
  {
    symbol: 'WYV',
    name: 'Project Wyvern Token',
    tokenAddress: '0x056017c55ae7ae32d12aef7c679df83a85ca75ff',
    tokenDecimals: 18,
    exchangeAddress: '0x77e885fbc67b7c6ea2b889c96bbd78f9e647463b'
  },
  {
    symbol: 'LDT',
    name: 'Law Diamond Token',
    tokenAddress: '0x76a6baa20598b6d203d3eae6cc87e326bcb60e43',
    tokenDecimals: 18,
    exchangeAddress: '0xcbfda0aa2e471c02a39e6cec9b7f5cdfd91d83c6'
  },
  {
    symbol: 'BLT',
    name: 'Bloom Token',
    tokenAddress: '0x107c4504cd79c5d2696ea0030a8dd4e92601b82e',
    tokenDecimals: 18,
    exchangeAddress: '0x0e6a53b13688018a3df8c69f99afb19a3068d04f'
  },
  {
    symbol: 'sUSD',
    name: 'Synth sUSD',
    tokenAddress: '0x0cbe2df57ca9191b64a7af3baa3f946fa7df2f25',
    tokenDecimals: 18,
    exchangeAddress: '0xa1ecdcca26150cf69090280ee2ee32347c238c7b'
  },
  {
    symbol: 'SNX',
    name: 'Synthetix Network Token',
    tokenAddress: '0x3772f9716cf6d7a09ede3587738aa2af5577483a',
    tokenDecimals: 18,
    exchangeAddress: '0x5d8888a212d033cff5f2e0ac24ad91a5495bad62'
  },
  {
    symbol: 'LALA',
    name: 'LALA',
    tokenAddress: '0xfd107b473ab90e8fbd89872144a3dc92c40fa8c9',
    tokenDecimals: 18,
    exchangeAddress: '0x6886f9dcbdad3cb8c6684f2fe78de5318c177068'
  },
  {
    symbol: 'DALC',
    name: 'DALECOIN',
    tokenAddress: '0x07d9e49ea402194bf48a8276dafb16e4ed633317',
    tokenDecimals: 8,
    exchangeAddress: '0x4591482d0c9d0af061a42009ff1b3cd070396f87'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x09cabec1ead1c0ba254b09efb3ee13841712be14',
    tokenDecimals: 18,
    exchangeAddress: '0x601c32e0580d3aef9437db52d09f5a5d7e60ec22'
  },
  {
    symbol: 'FND',
    name: 'FundRequest',
    tokenAddress: '0x4df47b4969b2911c966506e3592c41389493953b',
    tokenDecimals: 18,
    exchangeAddress: '0xe52d807ad934953315ccfe56f3b6425fcff04b2b'
  },
  {
    symbol: 'GBP',
    name: 'MoneyFold Pound Sterling',
    tokenAddress: '0xff4f56c14b8b59f7d766988a0e0c582e46b7f8ab',
    tokenDecimals: 2,
    exchangeAddress: '0x23c3041a18a528a57e26623259e5caa9fb160665'
  },
  {
    symbol: 'WOMG',
    name: 'Wrapped OMG',
    tokenAddress: '0x69657e421c993a65e31f571b4ce742fafb318bd4',
    tokenDecimals: 18,
    exchangeAddress: '0xd2bf46ac7cbf595879aaff5967a92ae7e999c308'
  },
  {
    symbol: 'SMX',
    name: 'SaldoMX',
    tokenAddress: '0x8a3cf860eca6d8e4579bfb052488e336e0fd9eae',
    tokenDecimals: 2,
    exchangeAddress: '0x52b9c94031dee81b2c36be736fa7f6b7ca7ad84e'
  },
  {
    symbol: 'EDR',
    name: 'Endor Protocol Token',
    tokenAddress: '0xc528c28fec0a90c083328bc45f587ee215760a0f',
    tokenDecimals: 18,
    exchangeAddress: '0x877104c369bb563f3a893fae861b4baf0cdd9d37'
  },
  {
    symbol: 'CVL',
    name: 'CVL',
    tokenAddress: '0x01fa555c97d7958fa6f771f3bbd5ccd508f81e22',
    tokenDecimals: 18,
    exchangeAddress: '0xd7d070728c947645af47f8cd0731a4100695a503'
  },
  {
    symbol: 'ICH',
    name: 'ICOStart Token',
    tokenAddress: '0x330839ef82d34801bd96e75a4ee778ac56fa1ed8',
    tokenDecimals: 18,
    exchangeAddress: '0xe749f1a9d5f9055f0b784b586818833b9679949c'
  },
  {
    symbol: 'USDT',
    name: 'Tether USD',
    tokenAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    tokenDecimals: 6,
    exchangeAddress: '0xc8313c965c47d1e0b5cdcd757b210356ad0e400c'
  },
  {
    symbol: 'STORJ',
    name: 'StorjToken',
    tokenAddress: '0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac',
    tokenDecimals: 8,
    exchangeAddress: '0xa7298541e52f96d42382ecbe4f242cbcbc534d02'
  },
  {
    symbol: 'SP',
    name: 'SunPower',
    tokenAddress: '0xd26b63194f70e0939393d23d3a5b1ed6bde5f835',
    tokenDecimals: 18,
    exchangeAddress: '0x5982aa08c4d3103a3534055b5fb2aac88d61675c'
  },
  {
    symbol: 'WOMG',
    name: 'Wrapped OMG',
    tokenAddress: '0xc46d19c06defe3adab78712bbbae08ffaaf1402d',
    tokenDecimals: 18,
    exchangeAddress: '0x03f7f874d7e1b131f8c66f1f64b15b645667687f'
  },
  {
    symbol: 'LTO',
    name: 'LTO Network Token',
    tokenAddress: '0x3db6ba6ab6f95efed1a6e794cad492faaabf294d',
    tokenDecimals: 8,
    exchangeAddress: '0x017d2735eb562d0ad9abc2a91801f4ca96f6bfa9'
  },
  {
    symbol: '18C',
    name: 'Block18',
    tokenAddress: '0xb3ce281f0dee8c6f7af19b9664109c4030bec3fa',
    tokenDecimals: 18,
    exchangeAddress: '0x9ad2f1272e775ebec936fef4cfa44bd5b1c7c3a6'
  },
  {
    symbol: 'ZJLT ',
    name: 'ZJLT  Distributed Factoring Network',
    tokenAddress: '0xb2af8d4d286e2087590f085ee7e8ccb05d3c7f29',
    tokenDecimals: 6,
    exchangeAddress: '0x7a05354b796958e439b1780204a89f81094ea4b9'
  },
  {
    symbol: 'ETHOS',
    name: 'Ethos',
    tokenAddress: '0x5af2be193a6abca9c8817001f45744777db30756',
    tokenDecimals: 8,
    exchangeAddress: '0xa55ba5d915a53e3c0514ff4e232eb50af12922ec'
  },
  {
    symbol: 'BIT',
    name: '比特链',
    tokenAddress: '0xf16843c8ab59ae17f9481ec756a1ded049192af4',
    tokenDecimals: 18,
    exchangeAddress: '0xbaf5a8bdf81cfe2d34c0ced89236fe473183f2e8'
  },
  {
    symbol: 'ART',
    name: 'Maecenas ART Token',
    tokenAddress: '0xfec0cf7fe078a500abf15f1284958f22049c2c7e',
    tokenDecimals: 18,
    exchangeAddress: '0x63a91a8b6f6289aa93f18539d245ec49c6169cd7'
  },
  {
    symbol: 'VIT',
    name: 'Vice',
    tokenAddress: '0x23b75bc7aaf28e2d6628c3f424b3882f8f072a3c',
    tokenDecimals: 18,
    exchangeAddress: '0x3981932f5e17540d863868c5d7c4e617e1334acd'
  },
  {
    symbol: 'RIYA',
    name: 'Etheriya',
    tokenAddress: '0x0b1724cc9fda0186911ef6a75949e9c0d3f0f2f3',
    tokenDecimals: 8,
    exchangeAddress: '0xd284aedc33522c85949576eca69414020d15ccb6'
  },
  {
    symbol: 'X8X',
    name: 'X8XToken',
    tokenAddress: '0x910dfc18d6ea3d6a7124a6f8b5458f281060fa4c',
    tokenDecimals: 18,
    exchangeAddress: '0x6dd1d97e5817ca376e653a1e7326e0563d13ceeb'
  },
  {
    symbol: 'CH-ZG1235d',
    name: 'CH123456789013',
    tokenAddress: '0xd2cc32cc34b0b975bf9b812061a1a040017972fc',
    tokenDecimals: 18,
    exchangeAddress: '0x80a393b2e1e4aa07862c24ad8ac14511c91bd562'
  },
  {
    symbol: 'LESS',
    name: 'LORDLESS TOKEN',
    tokenAddress: '0x7ca121b093e2fbd4bb9a894bd5ff487d16f1f83b',
    tokenDecimals: 18,
    exchangeAddress: '0x5386c0e6b417138f09236f86aca243e6f5b05dd3'
  },
  {
    symbol: 'SIT',
    name: 'SInitiatives',
    tokenAddress: '0xe5e7d48abbb999880ea0f6533068dfd3944f0e7e',
    tokenDecimals: 4,
    exchangeAddress: '0x85c1ef96960884f802789400160b21d9c7043520'
  },
  {
    symbol: 'DFS',
    name: 'Digital Fantasy Sports',
    tokenAddress: '0x45ed02e374aef2e4b34c04e86ad9d45891d10751',
    tokenDecimals: 18,
    exchangeAddress: '0x70a97ec45d87a37cec6103658527ffb3df7802c7'
  },
  {
    symbol: 'CELR',
    name: 'Celer Network',
    tokenAddress: '0xf56fdae611b734005d71c03b7b8c966e45d1d768',
    tokenDecimals: 18,
    exchangeAddress: '0xd62cc4154a8f865761c5b027ec33b4ab47cfa175'
  },
  {
    symbol: 'AUC',
    name: 'Auctus Token',
    tokenAddress: '0xc12d099be31567add4e4e4d0d45691c3f58f5663',
    tokenDecimals: 18,
    exchangeAddress: '0x37134075f5b5a0a94ac891c7b5ec5db5cfcf392c'
  },
  {
    symbol: 'MYST',
    name: 'Mysterium',
    tokenAddress: '0xa645264c5603e96c3b0b078cdab68733794b0a71',
    tokenDecimals: 8,
    exchangeAddress: '0x6380ab7c66df788e30c5762f5884b9129d178b80'
  },
  {
    symbol: 'TAAS',
    name: 'Token-as-a-Service',
    tokenAddress: '0xe7775a6e9bcf904eb39da2b68c5efb4f9360e08c',
    tokenDecimals: 6,
    exchangeAddress: '0x4da5c31ab38a496a2513843dab8721e9aeb876bf'
  },
  {
    symbol: 'SIN',
    name: 'Casino La Crosse',
    tokenAddress: '0xb448846ff602a6cb206ffafc45b93ad6fb7dd716',
    tokenDecimals: 4,
    exchangeAddress: '0xc491dfda6487480dd31b4d5e1bb77bcc9e2543c9'
  },
  {
    symbol: 'MET',
    name: 'Metronome',
    tokenAddress: '0xa3d58c4e56fedcae3a7c43a725aee9a71f0ece4e',
    tokenDecimals: 18,
    exchangeAddress: '0x006b6e89ee1531cfe5b6d32da0d80cc30506a339'
  },
  {
    symbol: 'NOW',
    name: 'ChangeNOW',
    tokenAddress: '0xe9a95d175a5f4c9369f3b74222402eb1b837693b',
    tokenDecimals: 8,
    exchangeAddress: '0xbe33fdad6efd453594e8ece3c53fd0ae62b7cc74'
  },
  {
    symbol: 'SIN',
    name: 'CasinoLaCrosse',
    tokenAddress: '0x26a6f4a6867a71be998b80eaabf67ff87d1e59d6',
    tokenDecimals: 2,
    exchangeAddress: '0x17edf686c2449ae8dbb52ac3cef105ca50baee53'
  },
  {
    symbol: 'AVO',
    name: 'Avocado',
    tokenAddress: '0xfa6f7881e52fdf912c4a285d78a3141b089ce859',
    tokenDecimals: 18,
    exchangeAddress: '0xe94c4dc3a75fad623391a68b4fbdd4b3c9b3eeb4'
  },
  {
    symbol: 'XES',
    name: 'Proxeus',
    tokenAddress: '0xa017ac5fac5941f95010b12570b812c974469c2c',
    tokenDecimals: 18,
    exchangeAddress: '0x225026d626e45fa662e6a71f679eff0cac3054f1'
  },
  {
    symbol: 'MSP',
    name: 'Mothership Token',
    tokenAddress: '0x68aa3f232da9bdc2343465545794ef3eea5209bd',
    tokenDecimals: 18,
    exchangeAddress: '0x700e7869fa8ffd3117200e248979fef2b78f4a1c'
  },
  {
    symbol: 'KNS',
    name: 'Konsta token',
    tokenAddress: '0x64fab8aff039ed05259d1c2af729b70c8002c661',
    tokenDecimals: 18,
    exchangeAddress: '0x19cb61fe00ea29fc77d79eaeaebc94023bf7c67b'
  },
  {
    symbol: 'BDC',
    name: 'Belden Coin',
    tokenAddress: '0xac4df2d98f14495263b9dfbc47451c46d8ab0a30',
    tokenDecimals: 18,
    exchangeAddress: '0xaf8937f0595c06e1e0cca741a8aedec088aafde0'
  },
  {
    symbol: 'MST',
    name: 'My Super Token',
    tokenAddress: '0x35352a97214942f5c6054923b8dbd5e4ff0434df',
    tokenDecimals: 18,
    exchangeAddress: '0xca5ce4f07e8591b497eb2e22d2b0c19b69173e61'
  },
  {
    symbol: 'CCOIN',
    name: 'CREDITCOIN',
    tokenAddress: '0x5e51f6841d2f188c42c7c33a6a5e77fb05cfbabe',
    tokenDecimals: 2,
    exchangeAddress: '0xba2d17a783533f401d2b5efaac4a5675f46ee36d'
  },
  {
    symbol: 'IAM',
    name: 'iAM',
    tokenAddress: '0x6025fb154b7c30e13657d5304dafdb55b194e5dd',
    tokenDecimals: 18,
    exchangeAddress: '0x9c1a7862f08d19e86714750161f56e7c10a9503e'
  },
  {
    symbol: 'ESTATE',
    name: 'AgentMile Estate Tokens',
    tokenAddress: '0x6671c24dd5b8e4ced34033991418e4bc0cca05af',
    tokenDecimals: 8,
    exchangeAddress: '0x2a98460615481a456a1d763460167514dcd21f2c'
  },
  {
    symbol: 'HOUR',
    name: 'Democracy Earth',
    tokenAddress: '0x00319f722bd546182cb2c701ca254146d3f084fc',
    tokenDecimals: 18,
    exchangeAddress: '0xb7f7269098f36b034c4e2118a40c53482872b87a'
  },
  {
    symbol: 'WINGS',
    name: 'WINGS',
    tokenAddress: '0x667088b212ce3d06a1b553a7221e1fd19000d9af',
    tokenDecimals: 18,
    exchangeAddress: '0x70876eadea28ac268564ad3a8b7313790b471436'
  },
  {
    symbol: 'FIT',
    name: 'Fitness Chain',
    tokenAddress: '0xc98449ef8a017cfd29aed8b21b9b26492978a898',
    tokenDecimals: 18,
    exchangeAddress: '0x99b849a022d60be539d2a130b89ff0bbae097d83'
  },
  {
    symbol: 'ABX',
    name: 'ASOBI COIN',
    tokenAddress: '0x49ceb57714000f18f3749cf2d130e135f9c473a4',
    tokenDecimals: 18,
    exchangeAddress: '0xbe26014bbdbdd3d35f93c80591ffaf08513621ed'
  },
  {
    symbol: 'POWR',
    name: 'PowerLedger',
    tokenAddress: '0x595832f8fc6bf59c85c527fec3740a1b7a361269',
    tokenDecimals: 6,
    exchangeAddress: '0xabe1e210f2c97ae4bc7b17f8daa2e8db993337f5'
  },
  {
    symbol: 'SWADER',
    name: 'Bruno Skvorc Token',
    tokenAddress: '0x89f10cead72d1ebf3e08a9378932c6f4f5a4c476',
    tokenDecimals: 4,
    exchangeAddress: '0x32ff139e48c05d636307f61e476bb395bd319b05'
  },
  {
    symbol: 'AURA',
    name: 'Aurora DAO',
    tokenAddress: '0xcdcfc0f66c522fd086a1b725ea3c0eeb9f9e8814',
    tokenDecimals: 18,
    exchangeAddress: '0x8903842469f8790dad072b45bbce96cde9f3d7e6'
  },
  {
    symbol: 'DGTX',
    name: 'DigitexFutures',
    tokenAddress: '0x1c83501478f1320977047008496dacbd60bb15ef',
    tokenDecimals: 18,
    exchangeAddress: '0x24fbcbc276854bd14f0e6e02fb7b740baa52ca26'
  },
  {
    symbol: 'WIND',
    name: 'Oroshi',
    tokenAddress: '0xc9c0ff6344b4bfdee7ace21c4deddd6e43ecb454',
    tokenDecimals: 18,
    exchangeAddress: '0xe2833ad850513faa973747e4495db1d0b0e038a0'
  },
  {
    symbol: 'SML',
    name: '数码链',
    tokenAddress: '0x9138e38a0316e25459b376e987dd270b626709b8',
    tokenDecimals: 18,
    exchangeAddress: '0x041692af7f62906cee089b77fa0e59adb63f750c'
  },
  {
    symbol: 'LEND',
    name: 'EthLend Token',
    tokenAddress: '0x80fb784b7ed66730e8b1dbd9820afd29931aab03',
    tokenDecimals: 18,
    exchangeAddress: '0xcaa7e4656f6a2b59f5f99c745f91ab26d1210dce'
  },
  {
    symbol: 'DRGN',
    name: 'Dragon',
    tokenAddress: '0x419c4db4b9e25d6db2ad9691ccb832c8d9fda05e',
    tokenDecimals: 18,
    exchangeAddress: '0x9881ad0c92d5a908d97df7f86626903ada1bfd29'
  },
  {
    symbol: 'JRT',
    name: 'Jarvis Reward Token',
    tokenAddress: '0xeef338c585ee3cf674f717937f12e6f52accf5e1',
    tokenDecimals: 18,
    exchangeAddress: '0xc932eded711ceb421078bab6b44b558656bd7864'
  },
  {
    symbol: 'OCEAN',
    name: 'The Ocean Token',
    tokenAddress: '0xf5ed2dc77f0d1ea7f106ecbd1850e406adc41b51',
    tokenDecimals: 18,
    exchangeAddress: '0x071002d8f0e5e210e510c68504e435c4a425df8b'
  },
  {
    symbol: 'LAVA',
    name: 'Lava',
    tokenAddress: '0xd89c37fd7c0fa3b107b7e4a8731dd3aaec488954',
    tokenDecimals: 8,
    exchangeAddress: '0x41e48af64f8ebf24194ce323b0760ee09bbb3ac4'
  },
  {
    symbol: 'CRKC',
    name: 'CREEKCOIN CRKC ERC20',
    tokenAddress: '0x2515905dd027cc38f139feda8e7e6945c7f9d07a',
    tokenDecimals: 18,
    exchangeAddress: '0xfaddccf91009c6383bc7b75c7f19a2c8be2f75ef'
  },
  {
    symbol: 'RLC',
    name: 'iEx.ec Network Token',
    tokenAddress: '0xf09209cc5eae846ee2cc4a493e7b962ca7bcfbbb',
    tokenDecimals: 9,
    exchangeAddress: '0x198da2b510e297605641f38b64e668675d778c6f'
  },
  {
    symbol: 'DOS',
    name: 'DOS Network Token',
    tokenAddress: '0x70861e862e1ac0c96f853c8231826e469ead37b1',
    tokenDecimals: 18,
    exchangeAddress: '0xb5e96c3ad1ccc79e7ab13433471baf785bb4977e'
  },
  {
    symbol: 'CEP',
    name: 'Cepheus',
    tokenAddress: '0x4cbdd06fcc050c7e0bd77478ed0fe4ea5eec651c',
    tokenDecimals: 18,
    exchangeAddress: '0xeb765bc156de3249b491d2db7aba3450fbcf9c5b'
  },
  {
    symbol: 'RCN',
    name: 'Readcoin',
    tokenAddress: '0x189c05c3c191015c694032e1b09c190d5db3fb50',
    tokenDecimals: 8,
    exchangeAddress: '0x112558c05b1e7f28daa98e48c8d7e0ced2f496c8'
  },
  {
    symbol: 'MITH',
    name: 'Mithril Token',
    tokenAddress: '0x3893b9422cd5d70a81edeffe3d5a1c6a978310bb',
    tokenDecimals: 18,
    exchangeAddress: '0x6469a4e75f37d9f8f4b1cee6bb3c1a1fe933e2a7'
  },
  {
    symbol: 'DPP',
    name: 'DA Power Play Token',
    tokenAddress: '0x01b3ec4aae1b8729529beb4965f27d008788b0eb',
    tokenDecimals: 18,
    exchangeAddress: '0x7ea7134ed6c41d9e35dae7e7e1ff0fcc406224ca'
  },
  {
    symbol: 'BAL',
    name: 'Balance token',
    tokenAddress: '0xe7049114562c759d5e9d1d25783773ccd61c0a65',
    tokenDecimals: 0,
    exchangeAddress: '0x2afbcc0bb7a78bd4d9a63c24c13042212b37f665'
  },
  {
    symbol: 'PRO',
    name: 'ProChain',
    tokenAddress: '0x8377ee6d3545bc6ff1425ee3015dc648b149c7b2',
    tokenDecimals: 2,
    exchangeAddress: '0x238ff2e978a7fbb59ee2636caad269a440cbd43f'
  },
  {
    symbol: 'DEV',
    name: 'Dev',
    tokenAddress: '0x98626e2c9231f03504273d55f397409defd4a093',
    tokenDecimals: 18,
    exchangeAddress: '0x48b109a5981573d03e5becec76aa805b7640cd58'
  },
  {
    symbol: 'CET',
    name: 'CoinEx Token',
    tokenAddress: '0x081f67afa0ccf8c7b17540767bbe95df2ba8d97f',
    tokenDecimals: 18,
    exchangeAddress: '0x28fe20afbf3450f13b803a639e19a8b0c005a5f3'
  },
  {
    symbol: 'DTOX',
    name: 'DeToxTheWorld',
    tokenAddress: '0x39550dc5919a990a5786fcdc1d5b7c392d362dde',
    tokenDecimals: 8,
    exchangeAddress: '0x7cdff5f7e1886767ae561ea0c2f926db3c25706d'
  },
  {
    symbol: 'ETHBO',
    name: 'EthBo',
    tokenAddress: '0xa120cb0530ea11451b002b7eafac91d8b5b8a499',
    tokenDecimals: 18,
    exchangeAddress: '0xa0834bad199282494763f36e93c4900cc950360e'
  },
  {
    symbol: 'MINDS',
    name: 'Minds',
    tokenAddress: '0xb26631c6dda06ad89b93c71400d25692de89c068',
    tokenDecimals: 18,
    exchangeAddress: '0x0ce13e66bef17801c9f19fb763be2dd2f391d7c2'
  },
  {
    symbol: 'TAU',
    name: 'Lamden Tau',
    tokenAddress: '0xc27a2f05fa577a83ba0fdb4c38443c0718356501',
    tokenDecimals: 18,
    exchangeAddress: '0x72fea1b0bf11c86e461c38d9f73e78dd21000d64'
  },
  {
    symbol: 'NTK',
    name: 'NeuroToken',
    tokenAddress: '0x69beab403438253f13b6e92db91f7fb849258263',
    tokenDecimals: 18,
    exchangeAddress: '0x46c106a6befddd066b202c9763ccc55c6f6c429b'
  },
  {
    symbol: 'USStocks',
    name: 'Major US stock market tracking index, redeemable for DAI at expiration on 15 May, 2019',
    tokenAddress: '0x36774fbca6b17325947cb208f77b4871ac7b6217',
    tokenDecimals: 18,
    exchangeAddress: '0xcdd6e09627d23368b770d9162807f181d061fb3e'
  },
  {
    symbol: 'GST2',
    name: 'Gastoken.io',
    tokenAddress: '0x0000000000b3f879cb30fe243b4dfee438691c04',
    tokenDecimals: 2,
    exchangeAddress: '0x929507cd3d90ab11ec4822e9eb5a48eb3a178f19'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x077d52b047735976dfda76fef74d4d988ac25196',
    tokenDecimals: 18,
    exchangeAddress: '0xb71d0e91b4b0edaea879d74d20632edafe46ef37'
  },
  {
    symbol: 'BITCAR',
    name: 'BitCar',
    tokenAddress: '0x08b4c866ae9d1be56a06e0c302054b4ffe067b43',
    tokenDecimals: 8,
    exchangeAddress: '0x480b971a86736448eb3ce00133008b348905ae5a'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x467fb51d54d7e51ee925f7f1a81ad5f2a0211169',
    tokenDecimals: 18,
    exchangeAddress: '0xc202026dbfaa80dbb62d90cc645877fad70fd19d'
  },
  {
    symbol: 'WAX',
    name: 'Wax Token',
    tokenAddress: '0x39bb259f66e1c59d5abef88375979b4d20d98022',
    tokenDecimals: 8,
    exchangeAddress: '0xb3d8e9b03a7c5a5f6bea1eadafa3c766316225d3'
  },
  {
    symbol: 'KCS',
    name: 'Kucoin Shares',
    tokenAddress: '0x039b5649a59967e3e936d7471f9c3700100ee1ab',
    tokenDecimals: 6,
    exchangeAddress: '0xc0e77cdd039a3f731ae0f5c6c9f4a91d4bc28880'
  },
  {
    symbol: 'FTX',
    name: 'FintruX Network',
    tokenAddress: '0xd559f20296ff4895da39b5bd9add54b442596a61',
    tokenDecimals: 18,
    exchangeAddress: '0x80f0f3e1482bab7fb6ed70185476f2fcdb596fa9'
  },
  {
    symbol: 'PKTF',
    name: 'Private Katinrun Foundation',
    tokenAddress: '0x7add89f3a7d2530d83b99593c67f56740ec11cc6',
    tokenDecimals: 18,
    exchangeAddress: '0x45ed432a5f3638100cfc7c213e88fc902ac74cd4'
  },
  {
    symbol: 'KKC',
    name: 'KOKOCoin',
    tokenAddress: '0x1fdde7525783c36153a8a6b618e2b5210a23ce37',
    tokenDecimals: 18,
    exchangeAddress: '0x5388857f3607962064d0505201f3faf2d20fa4b9'
  },
  {
    symbol: 'MRPH',
    name: 'Morpheus.Network',
    tokenAddress: '0x7b0c06043468469967dba22d1af33d77d44056c8',
    tokenDecimals: 4,
    exchangeAddress: '0x60298a63804d730bf0fbb79d4010193d5d9b8e5d'
  },
  {
    symbol: 'WETC',
    name: 'WETC',
    tokenAddress: '0x86aabcc646f290b9fc9bd05ce17c3858d1511da1',
    tokenDecimals: 18,
    exchangeAddress: '0x0729d4d5e1956fe977662c8e149adfba561f86e5'
  },
  {
    symbol: 'KTR',
    name: 'KRISTREEDERTOKEN',
    tokenAddress: '0x9a8c04e6166c553dc01dd8f36b78904833baeb57',
    tokenDecimals: 18,
    exchangeAddress: '0x269cac915ef69d9920a48fd2dc3df5dc5941a779'
  },
  {
    symbol: 'AST',
    name: 'AirSwap Token',
    tokenAddress: '0x27054b13b1b798b345b591a4d22e6562d47ea75a',
    tokenDecimals: 4,
    exchangeAddress: '0xc462a2fd31c83f6ee220400d1506d9e9f1f4bb01'
  },
  {
    symbol: 'VLD',
    name: 'VALID',
    tokenAddress: '0x922ac473a3cc241fd3a0049ed14536452d58d73c',
    tokenDecimals: 18,
    exchangeAddress: '0x83c50f91c7147d7de832d11b95404ba306b07a69'
  },
  {
    symbol: 'SOV',
    name: 'SoundMoneyCoin',
    tokenAddress: '0x010589b7c33034b802f7dba2c88cc9cec0f46673',
    tokenDecimals: 8,
    exchangeAddress: '0x6ac136ef1856ab1f8c030b72d3b7f96580a975a3'
  },
  {
    symbol: 'TTF',
    name: 'TIMETOFLYTOKEN',
    tokenAddress: '0x92dd20c7da4d004a1a6fc094dc7d0c7169899353',
    tokenDecimals: 18,
    exchangeAddress: '0x9e6d609ca47d524abe086c0862a3b31859fc44f8'
  },
  {
    symbol: 'DREAM',
    name: 'DreamTeam Token',
    tokenAddress: '0x82f4ded9cec9b5750fbff5c2185aee35afc16587',
    tokenDecimals: 6,
    exchangeAddress: '0xbd04c3749506ce30eed93c06f93f18223c3ff5aa'
  },
  {
    symbol: 'MANU',
    name: 'MANUCoin',
    tokenAddress: '0xf7fda1bf4bd0b2b0dea343d1e8e08d8b869d08ef',
    tokenDecimals: 9,
    exchangeAddress: '0x2fee056acc850b614c9161c5e1fd482a93aa896b'
  },
  {
    symbol: 'LIKE',
    name: 'LikeCoin',
    tokenAddress: '0x02f61fd266da6e8b102d4121f5ce7b992640cf98',
    tokenDecimals: 18,
    exchangeAddress: '0x40c2313279a97c9551ae3d06a274de8364d1f3e0'
  },
  {
    symbol: 'P3X',
    name: 'PoWH3D Extended',
    tokenAddress: '0x058a144951e062fc14f310057d2fd9ef0cf5095b',
    tokenDecimals: 18,
    exchangeAddress: '0x315945cd5c5b601643179d2803ab844e19a35fa8'
  },
  {
    symbol: 'IKC',
    name: 'www.internetkeys.net - Multiboard',
    tokenAddress: '0xd64794250393f825e57e0ffccd3c75cad4564be3',
    tokenDecimals: 8,
    exchangeAddress: '0x82df4774a61034381da474dc0b7319b44b520b8d'
  },
  {
    symbol: 'RUBI',
    name: 'Rubin',
    tokenAddress: '0xefde86ec7be1a27dc1ea2a027e5e7c997af5d066',
    tokenDecimals: 8,
    exchangeAddress: '0x2830b513f4ab3971e9a761803785277ba5ee4dab'
  },
  {
    symbol: 'NS7',
    name: 'Najah Safiya',
    tokenAddress: '0xe1a0a311adb89920816b79029484ea9b7d1ef32c',
    tokenDecimals: 8,
    exchangeAddress: '0xf6c7ab80d38588a905cadf1db03d9333cb04d177'
  },
  {
    symbol: 'IHF',
    name: 'Invictus Hyperion',
    tokenAddress: '0xaf1250fa68d7decd34fd75de8742bc03b29bd58e',
    tokenDecimals: 18,
    exchangeAddress: '0xaeb8fb9d0a3f21ab88fc12435cdc4aae13799eb6'
  },
  {
    symbol: 'CEL',
    name: 'Celsius',
    tokenAddress: '0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d',
    tokenDecimals: 4,
    exchangeAddress: '0x91debb54de02872a259c17699d9b794bc949fed2'
  },
  {
    symbol: 'NYOT',
    name: 'NotYourOrdinaryToken',
    tokenAddress: '0xea6ab13251aa6ae87475b418f529208eae317250',
    tokenDecimals: 2,
    exchangeAddress: '0x616c0ca2be15d68e00c5dca93e20c5b1f245300e'
  },
  {
    symbol: 'ERBYS',
    name: 'ErrbodysToken',
    tokenAddress: '0x29c8682e6cabd9485413cf81057ffa8fd4c399a4',
    tokenDecimals: 2,
    exchangeAddress: '0x8fae74207942f3a78747740658ab63c90d8400ff'
  },
  {
    symbol: 'CAR',
    name: 'CarBlock.io',
    tokenAddress: '0x4d9e23a3842fe7eb7682b9725cf6c507c424a41b',
    tokenDecimals: 18,
    exchangeAddress: '0xf01b1232af4f94519933dff65041227ff52f11f9'
  },
  {
    symbol: 'HOT',
    name: 'Hydro Protocol Token',
    tokenAddress: '0x9af839687f6c94542ac5ece2e317daae355493a1',
    tokenDecimals: 18,
    exchangeAddress: '0xe123575bf28ab05a65de145061ba747887deeae3'
  },
  {
    symbol: 'T2T',
    name: 'traceto.io',
    tokenAddress: '0xe6824483e279d967ea6f8472ace7585862fa1185',
    tokenDecimals: 18,
    exchangeAddress: '0x429f18e437ed3cf1c095de37c340616842c97d20'
  },
  {
    symbol: 'BTCETH7525',
    name: 'BitEth7525RebalancingSetToken',
    tokenAddress: '0xa35fc5019c4dc509394bd4d74591a0bf8852c195',
    tokenDecimals: 18,
    exchangeAddress: '0xca257d6779b153f5b3f7cffd89e5b37529c70947'
  },
  {
    symbol: 'BTCETH2575',
    name: 'BitEth2575RebalancingSetToken',
    tokenAddress: '0xa6c040045d962e4b8efa00954c7d23ccd0a2b8ad',
    tokenDecimals: 18,
    exchangeAddress: '0x1afc0bb4c1db404493fec6c2ceabd25f1eeb0a65'
  },
  {
    symbol: 'DIP',
    name: 'Decentralized Insurance Protocol',
    tokenAddress: '0xc719d010b63e5bbf2c0551872cd5316ed26acd83',
    tokenDecimals: 18,
    exchangeAddress: '0x61792f290e5100fbbcbb2309f03a1bab869fb850'
  },
  {
    symbol: 'BBW',
    name: 'BBWCoin',
    tokenAddress: '0x27b5b94a7269e175864d2c5e584d8f1414a2d94f',
    tokenDecimals: 8,
    exchangeAddress: '0x7141b573a6fb6c99c97c234c1b65e1c9696d29d1'
  },
  {
    symbol: 'ZMO',
    name: 'ZmeenaOrrCoin',
    tokenAddress: '0xa538cc79644c7522ca3c1f150b4979e06cc71804',
    tokenDecimals: 2,
    exchangeAddress: '0x9129ad3fd905293ffcc22ff7a1ef0406ce7c0c27'
  },
  {
    symbol: 'STETHDai',
    name: 'STETHDaiRebalancingSetToken',
    tokenAddress: '0x585c2cf94c41b528ec7329cbc3cde3c4f8d268db',
    tokenDecimals: 18,
    exchangeAddress: '0x10c4be5806878f78e6179af6d09d035bbdab2ec2'
  },
  {
    symbol: 'RC20',
    name: 'RoboCalls',
    tokenAddress: '0x61b2d3ea9f1c6b387c985c73d40e8fbfb284e5c7',
    tokenDecimals: 18,
    exchangeAddress: '0x9394c20adca4512dfc3d3c184c648e4193462ebb'
  },
  {
    symbol: 'SP',
    name: 'SunPower',
    tokenAddress: '0x33ad8ccd192c2b1782b0d3e557e32a54771e16f1',
    tokenDecimals: 18,
    exchangeAddress: '0x102745b4a019d37bc342850b0c36125f1cb2858d'
  },
  {
    symbol: 'NVT',
    name: 'Nova Token',
    tokenAddress: '0x09d8b66c48424324b25754a873e290cae5dca439',
    tokenDecimals: 18,
    exchangeAddress: '0x2e4d90dc7fd3d9be8fdb6fdd4b98e2ddc2cfa607'
  },
  {
    symbol: 'WaBi',
    name: 'WaBi',
    tokenAddress: '0x286bda1413a2df81731d4930ce2f862a35a609fe',
    tokenDecimals: 18,
    exchangeAddress: '0x65b809f942b3ec5695bbf74670c3a78657168320'
  },
  {
    symbol: 'CRYPTOLAND',
    name: 'CRYPTOLAND',
    tokenAddress: '0xebdc8da065f78048b0b0f3c17c8b5f4348daf219',
    tokenDecimals: 8,
    exchangeAddress: '0x0a7ee2162c0ee6be4a1de9e7f73cff5432309ec0'
  },
  {
    symbol: 'WIB',
    name: 'WIBSON',
    tokenAddress: '0x3f17dd476faf0a4855572f0b6ed5115d9bba22ad',
    tokenDecimals: 9,
    exchangeAddress: '0xad014d0dc396e4333778832d24e3a5e78b3593be'
  },
  {
    symbol: 'PEP',
    name: 'PEP Token',
    tokenAddress: '0xbb0ef9e617faddf54b8d16e29046f72b4d3ec77f',
    tokenDecimals: 18,
    exchangeAddress: '0x579134b2dc4a79746d365aa8097e8dc8b571fed1'
  },
  {
    symbol: '4/26 106-C',
    name: 'Apr 26 106-CALL',
    tokenAddress: '0xb134ec3fe107a190809ae612eec93f3847c1aa4d',
    tokenDecimals: 18,
    exchangeAddress: '0x0a8fb4a411a0fc781d65b19f3b261c858f82ffef'
  },
  {
    symbol: 'RMC',
    name: 'RemiCoin',
    tokenAddress: '0x7dc4f41294697a7903c4027f6ac528c5d14cd7eb',
    tokenDecimals: 8,
    exchangeAddress: '0x779dcfc531d31cd4fd7f4276bf357130dce3cc9b'
  },
  {
    symbol: 'SNGLS',
    name: 'SingularDTV',
    tokenAddress: '0xaec2e87e0a235266d9c5adc9deb4b2e29b54d009',
    tokenDecimals: 0,
    exchangeAddress: '0x61061e00a5acda7886ccce2a051539ef2fca1ce6'
  },
  {
    symbol: 'VIB',
    name: 'Vibe',
    tokenAddress: '0x2c974b2d0ba1716e644c1fc59982a89ddd2ff724',
    tokenDecimals: 18,
    exchangeAddress: '0xcc763e9add17a9d77b5b1b0fb7cb6e51508e3008'
  },
  {
    symbol: 'MPH',
    name: 'CHASYR',
    tokenAddress: '0x957a688d23a00f196b2da8e2531702c67de167cf',
    tokenDecimals: 18,
    exchangeAddress: '0xd4846bc16a6bf859c1253a6f37239ff06a99abe5'
  },
  {
    symbol: 'BLZ',
    name: 'Bluzelle Token',
    tokenAddress: '0x5732046a883704404f284ce41ffadd5b007fd668',
    tokenDecimals: 18,
    exchangeAddress: '0x0310396b59c4d90762398b8c5a24d646701c6f18'
  },
  {
    symbol: 'MFG',
    name: 'SyncFab Smart Manufacturing Blockchain',
    tokenAddress: '0x6710c63432a2de02954fc0f851db07146a6c0312',
    tokenDecimals: 18,
    exchangeAddress: '0x27882bfeabcd4ba886854c03206d12c17be5f001'
  },
  {
    symbol: 'findtherabbit.me',
    name: 'https://findtherabbit.me',
    tokenAddress: '0x713a1c4876673a982a828753166c452ba9721994',
    tokenDecimals: 18,
    exchangeAddress: '0x6b92c982c33e94f25fec6c23dd46403b925a1ae3'
  },
  {
    symbol: 'CC',
    name: 'CartyCion',
    tokenAddress: '0x3d779a7fb80723c6385524d113792d119acd2267',
    tokenDecimals: 18,
    exchangeAddress: '0x89df148b1c76d00b567f91ceeb7d0b3feb905011'
  },
  {
    symbol: 'HUNT',
    name: 'HuntToken',
    tokenAddress: '0x9aab071b4129b083b01cb5a0cb513ce7eca26fa5',
    tokenDecimals: 18,
    exchangeAddress: '0xb8cefb02e4f911c250b27690b72a61d58167d18c'
  },
  {
    symbol: 'MDL',
    name: 'Medilink Coin',
    tokenAddress: '0x8c8d6016344425ddd1d63523411de5eb398cd141',
    tokenDecimals: 18,
    exchangeAddress: '0x505d1fada4967cbc2bf01da31089a1333528f4ab'
  },
  {
    symbol: 'NPXS',
    name: 'Pundi X Token',
    tokenAddress: '0xa15c7ebe1f07caf6bff097d8a589fb8ac49ae5b3',
    tokenDecimals: 18,
    exchangeAddress: '0x93ff2c787c140c4ce21f01cc211fbdace274077f'
  },
  {
    symbol: 'IMC',
    name: 'IMCoin',
    tokenAddress: '0x379e5f3eab1b05f3811519907b36b8e04fe3a897',
    tokenDecimals: 18,
    exchangeAddress: '0xa983458a7b5434a89f48198d144151846a8fcc01'
  },
  {
    symbol: 'EDG',
    name: 'Edgeless',
    tokenAddress: '0x08711d3b02c8758f2fb3ab4e80228418a7f8e39c',
    tokenDecimals: 0,
    exchangeAddress: '0x4ac2ccebac7b96f1e66fbb7049c740a8ca8ef78d'
  },
  {
    symbol: 'GRG',
    name: 'Rigo Token',
    tokenAddress: '0x4fbb350052bca5417566f188eb2ebce5b19bc964',
    tokenDecimals: 18,
    exchangeAddress: '0xee5e8d2357a29f4a85a938679233fe24fbc2cf1d'
  },
  {
    symbol: 'MX',
    name: 'Mythex',
    tokenAddress: '0xf6c868c4f2a48949ff9b01e67acd206543352fcd',
    tokenDecimals: 0,
    exchangeAddress: '0xe3349fd5f3bf3b878ac5444c29c7308bf5992bbb'
  },
  {
    symbol: 'SUB',
    name: 'Substratum',
    tokenAddress: '0x8d75959f1e61ec2571aa72798237101f084de63a',
    tokenDecimals: 18,
    exchangeAddress: '0xc080b284028e37e3b26d85f2c53ad51904471d7a'
  },
  {
    symbol: 'BTDE',
    name: 'Bethon Digital Ecosystem',
    tokenAddress: '0xc9d6382e5abfed97cc856216ced900b64324e502',
    tokenDecimals: 18,
    exchangeAddress: '0xb3d5641170b1b2e4344e62993adbbe54574102e4'
  },
  {
    symbol: 'COLR',
    name: 'Cryptovoxels Color',
    tokenAddress: '0x3867ef780a3afcf1201ef4f2acc6a46e3bd1eb88',
    tokenDecimals: 0,
    exchangeAddress: '0x3f0c63da66457dedc2677bef6bbdd457ba7a3c0b'
  },
  {
    symbol: 'MOD',
    name: 'Modum Token',
    tokenAddress: '0x957c30ab0426e0c93cd8241e2c60392d08c6ac8e',
    tokenDecimals: 0,
    exchangeAddress: '0xccb98654cd486216fff273dd025246588e77cfc1'
  },
  {
    symbol: 'PLN',
    name: 'MoneyFold Polish Zloty',
    tokenAddress: '0x7880515ed114127bfe1e76462ba5e2725939129e',
    tokenDecimals: 2,
    exchangeAddress: '0x6a4096bf1cb457049502aaaa6303c9cb1469546d'
  },
  {
    symbol: 'IMMO',
    name: 'blockimmo',
    tokenAddress: '0x9c3e7e016389661473ac64f4c37f5f7f2955e499',
    tokenDecimals: 18,
    exchangeAddress: '0x4218710e520e01e3158d9bdb579002e983be176c'
  },
  {
    symbol: 'DST',
    name: 'DragonSeriesToken',
    tokenAddress: '0xc5807256e2e2fe85ca94c3617c4bc5ff2bd9cfb6',
    tokenDecimals: 18,
    exchangeAddress: '0x2f75dc34c4cacd835041dd523b7d36d391b92aa0'
  },
  {
    symbol: 'NEU',
    name: 'Neumark',
    tokenAddress: '0xa823e6722006afe99e91c30ff5295052fe6b8e32',
    tokenDecimals: 18,
    exchangeAddress: '0x34b0b7ba7cd9efa0582dcfbf5f6d4cfe344d8c47'
  },
  {
    symbol: 'HGT',
    name: 'HelloGold Token',
    tokenAddress: '0xba2184520a1cc49a6159c57e61e1844e085615b6',
    tokenDecimals: 8,
    exchangeAddress: '0x658d3a5467e4b90a967530cf73718f453f35b2ac'
  },
  {
    symbol: 'YUN',
    name: 'Yun Planet',
    tokenAddress: '0x02b3c88b805f1c6982e38ea1d40a1d83f159c3d4',
    tokenDecimals: 8,
    exchangeAddress: '0x7b46b7df165e31dcbed54eaf1975b0c780db47e7'
  },
  {
    symbol: 'STORM',
    name: 'Storm Token',
    tokenAddress: '0xd0a4b8946cb52f0661273bfbc6fd0e0c75fc6433',
    tokenDecimals: 18,
    exchangeAddress: '0xb0b12c05df3237eb6f0ce7312b68c37e140bf69b'
  },
  {
    symbol: 'KBC',
    name: 'KaratBank Coin',
    tokenAddress: '0xf3586684107ce0859c44aa2b2e0fb8cd8731a15a',
    tokenDecimals: 7,
    exchangeAddress: '0x2837ef3e8e0558ce0bfe465cfa4f8ba826683090'
  },
  {
    symbol: 'BTT',
    name: 'Bethon Token',
    tokenAddress: '0x36cd54b05b82156e454d690af1d392a27af41c94',
    tokenDecimals: 18,
    exchangeAddress: '0x9f023605f04a6bab127e0c40c4ddd17b5b5873a0'
  },
  {
    symbol: 'AOA',
    name: 'Aurora',
    tokenAddress: '0x9ab165d795019b6d8b3e971dda91071421305e5a',
    tokenDecimals: 18,
    exchangeAddress: '0x4a5875fc146005f7c3143ab403b9aafa42f9b152'
  },
  {
    symbol: 'TRX',
    name: 'Tronix',
    tokenAddress: '0xf230b790e05390fc8295f4d3f60332c93bed42e2',
    tokenDecimals: 6,
    exchangeAddress: '0x8f0f1fa9257e30d2f6eac262221447d29d33ac8c'
  },
  {
    symbol: 'TST',
    name: 'Touch Smart Token',
    tokenAddress: '0xd9bae39c725a1864b1133ad0ef1640d02f79b78c',
    tokenDecimals: 18,
    exchangeAddress: '0x8ac50b8ad6a856a492741d16e40b812652056483'
  },
  {
    symbol: 'MATIC',
    name: 'Matic Token',
    tokenAddress: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
    tokenDecimals: 18,
    exchangeAddress: '0x9a7a75e66b325a3bd46973b2b57c9b8d9d26a621'
  },
  {
    symbol: 'BCDT',
    name: 'Blockchain Certified Data Token',
    tokenAddress: '0xacfa209fb73bf3dd5bbfb1101b9bc999c49062a5',
    tokenDecimals: 18,
    exchangeAddress: '0x7acbb9fb0aff7673951ba35963c8fdc370c6017c'
  },
  {
    symbol: 'AD',
    name: 'Asian Dragon',
    tokenAddress: '0xf6dbe88ba55f1793ff0773c9b1275300f830914f',
    tokenDecimals: 8,
    exchangeAddress: '0xd6200e54cd6c064438c6ddb32e3af3ce4f0c5802'
  },
  {
    symbol: 'GOO',
    name: 'Vials of Goo',
    tokenAddress: '0xdf0960778c6e6597f197ed9a25f12f5d971da86c',
    tokenDecimals: 12,
    exchangeAddress: '0xe52dceab9c8892eca29b0a0869257d7ad26268d2'
  },
  {
    symbol: 'TTZ',
    name: 'TestTokenZ',
    tokenAddress: '0xd21ba1c2c0e8fbd236553efa39137165b3a68e75',
    tokenDecimals: 18,
    exchangeAddress: '0x7f3dab432429bf4de09b8ec697fc6d817f483b42'
  },
  {
    symbol: 'RST',
    name: 'REGA Risk Sharing Token',
    tokenAddress: '0xa17d1bf14802e0eec8f84b3b8b638a9402d60e9e',
    tokenDecimals: 10,
    exchangeAddress: '0xd6ed8979455ebed92db3b7afdd1ab200054a88bc'
  },
  {
    symbol: 'MYB',
    name: 'MyBit',
    tokenAddress: '0x5d60d8d7ef6d37e16ebabc324de3be57f135e0bc',
    tokenDecimals: 18,
    exchangeAddress: '0x1e0fbdaf60e1195a46e2af40a1c7b84460a13444'
  },
  {
    symbol: 'TEST',
    name: 'Testing Token',
    tokenAddress: '0xf1bbbfe96c5845dd4d5f60e7ce758bbc24f7f5ee',
    tokenDecimals: 18,
    exchangeAddress: '0x90be26ffa3f65d00858f4b2ad15b95e78d402f0f'
  },
  {
    symbol: 'MER',
    name: 'Meritum',
    tokenAddress: '0xf3981e5ff82caaa5d4cb4fba540b06c20c3d3dbe',
    tokenDecimals: 18,
    exchangeAddress: '0x2e9e106ef10613025a43c6afdcf68d6dd9f5d701'
  },
  {
    symbol: 'cETH',
    name: 'Compound Ether',
    tokenAddress: '0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5',
    tokenDecimals: 8,
    exchangeAddress: '0x3f3e2cf087b4a818a7c610eb8ef332d894736d7d'
  },
  {
    symbol: 'SOCKS',
    name: 'Unisocks Edition 0',
    tokenAddress: '0x23b608675a2b2fb1890d3abbd85c5775c51691d5',
    tokenDecimals: 18,
    exchangeAddress: '0x22d8432cc7aa4f8712a655fc4cdfb1baec29fca9'
  },
  {
    symbol: 'VEN',
    name: 'VeChain Token',
    tokenAddress: '0xd850942ef8811f2a866692a623011bde52a462c1',
    tokenDecimals: 18,
    exchangeAddress: '0xb23c1553cf98f7abbc24c94141e5ce48148fa351'
  },
  {
    symbol: 'cDAI',
    name: 'Compound Dai',
    tokenAddress: '0xf5dce57282a584d2746faf1593d3121fcac444dc',
    tokenDecimals: 8,
    exchangeAddress: '0x45a2fdfed7f7a2c791fb1bdf6075b83fad821dde'
  },
  {
    symbol: 'HUM',
    name: 'Humanity',
    tokenAddress: '0xbbd1706d16418bb136e1497a73d3af4164586da0',
    tokenDecimals: 18,
    exchangeAddress: '0xe499657190d515119077af5d64f44b6f850baea5'
  },
  {
    symbol: 'SKAN',
    name: 'LakesCash',
    tokenAddress: '0x9cb79101f795287585843d71c1b0a33a0724c2bb',
    tokenDecimals: 2,
    exchangeAddress: '0x9f1fbbdd2c784025e170c7e636c68ae0de0cc435'
  },
  {
    symbol: 'ARN',
    name: 'Aeron',
    tokenAddress: '0xba5f11b16b155792cf3b2e6880e8706859a8aeb6',
    tokenDecimals: 8,
    exchangeAddress: '0x05d9c70cee7760ff3c7b50c3f7f9c0de24c0d840'
  },
  {
    symbol: 'SXUT',
    name: 'Spectre.ai U-Token',
    tokenAddress: '0x2c82c73d5b34aa015989462b2948cd616a37641f',
    tokenDecimals: 18,
    exchangeAddress: '0x6a69ddbbf936fc343cbefb4e4edbf6dbc4002e04'
  },
  {
    symbol: 'ZXBT',
    name: 'ZerroXBToken Project 0xbt',
    tokenAddress: '0xcd0a53685b594a543181e6203433766648a8cd43',
    tokenDecimals: 3,
    exchangeAddress: '0xce1ccd4668c88d5ea832a33048c41c3eded3b38a'
  },
  {
    symbol: 'DOYLE',
    name: 'DOYLE COIN',
    tokenAddress: '0x9181eef2ea5624c187d1147134b847552302da2a',
    tokenDecimals: 18,
    exchangeAddress: '0xb95eba7ff86e34d7eb8fb91618a6119059908bbb'
  },
  {
    symbol: 'MMTM',
    name: 'Momentum',
    tokenAddress: '0x9f22a13204c09e0f89144b63da0588a836c07931',
    tokenDecimals: 18,
    exchangeAddress: '0xb472682be408335d93d1a9b56fd1f92a8ab55198'
  },
  {
    symbol: 'MTN',
    name: 'MedToken',
    tokenAddress: '0x41dbecc1cdc5517c6f76f6a6e836adbee2754de3',
    tokenDecimals: 18,
    exchangeAddress: '0xc3ee3be4f46cd5ca30406c37f074031cfe3ae181'
  },
  {
    symbol: 'MVT',
    name: 'The Movement',
    tokenAddress: '0x3d46454212c61ecb7b31248047fa033120b88668',
    tokenDecimals: 18,
    exchangeAddress: '0x89a294f122d1cc3696be37d00d113f45c262712a'
  },
  {
    symbol: 'POP',
    name: 'POP Network Token',
    tokenAddress: '0x5d858bcd53e085920620549214a8b27ce2f04670',
    tokenDecimals: 18,
    exchangeAddress: '0xdd60feabc16bbc79ec558fd4b852fe1ed9f030e8'
  },
  {
    symbol: 'Candy',
    name: 'Unicorn Candy Coin',
    tokenAddress: '0xcd3673af09e76c74d889aabab68ca0645566a3a1',
    tokenDecimals: 18,
    exchangeAddress: '0x450afa2c7d86cd4aa024a407e5b391627b013fc7'
  },
  {
    symbol: 'RGS',
    name: 'Rusgas',
    tokenAddress: '0x4c383bdcae52a6e1cb810c76c70d6f31a249ec9b',
    tokenDecimals: 8,
    exchangeAddress: '0xecdd1fc0b1297683330436a99ffecb8a156cb098'
  },
  {
    symbol: 'UBN',
    name: 'Ubricoin',
    tokenAddress: '0xdb13025b219db5e4529f48b65ff009a26b6ae733',
    tokenDecimals: 18,
    exchangeAddress: '0x170cb1c6b6ca03f693c79617001f83a47bedea8c'
  },
  {
    symbol: 'AI',
    name: 'PolyAi',
    tokenAddress: '0x5121e348e897daef1eef23959ab290e5557cf274',
    tokenDecimals: 18,
    exchangeAddress: '0x3ca04f154b30661a84fdcddadc55f66b8ad82221'
  },
  {
    symbol: 'MBGN',
    name: 'Embiggen',
    tokenAddress: '0xdde19c145c1ee51b48f7a28e8df125da0cc440be',
    tokenDecimals: 18,
    exchangeAddress: '0x6af056d9919fab5b046112778340108d5ec3ebbb'
  },
  {
    symbol: 'NMU',
    name: 'NOISEMUSICTOKEN',
    tokenAddress: '0x4abefcd2996073093a06e5a3bd32acda6b3b2235',
    tokenDecimals: 18,
    exchangeAddress: '0xb2ec66d6fcf579af9b8035ec2cf85df0be8bdf82'
  },
  {
    symbol: 'NULS',
    name: 'Nuls',
    tokenAddress: '0xb91318f35bdb262e9423bc7c7c2a3a93dd93c92c',
    tokenDecimals: 18,
    exchangeAddress: '0x12dbf069f65dde8443782a92cfc47094754aa0cf'
  },
  {
    symbol: 'MTV',
    name: 'MultiVAC',
    tokenAddress: '0x8aa688ab789d1848d131c65d98ceaa8875d97ef1',
    tokenDecimals: 18,
    exchangeAddress: '0x3acb0e353759645d2c8ae098e2238956ceb681fb'
  },
  {
    symbol: 'PPP',
    name: 'PayPie',
    tokenAddress: '0xc42209accc14029c1012fb5680d95fbd6036e2a0',
    tokenDecimals: 18,
    exchangeAddress: '0x1b810f17eeef12838fe059c926093b30653e7567'
  },
  {
    symbol: 'INB',
    name: 'Insight Chain',
    tokenAddress: '0x17aa18a4b64a55abed7fa543f2ba4e91f2dce482',
    tokenDecimals: 18,
    exchangeAddress: '0x3a891d655c929b22e3d6791238f3a4545e31b81e'
  },
  {
    symbol: 'SWAT',
    name: 'SWTCoin',
    tokenAddress: '0xc0f1728d9513efc316d0e93a0758c992f88b0809',
    tokenDecimals: 8,
    exchangeAddress: '0x6c81a9649c26fc34db64967de6117c8a25e273db'
  },
  {
    symbol: 'PYC',
    name: 'Polycoin',
    tokenAddress: '0x4c3ad93c06a073be57845549914f8833101b58f3',
    tokenDecimals: 0,
    exchangeAddress: '0xf52281071b0563a95c34753fcf615d0d3c2c4de3'
  },
  {
    symbol: 'XD',
    name: 'Data Transaction Token',
    tokenAddress: '0x24dcc881e7dd730546834452f21872d5cb4b5293',
    tokenDecimals: 18,
    exchangeAddress: '0xb7cf1e1ea55572713feeec025d7cf56b3c6c6b6d'
  },
  {
    symbol: 'TUSD',
    name: 'TrueUSD',
    tokenAddress: '0x0000000000085d4780b73119b644ae5ecd22b376',
    tokenDecimals: 18,
    exchangeAddress: '0x5048b9d01097498fd72f3f14bc9bc74a5aac8fa7'
  },
  {
    symbol: 'AMB',
    name: 'Amber Token',
    tokenAddress: '0x4dc3643dbc642b72c158e7f3d2ff232df61cb6ce',
    tokenDecimals: 18,
    exchangeAddress: '0xca265a7f4c9dc47b259850b696ebeffa8bb18d9d'
  },
  {
    symbol: 'CENNZ',
    name: 'Centrality Token',
    tokenAddress: '0x1122b6a0e00dce0563082b6e2953f3a943855c1f',
    tokenDecimals: 18,
    exchangeAddress: '0xb25b1703b37ae34d405ad9d053aada87967aba92'
  },
  {
    symbol: 'NUTZ',
    name: 'CRYPTONUTZ',
    tokenAddress: '0x46ffe978f4cf28e7135804ff244b6cdc8dc51377',
    tokenDecimals: 18,
    exchangeAddress: '0xcb3091c01bd9502b666a6a0de55bf9df461fde68'
  },
  {
    symbol: 'GST1',
    name: 'Gastoken.io',
    tokenAddress: '0x88d60255f917e3eb94eae199d827dad837fac4cb',
    tokenDecimals: 2,
    exchangeAddress: '0x5b583057dfbc49c67dcd017b75a11148db1168e6'
  },
  {
    symbol: 'FOCT',
    name: 'Forcount',
    tokenAddress: '0x66946bc3e6738c70bbc4e69eb38a507f8eb9bc20',
    tokenDecimals: 18,
    exchangeAddress: '0x20ead976847626004d0120bcd02eb526eb6985c3'
  },
  {
    symbol: 'DANK',
    name: 'Dank Token',
    tokenAddress: '0x0cb8d0b37c7487b11d57f1f33defa2b1d3cfccfe',
    tokenDecimals: 18,
    exchangeAddress: '0x68e83c65629ed0d6e836c1957d304aa2741b240e'
  },
  {
    symbol: 'AAA',
    name: 'Change Your Life',
    tokenAddress: '0xd938137e6d96c72e4a6085412ada2dad78ff89c4',
    tokenDecimals: 8,
    exchangeAddress: '0x4fc96501dc4a33d2ae5d67d844f4434f3eef92d7'
  },
  {
    symbol: 'EVE',
    name: 'Devery.io',
    tokenAddress: '0x923108a439c4e8c2315c4f6521e5ce95b44e9b4c',
    tokenDecimals: 18,
    exchangeAddress: '0x23ffd1d8077b3e3679d48b9002dd11471e2295bc'
  },
  {
    symbol: 'SNX',
    name: 'Synthetix Network Token',
    tokenAddress: '0xef8a2c1bc94e630463293f71bf5414d13e80f62d',
    tokenDecimals: 18,
    exchangeAddress: '0xd9025ed64baa7b9046e37fe94670c79fccb2b5c8'
  },
  {
    symbol: 'MCH',
    name: 'Meritum Cash',
    tokenAddress: '0x10709ca9adcaa1728ad530be1ed39c0286124883',
    tokenDecimals: 18,
    exchangeAddress: '0xbb6e36aa6121246c056d04f16757933a1052e64c'
  },
  {
    symbol: 'MIM',
    name: 'Moiom',
    tokenAddress: '0x3bea1cb0ea10a35b1995233d6d57b34fb3142b1b',
    tokenDecimals: 18,
    exchangeAddress: '0x88942e83677e89c7bf68fc9e07621b09c33b4d47'
  },
  {
    symbol: 'AFA',
    name: 'Africahead Ipparts',
    tokenAddress: '0xfb48e0dea837f9438309a7e9f0cfe7ee3353a84e',
    tokenDecimals: 2,
    exchangeAddress: '0xfe52450ea8d64bc55c295c6162318ed79bb69df6'
  },
  {
    symbol: 'TELE',
    name: 'MiracleTele',
    tokenAddress: '0xb363a3c584b1f379c79fbf09df015da5529d4dac',
    tokenDecimals: 18,
    exchangeAddress: '0xcf6c25cfe2b2f6951357f0827e06430e1151ffb7'
  },
  {
    symbol: 'MAGK',
    name: 'Wizard Shares',
    tokenAddress: '0x0dba2b5162c4986acb5ddd1b4069de5ad749b47e',
    tokenDecimals: 18,
    exchangeAddress: '0x1ac13316a2c2beb2f701ccd4238dc34c74bb0c12'
  },
  {
    symbol: 'STR',
    name: 'Staker',
    tokenAddress: '0xbae235823d7255d9d48635ced4735227244cd583',
    tokenDecimals: 18,
    exchangeAddress: '0xc99b59ffae2abe1d66c2eb5a517be0f1b813c98b'
  },
  {
    symbol: 'LRC',
    name: 'LoopringCoin V2',
    tokenAddress: '0xbbbbca6a901c926f240b89eacb641d8aec7aeafd',
    tokenDecimals: 18,
    exchangeAddress: '0xa539baaa3aca455c986bb1e25301cef936ce1b65'
  },
  {
    symbol: 'RMK',
    name: 'RomikaHungary',
    tokenAddress: '0x1ebda9b505ad2c6ccee86bfc18f58035dcfdc26a',
    tokenDecimals: 2,
    exchangeAddress: '0x917d8f35a10985add5d7d95770af8cabefb05eaa'
  },
  {
    symbol: 'SHP',
    name: 'Sharpe Platform Token',
    tokenAddress: '0xef2463099360a085f1f10b076ed72ef625497a06',
    tokenDecimals: 18,
    exchangeAddress: '0x25a2273f0654b35c5daf8cd129f44e6bd32146f0'
  },
  {
    symbol: 'NTO',
    name: 'Fujinto',
    tokenAddress: '0x8a99ed8a1b204903ee46e733f2c1286f6d20b177',
    tokenDecimals: 18,
    exchangeAddress: '0xab76c739664681b0d84dc29250d4f71c5c249024'
  },
  {
    symbol: 'BAS',
    name: 'BitAsean',
    tokenAddress: '0x2a05d22db079bc40c2f77a1d1ff703a56e631cc1',
    tokenDecimals: 8,
    exchangeAddress: '0x5b6752dd3c7e68694440ea90124aa8d16e0ba0cd'
  },
  {
    symbol: 'HC',
    name: 'HC',
    tokenAddress: '0x642e48713946ecdb12c0b8830e8cb64425327955',
    tokenDecimals: 0,
    exchangeAddress: '0xdec31635e50acc89eeef6ec079766aaa7703ae3d'
  },
  {
    symbol: 'OCEAN',
    name: 'OceanToken',
    tokenAddress: '0x985dd3d42de1e256d09e1c10f112bccb8015ad41',
    tokenDecimals: 18,
    exchangeAddress: '0xa59cc1618d144ccac2bfb46f61272cebf00d90d5'
  },
  {
    symbol: 'NUSD',
    name: 'Neutral',
    tokenAddress: '0x0c6144c16af288948c8fdb37fd8fec94bff3d1d9',
    tokenDecimals: 6,
    exchangeAddress: '0xce23d871009a52ab5560ba613a042e45e1f33539'
  },
  {
    symbol: 'AMN',
    name: 'Amon',
    tokenAddress: '0x737f98ac8ca59f2c68ad658e3c3d8c8963e40a4c',
    tokenDecimals: 18,
    exchangeAddress: '0xe6c198d27a5b71144b40cfa2362ae3166728e0c8'
  },
  {
    symbol: 'PRTL',
    name: 'Partial Coin',
    tokenAddress: '0xf01d7939441a3b1b108c70a28dcd99c6a98ad4b4',
    tokenDecimals: 18,
    exchangeAddress: '0xc0a09103c80752e6e7c4265bfad7abecb37d4f06'
  },
  {
    symbol: 'SETH',
    name: 'Sether',
    tokenAddress: '0x78b039921e84e726eb72e7b1212bb35504c645ca',
    tokenDecimals: 18,
    exchangeAddress: '0xb25b24c590c3b92d18d41a9201922eb94ba884d2'
  },
  {
    symbol: 'NUG',
    name: 'Nuggets',
    tokenAddress: '0x245ef47d4d0505ecf3ac463f4d81f41ade8f1fd1',
    tokenDecimals: 18,
    exchangeAddress: '0x0887f5a22d0f258f11fb1562b6b5504efd5ff021'
  },
  {
    symbol: 'FAITH',
    name: 'FaithCoin',
    tokenAddress: '0xe531642e9bb5d027e9c20e03284287b97919a9a5',
    tokenDecimals: 8,
    exchangeAddress: '0x61c2145f113f5f9bc970476817f990831d60d38c'
  },
  {
    symbol: 'LIT',
    name: 'LITION',
    tokenAddress: '0x763fa6806e1acf68130d2d0f0df754c93cc546b2',
    tokenDecimals: 18,
    exchangeAddress: '0x8f814b4f0c18968a6d7aada420ecee74a33ecd3f'
  },
  {
    symbol: 'WCK',
    name: 'Wrapped CryptoKitties',
    tokenAddress: '0x19d9b17497824081e291115044b567c4722cdaeb',
    tokenDecimals: 18,
    exchangeAddress: '0x92d70317913a2fb013f252b7a139ed1782edc6d6'
  },
  {
    symbol: 'PGF7T',
    name: 'PGF500 Token',
    tokenAddress: '0x9fadea1aff842d407893e21dbd0e2017b4c287b6',
    tokenDecimals: 18,
    exchangeAddress: '0x7232869cc7dc739b95dcdcd2f685f094ffd13811'
  },
  {
    symbol: 'TTZ',
    name: 'TestTokenZ8',
    tokenAddress: '0x5f16c1991dff3f6fc2ea3ca3f3e6da13e1ddcb39',
    tokenDecimals: 8,
    exchangeAddress: '0xfa35e10c144adbc51ddcb5ea2271329df9ad00a3'
  },
  {
    symbol: 'META',
    name: 'MetaCartel',
    tokenAddress: '0x5c437a92e1c60570a43bed78eb3f9e0ea5121b32',
    tokenDecimals: 0,
    exchangeAddress: '0xbe7d47c6f434d60ebb6877c5160a8ca05d83b789'
  },
  {
    symbol: 'TRAT',
    name: 'Tratok',
    tokenAddress: '0x0cbc9b02b8628ae08688b5cc8134dc09e36c443b',
    tokenDecimals: 5,
    exchangeAddress: '0x57a579ac8d28264784d61897b407ee693028a070'
  },
  {
    symbol: 'AWE',
    name: 'AweCoin',
    tokenAddress: '0xfa0f26d2334764ce9f9582d8ad0514b5712589cf',
    tokenDecimals: 0,
    exchangeAddress: '0xcf636d7519e5385816a66cfd0955bc74b4ef6054'
  },
  {
    symbol: 'LAH',
    name: 'LoveArtHate',
    tokenAddress: '0xf5bdb0aa9f0c05ec3fc8a31d7053652401982b4d',
    tokenDecimals: 18,
    exchangeAddress: '0xc022da71557968e0fce96c423699323a7b7c0f99'
  },
  {
    symbol: 'SNX',
    name: 'Synthetix Network Token',
    tokenAddress: '0x5a4ade4f3e934a0885f42884f7077261c3f4f66f',
    tokenDecimals: 18,
    exchangeAddress: '0x8da198a049426bfcf1522b0dc52f84beda6e38ff'
  },
  {
    symbol: 'LTCD',
    name: 'LitecoinDiamond',
    tokenAddress: '0x100a6e7a8710726bc28d0213da0b4f06702ce349',
    tokenDecimals: 0,
    exchangeAddress: '0xbd3ee2572bb1e4c68e3935d13dd8b121261ccd4e'
  },
  {
    symbol: 'WCK',
    name: 'Wrapped CryptoKitties',
    tokenAddress: '0x09fe5f0236f0ea5d930197dce254d77b04128075',
    tokenDecimals: 18,
    exchangeAddress: '0x4ff7fa493559c40abd6d157a0bfc35df68d8d0ac'
  },
  {
    symbol: 'PIEG',
    name: 'Pi Edutainment Global',
    tokenAddress: '0xc68643bccde12df925469fe45df8a60812e64b36',
    tokenDecimals: 18,
    exchangeAddress: '0xd9ed4b169b897795e678266f9d2e1ace015d79e5'
  },
  {
    symbol: 'cUSDC',
    name: 'Compound USD Coin',
    tokenAddress: '0x39aa39c021dfbae8fac545936693ac917d5e7563',
    tokenDecimals: 8,
    exchangeAddress: '0xb791c10824296881f91bdbc16367bbd9743fd99b'
  },
  {
    symbol: 'MGN',
    name: 'Magnolia Token',
    tokenAddress: '0x80f222a749a2e18eb7f676d371f19ad7efeee3b7',
    tokenDecimals: 18,
    exchangeAddress: '0xdd80ca8062c7ef90fca2547e6a2a126c596e611f'
  },
  {
    symbol: 'ETHDai',
    name: 'ETHDaiRebalancingSetToken',
    tokenAddress: '0x8ddc86dba7ad728012efc460b8a168aba60b403b',
    tokenDecimals: 18,
    exchangeAddress: '0x06379be162b7d71fd188a48964978c7f0b56845a'
  },
  {
    symbol: 'BSH',
    name: 'Bullshit',
    tokenAddress: '0x91bc206f0a1ffbc399b4a20a41324ed1dad2b718',
    tokenDecimals: 0,
    exchangeAddress: '0x8f628ae9acdd5566063a39c0980160d60ab33b41'
  },
  {
    symbol: 'HUF',
    name: 'HungaryFiller',
    tokenAddress: '0x092ac353612d41e5ad1c2bb511b51a8619c639af',
    tokenDecimals: 2,
    exchangeAddress: '0x48a3ce9045e350b588af4e8edff81f6335c121fe'
  },
  {
    symbol: 'TESTGLD',
    name: 'TESTGOLD',
    tokenAddress: '0x0fac12df2fc6c2499cca50d7dbdc4d691c3a94f9',
    tokenDecimals: 18,
    exchangeAddress: '0x14db4410da6d1235bb0d6053695e50c1007986ae'
  },
  {
    symbol: 'PLR',
    name: 'PILLAR',
    tokenAddress: '0xe3818504c1b32bf1557b16c238b2e01fd3149c17',
    tokenDecimals: 18,
    exchangeAddress: '0x9631959ba6e2624f004302af262cc5f8c81c9058'
  },
  {
    symbol: 'REAL',
    name: 'Real Estate Asset Ledger',
    tokenAddress: '0x9214ec02cb71cba0ada6896b8da260736a67ab10',
    tokenDecimals: 18,
    exchangeAddress: '0x5a7d213c2ca1b5068b489f8b55a7a1ec87ed9180'
  },
  {
    symbol: 'TM',
    name: 'Tokenmom',
    tokenAddress: '0x554b520b298be389f0d87bf3376eb4d6510456ec',
    tokenDecimals: 18,
    exchangeAddress: '0xc2e27d332d12bde9bac91d535fec25869c4d5794'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x917d8f35a10985add5d7d95770af8cabefb05eaa',
    tokenDecimals: 18,
    exchangeAddress: '0xdf4d0de9b4529fcbc3458e4c8653a08745132c53'
  },
  {
    symbol: 'EXU',
    name: 'EXU Protocol',
    tokenAddress: '0xe06af951086ec3c488b50e31be29c07f8a260ca3',
    tokenDecimals: 16,
    exchangeAddress: '0x6ad8501ba523fbd9862e90c7cd39aa1d177cd3e2'
  },
  {
    symbol: 'PSNT',
    name: 'PeasantCoin',
    tokenAddress: '0x8b654789353b0b622667f105eaef9e97d3c33f44',
    tokenDecimals: 18,
    exchangeAddress: '0x86bf391ea35d762e345d6eb603abf1e6f444345d'
  },
  {
    symbol: 'SHT',
    name: 'Shadowlands Token',
    tokenAddress: '0xee91e47cff7ab926b45edce1687020a3748556c3',
    tokenDecimals: 18,
    exchangeAddress: '0x75f6fdfa5cbbd6466d33b013bec78bd92e9014b5'
  },
  {
    symbol: 'PSNT',
    name: 'PeasantCoin',
    tokenAddress: '0x2207bc0aac812fa3e03463d73d65a5fae9b9bf83',
    tokenDecimals: 18,
    exchangeAddress: '0x9cea564ad3a2a45be6a32155a29c49f7db24e48c'
  },
  {
    symbol: '🦄',
    name: 'Unicorns',
    tokenAddress: '0x89205a3a3b2a69de6dbf7f01ed13b2108b2c43e7',
    tokenDecimals: 0,
    exchangeAddress: '0x737182f561e6aa7bb5618764a9e775ca0bc25572'
  },
  {
    symbol: 'BNTE',
    name: 'Bountie',
    tokenAddress: '0x3ccb1fe6d628444fb1c823a3ee3573ed0a21f338',
    tokenDecimals: 18,
    exchangeAddress: '0xd76eb30a740485f9f9348600bea83b5e8b954bb1'
  },
  {
    symbol: 'PSNT',
    name: 'PeasantCoin',
    tokenAddress: '0xabaab06fd0ba2c3bc22dcb66c2fd84c012a917f8',
    tokenDecimals: 18,
    exchangeAddress: '0xd3879a36df8ad7eeeabaf27623cb6d401c131ae5'
  },
  {
    symbol: 'LEO',
    name: 'Bitfinex LEO Token',
    tokenAddress: '0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3',
    tokenDecimals: 18,
    exchangeAddress: '0xb54084ac1ffd5682771cff0432a29110923de100'
  },
  {
    symbol: 'MIN',
    name: 'MINDOL',
    tokenAddress: '0x862da0a691bb0b74038377295f8ff523d0493eb4',
    tokenDecimals: 18,
    exchangeAddress: '0x4a3776c887eb285d9339ee63426a1bec5be3f2dd'
  },
  {
    symbol: 'COT',
    name: 'CoTrader',
    tokenAddress: '0x5c872500c00565505f3624ab435c222e558e9ff8',
    tokenDecimals: 18,
    exchangeAddress: '0xf7e033ab0f295e1e240f2be18a0650b2d2a1a4c3'
  },
  {
    symbol: 'XCN',
    name: 'XCOIN',
    tokenAddress: '0x748bab4b67948196aec77ee76526ce215b5eb63b',
    tokenDecimals: 6,
    exchangeAddress: '0x832d945efa8a9327acdb652d418b746eb6251958'
  },
  {
    symbol: 'BRNT',
    name: 'Burninator Token',
    tokenAddress: '0x2eb1e8fd394222df25638cfa8f0e5e7998a9dc1f',
    tokenDecimals: 18,
    exchangeAddress: '0x4d1aaa65b594fab18b74cd05f45a69aefdc1702a'
  },
  {
    symbol: 'EVTN',
    name: 'everiToken',
    tokenAddress: '0xb364701c2591f3553062cf0a212c0df523572f7c',
    tokenDecimals: 8,
    exchangeAddress: '0xe3f3f0b24a709eff923931775190656807301cc9'
  },
  {
    symbol: 'JL',
    name: 'JiuLove',
    tokenAddress: '0x8e16df6b7631b3d781a94be2260d1d4a96cb565a',
    tokenDecimals: 4,
    exchangeAddress: '0x1820c1c04632d56ac2fb191656e882f007a6ce58'
  },
  {
    symbol: 'STAR',
    name: 'Starbase',
    tokenAddress: '0xf70a642bd387f94380ffb90451c2c81d4eb82cbc',
    tokenDecimals: 18,
    exchangeAddress: '0x26fedc50bd36d2fa9997242b97ad62b87bf7a7b9'
  },
  {
    symbol: 'LEAP',
    name: 'LeapToken',
    tokenAddress: '0x78230e69d6e6449db1e11904e0bd81c018454d7a',
    tokenDecimals: 18,
    exchangeAddress: '0xb5e62826970f6b66ad3084d5f77970626be62a99'
  },
  {
    symbol: 'BOMB',
    name: 'BOMB',
    tokenAddress: '0x1c95b093d6c236d3ef7c796fe33f9cc6b8606714',
    tokenDecimals: 0,
    exchangeAddress: '0x078e8ac023f6457264c96719cbeb94dddeda9dd5'
  },
  {
    symbol: 'ILK',
    name: 'Inlock token',
    tokenAddress: '0xf784682c82526e245f50975190ef0fff4e4fc077',
    tokenDecimals: 8,
    exchangeAddress: '0x75fa9abc14fa165eca10d8fd60c9c0c2c83de124'
  },
  {
    symbol: 'YUP',
    name: 'YUP',
    tokenAddress: '0xd9a12cde03a86e800496469858de8581d3a5353d',
    tokenDecimals: 18,
    exchangeAddress: '0x26a9717f658eeed4ba5dbdba5908fb34149c44db'
  },
  {
    symbol: 'CDZ',
    name: 'Cisco Dollarz',
    tokenAddress: '0xa8f732224456a795061bf3964416c1b69c083dfa',
    tokenDecimals: 18,
    exchangeAddress: '0xb2007899c7148893e4a456574b320bae4bd0bd71'
  },
  {
    symbol: '٨',
    name: 'Dentacoin',
    tokenAddress: '0x08d32b0da63e2c3bcf8019c9c5d849d7a9d791e6',
    tokenDecimals: 0,
    exchangeAddress: '0xf73848b04c6315bb8db6492c04ba20828c0c7bdc'
  },
  {
    symbol: 'EURS',
    name: 'STASIS EURS Token',
    tokenAddress: '0xdb25f211ab05b1c97d595516f45794528a807ad8',
    tokenDecimals: 2,
    exchangeAddress: '0x4b4c63ea99e2835b9d899610c22084513f71ee03'
  },
  {
    symbol: 'DCN',
    name: 'Dentacoin',
    tokenAddress: '0x621f61444a000b38aa467f585dacfadf3f976f75',
    tokenDecimals: 0,
    exchangeAddress: '0x5b7ebc24192955ac576ee074107a11b15e659f02'
  },
  {
    symbol: '0DARCOIN',
    name: '0 DardosHungary',
    tokenAddress: '0x96cd3fa86724f2f15d61b2a7faeb9e6cd0a0a587',
    tokenDecimals: 2,
    exchangeAddress: '0x0637d5e66da105431a1d444ee06e76349ab22ed4'
  },
  {
    symbol: 'QSP',
    name: 'Quantstamp Token',
    tokenAddress: '0x99ea4db9ee77acd40b119bd1dc4e33e1c070b80d',
    tokenDecimals: 18,
    exchangeAddress: '0x82db9fc4956fa40efe1e35d881004612b5cb2cc2'
  },
  {
    symbol: 'PHU',
    name: 'PenniHungary',
    tokenAddress: '0xd7de455acaff66370f91d90dd0df8f07d3c84fe7',
    tokenDecimals: 2,
    exchangeAddress: '0xfd00fa15894ca24862371a9dda75596ad31af86e'
  },
  {
    symbol: 'GRM',
    name: 'Green Money',
    tokenAddress: '0xc8c6fc3c4f6342c5291e747268625f979a888ebf',
    tokenDecimals: 18,
    exchangeAddress: '0xac432121efb452540ec96f5f0aa922d890c6a588'
  },
  {
    symbol: 'ASR',
    name: 'Astro',
    tokenAddress: '0x89c98f4529a41c7ee25d730d29bc39170ed11c60',
    tokenDecimals: 18,
    exchangeAddress: '0xeda88ddb13888c9a4de7304965e9315e69ea980e'
  },
  {
    symbol: '(333eth.io - https://t.me/Ethereum333/262)',
    name: 'www.pnztrust.com',
    tokenAddress: '0x5d210a4c794fa210c64712f1e395ec1136aaec4c',
    tokenDecimals: 0,
    exchangeAddress: '0x4177a0d8ace5425f463ad155538c5c6f2df187d1'
  },
  {
    symbol: 'findtherabbit.me',
    name: 'https://findtherabbit.me',
    tokenAddress: '0x2ff2b86c156583b1135c584fd940a1996fa4230b',
    tokenDecimals: 18,
    exchangeAddress: '0xaef9b172ac5c7e2d3058de906ec00a4499d2b62c'
  },
  {
    symbol: 'NUKE',
    name: 'HalfLife',
    tokenAddress: '0xc58c0fca06908e66540102356f2e91edcaeb8d81',
    tokenDecimals: 18,
    exchangeAddress: '0x39f70a026e6e2aac3453aeb8e563025afb542f9f'
  },
  {
    symbol: 'LEI',
    name: 'LEIREL',
    tokenAddress: '0x532ba7b9534a31e0898a9a64e0a898d4bb8db34d',
    tokenDecimals: 0,
    exchangeAddress: '0x8baffadc6694b1b00849119e459fda5df8a8e4af'
  },
  {
    symbol: 'NOT',
    name: 'Not',
    tokenAddress: '0x0027449bf0887ca3e431d263ffdefb244d95b555',
    tokenDecimals: 18,
    exchangeAddress: '0xd88958eac44250d46b2a6cc05873663dd1117acf'
  },
  {
    symbol: 'sETH',
    name: 'Synth sETH',
    tokenAddress: '0x42456d7084eacf4083f1140d3229471bba2949a8',
    tokenDecimals: 18,
    exchangeAddress: '0x4740c758859d4651061cc9cdefdba92bdc3a845d'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0xf73848b04c6315bb8db6492c04ba20828c0c7bdc',
    tokenDecimals: 18,
    exchangeAddress: '0x1737f4b853d58785595612aa07c4ca2ffd561b9c'
  },
  {
    symbol: 'STBTCDai',
    name: 'STBTCDaiRebalancingSetToken',
    tokenAddress: '0x20649d97b1393105cf92a5083fd2aff7c99ebe56',
    tokenDecimals: 18,
    exchangeAddress: '0xe2e496e3fc550b68feeeddad7db42d7063e6729e'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x768be41feb0216a8e2a8daa30567fc3e40226cbe',
    tokenDecimals: 18,
    exchangeAddress: '0xdf788db9789078d631ab7d4e39d52f7a18d91366'
  },
  {
    symbol: 'XS2',
    name: 'XS2 Token',
    tokenAddress: '0x448bd15ac18ce6386c27914c14c18fd9148df75f',
    tokenDecimals: 18,
    exchangeAddress: '0x06f6685eaefa8ece41d2ebbb0c707203f731be01'
  },
  {
    symbol: 'RING',
    name: 'Darwinia Network Native Token',
    tokenAddress: '0x9469d013805bffb7d3debe5e7839237e535ec483',
    tokenDecimals: 18,
    exchangeAddress: '0xebd8aa50b26bfa63007d61eba777a9dde7e43c64'
  },
  {
    symbol: 'XGN',
    name: 'TransGen',
    tokenAddress: '0x9b4e167aea30f94929017f747f5496284141aa96',
    tokenDecimals: 18,
    exchangeAddress: '0x0ee1fcf75535c80163c1bd9f5a127106b8c3c49f'
  },
  {
    symbol: 'DAPP',
    name: '360APP',
    tokenAddress: '0x5d0fa08aeb173ade44b0cf7f31d506d8e04f0ac8',
    tokenDecimals: 18,
    exchangeAddress: '0x68f21a820436d4a43aca3d4e59f814027ecae7ac'
  },
  {
    symbol: 'RSR',
    name: 'Reserve Rights',
    tokenAddress: '0x8762db106b2c2a0bccb3a80d1ed41273552616e8',
    tokenDecimals: 18,
    exchangeAddress: '0xeeeec06f48656e921b39e30d9a205cb2b08ea465'
  },
  {
    symbol: 'LUNA',
    name: 'Luna',
    tokenAddress: '0x92bf969865c80eda082fd5d8b4e28da4d58e1c3a',
    tokenDecimals: 18,
    exchangeAddress: '0x89c1c0741f1e044a7bd8b8d96d975792ea0dd6d5'
  },
  {
    symbol: 'HOPP',
    name: 'Hopper Token',
    tokenAddress: '0x33b282c88de3e8ed471c24e43f60816dcabe12f4',
    tokenDecimals: 18,
    exchangeAddress: '0xbfb7eddf9d97ddc9e807b903a7d68becda14660e'
  },
  {
    symbol: 'QUAF',
    name: 'Quaffle',
    tokenAddress: '0x4492e10fd69be9ae85d75bdcda2d9d1e68c0eea6',
    tokenDecimals: 18,
    exchangeAddress: '0xdf20b0ec6cd1505a1b2d15ea1a4aaa67ae2c0a3b'
  },
  {
    symbol: 'BTCETH5050',
    name: 'BTC ETH Equal Weight Set',
    tokenAddress: '0xc06aec5191be16b94ffc97b6fc01393527367365',
    tokenDecimals: 18,
    exchangeAddress: '0x539f7952f7b21c48aff332cd5d9cf6e28eba290f'
  },
  {
    symbol: 'PRE',
    name: 'Premine',
    tokenAddress: '0x30765406d51091ed78ff13c107731daf3be5ef16',
    tokenDecimals: 18,
    exchangeAddress: '0x0182865fa09594e4b27496889cbf0bbc818813c6'
  },
  {
    symbol: 'ADS',
    name: 'ADSCASH',
    tokenAddress: '0xec7954f452a6473c21c4078501f0bcf8b266bc99',
    tokenDecimals: 2,
    exchangeAddress: '0x528dd20d7e58e32d33b2e7f2684ce792dfeb44c5'
  },
  {
    symbol: 'BTK',
    name: 'BitcoinToken',
    tokenAddress: '0xdb8646f5b487b5dd979fac618350e85018f557d4',
    tokenDecimals: 18,
    exchangeAddress: '0x85810ea52373a8c5184ea8bf2b3231587fa9ff04'
  },
  {
    symbol: ' OMG',
    name: 'OmiseGO',
    tokenAddress: '0x2392f6abf07b5fce14603d0e28fc952205b8703d',
    tokenDecimals: 0,
    exchangeAddress: '0xb24803f59d661e0b3220aa06ab4a06d9482c9ac4'
  },
  {
    symbol: 'HUG',
    name: 'HungaryGold',
    tokenAddress: '0x858b1f24940e64e08b6941946a29aa352f218ae6',
    tokenDecimals: 2,
    exchangeAddress: '0x768be41feb0216a8e2a8daa30567fc3e40226cbe'
  },
  {
    symbol: 'ACC',
    name: 'Accelerator',
    tokenAddress: '0x13f1b7fdfbe1fc66676d56483e21b1ecb40b58e2',
    tokenDecimals: 18,
    exchangeAddress: '0xe9025d3da6b90cef5b7b695f45ace93bff76e937'
  },
  {
    symbol: 'HRD',
    name: 'Hoard Token',
    tokenAddress: '0xc617d51e3a1f621da8ae67b2f652d6ac02eb8d95',
    tokenDecimals: 18,
    exchangeAddress: '0x303f47c87b66f53ad06f19a3e3d1764437ac43d6'
  },
  {
    symbol: 'ZUR-D',
    name: 'Zur Drafts by Zurcoin Core',
    tokenAddress: '0x3a4b527dcd618ccea50adb32b3369117e5442a2f',
    tokenDecimals: 0,
    exchangeAddress: '0xddd27201dc2f4a3a0afdcff8a807daf0b84c5dc9'
  },
  {
    symbol: 'HCM',
    name: 'Hcmcoin',
    tokenAddress: '0x6126747b7d21c5860cbffbb7654fbc8d3e63a2bb',
    tokenDecimals: 18,
    exchangeAddress: '0x9ee0f1ae7ef59327b7618c1e07f3c2f903d9f2f9'
  },
  {
    symbol: 'CNY',
    name: 'cnycoin',
    tokenAddress: '0x70da15db5377ac51131c2fd0ade87ec543ca9482',
    tokenDecimals: 18,
    exchangeAddress: '0xb682483ec02fe64f0bcbbfd1cbfa9c480aaa30c3'
  },
  {
    symbol: 'ELITE',
    name: 'Ethereum Lite',
    tokenAddress: '0x0a76aad21948ea1ef447d26dee91a54370e151e0',
    tokenDecimals: 18,
    exchangeAddress: '0x5301a674fdaf0020c9e737b01129a7889c5ff523'
  },
  {
    symbol: 'HAND',
    name: 'ShowHand',
    tokenAddress: '0x48c1b2f3efa85fbafb2ab951bf4ba860a08cdbb7',
    tokenDecimals: 0,
    exchangeAddress: '0xe20bda8c541bda6467d9034319e620e33b969d28'
  },
  {
    symbol: 'DHU',
    name: 'DollarHungary',
    tokenAddress: '0x6773770653c9995f602aa0058349b9b68962db96',
    tokenDecimals: 2,
    exchangeAddress: '0x1f068f775aa7b4b7a5f388e6ce04615492343175'
  },
  {
    symbol: 'LNX',
    name: 'Lunox',
    tokenAddress: '0x72e646b78a2b58cbd9b0282c2e9c812bc8033293',
    tokenDecimals: 18,
    exchangeAddress: '0x1d78ea3bbed15d226dabb9419942aec69c756c8b'
  },
  {
    symbol: 'SUC',
    name: 'sucoin',
    tokenAddress: '0xb8d2d65d4d65124690f8eab76bea5d27cae5cc98',
    tokenDecimals: 18,
    exchangeAddress: '0x1535758f55d879a00774fb27617edc4b968306be'
  },
  {
    symbol: 'XBR',
    name: 'BIT DINERO',
    tokenAddress: '0x86ad632c36425f0e0af2fcd6f55c160e10c04b26',
    tokenDecimals: 18,
    exchangeAddress: '0xce67eb9f9f097afca846483082bdd5ff5f85de6d'
  },
  {
    symbol: 'RLX',
    name: 'Relex',
    tokenAddress: '0x4a42d2c580f83dce404acad18dab26db11a1750e',
    tokenDecimals: 18,
    exchangeAddress: '0x9f8db6f625555230f549a9b1e2e314e0a3aaf68a'
  },
  {
    symbol: 'FEX',
    name: 'Felix',
    tokenAddress: '0xfc664cd8dffdd8fb4d1644e179400d386ca568eb',
    tokenDecimals: 8,
    exchangeAddress: '0xbe2360f4b16c33f11203d982bddb47f1b9197fea'
  },
  {
    symbol: 'FIXED',
    name: 'Example Fixed Supply Token',
    tokenAddress: '0x0b403f3f213e75cd25b700093df79a95d2013357',
    tokenDecimals: 18,
    exchangeAddress: '0x81742f8d52cb86f9223ee6e579a15e104775346b'
  },
  {
    symbol: 'EOS',
    name: '',
    tokenAddress: '0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0',
    tokenDecimals: 18,
    exchangeAddress: '0x8cf1b131c8a110458750dfcbb8f0e165d4d024ef'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x9ee0f1ae7ef59327b7618c1e07f3c2f903d9f2f9',
    tokenDecimals: 18,
    exchangeAddress: '0x21e5133635d0e821a031e3d80b1a3da39c898f3a'
  },
  {
    symbol: 'ZEON',
    name: 'ZEON',
    tokenAddress: '0xe5b826ca2ca02f09c1725e9bd98d9a8874c30532',
    tokenDecimals: 18,
    exchangeAddress: '0x125c074a1d2060cf4ff5632fa0b3edd55918051a'
  },
  {
    symbol: 'FXC',
    name: 'Flexacoin',
    tokenAddress: '0x4a57e687b9126435a9b19e4a802113e266adebde',
    tokenDecimals: 18,
    exchangeAddress: '0xb878876e0627e362fd3d1afeebdf0bd69bba1911'
  },
  {
    symbol: 'VELS',
    name: 'Velareum',
    tokenAddress: '0x30e39d0a38db74ac783f42c13dde1ea06e858992',
    tokenDecimals: 2,
    exchangeAddress: '0x3c37e7c25dc158d7848fbd1c74578d9ad10ef91d'
  },
  {
    symbol: 'FCT',
    name: 'Fibonum Cycling Token',
    tokenAddress: '0x3b820a1e03025d0fe6bc211b2550626b68a3b27c',
    tokenDecimals: 18,
    exchangeAddress: '0x0dbec05cc338244359febf0d9d9c85fc19f6f2db'
  },
  {
    symbol: 'ZCO',
    name: 'Zebi Coin',
    tokenAddress: '0x2008e3057bd734e10ad13c9eae45ff132abc1722',
    tokenDecimals: 8,
    exchangeAddress: '0x30cfcb60496aea8bada3be97e8ca3f71560bf4ef'
  },
  {
    symbol: 'BZN',
    name: 'Benzene',
    tokenAddress: '0x1bd223e638aeb3a943b8f617335e04f3e6b6fffa',
    tokenDecimals: 18,
    exchangeAddress: '0xb28d4a770328e7a6ede7fc51d10f977ba755774e'
  },
  {
    symbol: 'cZRX',
    name: 'Compound 0x',
    tokenAddress: '0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407',
    tokenDecimals: 8,
    exchangeAddress: '0x4e700f99bcecc5bad8e6a92ffc6354dda68cbc35'
  },
  {
    symbol: 'KOI',
    name: 'KOI',
    tokenAddress: '0x0be34c15f069663ff05ef5ea1e99ab3dd2d0fdce',
    tokenDecimals: 8,
    exchangeAddress: '0x87e8497a5d3ff985adf13b87992d473b9294970a'
  },
  {
    symbol: 'TBOMB',
    name: 'TBOMB',
    tokenAddress: '0x583a9c440893ed5d563e68a60b12f1cc323d4862',
    tokenDecimals: 0,
    exchangeAddress: '0x79ecb46aa1adbe366824051642aa6de38525e48f'
  },
  {
    symbol: 'FUTC1',
    name: 'Futereum Centurian 1',
    tokenAddress: '0xf880d3c6dcda42a7b2f6640703c5748557865b35',
    tokenDecimals: 0,
    exchangeAddress: '0xa2368e017f3e040228fc5666cef4fc0e29f38af1'
  },
  {
    symbol: 'FREE',
    name: 'Free Coin',
    tokenAddress: '0x2f141ce366a2462f02cea3d12cf93e4dca49e4fd',
    tokenDecimals: 18,
    exchangeAddress: '0x17f11fca7a66e8049484ae0a74e0013c5719ec77'
  },
  {
    symbol: 'AVVP',
    name: 'Andrey Voronkov Ventures Promo',
    tokenAddress: '0x783ba0062326861ee76e0e15429594922e9fe2f5',
    tokenDecimals: 18,
    exchangeAddress: '0xc70586daa52d4fbc4db2b20acaf7e1521f0c5854'
  },
  {
    symbol: 'AVVP',
    name: 'Andrey Voronkov Ventures Promo',
    tokenAddress: '0xb0cf07e9a74f214ec799a32fff225ddbc8d04ec8',
    tokenDecimals: 18,
    exchangeAddress: '0x24aae710b58dca6fc2bd18489a5503b2ecc2a094'
  },
  {
    symbol: 'HYDRO',
    name: 'Hydro',
    tokenAddress: '0xebbdf302c940c6bfd49c6b165f457fdb324649bc',
    tokenDecimals: 18,
    exchangeAddress: '0xda28e640d58b4035bf60ba5900cb9a7c6618ec2a'
  },
  {
    symbol: 'WCW',
    name: 'Wrapped CheezeWizards',
    tokenAddress: '0x0ac19d0617af7f95f154ae2cdfaa6f2c9dcec8f3',
    tokenDecimals: 18,
    exchangeAddress: '0xe5c8509b84eb5789e66bdce57927357902212c7a'
  },
  {
    symbol: 'VXV',
    name: 'VectorspaceAI',
    tokenAddress: '0x7d29a64504629172a429e64183d6673b9dacbfce',
    tokenDecimals: 18,
    exchangeAddress: '0x7b9b5084aff35d3e9d87fb1e384853b806120bed'
  },
  {
    symbol: 'HATE',
    name: 'HATE',
    tokenAddress: '0xc2733c372a6cf303551073930799282fefe2b67a',
    tokenDecimals: 0,
    exchangeAddress: '0x9ebedf666dd5bfa7c3016eb2086e349421f994bb'
  },
  {
    symbol: 'DMHCO',
    name: 'DMHCO',
    tokenAddress: '0x5c679a0a79d495affe049c02483519d51e37f32b',
    tokenDecimals: 18,
    exchangeAddress: '0x8138e39124c65d7fe6874b2f5c47d5fad2581060'
  },
  {
    symbol: 'RUSH',
    name: 'HashRush',
    tokenAddress: '0xcfcd43d7ee21416a71c2eb9888587d52716fc77a',
    tokenDecimals: 8,
    exchangeAddress: '0x0114a3b4e4fa4cf9721bd38ad40474e22ea72a16'
  },
  {
    symbol: 'CYFM',
    name: 'CYBERFM',
    tokenAddress: '0x3f06b5d78406cd97bdf10f5c420b241d32759c80',
    tokenDecimals: 18,
    exchangeAddress: '0xbcd5a12038e57f9f2a1c38199663730cc9d7043b'
  },
  {
    symbol: 'ETHPLO',
    name: 'ETHplode',
    tokenAddress: '0xe0c6ce3e73029f201e5c0bedb97f67572a93711c',
    tokenDecimals: 6,
    exchangeAddress: '0x59af19879e9dcd298b9f1ad2b1ee5f5f7ed2d332'
  },
  {
    symbol: 'TKG',
    name: 'TokenGo',
    tokenAddress: '0x48b4a529915d8f19452248c3d2f825786f6c8d2a',
    tokenDecimals: 18,
    exchangeAddress: '0xda6311e9666fa1cf6f5436046a093297840cc21b'
  },
  {
    symbol: 'AMB',
    name: 'Ambitious',
    tokenAddress: '0xcd45962fcd817e8fea6bbe1a4bebdff1bedff232',
    tokenDecimals: 18,
    exchangeAddress: '0xc1bc313c8c6eab4316af2c4c7a3820744edc6188'
  },
  {
    symbol: 'ZBUX',
    name: 'Zuck Bucks',
    tokenAddress: '0x7090a6e22c838469c9e67851d6489ba9c933a43f',
    tokenDecimals: 0,
    exchangeAddress: '0xc2a27366deb7530bd7f812c69d48b0215e397771'
  },
  {
    symbol: 'BEFX',
    name: 'Belifex',
    tokenAddress: '0xb91c2a2b953d72f3ef890490669a0a41b0add5f7',
    tokenDecimals: 8,
    exchangeAddress: '0x9cc45bed4ce6fc354c7cfa8ccf1f28fa7c581a12'
  },
  {
    symbol: 'TECH',
    name: 'FTI NEWS Token',
    tokenAddress: '0xa1ba7186eec1be5114b0cf49b95b23adc4131b51',
    tokenDecimals: 10,
    exchangeAddress: '0x05ddab88b4d6fea1a3a92d8fccc6e594d5aa98f8'
  },
  {
    symbol: 'ETX',
    name: 'Etherneum',
    tokenAddress: '0xb33a7597d65f8d823b71fc6e3b6a5039298ffd23',
    tokenDecimals: 18,
    exchangeAddress: '0x7c77de084425871781eb5f36f25ee0ecf8561b8a'
  },
  {
    symbol: 'TAO',
    name: 'TAOCOIN',
    tokenAddress: '0x155454dd1a347ac93c3a0083871bb8498e50df74',
    tokenDecimals: 8,
    exchangeAddress: '0x4fd9f6bc7fe5f1c105a1f37a07d720d81d22f58a'
  },
  {
    symbol: 'FLYTO',
    name: 'Flyto',
    tokenAddress: '0x313c068f339c6a1fbf7be5a9504b506f728dbc9d',
    tokenDecimals: 18,
    exchangeAddress: '0x656d1150e7872aa23b49c35f96d6fd949d8d44bc'
  },
  {
    symbol: 'sAUD',
    name: 'Synth sAUD',
    tokenAddress: '0xed4699f180a14b5974c26f494483f9c327fd381a',
    tokenDecimals: 18,
    exchangeAddress: '0x972dce6be5f8b03893587f2e51b68f9fb281fc1e'
  },
  {
    symbol: 'SVC',
    name: 'Sport Value Coin',
    tokenAddress: '0x11263b92661fa1fa96800139c9d6b510953a35eb',
    tokenDecimals: 18,
    exchangeAddress: '0xd968eda9303509a529e77a59226f26b99a40a63f'
  },
  {
    symbol: 'FUTB1',
    name: 'Futereum BTC 1',
    tokenAddress: '0x30c6fe3ac0260a855c90cab79aa33e76091d4904',
    tokenDecimals: 18,
    exchangeAddress: '0x541b0a0088d82f19309758454d3a147636fa7dec'
  },
  {
    symbol: 'FUTM1',
    name: 'Futereum Markets 1',
    tokenAddress: '0xee418a19d6620aa478489032c2cb63464dd3e690',
    tokenDecimals: 18,
    exchangeAddress: '0x54ac92df89d04a851163dd63b6b404844cf1caf3'
  },
  {
    symbol: 'GA',
    name: 'Generic Altcoin',
    tokenAddress: '0xb19aae54d4ee672348d749e98cf90c584ef1b1ba',
    tokenDecimals: 18,
    exchangeAddress: '0x0a49bcd767dfee1823b87758fe537a80c2626c18'
  },
  {
    symbol: 'GA',
    name: 'Generic Altcoin',
    tokenAddress: '0x4c858151a41ea6f258e904ef4e2d3c310639cced',
    tokenDecimals: 18,
    exchangeAddress: '0x72a644cac9da1fd09925eaad5d92414e3f91c0ee'
  },
  {
    symbol: 'GA',
    name: 'Generic Altcoin',
    tokenAddress: '0xd982e7d6ebda6102cf2ca8428a4c44c28f2c490a',
    tokenDecimals: 18,
    exchangeAddress: '0x14ad6e9ddaf5cd668acb6ad0ab149ee248f9d712'
  },
  {
    symbol: 'GA',
    name: 'Generic Altcoin',
    tokenAddress: '0x73f46f17b1a9712262dc3410b37eae4233f36ff9',
    tokenDecimals: 18,
    exchangeAddress: '0xf8c5d69311d80d633b5caa147965caa2e576e6d1'
  },
  {
    symbol: 'GA',
    name: 'Generic Altcoin',
    tokenAddress: '0xd72172f90d5436b9abb3fbcf818d7e05fa1fc189',
    tokenDecimals: 18,
    exchangeAddress: '0xb3dca00babb56c28fb48bea9fdcd12c4bd1bbbb0'
  },
  {
    symbol: 'GA',
    name: 'Generic Altcoin',
    tokenAddress: '0x32c62c965db5fdac0f94e6276d6884070068d4be',
    tokenDecimals: 18,
    exchangeAddress: '0xf15bf23ae81e2ddd7a0e7995b4ab42d2903c9da3'
  },
  {
    symbol: 'BURN',
    name: 'The Burn Token',
    tokenAddress: '0x4f7c5bd3f7d62a9c984e265d73a86f5515f3e92b',
    tokenDecimals: 0,
    exchangeAddress: '0x2f5b009d42917452f4f057b0998dfad4d84c7662'
  },
  {
    symbol: 'VOID',
    name: 'Void Token',
    tokenAddress: '0xb8796542765747ed7f921ff12faff057b5d624d7',
    tokenDecimals: 18,
    exchangeAddress: '0xe8878ddc1e72fb4d14a1ca57fa17a247ca53aec1'
  },
  {
    symbol: 'NEWB',
    name: 'Newb',
    tokenAddress: '0x5a63eb358a751b76e58325eadd86c2473fc40e87',
    tokenDecimals: 18,
    exchangeAddress: '0x382f41a91a049c0e82265d0afa74c92a8bcc160a'
  },
  {
    symbol: 'RNDR',
    name: 'Render Token',
    tokenAddress: '0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24',
    tokenDecimals: 18,
    exchangeAddress: '0xa117ffe7d3a756f665ef2e95bb770ab20008641a'
  },
  {
    symbol: 'VLTR',
    name: 'VULTUR',
    tokenAddress: '0x657ffc4fb2c4625adbb3452556f7a482b76e5011',
    tokenDecimals: 2,
    exchangeAddress: '0x804682061c0f8c4025c268471a907dce11539187'
  },
  {
    symbol: 'OGO',
    name: 'Origo',
    tokenAddress: '0xff0e5e014cf97e0615cb50f6f39da6388e2fae6e',
    tokenDecimals: 18,
    exchangeAddress: '0xc1a08ea89e5d550d22471159c995d2acaa6e43d0'
  },
  {
    symbol: 'NPTX',
    name: 'NPT',
    tokenAddress: '0x1e00a1bc70de783963c5c9b28b5162aaca7570a2',
    tokenDecimals: 6,
    exchangeAddress: '0x08c11f9c436072f45bb57e4a163989e88e05c883'
  },
  {
    symbol: 'PRIX',
    name: 'Privatix',
    tokenAddress: '0x3adfc4999f77d04c8341bac5f3a76f58dff5b37a',
    tokenDecimals: 8,
    exchangeAddress: '0x7c4ee2b53ea4a7893b2794ba5fcc305ef426be0f'
  },
  {
    symbol: 'FIRE',
    name: 'Fire Token',
    tokenAddress: '0x125f9d5daa039bdb79d36baff667e9e0bbcea998',
    tokenDecimals: 18,
    exchangeAddress: '0xb33122fcded005785c40c18c6871ba15dad4fdcc'
  },
  {
    symbol: 'VIDT',
    name: 'V-ID Token',
    tokenAddress: '0x445f51299ef3307dbd75036dd896565f5b4bf7a5',
    tokenDecimals: 18,
    exchangeAddress: '0x0cfa80b92a082c680e109d66a29c54fb179d21d0'
  },
  {
    symbol: 'CYS',
    name: 'Cycloshield Coin',
    tokenAddress: '0x8c53931237b6360345b01f1cfa27f7b10f89be78',
    tokenDecimals: 18,
    exchangeAddress: '0x14e7b9e818604ab55e8af1e2877fdec2b397b14d'
  },
  {
    symbol: 'DADI',
    name: 'DADI',
    tokenAddress: '0xfb2f26f266fb2805a387230f2aa0a331b4d96fba',
    tokenDecimals: 18,
    exchangeAddress: '0xed06fe62f03b35c7582c9b63b1927eafbcb42a01'
  },
  {
    symbol: 'EVN',
    name: 'Envion',
    tokenAddress: '0xd780ae2bf04cd96e577d3d014762f831d97129d0',
    tokenDecimals: 18,
    exchangeAddress: '0x55fff16e7ac0fe75b2a9598b5685531e27853df1'
  },
  {
    symbol: 'REMCO',
    name: 'Remittance Token',
    tokenAddress: '0xbbc3a290c7d2755b48681c87f25f9d7f480ad42f',
    tokenDecimals: 8,
    exchangeAddress: '0x06bca45ddf2ff3f1155f556cec95c8db86ab8167'
  },
  {
    symbol: 'KHC',
    name: 'KaiHua Coin',
    tokenAddress: '0x6881e457e6b0f14bb48537ae0809c8c016a43c2a',
    tokenDecimals: 3,
    exchangeAddress: '0x79d85477c2565ed9095bf7837fdcad830e9b3c4f'
  },
  {
    symbol: 'CLM',
    name: 'Claymore',
    tokenAddress: '0x0ed8343dfdee32e38b4c4ce15a3b00a59e90f3db',
    tokenDecimals: 18,
    exchangeAddress: '0x2433bd130055dc9df537d431908fbf64782df2f6'
  },
  {
    symbol: 'PHT',
    name: 'PhotochainToken',
    tokenAddress: '0x88652845a5495983b70aebbf25102361552d5e54',
    tokenDecimals: 18,
    exchangeAddress: '0x213988470530c2c098e6f22f15437930cdbcca26'
  },
  {
    symbol: 'COS',
    name: 'COS',
    tokenAddress: '0x7d3cb11f8c13730c24d01826d8f2005f0e1b348f',
    tokenDecimals: 18,
    exchangeAddress: '0x7f9a00bb057424b9b1382591cfb8761d9b08a434'
  },
  {
    symbol: 'INC8',
    name: 'Incinerate Token',
    tokenAddress: '0x072ccd6247e88114590d08d6a80b7a609473c17e',
    tokenDecimals: 2,
    exchangeAddress: '0xda6cb34c6f28e5282db47c0d8f40cdfd776fa004'
  },
  {
    symbol: 'FRECNX',
    name: 'FreldoCoinX',
    tokenAddress: '0xd8b8e1eca89da014e67fdbc2014eaa8e171079bf',
    tokenDecimals: 18,
    exchangeAddress: '0x4aa12c2fb57060c51402af93a1d6f3803f05d453'
  },
  {
    symbol: 'FUTR',
    name: 'Futereum Token',
    tokenAddress: '0xc83355ef25a104938275b46cffd94bf9917d0691',
    tokenDecimals: 18,
    exchangeAddress: '0x12718364abaa8c9947d6009494e15dd8472438f6'
  },
  {
    symbol: 'JIBRA',
    name: 'JIBRAPAY',
    tokenAddress: '0x3d917b9a3cee461870149b4b28556e4e2d112c13',
    tokenDecimals: 18,
    exchangeAddress: '0x833b576ea7c2ff166ad7c624f8d4b14fb371aa30'
  },
  {
    symbol: 'AMPL',
    name: 'Ampleforth',
    tokenAddress: '0xd46ba6d942050d489dbd938a2c909a5d5039a161',
    tokenDecimals: 9,
    exchangeAddress: '0x042dbbdc27f75d277c3d99efe327db21bc4fde75'
  },
  {
    symbol: 'CER',
    name: 'Cereneum',
    tokenAddress: '0xd9d4a7ca154fe137c808f7eedbe24b639b7af5a6',
    tokenDecimals: 8,
    exchangeAddress: '0xa00d014e48dadea7879d7142bf5bac5207c8ff29'
  },
  {
    symbol: 'DGT',
    name: 'Dogetoken',
    tokenAddress: '0x8b9c35c79af5319c70dd9a3e3850f368822ed64e',
    tokenDecimals: 18,
    exchangeAddress: '0x180b93d88e19bff7abde971408716131ed7e2186'
  },
  {
    symbol: 'CHU',
    name: 'CentHungary',
    tokenAddress: '0x3d9a801720cdbce293edbc7d8dcd82d6ceaabbd3',
    tokenDecimals: 2,
    exchangeAddress: '0xd6c8e96d3cdebabea1a339a34a7e0c76975a504c'
  },
  {
    symbol: 'EOST',
    name: 'EOS TRUST',
    tokenAddress: '0x87210f1d3422ba75b6c40c63c78d79324dabcd55',
    tokenDecimals: 18,
    exchangeAddress: '0x25daa8ef739c741fc136162bf183b58dd249b4f7'
  },
  {
    symbol: 'GOLD',
    name: 'Dragonereum Gold',
    tokenAddress: '0x150b0b96933b75ce27af8b92441f8fb683bf9739',
    tokenDecimals: 18,
    exchangeAddress: '0x7b1c3192efa401ea37951fedc8007bcbec2dbb6d'
  },
  {
    symbol: 'MMR',
    name: 'Make Me Rich Token',
    tokenAddress: '0xfe34099b8a1eb4cac66168f46014340ba425fa8f',
    tokenDecimals: 18,
    exchangeAddress: '0x7ff5079450e672f72801bf82899da5a3b6d464a5'
  },
  {
    symbol: 'AAA',
    name: 'Tripple A',
    tokenAddress: '0x22ac30b3afecbbf1cb69bc697bef0bd3e5bec349',
    tokenDecimals: 18,
    exchangeAddress: '0x42ad257cab68d8c4ed11ed1abdd89713b4fc86db'
  },
  {
    symbol: 'SGM',
    name: 'Sgame Token',
    tokenAddress: '0x72b509b59bbfe847a1d68eae96161adff8675064',
    tokenDecimals: 18,
    exchangeAddress: '0x3eb5c28b84041dd801fc1208a60c8dab63737acc'
  },
  {
    symbol: 'BLO',
    name: 'BLONDCOIN',
    tokenAddress: '0x1c3bb10de15c31d5dbe48fbb7b87735d1b7d8c32',
    tokenDecimals: 18,
    exchangeAddress: '0x950cebfa171428216af64867deb6d13f3a27c54a'
  },
  {
    symbol: 'SUSU',
    name: 'Winsusu Token',
    tokenAddress: '0x7e1d8a8b01374ab1aa26b40e7c6733e6c168568a',
    tokenDecimals: 18,
    exchangeAddress: '0x0a2a5291039c3d9c92fcd892063c25ec0fd240b7'
  },
  {
    symbol: 'WMC',
    name: 'Wrapped MarbleCards',
    tokenAddress: '0x8aedb297fed4b6884b808ee61faf0837713670d0',
    tokenDecimals: 18,
    exchangeAddress: '0xa0db39d28dacec1974f2a1f6bac7d33f37c102ec'
  },
  {
    symbol: 'BAX',
    name: 'BAX',
    tokenAddress: '0x9a0242b7a33dacbe40edb927834f96eb39f8fbcb',
    tokenDecimals: 18,
    exchangeAddress: '0x7a43ce3ef79ad8b7adf23f4c1bdd0446fd7e4d76'
  },
  {
    symbol: 'REDGIL',
    name: 'REDGIL',
    tokenAddress: '0x5457d6324e77de6823c5341b6703cded16422829',
    tokenDecimals: 18,
    exchangeAddress: '0x7d365fa74360a0740d06552e90c7f320097a0fb3'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x4ff7fa493559c40abd6d157a0bfc35df68d8d0ac',
    tokenDecimals: 18,
    exchangeAddress: '0x639977a3a318ecdde675f53a77fbe51716b16bfe'
  },
  {
    symbol: 'FUZE',
    name: 'FUZE Token',
    tokenAddress: '0x187d1018e8ef879be4194d6ed7590987463ead85',
    tokenDecimals: 18,
    exchangeAddress: '0x520e5f50adc6775723e93da5c81c0b075be28dab'
  },
  {
    symbol: 'XENM',
    name: 'Xenium',
    tokenAddress: '0xd69834f67b2f5a760617cc9a9bf5ae3a3bb256c2',
    tokenDecimals: 18,
    exchangeAddress: '0x78eff350b7378e913d3dbc71ae5a3c179b7d70d2'
  },
  {
    symbol: 'FLXA',
    name: 'FLUXCOIN-A',
    tokenAddress: '0x2a4f61ca0e03e260e6be91692e430293d73998f0',
    tokenDecimals: 10,
    exchangeAddress: '0x10dbe7aaedb8d291f4f4da10cbc85c11ca740200'
  },
  {
    symbol: 'TYPE',
    name: 'Typerium',
    tokenAddress: '0xeaf61fc150cd5c3bea75744e830d916e60ea5a9f',
    tokenDecimals: 4,
    exchangeAddress: '0x48d5425c9ed8bf062ea123ac568b42bf8bc02261'
  },
  {
    symbol: 'IDXM',
    name: 'IDEX Membership',
    tokenAddress: '0xcc13fc627effd6e35d2d2706ea3c4d7396c610ea',
    tokenDecimals: 8,
    exchangeAddress: '0xed1af8c036fcaebc5be8fcbf4a85d08f67ce5fa1'
  },
  {
    symbol: 'KEY',
    name: 'SelfKey',
    tokenAddress: '0x4cc19356f2d37338b9802aa8e8fc58b0373296e7',
    tokenDecimals: 18,
    exchangeAddress: '0x4f27a38f33f668ea91fa34ef29d8ff7b444d6327'
  },
  {
    symbol: 'CRED',
    name: 'Verify Token',
    tokenAddress: '0x672a1ad4f667fb18a333af13667aa0af1f5b5bdd',
    tokenDecimals: 18,
    exchangeAddress: '0xb490fb04a938bae28b0d77c3d86faf47c1751485'
  },
  {
    symbol: 'SNX',
    name: 'Synthetix Network Token',
    tokenAddress: '0x2dea20405c52fb477ecca8fe622661d316ac5400',
    tokenDecimals: 18,
    exchangeAddress: '0x9faa0cb10912de7ad1d86705c65de291a9088a61'
  },
  {
    symbol: 'AF',
    name: 'Alex',
    tokenAddress: '0xf76d54904e4679f1e583bb0f07a8c58cae1dcf3e',
    tokenDecimals: 18,
    exchangeAddress: '0x6487856187287a660797ed73504e1497d041dc5f'
  },
  {
    symbol: 'XNN',
    name: 'XENON',
    tokenAddress: '0xab95e915c123fded5bdfb6325e35ef5515f1ea69',
    tokenDecimals: 18,
    exchangeAddress: '0x176b6cb18ac2c6d2661826c2883028b63d8f2811'
  },
  {
    symbol: 'CAT',
    name: 'BitClave',
    tokenAddress: '0x1234567461d3f8db7496581774bd869c83d51c93',
    tokenDecimals: 18,
    exchangeAddress: '0xa86d1180a63834dac06ba67ddb777565a80a05ef'
  },
  {
    symbol: 'MKT',
    name: 'MARKET Protocol Token',
    tokenAddress: '0xba23485a04b897c957918fde2dabd4867838140b',
    tokenDecimals: 18,
    exchangeAddress: '0x7d6fa7b0a7dec3c0758f0b57bb446f4cee70d330'
  },
  {
    symbol: 'XCT',
    name: 'xCrypt Token',
    tokenAddress: '0xd2bb16cf38ca086cab5128d5c25de9477ebd596b',
    tokenDecimals: 18,
    exchangeAddress: '0xe5a98448badcc298790485f536914d067417140b'
  },
  {
    symbol: 'LST',
    name: 'Lendroid Support Token',
    tokenAddress: '0x4de2573e27e648607b50e1cfff921a33e4a34405',
    tokenDecimals: 18,
    exchangeAddress: '0x98bdf4e7575319bcd5878c1c7c49a4af618b24cf'
  },
  {
    symbol: 'QAS',
    name: 'Quantitative Analysis System Token',
    tokenAddress: '0xc4b81d8381e02922c9eac0a4ea45977118080f74',
    tokenDecimals: 8,
    exchangeAddress: '0xbd2da2791bd74902a447a09d991c5372c5ad74bb'
  },
  {
    symbol: 'GRC',
    name: 'GROCERYCOIN',
    tokenAddress: '0x5adfaf1b9ccdd15321b7838d8ddf113ce471c3e8',
    tokenDecimals: 18,
    exchangeAddress: '0x41bdb6667ef5669fbc4eb7c826a4763a4545b58f'
  },
  {
    symbol: 'INE',
    name: 'IntelliShare Token',
    tokenAddress: '0x86e6a4f512b1290c043970b04e0b570d4fc98291',
    tokenDecimals: 18,
    exchangeAddress: '0x5840bce111a41b90067dc2d4df423805edad9cce'
  },
  {
    symbol: 'SOUND',
    name: 'Soundly',
    tokenAddress: '0x87e0e17f8edefc42cb3baf1f666f0154ddde76f9',
    tokenDecimals: 18,
    exchangeAddress: '0x86ac46334e5e7b8e4edbab80d23f50c5f76dd97f'
  },
  {
    symbol: 'HAK',
    name: 'Shaka',
    tokenAddress: '0x93a7174dafd31d13400cd9fa01f4e5b5baa00d39',
    tokenDecimals: 18,
    exchangeAddress: '0xa56325c4fdf7ff2d7f7055180f52d898319b118f'
  },
  {
    symbol: 'KAYA',
    name: 'LATTICE80 KAYA TOKEN',
    tokenAddress: '0xfd66c6771d00b5646949086152b7ccdca25e5686',
    tokenDecimals: 18,
    exchangeAddress: '0x5f96dd7c87b3e7a7874cdf20b49ebbe4356b34f9'
  },
  {
    symbol: 'KFC',
    name: 'Kung Fu Coin',
    tokenAddress: '0xfb918f8ab041ff4e2c6d70dba716915865d1bb71',
    tokenDecimals: 18,
    exchangeAddress: '0xe6e60b1c5b3b956e4a55d617e5df34515dd0aab8'
  },
  {
    symbol: '0xBCH',
    name: '0xBitcoinCash',
    tokenAddress: '0xe5b9746dfcc2ef1054d47a451a77bb5f390c468d',
    tokenDecimals: 8,
    exchangeAddress: '0xf91b57cd1faed8b9210d0439106dfd7c50787c16'
  },
  {
    symbol: 'SHOCK',
    name: 'AfterShock',
    tokenAddress: '0x11ded8addda881f700fbda2fe2030656289322a3',
    tokenDecimals: 18,
    exchangeAddress: '0xd52e70dbb7a4a192bbc82685c8beb8d87266f6d4'
  },
  {
    symbol: 'TESTUNDT',
    name: 'TESTUNDT_V1',
    tokenAddress: '0xfa90479a1e17a7a2079c96d9ceb6879e465e24de',
    tokenDecimals: 18,
    exchangeAddress: '0x364eba64744b7835d8b4afb1411c0d3092003b47'
  },
  {
    symbol: 'SMARC',
    name: 'SmarcToken',
    tokenAddress: '0x5ae655088e79fa0ced7b472d3bacd215ef796ccc',
    tokenDecimals: 18,
    exchangeAddress: '0xa810da2f8fca6816795662acfeee754aa528a1a5'
  },
  {
    symbol: 'MBDS',
    name: 'MBDS',
    tokenAddress: '0xc5b98b61fb0fe6427c9a88dbecdfced34eb56ef1',
    tokenDecimals: 2,
    exchangeAddress: '0x7981b7a9431d600dcb723cbcab9ffda94cb16463'
  },
  {
    symbol: 'FLIXX',
    name: 'Flixx',
    tokenAddress: '0xf04a8ac553fcedb5ba99a64799155826c136b0be',
    tokenDecimals: 18,
    exchangeAddress: '0x8355123d4e249c7e7f1543c1728855a2b51061ef'
  },
  {
    symbol: 'BRC',
    name: 'BinaryCoin',
    tokenAddress: '0x7501a4f0b6fcf5ab8d682a57e668214edc3d3ea4',
    tokenDecimals: 8,
    exchangeAddress: '0x35d2c153872166048afc6b52f87b193dbc96082c'
  },
  {
    symbol: 'ADT',
    name: 'Air-Drop Token',
    tokenAddress: '0xb1068836933fce8b92a7f65222ea551061308af4',
    tokenDecimals: 18,
    exchangeAddress: '0x5b24c76684c593f8b070de0ba9a5db4df50450ce'
  },
  {
    symbol: 'CTC',
    name: 'CyberTronChain',
    tokenAddress: '0x1cdca6811e2ef23d6099d09d2754211d3c7b5af1',
    tokenDecimals: 18,
    exchangeAddress: '0xf85e83d42644d982b9a770e7d698d9f233c2248c'
  },
  {
    symbol: 'CBC',
    name: 'CORE BUILDINGS',
    tokenAddress: '0x04b550977fc09ffdac3e13d5d490367eb5ce673c',
    tokenDecimals: 8,
    exchangeAddress: '0xe7264eaf580f833a6daa00662a8dffb83da6aff1'
  },
  {
    symbol: 'TRXC',
    name: 'TRONCLASSIC',
    tokenAddress: '0xad5fe5b0b8ec8ff4565204990e4405b2da117d8e',
    tokenDecimals: 0,
    exchangeAddress: '0x722b75eb9a631b0237ee074e8b74818f2d6911bc'
  },
  {
    symbol: 'BTV',
    name: 'Ben Token Ving',
    tokenAddress: '0xf5b15fefa638849294db2a836433eca4f7429f6f',
    tokenDecimals: 4,
    exchangeAddress: '0x3f6d1766dae068cc557a7bd068ebb9c78e345682'
  },
  {
    symbol: 'BLVD',
    name: 'BULVRD',
    tokenAddress: '0x3afe25a2739b5c2e08cfec439f9621d91ff7fbfb',
    tokenDecimals: 18,
    exchangeAddress: '0xccc88a633929b901ad6e3a9aeb9e23aab6ad9e2d'
  },
  {
    symbol: 'WILD',
    name: 'WILD Token',
    tokenAddress: '0xd3c00772b24d997a812249ca637a921e81357701',
    tokenDecimals: 18,
    exchangeAddress: '0xe93b3d464984ae04a1f9a858801a7b0b1e340660'
  },
  {
    symbol: 'FBU',
    name: 'ForintBudapest',
    tokenAddress: '0x2c7d9a0416d00ff65bd851e8fc3badb1607db582',
    tokenDecimals: 2,
    exchangeAddress: '0xdfcf6c4c82d25597927d06e487053398cfb4a784'
  },
  {
    symbol: 'DGYBN',
    name: 'DoggyBuddyCoin',
    tokenAddress: '0xcc050e357141b968742b23e12f0954c57506a204',
    tokenDecimals: 3,
    exchangeAddress: '0x96efc33eaed23e9f276203196d81915557c0a21f'
  },
  {
    symbol: 'GZE',
    name: 'GazeCoin Metaverse Token',
    tokenAddress: '0x4ac00f287f36a6aad655281fe1ca6798c9cb727b',
    tokenDecimals: 18,
    exchangeAddress: '0x6171aa1829c9f9479206658de3b6df4fa48f82c0'
  },
  {
    symbol: 'YAH',
    name: 'JamaiCoin',
    tokenAddress: '0xc2856a8310af421a2a65de16428c2dec6ceacb36',
    tokenDecimals: 18,
    exchangeAddress: '0x3fc90d031eecc364c620166ee7a791a151a16062'
  },
  {
    symbol: 'STAYK',
    name: 'STAYK.ME',
    tokenAddress: '0xa4fb83907ed6ee8fe476cbdb65fe3304a8898157',
    tokenDecimals: 18,
    exchangeAddress: '0x86bceb2f9a063191806b97d6a87ccc615d8f0ad0'
  },
  {
    symbol: 'MOAB',
    name: 'M.O.A.B',
    tokenAddress: '0xd54e2e7281de8e7d220f9173e33241fbfa881968',
    tokenDecimals: 18,
    exchangeAddress: '0x57cbdde774a989267e68565c361593cf7ccc5792'
  },
  {
    symbol: 'CNR',
    name: 'Cinder',
    tokenAddress: '0xce27a2388d2ba7a9995fa0960fb168568e2a7923',
    tokenDecimals: 18,
    exchangeAddress: '0xf3592d3b21027c5aea86f2398c4b049478d4c3df'
  },
  {
    symbol: 'BOR',
    name: 'BitCollar',
    tokenAddress: '0x1a51fabc97bce2743cd9214b6e8d88040ab1c064',
    tokenDecimals: 18,
    exchangeAddress: '0xae55bf087be880ef820be1d7c54ab5422ec3054c'
  },
  {
    symbol: 'FMF',
    name: 'Formosa Financial Token',
    tokenAddress: '0xb4d0fdfc8497aef97d3c2892ae682ee06064a2bc',
    tokenDecimals: 18,
    exchangeAddress: '0x3ee21d6a7feed509daf5f224f1b23f6602c83fc8'
  },
  {
    symbol: 'BTCH',
    name: 'Bitcoin Hash',
    tokenAddress: '0x94bc760c9b000a82d5325cbd59460a8b840effd1',
    tokenDecimals: 8,
    exchangeAddress: '0x7feb263b9ecc5656c2470ae4c972c995918705dc'
  },
  {
    symbol: 'SHIT',
    name: 'Stupendously High Income Taxes',
    tokenAddress: '0x124df05231383b565280c672eea957557bda51b9',
    tokenDecimals: 18,
    exchangeAddress: '0x7badb76b8a253b3c36d529c74b04223a1898a1e5'
  },
  {
    symbol: 'WED',
    name: 'Wednesday Coin',
    tokenAddress: '0x7848ae8f19671dc05966dafbefbbbb0308bdfabd',
    tokenDecimals: 18,
    exchangeAddress: '0xbaaaaa5e09b123602cc8abb454d0bd5b5d726218'
  },
  {
    symbol: 'ETH20SMACO',
    name: 'ETH 20 SMA Crossover Set',
    tokenAddress: '0x9ea463ec4ce9e9e5bc9cfd0187c4ac3a70dd951d',
    tokenDecimals: 18,
    exchangeAddress: '0xff04bf6e6de885b8d5d7fc0450a463c14021f2fd'
  },
  {
    symbol: 'JS',
    name: 'JavaScript',
    tokenAddress: '0x5046e860ff274fb8c66106b0ffb8155849fb0787',
    tokenDecimals: 8,
    exchangeAddress: '0xa1a73676cf4d50db2a5472f270538cba96482cbe'
  },
  {
    symbol: 'IBTC',
    name: 'IBTC',
    tokenAddress: '0x0784dbabb6c6834bddfb7cfee116ba049e5dafab',
    tokenDecimals: 18,
    exchangeAddress: '0x4eac5deb5b3a5c08077fcde5fa3a3a23670d1165'
  },
  {
    symbol: 'CTRT',
    name: 'Cryptrust',
    tokenAddress: '0x8606a8f28e1e2fd50b9074d65c01548b1f040b32',
    tokenDecimals: 8,
    exchangeAddress: '0x25b7b2dc6551c14af780e86582477b78420f86cd'
  },
  {
    symbol: 'PAS',
    name: 'PASSIVE',
    tokenAddress: '0x34453c84b6d18bc285a80e31f6c6395934434e92',
    tokenDecimals: 18,
    exchangeAddress: '0x0f75ec23c26f6d00d8c12d8d6dfe6633adb224ef'
  },
  {
    symbol: 'FTXT',
    name: 'FUTURAX',
    tokenAddress: '0x41875c2332b0877cdfaa699b641402b7d4642c32',
    tokenDecimals: 8,
    exchangeAddress: '0x0506c1034579265cafa9859a0b598613944b96cc'
  },
  {
    symbol: 'SOCKSCLASSIC',
    name: 'Unisocks Classic Edition 0',
    tokenAddress: '0xf7a5a8a95491ec170738434963b649671b563b88',
    tokenDecimals: 18,
    exchangeAddress: '0x92a5333d966d002181ad86d8588bf6e2f9e53436'
  },
  {
    symbol: 'ELET',
    name: 'Elementeum',
    tokenAddress: '0x6c37bf4f042712c978a73e3fd56d1f5738dd7c43',
    tokenDecimals: 18,
    exchangeAddress: '0x56364d9b65961d014e8fd0f900d6924c845f9498'
  },
  {
    symbol: 'googlier',
    name: 'Googlier Token',
    tokenAddress: '0x600ff15d3cf655d1521c86dddb72c511c785b594',
    tokenDecimals: 18,
    exchangeAddress: '0xeb6d09b0c9550f05b81b04e80527f33fd6116186'
  },
  {
    symbol: 'BELL',
    name: 'ChrisBell',
    tokenAddress: '0xf071a4a5086a71af034ae895288da437e2722469',
    tokenDecimals: 2,
    exchangeAddress: '0x6dbfadb29f9c7400b96f71e354657d89649533f4'
  },
  {
    symbol: 'EMPRG',
    name: 'empowr green',
    tokenAddress: '0xf7a6868ad958b724bc486e10bd3ddc8d63aa16c7',
    tokenDecimals: 18,
    exchangeAddress: '0x3db6585d5e78e93d31868b5c69df0d3284ba2b46'
  },
  {
    symbol: 'IPSX',
    name: 'IPSX',
    tokenAddress: '0x001f0aa5da15585e5b2305dbab2bac425ea71007',
    tokenDecimals: 18,
    exchangeAddress: '0x311aa89ef339db0579f612f5edd592d7774a221f'
  },
  {
    symbol: 'GOOGLIER',
    name: 'Googlier Gold',
    tokenAddress: '0x6d01eed438511d9f694758d3b5cf42ee21d382cf',
    tokenDecimals: 18,
    exchangeAddress: '0xa4afbdd162b105f7333825b1ff66b7ebbba72a9c'
  },
  {
    symbol: 'MVC',
    name: 'MaiVangCity',
    tokenAddress: '0xebfc4fa869a6db3cbd6a849b5b656bae4aba68f0',
    tokenDecimals: 0,
    exchangeAddress: '0x2d2c97c7aa2f6a46653a738b1b673061b0564b2e'
  },
  {
    symbol: 'AVJO',
    name: 'Average Joe',
    tokenAddress: '0x875310f70ede3e5f79b20c2ffd9451dfe48b6730',
    tokenDecimals: 2,
    exchangeAddress: '0x870eef07fe03928f8b861d11e3b23046b9e6fb04'
  },
  {
    symbol: 'cWBTC',
    name: 'Compound Wrapped BTC',
    tokenAddress: '0xc11b1268c1a384e55c48c2391d8d480264a3a7f4',
    tokenDecimals: 8,
    exchangeAddress: '0x62e71abd0d8b88c08090a1290fbb9f51b5ffc966'
  },
  {
    symbol: 'GPL',
    name: 'Gold Pressed Latinum',
    tokenAddress: '0xeeddaa78e0b2de769e969bd049c8faff3280df97',
    tokenDecimals: 18,
    exchangeAddress: '0xe39dfa524cde18f1432a96fec570968a16935cf2'
  },
  {
    symbol: 'cREP',
    name: 'Compound Augur',
    tokenAddress: '0x158079ee67fce2f58472a96584a73c7ab9ac95c1',
    tokenDecimals: 8,
    exchangeAddress: '0xdedd454118001a3904b08954ab2af51603182bff'
  },
  {
    symbol: 'cBAT',
    name: 'Compound Basic Attention Token',
    tokenAddress: '0x6c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e',
    tokenDecimals: 8,
    exchangeAddress: '0x03b054ef0cd799848f157e3033fef4c4cc0e39b5'
  },
  {
    symbol: 'IOTX',
    name: 'IoTeX Network',
    tokenAddress: '0x6fb3e0a217407efff7ca062d46c26e5d60a14d69',
    tokenDecimals: 18,
    exchangeAddress: '0x084f002671a5f03d5498b1e5fb15fc0cfee9a470'
  },
  {
    symbol: 'BELLO',
    name: 'BELLO_TOKEN',
    tokenAddress: '0xd378a2a4e37025f87528c7c1a4224b0a18f761eb',
    tokenDecimals: 18,
    exchangeAddress: '0x8dcd2e05015474735ee04cfa0fcecc207dbb42fd'
  },
  {
    symbol: 'TACO',
    name: 'MetaCartel Tacos',
    tokenAddress: '0x36efe52b14e4d0ca4e3bd492488272e1fb2d7e1b',
    tokenDecimals: 18,
    exchangeAddress: '0xd028660f921c3fc2e58d1ee2ef92a1fa71d09cc8'
  },
  {
    symbol: 'BRAP',
    name: 'BRAPPER',
    tokenAddress: '0xa0cca3cf5c64152883f4c947c404e46996593fa7',
    tokenDecimals: 18,
    exchangeAddress: '0x280fe3edc99eb56d5956587e15dacf1a3d4d7390'
  },
  {
    symbol: 'HERO',
    name: 'Hero Origen Token',
    tokenAddress: '0x02585e4a14da274d02df09b222d4606b10a4e940',
    tokenDecimals: 18,
    exchangeAddress: '0xcef238e953938634cb5fd5fb1e7883cc57723288'
  },
  {
    symbol: 'HL',
    name: 'HotLove',
    tokenAddress: '0xdff991af459d05175b3bb766b950afc697b68df0',
    tokenDecimals: 18,
    exchangeAddress: '0xcaa6b9458c1070bf1fe4b3d68b71d8175aa9c20e'
  },
  {
    symbol: 'MRO',
    name: 'Mero Currency',
    tokenAddress: '0x6ff313fb38d53d7a458860b1bf7512f54a03e968',
    tokenDecimals: 18,
    exchangeAddress: '0xfa7c25b15acfb4e45fbc284090ebbb655e20f1c4'
  },
  {
    symbol: 'UOS',
    name: 'Ultra Token',
    tokenAddress: '0xd13c7342e1ef687c5ad21b27c2b65d772cab5c8c',
    tokenDecimals: 4,
    exchangeAddress: '0xfade8426c81ba0d84081492277046db735bad433'
  },
  {
    symbol: 'ALP',
    name: 'AlphabetX',
    tokenAddress: '0x11fb25cccc8f25ff993e802f506b530d20e65e12',
    tokenDecimals: 18,
    exchangeAddress: '0xd681c0fddeae5d45b02e75e72431bd26a4efbbeb'
  },
  {
    symbol: 'HDC',
    name: 'Hydrolic',
    tokenAddress: '0x26710d94067b144c2a6970cbbb96a5d08b70ac79',
    tokenDecimals: 18,
    exchangeAddress: '0xeb882a74859c9b6d4f5458076c6509a886e9880b'
  },
  {
    symbol: 'VOD',
    name: 'VoomDex Coin',
    tokenAddress: '0x10307c92c84903dda982151ec01a196517900652',
    tokenDecimals: 18,
    exchangeAddress: '0x515b56619e2b2ec0f8862b8ced417aa1518139db'
  },
  {
    symbol: 'SHEEP',
    name: 'Sheep Coin',
    tokenAddress: '0xc3f1581c94a0c592a99595d2a55ba4b1f3d6e8cc',
    tokenDecimals: 18,
    exchangeAddress: '0xe1b1c8d5236963b607c76fea4b3610f19f4e6d61'
  },
  {
    symbol: 'MRQ',
    name: 'MarsEquity',
    tokenAddress: '0xc651e99f40d908b6a606d54f221b414b5228ff60',
    tokenDecimals: 18,
    exchangeAddress: '0x22f32524a1edf73d192737e869a8881fc95a8c15'
  },
  {
    symbol: 'PRVC',
    name: 'PrivateReserveCoin',
    tokenAddress: '0x780febe2be59cc7e939ffb2fb78797eaf17136c5',
    tokenDecimals: 18,
    exchangeAddress: '0xa2558b1e45dd15d88267504a6853b0049889c850'
  },
  {
    symbol: 'HOWL',
    name: 'HOWL',
    tokenAddress: '0xe755f2fa95e47c5588c3037dd38e1268fa5fcecd',
    tokenDecimals: 18,
    exchangeAddress: '0xf14cfe57427aa29fc957f0454e9a851ad6584d39'
  },
  {
    symbol: 'HYD',
    name: 'Hydra',
    tokenAddress: '0xd233495c48eb0143661ffc8458eafc21b633f97f',
    tokenDecimals: 12,
    exchangeAddress: '0x4f87273fd042f47bf2a8e1f9430efd937182aabd'
  },
  {
    symbol: 'FTH',
    name: 'Fitcash',
    tokenAddress: '0xb414f8ec2d14c64f37b1559cbe43746284514596',
    tokenDecimals: 18,
    exchangeAddress: '0x86394d6dcfa957754eb3b7eb537fa3bb040db22d'
  },
  {
    symbol: 'DOG',
    name: 'DOG: The Anti-Scam Reward Token',
    tokenAddress: '0xeed2b7756e295a9300e53dd049aeb0751899bae3',
    tokenDecimals: 18,
    exchangeAddress: '0xb88ff10ba7c8d572e34bf28a7795558430971600'
  },
  {
    symbol: 'LAIL',
    name: 'lail currency',
    tokenAddress: '0x73d67103ad2bc658632b8a32d40f23001b16a19b',
    tokenDecimals: 6,
    exchangeAddress: '0xf752389480e98f360bdfbd3d30fc3ac0fd240891'
  },
  {
    symbol: 'KMN',
    name: 'Kamun',
    tokenAddress: '0xb18ca875230da1025707fa5abc02bc66ebd6ebd9',
    tokenDecimals: 18,
    exchangeAddress: '0x0a53467ca28b08283e7f7da9fc77b3bea29b2ec5'
  },
  {
    symbol: 'CRNC',
    name: 'CURRENT',
    tokenAddress: '0xc9a1e678c9025f0d4cf129d6de0d80f07d97a36f',
    tokenDecimals: 3,
    exchangeAddress: '0xe012da3c5bb47292fa569a5d5691bb84a4d46dc0'
  },
  {
    symbol: 'YZC',
    name: 'YoozCoin',
    tokenAddress: '0xab71e90c8f38367197bc07fc347df4e012807449',
    tokenDecimals: 18,
    exchangeAddress: '0xb2f0d0e38a219fea5f8cdf4dfbd1cd4389800e36'
  },
  {
    symbol: 'DDG',
    name: 'DD Gold',
    tokenAddress: '0x6999d699a8210d728a9b2c34b4ad89e96ce34df8',
    tokenDecimals: 0,
    exchangeAddress: '0x9a1173a2bac22a4ce30a67b7f66beb64d1b9eb08'
  },
  {
    symbol: 'CCC',
    name: 'Controlled Chaos Coin',
    tokenAddress: '0xb89d6804bef1164c0b76b975cef2907c606b5bbe',
    tokenDecimals: 4,
    exchangeAddress: '0x59ae3464c4a6ac63d2bbece510ed7f4ad9e1bd8a'
  },
  {
    symbol: 'DNR',
    name: 'DENARIO',
    tokenAddress: '0x9f65cfd011233c2193bfeb5088f0e86068b794b0',
    tokenDecimals: 10,
    exchangeAddress: '0xe83d295b48f7785b3d142cf5d47e42aa86f6a0ff'
  },
  {
    symbol: 'REALT',
    name: 'REAL-T',
    tokenAddress: '0x46cc7ec70746f4cbd56ce5fa9bb7d648398eaa5c',
    tokenDecimals: 4,
    exchangeAddress: '0x1935c95bb09d3a298a77ce37c4ba72a51a6a01eb'
  },
  {
    symbol: 'FTX Token',
    name: 'FTT',
    tokenAddress: '0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9',
    tokenDecimals: 18,
    exchangeAddress: '0x10e57b7ffb61ae0c2e21e4ec66d6367d730f0db6'
  },
  {
    symbol: 'DDS',
    name: 'DD Silver',
    tokenAddress: '0x9da4cc37379f48960bf946e6a8329df5c2dc2bc8',
    tokenDecimals: 0,
    exchangeAddress: '0x172a6f585e7c2ce46b36e617a94548e3c629ef28'
  },
  {
    symbol: 'FLX',
    name: 'Flexible',
    tokenAddress: '0xb2aa6fb02df17b61f615d078484a081083df9621',
    tokenDecimals: 18,
    exchangeAddress: '0xf86ee716fc3c2ef7b7dfb87d8b3ee9caece206c5'
  },
  {
    symbol: 'DIV',
    name: 'DivVC',
    tokenAddress: '0x093c09f5919742f1cd0996781fee72842fc517b1',
    tokenDecimals: 18,
    exchangeAddress: '0xb08a6e6109c86d6d6069a80530a77013a9016bed'
  },
  {
    symbol: 'CFT',
    name: 'Coffee Token',
    tokenAddress: '0x5bf2390a68ab7db7d27ae81894c4e22e669af236',
    tokenDecimals: 18,
    exchangeAddress: '0x6b90ee5c85791cf9ae43d38591068acce6a5a116'
  },
  {
    symbol: 'RTC',
    name: 'RTCoin',
    tokenAddress: '0xecc043b92834c1ebde65f2181b59597a6588d616',
    tokenDecimals: 18,
    exchangeAddress: '0x438134340e3a72b672cfa58c6a7a1122817a74c9'
  },
  {
    symbol: 'VND',
    name: 'Đồng Việt Nam',
    tokenAddress: '0xfc69e0771bd474e0575763bcb6b87d279e182fe5',
    tokenDecimals: 8,
    exchangeAddress: '0xc2de435f1c210ebff12dd81f4e837e1fc97b420a'
  },
  {
    symbol: 'Libra',
    name: 'LibraNetwork',
    tokenAddress: '0x6f9afee7645ed0f115f39a64346e7cb2cd17b26f',
    tokenDecimals: 18,
    exchangeAddress: '0x52e6d60124143d56245ec2b857fe51254985c2b7'
  },
  {
    symbol: 'BAGS',
    name: 'BAGS',
    tokenAddress: '0xe7bf3aee922367c10c8acec3793fe7d809a38eef',
    tokenDecimals: 18,
    exchangeAddress: '0x29df24f66448b24cd1974cd17acd299695aaf625'
  },
  {
    symbol: 'FFHC',
    name: 'flashflip HC',
    tokenAddress: '0x9645f9cb0af410f170afe062bfbea0fc51e524e8',
    tokenDecimals: 0,
    exchangeAddress: '0xd1e202ccca07dd72f75a5a50a92983e0ba444551'
  },
  {
    symbol: 'RCLE',
    name: 'Ross Campbell Legal Engineering',
    tokenAddress: '0x5a844590c5b8f40ae56190771d06c60b9ab1da1c',
    tokenDecimals: 18,
    exchangeAddress: '0xd994b83f2fca809704d6819935d89f3d0f5de555'
  },
  {
    symbol: 'SATURN',
    name: 'Saturn DAO Token',
    tokenAddress: '0xb9440022a095343b440d590fcd2d7a3794bd76c8',
    tokenDecimals: 4,
    exchangeAddress: '0xe43ab311483a43a6b2ab634fcb5b3261aaa8aa70'
  },
  {
    symbol: 'Shuf',
    name: 'shuffle.monster token',
    tokenAddress: '0xd76c75b9cbbeab4109456fda9f2da73297b795db',
    tokenDecimals: 18,
    exchangeAddress: '0xeb1b47e9bcdd3b81fddd49c9eed75bd095430509'
  },
  {
    symbol: 'LCS',
    name: 'LocalCoinSwap Cryptoshare',
    tokenAddress: '0xaa19961b6b858d9f18a115f25aa1d98abc1fdba8',
    tokenDecimals: 18,
    exchangeAddress: '0xa01e4e09f0ba8a37aa0787ebc764b7be607fa601'
  },
  {
    symbol: 'IPL',
    name: 'InsurePal token',
    tokenAddress: '0x64cdf819d3e75ac8ec217b3496d7ce167be42e80',
    tokenDecimals: 18,
    exchangeAddress: '0x3981a1b7ffe82b3099d922b9021f7a66da2fca06'
  },
  {
    symbol: 'OAX',
    name: 'openANX Token',
    tokenAddress: '0x701c244b988a513c945973defa05de933b23fe1d',
    tokenDecimals: 18,
    exchangeAddress: '0xb2f061557d5cf8ce53f389ddcc4b69fb54115871'
  },
  {
    symbol: 'LION',
    name: 'LION',
    tokenAddress: '0x2167fb82309cf76513e83b25123f8b0559d6b48f',
    tokenDecimals: 18,
    exchangeAddress: '0xb9e91d257751d0fba8a0c279f0faf4b2573bc434'
  },
  {
    symbol: '0xBUTT',
    name: 'ButtCoin',
    tokenAddress: '0x7c1056ac0f7d223c4297e0c683453ee625011b1f',
    tokenDecimals: 8,
    exchangeAddress: '0xee1262668bfca72ca02ef73ed1409c18f0d33926'
  },
  {
    symbol: 'IDRT',
    name: 'Rupiah Token',
    tokenAddress: '0x998ffe1e43facffb941dc337dd0468d52ba5b48a',
    tokenDecimals: 2,
    exchangeAddress: '0x632e120ebeb7869fe0e1ad5dbc5ab3b90a82a827'
  },
  {
    symbol: 'SHUF',
    name: 'shuffle.monster token V2',
    tokenAddress: '0xd9db58c0cd8b93906ec87e353d6b1dbe19f3bfed',
    tokenDecimals: 18,
    exchangeAddress: '0x3ee17307ff3a520e2f1719794998dc67e9b1e616'
  },
  {
    symbol: 'FAU',
    name: 'FaucetToken',
    tokenAddress: '0xfab46e002bbf0b4509813474841e0716e6730136',
    tokenDecimals: 18,
    exchangeAddress: '0x952e1c4340fd0b9e8fdedf5a2a01982ae54868ab'
  },
  {
    symbol: 'EDT',
    name: 'EDT',
    tokenAddress: '0xce53a179047ebed80261689367c093c90a94cc08',
    tokenDecimals: 8,
    exchangeAddress: '0xa650a8e24466613f92d1f448cf21e09bfaf86779'
  },
  {
    symbol: 'SUDWA',
    name: 'SUDWA',
    tokenAddress: '0x700f55ca3cc165b33eb1071d66607a1d4631caa9',
    tokenDecimals: 0,
    exchangeAddress: '0xe1afab533d4f4d821bad57d4e7e41f5e8e29e49c'
  },
  {
    symbol: 'DRJ',
    name: 'JJ At Work',
    tokenAddress: '0xf0990ed3804c4c0b5fd69358626364c9995d1312',
    tokenDecimals: 18,
    exchangeAddress: '0x459dad1a6db8de6f31a71206cd56fec5b5bae912'
  },
  {
    symbol: 'ZAI',
    name: 'Zaigar',
    tokenAddress: '0x4e9095a1b97933bf528b5c2fa1e734f167c3ae12',
    tokenDecimals: 8,
    exchangeAddress: '0x0207098c1286af7af8d6eb1ad9c8a1ed2404e290'
  },
  {
    symbol: 'MXM',
    name: 'Maximine Coin',
    tokenAddress: '0x8e766f57f7d16ca50b4a0b90b88f6468a09b0439',
    tokenDecimals: 18,
    exchangeAddress: '0x8d4bb4a828664fa568825728585fc3556ae7d01a'
  },
  {
    symbol: 'HYPE',
    name: 'HYPE Token',
    tokenAddress: '0x2630997aab62fa1030a8b975e1aa2dc573b18a13',
    tokenDecimals: 18,
    exchangeAddress: '0x72d0621599431202cc24b47646c6c7873b9c3fec'
  },
  {
    symbol: 'PRE',
    name: 'Presearch',
    tokenAddress: '0x88a3e4f35d64aad41a6d4030ac9afe4356cb84fa',
    tokenDecimals: 18,
    exchangeAddress: '0x97c6e0159f1c716c3e471de85c2f81f20533df4d'
  },
  {
    symbol: 'ELF',
    name: 'ELF Token',
    tokenAddress: '0xbf2179859fc6d5bee9bf9158632dc51678a4100e',
    tokenDecimals: 18,
    exchangeAddress: '0x92d49cfaf85f5405882e0916fad9881df491c25b'
  },
  {
    symbol: 'RIC',
    name: 'AURIcoin',
    tokenAddress: '0x08e0faff8bb80eaf8c30a99920355028b5bd6789',
    tokenDecimals: 8,
    exchangeAddress: '0x8e101c4dd4658a23159ee54b30fd7dcda27bd405'
  },
  {
    symbol: 'UNDT',
    name: 'Union Network Dollar Token',
    tokenAddress: '0x7c6c3b4e91923f080d6cc847a68d7330400a95d7',
    tokenDecimals: 18,
    exchangeAddress: '0x32a17ae3d6684105acb39e0c33699fc398a9522e'
  },
  {
    symbol: 'UDAO',
    name: 'UnionDAO',
    tokenAddress: '0x4a32e09c60af50f0a5869bf5c622f4e5d57c3b37',
    tokenDecimals: 18,
    exchangeAddress: '0x6eb93407d116d367893fad239a827235bc0d46fe'
  },
  {
    symbol: 'URING',
    name: 'Uni Ring',
    tokenAddress: '0x8baaabee4e60982b128b5339a998ee748eca4cff',
    tokenDecimals: 18,
    exchangeAddress: '0xba6fc6c51d793cccf54a8581bd7b9a40fe5bb0b8'
  },
  {
    symbol: 'KGT',
    name: 'King Token',
    tokenAddress: '0xfe417d8eef16948ba0301c05f5cba87e2c1c51c8',
    tokenDecimals: 9,
    exchangeAddress: '0xbc9297dba73c72386efb34f75486171dcaf22872'
  },
  {
    symbol: 'ONOT',
    name: 'ONOT',
    tokenAddress: '0xb31c219959e06f9afbeb36b388a4bad13e802725',
    tokenDecimals: 18,
    exchangeAddress: '0x4737ceded868452e0d9b5c4253707501beacb2da'
  },
  {
    symbol: '🕯️',
    name: 'ignis',
    tokenAddress: '0x0dea6dbacaee8a903dec0b1233fec55d10fdf975',
    tokenDecimals: 18,
    exchangeAddress: '0x87f44b439cca55ea63cfb854e8d73e1f12296279'
  },
  {
    symbol: 'MBC',
    name: 'Marblecoin',
    tokenAddress: '0x8888889213dd4da823ebdd1e235b09590633c150',
    tokenDecimals: 18,
    exchangeAddress: '0xe1b7aec3639068b474bfbcb916580fc28a20717b'
  },
  {
    symbol: 'SIM',
    name: 'SIM',
    tokenAddress: '0x8fff600f5c5f0bb03f345fd60f09a3537845de0a',
    tokenDecimals: 0,
    exchangeAddress: '0x22e527afca5a43ad40393231f8048beda98458a9'
  },
  {
    symbol: 'GTO',
    name: 'Gifto',
    tokenAddress: '0xc5bbae50781be1669306b9e001eff57a2957b09d',
    tokenDecimals: 5,
    exchangeAddress: '0x29173574542d0e6baa3ffe58b7111478df86adb3'
  },
  {
    symbol: 'HTX',
    name: 'HOT',
    tokenAddress: '0x46ae264bf6d9dc6dd84c31064551f961c67a755c',
    tokenDecimals: 18,
    exchangeAddress: '0x53efed3efd1deabc59a597cff5ca35b284cd7f5d'
  },
  {
    symbol: 'JDT',
    name: 'Jungle Coin',
    tokenAddress: '0x408865a24f0b02e43409c7c23cd3362da427c122',
    tokenDecimals: 18,
    exchangeAddress: '0xd3bf8a2e1a6501972c450a7abc817fe796fc66f6'
  },
  {
    symbol: 'DAPP',
    name: 'DAPPTOKEN',
    tokenAddress: '0x747c276c9a714c79a6b9b9ea1a995888cc9e35e4',
    tokenDecimals: 18,
    exchangeAddress: '0xbd2f6c29ab8303369067a64b5df5889f055e93bc'
  },
  {
    symbol: 'DYT',
    name: 'Dynamite',
    tokenAddress: '0xad95a3c0fdc9bc4b27fd79e028a0a808d5564aa4',
    tokenDecimals: 18,
    exchangeAddress: '0x5459ed7c3ceebd51eab6f6e36a28e6930116d132'
  },
  {
    symbol: 'C10',
    name: 'CRYPTO10 Hedged',
    tokenAddress: '0x000c100050e98c91f9114fa5dd75ce6869bf4f53',
    tokenDecimals: 18,
    exchangeAddress: '0xc708c0da439ad335862050277dff1bd34155d7f6'
  },
  {
    symbol: 'SNX',
    name: 'Synthetix Network Token',
    tokenAddress: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f',
    tokenDecimals: 18,
    exchangeAddress: '0x3958b4ec427f8fa24eb60f42821760e88d485f7f'
  },
  {
    symbol: 'BSOV',
    name: 'BitcoinSoV',
    tokenAddress: '0x26946ada5ecb57f3a1f91605050ce45c482c9eb1',
    tokenDecimals: 8,
    exchangeAddress: '0x87ccbfd2d46d167d9e7488255680f48c2ad0c5bb'
  },
  {
    symbol: 'PTT',
    name: 'PTT',
    tokenAddress: '0xe4cdd296ac85c7d8477988f582d457e638349947',
    tokenDecimals: 0,
    exchangeAddress: '0xe7c6aef152984dcea3220c6679a3b106092e9c90'
  },
  {
    symbol: 'EEFI',
    name: 'Ethele Fire',
    tokenAddress: '0x241609ad37a5038e459bda70ffb1c052e76a1b8a',
    tokenDecimals: 18,
    exchangeAddress: '0x6a1d1df3fa2b4ee221f0652829c7ad468b8683fd'
  },
  {
    symbol: 'EEEA',
    name: 'Ethele Earth',
    tokenAddress: '0xd6a7027807d42695c49466079101615dafd4b46b',
    tokenDecimals: 18,
    exchangeAddress: '0x1b16938fd0f634f435153d3f840e31eb5f700665'
  },
  {
    symbol: 'EEME',
    name: 'Ethele Metal',
    tokenAddress: '0x4f7ecd8afa3b43e0bfe3820232d04e8d5921cc29',
    tokenDecimals: 18,
    exchangeAddress: '0xb2bef46f099f7e7e751491c5faf857c9f9a2227e'
  },
  {
    symbol: 'EEWA',
    name: 'Ethele Water',
    tokenAddress: '0x9dd58c478c69f1b32c78f477dafa57c43927b19c',
    tokenDecimals: 18,
    exchangeAddress: '0x393819eb3a0a2baec8b412b1c2b0e8dffc949cac'
  },
  {
    symbol: 'EEWO',
    name: 'Ethele Wood',
    tokenAddress: '0xe690c40835cf3717160130e37c46044181cf72dd',
    tokenDecimals: 18,
    exchangeAddress: '0xb2f3a588a912317fd0a3e0537873e87401d4d47d'
  },
  {
    symbol: 'EEYI',
    name: 'Ethele Yin',
    tokenAddress: '0xe784824946ab8d8204eff386d2740fdfbce48c00',
    tokenDecimals: 18,
    exchangeAddress: '0x20f04038ffd72ab739f9674ac399c1d2f08a393d'
  },
  {
    symbol: 'EEYA',
    name: 'Ethele Yang',
    tokenAddress: '0x81a8b50dec71a73463c1d02c80c0cd8883014c59',
    tokenDecimals: 18,
    exchangeAddress: '0x79421a26e318f3ae8a261dab3404dca377169b61'
  },
  {
    symbol: 'ZAP',
    name: 'ZAP TOKEN',
    tokenAddress: '0x6781a0f84c7e9e846dcb84a9a5bd49333067b104',
    tokenDecimals: 18,
    exchangeAddress: '0x9c3cf0fe5b5065b344a1b80c6919ade1caabab19'
  },
  {
    symbol: 'BBC',
    name: 'B2BCoin',
    tokenAddress: '0xe7d3e4413e29ae35b0893140f4500965c74365e5',
    tokenDecimals: 18,
    exchangeAddress: '0x10eff783e748a3f4e6782673935464ddeb6d27bf'
  },
  {
    symbol: 'GPMU',
    name: 'GPM Utility Token',
    tokenAddress: '0x72a7d948b23528e421334bcf783db723232d1633',
    tokenDecimals: 2,
    exchangeAddress: '0x3dfdcc6b0c52b5eaaa9ed32de8420cd74fbe73ce'
  },
  {
    symbol: 'LHOMME',
    name: 'LHOMME COIN',
    tokenAddress: '0x116803242736fad67c16239050b5e213972e104f',
    tokenDecimals: 4,
    exchangeAddress: '0x075da3a1483aeadb9ef0f8effe198f15c9414ba3'
  },
  {
    symbol: 'BWS',
    name: 'Bretton Woods system-2.0',
    tokenAddress: '0x55a576e960296d3a327dd0840780625ed662d3a4',
    tokenDecimals: 12,
    exchangeAddress: '0x5fd784d4dcaf59bbc9fd805d45fb8c071342ee8a'
  },
  {
    symbol: 'SHUF',
    name: 'Shuffle.Monster V3',
    tokenAddress: '0x3a9fff453d50d4ac52a6890647b823379ba36b9e',
    tokenDecimals: 18,
    exchangeAddress: '0x536956fab86774fb55cfaacf496bc25e4d2b435c'
  },
  {
    symbol: 'CRUDE',
    name: 'Oil Coin',
    tokenAddress: '0x9622e1b0ac29525441b02d192f20e9bafb1a16b7',
    tokenDecimals: 1,
    exchangeAddress: '0x0a48ebbfed6148f4fb5e4ea72e41bbef57a80572'
  },
  {
    symbol: 'Zrex',
    name: 'Izurex',
    tokenAddress: '0x79fc707552caaadf1e6dec7939af9c41d9ac2bee',
    tokenDecimals: 18,
    exchangeAddress: '0xe79deb0eae29738ff00419edc6310170540cc8e7'
  },
  {
    symbol: 'DTX',
    name: 'Divine Time Coin',
    tokenAddress: '0xf3d0c560a707f088fc15dcf4c30742817929102a',
    tokenDecimals: 1,
    exchangeAddress: '0x21e6980e3b60c73cdbaa614aa28f800581c58f40'
  },
  {
    symbol: 'ZREX',
    name: 'Izurex',
    tokenAddress: '0x0a6b2931a74a2fd058d160dc1d677f401696ca8c',
    tokenDecimals: 18,
    exchangeAddress: '0xc84c0749b7c274e1173fe62b60b503a81eada89f'
  },
  {
    symbol: 'EKIG',
    name: 'ETHERKING',
    tokenAddress: '0x30859d6387cb28e68756be606d6724c7d29da9c3',
    tokenDecimals: 18,
    exchangeAddress: '0x51ec82d8422f4245e539fd035c5aa08986eedb52'
  },
  {
    symbol: 'RENT',
    name: 'Real Estate Networking Token',
    tokenAddress: '0xe17e2c31f480f618be0ed4e46d629862cd05ec64',
    tokenDecimals: 2,
    exchangeAddress: '0xfcfaf1826eded767890c5e8ead104e2302540f94'
  },
  {
    symbol: 'UUN',
    name: 'UUnit Token',
    tokenAddress: '0xce2ac722f8b9349a0bdcbe9ee9f9d877c8cfa7a0',
    tokenDecimals: 18,
    exchangeAddress: '0x04771e1cc3f9df7dd46ead1140dc6527bd833faf'
  },
  {
    symbol: 'GRK',
    name: 'GOLDROCK',
    tokenAddress: '0xeebdec779a6ed3492b59754885016e0259354d06',
    tokenDecimals: 10,
    exchangeAddress: '0x1e0b688d8e1c64c2fb4ca1b42e572c0398caf667'
  },
  {
    symbol: 'RAE',
    name: 'RAE Token',
    tokenAddress: '0xe5a3229ccb22b6484594973a03a3851dcd948756',
    tokenDecimals: 18,
    exchangeAddress: '0x6e2dcfbf8848994b5f600d3c9c113b39da39261a'
  },
  {
    symbol: 'ROBET',
    name: 'RoBET - Truly Decentralized Sportsbetting',
    tokenAddress: '0x2344871f523cbb28a4f60045531184cf1f03ad24',
    tokenDecimals: 18,
    exchangeAddress: '0x8e844feda375404695434d7e3f54bb104f04fdbd'
  },
  {
    symbol: 'ZAR',
    name: 'Digital Rand',
    tokenAddress: '0x26acff19e3adf65e920fd7c33a6b92cda9a50460',
    tokenDecimals: 18,
    exchangeAddress: '0x6f8b289090b5d5fdc4b7f6277f1c60fb5d6a5ff5'
  },
  {
    symbol: 'BURNT',
    name: 'BURNT',
    tokenAddress: '0x33e1089b4b0a456488cfb0a445d090907b5d3e7d',
    tokenDecimals: 0,
    exchangeAddress: '0xfbfcfefea9ba5516281b1d5e792ab30bb933315d'
  },
  {
    symbol: 'BCP',
    name: 'bitcoinplatinums',
    tokenAddress: '0xd26fb114401ec86887cd09f62eccd95fcf20b571',
    tokenDecimals: 8,
    exchangeAddress: '0xe90f5bb01fd32ad53229141bfad9b8902cf0d405'
  },
  {
    symbol: 'HAX',
    name: 'The hacker token',
    tokenAddress: '0xc0be5d2217d85963d391a3f556ff6aba3f53ee7f',
    tokenDecimals: 18,
    exchangeAddress: '0x097c17577cf8f63c6574e7f0d151aa0b9ad59101'
  },
  {
    symbol: 'KXM',
    name: 'KXM Token',
    tokenAddress: '0x63518fa947a0b9c61fc69369015c68630fda910e',
    tokenDecimals: 18,
    exchangeAddress: '0xe722d4d6120956956621a2d5c32eb65d876fa7d3'
  },
  {
    symbol: 'VGW',
    name: 'VegaWallet',
    tokenAddress: '0x94236591125e935f5ac128bb3d5062944c24958c',
    tokenDecimals: 5,
    exchangeAddress: '0xed3207570f377fca5ea5b1fffd771741faf15a9c'
  },
  {
    symbol: 'CTXC',
    name: 'Cortex Coin',
    tokenAddress: '0xea11755ae41d889ceec39a63e6ff75a02bc1c00d',
    tokenDecimals: 18,
    exchangeAddress: '0x9e371ce33547b8ea706c6155bcd834c1e50e0759'
  },
  {
    symbol: 'SPC',
    name: 'SpaceChain',
    tokenAddress: '0x8069080a922834460c3a092fb2c1510224dc066b',
    tokenDecimals: 18,
    exchangeAddress: '0x204e3d643adc1365f569f6cec2e01b89f01a6274'
  },
  {
    symbol: 'MORE',
    name: 'MORE',
    tokenAddress: '0x305de070488c8469dfac957226c9c900c4bfba22',
    tokenDecimals: 8,
    exchangeAddress: '0x36f907deda772aef8f937ae2394a6a5936ed9c27'
  },
  {
    symbol: 'HDC',
    name: 'Hydrolic Token',
    tokenAddress: '0x7b551d679606ee11862b0e9b2d354b53951fda93',
    tokenDecimals: 18,
    exchangeAddress: '0x5d1761173e7244ebb41f44b264fbf9a559e9a9fb'
  },
  {
    symbol: 'TIG',
    name: 'Tigereum',
    tokenAddress: '0xeee2d00eb7deb8dd6924187f5aa3496b7d06e62a',
    tokenDecimals: 18,
    exchangeAddress: '0xae0886efdb596dd887ced05f13405f2a1af0c2f7'
  },
  {
    symbol: 'LYCI',
    name: 'LyCI service token',
    tokenAddress: '0xd2ba769293295ffb96cebae56396fc77eca2678d',
    tokenDecimals: 18,
    exchangeAddress: '0x707bed7cabb5d1c30c3bebc5d2a26c8624e8b2dd'
  },
  {
    symbol: 'LYCI',
    name: 'LyCI service token',
    tokenAddress: '0x9794091c4161ae66aa775af0781379d1823016cf',
    tokenDecimals: 18,
    exchangeAddress: '0xa1eafa2df1e86b8dfd4b3079dbbd399ed18c7768'
  },
  {
    symbol: 'TOKN',
    name: 'ToknTrade',
    tokenAddress: '0xff59c6a13b272db7b278f04e5300e53b46faad78',
    tokenDecimals: 18,
    exchangeAddress: '0x7b451174265e28d0dec1a81e3c9b2d3175c02d62'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0xe1b7aec3639068b474bfbcb916580fc28a20717b',
    tokenDecimals: 18,
    exchangeAddress: '0xe0153f7bd65dd638f66a4d476bfb1d15aed72cbb'
  },
  {
    symbol: 'ABYSS',
    name: 'ABYSS',
    tokenAddress: '0x0e8d6b471e332f140e7d9dbb99e5e3822f728da6',
    tokenDecimals: 18,
    exchangeAddress: '0xcb780c95fbb295785f93c5266b9ec393aaf8fb41'
  },
  {
    symbol: 'iDAI',
    name: 'bZx DAI iToken',
    tokenAddress: '0x14094949152eddbfcd073717200da82fed8dc960',
    tokenDecimals: 18,
    exchangeAddress: '0x81eed7f1ecbd7fa9978fcc7584296fb0c215dc5c'
  },
  {
    symbol: 'PHTTX',
    name: 'PHTTOKENX',
    tokenAddress: '0x8a64c0bd7146710aa5c2773365bb620faf11bed4',
    tokenDecimals: 18,
    exchangeAddress: '0x9e205124a2041bb9762cf9e6659f785fd956233a'
  },
  {
    symbol: 'AMA',
    name: 'ADAMASCOIN',
    tokenAddress: '0x13a863e9bc99b926ea8e153513b85695ddcf9826',
    tokenDecimals: 18,
    exchangeAddress: '0x8913b00b0142f48780cefa1e770ffae4a4796f1e'
  },
  {
    symbol: 'SIG',
    name: 'Signals',
    tokenAddress: '0x6888a16ea9792c15a4dcf2f6c623d055c8ede792',
    tokenDecimals: 18,
    exchangeAddress: '0x6519bf6ee473d70813e3bca9ab1f5931febefaf1'
  },
  {
    symbol: 'OMT',
    name: 'OgroMagicToken',
    tokenAddress: '0x54e529f3673eb585c1690880186eac3c4dd30b09',
    tokenDecimals: 18,
    exchangeAddress: '0x049277174359d1e93e475484b8e6bdd428414ad7'
  },
  {
    symbol: 'BZT',
    name: 'BIZATCOIN',
    tokenAddress: '0x6ea40d8c8f275c274461bb97e7dc4535f77de6a0',
    tokenDecimals: 18,
    exchangeAddress: '0x0d146302acf3276bc1ca7ca6b804dc029d5eb363'
  },
  {
    symbol: 'CDY',
    name: 'COINDAYRA',
    tokenAddress: '0xac3c27fb6ab4e5af604f8f3b20b0a0c827c96ba9',
    tokenDecimals: 18,
    exchangeAddress: '0xc0fe0278cf6cc07cc0cc8fe458c07cb85da6b7ac'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0xc0fe0278cf6cc07cc0cc8fe458c07cb85da6b7ac',
    tokenDecimals: 18,
    exchangeAddress: '0x874d75f7e86aae4f79f450668fb022486ca5ab40'
  },
  {
    symbol: 'KWT',
    name: 'KWT COIN',
    tokenAddress: '0x0500461af1eb8078203bae4886652dce18e7ec20',
    tokenDecimals: 18,
    exchangeAddress: '0xc5ea58a9632e789f1711e624460dd46c622e011d'
  },
  {
    symbol: 'SOUL',
    name: 'CryptoSoul',
    tokenAddress: '0xbb1f24c0c1554b9990222f036b0aad6ee4caec29',
    tokenDecimals: 18,
    exchangeAddress: '0x776f94ae301cf8e3e5085267f1f5a3123007ed9f'
  },
  {
    symbol: 'REV',
    name: 'REVA',
    tokenAddress: '0xd60314496bdd92629dacfb50cc1f6c6c18d98b41',
    tokenDecimals: 18,
    exchangeAddress: '0x4bb0425e1d665da681209933e1a330137af99350'
  },
  {
    symbol: 'STL',
    name: 'Stablecoinswap',
    tokenAddress: '0xc1ad68c43508dd5addb8d0ac0927dbe752d149d6',
    tokenDecimals: 18,
    exchangeAddress: '0xbca710302dcf84098ddae080133a8ff42e5c2379'
  },
  {
    symbol: 'NET',
    name: 'INTERNET',
    tokenAddress: '0x0f0708e479fcdef61ac94dbf015994e54a77d737',
    tokenDecimals: 18,
    exchangeAddress: '0xe23e7208ca2e8691e648456501d4a211e41edadd'
  },
  {
    symbol: 'GCU',
    name: 'Global Currency Unit',
    tokenAddress: '0xa4ec83c8907888d006a37debf755ee39766f38ae',
    tokenDecimals: 18,
    exchangeAddress: '0xac854712ef2baf74dd4afcedb9d5cb87cb4ef93a'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x4bb0425e1d665da681209933e1a330137af99350',
    tokenDecimals: 18,
    exchangeAddress: '0xabd285a1c6d0d7f6431d005b62e85897c3ca342c'
  },
  {
    symbol: 'iETH',
    name: 'iEthereum',
    tokenAddress: '0x859a9c0b44cb7066d956a958b0b82e54c9e44b4b',
    tokenDecimals: 8,
    exchangeAddress: '0x03cbebb8ce17a0b706e9117c8add82412879ee5c'
  },
  {
    symbol: 'VLDY',
    name: 'Validity',
    tokenAddress: '0x904da022abcf44eba68d4255914141298a7f7307',
    tokenDecimals: 18,
    exchangeAddress: '0xd01590bf566d070d4ce04743705e835f81ff77ca'
  },
  {
    symbol: 'Seppuku!',
    name: 'Seppuku Token',
    tokenAddress: '0xf49c17470ecc377a59de71eab8dcb5e78b5cb670',
    tokenDecimals: 18,
    exchangeAddress: '0x2fa6f6f6534686ef89ad0d0f2a9d26f38c146198'
  },
  {
    symbol: 'FAM',
    name: 'Fame',
    tokenAddress: '0x190e569be071f40c704e15825f285481cb74b6cc',
    tokenDecimals: 12,
    exchangeAddress: '0x117109ad2bef4cfaf50d3fb952edf8f6836d9303'
  },
  {
    symbol: 'FOR',
    name: 'The Force Token',
    tokenAddress: '0x1fcdce58959f536621d76f5b7ffb955baa5a672f',
    tokenDecimals: 18,
    exchangeAddress: '0x6e21d0004be9c4f14dc0745f20c7c66edfbfd533'
  },
  {
    symbol: 'RGF',
    name: 'Royal gulf',
    tokenAddress: '0x951e9d19cadcd6d15e64a2eaa9b3e3d4f460c022',
    tokenDecimals: 18,
    exchangeAddress: '0xfea006c544e23d299b69614a5a66934fef173e9c'
  },
  {
    symbol: 'DNT',
    name: 'DANAT',
    tokenAddress: '0x2bb6e4609d65b8e07f2c9d41d2f12f2fba1960d9',
    tokenDecimals: 18,
    exchangeAddress: '0x1158b9c5c2477307a559913e34edafec8ea0a84f'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x0d146302acf3276bc1ca7ca6b804dc029d5eb363',
    tokenDecimals: 18,
    exchangeAddress: '0x88c541370132fdb2a7b61d6baf2095749f82bd7a'
  },
  {
    symbol: 'COBR',
    name: 'CoinBroker',
    tokenAddress: '0x933dfc5622792b41245ab8313416caf0ba885ae7',
    tokenDecimals: 18,
    exchangeAddress: '0x09002d1a3be2f5a80d988fd522c2bf75eb9f69b6'
  },
  {
    symbol: 'FCI',
    name: 'FUTUREGOLDCOIN',
    tokenAddress: '0x050cbff7bff0432b6096dd15cd9499913ddf8e23',
    tokenDecimals: 18,
    exchangeAddress: '0x3bedaaa83aa55431901e8711c45ca2369540414a'
  },
  {
    symbol: 'CLC',
    name: 'CALYCOIN',
    tokenAddress: '0x7b8343ce76ce8e5792599faf7cf60351af9a6de3',
    tokenDecimals: 16,
    exchangeAddress: '0x247385eddae6d3388b6cbbdad265ccd3db51c995'
  },
  {
    symbol: 'HAT',
    name: 'HalfToken',
    tokenAddress: '0x097a0820574a8dfb8035c15d829dc25187fc4129',
    tokenDecimals: 18,
    exchangeAddress: '0xfcab592fdbc18d9b8c823a80fe5d931818156345'
  },
  {
    symbol: 'BNC',
    name: 'Bionic',
    tokenAddress: '0xef51c9377feb29856e61625caf9390bd0b67ea18',
    tokenDecimals: 8,
    exchangeAddress: '0xd9aa4f75373127a2f6ff99cb0d1ab54ce43f1ba8'
  },
  {
    symbol: 'FCQ',
    name: 'Fotrem Capital Token',
    tokenAddress: '0x6710cee627fa3a988200ffd5687cc1c814cef0f6',
    tokenDecimals: 0,
    exchangeAddress: '0x115c89f1fa3c5bb9a3bc1058907c31429d63514e'
  },
  {
    symbol: 'scom',
    name: 'Supercompute',
    tokenAddress: '0x44cf7dcfd023875d75267ba85f14366390daa3e1',
    tokenDecimals: 18,
    exchangeAddress: '0x325c752e7ebcdbbca66ee6690d522f25091d48cb'
  },
  {
    symbol: 'GRT',
    name: 'Genesis Raffle Token',
    tokenAddress: '0x0c8cdc16973e88fab31dd0fcb844ddf0e1056de2',
    tokenDecimals: 0,
    exchangeAddress: '0xa58bd3986d1e84a3a0f2d66cac2b54f17fecb786'
  },
  {
    symbol: 'COOS',
    name: 'COOS',
    tokenAddress: '0x24ebfc20bb2e1daadd98d28341ab37d0c154f4cb',
    tokenDecimals: 18,
    exchangeAddress: '0x384e75ce70ccf0890fb28a4f87ca99450ebab4fe'
  },
  {
    symbol: 'SAKU',
    name: 'SakuraDrops',
    tokenAddress: '0xe202e49088e8391ba4a54914938ca3c8391077bd',
    tokenDecimals: 0,
    exchangeAddress: '0xb57c9736234b3210cf848b9c0f39774ba0bd35a3'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0xdfcf6c4c82d25597927d06e487053398cfb4a784',
    tokenDecimals: 18,
    exchangeAddress: '0x7fe85b8daaf1f253b137b317fc50aa5ee847794d'
  },
  {
    symbol: 'WLK',
    name: 'WOLK TOKEN',
    tokenAddress: '0xf6b55acbbc49f4524aa48d19281a9a77c54de10f',
    tokenDecimals: 18,
    exchangeAddress: '0x8dca75db53bbe851a634677224278d532042c984'
  },
  {
    symbol: 'ETBS',
    name: 'EthBits ETBS Token',
    tokenAddress: '0x1b9743f556d65e757c4c650b4555baf354cb8bd3',
    tokenDecimals: 12,
    exchangeAddress: '0xe11a8488ee9d697c5426200e5bf39e9beb4c33d0'
  },
  {
    symbol: 'FLS',
    name: 'FLOS',
    tokenAddress: '0x124a7f6d9855f595ab006258f1d5cd5880637b86',
    tokenDecimals: 18,
    exchangeAddress: '0x82b03f9a6444ce8be14a92073fc08fd34601ff99'
  },
  {
    symbol: 'PANT',
    name: 'Panvala pan (test)',
    tokenAddress: '0x10a429b088e1fa159df832097a3fbdb778ba41b7',
    tokenDecimals: 18,
    exchangeAddress: '0xdfa1e41081b84396ef22b4c3c4b39159983cdf32'
  },
  {
    symbol: 'CARAT',
    name: 'Jewel Coin',
    tokenAddress: '0x207b893467904d076add0a44f94ac8c8d92d2e0c',
    tokenDecimals: 4,
    exchangeAddress: '0x8ae89ce25e1b026d6ac880dfeafd90ea9e06fa3e'
  },
  {
    symbol: 'DAV',
    name: 'DAV Token',
    tokenAddress: '0xd82df0abd3f51425eb15ef7580fda55727875f14',
    tokenDecimals: 18,
    exchangeAddress: '0xa89bc4402b94f3569c338fd83cd3a846761b7aea'
  },
  {
    symbol: 'FLS',
    name: 'FILS',
    tokenAddress: '0x7695fe3fc4177bf9591ca8f27a03a54797690347',
    tokenDecimals: 18,
    exchangeAddress: '0xd5d609f68ef9d5be6543945d30985512c0b418ea'
  },
  {
    symbol: 'BLZMT',
    name: 'BlazingMoonToken',
    tokenAddress: '0xf6ff4a4896e98a53e74e24c15f2a51a6abb5964a',
    tokenDecimals: 2,
    exchangeAddress: '0x5f2ce93aa9a3417ae18d882e95f96c4d4153d2b5'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x82b03f9a6444ce8be14a92073fc08fd34601ff99',
    tokenDecimals: 18,
    exchangeAddress: '0x599e9e38cb0d64e6da4f6c59799bfd872683a75f'
  },
  {
    symbol: 'BKN',
    name: 'Blockstate STO Token',
    tokenAddress: '0xbee6edf5fa7e862ed2ea9b9f42cb0849184aae85',
    tokenDecimals: 0,
    exchangeAddress: '0x2ebba2d935b1e1dc996d8f5b463c0a7628fe5880'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0xd5d609f68ef9d5be6543945d30985512c0b418ea',
    tokenDecimals: 18,
    exchangeAddress: '0x7ae3a159f7a7c75b7aee8c4c350d5610c270814f'
  },
  {
    symbol: 'TENX',
    name: 'TenX Token',
    tokenAddress: '0x515ba0a2e286af10115284f151cf398688a69170',
    tokenDecimals: 18,
    exchangeAddress: '0xacd8be48b04eb9693128f6070382ee4f3ec39ce4'
  },
  {
    symbol: 'PAN',
    name: 'Panvala pan',
    tokenAddress: '0xd56dac73a4d6766464b38ec6d91eb45ce7457c44',
    tokenDecimals: 18,
    exchangeAddress: '0xf53bbfbff01c50f2d42d542b09637dca97935ff7'
  },
  {
    symbol: 'GAZ',
    name: 'GRADZ',
    tokenAddress: '0x943bd545e019b485514c8474da6032656168fa99',
    tokenDecimals: 18,
    exchangeAddress: '0xc33389c871df5ce7a62b4193063c9f96d43cb23b'
  },
  {
    symbol: 'LOC',
    name: 'LockChain',
    tokenAddress: '0x5e3346444010135322268a4630d2ed5f8d09446c',
    tokenDecimals: 18,
    exchangeAddress: '0x875e249d348db0facd95d6b65d168c60d3ffca3e'
  },
  {
    symbol: 'ALICE',
    name: 'Alice',
    tokenAddress: '0x8aa18921bc476f0a69e6c376e28c34b993e0b106',
    tokenDecimals: 18,
    exchangeAddress: '0xd40494eb60a67f29f19ddceed728599752d41c88'
  },
  {
    symbol: 'STC',
    name: 'Shift Token',
    tokenAddress: '0xef7e0f278b149feab9ba6c98ecebcfc449d47d02',
    tokenDecimals: 8,
    exchangeAddress: '0x533b9a1d0f90354609f0329db0969346459f1691'
  },
  {
    symbol: 'CGC',
    name: 'CGCOINS',
    tokenAddress: '0x2d9765a94ff22e0ca3afc3e3f4b116de2b67582a',
    tokenDecimals: 16,
    exchangeAddress: '0x2cba1cda6e54965d208fd6ffd1fe62d40bcdbb74'
  },
  {
    symbol: 'WNFT',
    name: 'Wrapped NFT',
    tokenAddress: '0x2b3e6bcc143d82a2aab4f7768a42a57007a3f890',
    tokenDecimals: 18,
    exchangeAddress: '0xd14601fc4af6785c5f3fefb6ed1d5ba85fe64ea4'
  },
  {
    symbol: 'WNFT',
    name: 'Wrapped NFT',
    tokenAddress: '0xda108db8739d269ef127b99e5e90a5690a66ae95',
    tokenDecimals: 18,
    exchangeAddress: '0x72fed1883b5a3dd766ed9d2dfe5ecceb91f3edcc'
  },
  {
    symbol: 'WNFT',
    name: 'Wrapped NFT',
    tokenAddress: '0x9456666c316d13e46687b109fddd536835734607',
    tokenDecimals: 18,
    exchangeAddress: '0xb5237256fd1cd366647cfd7e6d028cba77f06bd3'
  },
  {
    symbol: 'WNFT',
    name: 'Wrapped NFT',
    tokenAddress: '0xdde23e00ecf0f4d25a8d73f9558f328bf85a167f',
    tokenDecimals: 18,
    exchangeAddress: '0x41b28aed84990ffc0cdcc96ace6f9ebe03bd5c1e'
  },
  {
    symbol: 'TARIF',
    name: 'TARIFF Coin',
    tokenAddress: '0x2bdd67e35ed0221a7c201863fa3891b619fd9aa3',
    tokenDecimals: 18,
    exchangeAddress: '0xbe4d60422f213bcb57cac22d17c8637ee9a6b970'
  },
  {
    symbol: 'MYM',
    name: 'Moyom',
    tokenAddress: '0xb9892f9a892f3e251fc58b9076c56add528eb8a6',
    tokenDecimals: 18,
    exchangeAddress: '0xa8fb35376907b6d3bf70319975e1aa40f52d68e9'
  },
  {
    symbol: 'ET20',
    name: 'EquityToken',
    tokenAddress: '0x00027d07fd8c14af7e05d335a44aa53e23575691',
    tokenDecimals: 8,
    exchangeAddress: '0xf1ec1c54f6de7d85ad887593bf9f11fe0ece7591'
  },
  {
    symbol: 'MUZK',
    name: 'DIGITRAXX',
    tokenAddress: '0xa94af6eab14d95f8872074c35cbeb7a8f4e1dd7b',
    tokenDecimals: 18,
    exchangeAddress: '0x55169e4e560caf2835d5d3db130aa7e5f1fdf4f6'
  },
  {
    symbol: 'HT',
    name: 'HypeToken',
    tokenAddress: '0x9bf598db8845b3223520f0ba6abe6585f49e2bc5',
    tokenDecimals: 18,
    exchangeAddress: '0x55e51019b831e5d0de4b945abb0dfab1ae8fe7a7'
  },
  {
    symbol: 'SHIT',
    name: 'ShitCoin',
    tokenAddress: '0xaa7fb1c8ce6f18d4fd4aabb61a2193d4d441c54f',
    tokenDecimals: 6,
    exchangeAddress: '0x1a51d113de28ccd5694829045636e6b6b74b4be0'
  },
  {
    symbol: 'B2BX',
    name: 'B2BX',
    tokenAddress: '0x5d51fcced3114a8bb5e90cdd0f9d682bcbcc5393',
    tokenDecimals: 18,
    exchangeAddress: '0x13ec906827b85dbdbaf63cee92c0488def0306fa'
  },
  {
    symbol: 'PASS',
    name: 'Passive Silver',
    tokenAddress: '0xfe75b71b348165f60b5be7f356b42da9b333b2b7',
    tokenDecimals: 18,
    exchangeAddress: '0x5a1cbd3227277fae4f3abd4d091e058de50e6ac4'
  },
  {
    symbol: 'KOH',
    name: 'Kindness of Humanity',
    tokenAddress: '0x8ee6ec1d1d52b16f7ad0b3029a4ed26e3227e4dd',
    tokenDecimals: 8,
    exchangeAddress: '0xc9eab452757f70b3e6f9e39f7b9ca4ac0f3d1bfe'
  },
  {
    symbol: 'CLC',
    name: 'CloverCoin',
    tokenAddress: '0x1a94656a6245379bc0d9c64c402197528edb2bd1',
    tokenDecimals: 18,
    exchangeAddress: '0x339617707ede2bc3e166a56850fb5a1c6a335e5f'
  },
  {
    symbol: 'MCR',
    name: 'Microcoin',
    tokenAddress: '0x702fbba3084eabf8c070ae54e566d0d0532160b3',
    tokenDecimals: 0,
    exchangeAddress: '0xff3573b26f8cd15e311e2f5e095590e19c2410de'
  },
  {
    symbol: 'GLA',
    name: 'Gladius Token',
    tokenAddress: '0x71d01db8d6a2fbea7f8d434599c237980c234e4c',
    tokenDecimals: 8,
    exchangeAddress: '0xabe20dfe88130bdc0dab18b19203980b26833cf6'
  },
  {
    symbol: 'FXM',
    name: 'FXM',
    tokenAddress: '0xe1c4b784dc65b3dca8fe8f47b9a07cb094e7044f',
    tokenDecimals: 0,
    exchangeAddress: '0xb2394c218d2f36ec0a0b81b08952f00d321da4dc'
  },
  {
    symbol: 'VID',
    name: 'VideoCoin',
    tokenAddress: '0x2c9023bbc572ff8dc1228c7858a280046ea8c9e5',
    tokenDecimals: 18,
    exchangeAddress: '0x407721c86befc7243e041ec78c11152f86c4ace5'
  },
  {
    symbol: 'EMPR',
    name: 'empowr',
    tokenAddress: '0xe7d7b37e72510309db27c460378f957b1b04bd5d',
    tokenDecimals: 18,
    exchangeAddress: '0xdd093c0729fd5d347c7dfd4476ed3ee2fbc05f21'
  },
  {
    symbol: 'WNFT',
    name: 'Wrapped NFT',
    tokenAddress: '0x9e8534fd246256abc96b3ff24cd47f76eedcfc6f',
    tokenDecimals: 18,
    exchangeAddress: '0x96171cc50d8acc841b083916e9b9d59cc82c84fe'
  },
  {
    symbol: 'WNFT',
    name: 'Wrapped NFT',
    tokenAddress: '0x843e50d75dcc0bb7f7976bff4c5a865074b9694c',
    tokenDecimals: 18,
    exchangeAddress: '0xef9dfbd0f0ad3e9bbf2c99bf1659c1c38bb0a1e3'
  },
  {
    symbol: 'DCT',
    name: 'Dragon City Token',
    tokenAddress: '0x79c4e3d3cd2f6418cb60a1eb777e281b2c8795e6',
    tokenDecimals: 0,
    exchangeAddress: '0x99a3b55cce2a9ddb236900144f1c3f1162ae920f'
  },
  {
    symbol: 'TCC',
    name: 'Terracoin',
    tokenAddress: '0x6558ebe73d92c4bf58195055a5ecca7ab7aa4dc9',
    tokenDecimals: 2,
    exchangeAddress: '0xddb20b0742798aa3a323f37d017ca5f4d76409b3'
  },
  {
    symbol: 'AKJ',
    name: 'AKJ',
    tokenAddress: '0x5ab2d437ec6d8e52b2191efafd985826a73d97de',
    tokenDecimals: 18,
    exchangeAddress: '0x6a93f04d900ca94e5da9ce93a7f8139dcb6e524b'
  },
  {
    symbol: 'Mook',
    name: 'Moonrakers',
    tokenAddress: '0xe8ca1173f3d101cea72f5b4c85f1d2516aa15f51',
    tokenDecimals: 18,
    exchangeAddress: '0x2559d5c379cef05dfd18e97fefd288738d5d3ae6'
  },
  {
    symbol: 'IDEX',
    name: 'IDEX Token',
    tokenAddress: '0xb705268213d593b8fd88d3fdeff93aff5cbdcfae',
    tokenDecimals: 18,
    exchangeAddress: '0xf81521e83369fd9b661b804ba342993b2bcef430'
  },
  {
    symbol: 'SDT',
    name: 'Stardust',
    tokenAddress: '0x5ad1d541584be30ce5c43ab99a788d6461577be4',
    tokenDecimals: 18,
    exchangeAddress: '0x1452760b159644671b5a1077a61ced9308c0515e'
  },
  {
    symbol: 'FHT',
    name: 'FlameHyre Token',
    tokenAddress: '0xebd01df7e1e56e89a52c5de185377d3a2eef9a2b',
    tokenDecimals: 8,
    exchangeAddress: '0x890c0d32b7597a62d2508e4e261f0ac94a3b9059'
  },
  {
    symbol: 'ASH',
    name: 'Ash',
    tokenAddress: '0x71590d4ed14d9cbacb2cff8abf919ac4d22c5b7b',
    tokenDecimals: 18,
    exchangeAddress: '0x9a9a9b371dc9631b2b325f37ff76fa4dabde4a71'
  },
  {
    symbol: 'ALICE',
    name: 'Alice',
    tokenAddress: '0x33dcd369d697132de252884336225de31fb474b2',
    tokenDecimals: 18,
    exchangeAddress: '0x2677bf8489ae9a75f3c987735848366d513e6a2b'
  },
  {
    symbol: 'CELR',
    name: 'CelerToken',
    tokenAddress: '0x4f9254c83eb525f9fcf346490bbb3ed28a81c667',
    tokenDecimals: 18,
    exchangeAddress: '0x1e3740a030af8c755c888a0ee83ac9e79e09f4f1'
  },
  {
    symbol: 'BURNR',
    name: 'Burn Rebalance',
    tokenAddress: '0xce1a728c0a2dfc8e3e01d769ed5efccdd5230f10',
    tokenDecimals: 18,
    exchangeAddress: '0xfab3dfa4188794cd81a5fdc118b6b5ca874b24ab'
  },
  {
    symbol: 'ETH',
    name: 'Etherum',
    tokenAddress: '0xb3f11b7f046e253756106dc4380c096d39b93ea4',
    tokenDecimals: 18,
    exchangeAddress: '0x4924f67370085addb0e6e25ed19f7193688a46ed'
  },
  {
    symbol: 'EGPC',
    name: 'EGP Coin',
    tokenAddress: '0xbcc9fe1b74b2cc5949b129538b8616aa86ead5e9',
    tokenDecimals: 18,
    exchangeAddress: '0x2e874797cf704717cb5f28c523afe21f2f4e5308'
  },
  {
    symbol: 'FETH',
    name: 'FranzToken',
    tokenAddress: '0xd5a7b652d294869814b205a76b638a128d446db5',
    tokenDecimals: 18,
    exchangeAddress: '0x649bca8de37e8c7e9e8ecdb128da0f7fa6b1e296'
  },
  {
    symbol: 'SUX',
    name: 'SudEX',
    tokenAddress: '0x100005bc082d49eefffdc720864984bd7f3f7e5e',
    tokenDecimals: 18,
    exchangeAddress: '0xa78348775ba327302a8f41861bbe3c7bac6d8586'
  },
  {
    symbol: 'PRC',
    name: 'PRINCOIN',
    tokenAddress: '0xb74c5b590398ac63cc5888f7dd0c0b1eb4baabcd',
    tokenDecimals: 8,
    exchangeAddress: '0x0d093569a7bd3449a12d4904515e74938f8ca73c'
  },
  {
    symbol: 'BTB',
    name: 'BitBall',
    tokenAddress: '0x06e0feb0d74106c7ada8497754074d222ec6bcdf',
    tokenDecimals: 18,
    exchangeAddress: '0xd203aa2cbd71f608dfd86f83c742666c14c74615'
  },
  {
    symbol: 'GOOGT',
    name: 'Googlier Tellurium',
    tokenAddress: '0x0e5e5c1b981a20be2bfade0b114e5fe7ba6eff7f',
    tokenDecimals: 18,
    exchangeAddress: '0x60b3fc050d5eae72824624cf410845da71aa4f47'
  },
  {
    symbol: 'NRA',
    name: 'Noura Capital',
    tokenAddress: '0xdae0bd9371b2f14077a0461c92b0e8ade34efa84',
    tokenDecimals: 18,
    exchangeAddress: '0x4c6e26bedba9171639adfd9ffaddee5170625c1c'
  },
  {
    symbol: 'AMGO',
    name: 'AMGO - Arena Match Gold',
    tokenAddress: '0xf1ac7a375429719de0dde33528e2639b9a206eba',
    tokenDecimals: 18,
    exchangeAddress: '0x516075411008a5cc174dd68f5c0d2112b7aa04d7'
  },
  {
    symbol: 'SCOTT',
    name: 'Stop SCOTT',
    tokenAddress: '0xac1d236b6b92c69ad77bab61db605a09d9d8ec40',
    tokenDecimals: 18,
    exchangeAddress: '0x9a5826172f6b2b3fcdfc752f3a4fe835a19fc05b'
  },
  {
    symbol: 'BXV',
    name: 'BlockXV',
    tokenAddress: '0xed35a93b1d52d66d6f9e840d85412730ee206cbc',
    tokenDecimals: 18,
    exchangeAddress: '0x9a4a452aafbe4152fbc3fcbc489525f3c5c2bff4'
  },
  {
    symbol: 'RAYA',
    name: 'RAYA',
    tokenAddress: '0xe0337d875165e21092d0f382e5cf4c1ccaba6809',
    tokenDecimals: 18,
    exchangeAddress: '0xa5420452492ac4d543a6986e356f2288ab663211'
  },
  {
    symbol: 'HYST',
    name: 'Help YourSelf Token',
    tokenAddress: '0x6dc0a2a91d15461e8a0dfc64a387a7c4637b3fdb',
    tokenDecimals: 18,
    exchangeAddress: '0x929eb6662fcbe74de09b6858d3e29f75509da916'
  },
  {
    symbol: 'FRX',
    name: 'FireX',
    tokenAddress: '0x0d4870dfca0101856f5cef969a1df2757ae0a280',
    tokenDecimals: 2,
    exchangeAddress: '0xe477f5d507e6e6ce008c03dcaae2f167ee715b49'
  },
  {
    symbol: 'ZUC',
    name: 'Zeuxcoin',
    tokenAddress: '0x5b7e386b636abff1e83fc7101c33282acba8e1a5',
    tokenDecimals: 18,
    exchangeAddress: '0x23467d55447b5937fe204912aad1280e83286a83'
  },
  {
    symbol: 'RFR',
    name: 'Refereum',
    tokenAddress: '0xd0929d411954c47438dc1d871dd6081f5c5e149c',
    tokenDecimals: 4,
    exchangeAddress: '0xc3ecb5727f2a566b98611368232b1dce3ba9086f'
  },
  {
    symbol: 'AUTO',
    name: 'Luxury Auto Coin',
    tokenAddress: '0x0ed55f31ee2f9875a738c6496842b0e6519d7833',
    tokenDecimals: 4,
    exchangeAddress: '0xe32dadfeada597947b64ee0dc9eecd5c77d8bd9c'
  },
  {
    symbol: 'CRB',
    name: 'CrackB',
    tokenAddress: '0xf2b06cf6391e95b82ec7f5aece3eefa76c291fa9',
    tokenDecimals: 18,
    exchangeAddress: '0xb1f64f8fa64a792620cabac45397f9bb21822f6e'
  },
  {
    symbol: 'STH',
    name: 'Snatch',
    tokenAddress: '0x572e2bf037bf0eff8718dc37aec53c0517b4e5cf',
    tokenDecimals: 18,
    exchangeAddress: '0xfeba66b33d6854df0caefecd89b3c15b2da058b9'
  },
  {
    symbol: 'RBPC',
    name: 'Relax Buddy Token',
    tokenAddress: '0x050508637d2878755cb29b2be4320ac24d5ce4ff',
    tokenDecimals: 18,
    exchangeAddress: '0x7aac96b23b2884cfe8045e7d70b0420b8319f965'
  },
  {
    symbol: 'A',
    name: 'Alpha Coin',
    tokenAddress: '0xb13ece3a08057ba0ca0671ebf8f78adb462d8214',
    tokenDecimals: 12,
    exchangeAddress: '0x584b248c131f56c5e0e6a59ff7c2d21cfac20e35'
  },
  {
    symbol: 'Fab',
    name: 'Fabcoins',
    tokenAddress: '0xdcc3e7cd353dd71a1ca77d423f194995a805d41c',
    tokenDecimals: 0,
    exchangeAddress: '0xd169725b804d14878679f50b04ae7aa11e5fd1a7'
  },
  {
    symbol: 'BIL',
    name: 'BIL Coin',
    tokenAddress: '0x34833001d99851b85729606f241ca872d1a1e461',
    tokenDecimals: 2,
    exchangeAddress: '0xca0a8af352bd6380dc3872cbc0eddf75420a2b59'
  },
  {
    symbol: 'WBNB',
    name: 'Wrapped BNB',
    tokenAddress: '0x24dc3617963e0422c826bc7705b378ab43da517a',
    tokenDecimals: 18,
    exchangeAddress: '0xb75d470d939d052f25cdd0abf4ba680ebad75c45'
  },
  {
    symbol: 'LEX',
    name: 'Lexington',
    tokenAddress: '0x8d063ff3a621718a31892ca7de7704d34e988f0c',
    tokenDecimals: 18,
    exchangeAddress: '0x046a77358dd6c29512486d7ec5604f7fcbc36d3e'
  },
  {
    symbol: 'HBT',
    name: 'Hubiits',
    tokenAddress: '0xdd6c68bb32462e01705011a4e2ad1a60740f217f',
    tokenDecimals: 15,
    exchangeAddress: '0xb6ee174accf61bc9aa570894daed5d71c2473fb9'
  },
  {
    symbol: 'IOST',
    name: 'IOSToken',
    tokenAddress: '0xfa1a856cfa3409cfa145fa4e20eb270df3eb21ab',
    tokenDecimals: 18,
    exchangeAddress: '0x16e7036c777bbb1316b340d8123bc6c2e3b193ec'
  },
  {
    symbol: 'CCS',
    name: 'Crypto Credit Swap',
    tokenAddress: '0x049b8a66fe1bf8be509d5c454c83547c4f0c1190',
    tokenDecimals: 18,
    exchangeAddress: '0x356ce7b8b450142af811908a372e3c40801f69bc'
  },
  {
    symbol: 'XSC',
    name: 'CrowdstartCoin',
    tokenAddress: '0x0f513ffb4926ff82d7f60a05069047aca295c413',
    tokenDecimals: 18,
    exchangeAddress: '0x74128a6ab3e22d881661f25a50d48ce4922213e2'
  },
  {
    symbol: 'HT',
    name: 'HuobiToken',
    tokenAddress: '0x6f259637dcd74c767781e37bc6133cd6a68aa161',
    tokenDecimals: 18,
    exchangeAddress: '0x60058dd4cbab1870d2b8741fab24725a2f110054'
  },
  {
    symbol: 'VIU',
    name: 'Viuly Token',
    tokenAddress: '0x464baddce9bd32581a7d59d9bb8350c7c7764668',
    tokenDecimals: 18,
    exchangeAddress: '0x7fd3b59b85eab3bc61fc552fddce10f1e8485ba1'
  },
  {
    symbol: 'TRO',
    name: 'TROLL',
    tokenAddress: '0x692093032661c2ae1dfa152610784ce8054fc842',
    tokenDecimals: 18,
    exchangeAddress: '0x1ca16f7ec104007fdde1d396742eb9ea5f64d035'
  },
  {
    symbol: 'XGP',
    name: 'AIGO Protocol',
    tokenAddress: '0x37f4ade226a15858d9eee4bb4cbc1e70ccaf290d',
    tokenDecimals: 18,
    exchangeAddress: '0x42b666e126f0339b8d7a11398f7c8560db3e4bcc'
  },
  {
    symbol: 'POD',
    name: 'Podcash',
    tokenAddress: '0x8c971c1954e1ea0e78e1dd9e4c38be68dd66be10',
    tokenDecimals: 18,
    exchangeAddress: '0xe128e66f87390d781f8834fc455fe9f2491657ee'
  },
  {
    symbol: 'FUSE',
    name: 'Fuse Token',
    tokenAddress: '0x970b9bb2c0444f5e81e9d0efb84c8ccdcdcaf84d',
    tokenDecimals: 18,
    exchangeAddress: '0xf9a204774ac595216c3c4e4249b7624e34ee52d5'
  },
  {
    symbol: 'STG',
    name: 'Storag Coin',
    tokenAddress: '0x89d3563724c6f0c1a18ddf6427ec43a35ed22e3f',
    tokenDecimals: 8,
    exchangeAddress: '0x3a127c50dc472abc627a3ca59ee8cdc4596e6465'
  },
  {
    symbol: 'CBI',
    name: 'Coin Bank Int',
    tokenAddress: '0x43e5f59247b235449e16ec84c46ba43991ef6093',
    tokenDecimals: 18,
    exchangeAddress: '0xe316a7fe8bf258e48040e55ab7b49950e123e8e7'
  },
  {
    symbol: 'DLO',
    name: 'Delio',
    tokenAddress: '0x8a6284155d31a62c531f70daacff3ada333f9019',
    tokenDecimals: 18,
    exchangeAddress: '0xf145168537885ae5340cf7ce3231782da5b14af1'
  },
  {
    symbol: 'DMSK',
    name: 'Damski',
    tokenAddress: '0xbffd431ba4adac00673c87577a55c192a03821d5',
    tokenDecimals: 2,
    exchangeAddress: '0xc5c6d308863a662b7669dabf71c8ff6dae1f156d'
  },
  {
    symbol: 'TFC',
    name: 'The First Coin',
    tokenAddress: '0x210c203e8f05be72b69624fe08b9a5530d51ee36',
    tokenDecimals: 18,
    exchangeAddress: '0x517c3aafb5a7700dae5f00da65f31046ce964f79'
  },
  {
    symbol: 'URING',
    name: 'Uniring',
    tokenAddress: '0x21647310e9d1ed929eb9ab626d34e4df3b74a0a1',
    tokenDecimals: 0,
    exchangeAddress: '0xad1f9f7a1ba2d594ae6a8577730b9229be5d07d9'
  },
  {
    symbol: 'TCAD',
    name: 'TrueCAD',
    tokenAddress: '0x00000100f2a2bd000715001920eb70d229700085',
    tokenDecimals: 18,
    exchangeAddress: '0xf996d7d9bacb9217ca64bbce1b1cd72e0e886be6'
  },
  {
    symbol: 'DOR',
    name: 'DoradoToken',
    tokenAddress: '0x906b3f8b7845840188eab53c3f5ad348a787752f',
    tokenDecimals: 15,
    exchangeAddress: '0x3eaf588988212a76275d6de06705583426b7f53e'
  },
  {
    symbol: 'DEFI',
    name: 'DEFI-ORG-TUTORIAL',
    tokenAddress: '0x1ba4dd5306528a92906193b070980ccb2322a2e4',
    tokenDecimals: 18,
    exchangeAddress: '0xc410d34951561851536b3f97b47ef4b054dd9a59'
  },
  {
    symbol: 'STZ',
    name: 'STZ',
    tokenAddress: '0xec71a153b29da4821ff1d58eb9c72fff75a1fc48',
    tokenDecimals: 18,
    exchangeAddress: '0x05bb3b925d6f5758cab8f6e7014f01e970fc647a'
  },
  {
    symbol: 'CHL',
    name: 'ChelleCoin',
    tokenAddress: '0x8b8e088c7ad40d70d0a8183a399c8f9c24b5c8d8',
    tokenDecimals: 18,
    exchangeAddress: '0x3a9effa375ba10d579d9fb6a87cd18cef370a155'
  },
  {
    symbol: 'eCell',
    name: 'Ethereum Cell Network',
    tokenAddress: '0x9b62ec1453cea5dde760aaf662048ca6eeb66e7f',
    tokenDecimals: 2,
    exchangeAddress: '0xe6741e67f4ba3e8d74a3ca286a7803482bf37e42'
  },
  {
    symbol: 'SURF',
    name: 'Surf Coin',
    tokenAddress: '0x93f54091e83614ed553b31833cf24dbcd0952428',
    tokenDecimals: 18,
    exchangeAddress: '0xfaac9e66c66fc08a1d27d0b0b375fd44d4c669dc'
  },
  {
    symbol: ' TRIS',
    name: 'TRISKAIDEKAPHOBIA',
    tokenAddress: '0x73aa6b881552451eeba7533a1a58b297ed549f3c',
    tokenDecimals: 18,
    exchangeAddress: '0xe5bb9c609c45ff8d04af1680b16b13227e8f71b0'
  },
  {
    symbol: 'AZ',
    name: 'Azbit',
    tokenAddress: '0x77fe30b2cf39245267c0a5084b66a560f1cf9e1f',
    tokenDecimals: 18,
    exchangeAddress: '0x29fe25a3872d859cb184ffd65f7259cef85de0fb'
  },
  {
    symbol: 'MESH',
    name: 'BlockMesh',
    tokenAddress: '0xf03045a4c8077e38f3b8e2ed33b8aee69edf869f',
    tokenDecimals: 18,
    exchangeAddress: '0x7c5d823284f550ced7ae7093e7325631a69c29da'
  },
  {
    symbol: 'CHZ',
    name: 'chiliZ',
    tokenAddress: '0x3506424f91fd33084466f402d5d97f05f8e3b4af',
    tokenDecimals: 18,
    exchangeAddress: '0x00901e311c0f298beaf3445ff8072b8d6c70a205'
  },
  {
    symbol: 'REALTOKEN-9943-MARLOWE-ST-DETROIT-MI',
    name: 'RealToken 9943 Marlowe Street Detroit MI',
    tokenAddress: '0xe5f7ef61443fc36ae040650aa585b0395aef77c8',
    tokenDecimals: 18,
    exchangeAddress: '0x474f8f008f07cd42200bc6dabc1db2206827ee6e'
  },
  {
    symbol: 'ABT',
    name: 'ArcBlock',
    tokenAddress: '0xb98d4c97425d9908e66e53a6fdf673acca0be986',
    tokenDecimals: 18,
    exchangeAddress: '0x450805ef9cbdab907d8b519006010b093da7f8e7'
  },
  {
    symbol: 'XIO',
    name: 'BOMBX',
    tokenAddress: '0x3205df88cf95b5a702f2b6a1cc10e2075f54387c',
    tokenDecimals: 8,
    exchangeAddress: '0x6b6fd86a4797e2fbce26eb6f5b911b72f1d22f06'
  },
  {
    symbol: 'ALIVE',
    name: 'PROOF OF LIFE',
    tokenAddress: '0x1e0c1f1ef51bfc6f9c7e1cca86574c7fc3d3a050',
    tokenDecimals: 18,
    exchangeAddress: '0xbb7f6655c51e7459a2c46986342f6a20039d2ba3'
  },
  {
    symbol: 'KKC',
    name: 'KRYPTOKLUB.com',
    tokenAddress: '0x995876d31451b987d565b42d698939ad8026d72a',
    tokenDecimals: 18,
    exchangeAddress: '0x7d1788fc6b977a56d71e325dc4cf5a4f56d6e815'
  },
  {
    symbol: 'KKO',
    name: 'KRYPTO KLUB OG',
    tokenAddress: '0x1ad16a873dab4be77c26494d659643c87b5e0986',
    tokenDecimals: 18,
    exchangeAddress: '0xa224599e1c928d5b87fc7f4f318cffde422c7a64'
  },
  {
    symbol: 'CPE',
    name: 'Clustersphere',
    tokenAddress: '0x28441ed6ebaad179a2c10a0a5d46bf3f3ace17de',
    tokenDecimals: 18,
    exchangeAddress: '0x8744f3d10563440a321b0b1daff05f7e0f846f48'
  },
  {
    symbol: 'PDC',
    name: 'PLATINUM DIGITAL CORPORATED',
    tokenAddress: '0xaf0336137c2f68e881cea7d95059e6b2ddcf7e57',
    tokenDecimals: 18,
    exchangeAddress: '0xc16ff20c1640ca460ec8418c6f2a8ed96f8acd8c'
  },
  {
    symbol: 'XYO',
    name: 'XY Oracle',
    tokenAddress: '0x55296f69f40ea6d20e478533c15a6b08b654e758',
    tokenDecimals: 18,
    exchangeAddress: '0xae51c1381ae5be0d55231b2c24106fcffd9791a6'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x21e6980e3b60c73cdbaa614aa28f800581c58f40',
    tokenDecimals: 18,
    exchangeAddress: '0x78509ef2cf8257c7d2067d9bafd7c5a2a521b3e4'
  },
  {
    symbol: 'UCN',
    name: 'UChain Token',
    tokenAddress: '0xaaf37055188feee4869de63464937e683d61b2a1',
    tokenDecimals: 18,
    exchangeAddress: '0x2b2651f7f56d08a9d2adcd9789c8e707eec54e26'
  },
  {
    symbol: 'sETH',
    name: 'Synth sETH',
    tokenAddress: '0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb',
    tokenDecimals: 18,
    exchangeAddress: '0xe9cf7887b93150d4f2da7dfc6d502b216438f244'
  },
  {
    symbol: 'BLM',
    name: 'Blume Token',
    tokenAddress: '0x2722690a68f97e3361b958eb0b1dedf39190f6ad',
    tokenDecimals: 18,
    exchangeAddress: '0xb4d41a54ee7a6ca54368480573463a5195ecbc88'
  },
  {
    symbol: 'SPRK',
    name: 'Sparkle!',
    tokenAddress: '0x286ae10228c274a9396a05a56b9e3b8f42d1ce14',
    tokenDecimals: 18,
    exchangeAddress: '0x22ffcae266f3b4551c42872b852e0d7415fbec1d'
  },
  {
    symbol: 'GMR',
    name: 'GimmerToken',
    tokenAddress: '0x9b8d5f3402f74c7a61d9f09c32d3ca07b45c1466',
    tokenDecimals: 18,
    exchangeAddress: '0x2bc09ebe244a3e972171740c52102888b6726f2d'
  },
  {
    symbol: 'CYBO',
    name: 'Cybone',
    tokenAddress: '0x7a4c9e42f7bdb9868b276223e6cb71b0500c59d2',
    tokenDecimals: 18,
    exchangeAddress: '0xd898112de4a7dfd9a95fd627f14986d9dc6108da'
  },
  {
    symbol: 'SHCH',
    name: 'ShcherbaCoin',
    tokenAddress: '0x1c4c60edba4c8c09ce8d3dc7c09a670a55c57767',
    tokenDecimals: 18,
    exchangeAddress: '0x85f155c4864a90f37ddc9cf71d02e48cd871cf42'
  },
  {
    symbol: 'ETH12EMACO',
    name: 'ETH 12 EMA Crossover Set',
    tokenAddress: '0x2c5a9980b41861d91d30d0e0271d1c093452dca5',
    tokenDecimals: 18,
    exchangeAddress: '0xdb15ec4ce611cdc16223c31fe1643a59b4fa2801'
  },
  {
    symbol: 'HNY',
    name: 'HoneyCoin',
    tokenAddress: '0x9e7d713d6bceaed3a694459c297a45fc2ab54b19',
    tokenDecimals: 18,
    exchangeAddress: '0xd43f643f237f64c166395e422c952aa7edec91d2'
  },
  {
    symbol: 'HNY',
    name: 'HoneyCoin',
    tokenAddress: '0xedeead7255299a0e27561546bcc99b6d7a96abe4',
    tokenDecimals: 18,
    exchangeAddress: '0xe2279c174fdf996cef6a97fa3064072f8c0e4149'
  },
  {
    symbol: 'HNY',
    name: 'HoneyCoin',
    tokenAddress: '0x676c6bf67cb4fa1f663aee59fd9ecffcab5daf45',
    tokenDecimals: 18,
    exchangeAddress: '0xefd2add9e09075576d8728d075b38e0c94c77e95'
  },
  {
    symbol: 'ZNA',
    name: 'ZNA Token',
    tokenAddress: '0x59c3ba7a0a4c26955037710654f60d368303b3e1',
    tokenDecimals: 18,
    exchangeAddress: '0x9d7e623e7ca2e3606bae00a346178174dc9a94b3'
  },
  {
    symbol: 'AID',
    name: 'aidus',
    tokenAddress: '0xd178b20c6007572bd1fd01d205cc20d32b4a6015',
    tokenDecimals: 8,
    exchangeAddress: '0x7ec394424250ff4355b7161ce88d767c1153688d'
  },
  {
    symbol: 'NCA',
    name: 'Nuclear',
    tokenAddress: '0x7542013f90df4d24ae1b18641bd9e223f5524320',
    tokenDecimals: 6,
    exchangeAddress: '0x90d99e6478a82a6e6f1d31b3a4742fc8139b38fb'
  },
  {
    symbol: 'LLion',
    name: 'Lydian Lion Token',
    tokenAddress: '0x43e41e7129d46a2b8601d2e4331342609e058357',
    tokenDecimals: 5,
    exchangeAddress: '0xd4a3154f7265fda2202dff7c245f59dac4e8e203'
  },
  {
    symbol: '1UP',
    name: 'Uptrennd',
    tokenAddress: '0x07597255910a51509ca469568b048f2597e72504',
    tokenDecimals: 18,
    exchangeAddress: '0x609c8a0248ad2308a5e58658f204bdbd1fe14a39'
  },
  {
    symbol: 'YPSI',
    name: 'Ypsi Pay',
    tokenAddress: '0x5008cc9796f15c052f68b502ed5ad56f49c3665d',
    tokenDecimals: 18,
    exchangeAddress: '0xffbe1fe0092905ed32d32c94412939d29e9a22f8'
  },
  {
    symbol: 'HFT',
    name: 'Insula IM Token ',
    tokenAddress: '0x8c382d6ebd49a6e3cd6d95b85115e19b881c9c07',
    tokenDecimals: 18,
    exchangeAddress: '0x1f7219e165a1aefe8336c118aeaddf30d1d31d81'
  },
  {
    symbol: 'PROPS',
    name: 'Props Token',
    tokenAddress: '0x6fe56c0bcdd471359019fcbc48863d6c3e9d4f41',
    tokenDecimals: 18,
    exchangeAddress: '0x2b3580aa8b39097e2d6df5d65c6f77370e800b75'
  },
  {
    symbol: 'brand',
    name: 'SHUIWW',
    tokenAddress: '0x2a1a7814019fd8adc337179c4009ab69c3794309',
    tokenDecimals: 18,
    exchangeAddress: '0x3c59de11ee93a15d172d35c6c78c245872ef932e'
  },
  {
    symbol: 'REALTOKEN-16200-FULLERTON-AVE-DETROIT-MI',
    name: 'RealToken 16200 Fullerton Ave Detroit MI',
    tokenAddress: '0x22c8ecf727c23422f47093b562ec53c139805301',
    tokenDecimals: 18,
    exchangeAddress: '0xc215ebfe68c15fcafcb848105ef5f5b1158313cb'
  },
  {
    symbol: 'USDx',
    name: 'dForce',
    tokenAddress: '0xeb269732ab75a6fd61ea60b06fe994cd32a83549',
    tokenDecimals: 18,
    exchangeAddress: '0xe5a69d694d0df71a5eea63432ee74f2c4465a56f'
  },
  {
    symbol: 'TAUD',
    name: 'TrueAUD',
    tokenAddress: '0x00006100f7090010005f1bd7ae6122c3c2cf0090',
    tokenDecimals: 18,
    exchangeAddress: '0x88df13889e20efa93ff9a0c08f101f431bd9ddd7'
  },
  {
    symbol: 'THKD',
    name: 'TrueHKD',
    tokenAddress: '0x0000852600ceb001e08e00bc008be620d60031f2',
    tokenDecimals: 18,
    exchangeAddress: '0x505c02b4aa1286375fbdf0c390ac0fe9209dcb05'
  },
  {
    symbol: 'TGBP',
    name: 'TrueGBP',
    tokenAddress: '0x00000000441378008ea67f4284a57932b1c000a5',
    tokenDecimals: 18,
    exchangeAddress: '0x6bfa119a191576ba26bc5e711432aca0cfda04de'
  },
  {
    symbol: '.co.uk',
    name: 'devet',
    tokenAddress: '0x580021753eae14923c17bfa250b0ed49ec3b287d',
    tokenDecimals: 18,
    exchangeAddress: '0x188e6d3a3b51bc007866303bb05a0ca3a259459e'
  },
  {
    symbol: 'GALT',
    name: 'Galt',
    tokenAddress: '0x8b3b9a86d72a68c95a43030710b6abe6a0e413e6',
    tokenDecimals: 18,
    exchangeAddress: '0x397e445a920cc52ed5cf8479ba2e479dfec579c8'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0xddd27201dc2f4a3a0afdcff8a807daf0b84c5dc9',
    tokenDecimals: 18,
    exchangeAddress: '0xb3b30571cb6cd73f805e699f635ce3ed0353b2be'
  },
  {
    symbol: 'KNCT',
    name: 'KnoxsterChain',
    tokenAddress: '0xb5e62a10c362a479be1f629f01a7e8146ea7a748',
    tokenDecimals: 18,
    exchangeAddress: '0xb1bf3699775ae50ee2e36ab47ef27daf40f8b55f'
  },
  {
    symbol: 'COINN',
    name: 'Conexao Coin',
    tokenAddress: '0x106f2d734e12545b4d78fc057934905508f1fe24',
    tokenDecimals: 18,
    exchangeAddress: '0x60bd743c253ecf265c50ef9274e353ced295b296'
  },
  {
    symbol: 'TAL',
    name: 'Thaler',
    tokenAddress: '0x375a08ce3a460f20bbafd282be1e3579a2c31f41',
    tokenDecimals: 18,
    exchangeAddress: '0x18175bbd777586746e1894ec97da3f979d0f67d8'
  },
  {
    symbol: 'URING',
    name: 'Uniring',
    tokenAddress: '0xe857581ba3ed180755f65c5403bf06c084987810',
    tokenDecimals: 18,
    exchangeAddress: '0x38dac482874e1c47af774bda592921a8b86f8611'
  },
  {
    symbol: 'AKRO',
    name: 'Akropolis',
    tokenAddress: '0x8ab7404063ec4dbcfd4598215992dc3f8ec853d7',
    tokenDecimals: 18,
    exchangeAddress: '0x8633c63af13e2e5822c4d074fc665ff55982956f'
  },
  {
    symbol: 'CREDIT',
    name: 'CREDIT',
    tokenAddress: '0x2003140a82c9a0cb32636526a43aaa9f7f88022b',
    tokenDecimals: 18,
    exchangeAddress: '0x837a108cfcfa80a0adadf8c048f163c381f48f7e'
  },
  {
    symbol: 'STC',
    name: 'Stellar Classic',
    tokenAddress: '0xf03ff401d952ba146d025788567a146f96bb81fc',
    tokenDecimals: 2,
    exchangeAddress: '0x24c872bfb44a7d37100bd15bed00d7674bf665c9'
  },
  {
    symbol: 'BIZT',
    name: 'Bizanc ERC20 Token',
    tokenAddress: '0x750eab388d8d2b0be4e6b19ad861458957c37306',
    tokenDecimals: 18,
    exchangeAddress: '0x00c51df25b4e98c8e3c8c14d416d906d4dc002a4'
  },
  {
    symbol: 'DCS',
    name: 'DCS TOKEN',
    tokenAddress: '0xbded3f7537e75d6c38c036a3a788a549afde12b1',
    tokenDecimals: 8,
    exchangeAddress: '0x2fe1992ce4d16445698d217fd0163a4896ab3e34'
  },
  {
    symbol: 'SBK',
    name: 'ShadyBucks',
    tokenAddress: '0x3579e381caf332af7f5f4f3177924308571322d3',
    tokenDecimals: 2,
    exchangeAddress: '0x8f43200eb9a7508f599c3109fd49700d0d43c568'
  },
  {
    symbol: 'THD',
    name: 'Thanks Dollar',
    tokenAddress: '0xc3ed0908d7f588f900648b81414f7de8fc7ce3c4',
    tokenDecimals: 18,
    exchangeAddress: '0x5ef41ba2073bd87c4b8c46b733a87dadfef3258d'
  },
  {
    symbol: 'GEMNET',
    name: 'Gemnet',
    tokenAddress: '0x9e18b959e5eed7989bf4341f911f21128ecf21cd',
    tokenDecimals: 18,
    exchangeAddress: '0x4f686b3e9d2327705b2cfc5abd0f03f494763c96'
  },
  {
    symbol: 'UBT',
    name: 'UniBright',
    tokenAddress: '0x8400d94a5cb0fa0d041a3788e395285d61c9ee5e',
    tokenDecimals: 8,
    exchangeAddress: '0xfc96e234d4b31c63051e707105fcc4aba37807fa'
  },
  {
    symbol: 'BUSD',
    name: 'Binance USD',
    tokenAddress: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
    tokenDecimals: 18,
    exchangeAddress: '0x25c610eee8f59768c26567c388986aab3467a3e3'
  },
  {
    symbol: 'SEEDS',
    name: 'Seeds',
    tokenAddress: '0x61404d2d3f2100b124d6827d3f2ddf6233cd71c0',
    tokenDecimals: 10,
    exchangeAddress: '0x1dcea7a07579c8f7638e2863e07c682581d3740c'
  },
  {
    symbol: 'RYC',
    name: 'ReyerCoin',
    tokenAddress: '0x1a3111d682a6719992dbefa616541caac29991b8',
    tokenDecimals: 1,
    exchangeAddress: '0xf85abd7d8718efc0a931ce6a46f88481d01cb57d'
  },
  {
    symbol: 'EVT',
    name: 'ElevationToken',
    tokenAddress: '0x5aaa2182459377b6ca18b10712f9f602140764af',
    tokenDecimals: 8,
    exchangeAddress: '0x3d835084063c1d742d764b4c4587fd3e9defa772'
  },
  {
    symbol: 'SDD',
    name: 'Seeded',
    tokenAddress: '0x4cdc1e87fab12d080cd361561d10a420c4e25865',
    tokenDecimals: 4,
    exchangeAddress: '0x10a904ada6029bb50724b5a6fb20e0f523cec917'
  },
  {
    symbol: 'JURM',
    name: 'Juriseum',
    tokenAddress: '0x34dd5edfed51c632d1d4d2502bc901efb5fdfcd4',
    tokenDecimals: 18,
    exchangeAddress: '0x87ba7814c5748b8ecdd136bcc856b1b2322a9613'
  },
  {
    symbol: 'PETH',
    name: 'Pooled Ether',
    tokenAddress: '0xf53ad2c6851052a81b42133467480961b2321c09',
    tokenDecimals: 18,
    exchangeAddress: '0x63a5a3027268a82d3e6034b8a8959cb9e505e3ae'
  },
  {
    symbol: 'SEV',
    name: 'SLEEVES',
    tokenAddress: '0xba32286b0296f0a86111644b74472d8aabae3027',
    tokenDecimals: 8,
    exchangeAddress: '0xc671b5be0a59b51284a346b11334c7264aefdf3c'
  },
  {
    symbol: 'TCHN',
    name: 'Techan',
    tokenAddress: '0xa52db128b8983429cfec2cf28c20041ff6256a23',
    tokenDecimals: 0,
    exchangeAddress: '0x5f765fa32f5316903168adc392d812ca65943545'
  },
  {
    symbol: 'BOOK',
    name: 'BookCoin',
    tokenAddress: '0xe159915f046acb4ebaea811969b54a738350074e',
    tokenDecimals: 0,
    exchangeAddress: '0xce7729024ef3b0dc0baecc68f152f66c21f5cb19'
  },
  {
    symbol: 'Blog',
    name: 'Blogcoin',
    tokenAddress: '0xa72158c0bfd7137f879e3f2b0a05c904c5517b24',
    tokenDecimals: 8,
    exchangeAddress: '0x46d8c001384243e97eb39675fadb2b2208e87915'
  },
  {
    symbol: 'sUSD',
    name: 'Synth sUSD',
    tokenAddress: '0x57ab1ec28d129707052df4df418d58a2d46d5f51',
    tokenDecimals: 18,
    exchangeAddress: '0xb944d13b2f4047fc7bd3f7013bcf01b115fb260d'
  },
  {
    symbol: 'POC',
    name: 'leibniz',
    tokenAddress: '0x80037ba0b221befe2c578f8c42b7d4dfe463fd96',
    tokenDecimals: 8,
    exchangeAddress: '0xe4f5c46327a705e3ea2ba80c3ee6ba266b06a63b'
  },
  {
    symbol: 'STKN',
    name: 'SToken',
    tokenAddress: '0xcbd185558e2a1ad9dece293aee09a2785c047d92',
    tokenDecimals: 8,
    exchangeAddress: '0xa75c8f6985fe1364009162667bc95c3783ff1ceb'
  },
  {
    symbol: 'AKRO',
    name: 'Akropolis',
    tokenAddress: '0x8ab7404063ec4dbcfd4598215992dc3f8ec853d7',
    tokenDecimals: 18,
    exchangeAddress: '0x8633c63af13e2e5822c4d074fc665ff55982956f'
  },
  {
    symbol: 'KLOWN',
    name: 'Ether Clown',
    tokenAddress: '0xc97a5cdf41bafd51c8dbe82270097e704d748b92',
    tokenDecimals: 7,
    exchangeAddress: '0xfade164262e25d9b5c45435307afa7483409cfac'
  },
  {
    symbol: 'ZAR',
    name: 'Digital Rand',
    tokenAddress: '0x2832461dc883d4a376025cf1f4feaa80dd1c68d8',
    tokenDecimals: 6,
    exchangeAddress: '0x712278f28b1e06e42743d21c6cb068ab544dc3c9'
  },
  {
    symbol: 'SNAYL',
    name: 'Snayl Token',
    tokenAddress: '0x7e294dcc20386c17574d9c00386ce608a99aa811',
    tokenDecimals: 0,
    exchangeAddress: '0x2282964928b7f13523c4e8964fa7f4c31725e408'
  },
  {
    symbol: '0xBUTT',
    name: 'ButtCoin v2.0',
    tokenAddress: '0x5556d6a283fd18d71fd0c8b50d1211c5f842dbbc',
    tokenDecimals: 8,
    exchangeAddress: '0x6e3a0c320226049a3f5fc5a96c0f0843b7eda943'
  },
  {
    symbol: 'DPC',
    name: 'Dan Pan Coin',
    tokenAddress: '0xd434e2ec93be12d72934543f68278c2b8e0cb3fc',
    tokenDecimals: 2,
    exchangeAddress: '0xb215b9aea109bdae015bb19b74fae47ce23bddc2'
  },
  {
    symbol: 'AROHN',
    name: 'ArohnToken',
    tokenAddress: '0xc7b39d86d6ee9814a8a312c605584d5cdaea0d27',
    tokenDecimals: 18,
    exchangeAddress: '0xe98fbf67a8ed900c1c37edc37812ef4856a2c83b'
  },
  {
    symbol: 'GOOGN',
    name: 'Googlier Indium',
    tokenAddress: '0xc7514b42453c492fd95d3e2e41685fab4991f28e',
    tokenDecimals: 18,
    exchangeAddress: '0xf7dc6c1d416ddc186d3abb2281ff8a15603606da'
  },
  {
    symbol: 'MAN',
    name: 'MATRIX AI Network',
    tokenAddress: '0xe25bcec5d3801ce3a794079bf94adf1b8ccd802d',
    tokenDecimals: 18,
    exchangeAddress: '0xb7c19a2c2ee3ec5011995356b508391a5d4f09e3'
  },
  {
    symbol: 'SVG',
    name: 'Surge Token',
    tokenAddress: '0xffc97142863e9b2583588e3705e2322ef0369635',
    tokenDecimals: 18,
    exchangeAddress: '0x6b9b209033f7364edb7af9e40da2b791bed77b8d'
  },
  {
    symbol: 'PPI',
    name: 'PiedPiperCoin',
    tokenAddress: '0x5a3c9a1725aa82690ee0959c89abe96fd1b527ee',
    tokenDecimals: 18,
    exchangeAddress: '0xcd6ae8b43a9551f28c91e8dffc20a673f618d73b'
  },
  {
    symbol: 'WALT',
    name: 'WaltCoin',
    tokenAddress: '0xde01d7e88840fe55cb530f5bc950ae943b0ea51b',
    tokenDecimals: 14,
    exchangeAddress: '0x2fe8b084462a5b905521da0a5af9d10c3ef20046'
  },
  {
    symbol: 'ETBOLD',
    name: 'ETHBOLD',
    tokenAddress: '0x9f9a0e0747a18426fd29f4a76820c808da3b140b',
    tokenDecimals: 18,
    exchangeAddress: '0x416a13db975090a28dbc7d6999080ba2609ff9b0'
  },
  {
    symbol: 'TGH',
    name: 'Target Hit',
    tokenAddress: '0xc83d46e4d1e290fa414a5775d90d5d50745c3281',
    tokenDecimals: 8,
    exchangeAddress: '0x639060e05b7a3e2f25238e18872560534416ce4b'
  },
  {
    symbol: 'TOK',
    name: 'TOKEN NAME',
    tokenAddress: '0x1d2a5d15bf491c4c3ac69fba9f7ea193de39fdd6',
    tokenDecimals: 18,
    exchangeAddress: '0x48f01d07442fd543fff45dfe52a4d0c43f57d555'
  },
  {
    symbol: 'TOK2',
    name: 'TOKEN NAME 2',
    tokenAddress: '0x5f9dc61d3e86e0efd63b5cf6ee55dab40830f9a5',
    tokenDecimals: 18,
    exchangeAddress: '0x764c30a2aa72d31f698a3ebdf5f00d539e218bd2'
  },
  {
    symbol: 'WALK',
    name: 'WalkCoin',
    tokenAddress: '0x7e386d8185c546a0944a337902de0818e10105f0',
    tokenDecimals: 0,
    exchangeAddress: '0xec98fe55f95441aa6b064720ae3a3c5c34c487bb'
  },
  {
    symbol: 'DNA',
    name: 'DNA Token',
    tokenAddress: '0x82b0e50478eeafde392d45d1259ed1071b6fda81',
    tokenDecimals: 18,
    exchangeAddress: '0x8a44f682fa486b6de2c0b912b0e5b062e56c0939'
  },
  {
    symbol: 'HXRO',
    name: 'Hxro',
    tokenAddress: '0x4bd70556ae3f8a6ec6c4080a0c327b24325438f3',
    tokenDecimals: 18,
    exchangeAddress: '0x30f37956c78d60eb58b8adbeacbffea6e6639509'
  },
  {
    symbol: 'PMT',
    name: 'Prometeo',
    tokenAddress: '0x36e08e815f26c43dac8957e36c09e664a6b644f9',
    tokenDecimals: 11,
    exchangeAddress: '0x37f4ef3defa893b13b3253810cf0234aa10b62c3'
  },
  {
    symbol: 'PARETO',
    name: 'Pareto Network Token',
    tokenAddress: '0xea5f88e54d982cbb0c441cde4e79bc305e5b43bc',
    tokenDecimals: 18,
    exchangeAddress: '0x2d7c5a8067e2d9ee3f39f3b269bab1962b0137ef'
  },
  {
    symbol: 'ZBR',
    name: 'ZEBRA',
    tokenAddress: '0xdcedd2f5472128c121b219ae89ed4111e16f5922',
    tokenDecimals: 0,
    exchangeAddress: '0x580bd8205f40839c2de7f520b60d5de155220102'
  },
  {
    symbol: 'SST',
    name: 'StarShineToken',
    tokenAddress: '0xacbccbf7494df0b2aa37bd69d45161a3c36423da',
    tokenDecimals: 18,
    exchangeAddress: '0x8b4bbb5e4c2a11f728ab0e112321a8c20b232d7b'
  },
  {
    symbol: 'BAGL',
    name: 'AltinGunleri',
    tokenAddress: '0x2c433f2914729c07be748ad3cf976c688b2a38be',
    tokenDecimals: 8,
    exchangeAddress: '0x7dd103d4af2b79840f57d4af77397a0391f76526'
  },
  {
    symbol: 'TOK',
    name: 'TOKEN',
    tokenAddress: '0xc77849b15ed98e185aae9cf73b8300770d20e6bb',
    tokenDecimals: 18,
    exchangeAddress: '0xcd1b05b3a66fb56f49bcf3b3ce164f48c5c1a418'
  },
  {
    symbol: 'ALIS',
    name: 'AlisToken',
    tokenAddress: '0xea610b1153477720748dc13ed378003941d84fab',
    tokenDecimals: 18,
    exchangeAddress: '0xf458be41ae47290746a31cb960e2c2badccfb4b2'
  },
  {
    symbol: 'CRCN',
    name: 'GrounderCoin',
    tokenAddress: '0xe0502c70e3fec1a33d2e0760a7a35735a3a6bc8f',
    tokenDecimals: 18,
    exchangeAddress: '0x06b52a395ea3d03d38964bb7cd861b0ee2c4bb2a'
  },
  {
    symbol: 'CHR',
    name: 'Chroma',
    tokenAddress: '0x915044526758533dfb918eceb6e44bc21632060d',
    tokenDecimals: 6,
    exchangeAddress: '0xc0885ff709051e8a3cc2c089346b9febf86d96cd'
  },
  {
    symbol: 'EBK',
    name: 'Ebakus',
    tokenAddress: '0xbddab785b306bcd9fb056da189615cc8ece1d823',
    tokenDecimals: 18,
    exchangeAddress: '0x626ae12d3f14cb585c49f549520ea8dc91096f16'
  },
  {
    symbol: 'REAP',
    name: 'The Reaper',
    tokenAddress: '0x22585c163b353510e8fef984c02609302eb5fc62',
    tokenDecimals: 8,
    exchangeAddress: '0x3bd85f4ed8f089ada01c6fb2416115034ae24e75'
  },
  {
    symbol: 'TSHP',
    name: '12Ships',
    tokenAddress: '0x525794473f7ab5715c81d06d10f52d11cc052804',
    tokenDecimals: 18,
    exchangeAddress: '0x480029184e62e2957eb5ab0f0523d194b6628f84'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x0207098c1286af7af8d6eb1ad9c8a1ed2404e290',
    tokenDecimals: 18,
    exchangeAddress: '0xe474742fde5e644979e7f3346a24f2cd3ab3db76'
  },
  {
    symbol: 'TONT',
    name: 'Totally normal token',
    tokenAddress: '0x8bd61eec0319c2c6ab364bf7a8a5079be225f343',
    tokenDecimals: 18,
    exchangeAddress: '0xf7553f7354b058ba40958580716830fa5682a736'
  },
  {
    symbol: 'TONS',
    name: 'Totally normal tokenS',
    tokenAddress: '0x92cccef452d956137f9c9bb8954f8235e51949a0',
    tokenDecimals: 18,
    exchangeAddress: '0x9bab5fd06c3f6d61efc982006db8a6c9e6650250'
  },
  {
    symbol: 'XDCE',
    name: 'XinFin XDCE',
    tokenAddress: '0x41ab1b6fcbb2fa9dced81acbdec13ea6315f2bf2',
    tokenDecimals: 18,
    exchangeAddress: '0x1a7c6a16b4667dce0ade1706122c22f1f506a705'
  },
  {
    symbol: 'MLZ',
    name: 'MILLZ TOKEN',
    tokenAddress: '0xccbcdab59762980dd15fb6652ff2bbc7f9cf2a95',
    tokenDecimals: 9,
    exchangeAddress: '0x740ccc8a1eccfbf558201d94a6ae2d5757ab4fa4'
  },
  {
    symbol: 'WEIDAI',
    name: 'WeiDai',
    tokenAddress: '0x99ce8ed851a21f43ef08efb1ec5f307981c758cb',
    tokenDecimals: 18,
    exchangeAddress: '0x6e2727c072fd8036c73b274cd8cef7ec0b059c26'
  },
  {
    symbol: 'BAND',
    name: 'BandToken',
    tokenAddress: '0xba11d00c5f74255f56a5e366f4f77f5a186d7f55',
    tokenDecimals: 18,
    exchangeAddress: '0x88616cf228ffb3fb8ba336592a79a53de53d05ef'
  },
  {
    symbol: 'BARG',
    name: 'Bitbarg',
    tokenAddress: '0x36d38e232659dea52f5fdb1a0f90709e6dc6994a',
    tokenDecimals: 2,
    exchangeAddress: '0x18b3eee47756db1a46f16e051b96d8877480f07b'
  },
  {
    symbol: 'IZX',
    name: 'IZX Token',
    tokenAddress: '0x2ad180cbaffbc97237f572148fc1b283b68d8861',
    tokenDecimals: 18,
    exchangeAddress: '0x9a4fa4c32df14affedad639d279425be17d69027'
  },
  {
    symbol: 'COMM',
    name: 'Commodity Coin',
    tokenAddress: '0xc7deb5543cfa97b0af2841418f53b8e554ff566a',
    tokenDecimals: 18,
    exchangeAddress: '0x8f3cd3f3c2e28cea2806ecc37affdcdee0d01fbb'
  },
  {
    symbol: 'HUE',
    name: 'Hue',
    tokenAddress: '0xdcfe18bc46f5a0cd0d3af0c2155d2bcb5ade2fc5',
    tokenDecimals: 4,
    exchangeAddress: '0x3fcb35aada553a888433efc45df1b70937a5942d'
  },
  {
    symbol: 'ARI',
    name: 'ARICOIN',
    tokenAddress: '0x22d45e9ed7a1e97eef14242fa5c9e3b0466b04db',
    tokenDecimals: 18,
    exchangeAddress: '0x3c91997cc2fba87e217721cb85034446f5a6e35a'
  },
  {
    symbol: 'EBASE',
    name: 'EURBASE Stablecoin',
    tokenAddress: '0x86fadb80d8d2cff3c3680819e4da99c10232ba0f',
    tokenDecimals: 18,
    exchangeAddress: '0x376b59b5d35a7cc8c052684842697f102d79d04a'
  },
  {
    symbol: 'XBASE',
    name: 'Eterbase Coin',
    tokenAddress: '0x4d13d624a87baa278733c068a174412afa9ca6c8',
    tokenDecimals: 18,
    exchangeAddress: '0x6f5a3dea184d3c3110b804827fe7fb859d82a79e'
  },
  {
    symbol: 'TNT',
    name: 'Tierion Network Token',
    tokenAddress: '0x08f5a9235b08173b7569f83645d2c7fb55e8ccd8',
    tokenDecimals: 8,
    exchangeAddress: '0x76edc77baf69eca4c06ee2bd480e3b61ea503c00'
  },
  {
    symbol: 'K$G',
    name: 'KGreen',
    tokenAddress: '0xf9d290f3fe0b151f2ebb9321b7b3f5ecc11ea549',
    tokenDecimals: 18,
    exchangeAddress: '0x1d4c809e7594da45700c6178246090c089b3bb7e'
  },
  {
    symbol: 'NOUR',
    name: 'NOUR',
    tokenAddress: '0x5c0669c6718bf35112d4e643fe80bf7fb06dedeb',
    tokenDecimals: 18,
    exchangeAddress: '0x9974734d331225c7e2b509f0cd6573bbc567c27a'
  },
  {
    symbol: 'POSS',
    name: 'Posscoin',
    tokenAddress: '0x6b193e107a773967bd821bcf8218f3548cfa2503',
    tokenDecimals: 18,
    exchangeAddress: '0xa5d7478333d3f923202d269977dcc2565cfa3b58'
  },
  {
    symbol: 'CYBO',
    name: 'Cybone',
    tokenAddress: '0x7a4c9e42f7bdb9868b276223e6cb71b0500c59d2',
    tokenDecimals: 18,
    exchangeAddress: '0xd898112de4a7dfd9a95fd627f14986d9dc6108da'
  },
  {
    symbol: 'SEV',
    name: 'SLEEVES',
    tokenAddress: '0xba32286b0296f0a86111644b74472d8aabae3027',
    tokenDecimals: 8,
    exchangeAddress: '0xc671b5be0a59b51284a346b11334c7264aefdf3c'
  },
  {
    symbol: 'BNN',
    name: 'BrokerNekoNetwork',
    tokenAddress: '0xda80b20038bdf968c7307bb5907a469482cf6251',
    tokenDecimals: 8,
    exchangeAddress: '0xb5425b2b73358bb6a8eaacf5944e7ff166b2a22f'
  },
  {
    symbol: 'CTIC3',
    name: 'Coimatic 3.0',
    tokenAddress: '0x0743392132d1a03a902c477e5a176f256ba3220c',
    tokenDecimals: 18,
    exchangeAddress: '0x41e5c726514ff20c413f3909837ab71d3da36dc1'
  },
  {
    symbol: 'BVT',
    name: 'BeneficentDAO Token',
    tokenAddress: '0x90dbfe6545392a89a45fa880e409696a54abe793',
    tokenDecimals: 18,
    exchangeAddress: '0x210a3638afda90069b3bb22f479e2590ad17bb50'
  },
  {
    symbol: 'PAR',
    name: 'Parachute',
    tokenAddress: '0x1beef31946fbbb40b877a72e4ae04a8d1a5cee06',
    tokenDecimals: 18,
    exchangeAddress: '0xea8e9ea8463604f77323334a4f62b6a72a026b07'
  },
  {
    symbol: 'MWAVS',
    name: 'Massive WAVs',
    tokenAddress: '0x305dbdd7931fb4833f5ce48046a586e30ece683f',
    tokenDecimals: 8,
    exchangeAddress: '0xd7f69554c3239ba358db5366465ddbd441ece210'
  },
  {
    symbol: 'TBT',
    name: 'TBT',
    tokenAddress: '0x62a7da217d6a55a983455e5fd6c4a025ac786879',
    tokenDecimals: 6,
    exchangeAddress: '0xf43135e08b5251630d5a159103f78453760b163d'
  },
  {
    symbol: 'ITIX',
    name: 'iTicket',
    tokenAddress: '0x7e6fdfa3a51a3e05a33894b98832d1b753e7953e',
    tokenDecimals: 0,
    exchangeAddress: '0xf9df4b87eca189f0dd1795ccf94e9ec58ff6e558'
  },
  {
    symbol: 'BTG',
    name: 'Bullion Troy Grain',
    tokenAddress: '0xffee3b942dfdcbc51007bffffc2a735b0483878f',
    tokenDecimals: 8,
    exchangeAddress: '0x56d407f84b04af2b7c659460cb415a40166a6962'
  },
  {
    symbol: 'BC',
    name: '"Bullion Coin" Bullion Troy Grain Coin',
    tokenAddress: '0xeb5d66b16a87cb392de8f8cfa996a5233f8a3ad1',
    tokenDecimals: 18,
    exchangeAddress: '0xb6cc428aa44a64d32ad881bcd773f4cf2dea85b0'
  },
  {
    symbol: 'GOT',
    name: 'GOToken',
    tokenAddress: '0x613fa2a6e6daa70c659060e86ba1443d2679c9d7',
    tokenDecimals: 18,
    exchangeAddress: '0x63ba0cf2856b8f8e72e22b34101d92a6041db878'
  },
  {
    symbol: 'CVS',
    name: 'CoinVisa',
    tokenAddress: '0xdb56448fe2635f7912287cd619e7ed3d93180f25',
    tokenDecimals: 18,
    exchangeAddress: '0xe153ca3438d37b45fe3998a934495603ce89b717'
  },
  {
    symbol: 'ISLA',
    name: 'Insula',
    tokenAddress: '0x697ef32b4a3f5a4c39de1cb7563f24ca7bfc5947',
    tokenDecimals: 18,
    exchangeAddress: '0x3cccaf9826f23fa749a85644f4924e627405f338'
  },
  {
    symbol: 'ESAX',
    name: 'ESAX Token',
    tokenAddress: '0xa7b87611a9577cb8ad3f9b1e85e7884933603405',
    tokenDecimals: 18,
    exchangeAddress: '0x73ac91a767ba100589188a6da1a0221342850cf1'
  },
  {
    symbol: 'BITS',
    name: 'Bitcoinus Token',
    tokenAddress: '0xc38f1fb49acdf2f1213caf3319f6eb3ea2cb7527',
    tokenDecimals: 18,
    exchangeAddress: '0xea67c9952ec650e23983a6bdd4e18a3a4fb5918c'
  },
  {
    symbol: 'APTRO',
    name: 'Aptro Token',
    tokenAddress: '0x700bef66897073c75c037869ae7681f6e42d73f2',
    tokenDecimals: 18,
    exchangeAddress: '0x82e93c97178f142e57537eeb75f2fca99c556492'
  },
  {
    symbol: 'SVC',
    name: 'SectorV Token',
    tokenAddress: '0xde98a16efd225fbfdcaa7ce4b41343af00bdb546',
    tokenDecimals: 18,
    exchangeAddress: '0x78f410ddf081ddd10748af44d3dd495d7ce0f51c'
  },
  {
    symbol: 'SJE',
    name: 'SJ Hybrid Energy',
    tokenAddress: '0xbe1341a080026b18f156f5c02875106e1ae690ef',
    tokenDecimals: 18,
    exchangeAddress: '0xc041913c4e16bd69b516c04e94dd6bb7916c5f97'
  },
  {
    symbol: 'TRYB',
    name: 'BiLira',
    tokenAddress: '0x2c537e5624e4af88a7ae4060c022609376c8d0eb',
    tokenDecimals: 6,
    exchangeAddress: '0x122327fd43b2c66dd9e4b6c91c8f071e217558ef'
  },
  {
    symbol: 'FamGil',
    name: 'Familia Gil',
    tokenAddress: '0x1e171f25254178c0e07ce6a059d3a192574e5714',
    tokenDecimals: 4,
    exchangeAddress: '0x4c0108ce6e3aade0eeee2655a5352105fce5d9db'
  },
  {
    symbol: 'SAL',
    name: 'SalariumCoin',
    tokenAddress: '0x868b0bd0f4fee14bbe0157fe3ed1359e8431ea63',
    tokenDecimals: 18,
    exchangeAddress: '0x7700a1f1801087fd737a5f1b818628a7cb206782'
  },
  {
    symbol: 'DC',
    name: 'DPlay Coin',
    tokenAddress: '0x92c5387ace61f5c505bf2c2d4c84120f0a813d4b',
    tokenDecimals: 18,
    exchangeAddress: '0x4e2b23abdc42e7f62a423300f3577dc6347b6311'
  },
  {
    symbol: 'HTX',
    name: 'Hashtrust',
    tokenAddress: '0xedbcc06b603ea1f512720a4073a62cc4fdefcb86',
    tokenDecimals: 0,
    exchangeAddress: '0xe0344fa8ecbb3ff7ab388a514ff82958e6efda3c'
  },
  {
    symbol: 'OMNIS',
    name: 'OMNIS-BIT',
    tokenAddress: '0x3123ff80cbdfd35577628a41ff50598cefc2d236',
    tokenDecimals: 18,
    exchangeAddress: '0x24359e3be38a8c4ae93e23ca1e5e291923d03d05'
  },
  {
    symbol: 'IMA',
    name: 'IMA',
    tokenAddress: '0x9ff316ed79a36b067217031ab8e0f3f9f82dfacd',
    tokenDecimals: 18,
    exchangeAddress: '0x80bb1e0c7a85e037e8d45c1626eeebac552300cb'
  },
  {
    symbol: 'AEXT',
    name: 'Antique Exchange Token',
    tokenAddress: '0xe12fb71d6fab84680e6794f0718fae3ec59c2c6a',
    tokenDecimals: 18,
    exchangeAddress: '0x3814a71ce2f488aa4936996eb26be34e1a3e2c11'
  },
  {
    symbol: 'TKBTC',
    name: 'TokenBTC',
    tokenAddress: '0x4d8976176276901bcbdd728a0260870379af2034',
    tokenDecimals: 18,
    exchangeAddress: '0x5b901ebb4b83c0b98be5c51bca5a492d72d19ee6'
  },
  {
    symbol: 'FV',
    name: 'FinneyVote',
    tokenAddress: '0x000000002647e16d9bab9e46604d75591d289277',
    tokenDecimals: 1,
    exchangeAddress: '0xcf6c81435edf58804becf01a09a81da9583737dc'
  },
  {
    symbol: 'CBB',
    name: 'Cribbits',
    tokenAddress: '0xc0850b8c36a1ffb3de0923409af0da3485a48957',
    tokenDecimals: 5,
    exchangeAddress: '0xf65c390e1611977c3c3a30d3344f013a1638cc59'
  },
  {
    symbol: 'CBR',
    name: 'Crypto Rewards Global',
    tokenAddress: '0xea4afd1c685ac4d33428fa583c2abe49aaf31aa9',
    tokenDecimals: 18,
    exchangeAddress: '0xf679ce42dfed90a0ebafff592da33d40e6449df7'
  },
  {
    symbol: 'MST',
    name: '民宿通',
    tokenAddress: '0xa68920f6d3c996ac3c232e4e93914e9d76150735',
    tokenDecimals: 18,
    exchangeAddress: '0x01d8e6e2ee103f55a772e3841ef78986f911c025'
  },
  {
    symbol: 'INC8',
    name: 'Incinerate Token v2',
    tokenAddress: '0x38b7014ed2a83bc5801232551344ed928698bd07',
    tokenDecimals: 2,
    exchangeAddress: '0x1eaefaa69316843d7de7e5934911830566570689'
  },
  {
    symbol: 'VYA',
    name: 'VAYLA Token',
    tokenAddress: '0x7b53b2c4b2f495d843a4e92e5c5511034d32bd15',
    tokenDecimals: 8,
    exchangeAddress: '0x5226fb4b4c9a41e2073b5501f5c0f1249b78f18e'
  },
  {
    symbol: 'XNC',
    name: 'EXNCE',
    tokenAddress: '0x2e84df8ba0c87670a7073689aa94e7f1d2d85970',
    tokenDecimals: 6,
    exchangeAddress: '0x6c3e5177bca97b30f257421f9f9495a0d06aa5ee'
  },
  {
    symbol: 'USTD',
    name: 'PR Coin',
    tokenAddress: '0xb4681169017cd0ed61dfbdc6cdbc1c5bb1273255',
    tokenDecimals: 18,
    exchangeAddress: '0x74c8242170c5d6f6964cf617ba33803b9faf85f6'
  },
  {
    symbol: 'COINCEP',
    name: 'COINCEPPP',
    tokenAddress: '0x156bd3133360558f415307cad605c9907c3f1a95',
    tokenDecimals: 18,
    exchangeAddress: '0x278659e190c44d44325174dc20aa67bcf4ac6d20'
  },
  {
    symbol: 'KING',
    name: 'KING Token',
    tokenAddress: '0x13d9f3ddcdf57f73fb5dfdf04847508c1cc6ab1a',
    tokenDecimals: 6,
    exchangeAddress: '0xa28aabac64e0a24c7019b3fd15674742afc02bb2'
  },
  {
    symbol: 'MIA',
    name: 'Miasma',
    tokenAddress: '0x80b1dc852f3aeef243ffdd2d47c7435b21284dcb',
    tokenDecimals: 18,
    exchangeAddress: '0x42147aeb9c8bb300e955968a713b891e5074b368'
  },
  {
    symbol: 'XNC',
    name: 'EXNCE',
    tokenAddress: '0x8317b216d7c3f9a5b8401e4b6814d13a7be390ec',
    tokenDecimals: 8,
    exchangeAddress: '0xe04bc8d7c6e49ae6fb193f0a995046ef63d6526b'
  },
  {
    symbol: 'DON',
    name: 'DONpia',
    tokenAddress: '0xe69968dd1913f135f3b28ed81d9a02368204bd66',
    tokenDecimals: 18,
    exchangeAddress: '0x548c25739c97793530a26c20cdfc4cfda5d02eac'
  },
  {
    symbol: 'NII',
    name: 'Nahmii',
    tokenAddress: '0xac4f2f204b38390b92d0540908447d5ed352799a',
    tokenDecimals: 15,
    exchangeAddress: '0x6ef7285fcc7ccacf6f840581fabfe1da9e15326b'
  },
  {
    symbol: 'EXIO',
    name: 'nETHx10',
    tokenAddress: '0xa41e11fa5338bd68e1dac52fa21d893d025a2ec5',
    tokenDecimals: 4,
    exchangeAddress: '0x233b4a0ef990cc36b7962c2341cb86bcb5ae9b12'
  },
  {
    symbol: 'SNS',
    name: 'SNSTOKEN',
    tokenAddress: '0x0189d31f6629c359007f72b8d5ec8fa1c126f95c',
    tokenDecimals: 18,
    exchangeAddress: '0x053ec22ef56607ecb3c3f353268eae12fd25b360'
  },
  {
    symbol: 'CSAT',
    name: 'CandysAirdrop',
    tokenAddress: '0xdb6192baf0e72ffd88d33508f15caedd5c79d75d',
    tokenDecimals: 18,
    exchangeAddress: '0x2034cc62227d6ba0a280bda62a607001b1c0a4a3'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x5048b9d01097498fd72f3f14bc9bc74a5aac8fa7',
    tokenDecimals: 18,
    exchangeAddress: '0x3a63f3cd168a5ed14b72283c3fb53373475fef22'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x2c4bd064b998838076fa341a83d007fc2fa50957',
    tokenDecimals: 18,
    exchangeAddress: '0x2a6c62d8cb2edb7cc900821f38134ef7ab9a8a43'
  },
  {
    symbol: 'GALA',
    name: 'WI Posha Allegro',
    tokenAddress: '0x026ec7b7b657673340912b9e058a4396166fa35d',
    tokenDecimals: 18,
    exchangeAddress: '0x2dc049e93060e182f237ced56f57eb7e75e8936b'
  },
  {
    symbol: 'SNM',
    name: 'SONM Token',
    tokenAddress: '0x983f6d60db79ea8ca4eb9968c6aff8cfa04b3c63',
    tokenDecimals: 18,
    exchangeAddress: '0x9c283d82ac6ecca86a7b310ea93c2e6914504c5b'
  },
  {
    symbol: 'CUTE',
    name: 'Cute Coin',
    tokenAddress: '0x047686fb287e7263a23873dea66b4501015a2226',
    tokenDecimals: 18,
    exchangeAddress: '0xd0a6e50028f474222414e275be198f914903d69d'
  },
  {
    symbol: 'SCC',
    name: 'SiaCashCoin',
    tokenAddress: '0x74fd51a98a4a1ecbef8cc43be801cce630e260bd',
    tokenDecimals: 18,
    exchangeAddress: '0xb09970ab7ea7fe675399a55683dba11ffcb1e068'
  },
  {
    symbol: 'IG',
    name: 'IG',
    tokenAddress: '0x8a88f04e0c905054d2f33b26bb3a46d7091a039a',
    tokenDecimals: 18,
    exchangeAddress: '0xe561e76d5c04742332bb30e3c6b280cd81827cf7'
  },
  {
    symbol: 'AANT',
    name: 'Add A New Token',
    tokenAddress: '0xbe22ec66710caa72ab690bf816f8bce785fbbac2',
    tokenDecimals: 8,
    exchangeAddress: '0xe600adf95af9f513a04b04cc9b7afc7aa8bc5a9d'
  },
  {
    symbol: 'XGG',
    name: 'Going Gems',
    tokenAddress: '0xf6b6aa0ef0f5edc2c1c5d925477f97eaf66303e7',
    tokenDecimals: 8,
    exchangeAddress: '0x0eff5c427bdc5598dcb63234fe492d7a367cf3f3'
  },
  {
    symbol: 'BRRY',
    name: 'Berries',
    tokenAddress: '0xe0bea98ea93e3b12cf558d2a05ce815b94d2ac8c',
    tokenDecimals: 18,
    exchangeAddress: '0xd62c99f0a292c591f51a6a5a64fa9d4494f79479'
  },
  {
    symbol: 'CEXT',
    name: 'CEXT',
    tokenAddress: '0xb5f1942b7db0cd28dbbcef1e5f8456cb7866b1c4',
    tokenDecimals: 18,
    exchangeAddress: '0xa15f3d3c3d8af1bc421e8d6fba7201895b94efb0'
  },
  {
    symbol: 'LIFE',
    name: 'PureLifeCoin',
    tokenAddress: '0xff18dbc487b4c2e3222d115952babfda8ba52f5f',
    tokenDecimals: 18,
    exchangeAddress: '0x3ed758155d8d7f8ee3ca7c49adb27546b34c6800'
  },
  {
    symbol: 'ADAB',
    name: 'ADAB Token',
    tokenAddress: '0x034b0dd380b5f6f8123b8d0d0e42329b67772792',
    tokenDecimals: 18,
    exchangeAddress: '0xc88757c36475b269f7a4c93b6da3665349b823fe'
  },
  {
    symbol: 'YAT',
    name: 'Yattaqi',
    tokenAddress: '0x5ceb8c7f189e694b326310694ac6df98e5ced66e',
    tokenDecimals: 18,
    exchangeAddress: '0x11019a438cd49e8ab55f2dfc570f1393f4f56f61'
  },
  {
    symbol: 'CBB',
    name: 'CRIBBITS',
    tokenAddress: '0xee4b6fbeba9034d7b307e7eeaa339c0c2c73ab3f',
    tokenDecimals: 6,
    exchangeAddress: '0xd6d45258c9417fbf36f7d9ca7c615714ee585415'
  },
  {
    symbol: 'TER',
    name: 'THERA',
    tokenAddress: '0xa6e0bc809290257b2972a4f9ad9df004a1459ca7',
    tokenDecimals: 2,
    exchangeAddress: '0x5d6f54c0c367f7b111960564e0aa375dd819d5df'
  },
  {
    symbol: 'ZAR',
    name: 'DigitalRand',
    tokenAddress: '0x862204994bb47d426a101958b4ca3550eb4ef2d1',
    tokenDecimals: 6,
    exchangeAddress: '0x2660b7faf291efdc44be20b368f3cdcc23ca5f03'
  },
  {
    symbol: 'CTE',
    name: 'Cloud too chain',
    tokenAddress: '0xac397b0fe4ef28ed11eac6063d9ec3550e94a8cd',
    tokenDecimals: 18,
    exchangeAddress: '0xeeea0faa6eb8a460cf722b9c6f8daf784fbc0ab4'
  },
  {
    symbol: 'JEWEL',
    name: 'Gem Coin',
    tokenAddress: '0x048291a9ba65eaae1882aef68782901d514c645c',
    tokenDecimals: 18,
    exchangeAddress: '0xe6404cba219a5ac1890be7a70bdef813de117a21'
  },
  {
    symbol: 'BTZ',
    name: '健康通证',
    tokenAddress: '0xa085edaf9e9688611d5390046ef28f206dfc1dfe',
    tokenDecimals: 18,
    exchangeAddress: '0xf97f9bcc3cf280106944faa3c597747c08c9ea1b'
  },
  {
    symbol: 'SPAZ',
    name: 'SWAPCOINZ',
    tokenAddress: '0x8f9bfe5b6a5c3fea8c64ad41a5cf6f60ec4aa47c',
    tokenDecimals: 8,
    exchangeAddress: '0x8e42b307e3e9ec96bc96cc52a8762f77b24f9e43'
  },
  {
    symbol: 'SDK',
    name: 'SiDinar Koin',
    tokenAddress: '0xc26b2a2003bb8e907f527f47d92c410c4902510b',
    tokenDecimals: 18,
    exchangeAddress: '0xe3a837e3cda3e911dd7a2bdf5bb9406fd2f92735'
  },
  {
    symbol: 'MIA',
    name: 'Miasma',
    tokenAddress: '0xa52d617149ba4dd280a1d76fe3821c4547a382c9',
    tokenDecimals: 18,
    exchangeAddress: '0xcbc7947bdd2b5c8ca363cee2f02ad17f523b5dde'
  },
  {
    symbol: 'NLYA',
    name: 'Nollya Coin',
    tokenAddress: '0xcee4019fd41ecdc8bae9efdd20510f4b6faa6197',
    tokenDecimals: 18,
    exchangeAddress: '0x8f4283718db176d39e2440f78a2cedb3f1cb4c18'
  },
  {
    symbol: 'PTON',
    name: 'Foresting Token',
    tokenAddress: '0x4946583c5b86e01ccd30c71a05617d06e3e73060',
    tokenDecimals: 18,
    exchangeAddress: '0x15cf6addebb4091109a17e26edfd361210017eb8'
  },
  {
    symbol: 'IBST',
    name: 'Inbest Token',
    tokenAddress: '0x34f49e2ea4fb9b80714f8776932528a79c39de28',
    tokenDecimals: 18,
    exchangeAddress: '0x4b6738e3c7ced43baa232b447a312255c70f52ca'
  },
  {
    symbol: 'AFRID',
    name: 'AFRIDOLLAR',
    tokenAddress: '0x4515dfbf9366369ed8d8bc8f4fc5567b550502f4',
    tokenDecimals: 16,
    exchangeAddress: '0x944994da02facbc992692ea2cd803ffc01e1f40a'
  },
  {
    symbol: 'USDT',
    name: 'V I Coin',
    tokenAddress: '0x3d4d135ed39f23024d93cb2169cfee00fc2428ed',
    tokenDecimals: 18,
    exchangeAddress: '0x1e57692c9498c48c3c24e7df6c19c8210a588e76'
  },
  {
    symbol: 'EMS',
    name: 'Ethereum Message Search',
    tokenAddress: '0x17e6616c45d267bc20a9892b58a01621c592b72d',
    tokenDecimals: 18,
    exchangeAddress: '0x4a636f6e9f7c5c6d9f3cf7fa77479eecef8e8aff'
  },
  {
    symbol: 'CLEAN',
    name: 'Housekeeping Coin',
    tokenAddress: '0x4cc888882eb5bea6e8790db749b558ab38ddcdb6',
    tokenDecimals: 18,
    exchangeAddress: '0x4238d97f044ec7b36d517fb695c612d8d2259bb0'
  },
  {
    symbol: 'TRUE',
    name: 'TRUE Token',
    tokenAddress: '0xa4d17ab1ee0efdd23edc2869e7ba96b89eecf9ab',
    tokenDecimals: 18,
    exchangeAddress: '0x9569e4064bcf03cae9e10c2c7184410374d6cb71'
  },
  {
    symbol: 'TRUE',
    name: 'TrueChain',
    tokenAddress: '0xa8bdc8882987a3ed83d8030f08d64479f1eff731',
    tokenDecimals: 8,
    exchangeAddress: '0xd1f6a67f84d9e1f88e4c92ec68302f91b7509f0a'
  },
  {
    symbol: 'TCOIN',
    name: 'TRUECOIN',
    tokenAddress: '0xabb77f5c1e1c61adc3666b62dc614e64c584be6b',
    tokenDecimals: 8,
    exchangeAddress: '0x9aadd8a56af4e3f799a7e27b8d5b02633448e00b'
  },
  {
    symbol: 'BOXX',
    name: 'Boxx',
    tokenAddress: '0x780116d91e5592e58a3b3c76a351571b39abcec6',
    tokenDecimals: 15,
    exchangeAddress: '0xc8b548300516dd785b07100f961c94a2fa2b05e3'
  },
  {
    symbol: 'DAI',
    name: 'DAI',
    tokenAddress: '0x33fa33aec853b3b072a8b54ceb0dd7f722dd5ec5',
    tokenDecimals: 1,
    exchangeAddress: '0xe5fb1b277f93c85646d9b30d120f082a26dcd034'
  },
  {
    symbol: 'USDB',
    name: 'Bancor USD Token',
    tokenAddress: '0x309627af60f0926daa6041b8279484312f2bf060',
    tokenDecimals: 18,
    exchangeAddress: '0x7d03c8e1232cc2e796dead761c12ca3c68506972'
  },
  {
    symbol: 'CRPT',
    name: 'CrypteriumToken',
    tokenAddress: '0x80a7e048f37a50500351c204cb407766fa3bae7f',
    tokenDecimals: 18,
    exchangeAddress: '0x5e577a6649c2244ab4a229ccd6180fcaf1b364ee'
  },
  {
    symbol: 'DAI',
    name: 'Dai Stablecoin v1.0',
    tokenAddress: '0x60ff8aac1bbc42194045772186c7d1ddcf63dd36',
    tokenDecimals: 1,
    exchangeAddress: '0x03698174671cadde2a0a8540b06d625230ed8591'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x1c6c712b1f4a7c263b1dbd8f97fb447c945d3b9a',
    tokenDecimals: 18,
    exchangeAddress: '0xf1499cb47a70633d338aef8641ee91448e653d5f'
  },
  {
    symbol: 'TRUE',
    name: 'True Chain',
    tokenAddress: '0xa9b9419fe36004808ab80a3a2b1b1b35e48fedd8',
    tokenDecimals: 18,
    exchangeAddress: '0x97f521d25fd00d5af0b21c3004f2260edfef22f0'
  },
  {
    symbol: 'RDV',
    name: 'Rendezvous',
    tokenAddress: '0xd967d9f941cd316ab238d3ee761f80b7caec7819',
    tokenDecimals: 18,
    exchangeAddress: '0x9d64a2d95b66a848e53cb78dec407146037bb073'
  },
  {
    symbol: 'GOOGA',
    name: 'Googlier Aluminium',
    tokenAddress: '0xbfdaddb93178a4efc99e136891ff44fb98c1f62e',
    tokenDecimals: 18,
    exchangeAddress: '0x55496c666781d80968e4b77fae352ba2c1efc2aa'
  },
  {
    symbol: 'STRX',
    name: 'Streamix',
    tokenAddress: '0xa9d24ec1d08856632ed1847f43760e66bcb91ca7',
    tokenDecimals: 8,
    exchangeAddress: '0xe5ee802a6e6ea94a3b2299874da619a916d396a2'
  },
  {
    symbol: 'IDX',
    name: 'Indonesian eXchange',
    tokenAddress: '0x8427760a577f7f2f91a7ba7a3c7826c92a950727',
    tokenDecimals: 8,
    exchangeAddress: '0x4479bde70aca91e18ee437f1289d096de8180b54'
  },
  {
    symbol: 'BGT',
    name: 'Beneficent Governance Token',
    tokenAddress: '0x66a60d14c73dccd1626a909559a83525612700bc',
    tokenDecimals: 18,
    exchangeAddress: '0xd5b89e446ceebccb98393ebe5691c67595a7840c'
  },
  {
    symbol: 'GOT',
    name: 'GameofThrones token ',
    tokenAddress: '0xca6fc1469b7af2bfccb5cc34b1849bca267f60fe',
    tokenDecimals: 18,
    exchangeAddress: '0xac7a4517114a8f6fae2013d9a48f0d1f8706d2af'
  },
  {
    symbol: 'HZ',
    name: 'Hertz',
    tokenAddress: '0x6a4b6316d1d03d2f2b3a0294502f8faf0f38ca14',
    tokenDecimals: 18,
    exchangeAddress: '0x7e7dc04740604aa27d389ceac9de5bd8c653e612'
  },
  {
    symbol: 'LYM',
    name: 'Lympo tokens',
    tokenAddress: '0x57ad67acf9bf015e4820fbd66ea1a21bed8852ec',
    tokenDecimals: 18,
    exchangeAddress: '0x313dd6a3ece77cee97e85083a8c73a07adb0cd64'
  },
  {
    symbol: 'VID',
    name: 'VID',
    tokenAddress: '0x12d7d45a4b9693b312ede375074a48b9b9f2b6ec',
    tokenDecimals: 5,
    exchangeAddress: '0x02828ddcd39727f2330f702b16cbd24988a2f68d'
  },
  {
    symbol: 'SND',
    name: 'SND Token 1.0',
    tokenAddress: '0xf333b2ace992ac2bbd8798bf57bc65a06184afba',
    tokenDecimals: 0,
    exchangeAddress: '0x534be57a99a4aa5bed39e1dd432fcf187766b655'
  },
  {
    symbol: 'PICTET',
    name: 'PICTET',
    tokenAddress: '0xb95fd9f07f81b2a7d190146f2207e44bad4ed6b9',
    tokenDecimals: 18,
    exchangeAddress: '0x1d0f47b8b9282a07bb9afcc68a9432db647f9711'
  },
  {
    symbol: 'PNT',
    name: 'Painite',
    tokenAddress: '0x1867dbd098bb328a8354682c17c485ef15d12072',
    tokenDecimals: 18,
    exchangeAddress: '0xec4c9f15fb34c9f6c69c300a27345631cb17a47b'
  },
  {
    symbol: 'ZAR',
    name: 'South African Rand',
    tokenAddress: '0x3777487d437b51f2d4c835592b72279da150120c',
    tokenDecimals: 2,
    exchangeAddress: '0x9bc7622e90a8652d27c5e46b00e7c591ba41ff45'
  },
  {
    symbol: 'MMT',
    name: 'MiliTrumNetworkToken',
    tokenAddress: '0xcabaa659f92ba19cad021a8d8cf7a212971ba7ce',
    tokenDecimals: 18,
    exchangeAddress: '0x29189d726c44cde429b5999e2376b9a8e5c276ea'
  },
  {
    symbol: 'REEF',
    name: 'EtherReefer',
    tokenAddress: '0x282a6e0ecf37f15680b1f0f6f506ad4d0b756999',
    tokenDecimals: 18,
    exchangeAddress: '0x492229a7f9d415c1e9328754f1a6e8f59dbb2e1a'
  },
  {
    symbol: 'APX',
    name: 'APEX',
    tokenAddress: '0x1239562abe89ff62016ae23d4e6eef12b915295c',
    tokenDecimals: 18,
    exchangeAddress: '0x81dad92a06b96e24800d74cf112966dc941f994f'
  },
  {
    symbol: 'VAP',
    name: 'Vaporware',
    tokenAddress: '0x9ea085bc45639372e7389e5c5069a86cac5a03bf',
    tokenDecimals: 18,
    exchangeAddress: '0xfaec433ed8414deeb05fe2bdbfe39105bfd97db0'
  },
  {
    symbol: 'DOOM',
    name: 'Doom',
    tokenAddress: '0xa4f9cec920ca520a7feb2c3a63050e08967bc111',
    tokenDecimals: 4,
    exchangeAddress: '0x358570eaf20110a4f28b8000145afcfc441aa494'
  },
  {
    symbol: 'CBC',
    name: 'CraftBeerCoin',
    tokenAddress: '0xb8beb497ff26b57e4c13295f93a42b6a049826f4',
    tokenDecimals: 18,
    exchangeAddress: '0xe1428481be5951f1e817bde36bd8c4c69727b4cf'
  },
  {
    symbol: 'EJJ',
    name: 'Ejiangjun',
    tokenAddress: '0x9113beba84529b43e672e7842054f3e0f0ad0936',
    tokenDecimals: 18,
    exchangeAddress: '0xe0d81693cb035c4fa7a0cc605d5ed81d0f3a6220'
  },
  {
    symbol: 'MedK',
    name: 'MedK',
    tokenAddress: '0xfa109de90a24b3bd5af459c376ebafa75b7c1c5b',
    tokenDecimals: 18,
    exchangeAddress: '0xdf129e41fca8b2ed75f5b1b17ebd1b4f2f173dac'
  },
  {
    symbol: 'CONST',
    name: 'Constant',
    tokenAddress: '0x4983f767b1bc44328e434729ddabea0a064ca1ac',
    tokenDecimals: 2,
    exchangeAddress: '0x1273acb6447f024e71e9e1c37f20b269adfafa18'
  },
  {
    symbol: 'RBC',
    name: 'Rambocoin',
    tokenAddress: '0x398e616b74832f26fb342913e0d81fffef70fb71',
    tokenDecimals: 18,
    exchangeAddress: '0xae9e3c3994bb91bdcf567ee4dd485a175c972384'
  },
  {
    symbol: 'Dai',
    name: 'Dai',
    tokenAddress: '0x897ae96d0b8759ba2c56372bd6316d8dd62e7365',
    tokenDecimals: 18,
    exchangeAddress: '0x2ea789f6097426e6bf8788455d38e185ec99bc3b'
  },
  {
    symbol: 'BRY',
    name: 'Attebery',
    tokenAddress: '0x120b06f17392a9ea9ef848de35eb90f6ad6daa63',
    tokenDecimals: 0,
    exchangeAddress: '0x9155da5b0a3c7a5b1514473a151a0e4cc5c63efb'
  },
  {
    symbol: 'EXMR',
    name: 'EXMR',
    tokenAddress: '0xc98e0639c6d2ec037a615341c369666b110e80e5',
    tokenDecimals: 8,
    exchangeAddress: '0x84b73c739a95878fa85478cf0578f63257f8bc15'
  },
  {
    symbol: 'MDX',
    name: 'MEDIEX',
    tokenAddress: '0xe4ffee3b33360e21ea2aec37a39901cb720eb84c',
    tokenDecimals: 10,
    exchangeAddress: '0xdfa28f5458a430aa4025880227ee86ffd1c81764'
  },
  {
    symbol: 'EDX',
    name: 'Edex',
    tokenAddress: '0xbf8d8f1242b95dfbae532af6b0f4463905415cc1',
    tokenDecimals: 18,
    exchangeAddress: '0xef9b6abd2aa24e49aae1e1437f68d99ccd2af071'
  },
  {
    symbol: 'ETW',
    name: 'Etherwave',
    tokenAddress: '0x14f3f6dbbb919ddabb8d7f279e9b97e6bbfeede6',
    tokenDecimals: 18,
    exchangeAddress: '0xc9908d255ca0d68aec0dcfda41ab127bfcde654b'
  },
  {
    symbol: 'MOTH',
    name: 'Crypto MOTH',
    tokenAddress: '0x935133f60581f244d34e03f0e28ebd956f819bdc',
    tokenDecimals: 8,
    exchangeAddress: '0x998cd059af2a09319181df7e27dedd844d623b32'
  },
  {
    symbol: 'XIO',
    name: 'XIO',
    tokenAddress: '0x0518e5aafbcf2f05731803725d5c2d68e454033c',
    tokenDecimals: 18,
    exchangeAddress: '0x2be44f6280b1fc145c62e66d6f8f84df9fb4b8f6'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x55496c666781d80968e4b77fae352ba2c1efc2aa',
    tokenDecimals: 18,
    exchangeAddress: '0xa33db7a5e67c8876558b81a9252ad1da1a8566aa'
  },
  {
    symbol: 'dZAR',
    name: 'Digital Rand',
    tokenAddress: '0x45d918e17e30872d7c1ccbaab4a0813ed0360e46',
    tokenDecimals: 6,
    exchangeAddress: '0x84bbe25610885f928c04aefb920d585b0cdd6e04'
  },
  {
    symbol: 'MATH',
    name: 'Andrew Yang Token',
    tokenAddress: '0xfa57cea2f244c607e2ba7ba258af7cb3d0ebd64f',
    tokenDecimals: 2,
    exchangeAddress: '0x3991220bb3753057f8382930bec361df5dce0795'
  },
  {
    symbol: 'BCT',
    name: 'DESKTOP-RQHA0VM',
    tokenAddress: '0x9642c1b4f9e2d1849a1ab7820f9c18c5cd25fc54',
    tokenDecimals: 18,
    exchangeAddress: '0xcef023f6fe4d08b7069aa74c9acb654ff82c3556'
  },
  {
    symbol: 'KLT',
    name: 'Kringle Liquidity Token',
    tokenAddress: '0xf0e2a09ce1ecefe248bd1ee9ed26afafc23a4869',
    tokenDecimals: 18,
    exchangeAddress: '0xa7ad609a59e09d32dcc8160d91fc46391b6ef07d'
  },
  {
    symbol: 'LXT',
    name: 'LiteXToken',
    tokenAddress: '0xbc46d9961a3932f7d6b64abfdec80c1816c4b835',
    tokenDecimals: 18,
    exchangeAddress: '0xba17b783ee1c1f3d387da2164afe1cae2f375536'
  },
  {
    symbol: 'SXP',
    name: 'Swipe',
    tokenAddress: '0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9',
    tokenDecimals: 18,
    exchangeAddress: '0x03c341408d0edf502e702b9b24ec305819357c56'
  },
  {
    symbol: 'CLR',
    name: 'Color Coin',
    tokenAddress: '0x2396fbc0e2e3ae4b7206ebdb5706e2a5920349cb',
    tokenDecimals: 18,
    exchangeAddress: '0x5424bdf67d6a2327a2edc384bf9b33efc0ed9c8e'
  },
  {
    symbol: 'GEN',
    name: 'Genesis',
    tokenAddress: '0x334425ef9a828e31ff27e0754a3198edb714c57b',
    tokenDecimals: 8,
    exchangeAddress: '0x8b1a51d4b1bfbc70f35daa87850a8c903116dc9b'
  },
  {
    symbol: 'TOU',
    name: 'TOURISTOKEN',
    tokenAddress: '0x1e29ca8c874b4dff828297cc2e9856819eea0933',
    tokenDecimals: 18,
    exchangeAddress: '0xf7554f5ea1034dbfd1782d917dd008ac1e1bc6fc'
  },
  {
    symbol: 'WITH',
    name: 'WITH coin',
    tokenAddress: '0x2e954cfc5cb4f089f5f3d7331449861249106d85',
    tokenDecimals: 6,
    exchangeAddress: '0x933f9059bd09d16cf70ba86482a459fb5f3f103b'
  },
  {
    symbol: 'AML19',
    name: 'Alex Masmej Loan 19',
    tokenAddress: '0x234922c6b8e6bae355435d22dfad49ae8f5fadcf',
    tokenDecimals: 18,
    exchangeAddress: '0x97cf746feb3752e4e3ff6b30f323107890362389'
  },
  {
    symbol: 'GET',
    name: 'GET',
    tokenAddress: '0x8a854288a5976036a725879164ca3e91d30c6a1b',
    tokenDecimals: 18,
    exchangeAddress: '0x49e1c66e6def433573fa8feedd3de38dbedd5fd6'
  },
  {
    symbol: 'CWN',
    name: 'CryptoWorldNews Token',
    tokenAddress: '0xab7b6f7beae1f03a6b2a7f94d1ac332fc9be3410',
    tokenDecimals: 18,
    exchangeAddress: '0xa913658619c9b66e2c835aa3b0a243cbb4e67518'
  },
  {
    symbol: 'REM',
    name: 'REMME token',
    tokenAddress: '0x83984d6142934bb535793a82adb0a46ef0f66b6d',
    tokenDecimals: 4,
    exchangeAddress: '0x9e91c3220fe5c91ba125d27b399c64da48d59621'
  },
  {
    symbol: 'TFD',
    name: 'TE-FOOD',
    tokenAddress: '0xe5f166c0d8872b68790061317bb6cca04582c912',
    tokenDecimals: 18,
    exchangeAddress: '0x746b7d5c19b2cdbb14e24a3e438763083253f59e'
  },
  {
    symbol: 'Hth',
    name: 'Heath',
    tokenAddress: '0xa7211022b34a84905dbc54bcf11d9d395ca4155f',
    tokenDecimals: 8,
    exchangeAddress: '0xbcbfb5fc2e5a6b30202f4abb98e93c2cf1bd94eb'
  },
  {
    symbol: 'COD',
    name: 'Colendi Token',
    tokenAddress: '0xf2ccd161f06d88479b50d4bedbad9992dbdaffdd',
    tokenDecimals: 18,
    exchangeAddress: '0x3db809ec27b89e35fcd506db7f95cd2e6864eeca'
  },
  {
    symbol: 'INNBCL',
    name: 'InnovativeBioresearchClassic',
    tokenAddress: '0x8cc3e2bdc17682c622eb789eda23fbd6988c84da',
    tokenDecimals: 10,
    exchangeAddress: '0xf553a86dbd2e3ca2230e299ecacfe86d5651c0c9'
  },
  {
    symbol: 'EvolV',
    name: 'Evolution Token',
    tokenAddress: '0x12528042299e0fca4d44ae4f42359319b8901fa2',
    tokenDecimals: 0,
    exchangeAddress: '0x474005e4ae8d6e89e562741a60c75ebd63e85494'
  },
  {
    symbol: 'GWP',
    name: 'Green World Project',
    tokenAddress: '0x4ffe33e525042cc84c503db5842ecda280f4a805',
    tokenDecimals: 18,
    exchangeAddress: '0x0b8a1d021f27a83b4431d72d2e4ea3f633d7bbf9'
  },
  {
    symbol: 'LIZA',
    name: 'LIZA Token',
    tokenAddress: '0x3b7712b395bc5f7f7fb6976ea4827377e77adab6',
    tokenDecimals: 18,
    exchangeAddress: '0x758f102080eabfdf930a089b1ccf62a03b25a02b'
  },
  {
    symbol: 'WPAY',
    name: 'Wrapped TenX Pay Token',
    tokenAddress: '0x2ca06986040d18d80acd34d0877e66f8e15f12fc',
    tokenDecimals: 18,
    exchangeAddress: '0xde158c2d2000084c502a873a76c4b9a41277d5f5'
  },
  {
    symbol: 'CRWN',
    name: 'CRWNCOIN',
    tokenAddress: '0xba7c7c3e91445f6bd6424c7f3945c3be73fd280d',
    tokenDecimals: 8,
    exchangeAddress: '0xf79280013d4d683de13bc06f15def23ae92759f4'
  },
  {
    symbol: 'BTCN',
    name: 'BITCOIN NEW',
    tokenAddress: '0xc631afea17f2f8520e589a144d116064434f25bc',
    tokenDecimals: 18,
    exchangeAddress: '0x42f7c0cf3ac5b903e62aa5945ee32b0df9b65aa9'
  },
  {
    symbol: 'BITC',
    name: 'BITCLAUDIO',
    tokenAddress: '0x4695e380fec31947b3fe176abeb37ac09d49b9a0',
    tokenDecimals: 18,
    exchangeAddress: '0x02514d5bec320a92db7346672957e93bcf6d0e26'
  },
  {
    symbol: 'NOAH',
    name: 'NOAHCOIN',
    tokenAddress: '0x58a4884182d9e835597f405e5f258290e46ae7c2',
    tokenDecimals: 18,
    exchangeAddress: '0x530f026060aadaa55ae1a0eddef4586093fd3530'
  },
  {
    symbol: 'MRR',
    name: 'Master Resell Rights',
    tokenAddress: '0xe5101f5707f008b1d282b79fb8e1d3fb83cc78ec',
    tokenDecimals: 18,
    exchangeAddress: '0x660e5bc49ff6ebe2e73f33863cd0d11859ab7780'
  },
  {
    symbol: 'NOX',
    name: 'Nitro',
    tokenAddress: '0xec46f8207d766012454c408de210bcbc2243e71c',
    tokenDecimals: 18,
    exchangeAddress: '0xfe764894529eddf77ce0e6f83acf56f50e1e7a31'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x4f30e682d0541eac91748bd38a648d759261b8f3',
    tokenDecimals: 18,
    exchangeAddress: '0x0359465d35deb33a7fa5a74322eb73ebd94f8452'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0xfe764894529eddf77ce0e6f83acf56f50e1e7a31',
    tokenDecimals: 18,
    exchangeAddress: '0xaf9fd25098bd469a8369c116db47a776de775ca8'
  },
  {
    symbol: 'ZCC',
    name: 'ZeroCarbon',
    tokenAddress: '0x6737fe98389ffb356f64ebb726aa1a92390d94fb',
    tokenDecimals: 18,
    exchangeAddress: '0x0ba1183587f90e1892d60747e0017219c19972f1'
  },
  {
    symbol: 'SGC',
    name: 'SignalCoin',
    tokenAddress: '0x773dcefa15b47e77c7955e5d0383bafecd672734',
    tokenDecimals: 6,
    exchangeAddress: '0x35c3cf8b4075d36d6cd9cc72a24eb5550d11faf3'
  },
  {
    symbol: 'NXM',
    name: 'NXM',
    tokenAddress: '0xd7c49cee7e9188cca6ad8ff264c1da2e69d4cf3b',
    tokenDecimals: 18,
    exchangeAddress: '0xa3f4965e2a649afb784349354acc16f3b35dfb44'
  },
  {
    symbol: 'EVEN',
    name: 'EVEN',
    tokenAddress: '0x2505a3c035291c05cb78cb43cff39564637e1dd9',
    tokenDecimals: 18,
    exchangeAddress: '0xa4ad0dd3e25c35b43b94cfabac08d3518f3623a5'
  },
  {
    symbol: 'POV',
    name: 'POV Crypto',
    tokenAddress: '0xadd27120b57d9bd0cea29876168a01e3e904131e',
    tokenDecimals: 0,
    exchangeAddress: '0xdec4602170d0aea68e1530f0d4c099ac3c0d6c66'
  },
  {
    symbol: 'XIO',
    name: 'XIO Network',
    tokenAddress: '0x0f7f961648ae6db43c75663ac7e5414eb79b5704',
    tokenDecimals: 18,
    exchangeAddress: '0x7b6e5278a14d5318571d65aced036d09c998c707'
  },
  {
    symbol: 'READ',
    name: '阅读币',
    tokenAddress: '0x13d0bf45e5f319fa0b58900807049f23cae7c40d',
    tokenDecimals: 8,
    exchangeAddress: '0xa4e6bfb20c4fca40bfc0990515c581b69ce47c19'
  },
  {
    symbol: '4XB',
    name: '4xBit',
    tokenAddress: '0xa3ac41fde5f3a569fa79e81ffe6734ee8097ce9d',
    tokenDecimals: 8,
    exchangeAddress: '0x9d443777e79fd3945810fbce150e17527a328052'
  },
  {
    symbol: 'WBTC',
    name: 'WildBitsTakeControl',
    tokenAddress: '0x88c7385a403008b63dc028ba5acbad3edb1d1fa9',
    tokenDecimals: 18,
    exchangeAddress: '0xf3ca03229b9b510952ad7fb277350fdf0079401f'
  },
  {
    symbol: 'SLCR',
    name: 'Slicer',
    tokenAddress: '0xf6e26fd7f9918dd602ff90f7cda96da963d30995',
    tokenDecimals: 18,
    exchangeAddress: '0x07ae96fb605da9b440d76808e98ea999c2bcef2c'
  },
  {
    symbol: 'INFER',
    name: 'INFERNO',
    tokenAddress: '0x3fb907e0d6247accc6374d99604ff1468e110bc3',
    tokenDecimals: 0,
    exchangeAddress: '0xcb4b1ff02e558210d95676bc8fa269f07bef4fab'
  },
  {
    symbol: 'YKN',
    name: 'Yarek Kurgan Token',
    tokenAddress: '0x2eeca16bf8d052da970ac0f43aa6bf5bd019f397',
    tokenDecimals: 4,
    exchangeAddress: '0x34b8b200c0351cb38f16c738a3e8e949ea816359'
  },
  {
    symbol: 'RJNI',
    name: 'Rajni',
    tokenAddress: '0xbb63e3aff15b9061cb036da43ed592c5148b5108',
    tokenDecimals: 18,
    exchangeAddress: '0xbfb397615b0763536ae157f03cfad726b936c35c'
  },
  {
    symbol: 'SRM',
    name: 'SOLARMINING',
    tokenAddress: '0x681724368d052a4e29fc226ed5085082d74fe716',
    tokenDecimals: 18,
    exchangeAddress: '0x395b7c2fdf41ec7bba0e04c20e23feb0aa13b87d'
  },
  {
    symbol: 'LMY',
    name: 'Lunch Money',
    tokenAddress: '0x66fd97a78d8854fec445cd1c80a07896b0b4851f',
    tokenDecimals: 18,
    exchangeAddress: '0xece1d9e03ad03e89a9b0944776551e5b6b23578e'
  },
  {
    symbol: 'SLRM',
    name: 'Solareum',
    tokenAddress: '0x56ee8c9bd1d445a3324ad83e86d8be309db8f85d',
    tokenDecimals: 18,
    exchangeAddress: '0x87a8cd60a542800b30da32ed3fb5e6278a7a5a95'
  },
  {
    symbol: 'PKG',
    name: 'PKG Token',
    tokenAddress: '0x02f2d4a04e6e01ace88bd2cd632875543b2ef577',
    tokenDecimals: 18,
    exchangeAddress: '0x30f231d765e6f1037947168602b5cb8ff7bc270f'
  },
  {
    symbol: 'PRTKN',
    name: 'Pirate Token',
    tokenAddress: '0x4136dd480327e24e0908d829e03b08559e7d9b8d',
    tokenDecimals: 18,
    exchangeAddress: '0xe561dc75a53693fa0bc94931d2f2d20cb5b66051'
  },
  {
    symbol: 'V2X',
    name: 'Vitalik2X',
    tokenAddress: '0xb016eb4bc7146cfea3af2269b4da1a0e7e85745b',
    tokenDecimals: 18,
    exchangeAddress: '0x6b50481e454eed5eabe75fd89a65bc94a0485ec5'
  },
  {
    symbol: 'BZRX',
    name: 'bZx Protocol Token',
    tokenAddress: '0x1c74cff0376fb4031cd7492cd6db2d66c3f2c6b9',
    tokenDecimals: 18,
    exchangeAddress: '0xcacdc342944b812e07296206ef654b8f49046810'
  },
  {
    symbol: 'CBIX7',
    name: 'CBI Index 7',
    tokenAddress: '0xcf8f9555d55ce45a3a33a81d6ef99a2a2e71dee2',
    tokenDecimals: 18,
    exchangeAddress: '0x93a8515d674c3d3235beea0de7ae3099aa34b1a5'
  },
  {
    symbol: 'BTCP',
    name: 'BitcoinPro',
    tokenAddress: '0x723cbfc05e2cfcc71d3d89e770d32801a5eef5ab',
    tokenDecimals: 8,
    exchangeAddress: '0x2116fa15aed105a3010c1f3331c006cfbbe57bb3'
  },
  {
    symbol: 'LYM',
    name: 'Lympo tokens',
    tokenAddress: '0xc690f7c7fcffa6a82b79fab7508c466fefdfc8c5',
    tokenDecimals: 18,
    exchangeAddress: '0xb54aff4ad03359fef31b9a036046b3a30144e1c4'
  },
  {
    symbol: 'FKX',
    name: 'Knoxstertoken',
    tokenAddress: '0x009e864923b49263c7f10d19b7f8ab7a9a5aad33',
    tokenDecimals: 18,
    exchangeAddress: '0x91aa9d58d0672e3e4b0dad9abfe41c8849bab571'
  },
  {
    symbol: 'SKT',
    name: 'SpeedKingToken',
    tokenAddress: '0xa7c8d7a1c894e51dbb7c680b5b1dbdc845bfbdab',
    tokenDecimals: 5,
    exchangeAddress: '0x202d7c9046726cd2b5d643577172d5f10f4d5236'
  },
  {
    symbol: 'BTCLT',
    name: 'Bitcoin Liquidity Token',
    tokenAddress: '0x2c4ce444252fbeb762d789d6457d2bd530e292f6',
    tokenDecimals: 8,
    exchangeAddress: '0x19addf9565d1a0a0829e6a7cf965f3c43dad934e'
  },
  {
    symbol: 'GROSH',
    name: 'Grosh',
    tokenAddress: '0xecd8e185782a845bde1bf50f201f250f22fc4213',
    tokenDecimals: 2,
    exchangeAddress: '0x401d90724c411d3c1d3ba097038d88025232cb6f'
  },
  {
    symbol: 'DTR',
    name: 'Dynamic Trading Rights',
    tokenAddress: '0xd234bf2410a0009df9c3c63b610c09738f18ccd7',
    tokenDecimals: 8,
    exchangeAddress: '0x63162be37f0cc6581ebb9403a9d565634c20ba2f'
  },
  {
    symbol: 'BONUS',
    name: 'BitBonus',
    tokenAddress: '0x030c32c1190cbf077e5ee67ed19572c558e43ae4',
    tokenDecimals: 8,
    exchangeAddress: '0x616fcc7eb1511d86330bbef2ce8f3442366af494'
  },
  {
    symbol: 'BTCM',
    name: 'BitcoinMonkey',
    tokenAddress: '0x04c7cd246330288a84d2788e8a323cc41206c2eb',
    tokenDecimals: 18,
    exchangeAddress: '0xc730be0082a8b8cd217660ba7a22353434faafc3'
  },
  {
    symbol: 'KRL',
    name: 'Kryll',
    tokenAddress: '0x464ebe77c293e473b48cfe96ddcf88fcf7bfdac0',
    tokenDecimals: 18,
    exchangeAddress: '0xbf8b8d65803c5bdf45c42310a015a4a44e258775'
  },
  {
    symbol: 'ANEX',
    name: 'AnEx',
    tokenAddress: '0xaf93eb3dc2236c32a06d27b1c9bf90ad26c081a7',
    tokenDecimals: 6,
    exchangeAddress: '0xf8d0ceca4070602ba660f744f9ea3dcd3b53a7e1'
  },
  {
    symbol: 'SHOCK',
    name: 'AfterShock V2',
    tokenAddress: '0x62d69910f45b839903effd217559307aec307076',
    tokenDecimals: 18,
    exchangeAddress: '0xd1d038818b0c4d7841e464c806db1fcdb6d6ac5d'
  },
  {
    symbol: 'KAVA',
    name: 'ALAN Protokol',
    tokenAddress: '0x01e9079f38a1586e58218249a664d352494d28aa',
    tokenDecimals: 6,
    exchangeAddress: '0xe67da603c0ce0cc2a2a97b6c7d3bae6ce8b3bb9d'
  },
  {
    symbol: 'KYND',
    name: 'Kyndness',
    tokenAddress: '0x3557cf904f5384d79885bcb93af2aff94c36d8c1',
    tokenDecimals: 8,
    exchangeAddress: '0xda0ac4e95f4cf2ab58849ad7cfa86bd3c7956d17'
  },
  {
    symbol: 'SWM',
    name: 'SWARM',
    tokenAddress: '0x3505f494c3f0fed0b594e01fa41dd3967645ca39',
    tokenDecimals: 18,
    exchangeAddress: '0xbb96bcf62f01d886950b8ebe2a658827ee0acefd'
  },
  {
    symbol: 'PP',
    name: 'Produce Pay',
    tokenAddress: '0xb628919a5456fd746a6b7a9f1003040ca63e6d45',
    tokenDecimals: 18,
    exchangeAddress: '0x9133cdfafb335981434f1533d07b8d2e154f5baa'
  },
  {
    symbol: 'SNOIL',
    name: 'Synthetic Oil Coin',
    tokenAddress: '0xc3f1ea9afe9605c6ab52524159aef389ea7af460',
    tokenDecimals: 18,
    exchangeAddress: '0x7ce151cf7b35feea29f93ae3edca486f9421ef6a'
  },
  {
    symbol: 'SCPT',
    name: 'ScepterCash',
    tokenAddress: '0x790304309388c417ff8aab454b8d27e79cad1df5',
    tokenDecimals: 18,
    exchangeAddress: '0x589b2e05ac188dbb9f83c0ff315f2a9d26bb366c'
  },
  {
    symbol: 'GVT',
    name: 'Givet',
    tokenAddress: '0xfbb9cb6ac0cfe4188fbd6b5f95e6fd190567aea5',
    tokenDecimals: 18,
    exchangeAddress: '0xd9c21f5490835de2f4f593c4f61f80bfd7298917'
  },
  {
    symbol: 'MBDS',
    name: 'MBDS',
    tokenAddress: '0x126e75b128b7733cd2a1db7b9a7b569c31ca964f',
    tokenDecimals: 2,
    exchangeAddress: '0x9f9d8c03bdecfe9d480c1cbb8f80ebfee23f1a08'
  },
  {
    symbol: 'TMT',
    name: 'TBC Mart Token',
    tokenAddress: '0x6f02055e3541dd74a1abd8692116c22ffafadc5d',
    tokenDecimals: 18,
    exchangeAddress: '0x6b214b2cd5e4f6bf31ec0e49449935a48d202f91'
  },
  {
    symbol: 'WWT',
    name: 'WORLD WIDE TRADE',
    tokenAddress: '0x512630dc263fd4c71dbe81fec68cf61156d79e80',
    tokenDecimals: 18,
    exchangeAddress: '0x3f9ccfd1240bf75c4e833f3b08d77ee6fcb0fac3'
  },
  {
    symbol: 'BGST',
    name: 'Bushwick Generator SpaceTime',
    tokenAddress: '0x07f9b3ba425cdb68f96147c7cd6a29dcd02a4b51',
    tokenDecimals: 18,
    exchangeAddress: '0xe95d34e5e511228e3cf77bddd89c5e5a7d7dd02a'
  },
  {
    symbol: 'ONE',
    name: 'Menlo One',
    tokenAddress: '0x4d807509aece24c0fa5a102b6a3b059ec6e14392',
    tokenDecimals: 18,
    exchangeAddress: '0x46cf303f44cc646f941839b81434d8f3246f380a'
  },
  {
    symbol: 'BTZ',
    name: 'Botz Token',
    tokenAddress: '0x55703726a2e82d0f9119d4f0fd3f50736ba18edb',
    tokenDecimals: 18,
    exchangeAddress: '0xb5749581043e1130a11597c8750bedefc12cf00a'
  },
  {
    symbol: 'ATD',
    name: 'Atidium',
    tokenAddress: '0xf69709c4c6f3f2b17978280dce8b7b7a2cbcba8b',
    tokenDecimals: 18,
    exchangeAddress: '0xaa78dae2dd8c18ce3cc25f50ffaf40069e93b6dc'
  },
  {
    symbol: 'FND',
    name: 'Insula',
    tokenAddress: '0xcb60d600160d005845ec999f64266d5608fd8943',
    tokenDecimals: 18,
    exchangeAddress: '0x892d5acc73bb1e1f54a5e340394e70a7ea8e5a1d'
  },
  {
    symbol: 'NCA',
    name: 'Nuclear',
    tokenAddress: '0x3c04ff86492ce16ccb306acb9226a1064cafad07',
    tokenDecimals: 6,
    exchangeAddress: '0x6f00ec2c8278871453e96487ba4cdecd8ff4d50d'
  },
  {
    symbol: 'ANIME',
    name: 'Animeyen',
    tokenAddress: '0xc36e2c02e64585c15794b8e25e826d50b15fd878',
    tokenDecimals: 8,
    exchangeAddress: '0x406bbdfdc82c535e704f274522b4d0ef0c94c949'
  },
  {
    symbol: 'UZS',
    name: 'Uzbek Som',
    tokenAddress: '0x3973b1efce763d0017028bfc3904a4c2185f2e20',
    tokenDecimals: 0,
    exchangeAddress: '0xb87a1981f959b21f2280e3c2f9fb0d750f63fe10'
  },
  {
    symbol: 'ZDC',
    name: 'Zodcoin',
    tokenAddress: '0x7a2810d3d859ed03ede523eb801a3b43b5e8979c',
    tokenDecimals: 18,
    exchangeAddress: '0x0eb1bbda4a33c8876f82de9f443da82c3fd33e07'
  },
  {
    symbol: 'GVT',
    name: 'Givet',
    tokenAddress: '0xf5d99b06a813231265b5786a48e58b1fee0baf84',
    tokenDecimals: 18,
    exchangeAddress: '0xe56545336a240ccfd682b5cc332f8abb31ffa9cf'
  },
  {
    symbol: 'ISLAUSDB',
    name: 'Insula Smart Relay Token',
    tokenAddress: '0x20e5745fc02d667d9a57dede8acb22b96e9ac45d',
    tokenDecimals: 18,
    exchangeAddress: '0x0d2feac0d6df561f7b8499bdea8c3fd7acec9585'
  },
  {
    symbol: 'ISLABNT',
    name: 'Insula Smart Relay Token',
    tokenAddress: '0x2b9c212884f731ea3a402617baf6adff7709dd7c',
    tokenDecimals: 18,
    exchangeAddress: '0x30de9aef2ed5e1a11db9579e5319e8da5262993e'
  },
  {
    symbol: 'YSC',
    name: 'YACHT.SOCIAL',
    tokenAddress: '0x627b9057549ce79ca1de9de5019ee5cfa1eadc86',
    tokenDecimals: 18,
    exchangeAddress: '0xfcfdd5a45a1d6f86c192a0cd0fba656020588e7e'
  },
  {
    symbol: 'ISLAUSDB',
    name: 'Insula Smart Relay Token',
    tokenAddress: '0x8f2250045cc366786b84ac65a66b394c48a85b0f',
    tokenDecimals: 18,
    exchangeAddress: '0x58195d6e6a4b721b09bf1300ac93561dd1d4fb5e'
  },
  {
    symbol: 'NBE',
    name: 'NUBEE',
    tokenAddress: '0xdff3d1347187a0a1f225707b710010b10e6f3084',
    tokenDecimals: 8,
    exchangeAddress: '0x6a1515816eb57b3924f1c2a9b53703b91b126b8b'
  },
  {
    symbol: 'IDN',
    name: 'Indonesian Project',
    tokenAddress: '0x70ec7702ada8530d8f7332f7f3700099553d772d',
    tokenDecimals: 8,
    exchangeAddress: '0x023d17f49c10d3042d03281faa7b68404d4e2390'
  },
  {
    symbol: 'EBATo',
    name: 'EBA',
    tokenAddress: '0x27fbdd15fb0820b50b9c3683ea628bb6ab9b2d70',
    tokenDecimals: 18,
    exchangeAddress: '0x494d82667c3ed3ac859cca94b1be65b0540ee3bb'
  },
  {
    symbol: 'CMME',
    name: 'CMMEToken',
    tokenAddress: '0x9f949124e2a23492005a9bb937acb29bda2cab9e',
    tokenDecimals: 8,
    exchangeAddress: '0x82fd596dac2619ece5732d767590183cbf877367'
  },
  {
    symbol: 'AFDLT',
    name: 'AfroDex Labs Token',
    tokenAddress: '0xd8a8843b0a5aba6b030e92b3f4d669fad8a5be50',
    tokenDecimals: 4,
    exchangeAddress: '0x6d1d56927144f38cc3d80bc20ccf15f0d703ac66'
  },
  {
    symbol: 'YLC',
    name: 'YoloCash',
    tokenAddress: '0x21d5678a62dfe63a47062469ebb2fac2817d8832',
    tokenDecimals: 8,
    exchangeAddress: '0x4a9862d0d1e12fa2c4577f57826edcd203a42e88'
  },
  {
    symbol: 'SIM',
    name: 'Simmitri',
    tokenAddress: '0x7528e3040376edd5db8263db2f5bd1bed91467fb',
    tokenDecimals: 18,
    exchangeAddress: '0x87919a0c49c14fcdbfc509774e9cf4df00ae276a'
  },
  {
    symbol: 'OFFER',
    name: 'Offer for Goods',
    tokenAddress: '0x51954e7045fc33413f5fe55d0bff4a7b71dba6c7',
    tokenDecimals: 18,
    exchangeAddress: '0xcff842ef3b3723592f82b5d71ca794298b95b6f4'
  },
  {
    symbol: 'GC',
    name: 'Gric Coin',
    tokenAddress: '0x720c2c93f5f9a6b82226e84095558b10f399b0fa',
    tokenDecimals: 18,
    exchangeAddress: '0x6ff224f433b1d6a79a4b4bea4bfa223c279f5b5e'
  },
  {
    symbol: 'INR',
    name: 'Indian Rupee',
    tokenAddress: '0xa51972f41daa0bde4b18a374459147bd3cdad8f0',
    tokenDecimals: 6,
    exchangeAddress: '0xd7a50a888af98b2ee9403c450a97b42b0d9b12f0'
  },
  {
    symbol: 'LUA',
    name: 'LUA',
    tokenAddress: '0x8b5b1ee2a9aa34c3f497e1eb89646310d31d56ba',
    tokenDecimals: 18,
    exchangeAddress: '0xcdb3f850b58076deb724492eaaa898aa44c6c9b8'
  },
  {
    symbol: 'WIPH',
    name: 'Wiphala',
    tokenAddress: '0x7329f01e471692f022fcd5c6ef515ddfc5875a30',
    tokenDecimals: 18,
    exchangeAddress: '0x9223c93d86f8c9cff3e2d366c13f82065248ca13'
  },
  {
    symbol: 'CLSK',
    name: 'CloudStack',
    tokenAddress: '0xbf3c268e7c7698882d1b8538d2c61c9c0077915c',
    tokenDecimals: 18,
    exchangeAddress: '0x30a6d41612b4f4e48d536c3eae7b851facbf78cd'
  },
  {
    symbol: 'TTV',
    name: 'Token for Television',
    tokenAddress: '0xa838be6e4b760e6061d4732d6b9f11bf578f9a76',
    tokenDecimals: 18,
    exchangeAddress: '0xa4a24d83fa14e27aed3b266ce842ca06034dc9b6'
  },
  {
    symbol: 'USDS',
    name: 'StableUSD',
    tokenAddress: '0xa4bdb11dc0a2bec88d24a3aa1e6bb17201112ebe',
    tokenDecimals: 6,
    exchangeAddress: '0x7ef7191ab91ddb4d7cc347fbfa170355acbaf02d'
  },
  {
    symbol: 'EOPT',
    name: 'EasyOption.io Token',
    tokenAddress: '0x9a2681935c2775b7abf0649ec5c306eea7561930',
    tokenDecimals: 18,
    exchangeAddress: '0x7f0296a5277a14904e9527de27c19fc17fd47c20'
  },
  {
    symbol: 'COD',
    name: 'Cash on Delivery',
    tokenAddress: '0xe7da4034d6bf12909e5d0198c3784f55a06e0210',
    tokenDecimals: 18,
    exchangeAddress: '0xcc70dce9cdc690a2bd633669133bd5e8bb165c1b'
  },
  {
    symbol: 'PAXUSDB',
    name: 'PAX Smart Relay Token',
    tokenAddress: '0x573c97e9fb924c22d41127481eedf4a177394988',
    tokenDecimals: 18,
    exchangeAddress: '0xcca512453e3ec44ceef89aa5bc7e4844748ea9d0'
  },
  {
    symbol: 'BNX',
    name: 'Bitnordex',
    tokenAddress: '0x60ce1dd8f8bffd69994170ae66bc50be8bd6b839',
    tokenDecimals: 18,
    exchangeAddress: '0xf5135825534a3b090565ad3e60803d920732ee41'
  },
  {
    symbol: 'HOLE',
    name: 'Black Hole',
    tokenAddress: '0x03fb52d4ee633ab0d06c833e32efdd8d388f3e6a',
    tokenDecimals: 18,
    exchangeAddress: '0xd697c50488f5d063c75cf1fae1f66f6cedfea448'
  },
  {
    symbol: 'LEX',
    name: 'Lexington',
    tokenAddress: '0x17042fca22f10220037ee4bdaf3ccef781f46b47',
    tokenDecimals: 18,
    exchangeAddress: '0x755d2f151dd5c91389beffc3757cb1ab9a30b380'
  },
  {
    symbol: 'ID',
    name: 'Everest ID',
    tokenAddress: '0xebd9d99a3982d547c5bb4db7e3b1f9f14b67eb83',
    tokenDecimals: 18,
    exchangeAddress: '0x5950a97bf9864b1b4c0d4cb5f2094cfe59abcb51'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x494d82667c3ed3ac859cca94b1be65b0540ee3bb',
    tokenDecimals: 18,
    exchangeAddress: '0xb3e2e293b844c3a80169952ea6a66eb92688e65c'
  },
  {
    symbol: 'BAZR',
    name: 'Bazeries',
    tokenAddress: '0x8dbebdca0f66b3532f7613e9606faee19030d3f9',
    tokenDecimals: 18,
    exchangeAddress: '0x5999b53b526ed45a104ae41e3c4af9bb33ace3ae'
  },
  {
    symbol: 'FET',
    name: 'Fetch',
    tokenAddress: '0x1d287cc25dad7ccaf76a26bc660c5f7c8e2a05bd',
    tokenDecimals: 18,
    exchangeAddress: '0x57a128958d41a5fa7bfa455be45b12f197a1969c'
  },
  {
    symbol: 'MANTIS',
    name: 'MANTIS',
    tokenAddress: '0x3d79f5abf58619f0a70f69c094d99e25d6f2126b',
    tokenDecimals: 18,
    exchangeAddress: '0xefb716398bf9164ece5ae61ae9c53bf16c0bd01f'
  },
  {
    symbol: '',
    name: '',
    tokenAddress: '0xae345a936b4573e70fdcd852d4505496e95f3a6b',
    tokenDecimals: 0,
    exchangeAddress: '0xc91b2418bafcae9b02c1a616e6386cb4ecccf365'
  },
  {
    symbol: 'PK',
    name: 'Pak Token',
    tokenAddress: '0x63057c7d97d99c485c534bbd0d40c5b3eec0b4fc',
    tokenDecimals: 18,
    exchangeAddress: '0xd7538ab0f562b592080e6509fd6bce21730b9305'
  },
  {
    symbol: 'DAI',
    name: 'Dai Stablecoin',
    tokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
    tokenDecimals: 18,
    exchangeAddress: '0x2a1530c4c41db0b0b2bb646cb5eb1a67b7158667'
  },
  {
    symbol: 'MIN',
    name: 'Minerals',
    tokenAddress: '0x0d31444c3f3cd583f30ca1b7cedc973db4bf5abf',
    tokenDecimals: 18,
    exchangeAddress: '0x0b9122c0d43f2051d7ff12350c4d890ec8965d21'
  },
  {
    symbol: 'ECP',
    name: 'ECP Token',
    tokenAddress: '0x945f171de4ea81a213dcc7a1e8c4f6feb3b4b806',
    tokenDecimals: 18,
    exchangeAddress: '0x06360a0d29885e835700367f72665919fed11856'
  },
  {
    symbol: 'AMB',
    name: 'AMC Blue',
    tokenAddress: '0xd6c7576b735def0d8ea12d6a21332d8c37fc0fbb',
    tokenDecimals: 18,
    exchangeAddress: '0x07c64a61db22035b0b97bea54badfa99561a474d'
  },
  {
    symbol: 'REAL',
    name: '747cd2304424f89e39fa2bd1419eee3213ca557d1b829540714065a13f7407e9',
    tokenAddress: '0xe96d6f202eca0ec9ebcb2f8af054556cf8f9cf65',
    tokenDecimals: 18,
    exchangeAddress: '0x35cf52b8ae941d14c7572a672510cc750f411222'
  },
  {
    symbol: 'PAY',
    name: 'PAYDAY LOAN COIN',
    tokenAddress: '0x3952cd3335d313e0bdc7028c8dd7cad6a9905f89',
    tokenDecimals: 18,
    exchangeAddress: '0x1edc041a37ecfc6a9c3bac049ea4879bb1a2943b'
  },
  {
    symbol: 'BRX',
    name: 'Brex Coin',
    tokenAddress: '0x7f383463279dacc75cc3ffa39e85e78f548df4a1',
    tokenDecimals: 18,
    exchangeAddress: '0xd606e1ef3c5e1a07d17131a4a1cceaf9cd973396'
  },
  {
    symbol: 'CCCN',
    name: 'Century Crypto Coin',
    tokenAddress: '0xd11aa2d9342c2b48259f8aa9061c7541d6ba018c',
    tokenDecimals: 18,
    exchangeAddress: '0x83f7b6e957747be4dc95c85f252d27c40b820319'
  },
  {
    symbol: 'Ort',
    name: 'Ortier',
    tokenAddress: '0x44c5c863fc9082887c1ba507fea3e19039a72186',
    tokenDecimals: 18,
    exchangeAddress: '0xc50211d28f62d37d34c206130af4927d3fc1e6bd'
  },
  {
    symbol: 'RCO',
    name: 'Ricoin',
    tokenAddress: '0x1600c5502e7e94cacf73c124331cfa3e20add40e',
    tokenDecimals: 8,
    exchangeAddress: '0x2932ac0edc8b440d6efe6fe549f4c7b02810ccbb'
  },
  {
    symbol: 'LDR',
    name: 'lexDAO Research',
    tokenAddress: '0x180819c2a7d12d0b24fb7a3a4e001fcde32d95de',
    tokenDecimals: 18,
    exchangeAddress: '0x538e93bedae0d17831979296233ce6bbc83e96b2'
  },
  {
    symbol: 'NEC',
    name: 'Ethfinex Nectar Token',
    tokenAddress: '0xcc80c051057b774cd75067dc48f8987c4eb97a5e',
    tokenDecimals: 18,
    exchangeAddress: '0x4d6ef41be615d2e74fafe2162fb5aa1267f9081e'
  },
  {
    symbol: 'JCB',
    name: 'GJC',
    tokenAddress: '0x7420cdf53b7864317e1f07443ba413e933f00906',
    tokenDecimals: 4,
    exchangeAddress: '0xf94a92119bba2e918d0ef0805e42c0df9653799b'
  },
  {
    symbol: 'eWOO',
    name: 'eWoolong',
    tokenAddress: '0x5a96629f9e589ad676380f35ec6798d578d7fc6d',
    tokenDecimals: 4,
    exchangeAddress: '0xb9c16048649a871a93d99915ff571c793130cc94'
  },
  {
    symbol: 'FRD',
    name: 'FARAD',
    tokenAddress: '0x0abefb7611cb3a01ea3fad85f33c3c934f8e2cf4',
    tokenDecimals: 18,
    exchangeAddress: '0x18f5bd3a17ff5464a93574c23bccb4aa5d4566c9'
  },
  {
    symbol: 'MIND',
    name: 'MIND Token',
    tokenAddress: '0x222728c202e7164dfbd127181d46409338c4328e',
    tokenDecimals: 18,
    exchangeAddress: '0xc00e1570fbbcfc37100cc48386b2649ca0101019'
  },
  {
    symbol: 'Y0Ct0',
    name: 'Y0Ct0',
    tokenAddress: '0x1a915888faab504c0afcec5d4041922fb3630812',
    tokenDecimals: 18,
    exchangeAddress: '0x1c395a25e839b2ef0592c896421dccd9438cdef8'
  },
  {
    symbol: 'GLDE',
    name: 'GOLDENEYE Fixed Supply Token',
    tokenAddress: '0x90b199690284b75220ce016be1fc5f31c0a6d171',
    tokenDecimals: 18,
    exchangeAddress: '0x4e904f8acfefca73c9075e3adb8670d9374ec056'
  },
  {
    symbol: 'FRT',
    name: 'Fortuna',
    tokenAddress: '0x9eca8e7fd201f13520ddac794268a90cf8597bed',
    tokenDecimals: 18,
    exchangeAddress: '0xfad031a458687cf309222b4f658a88a12e164350'
  },
  {
    symbol: 'AAJ',
    name: 'AAJ',
    tokenAddress: '0x0dcfd6d0a85cc8f35fe507fed1dba4318bae8df3',
    tokenDecimals: 18,
    exchangeAddress: '0xad67fdd56921a51d64acea6cb2f36955c70b2068'
  },
  {
    symbol: 'TRIZ',
    name: 'Tribezcoin',
    tokenAddress: '0x2f8a2c9328cb0955ee363c4a7ea65974e1f55b03',
    tokenDecimals: 6,
    exchangeAddress: '0x5a93a1b8dd7d42889ae00164637e87d2bda6aa81'
  },
  {
    symbol: 'BAT',
    name: 'BasicAttention Token',
    tokenAddress: '0x9e5675b91cd1f60be361adadf2dcc53885e910d1',
    tokenDecimals: 4,
    exchangeAddress: '0x6992b9cf70eee28d3eba3e2fa806fa513679ad91'
  },
  {
    symbol: 'MOLC',
    name: 'Mol Coin',
    tokenAddress: '0x4770b2f7ac9490bcec13622526fa714ccbf1a752',
    tokenDecimals: 18,
    exchangeAddress: '0x388b9305684dcc5a3a2f44447e03019d9ca704ed'
  },
  {
    symbol: 'DAI-HRD',
    name: 'DAI-HRD',
    tokenAddress: '0x9b869c2eaae08136c43d824ea75a2f376f1aa983',
    tokenDecimals: 18,
    exchangeAddress: '0x918af0fb5517ac5b8b34240203408cedbba09bd9'
  },
  {
    symbol: 'NUK',
    name: 'NUKlear',
    tokenAddress: '0x9e12c837159dedc233719edf5a4ec2405644e8a7',
    tokenDecimals: 3,
    exchangeAddress: '0x276638b3c3eb0dc94ee8f6c321f5f1c69909b21e'
  },
  {
    symbol: 'AGRO',
    name: 'AGRONEUM',
    tokenAddress: '0x4fce19caa366f69ed6cc2793b83050e24d2c82e2',
    tokenDecimals: 18,
    exchangeAddress: '0x4815976a384299e1e9b803676f11310dd231efac'
  },
  {
    symbol: 'BMT',
    name: 'BitMinutes',
    tokenAddress: '0x86c2752f8fe2c6679a942c8ee6c785c28f42cd55',
    tokenDecimals: 18,
    exchangeAddress: '0x73eef310ccc2774fdc61bcad30c58d160568fe58'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x2a1530c4c41db0b0b2bb646cb5eb1a67b7158667',
    tokenDecimals: 18,
    exchangeAddress: '0xd2eaa9434b7789bdad7650a32ed5637566e7e705'
  },
  {
    symbol: 'UCN',
    name: 'SaveUNICOINs',
    tokenAddress: '0x37aa63c4cbd06a57f1ea35bceee4e46f0a7ce924',
    tokenDecimals: 0,
    exchangeAddress: '0xefaa9a5dbd2c9e6073dc7320f3556f902234a805'
  },
  {
    symbol: 'TIME',
    name: 'TIMECOIN',
    tokenAddress: '0x5f0452bf45c2ad560a4ac6d663033c50bc04d044',
    tokenDecimals: 18,
    exchangeAddress: '0xfa7ac3addc92c5e1b18eb0a74920b59c3505f83d'
  },
  {
    symbol: 'VEE',
    name: 'BLOCKv Token',
    tokenAddress: '0x340d2bde5eb28c1eed91b2f790723e3b160613b7',
    tokenDecimals: 18,
    exchangeAddress: '0xefaa7f81c5397a73b43f340fe3397281c07a4057'
  },
  {
    symbol: 'LEV',
    name: 'Leverj',
    tokenAddress: '0x0f4ca92660efad97a9a70cb0fe969c755439772c',
    tokenDecimals: 9,
    exchangeAddress: '0xda91447a55e28d413f8112dc329c1c2fda8c181d'
  },
  {
    symbol: 'ISA',
    name: 'c02fb23cba3ad98dce99d515da424b7ac7d8cc774b30507ad69e0329531d0c76',
    tokenAddress: '0x3e82efc3817677dc82e588548dbe3746b6682c03',
    tokenDecimals: 18,
    exchangeAddress: '0xcff28149a22c3cc0e604f8e3f409b9efd565fdcb'
  },
  {
    symbol: 'HUNK',
    name: 'Hunk of unpasteurized cheeze',
    tokenAddress: '0x521871fe28ab18d7564611e3021e139f37452a43',
    tokenDecimals: 18,
    exchangeAddress: '0x1b60fa317dcff0148e7b841ac47bd56cb26bcc6f'
  },
  {
    symbol: 'GWIT',
    name: 'Global Women Investment Token',
    tokenAddress: '0x55d0bb8d7e7fbf5b863c7923c4645ff83c3d0033',
    tokenDecimals: 18,
    exchangeAddress: '0x4dfe4a0b1404183f3604a63a51006fbdc41bbb00'
  },
  {
    symbol: 'REMI',
    name: 'RemiChain',
    tokenAddress: '0x2dbe823bbb134274b463b7ae001961f36d2bbcad',
    tokenDecimals: 8,
    exchangeAddress: '0xa3c9f1ce4bc02b9ce32b44277f741eae96acd01e'
  },
  {
    symbol: 'PAY',
    name: 'PAYDAY LOAN COIN',
    tokenAddress: '0x3952cd3335d313e0bdc7028c8dd7cad6a9905f89',
    tokenDecimals: 18,
    exchangeAddress: '0x1edc041a37ecfc6a9c3bac049ea4879bb1a2943b'
  },
  {
    symbol: 'TTV',
    name: 'Token for Television',
    tokenAddress: '0xa838be6e4b760e6061d4732d6b9f11bf578f9a76',
    tokenDecimals: 18,
    exchangeAddress: '0xa4a24d83fa14e27aed3b266ce842ca06034dc9b6'
  },
  {
    symbol: 'JB',
    name: 'Jack block',
    tokenAddress: '0xea9557b1fbc765419c7dc6b4e6a9a3d8a6463f32',
    tokenDecimals: 18,
    exchangeAddress: '0xbda857ff04e451e5f835e2b8fd799e59f465ee26'
  },
  {
    symbol: 'GCASH',
    name: 'Gcash',
    tokenAddress: '0xc53f6c2ac35d30cc47ddf3c320874b21dfa38791',
    tokenDecimals: 4,
    exchangeAddress: '0x3e3fd9230518ba8644df5b48423e2be5e6016540'
  },
  {
    symbol: 'OHDAIUSDC:A',
    name: 'ohDAI 1:1 USDC A',
    tokenAddress: '0x6fc19f348322b1edbbf903b10f3cad67c50048bd',
    tokenDecimals: 6,
    exchangeAddress: '0xda22ab0eca61f101d53eb700875a8226e6e4b8de'
  },
  {
    symbol: 'LUA',
    name: 'LUA',
    tokenAddress: '0x8b5b1ee2a9aa34c3f497e1eb89646310d31d56ba',
    tokenDecimals: 18,
    exchangeAddress: '0xcdb3f850b58076deb724492eaaa898aa44c6c9b8'
  },
  {
    symbol: 'ODEX',
    name: 'One DEX',
    tokenAddress: '0xa960d2ba7000d58773e7fa5754dec3bb40a069d5',
    tokenDecimals: 18,
    exchangeAddress: '0xc39a4762c7b095c74611acbf869f4cf7d68c56ca'
  },
  {
    symbol: 'FOX',
    name: 'FOX',
    tokenAddress: '0xc770eefad204b5180df6a14ee197d99d808ee52d',
    tokenDecimals: 18,
    exchangeAddress: '0x9dd44d019b3f992cb56a19d15daccca7edf3e584'
  },
  {
    symbol: 'BZN',
    name: 'Benzene',
    tokenAddress: '0x6524b87960c2d573ae514fd4181777e7842435d4',
    tokenDecimals: 18,
    exchangeAddress: '0x2871ef639e4b0a628749508dd9d95745fe95637f'
  },
  {
    symbol: 'CYFM',
    name: 'CyberFM',
    tokenAddress: '0x32b87fb81674aa79214e51ae42d571136e29d385',
    tokenDecimals: 18,
    exchangeAddress: '0x0f88a6cbeb3bd153c0584c7136fbcc86c2dd657f'
  },
  {
    symbol: 'OHDAI:USDC:A',
    name: 'ohDAI 1:1 USDC A',
    tokenAddress: '0xdde0ba4afc244b8c4992888482940eb40cc92023',
    tokenDecimals: 0,
    exchangeAddress: '0xf7731cfca78032e766893f403cf38d98008415c3'
  },
  {
    symbol: 'BEL',
    name: 'Belance Blockchain',
    tokenAddress: '0x7ce31d775ee8ae8058ed7e599e5f14bb1535f223',
    tokenDecimals: 18,
    exchangeAddress: '0x5577f97ca9653453baa844ed9e478d3f61f2900d'
  },
  {
    symbol: 'DZAR',
    name: 'Digital Rand',
    tokenAddress: '0x9cb2f26a23b8d89973f08c957c4d7cdf75cd341c',
    tokenDecimals: 6,
    exchangeAddress: '0x80324ec8d64425b37f8603a97097da7d493dbc79'
  },
  {
    symbol: 'MBC',
    name: 'myBcert',
    tokenAddress: '0x0b1683b742976a46603453a918773e46e666b12c',
    tokenDecimals: 8,
    exchangeAddress: '0x583705b392f76e27b5299640e74a6cca4c19dc1c'
  },
  {
    symbol: 'OHDAI:USDC:1.01',
    name: 'ohDAI 1.01:1 USDC',
    tokenAddress: '0x8860b076bdd6640f2fe5c9157e5b5c87561b268f',
    tokenDecimals: 6,
    exchangeAddress: '0x598bf42fa129e981b8f08f6211ce6736e0711c4c'
  },
  {
    symbol: 'iDAI',
    name: 'Fulcrum DAI iToken',
    tokenAddress: '0x493c57c4763932315a328269e1adad09653b9081',
    tokenDecimals: 18,
    exchangeAddress: '0x3e0349f5d38414008b9bb1907ea422739be7cd4c'
  },
  {
    symbol: 'YDT',
    name: 'DevonToken',
    tokenAddress: '0xa28bb880d056a6a6e0d7da4ffb2d67225c23f008',
    tokenDecimals: 16,
    exchangeAddress: '0x00dbe4b9e0da43656b2a76b6124d134d49b0aabb'
  },
  {
    symbol: 'OHDAI:USDC:A',
    name: 'ohDAI 1:1 USDC A',
    tokenAddress: '0x00a4d48c94aa205e90f635aba5e7e8f968b2608d',
    tokenDecimals: 0,
    exchangeAddress: '0xbdc589b1c00c04fe9d56ccafc793ebf0e82d77a3'
  },
  {
    symbol: 'WTE',
    name: 'Washington Trust Estate',
    tokenAddress: '0xccee121e2f303283c5eef616f92295a33be5a25f',
    tokenDecimals: 18,
    exchangeAddress: '0xd1a0ffe6167a35e3933f43318bfc6e387edac490'
  },
  {
    symbol: 'PROPS',
    name: 'Props Token',
    tokenAddress: '0x155e7e9ab193aa37c87d22f66002e3db64c9e0ce',
    tokenDecimals: 18,
    exchangeAddress: '0x653921f3faafcc8851a8f570b7185b04ce47dad5'
  },
  {
    symbol: 'EGR',
    name: 'EGORAS',
    tokenAddress: '0x73cee8348b9bdd48c64e13452b8a6fbc81630573',
    tokenDecimals: 18,
    exchangeAddress: '0x442f585cc64e45586de7c936d225ec0612f95705'
  },
  {
    symbol: 'OHDAI:USDC:A',
    name: 'ohDAI 1:1 USDC A',
    tokenAddress: '0x66117f59814dc7f2aaa7a2f90f6ef16f7e2b363d',
    tokenDecimals: 18,
    exchangeAddress: '0x779f2c0a4b6576c86eb2fd8a8b56cd57885af95f'
  },
  {
    symbol: 'SELF',
    name: 'SELF TOKEN',
    tokenAddress: '0x67ab11058ef23d0a19178f61a050d3c38f81ae21',
    tokenDecimals: 18,
    exchangeAddress: '0x478a745884ae481c8d34e4586f508e90332e6ba6'
  },
  {
    symbol: 'WAND',
    name: 'Wand Token',
    tokenAddress: '0x27f610bf36eca0939093343ac28b1534a721dbb4',
    tokenDecimals: 18,
    exchangeAddress: '0x0a935b8a0ae84bfb5801b2a5ab11e49bc9d70810'
  },
  {
    symbol: 'YUSDT',
    name: 'Yellow Tether',
    tokenAddress: '0x0622769d566b3c4c1c58ca4fabee8e60bb3163e5',
    tokenDecimals: 6,
    exchangeAddress: '0xf3056654471570c1385b69ef6a08e76661a341a4'
  },
  {
    symbol: 'eWGR',
    name: 'eWagerr',
    tokenAddress: '0xba96b16d569b62d2803f165ab652499921c1fe7a',
    tokenDecimals: 18,
    exchangeAddress: '0x01f15ba73b9a4ca91b8614291884889657322f13'
  },
  {
    symbol: 'CXO',
    name: 'CometX',
    tokenAddress: '0xd776291ec1ae42d57642b9c512832d880edc668b',
    tokenDecimals: 18,
    exchangeAddress: '0x2ae4bdab051a958603d97da264125279c175e571'
  },
  {
    symbol: 'NBCH',
    name: 'NewBItcash',
    tokenAddress: '0xb8efd711ea26f236f9e49afebd2fe9d55f79b8bd',
    tokenDecimals: 18,
    exchangeAddress: '0x65135b1d79c1a8ffbbd77d8a50a3f3e8af40207c'
  },
  {
    symbol: 'MOTEL',
    name: 'M Coin',
    tokenAddress: '0x6543d695289eb29838252d55cb20606c3e3d4c9d',
    tokenDecimals: 18,
    exchangeAddress: '0xfba9f147282174692e9fec6a37173fd4a90ab5a4'
  },
  {
    symbol: 'HOTEL',
    name: 'H Coin',
    tokenAddress: '0xf8a2ed21fea517665b35ac824387bf9b41c71919',
    tokenDecimals: 18,
    exchangeAddress: '0x101d65a9ddce80110b142c915f6f0d4e9c723ec0'
  },
  {
    symbol: 'XDB',
    name: 'digitalbits',
    tokenAddress: '0xb9eefc4b0d472a44be93970254df4f4016569d27',
    tokenDecimals: 7,
    exchangeAddress: '0x841d0f2d8cc340d2a8ee8f217456fbc2816b284c'
  },
  {
    symbol: 'DAN',
    name: 'Daneel',
    tokenAddress: '0x9b70740e708a083c6ff38df52297020f5dfaa5ee',
    tokenDecimals: 10,
    exchangeAddress: '0xa666233c44fd62ef1608fd9535e83271bc4a8bbb'
  },
  {
    symbol: 'sBTC',
    name: 'Synth sBTC',
    tokenAddress: '0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6',
    tokenDecimals: 18,
    exchangeAddress: '0xbc6456b81ea7383e5361425c88f201dcd0b5b669'
  },
  {
    symbol: 'TIPS',
    name: 'Waitstaff Coin',
    tokenAddress: '0x4e17c88842c8b4e4e79ab74f851df790c23944e7',
    tokenDecimals: 18,
    exchangeAddress: '0xdc7920e5dc356991233cf97e03d08ee345cdfbfc'
  },
  {
    symbol: 'JWEL',
    name: 'Crwn Jwel',
    tokenAddress: '0x5cffc0b73df80144f0f3f5bf75672777af2bbbfe',
    tokenDecimals: 18,
    exchangeAddress: '0x8e8384c3e05ca3f7d658a4e2b568a520cc7316da'
  },
  {
    symbol: 'CEXD',
    name: 'CEXDollar',
    tokenAddress: '0x92c4f18c851592b4a2ab9bcd22d308f0e1c94399',
    tokenDecimals: 18,
    exchangeAddress: '0xc412bc2e7e40eeca9562c7a65a5d572bafd1de6a'
  },
  {
    symbol: 'KAPP',
    name: 'Kappi Token',
    tokenAddress: '0xf39f19565b8d937ec30f1db5bd42f558d1e312a6',
    tokenDecimals: 18,
    exchangeAddress: '0x9191b556bec5b59b0c94be52946a9e96584756b5'
  },
  {
    symbol: 'PAXG',
    name: 'Paxos Gold',
    tokenAddress: '0x45804880de22913dafe09f4980848ece6ecbaf78',
    tokenDecimals: 18,
    exchangeAddress: '0x0d2e1a84638bd1b6c0c260c758c39451d4587be1'
  },
  {
    symbol: 'KCB',
    name: 'KaratCoin Bank',
    tokenAddress: '0x2c04a9469eff3adeb1b46898f89d358abea8274e',
    tokenDecimals: 7,
    exchangeAddress: '0xae5e76e0ed148378fd6ee45494b438411812e70c'
  },
  {
    symbol: 'KCB',
    name: 'KaratCoin Bank',
    tokenAddress: '0xe01dd5ee7dfbb48baf94b1c885faaa5bc6bbd70a',
    tokenDecimals: 7,
    exchangeAddress: '0x6fe0cedeec366f680c725814824df4549df4670e'
  },
  {
    symbol: 'MBAS',
    name: 'MBAS',
    tokenAddress: '0x1a37ab7420c3b9beacdd8329656061c685ffea15',
    tokenDecimals: 18,
    exchangeAddress: '0xf747ce84a4f9793c812f52d36850e288f1eae215'
  },
  {
    symbol: 'cDAI',
    name: 'Compound Dai',
    tokenAddress: '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643',
    tokenDecimals: 8,
    exchangeAddress: '0x34e89740adf97c3a9d3f63cc2ce4a914382c230b'
  },
  {
    symbol: 'ALMG',
    name: 'ALMEEGRAM',
    tokenAddress: '0xa2b14f0e0986d2733b01808491536f923554c903',
    tokenDecimals: 18,
    exchangeAddress: '0xba5e44bd331ef557f057b5611f6e560bf11678dc'
  },
  {
    symbol: 'SHR-CORP',
    name: 'Shinra-Corp',
    tokenAddress: '0x1ff4f9ae17c706afcaa5e96ca7f04a92dd9aa7a6',
    tokenDecimals: 18,
    exchangeAddress: '0x3082db38eaec253002a95fb414afed294b1bbea7'
  },
  {
    symbol: 'HEX',
    name: 'HollaEx',
    tokenAddress: '0x96006f60b452526481a26eab55265ecdf82e7361',
    tokenDecimals: 18,
    exchangeAddress: '0xaf5fe14c6b3e1001204216a8f10214fbc75c1b81'
  },
  {
    symbol: 'SSYOD',
    name: 'SSYODD',
    tokenAddress: '0xeaf498ddf8b087891460ddc0c6612162f604c1f3',
    tokenDecimals: 18,
    exchangeAddress: '0x46d5351e3069fd9162e8396b478976bd51902e60'
  },
  {
    symbol: 'KHAS',
    name: 'Kadir Has Token',
    tokenAddress: '0x6af4429a10e14098da1f8839c9bd88a83bf84a2f',
    tokenDecimals: 2,
    exchangeAddress: '0x1f3c06acf7fb2a8a903e70a03e62a7a505a2c31c'
  },
  {
    symbol: 'PGPAY',
    name: 'PGPAY',
    tokenAddress: '0xc949fc82a15964fb5b97e5cf8f9ffed139086821',
    tokenDecimals: 18,
    exchangeAddress: '0xf03ca06a4d0851363638c0fec390cea2c4611ad3'
  },
  {
    symbol: 'NTK',
    name: 'Netkoin',
    tokenAddress: '0x5d4d57cd06fa7fe99e26fdc481b468f77f05073c',
    tokenDecimals: 18,
    exchangeAddress: '0x64b1ad7bc6eab69ec0b2f5e263272af01c36aa25'
  },
  {
    symbol: 'GMAT',
    name: 'GoWithMi',
    tokenAddress: '0xa110eeebc0751407bdcaea4cd230f04a2b82a33a',
    tokenDecimals: 18,
    exchangeAddress: '0xc8a2c9cca7efd5073c6d558ebf10680b6bb730fe'
  },
  {
    symbol: 'BFFI',
    name: 'BFFI OPTIONS',
    tokenAddress: '0x479a315bdafda5e7e66c7aeef228477a0535a2ef',
    tokenDecimals: 18,
    exchangeAddress: '0x0d334a9214e8aa1c2a294b521becce3b88cc52a5'
  },
  {
    symbol: 'LACRS',
    name: 'Perigrine Lacrosse',
    tokenAddress: '0x46edaa477b313a77d51564dda448e385116d3f36',
    tokenDecimals: 18,
    exchangeAddress: '0xca909fc24f0fbde99d66aa6f569afea0ae523837'
  },
  {
    symbol: 'POLO',
    name: 'Las Vegas Polo Assn',
    tokenAddress: '0xa8c5bd47da1abc3f4c0c1c86ddf0ef24114c9970',
    tokenDecimals: 18,
    exchangeAddress: '0x518f0cc1efef48cabeb6e90f0973a98c8da6a26a'
  },
  {
    symbol: 'SOLVE',
    name: 'Healthcare Administration Token',
    tokenAddress: '0x446c9033e7516d820cc9a2ce2d0b7328b579406f',
    tokenDecimals: 8,
    exchangeAddress: '0x1a76d429b86e94e80eec4304bc526c5393cfb4d0'
  },
  {
    symbol: 'PLG',
    name: 'PLGToken',
    tokenAddress: '0x85ca6710d0f1d511d130f6935edda88acbd921bd',
    tokenDecimals: 18,
    exchangeAddress: '0x7599081a2164e75ac07e7b4350da4e4836a80e9b'
  },
  {
    symbol: 'LIQUID',
    name: 'Netkoin Liquid',
    tokenAddress: '0xac2385e183d9301dd5e2bb08da932cbf9800dc9c',
    tokenDecimals: 18,
    exchangeAddress: '0xbffdb9056228071568dce2cbacd342adc214030e'
  },
  {
    symbol: 'KICK',
    name: 'KickToken',
    tokenAddress: '0xc12d1c73ee7dc3615ba4e37e4abfdbddfa38907e',
    tokenDecimals: 8,
    exchangeAddress: '0x39bc7c31a835a1dfeeca150ff01abdd58c1676f9'
  },
  {
    symbol: 'SU1',
    name: 'Soviet War Bonds - Stakewar.com Round 1',
    tokenAddress: '0x07e38769e25630b2d433176495cdf627ec42b472',
    tokenDecimals: 18,
    exchangeAddress: '0xcfb063a2fe64b877f361b4914b3a1e95f4e2916e'
  },
  {
    symbol: 'US1',
    name: 'US War Bonds - Stakewar.com Round 1',
    tokenAddress: '0x9a472e3fc54939baf028eda41d8a1929830a7eef',
    tokenDecimals: 18,
    exchangeAddress: '0xea52a72ba18f96984ea62cabb7fe41182db584b1'
  },
  {
    symbol: 'CHESS',
    name: 'Chess Coin',
    tokenAddress: '0x5f75112bbb4e1af516fbe3e21528c63da2b6a1a5',
    tokenDecimals: 18,
    exchangeAddress: '0x08a829dda4abc3bddd2e72eecb1ca076220c4a63'
  },
  {
    symbol: 'ARGO',
    name: 'Argo Token',
    tokenAddress: '0x555ce61d7eac3f772f60b2e8dc6c272ca65d9323',
    tokenDecimals: 18,
    exchangeAddress: '0xcb2497ced3ab740b70339bb36d2899cc92fc2140'
  },
  {
    symbol: 'LSHRT',
    name: 'Law Shirt',
    tokenAddress: '0x65b3e0cf1d965c8ae1aae48d35848ddc62e7f7d7',
    tokenDecimals: 18,
    exchangeAddress: '0xec456b44a2c4e93fc9e68c24844286dd4191c2a0'
  },
  {
    symbol: 'USDB / BNT',
    name: 'USDB / BNT Relay Token',
    tokenAddress: '0xd1146b08e8104eedba44a73b7bda1d102c6cedc9',
    tokenDecimals: 18,
    exchangeAddress: '0x091091074a6f23f1dd198254784c779b1456b1a9'
  },
  {
    symbol: 'TRUST',
    name: 'Trust Coin',
    tokenAddress: '0x24c9586b762bd6005ee89d5ca442761b5a3830ac',
    tokenDecimals: 18,
    exchangeAddress: '0x99f7898814741fc0b87668f5fb21c39f27ae75f9'
  },
  {
    symbol: 'zBTC',
    name: 'Shifted BTC',
    tokenAddress: '0x88c64a7d2ecc882d558dd16abc1537515a78bb7d',
    tokenDecimals: 8,
    exchangeAddress: '0x8eeaa8278a318b0293760a04ca0c1af92e55c974'
  },
  {
    symbol: 'SKAM',
    name: 'ScamCoin',
    tokenAddress: '0x594a7a4bdb7417b656be60a13f41d29d3eb9029e',
    tokenDecimals: 18,
    exchangeAddress: '0x9f0d06339e08bfaf9d44095c88cf43c52b31a0f6'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0xb3e2e293b844c3a80169952ea6a66eb92688e65c',
    tokenDecimals: 18,
    exchangeAddress: '0x3a98f07e7a009f648646d316f134193db942fde8'
  },
  {
    symbol: 'MRQ',
    name: 'MarsDAOEquity',
    tokenAddress: '0x47be00042af431016fb5561b6b47d457ebafcb6e',
    tokenDecimals: 18,
    exchangeAddress: '0x81a40d2361a8861f357ed31a0afb68625bf97ac8'
  },
  {
    symbol: 'HTX',
    name: 'Huptex',
    tokenAddress: '0x8b847669b2e5dd5101736e41da8ec38653065aeb',
    tokenDecimals: 2,
    exchangeAddress: '0x0f7ba7793dd2ae2a6d10cc369689942c4c96a77a'
  },
  {
    symbol: 'XNS',
    name: 'Xeonbit Token',
    tokenAddress: '0x79c71d3436f39ce382d0f58f1b011d88100b9d91',
    tokenDecimals: 18,
    exchangeAddress: '0xee43f6d410dda90effcc9ca315fc14001dab1a30'
  },
  {
    symbol: 'GOT',
    name: 'GoToken',
    tokenAddress: '0x423b5f62b328d0d6d44870f4eee316befa0b2df5',
    tokenDecimals: 18,
    exchangeAddress: '0xdaa597fc1fabd41cfb434553c97639b693ee5259'
  },
  {
    symbol: 'CMDX',
    name: 'CMDX',
    tokenAddress: '0x8a6ed334b561842b7bf3f8130be02afaf69832af',
    tokenDecimals: 18,
    exchangeAddress: '0x30ef324752c8d000be01175487eb97f3ebecb5cc'
  },
  {
    symbol: 'NMI',
    name: 'NMIToken',
    tokenAddress: '0xc772aa1ae7c2fa5aedea02bcf37d13e17fa50062',
    tokenDecimals: 18,
    exchangeAddress: '0x710ed8406d04d3d22d707a4c9649bba2ede053ff'
  },
  {
    symbol: 'ZIPT',
    name: 'Zippie',
    tokenAddress: '0xedd7c94fd7b4971b916d15067bc454b9e1bad980',
    tokenDecimals: 18,
    exchangeAddress: '0x1a8d94b0cabeb345e846ecb34e4ca37b2d220aca'
  },
  {
    symbol: 'NOMO',
    name: 'Bitnomo',
    tokenAddress: '0xe44061f043682ff77c1d51d4e0f93ab2bb5b2ae0',
    tokenDecimals: 8,
    exchangeAddress: '0xf197348e947faf8d87963cbe36a1f37bf2dd1126'
  },
  {
    symbol: 'WGU',
    name: 'Wrapped Gods Unchained Cards',
    tokenAddress: '0x2c6d2274bba280e7e4e394d36fee4f2c3b83eefd',
    tokenDecimals: 18,
    exchangeAddress: '0xffdf13e9645c7ebeff556d5c487cbcb8f0cbadef'
  },
  {
    symbol: 'WGU',
    name: 'Wrapped Gods Unchained Cards',
    tokenAddress: '0x8fc366cf4ea4f77db065af282955ab8e09ed3690',
    tokenDecimals: 18,
    exchangeAddress: '0xf2e0339ca7a72ac7db1885e73b4303a33e26b46b'
  },
  {
    symbol: 'FXV',
    name: 'FXT Victory',
    tokenAddress: '0xab689100ad5bc9fde7267da1299265fe740d243c',
    tokenDecimals: 0,
    exchangeAddress: '0xbfa8a0ebd2b709201c18d82c3e429f39c6d28345'
  },
  {
    symbol: 'EXRN',
    name: 'EXRP Network',
    tokenAddress: '0xe469c4473af82217b30cf17b10bcdb6c8c796e75',
    tokenDecimals: 0,
    exchangeAddress: '0x0c36d0d3c66131f7c5edae68aad38929e59580fe'
  },
  {
    symbol: 'EXRT',
    name: 'EXRT',
    tokenAddress: '0xb20043f149817bff5322f1b928e89abfc65a9925',
    tokenDecimals: 8,
    exchangeAddress: '0xa9e8c7beabffd05745e29acb939c00d5cb3c8ff8'
  },
  {
    symbol: 'USDNT',
    name: 'USDNT',
    tokenAddress: '0x80bf9169f4c7bc84344fbc75b026dd57252d9a0c',
    tokenDecimals: 18,
    exchangeAddress: '0xbf61a0ce9df13d93f5c09231da69475f7549c456'
  },
  {
    symbol: 'CXC',
    name: 'CruxCoin',
    tokenAddress: '0x5ca2754fc2d4d09cf95fd81fdf12a5c74efa9088',
    tokenDecimals: 18,
    exchangeAddress: '0x2ebd527d88deb7f93b93d146db9600e8aa736b33'
  },
  {
    symbol: 'NOW',
    name: 'Now',
    tokenAddress: '0x09f7e85973c81f8df7668a3c187f6b1bed71a1b7',
    tokenDecimals: 18,
    exchangeAddress: '0xc7b512cb4280624992513310426cad19a5a0777c'
  },
  {
    symbol: 'NDW',
    name: 'Nodewaste',
    tokenAddress: '0x0d3c6fc650ba00d0757b0a418ecb5a027dac2f42',
    tokenDecimals: 0,
    exchangeAddress: '0x71640311e6540fb32bad53d5ad3e8a8dcb2f9006'
  },
  {
    symbol: 'CHAI',
    name: 'Chai',
    tokenAddress: '0x06af07097c9eeb7fd685c692751d5c66db49c215',
    tokenDecimals: 18,
    exchangeAddress: '0x6c3942b383bc3d0efd3f36efa1cbe7c8e12c8a2b'
  },
  {
    symbol: 'CRM',
    name: 'CRAM',
    tokenAddress: '0x173d62725713053b2c53fd2e59093098ed9e9e7e',
    tokenDecimals: 18,
    exchangeAddress: '0xcffceae742815b30c0285c4ace3428667a17ef04'
  },
  {
    symbol: 'METM',
    name: ' MetaMorph ',
    tokenAddress: '0xfef3884b603c33ef8ed4183346e093a173c94da6',
    tokenDecimals: 18,
    exchangeAddress: '0x21d091235fe69f59a438f34b6e77cb0e450054ec'
  },
  {
    symbol: 'SWAP',
    name: 'SimpleSwap Coin',
    tokenAddress: '0x163c649ac276c5fdcc27db30a1c1f070cb731c04',
    tokenDecimals: 8,
    exchangeAddress: '0x50e70e28c5a695921c335095fabcd21b1d97eb2e'
  },
  {
    symbol: 'YHTS',
    name: 'Luxury Yacht Coin',
    tokenAddress: '0xcf33eb02227255c45f595727dbb24ce16afc36a2',
    tokenDecimals: 18,
    exchangeAddress: '0x179cf45788fc0bc876e30449d6114b01dd1b57f0'
  },
  {
    symbol: 'THR',
    name: 'ThoreCoin',
    tokenAddress: '0x1cb3209d45b2a60b7fbca1ccdbf87f674237a4aa',
    tokenDecimals: 4,
    exchangeAddress: '0xc80b37b716cb70503853612954c639f5a898b289'
  },
  {
    symbol: 'rDAI',
    name: 'Redeemable DAI',
    tokenAddress: '0xea8b224edd3e342deb514c4176c2e72bcce6fff9',
    tokenDecimals: 18,
    exchangeAddress: '0x1179252f0c8e88548e5b1f07e41f8480457715c2'
  },
  {
    symbol: 'SPRK',
    name: 'Sparkster',
    tokenAddress: '0x80a740c8ffa28c8c2c3f1fc8b6c1a0a442212e71',
    tokenDecimals: 18,
    exchangeAddress: '0x9d5195ee85285ffe0894b2a0e3dd5a6f5184fbe7'
  },
  {
    symbol: 'EMAS',
    name: 'Emas Logam Mulia Token',
    tokenAddress: '0x29bd0827941b8e3b03758880127dd2aa2a115f4b',
    tokenDecimals: 18,
    exchangeAddress: '0x39a8883ec3a790c40693f1f31468376a30652a85'
  },
  {
    symbol: 'WUSDT',
    name: 'Wrapped Tether',
    tokenAddress: '0x5750a2117c14cadd1cc523fd8a600559c89c83bb',
    tokenDecimals: 6,
    exchangeAddress: '0xbb4e898b2fbee432cde5bb681be325b7e13440ff'
  },
  {
    symbol: 'WUSDT',
    name: 'Wrapped Tether',
    tokenAddress: '0x47b2223eb33ba465abd6d4f9f2883c0932bc4b20',
    tokenDecimals: 6,
    exchangeAddress: '0x310b3fc05c2be8c3bef33071fbf89871260ab5ff'
  },
  {
    symbol: 'DF',
    name: 'dForce',
    tokenAddress: '0x431ad2ff6a9c365805ebad47ee021148d6f7dbe0',
    tokenDecimals: 18,
    exchangeAddress: '0xbd9905009c2bf1fa292547e5899d2191723c6a16'
  },
  {
    symbol: 'OPENC',
    name: 'OPEN Chain',
    tokenAddress: '0x9d86b1b2554ec410eccffbf111a6994910111340',
    tokenDecimals: 8,
    exchangeAddress: '0x6543088d0972a74e5cf6ed07fd87115391d0b643'
  },
  {
    symbol: 'WGU',
    name: 'Wrapped Gods Unchained Cards',
    tokenAddress: '0x0e1ca6c9278d425f22b92c048ad47af182b098e7',
    tokenDecimals: 18,
    exchangeAddress: '0x7d089fff8c80291d06f184b1c41baac8c636b2f3'
  },
  {
    symbol: 'SFC',
    name: 'SFC',
    tokenAddress: '0x8367322d7ad9917aeb1c8ebedf322f7125a204e2',
    tokenDecimals: 18,
    exchangeAddress: '0x02241bc01c85dabc4b03927e2e5daf44136f1812'
  },
  {
    symbol: 'STC',
    name: 'STC',
    tokenAddress: '0xc202f0d1f79736b0ae14a0578f18b84f5c671d20',
    tokenDecimals: 18,
    exchangeAddress: '0x700fedd59564451a1712ac99c8ed977b7005e86a'
  },
  {
    symbol: 'SEC',
    name: 'SEC',
    tokenAddress: '0x581a7b11056d5daf2af6fc1fa6896a7a6d4c4dc6',
    tokenDecimals: 18,
    exchangeAddress: '0x16d14946320b5994525046a1ac2cf8b16d30b7b6'
  },
  {
    symbol: 'XNK',
    name: 'Ink Protocol',
    tokenAddress: '0xbc86727e770de68b1060c91f6bb6945c73e10388',
    tokenDecimals: 18,
    exchangeAddress: '0xddf7db619f58ceacdea61385a7757278e5006d83'
  },
  {
    symbol: 'SOMETHING',
    name: 'LORD UNKNOWN: END PANTS',
    tokenAddress: '0xa550a3489765a9db8cc688c4007d8650a8563fae',
    tokenDecimals: 18,
    exchangeAddress: '0x648ed8ff098e04c3df28270688abdff6b690a5bf'
  },
  {
    symbol: 'HRD',
    name: 'HRD',
    tokenAddress: '0xd1a7166eb7daea0e0e15160d87c2657a988374f1',
    tokenDecimals: 18,
    exchangeAddress: '0x4546c52df68e58523f2676a65315bfe33aaf49b4'
  },
  {
    symbol: 'LN',
    name: 'LN',
    tokenAddress: '0x406963ad7aeac48b95777dd41f154fe6d20bf886',
    tokenDecimals: 18,
    exchangeAddress: '0x20d82b7cd5d2a5fa03b511f16e7018ae248c6dcf'
  },
  {
    symbol: '1',
    name: 'ONESIE',
    tokenAddress: '0x880bcd7a5c8434fd964ec9020963adf3bc2413de',
    tokenDecimals: 18,
    exchangeAddress: '0x3d38c34790183812f50274c54d50f44afad1ec3d'
  },
  {
    symbol: 'WGU',
    name: 'Wrapped Gods Unchained Cards',
    tokenAddress: '0xa3d711aa4ba7f5a59c790a0db1731d03b33fe512',
    tokenDecimals: 18,
    exchangeAddress: '0xba7dc4016f1488c3cfabe10ed86f7542d829ccf3'
  },
  {
    symbol: 'AYLA',
    name: 'Ayla',
    tokenAddress: '0xfaf9263bca469244cc10b6b7729367284eeef770',
    tokenDecimals: 0,
    exchangeAddress: '0x6a880bc98e65f7b41942d0e14708ec88c9a93509'
  },
  {
    symbol: 'TYT',
    name: 'TYT',
    tokenAddress: '0x614fd8f06ce4d93aa2361b342c86554eb5cb39f1',
    tokenDecimals: 6,
    exchangeAddress: '0xe7c347d0d9cf4eb90f7b9582c409bf1e52620a83'
  },
  {
    symbol: 'HEX',
    name: 'HEX',
    tokenAddress: '0x2b591e99afe9f32eaa6214f7b7629768c40eeb39',
    tokenDecimals: 8,
    exchangeAddress: '0x05cde89ccfa0ada8c88d5a23caaa79ef129e7883'
  },
  {
    symbol: 'ULT',
    name: 'Ultiledger',
    tokenAddress: '0xe884cc2795b9c45beeac0607da9539fd571ccf85',
    tokenDecimals: 18,
    exchangeAddress: '0x4458f1f4269a079a8a3dd8b14817ca15e8034574'
  },
  {
    symbol: 'REL',
    name: 'Relevant',
    tokenAddress: '0xb6c4267c4877bb0d6b1685cfd85b0fbe82f105ec',
    tokenDecimals: 18,
    exchangeAddress: '0x3e4ef00b7c7c8b8f913ecd0f66023c3948d152db'
  },
  {
    symbol: 'WGU',
    name: 'Wrapped Gods Unchained Cards',
    tokenAddress: '0xe120bebc75c4fb28e581e7b24a18de9b492e0a02',
    tokenDecimals: 18,
    exchangeAddress: '0x35e106ee82f84a170bf7d47d252741f5e8959f2c'
  },
  {
    symbol: 'CPTL',
    name: 'Capital Coin',
    tokenAddress: '0xda605fd5e003e6de0f33f6474080623fa6483e3e',
    tokenDecimals: 8,
    exchangeAddress: '0xd86230363d1d8182d716306e7dc0bb31288342f9'
  },
  {
    symbol: 'STAGE',
    name: 'Concert Coin',
    tokenAddress: '0x1db2804a750fded073bd5497c775cf8f1ef75ec3',
    tokenDecimals: 18,
    exchangeAddress: '0x6eea6cbfc714c364643b3ba5bcb581856806f4f1'
  },
  {
    symbol: 'DDCH',
    name: 'DINDICASH',
    tokenAddress: '0xfa9f74d6ef265ae866992cfd2dccb0f677227280',
    tokenDecimals: 18,
    exchangeAddress: '0x7575cf5703aa7187f0968a72f559529cbc1c80e1'
  },
  {
    symbol: 'PLA',
    name: 'PLA Token',
    tokenAddress: '0x5f5b176553e51171826d1a62e540bc30422c7717',
    tokenDecimals: 18,
    exchangeAddress: '0xe852e0e34994b8e77f5128dc848efb2923ef4956'
  },
  {
    symbol: 'GOODS',
    name: '8e5333c4d71e0b11b3e5e5e42a733bad0b07d53123c15386e445571867d86a8a',
    tokenAddress: '0xc7178ae1696c3702846340d4a1631223446d3733',
    tokenDecimals: 0,
    exchangeAddress: '0xdf9530157a88fe4be63a62f5f616944d2ff447b7'
  },
  {
    symbol: 'DONUT',
    name: 'Donut',
    tokenAddress: '0xc0f9bd5fa5698b6505f643900ffa515ea5df54a9',
    tokenDecimals: 18,
    exchangeAddress: '0xd552119ed44ec8fa8f87c568769c67bd02b5b3fb'
  },
  {
    symbol: 'TMV',
    name: 'TimviToken',
    tokenAddress: '0x5abfd418adb35e89c68313574eb16bdffc15e607',
    tokenDecimals: 18,
    exchangeAddress: '0xee4f6b06b6931730fe977597a4a8987af80d5938'
  },
  {
    symbol: 'OSPVS',
    name: 'Onyx S&P 500 Short',
    tokenAddress: '0xffa52dce6eb5695436be96ca9b7df63382e4c34d',
    tokenDecimals: 18,
    exchangeAddress: '0x8286075013f5433982fc2c8b6e6da9ba18f5ef4b'
  },
  {
    symbol: 'OSPV',
    name: 'Onyx S&P 500',
    tokenAddress: '0x3a1343a3ca3c32a69b79ae82e8a9a71c1293c566',
    tokenDecimals: 18,
    exchangeAddress: '0xd1d0edb79e80cadd4c59e3bfbf80820cd451534e'
  },
  {
    symbol: 'RFX',
    name: 'REFLEX',
    tokenAddress: '0x7d2e0263c59530d45c1491b8971596e440b78d20',
    tokenDecimals: 18,
    exchangeAddress: '0x96e6752be34485b90feefb5dc116b5468d5c198a'
  },
  {
    symbol: 'SBY',
    name: 'Swingby Token (ERC20)',
    tokenAddress: '0xff48643575fc19cf51fe247c0b2a7ddf0fd7181a',
    tokenDecimals: 18,
    exchangeAddress: '0x81af7851bf507a021806547408f990b29fa70526'
  },
  {
    symbol: 'TXH',
    name: 'TradeX Token',
    tokenAddress: '0x8dc9947b6662485252e49b04f2e445100ab5804a',
    tokenDecimals: 18,
    exchangeAddress: '0xae458d8b7cb596976bfcea738bcfe7ea5a328e40'
  },
  {
    symbol: 'MRB',
    name: 'mrblock',
    tokenAddress: '0x96a093025637c0376e322a0ea91f823dde52b0ac',
    tokenDecimals: 18,
    exchangeAddress: '0x711c90dc2867209228f893a1cc046336ab393182'
  },
  {
    symbol: 'PPC',
    name: 'PurpleCoin',
    tokenAddress: '0x809faaf63ee61b9133102b4fbe560219b534b6e4',
    tokenDecimals: 18,
    exchangeAddress: '0x49152b2c5646ac4029195ac923026dbdf06d636b'
  },
  {
    symbol: 'GOAL',
    name: 'GOAL Bonanza',
    tokenAddress: '0x7b69b78cc7fee48202c208609ae6d1f78ce42e13',
    tokenDecimals: 18,
    exchangeAddress: '0x4fa86a9cff5bbbb5913112500390e7553b7c9abc'
  },
  {
    symbol: 'GETH',
    name: 'Golden Ethereum',
    tokenAddress: '0xfa2c0229600e24e0c44e70acd5ca73071ff5593e',
    tokenDecimals: 2,
    exchangeAddress: '0x1f5e55626795af1949b79cc2336807028ccee70d'
  },
  {
    symbol: 'OUSD',
    name: 'Onyx USD',
    tokenAddress: '0x7c0afd49d40ec308d49e2926e5c99b037d54ee7e',
    tokenDecimals: 18,
    exchangeAddress: '0xd9a1476a57dcf02b57ec87ac7b66568485b8b108'
  },
  {
    symbol: 'imBTC',
    name: 'The Tokenized Bitcoin',
    tokenAddress: '0x3212b29e33587a00fb1c83346f5dbfa69a458923',
    tokenDecimals: 8,
    exchangeAddress: '0xffcf45b540e6c9f094ae656d2e34ad11cdfdb187'
  },
  {
    symbol: 'GUESS',
    name: 'GUESS',
    tokenAddress: '0xbdcfbf5c4d91abc0bc9709c7286d00063c0e6f22',
    tokenDecimals: 2,
    exchangeAddress: '0xacf4cdc4f7845c709e3eb9b9cbacb37cc849b340'
  },
  {
    symbol: 'SML',
    name: '数码链',
    tokenAddress: '0x13d82b5ab85ffa33bc952913d7e2de686f13e676',
    tokenDecimals: 18,
    exchangeAddress: '0xe3476aca6a058294660634e977f0c43e1db13a4c'
  },
  {
    symbol: 'BEB',
    name: 'betbeb.com Mining 0.75 ETH day',
    tokenAddress: '0xe71cebd38ce2186e01eb6c8a232ec16e8906ed69',
    tokenDecimals: 18,
    exchangeAddress: '0x24439a128e93c7711b59561aff1d945bace0e45b'
  },
  {
    symbol: ' BEB',
    name: 'bitbeb',
    tokenAddress: '0x995ff3562692349e78001c9e37414919e65ff04b',
    tokenDecimals: 18,
    exchangeAddress: '0x3b2f503d4f6968d98cba74a6bde3e720dd5fa374'
  },
  {
    symbol: 'NOIA',
    name: 'NOIA Token',
    tokenAddress: '0xfc858154c0b2c4a3323046fb505811f110ebda57',
    tokenDecimals: 18,
    exchangeAddress: '0xf6623c0d42a7bfcfac33aed597a7d4c0bc87e747'
  },
  {
    symbol: 'BEB',
    name: 'bitbeb',
    tokenAddress: '0x6798cc8ad079a7e663536f83ee26d63aabe03da9',
    tokenDecimals: 18,
    exchangeAddress: '0x5074405c97d5d8c97d12bb52ab2f938eebd0492d'
  },
  {
    symbol: 'ISL',
    name: 'Peninsula Coin',
    tokenAddress: '0xc39976f60185257cc2da55f5bb2c9db84732fc3b',
    tokenDecimals: 18,
    exchangeAddress: '0xbcc39ede77a9f39058abc6319d0049dffea93e16'
  },
  {
    symbol: 'TIME',
    name: 'Timeshare Coin',
    tokenAddress: '0x28c5db1e4ce4edb0b1b7aeae9d7be542ee3eeee5',
    tokenDecimals: 18,
    exchangeAddress: '0x8d0db28c55dc23fa975a7475a5686bc666c58b04'
  },
  {
    symbol: 'CH13',
    name: 'BK Coin',
    tokenAddress: '0xb428a7bfd2dc43ce51cf5e6524e9a3a4df3e536b',
    tokenDecimals: 18,
    exchangeAddress: '0xffe641ce4bb158b287cb5f2c2f5a35c92412cff6'
  },
  {
    symbol: 'CH7',
    name: 'BK Coin',
    tokenAddress: '0xb069def42294288402156484c9b18639d1bc2bce',
    tokenDecimals: 18,
    exchangeAddress: '0x1ee5c13f5e796609b0c706a6b39df173472f4101'
  },
  {
    symbol: 'ARPA',
    name: 'ARPA Token',
    tokenAddress: '0xba50933c268f567bdc86e1ac131be072c6b0b71a',
    tokenDecimals: 18,
    exchangeAddress: '0x60c42458fc49b1dcce87e3ca71a4c2f1ca994a9e'
  },
  {
    symbol: 'SHOE',
    name: 'WHAT: SHOES',
    tokenAddress: '0xc3fc76dbf20c40751dffbcdd69eaf379d2a96d07',
    tokenDecimals: 18,
    exchangeAddress: '0xc10d4cc080caa1ff6d6f1d9c763a49de65f7626f'
  },
  {
    symbol: 'IEX',
    name: 'International Exchange',
    tokenAddress: '0xa581b8dac454842ff92ca92ff4e2544e1b36e6ab',
    tokenDecimals: 18,
    exchangeAddress: '0x4388bc8e48bbf5031e3cfe992f98bad9e48e9ab6'
  },
  {
    symbol: 'IBIT',
    name: 'INDOBIT',
    tokenAddress: '0xc398891b43f1b91158dca87c63a88b80d000c248',
    tokenDecimals: 8,
    exchangeAddress: '0x711545ec48e855eeac19187ead5677d0a9741e89'
  },
  {
    symbol: 'GLDA',
    name: 'Glendara',
    tokenAddress: '0xa9baa8401d4bd5907d1c2c007c7f3c6fe6ebda02',
    tokenDecimals: 18,
    exchangeAddress: '0x94e1f9a33aac6e9c7d68e8940ef5eac69ba20787'
  },
  {
    symbol: 'MGT',
    name: 'Mystery Ghost Token',
    tokenAddress: '0x0cb20b77adbe5cd58fcecc4f4069d04b327862e5',
    tokenDecimals: 8,
    exchangeAddress: '0x6337ad2f1c268a759f3ea6b0e4a1ab8494d3a7bf'
  },
  {
    symbol: 'KCB',
    name: 'KaratCoin Bank',
    tokenAddress: '0x329a18a927dc23c21fa4e7c4684914a7f52b7011',
    tokenDecimals: 7,
    exchangeAddress: '0x35d72ec6d8287527816dd19ab6e7bd6414872cc6'
  },
  {
    symbol: 'WPT',
    name: 'Worldopoly',
    tokenAddress: '0x921a5dce3dfed5cccfbb2e593f2978533bc66110',
    tokenDecimals: 18,
    exchangeAddress: '0xd9296c6005d3cdc70927781c964aa29c22e3257e'
  },
  {
    symbol: 'ETR',
    name: 'EthorToken',
    tokenAddress: '0x5cd71a6c4e57bbeec527c32be2802cabb5b2bb4c',
    tokenDecimals: 18,
    exchangeAddress: '0x2b3dba88fba971aa37b2542abfe8e226552b9615'
  },
  {
    symbol: 'BLA',
    name: 'Blazing Token',
    tokenAddress: '0xfe51a13cc3058a2edb77c96d18bdf622d78b1279',
    tokenDecimals: 6,
    exchangeAddress: '0x5ce0eb862cdf9be5978acff3f2028ffd9eeadca6'
  },
  {
    symbol: 'SNTR',
    name: 'Silent Notary Token',
    tokenAddress: '0x2859021ee7f2cb10162e67f33af2d22764b31aff',
    tokenDecimals: 4,
    exchangeAddress: '0x7b7dc399b2ed268aaaab5d96e0d720eb01af4a71'
  },
  {
    symbol: 'FAME',
    name: 'SAINT FAME: Genesis Shirt',
    tokenAddress: '0x06f65b8cfcb13a9fe37d836fe9708da38ecb29b2',
    tokenDecimals: 18,
    exchangeAddress: '0x5e7907ac70b9a781365c72f2acee96710bda042e'
  },
  {
    symbol: 'SRN',
    name: 'SIRIN',
    tokenAddress: '0x68d57c9a1c35f63e2c83ee8e49a64e9d70528d25',
    tokenDecimals: 18,
    exchangeAddress: '0xa02174eb11453af3a22a7e1d2a70ed49a5126837'
  },
  {
    symbol: 'MESG',
    name: 'MESG',
    tokenAddress: '0x420167d87d35c3a249b32ef6225872fbd9ab85d2',
    tokenDecimals: 18,
    exchangeAddress: '0x2b1892e181cc749b530e6acc0aecfa4cc9c13ac2'
  },
  {
    symbol: 'BOOM',
    name: 'BOOM',
    tokenAddress: '0xdb7eab9ba6be88b869f738f6deeba96d49fe13fd',
    tokenDecimals: 18,
    exchangeAddress: '0x4fc1e5b73118f731955372b14f77e729d24bd128'
  },
  {
    symbol: 'BCT',
    name: 'Bitcratic',
    tokenAddress: '0x9ec251401eafb7e98f37a1d911c0aea02cb63a80',
    tokenDecimals: 18,
    exchangeAddress: '0x4f45b0780f1d1e5f97d3031c57a0634dc6fe5856'
  },
  {
    symbol: 'SHM',
    name: 'SexHackMe',
    tokenAddress: '0x3294c1d03faec27c131b93e8051de8ee684439b9',
    tokenDecimals: 18,
    exchangeAddress: '0xd6556f2f799d826b1640cb6531270a5af36827e7'
  },
  {
    symbol: 'VEN',
    name: 'DUCATO',
    tokenAddress: '0xf02123509a08632339102ee5fdd41b638592e495',
    tokenDecimals: 18,
    exchangeAddress: '0xfec9215befa12f7b3d73a36aed1589037ddfc758'
  },
  {
    symbol: 'CRAFT',
    name: 'Crafts Coin',
    tokenAddress: '0xc594dcb6a3b40c9ee519a18fdb79079d1fdf864b',
    tokenDecimals: 18,
    exchangeAddress: '0x29bc5430129dfe3ee095ed3747a0a55f3b34876e'
  },
  {
    symbol: 'TOKENFACTORY',
    name: 'Token Factory Switzerland Ltd | 7H3M-9XPG-T',
    tokenAddress: '0xd194e4f96d102d834b617226e90f89b83b17ba9d',
    tokenDecimals: 18,
    exchangeAddress: '0xc1e7668288586db10fe4ace799dc428d3677f2ff'
  },
  {
    symbol: 'TOY',
    name: 'TRU Coin',
    tokenAddress: '0x5057ac62795ee5ba6975fe412a41669abbc84b8a',
    tokenDecimals: 18,
    exchangeAddress: '0xf0347d5ef8f56919419c31926f2f4bbb11a77a50'
  },
  {
    symbol: 'FUSD',
    name: 'Foton USD',
    tokenAddress: '0x7f20f6e68bd14dbdb95244dbee6c316999a2d4c1',
    tokenDecimals: 8,
    exchangeAddress: '0x05d5b3bf75c22de23ff028c13bc0fd8d4bd7e29d'
  },
  {
    symbol: 'KZE',
    name: 'ALMEELA',
    tokenAddress: '0x71944c7953c93dbc0cd977e0ee1bbd9c2494b7b1',
    tokenDecimals: 8,
    exchangeAddress: '0x66d96565c1c90de1ae4a56b20f78182c9e3fe629'
  },
  {
    symbol: 'ZETH',
    name: 'Zethereum',
    tokenAddress: '0xd55e5ea9e6c055708ec01c881cb12907d33b21d4',
    tokenDecimals: 18,
    exchangeAddress: '0x7d1acac59bba7b752413c1b8b9439585f47ea6d3'
  },
  {
    symbol: 'MORTG',
    name: 'Mortgage S.I. Coin',
    tokenAddress: '0x0fb4cd45b77273c3b51b361dc94bc736176fcda6',
    tokenDecimals: 18,
    exchangeAddress: '0x9e232a58932897658c596f7f1b65a45d868c4ea2'
  },
  {
    symbol: 'USDC',
    name: 'USD CLASSIC',
    tokenAddress: '0xc93a59888e7e6f2849ba94acf767266299c4c415',
    tokenDecimals: 8,
    exchangeAddress: '0x6894a87c7039f3fffa37a02b91eab3c580fd81f0'
  },
  {
    symbol: 'YOO',
    name: 'Yooba token',
    tokenAddress: '0x1d4105534da120da243281cfc3f26aaf038e2d6f',
    tokenDecimals: 18,
    exchangeAddress: '0x3dcf4889811c7c639afb7a5959f84600b1ead4f9'
  },
  {
    symbol: 'BLA',
    name: 'Blazing Token',
    tokenAddress: '0x6903003d96da868c144ad1c59ddd4c7b72ea077f',
    tokenDecimals: 6,
    exchangeAddress: '0xb86f736a0c50583123c44fc43bf56d9aeee040f8'
  },
  {
    symbol: 'SET',
    name: 'Simple ERC20 Token',
    tokenAddress: '0x07600a1ad0a5512786d4295d986417a6def1611f',
    tokenDecimals: 18,
    exchangeAddress: '0xb8aa52b194874427165917d2e123cef28ce0b509'
  },
  {
    symbol: 'MTCX',
    name: 'MYTHIC',
    tokenAddress: '0x74658fb5f7ff3bc7d70f7f792d53fd74f89dc055',
    tokenDecimals: 18,
    exchangeAddress: '0x417e5a1d001c975aab68e7a9a0700bf7f8217bb1'
  },
  {
    symbol: 'EMRX',
    name: 'Emirex Token',
    tokenAddress: '0xbdbc2a5b32f3a5141acd18c39883066e4dab9774',
    tokenDecimals: 8,
    exchangeAddress: '0xfdc99e574c56e784820c4733a95349146cbc1c03'
  },
  {
    symbol: 'OXT',
    name: 'Orchid',
    tokenAddress: '0x4575f41308ec1483f3d399aa9a2826d74da13deb',
    tokenDecimals: 18,
    exchangeAddress: '0xe9a5bbe41dc63d555e06746b047d624e3343ea52'
  },
  {
    symbol: 'MNR',
    name: 'Mnoer',
    tokenAddress: '0xe4e2daf5f7f0c1c35df922c5d9340913edecc8e8',
    tokenDecimals: 18,
    exchangeAddress: '0x73dc463c66062746853e2e28c1146d35b3ff8667'
  },
  {
    symbol: 'NACRE',
    name: 'Nacreous',
    tokenAddress: '0x2774b5771f607938d4e9197b3a5ca9f21110cf11',
    tokenDecimals: 18,
    exchangeAddress: '0x6702dfd4377d9e1a4feb3dcced5d54ff337424e4'
  },
  {
    symbol: 'FFXT',
    name: 'FORTUNEFX',
    tokenAddress: '0xcc2661d5b68a02bed6508377c499e1144b97200c',
    tokenDecimals: 18,
    exchangeAddress: '0xeff60b5ef0f6bdb316202a452173d34e35aeecb6'
  },
  {
    symbol: 'EDC',
    name: 'educca',
    tokenAddress: '0xa5ffa1e05b1c3c1fcd24cffa2ac77b311cb2cf37',
    tokenDecimals: 18,
    exchangeAddress: '0x996a6e9941cd737e80affefc9c77792abee94515'
  },
  {
    symbol: 'CryptoFun',
    name: 'CryptoFun',
    tokenAddress: '0xce52d7727fb77ca7b084f50bbbf335997fcb0dd3',
    tokenDecimals: 16,
    exchangeAddress: '0xe743acdb36c8e1d8ea1cb430e9a1579b4e6a1be5'
  },
  {
    symbol: 'CPF',
    name: 'CryptoFun',
    tokenAddress: '0x2027abda20165d5dd495c1ee56c8da80a9730a97',
    tokenDecimals: 18,
    exchangeAddress: '0xf4a5470c8a921791b7d82ea7133e5732fccf2501'
  },
  {
    symbol: 'TGO',
    name: 'TetherGo',
    tokenAddress: '0xfcf3740dee50e5c4afa16730baff0e84e2f34ac3',
    tokenDecimals: 18,
    exchangeAddress: '0xa75efb8d201bcb9518f797e140d5ac119499b59e'
  },
  {
    symbol: 'KAVA',
    name: 'KavaToken',
    tokenAddress: '0x6143df904a70bcbd9b52c7b61fdaf270a4f0516e',
    tokenDecimals: 18,
    exchangeAddress: '0xd9d3884bab5d9b3a12714a034c329e1af9de5e49'
  },
  {
    symbol: 'KAVA',
    name: 'Kava',
    tokenAddress: '0x08d1e0a7fbd4edbf56d81da21d1b0c9c95fb507f',
    tokenDecimals: 18,
    exchangeAddress: '0x492741057643e1645dabea5f84c58e58b97a1732'
  },
  {
    symbol: 'MWAT',
    name: 'RED MWAT',
    tokenAddress: '0x6425c6be902d692ae2db752b3c268afadb099d3b',
    tokenDecimals: 18,
    exchangeAddress: '0x5ac986c32a0e2a215a6d88a9d5853ec13b4ec70a'
  },
  {
    symbol: 'EVX',
    name: 'Everex',
    tokenAddress: '0xf3db5fa2c66b7af3eb0c0b782510816cbe4813b8',
    tokenDecimals: 4,
    exchangeAddress: '0x8acc2a8ee942dd8717ad30b23acbbe31cf4cba2f'
  },
  {
    symbol: 'EDUC',
    name: 'educca',
    tokenAddress: '0x4e4f2cf7c828e277b9a997261165fa7074ec66bf',
    tokenDecimals: 18,
    exchangeAddress: '0x8a7c6b76f7389b7cc5394702f25077d58854c5f5'
  },
  {
    symbol: 'BTCF',
    name: 'Bitcoin Fast',
    tokenAddress: '0x225927f8fa71d16ee07968b8746364d1d9f839bd',
    tokenDecimals: 8,
    exchangeAddress: '0xf30daf46f0af644937ce2d17f2c00e375c2901c3'
  },
  {
    symbol: 'CMA',
    name: 'CryptoMarketAdsToken',
    tokenAddress: '0xe968ad47b1c071ea3905ef982833552a495d6213',
    tokenDecimals: 18,
    exchangeAddress: '0x40853691c48fa53b89094b1724a8fc22a56bd9d6'
  },
  {
    symbol: 'OGN',
    name: 'OriginToken',
    tokenAddress: '0x8207c1ffc5b6804f6024322ccf34f29c3541ae26',
    tokenDecimals: 18,
    exchangeAddress: '0x48dc4d621c1b9f7ad919daab69100b3a8834458f'
  },
  {
    symbol: 'OHDAIUSDC:B',
    name: 'ohDAI 1:1 USDC B',
    tokenAddress: '0x64a03ce1e52b4e579f0a1cf44cf95c0d7898b5a3',
    tokenDecimals: 18,
    exchangeAddress: '0x9dd808f0c10582855a95265f2acba0d4680a7920'
  },
  {
    symbol: 'EUSD',
    name: 'Electronic USD',
    tokenAddress: '0x97b05317de8b867c9f810692f6c6f7b10e57a258',
    tokenDecimals: 18,
    exchangeAddress: '0x95e8e0b638a8d6ceb70e3271b1b8791423bedc2f'
  },
  {
    symbol: 'BENT',
    name: 'BENT',
    tokenAddress: '0x4cda1f2e5c9b32be8420afdcd3ce84ee4d3d5ebb',
    tokenDecimals: 2,
    exchangeAddress: '0x94bed9aa7e9a06acf057df9fcbbece63b831283d'
  },
  {
    symbol: 'PTN',
    name: 'PalletOneToken',
    tokenAddress: '0xfe76be9cec465ed3219a9972c21655d57d21aec6',
    tokenDecimals: 18,
    exchangeAddress: '0x3925dc4e40561490645eb44594edbe9096ddc650'
  },
  {
    symbol: 'Drink',
    name: 'DrinkChain',
    tokenAddress: '0xb8105b0d4a9ae55658b418065fea4282a8d2e968',
    tokenDecimals: 18,
    exchangeAddress: '0x11f7a3dac9193a4bce50b3d0c57a8a0bd9c41d33'
  },
  {
    symbol: 'DIVX',
    name: 'Divi Exchange Token',
    tokenAddress: '0x13f11c9905a08ca76e3e853be63d4f0944326c72',
    tokenDecimals: 18,
    exchangeAddress: '0xc87c0a272afbd164c8f2c30a82e28133600487fa'
  },
  {
    symbol: 'AVA',
    name: 'Alpha Fund',
    tokenAddress: '0xa16001dd47f505b7b7c5639c710a52209e4e8904',
    tokenDecimals: 18,
    exchangeAddress: '0x98a52f16bcf540dfc7c10e0e682ad1161ed07802'
  },
  {
    symbol: 'XAC',
    name: 'XACToken',
    tokenAddress: '0xde4c5a791913838027a2185709e98c5c6027ea63',
    tokenDecimals: 8,
    exchangeAddress: '0xd615f4de2767d8d457b1693a490c122e36f08a63'
  },
  {
    symbol: 'NPX',
    name: 'NapoleonX Token',
    tokenAddress: '0x28b5e12cce51f15594b0b91d5b5adaa70f684a02',
    tokenDecimals: 2,
    exchangeAddress: '0xedac00f1ad1263c49ded877609383417177c6f7d'
  },
  {
    symbol: '1MT',
    name: '1Million Token',
    tokenAddress: '0xf0bc1ae4ef7ffb126a8347d06ac6f8add770e1ce',
    tokenDecimals: 7,
    exchangeAddress: '0x904a4cd5b4a22f77ce2e1cb5d37f8523497f9663'
  },
  {
    symbol: 'MYFIE',
    name: 'Monetize Your Selfie',
    tokenAddress: '0xcb529ae44941500ded968baf9617ddecacc6fb87',
    tokenDecimals: 8,
    exchangeAddress: '0xb8c04ea45c2996a65b4b31cb6547cabfbc6ec45d'
  },
  {
    symbol: 'H-C',
    name: 'Hotmedia Coin',
    tokenAddress: '0x86225c165b61472c83599270b4c916566a784861',
    tokenDecimals: 18,
    exchangeAddress: '0x99ac38d6d46cbd7e76a51b6d378179d2c2837a72'
  },
  {
    symbol: 'ECPN',
    name: 'ECPN Token',
    tokenAddress: '0xb55732a15b3dc5d6e8d4adf40634f37470da71fa',
    tokenDecimals: 8,
    exchangeAddress: '0x9dc8733cca7a18d04ed87a4c0f34190a96258fc6'
  },
  {
    symbol: 'JSH',
    name: 'Hours',
    tokenAddress: '0xd24d520eb55ea010998303110fa188673122416a',
    tokenDecimals: 18,
    exchangeAddress: '0x60421edd5be917bb24640e5274300517f28708ac'
  },
  {
    symbol: 'SKJ',
    name: 'SKJ',
    tokenAddress: '0xc11f001615d8679cb502531d3b3831c2183106bb',
    tokenDecimals: 18,
    exchangeAddress: '0x450d7003e96e2a956be63fb08bac59ac5103df24'
  },
  {
    symbol: 'MTB18',
    name: 'MIKETANGOBRAVO18',
    tokenAddress: '0x1bcfd19f541eb62c8cfebe53fe72bf2afc35a255',
    tokenDecimals: 18,
    exchangeAddress: '0x5237ce499b168ea2baa10dfc3b5b41dd8fe602ed'
  },
  {
    symbol: 'BABA',
    name: 'Synthetic Alibaba Equity Tokens',
    tokenAddress: '0xb89a981a6bb48bbb723c524463d75ab166eca035',
    tokenDecimals: 3,
    exchangeAddress: '0x5b23163c6f730bf377ee6e5dfc82bd234efd157d'
  },
  {
    symbol: 'EGCI',
    name: 'Eggs Crypto Invest',
    tokenAddress: '0xb15d9b7c2f10a50dda6d88f40fb338ce514af551',
    tokenDecimals: 6,
    exchangeAddress: '0x03cb320f2d993cc04df9452ccc8f6e88e32b82f1'
  },
  {
    symbol: 'MTB19',
    name: 'MikeTangoBravo19',
    tokenAddress: '0x87ab739464881af0011052d4ca0b0d657e8c3b48',
    tokenDecimals: 18,
    exchangeAddress: '0xffb632b1789eddc0118473759fab59a80824de4e'
  },
  {
    symbol: 'OWL',
    name: 'OWL Token',
    tokenAddress: '0x1a5f9352af8af974bfc03399e3767df6370d82e4',
    tokenDecimals: 18,
    exchangeAddress: '0x11179c3cb11cd08ca22afb91e515257d5e7bf03c'
  },
  {
    symbol: 'REALTOKEN-18483-MANSFIELD-ST-DETROIT-MI',
    name: 'RealToken 18483 Mansfield Street Detroit MI',
    tokenAddress: '0xb1d42642c6da784a5498180fdc64df8f8f2bb773',
    tokenDecimals: 18,
    exchangeAddress: '0xa25550e58ad5871b1490f0046280bc4ca5637b8f'
  },
  {
    symbol: 'MCVWP',
    name: 'MCV Whitepaper v1',
    tokenAddress: '0x13606094649143ae6c2e4f6b8f37726aae37f9d5',
    tokenDecimals: 18,
    exchangeAddress: '0xead0f53caa5f8d8d060edad297d8ef3758339406'
  },
  {
    symbol: 'Subs',
    name: 'Subscriptions',
    tokenAddress: '0x61ceac48136d6782dbd83c09f51e23514d12470a',
    tokenDecimals: 0,
    exchangeAddress: '0x30414a46d9c13df388c6ae53ae53e714a8eaf59d'
  },
  {
    symbol: 'QURA',
    name: 'QURA GLOBAL',
    tokenAddress: '0x4ee6e959d460de47dfe58e5e6fbab330ce8484b6',
    tokenDecimals: 18,
    exchangeAddress: '0x3cf50889bc7874492781d9ee5dc5ff4ab2a52333'
  },
  {
    symbol: 'ZHT',
    name: 'Zapaygo Holding Token',
    tokenAddress: '0x4a61988e2d412a0d1983f1685a0ddc9356be3751',
    tokenDecimals: 18,
    exchangeAddress: '0x97e30807473f08a2ad55448e63f3eee0c7431302'
  },
  {
    symbol: 'ETHMNY',
    name: 'Ethereum Money',
    tokenAddress: '0xbf4a2ddaa16148a9d0fa2093ffac450adb7cd4aa',
    tokenDecimals: 2,
    exchangeAddress: '0x4cdfd08c4128c48987425846763b01f1570dc825'
  },
  {
    symbol: 'JZC',
    name: 'DaJinZhuCoin',
    tokenAddress: '0x4f6bf962f8e16aa761b48e674f9034063c2b2d7f',
    tokenDecimals: 18,
    exchangeAddress: '0xb71cc76b91da3069152f2eb28367a7da7a346874'
  },
  {
    symbol: 'sEUR',
    name: 'Synth sEUR',
    tokenAddress: '0xd71ecff9342a5ced620049e616c5035f1db98620',
    tokenDecimals: 18,
    exchangeAddress: '0x11cd30774b9cd972be12e1da2b096f2761462cdb'
  },
  {
    symbol: 'GZPT',
    name: 'GozePayToken',
    tokenAddress: '0x13a399fe6c5b38b247e1477016f5fc7c3f6b3ccb',
    tokenDecimals: 0,
    exchangeAddress: '0xb48d6ea7ea5ab5ac1e67eb1476a36281de550d16'
  },
  {
    symbol: 'TEK',
    name: 'Tek Token',
    tokenAddress: '0xf9a14f42653880cb26f1e1768317f51f632a0265',
    tokenDecimals: 0,
    exchangeAddress: '0x026e86380dc95bca4928a57fdced543ade3ade60'
  },
  {
    symbol: 'DIME',
    name: 'Dimple',
    tokenAddress: '0xaf0dba1d4f9107c59c317b4388c0a54b70ea0acd',
    tokenDecimals: 8,
    exchangeAddress: '0xd877be7c080eeaca5bc2859bb62a72122a3d3864'
  },
  {
    symbol: 'ALXO',
    name: 'Alxocity',
    tokenAddress: '0x4317ea4820f8d9ea6a103553a89cb261b6ea7f2a',
    tokenDecimals: 4,
    exchangeAddress: '0xcf66ecd1b425b5c3e34bdfb2c0cde3434cb64771'
  },
  {
    symbol: 'TRAT',
    name: 'Tratok',
    tokenAddress: '0xe225aca29524bb65fd82c79a9602f3b4f9c6fe3f',
    tokenDecimals: 5,
    exchangeAddress: '0xc402a53895bf17cf3fe9b656bfadc386ed00e22b'
  },
  {
    symbol: 'UNIS',
    name: 'Universe Coin',
    tokenAddress: '0xedc87cab8bd12ca39088deaf9fdfb63503f19f85',
    tokenDecimals: 18,
    exchangeAddress: '0xf4efa741bb5650970f93bfe43a140fad293faefc'
  },
  {
    symbol: 'iBTC',
    name: 'Synth iBTC',
    tokenAddress: '0xd6014ea05bde904448b743833ddf07c3c7837481',
    tokenDecimals: 18,
    exchangeAddress: '0x90c6099bc6b3ffe6a091d83f4a55498093968079'
  },
  {
    symbol: 'USC',
    name: 'upscaleeth',
    tokenAddress: '0x01522e6c543ff04e74842abd0f2afecc5ef5c281',
    tokenDecimals: 18,
    exchangeAddress: '0xeaab41d1bff2daf0ac601f0617b668a35fadee8d'
  },
  {
    symbol: 'SXDT',
    name: 'Spectre.ai D-Token',
    tokenAddress: '0x12b306fa98f4cbb8d4457fdff3a0a0a56f07ccdf',
    tokenDecimals: 18,
    exchangeAddress: '0x89d56d03aa58aa50a2569edef3dba6b9d483fc27'
  },
  {
    symbol: 'CNCC',
    name: 'Complete New Commerce Chain',
    tokenAddress: '0xbe15c4ebb73a67ddd94b83b237d2bdde5a5079ba',
    tokenDecimals: 18,
    exchangeAddress: '0x0fc809dd1475cd6056b6d36a832cb53bcb2e8786'
  },
  {
    symbol: 'CURIO',
    name: 'ExtraCurio',
    tokenAddress: '0x4b46636afcb2bc4dd20c3d0424c4e1e6d296fabe',
    tokenDecimals: 4,
    exchangeAddress: '0xc65595d89376601c69b7292d466ee83d73dc4850'
  },
  {
    symbol: 'IHT',
    name: 'I-HSIN Token',
    tokenAddress: '0x635d136b99976d98c1588b49c4304b98c5bbf2d1',
    tokenDecimals: 18,
    exchangeAddress: '0x2f842eb3d35a0774576c3b4efedc9f69e5f1a47d'
  },
  {
    symbol: 'CAFE',
    name: 'Single Coffee Token',
    tokenAddress: '0x0f7f08a1b784d2a51357efcfb5f4874cbf5dee28',
    tokenDecimals: 18,
    exchangeAddress: '0xcf5455ff548115a5b6750b14f21e065ccc307c12'
  },
  {
    symbol: 'JNN',
    name: 'JeyennCoin',
    tokenAddress: '0x36bf67c9aa1d67a06bfec145f08e20112a54c0f7',
    tokenDecimals: 18,
    exchangeAddress: '0x049fb6ae7bb98bb9b020c0c97ecbbe37bc2d0a19'
  },
  {
    symbol: 'IHT',
    name: 'I HOUSE TOKEN',
    tokenAddress: '0xeda8b016efa8b1161208cf041cd86972eee0f31e',
    tokenDecimals: 18,
    exchangeAddress: '0x45ae2168fdbe97526aee4d9f03f270b194f66fa6'
  },
  {
    symbol: 'IDCN',
    name: 'ID Crypto Net',
    tokenAddress: '0x5acdc58a2ddf7832a6494b6d8b8cb9bfe1c9f460',
    tokenDecimals: 6,
    exchangeAddress: '0xa6f1337dbb1ac82f9fa356b24287cf1e1b936681'
  },
  {
    symbol: 'TH',
    name: 'Tobiasz Horodko Token',
    tokenAddress: '0x447345145207e06075e264ac8f7862560f33742c',
    tokenDecimals: 4,
    exchangeAddress: '0xd7cc0d9440c8d544f5cd6fa86f16dc5f94012381'
  },
  {
    symbol: 'VRX',
    name: 'Verixeum',
    tokenAddress: '0x6d5ceb96307691e697623e08be57bcb4312402d3',
    tokenDecimals: 8,
    exchangeAddress: '0x4eedec8e70864801dde4a8d18c09efbd83015788'
  },
  {
    symbol: 'BBD',
    name: 'Blockchain Board Of Derivatives Token',
    tokenAddress: '0xb79fc5505ea4f3b920ee7e3349de064226692717',
    tokenDecimals: 18,
    exchangeAddress: '0x8aa94e4f656e5284a15be6e1c93214266430121e'
  },
  {
    symbol: 'H2O',
    name: 'H2O Token',
    tokenAddress: '0xfeed1a53bd53ffe453d265fc6e70dd85f8e993b6',
    tokenDecimals: 18,
    exchangeAddress: '0xc008fe94ae71970e2b304a11328fa7ff3a444903'
  },
  {
    symbol: 'STDEX',
    name: 'stableDEX',
    tokenAddress: '0xdf44a80c17813789f60090638827aeb23698b122',
    tokenDecimals: 18,
    exchangeAddress: '0x6bdfa1b7c77b1c4fb0b3623fbac354dc76c7f164'
  },
  {
    symbol: 'CRYPL',
    name: 'Cryptolandy',
    tokenAddress: '0x1062fdf250b44697216d07e41df93824519f47aa',
    tokenDecimals: 8,
    exchangeAddress: '0x7cd9d66ac131169ecb9e55439d89b137a380d4db'
  },
  {
    symbol: 'QTC',
    name: 'Qitcoin',
    tokenAddress: '0x923c90b98ee834d118c85ddf44906ee1769df648',
    tokenDecimals: 6,
    exchangeAddress: '0x2391e2d2064f46db0d104c4165a37f84cb1629ff'
  },
  {
    symbol: 'BYT',
    name: 'Bityond Token',
    tokenAddress: '0x5afae3243d6b6b76e1ab483f68e01f2fb55ff425',
    tokenDecimals: 18,
    exchangeAddress: '0x428964de947305b837b39befadffccb445538d13'
  },
  {
    symbol: 'DEMIN',
    name: 'Demintiger',
    tokenAddress: '0x90ccc1097a9646e8b12b51c52b4fd298f014cd0c',
    tokenDecimals: 4,
    exchangeAddress: '0x2e613291c4566acc337bdc752b467ac4f9d65b94'
  },
  {
    symbol: 'SHT',
    name: 'Sibbay Health Token',
    tokenAddress: '0x3d9c6c5a7b2b2744870166eac237bd6e366fa3ef',
    tokenDecimals: 18,
    exchangeAddress: '0x9a04902c55d42cfda8cefe58daf954b7d76791ec'
  },
  {
    symbol: 'sBTC',
    name: 'Synth sBTC',
    tokenAddress: '0x9073ee83b6ce96c444547ddcaf777b9352163581',
    tokenDecimals: 18,
    exchangeAddress: '0x38cac8567fd62fdca758a072ff7dc2ea3db37f50'
  },
  {
    symbol: 'CPG',
    name: 'CryptoGambler ',
    tokenAddress: '0xf6290e6a5ff844a54108297224ecae59f2325d22',
    tokenDecimals: 18,
    exchangeAddress: '0xa7d936d79dfd06a791d8330ef301073ee2b3dc35'
  },
  {
    symbol: 'WG0',
    name: 'Wrapped Gen 0',
    tokenAddress: '0xa10740ff9ff6852eac84cdcff9184e1d6d27c057',
    tokenDecimals: 18,
    exchangeAddress: '0x7290260070c78ae718d025f8950af5532fdf0252'
  },
  {
    symbol: 'BONZ',
    name: 'LovelyBonz Token',
    tokenAddress: '0x69d3b9c3d795e0200c4a0774721aeb0e12cadb1a',
    tokenDecimals: 18,
    exchangeAddress: '0x4256d0fc4748ade7effbf3800abf666f4cb0801b'
  },
  {
    symbol: 'BTC2S',
    name: 'Bitcoin2Secure',
    tokenAddress: '0x58e8a6c0e0b58bca809f1faee01f1662c9fc460e',
    tokenDecimals: 18,
    exchangeAddress: '0x6c4dd25849f2e8cd2d2caa48304667106eb418f7'
  },
  {
    symbol: 'TILY',
    name: 'Instantily',
    tokenAddress: '0x834625f5d8b006d70a6caaeef73c29442f156daf',
    tokenDecimals: 18,
    exchangeAddress: '0x22859a79d5a71c8427ba0c5428f9434ce1ea96b7'
  },
  {
    symbol: 'LGO',
    name: 'LGO Token',
    tokenAddress: '0x0a50c93c762fdd6e56d86215c24aaad43ab629aa',
    tokenDecimals: 8,
    exchangeAddress: '0x3165fb3cbc8371424b9d3ff737e9e33ffd5147ce'
  },
  {
    symbol: 'xEUR',
    name: 'xEuro',
    tokenAddress: '0xe577e0b200d00ebdecbfc1cd3f7e8e04c70476be',
    tokenDecimals: 0,
    exchangeAddress: '0x1c751c4244686e22cd005ba80a8d3453bf41e4b7'
  },
  {
    symbol: 'ExC',
    name: 'ExCash for ExMind',
    tokenAddress: '0xd46c213b00d3ea63e9efd50e2a873937dc635da5',
    tokenDecimals: 8,
    exchangeAddress: '0xc889eb7ac79b7a41e8715a3ffd35664dcfa9c56e'
  },
  {
    symbol: 'WEB',
    name: 'Webcoin',
    tokenAddress: '0x840fe75abfadc0f2d54037829571b2782e919ce4',
    tokenDecimals: 18,
    exchangeAddress: '0x9c495737fbd91ba4052ac6781c3e0b040f02b6b1'
  },
  {
    symbol: 'RKFL',
    name: 'RocketFuel',
    tokenAddress: '0xdbf0fac1499a931ed6e5f6122dbbcd3b80f66c7e',
    tokenDecimals: 8,
    exchangeAddress: '0x010e2558eab0639edadc9f83c81cc87df66f8029'
  },
  {
    symbol: 'BFZ',
    name: 'BetaFunds Token',
    tokenAddress: '0xcfabaff3bb057ba878f43ce027c9266d2f900561',
    tokenDecimals: 18,
    exchangeAddress: '0x0227e756843185e338be01e82b99c298b2869da5'
  },
  {
    symbol: 'ISLABNT',
    name: 'Insula Smart Relay Token',
    tokenAddress: '0x6b90562ed23b3e0a775e981cd63c8b78c8ade2f7',
    tokenDecimals: 18,
    exchangeAddress: '0x9d1f5468df01bb50f17b88a439f39e986e9accbe'
  },
  {
    symbol: 'CDR',
    name: 'Depositary Receipt',
    tokenAddress: '0x3feb48a94abc87b79e32bd213625405876dafb1c',
    tokenDecimals: 18,
    exchangeAddress: '0xff2743c4da7aeca66511dcc9b2e57e9aa5082264'
  },
  {
    symbol: 'STRM',
    name: 'Music Stream',
    tokenAddress: '0x57d86c0a6f5888a92204b459d7f7669488aa9b7e',
    tokenDecimals: 18,
    exchangeAddress: '0x2a73413dc7df227eb7c1075923dc92dc860af664'
  },
  {
    symbol: '0GOLD',
    name: 'ZeroGold',
    tokenAddress: '0x6ef5bca539a4a01157af842b4823f54f9f7e9968',
    tokenDecimals: 8,
    exchangeAddress: '0x32adc686c167a986b3de8b632dd30ad120074935'
  },
  {
    symbol: 'EST',
    name: 'Estate Coin',
    tokenAddress: '0x0efc2390c79c47452898a234a27f2b9c39a7a725',
    tokenDecimals: 18,
    exchangeAddress: '0xfd63e9d72547861d0b74fb59df13feb562b12d8b'
  },
  {
    symbol: 'BTCMINVOL',
    name: 'BTC Min Volatility Set',
    tokenAddress: '0x81c55017f7ce6e72451ced49ff7bab1e3df64d0c',
    tokenDecimals: 18,
    exchangeAddress: '0x80984e147cf31d1351710f556135e4329bb5788d'
  },
  {
    symbol: 'KICK',
    name: 'KickCoin',
    tokenAddress: '0x27695e09149adc738a978e9a678f99e4c39e9eb9',
    tokenDecimals: 8,
    exchangeAddress: '0x82fa916aca99a74684e051777e47ac5c45b139cd'
  },
  {
    symbol: 'PTRv',
    name: 'PETRO Venezolano',
    tokenAddress: '0x25a21c7be48fad500169ed688f070a96ae8e08f1',
    tokenDecimals: 8,
    exchangeAddress: '0xe7105c32ddbaa65736afe0dfc48056fe1f729fa1'
  },
  {
    symbol: 'TT',
    name: 'TOKTOK TOKEN',
    tokenAddress: '0xfdb6514d4b1600c5c3fb96d76cf11c0358679578',
    tokenDecimals: 18,
    exchangeAddress: '0x5a1b4e62bf7bd7da87f4e17ca6707daa2b80b8ff'
  },
  {
    symbol: 'ARC',
    name: 'ARTCHAINCOIN',
    tokenAddress: '0x2b0cc10247359b1faf46345dbb94b439e2a83143',
    tokenDecimals: 8,
    exchangeAddress: '0x6de5cb2c119755733bccde53c987ae9936c1f23f'
  },
  {
    symbol: 'sDEFI',
    name: 'Synth sDEFI',
    tokenAddress: '0xe1afe1fd76fd88f78cbf599ea1846231b8ba3b6b',
    tokenDecimals: 18,
    exchangeAddress: '0x33191d4981e86b498f3fdba9bc8f6ae7d5a72774'
  },
  {
    symbol: 'CNCC',
    name: 'Complete New Commerce Chain',
    tokenAddress: '0x747c453f1825a86598de6c0de62db7d6d15893f0',
    tokenDecimals: 18,
    exchangeAddress: '0xade6aaa2998f010464f133e441764a5fa94130cd'
  },
  {
    symbol: 'RAISE',
    name: 'Raise',
    tokenAddress: '0x10ba8c420e912bf07bedac03aa6908720db04e0c',
    tokenDecimals: 18,
    exchangeAddress: '0x5c15be94476f4433303873be5d3ff8a03817107e'
  },
  {
    symbol: 'ODE',
    name: 'ODE',
    tokenAddress: '0x6f6d15e2dabd182c7c0830db1bdff1f920b57ffa',
    tokenDecimals: 2,
    exchangeAddress: '0x70f7acfd9f5ad60bbf6cb51e671b99eab43605fa'
  },
  {
    symbol: 'LUN',
    name: 'Lunyr Token',
    tokenAddress: '0xfa05a73ffe78ef8f1a739473e462c54bae6567d9',
    tokenDecimals: 18,
    exchangeAddress: '0x0db76ffe23a954b046a0667cff540111df2862a7'
  },
  {
    symbol: 'LBGT',
    name: 'Landing Block Governance Token',
    tokenAddress: '0xc402cb25477215a957f2045273461ad51cf1230b',
    tokenDecimals: 18,
    exchangeAddress: '0xc830fd29e3f5a92d2ad693b894ae238e8616c0ba'
  },
  {
    symbol: 'SLP',
    name: 'Small Love Potion',
    tokenAddress: '0x37236cd05b34cc79d3715af2383e96dd7443dcf1',
    tokenDecimals: 0,
    exchangeAddress: '0xf4158e282f2317597e31c028978c7fb7275d6fb4'
  },
  {
    symbol: '0316',
    name: '三月既望',
    tokenAddress: '0x206b1ff0f479a422f5916ff1f0fd294346b907f3',
    tokenDecimals: 18,
    exchangeAddress: '0x71958b7013085b8169640e37cdcefc7a193ed74c'
  },
  {
    symbol: 'CUI',
    name: 'CuiToken',
    tokenAddress: '0x873642b734ed748bf4088617d7fc3002f7e9a0ad',
    tokenDecimals: 18,
    exchangeAddress: '0xe22382185998c69de2571f38d6a379cd8e32d662'
  },
  {
    symbol: 'QUIT',
    name: 'Quitcoin',
    tokenAddress: '0x7b937131b8d1761fc0722b632517ff46e5349496',
    tokenDecimals: 10,
    exchangeAddress: '0xc70650cdae9a7da2c2203bafc4acb89a84509862'
  },
  {
    symbol: 'SS',
    name: 'SS Token',
    tokenAddress: '0x336e467aa97e8bab88a8dd88de3e230046488a24',
    tokenDecimals: 0,
    exchangeAddress: '0xc31e68f7ad6832fa3850dbaa1fba04c52f36a13a'
  },
  {
    symbol: 'ERD',
    name: 'ELDORADO TOKEN',
    tokenAddress: '0x12dc767728105aa415dd720dfbd0ea1d85841172',
    tokenDecimals: 2,
    exchangeAddress: '0xdb08c19336e041061103d71745488c690f4a0535'
  },
  {
    symbol: 'CHA',
    name: 'Chateau Coin',
    tokenAddress: '0xaf0619feb09a791bb842ada234ae6ba8033d3490',
    tokenDecimals: 18,
    exchangeAddress: '0xc8dcd65635a6e26775eba53b9d5d76a99c3ce858'
  },
  {
    symbol: 'XMD',
    name: 'XMD Token',
    tokenAddress: '0xea2524bb0773de6a5f641aa97294401f116572e7',
    tokenDecimals: 8,
    exchangeAddress: '0xc736205ce28d3c6e854aa191661670d02b542e1d'
  },
  {
    symbol: 'RM',
    name: 'Reichsmark',
    tokenAddress: '0xe6796e5e1ff3052b71e76bb5958d4841c9e9ddf1',
    tokenDecimals: 2,
    exchangeAddress: '0x8271e233466ff21c38b30b3079554e33f8931fdb'
  },
  {
    symbol: '$$',
    name: 'SS Token',
    tokenAddress: '0x4d84729ab970546c54549b53438c641d9beec1c5',
    tokenDecimals: 2,
    exchangeAddress: '0xb244911ed2cd5ef0ad1b8249fd7632febc8211c5'
  },
  {
    symbol: 'FM',
    name: 'Famous Masterpiece',
    tokenAddress: '0x1a772225766aedf025a64a5e7e893c5067de0698',
    tokenDecimals: 6,
    exchangeAddress: '0x718e1346499e43e2fec6f2248f21b25031a4d007'
  },
  {
    symbol: 'ART',
    name: 'CryptoArt',
    tokenAddress: '0x23f0772f32508bc02bed26ef8bc29acafbdf39a6',
    tokenDecimals: 18,
    exchangeAddress: '0xccdef90aa3a4c3d7b814052c16d4e55f70f18b2a'
  },
  {
    symbol: 'YMB',
    name: 'Yuamble',
    tokenAddress: '0x17a8f6ead7256e6620109bb02cb21a29b6bd7d3e',
    tokenDecimals: 6,
    exchangeAddress: '0xe6d4e92df180c092db9cb7d371e6ce84de5903c5'
  },
  {
    symbol: 'ric',
    name: 'auricoin',
    tokenAddress: '0xe610e04a9d8120afc2730d21cd71564cddd3d9b7',
    tokenDecimals: 8,
    exchangeAddress: '0x65425cfb85fca0bad3d7c23b18a14bd3c36ad263'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x70f7acfd9f5ad60bbf6cb51e671b99eab43605fa',
    tokenDecimals: 18,
    exchangeAddress: '0xf610ce2f724de65c35e10beba05c14d059387749'
  },
  {
    symbol: 'ACD',
    name: 'Apple Card Token',
    tokenAddress: '0xea6d4d7b36c00b3611de0b0e1982b12e9e736c66',
    tokenDecimals: 18,
    exchangeAddress: '0x20ce044d33623eef55c197a761314d2ff49ba02b'
  },
  {
    symbol: 'LND',
    name: 'Lendingblock',
    tokenAddress: '0x0947b0e6d821378805c9598291385ce7c791a6b2',
    tokenDecimals: 18,
    exchangeAddress: '0x3e788682063349ede21f07ff749d9a3b8ffcad67'
  },
  {
    symbol: 'XTZ',
    name: 'Tezos',
    tokenAddress: '0x23693431de4cccae05d0caf63be0f1dcfcdf4906',
    tokenDecimals: 8,
    exchangeAddress: '0x9227894cebf543e4618c0d5ad3282d919a6c04c6'
  },
  {
    symbol: 'NEXXO',
    name: 'NEXXO',
    tokenAddress: '0x2c7fa71e31c0c6bb9f21fc3c098ac2c53f8598cc',
    tokenDecimals: 18,
    exchangeAddress: '0xd8df47a0e818fc168664b9964409ab620942c4a0'
  },
  {
    symbol: 'MNG',
    name: 'MassNergy',
    tokenAddress: '0xc6da78dadfe7b8c681ec62bceb4b7d3009d66fce',
    tokenDecimals: 9,
    exchangeAddress: '0x2f5a1de9149f74a9401676d74428c6a3d7cc70e6'
  },
  {
    symbol: 'MNG',
    name: 'MassNergyxl',
    tokenAddress: '0x805af0680f76f913cd7f67ce57236a56dacb7215',
    tokenDecimals: 2,
    exchangeAddress: '0xa2f13cfb1a6ad280cfee5b3e41728768a9350d8b'
  },
  {
    symbol: 'FTT',
    name: 'FarmaTrust Token',
    tokenAddress: '0x2aec18c5500f21359ce1bea5dc1777344df4c0dc',
    tokenDecimals: 18,
    exchangeAddress: '0x422455a4ba2427e8f3ae3af756e141e9401744e8'
  },
  {
    symbol: 'SPND',
    name: 'Spendcoin',
    tokenAddress: '0xddd460bbd9f79847ea08681563e8a9696867210c',
    tokenDecimals: 18,
    exchangeAddress: '0x5a015fea3d1083246c6c23afcd4920281ac29eec'
  },
  {
    symbol: '110',
    name: '110 coin',
    tokenAddress: '0x659be486869ca69ecff2a80c28c2879c46828979',
    tokenDecimals: 18,
    exchangeAddress: '0x8fb16c97b1f702cdbf1c4125cf3cf074ff5bef4e'
  },
  {
    symbol: 'DTX',
    name: 'DaTa eXchange Token',
    tokenAddress: '0x765f0c16d1ddc279295c1a7c24b0883f62d33f75',
    tokenDecimals: 18,
    exchangeAddress: '0x31047f1bda3657398b81f28f86422211725857ea'
  },
  {
    symbol: 'CSNO',
    name: 'BitDice',
    tokenAddress: '0x29d75277ac7f0335b2165d0895e8725cbf658d73',
    tokenDecimals: 8,
    exchangeAddress: '0x2c42e1271cfb425df7b0c45756f911c896c69fd6'
  },
  {
    symbol: 'CAT',
    name: 'BlockCAT Token',
    tokenAddress: '0x56ba2ee7890461f463f7be02aac3099f6d5811a8',
    tokenDecimals: 18,
    exchangeAddress: '0xe9fb1d6df1eb611d917b1efbc4f3456e05a5314c'
  },
  {
    symbol: 'SPD',
    name: 'SPINDLE',
    tokenAddress: '0x1dea979ae76f26071870f824088da78979eb91c8',
    tokenDecimals: 18,
    exchangeAddress: '0x93656eefb2ba2decba4aa5eae0ca444f2692ad14'
  },
  {
    symbol: 'GBC',
    name: 'GBCoin',
    tokenAddress: '0xd895a50d3ccda14751167ea2c586ee8df3f0fa94',
    tokenDecimals: 18,
    exchangeAddress: '0xd8c1fa5f424d5513394f72cae505aa3cd42db160'
  },
  {
    symbol: 'ETM',
    name: 'Ethermoney',
    tokenAddress: '0x28926c46bc5c0aeab39c72f7c1201bfb8056d509',
    tokenDecimals: 18,
    exchangeAddress: '0xdc1fcb2659c49fe1726692594d5f9afbe6fd1883'
  },
  {
    symbol: 'GBC',
    name: 'GBCoin',
    tokenAddress: '0x638abd6f39ff141b2117e40c0b928659d76d2d08',
    tokenDecimals: 18,
    exchangeAddress: '0x0113081134c5d0047623914758ce595ac869aa9c'
  },
  {
    symbol: 'DGPT',
    name: 'DigiPulse Token',
    tokenAddress: '0xf6cfe53d6febaeea051f400ff5fc14f0cbbdaca1',
    tokenDecimals: 18,
    exchangeAddress: '0x28888e8ddd54dbab2b0587444517373a0e5b1bea'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x3fcb35aada553a888433efc45df1b70937a5942d',
    tokenDecimals: 18,
    exchangeAddress: '0x3becabd992b92e0c9e37bff36ec5bb4d469816f4'
  },
  {
    symbol: 'GOLD',
    name: 'GoldChain',
    tokenAddress: '0x58f83cd5030abfba14b9603021661ca1fd09b9a2',
    tokenDecimals: 18,
    exchangeAddress: '0x039b1f81025093159f371b98a6043118b2cab603'
  },
  {
    symbol: 'LSD',
    name: 'Liquidity StakeD',
    tokenAddress: '0x694d6ab8b31bba22ccb670889e63c08193b837c7',
    tokenDecimals: 18,
    exchangeAddress: '0x3c2c07e925f8d7c8c38840a4678575fecd64d279'
  },
  {
    symbol: 'LcDAI',
    name: 'MARKET Protocol Long Position Token',
    tokenAddress: '0xd8478b227229ada963ad1618ca306e80bbd5c7fe',
    tokenDecimals: 5,
    exchangeAddress: '0x1e673caf81dee574ed34d3de2d0efeaa9b1ebe98'
  },
  {
    symbol: 'AE',
    name: 'Aeternity',
    tokenAddress: '0x5ca9a71b1d01849c0a95490cc00559717fcf0d1d',
    tokenDecimals: 18,
    exchangeAddress: '0xf50cffc9ed41f268602b76b991adf62a11873b1b'
  },
  {
    symbol: 'ScDAI',
    name: 'MARKET Protocol Short Position Token',
    tokenAddress: '0x3e2e9c56b372b412e46c47ca3eb66b6b3e5b9c5b',
    tokenDecimals: 5,
    exchangeAddress: '0x0a933633a1057ae80a8df17dd2dac7c934cc701f'
  },
  {
    symbol: 'ETHBNT',
    name: 'BNT Smart Token Relay',
    tokenAddress: '0xb1cd6e4153b2a390cf00a6556b0fc1458c4a5533',
    tokenDecimals: 18,
    exchangeAddress: '0xa187cd32e738de06b6a75edf5e32f0313597d5ba'
  },
  {
    symbol: 'ETM',
    name: 'ETHERMONEY',
    tokenAddress: '0xfb0753106a5c16eeb0ee61ad688ede7bbb7a2f6c',
    tokenDecimals: 4,
    exchangeAddress: '0x8bfcbee458e5649a34efd6d9a0818e7a77349dfe'
  },
  {
    symbol: 'TRB',
    name: 'Tellor',
    tokenAddress: '0x870cbbd204d5e2317c60374888e4b6be3bfa092b',
    tokenDecimals: 1,
    exchangeAddress: '0x8c04639bfa17720fe5eca159354005e15f13c550'
  },
  {
    symbol: 'GAD',
    name: 'Garuda Token',
    tokenAddress: '0x610740af3f25b72892ba21b98bfb8595f2cde386',
    tokenDecimals: 8,
    exchangeAddress: '0x602bc76a0990d7576b989b165e1685ce74ec8211'
  },
  {
    symbol: 'SPONT',
    name: 'SPONT',
    tokenAddress: '0x3a4282b8ffbae5de5ab6e29bad3d08d83902ebd2',
    tokenDecimals: 4,
    exchangeAddress: '0x245d8350eeadbf5f5e68362fd976b1b6778dfacd'
  },
  {
    symbol: 'GLC',
    name: 'Legendary Chest',
    tokenAddress: '0x20d4cec36528e1c4563c1bfbe3de06aba70b22b4',
    tokenDecimals: 0,
    exchangeAddress: '0x738a94c5ffd57a7bba7fbc58c0c4a9913925e700'
  },
  {
    symbol: 'MM',
    name: 'Moose',
    tokenAddress: '0xcf0425a35f1fa900bb347cb996d3094d1df3cd48',
    tokenDecimals: 4,
    exchangeAddress: '0x391d74c67301d77ff9634d03b4a94778b44acb64'
  },
  {
    symbol: 'BONZ',
    name: 'LovelyBonz',
    tokenAddress: '0x1a89d5ad11e565bcdb3cfae70b2cd6571725a3ef',
    tokenDecimals: 18,
    exchangeAddress: '0x7c90f44ce2e60a1d07b94392f1e867677846b522'
  },
  {
    symbol: 'LSD',
    name: 'Liquidity StakeD',
    tokenAddress: '0x433d2a8080ec43fc04ce7f11d2039ccc23098a98',
    tokenDecimals: 18,
    exchangeAddress: '0x4ffce366e00fda59629b1ab69e70afcec754e0df'
  },
  {
    symbol: 'CNB',
    name: 'Coinsbit Token',
    tokenAddress: '0xc538143202f3b11382d8606aae90a96b042a19db',
    tokenDecimals: 18,
    exchangeAddress: '0x93fc1ac91aabba493ccc307ffb753c94f4edc680'
  },
  {
    symbol: 'BONZ',
    name: 'LovelyBonz',
    tokenAddress: '0xaa0bb78c2ac8cfc98bddba7c82bde6247fbd1b73',
    tokenDecimals: 18,
    exchangeAddress: '0x1ff36c72c234e84ee5f47cf4f117d54dfb0b262f'
  },
  {
    symbol: 'ODEM',
    name: 'ODEM Token',
    tokenAddress: '0xbf52f2ab39e26e0951d2a02b49b7702abe30406a',
    tokenDecimals: 18,
    exchangeAddress: '0xa9c2d0edae3c6ce3f23b8a49bdcdd5f33be53614'
  },
  {
    symbol: 'LTK',
    name: 'Litecoin Token',
    tokenAddress: '0x9eb05a7f953ec18a39ea3adbe5a819fd5ac0bad1',
    tokenDecimals: 8,
    exchangeAddress: '0x05b712572d762f212eeb21d99522e548fc57071d'
  },
  {
    symbol: 'XLMC',
    name: 'STELLAR CLASSIC',
    tokenAddress: '0xa5aa4e921d268e8be14be8167d5f3e2b8f13cc75',
    tokenDecimals: 8,
    exchangeAddress: '0x90a200ad720d90d61619d4b8108e2a799a1d16b0'
  },
  {
    symbol: 'JRT',
    name: 'Jarvis Reward Token',
    tokenAddress: '0x8a9c67fee641579deba04928c4bc45f66e26343a',
    tokenDecimals: 18,
    exchangeAddress: '0x634e27269a029edb2b70b5ef43273f5eed9ebcc2'
  },
  {
    symbol: 'REALTOKEN-5942-AUDUBON-RD-DETROIT-MI',
    name: 'RealToken 5942 Audubon Road Detroit MI',
    tokenAddress: '0x43688910273f199b8ae2ca018c13918fb3d37b58',
    tokenDecimals: 18,
    exchangeAddress: '0x7671f9c37bfcee829f54d4bdd2a226930c91df7b'
  },
  {
    symbol: 'USDG',
    name: 'USDG',
    tokenAddress: '0xaf4421f0d43c5c1d54380736e3f738b159417744',
    tokenDecimals: 3,
    exchangeAddress: '0x5b92bba98cf0c6b473cef943424c17d98bf615f2'
  },
  {
    symbol: 'BBK',
    name: 'BrickblockToken',
    tokenAddress: '0x4a6058666cf1057eac3cd3a5a614620547559fc9',
    tokenDecimals: 18,
    exchangeAddress: '0x15d904eb6456966d135cef6af65c8a999634077d'
  },
  {
    symbol: 'STT',
    name: 'Scatter.cx',
    tokenAddress: '0xac9bb427953ac7fddc562adca86cf42d988047fd',
    tokenDecimals: 18,
    exchangeAddress: '0x9bf7805f5deb58dbb881e05b1af09819f8e90eaa'
  },
  {
    symbol: 'NEXXO',
    name: 'Nexxo Tokens',
    tokenAddress: '0x278a83b64c3e3e1139f8e8a52d96360ca3c69a3d',
    tokenDecimals: 18,
    exchangeAddress: '0x49c722e12c4642e2d13795a6422e355755fe7b6d'
  },
  {
    symbol: 'GZPT',
    name: 'GozePayToken',
    tokenAddress: '0x2e320fe846581f2ddc73ca391cbbe01d9968d5fb',
    tokenDecimals: 0,
    exchangeAddress: '0xd5ab3b8bb2e4ae0750957a49e52e3e1fba1eb751'
  },
  {
    symbol: 'AQRS',
    name: 'Aquarius',
    tokenAddress: '0x8b049b6e6117d4a758df5e247817516bb56395ec',
    tokenDecimals: 6,
    exchangeAddress: '0x45487365ef63a257ce6c38c39e9e3c5541bfba86'
  },
  {
    symbol: 'KUBR',
    name: 'KUBERA',
    tokenAddress: '0x8669f39469abe717a567d2a7243b6379b5fb8ae0',
    tokenDecimals: 7,
    exchangeAddress: '0x88cc4e8eff91c70ea7a731a152e1df9e826df081'
  },
  {
    symbol: 'XAU',
    name: 'Goldneum',
    tokenAddress: '0xdd32c6a39a06d079e467687a0252b02a36ee2b33',
    tokenDecimals: 18,
    exchangeAddress: '0x4839f54eb79a4d2f984d8769805facacdd017e80'
  },
  {
    symbol: "ETM",
    name: "ETHERMONEY",
    tokenAddress: "0xfb0753106a5c16eeb0ee61ad688ede7bbb7a2f6c",
    tokenDecimals: 4,
    exchangeAddress: "0x8bfcbee458e5649a34efd6d9a0818e7a77349dfe"
  },
  {
    symbol: "DDN",
    name: "Daily Divs Network",
    tokenAddress: "0xdd17d00c4bba48008d49bb4cc292819f5a4282d4",
    tokenDecimals: 18,
    exchangeAddress: "0xa59cd8c474ea32b041ebe4a6e0563bd6e8cd91f4"
  },
  {
    symbol: "$PEW",
    name: "PEW PEW PEW",
    tokenAddress: "0x892091bdd49fe955859d4bbb8a9a2b7685ccec82",
    tokenDecimals: 18,
    exchangeAddress: "0x5489ccd5f398332c7e0bf30d1fae6eee7f9b565e"
  },
  {
    symbol: "INO",
    name: "Ino Coin",
    tokenAddress: "0xc9859fccc876e6b4b3c749c5d29ea04f48acb74f",
    tokenDecimals: 0,
    exchangeAddress: "0xe3f2f02d3ff2e0d1df768d0256ae1e36b7213fb5"
  },
  {
    symbol: "RRC",
    name: "RenRenCoin",
    tokenAddress: "0xdc7836bc6c84c51275365e337fd147db2dc7b3c3",
    tokenDecimals: 18,
    exchangeAddress: "0x0d33b109bcc04ee9996dd5ff76278cac1560c885"
  },
  {
    symbol: "KOWAL",
    name: "Kowalski Token",
    tokenAddress: "0xde06a39dd3b682338878c4fbab12c38d5e684f69",
    tokenDecimals: 2,
    exchangeAddress: "0x39bf5669440e7d6275945a643981c5d55b193415"
  },
  {
    symbol: "HUSD",
    name: "HUSD",
    tokenAddress: "0xdf574c24545e5ffecb9a659c229253d4111d87e1",
    tokenDecimals: 8,
    exchangeAddress: "0x15f09d56bf4d6a1aa2bfeea9bb0d3f0bdd6f80ac"
  },
  {
    symbol: "DAPS",
    name: "DAPSTOKEN",
    tokenAddress: "0x93190dbce9b9bd4aa546270a8d1d65905b5fdd28",
    tokenDecimals: 18,
    exchangeAddress: "0x38fc384f31ace471e96c60e42b1dc6e769b518f5"
  },
  {
    symbol: "GRD",
    name: "GRIND+",
    tokenAddress: "0x859beb8615977263ee2e702f06c283f7ab990b5a",
    tokenDecimals: 18,
    exchangeAddress: "0x099bb9590e331e3501c564c77c59c654c60174d1"
  },
  {
    symbol: "DLE",
    name: "DLF EURO",
    tokenAddress: "0x95bbb17f8f69d31f1465b819b45d0c3df8820988",
    tokenDecimals: 6,
    exchangeAddress: "0xac23f8645752470dce18151539b82daf5e51a863"
  },
  {
    symbol: "TBC",
    name: "ThunderBoltCoin",
    tokenAddress: "0x627974847450c45b60b3fe3598f4e6e4cf945b9a",
    tokenDecimals: 18,
    exchangeAddress: "0x2b7b3dd16488f906d190e241156984bb4274d269"
  },
  {
    symbol: "TBCBNT",
    name: "ThunderBoltCoin Smart Relay Token",
    tokenAddress: "0xb13819374575be7ced2b0896c645612164ebe772",
    tokenDecimals: 18,
    exchangeAddress: "0x17ee274931954d070c89805d0b4580562c521b51"
  },
  {
    symbol: "SCUDO",
    name: "ScudoCash",
    tokenAddress: "0xb0cc5610e590eb7215bf4d69eca2ca26b6a9bc87",
    tokenDecimals: 18,
    exchangeAddress: "0x864b64f13778a02e61b891a135150684ca1fe6a9"
  },
  {
    symbol: "HEX3D",
    name: "HEX3D.WIN",
    tokenAddress: "0x69c70ef84637e7584c6b20b41ed4665806d9f85c",
    tokenDecimals: 18,
    exchangeAddress: "0xe9b06e1e9cfb5d7523918bd8f145907f6f4e8836"
  },
  {
    symbol: "BNK",
    name: "Banker Token",
    tokenAddress: "0xc80c5e40220172b36adee2c951f26f2a577810c5",
    tokenDecimals: 8,
    exchangeAddress: "0xf09acb86dbb19e85d52439c2682d5267c3c5e71a"
  },
  {
    symbol: "SKULL",
    name: "Skull",
    tokenAddress: "0xbcc66ed2ab491e9ae7bf8386541fb17421fa9d35",
    tokenDecimals: 4,
    exchangeAddress: "0xae33701b6b48267db4bb51e472e4e7ab5aad2e3e"
  },
  {
    symbol: "LSD",
    name: "Liquidity StakeD",
    tokenAddress: "0x694d6ab8b31bba22ccb670889e63c08193b837c7",
    tokenDecimals: 18,
    exchangeAddress: "0x3c2c07e925f8d7c8c38840a4678575fecd64d279"
  },
  {
    symbol: "OPA",
    name: "Opta Token",
    tokenAddress: "0x3fe2ef1dfb1595195768627d16751d552586dce8",
    tokenDecimals: 10,
    exchangeAddress: "0x5aafb35defe9502dfdd58c59e5e62866103d5585"
  },
  {
    symbol: "STRX",
    name: "Storex",
    tokenAddress: "0x12c8b0914e6dee22c7557a0a8b928ae6cacfbcf7",
    tokenDecimals: 18,
    exchangeAddress: "0xf55d5cfa2b4ecff567cf02608391fec40232c8f4"
  },
  {
    symbol: "TLN",
    name: "Trustlines Network Token",
    tokenAddress: "0x679131f591b4f369acb8cd8c51e68596806c3916",
    tokenDecimals: 18,
    exchangeAddress: "0x61f8676cb335403836607be179f1f61e1dbbc44d"
  },
  {
    symbol: "RLCP",
    name: "RLC Points Token",
    tokenAddress: "0x25168b494408a63b1394b6ecd2a93934590cfd03",
    tokenDecimals: 4,
    exchangeAddress: "0x111dae04e4178fd3ce02e7c1c98eea1c1604d64e"
  },
  {
    symbol: "TKZ",
    name: "Tokenization",
    tokenAddress: "0xdd84745acbe5143e6656d3603d59aca20dd0b0c5",
    tokenDecimals: 18,
    exchangeAddress: "0xf145ae561724128901957d4579ead90e1b6a173b"
  },
  {
    symbol: "GDN",
    name: "Golden",
    tokenAddress: "0xa955c0e38a64f07b751a18ffb99f59f4af87aa3a",
    tokenDecimals: 18,
    exchangeAddress: "0x77672bf6ac0a1ec1d5b3fb45cfc32b830245ece4"
  },
  {
    symbol: "USDG",
    name: "USDG",
    tokenAddress: "0xf906997808f73b09c1007b98ab539b189282b192",
    tokenDecimals: 3,
    exchangeAddress: "0x620976394aeda437e7862e3471fec89de9809a34"
  },
  {
    symbol: "BCR",
    name: "BITCOREA",
    tokenAddress: "0x41bd6892e3a1aa2f62fce3b609483b72cf2d1cc7",
    tokenDecimals: 18,
    exchangeAddress: "0xed1067b588c449669d289a87f92375c9f21085b8"
  },
  {
    symbol: "PLBT",
    name: "Polybius Token",
    tokenAddress: "0x0affa06e7fbe5bc9a764c979aa66e8256a631f02",
    tokenDecimals: 6,
    exchangeAddress: "0x1b643f0f476aa6c33c76473ecb161b5e4a7e113b"
  },
  {
    symbol: "DOGE",
    name: "DOGE Token",
    tokenAddress: "0x0bc0a7b096504704e10bb19b0c6ce46232f22eda",
    tokenDecimals: 8,
    exchangeAddress: "0x91227d48b86cf338ace672290277bba2eb5d370e"
  },
  {
    symbol: "CTC",
    name: "Crypto Trade Coin",
    tokenAddress: "0x918c97179370e92a7346d8aeb2758e8b30301723",
    tokenDecimals: 18,
    exchangeAddress: "0xc84ef6b3ae18c99c432f15ae89e70894d8135eec"
  },
  {
    symbol: "POHC",
    name: "POH COIN",
    tokenAddress: "0x9ffc0287aa2083431a8f202a4eb65193359529b9",
    tokenDecimals: 8,
    exchangeAddress: "0x3d27b540150ba34eb788024fd15f48a956fe9e16"
  },
  {
    symbol: "DET",
    name: "Dragon Exchange",
    tokenAddress: "0x7d49eaac4c70abc1a659122f08c0806ae44703ef",
    tokenDecimals: 18,
    exchangeAddress: "0x921bfbd0df75c55353564c7fd0ce30829aaaaf26"
  },
  {
    symbol: "PASG",
    name: "Passive Gold",
    tokenAddress: "0x083a96c390c942def68b6343d1c651eeae604b50",
    tokenDecimals: 18,
    exchangeAddress: "0x8f193b443f05aad921f262da36d3dde6c7adfe9a"
  },
  {
    symbol: "COIN",
    name: "Coinvest COIN V3 Token",
    tokenAddress: "0xeb547ed1d8a3ff1461abaa7f0022fed4836e00a4",
    tokenDecimals: 18,
    exchangeAddress: "0x13e737c0eb32f1c77b48bb0cc319edceb260d6bc"
  },
  {
    symbol: "NKN",
    name: "NKN",
    tokenAddress: "0x5cf04716ba20127f1e2297addcf4b5035000c9eb",
    tokenDecimals: 18,
    exchangeAddress: "0x49e0a4dbddb0c2889ccc6ce7ad51654dbb65123d"
  },
  {
    symbol: "UNI-V1",
    name: "Uniswap V1",
    tokenAddress: "0x2f5b009d42917452f4f057b0998dfad4d84c7662",
    tokenDecimals: 18,
    exchangeAddress: "0x7d14b002809c6ddc961d815c0ac3bee426ce8ade"
  },
  {
    symbol: "KAT",
    name: "Kambria Token",
    tokenAddress: "0xa858bc1b71a895ee83b92f149616f9b3f6afa0fb",
    tokenDecimals: 18,
    exchangeAddress: "0xfc7e5dd2cb55fd0aa9140445620eeb8b3cca8251"
  },
  {
    symbol: "KGG",
    name: "KingsGold",
    tokenAddress: "0x9bf8a52ed07c795f85dc822897e13dec476c2363",
    tokenDecimals: 18,
    exchangeAddress: "0xd8b0efadd140980b9df65eb889ad6cb0ff78dc74"
  },
  {
    symbol: "KAASO",
    name: "Kaaso",
    tokenAddress: "0xf6bf74a97d78f2242376769ef1e79885cf1f0c1c",
    tokenDecimals: 18,
    exchangeAddress: "0x6deb055120522429f936b1b1987d4e1a4c349f15"
  },
  {
    symbol: "VNS",
    name: "HerCoin",
    tokenAddress: "0x098af16554f87546b35beccded6a5adad7b315e9",
    tokenDecimals: 18,
    exchangeAddress: "0xfe514c553f7d80415ef6a613c0f36c28b726dfea"
  },
  {
    symbol: "HGH",
    name: "HGH Token",
    tokenAddress: "0x40c6f861a08f97dfbc3c0931485bff4921975a56",
    tokenDecimals: 18,
    exchangeAddress: "0xcaf799a65effa5651d5ba9bfa95c057ec90dc151"
  },
  {
    symbol: "XAU",
    name: "Goldneum",
    tokenAddress: "0xdd32c6a39a06d079e467687a0252b02a36ee2b33",
    tokenDecimals: 18,
    exchangeAddress: "0x4839f54eb79a4d2f984d8769805facacdd017e80"
  },
  {
    symbol: "CXO",
    name: "CargoX Token",
    tokenAddress: "0xb6ee9668771a79be7967ee29a63d4184f8097143",
    tokenDecimals: 18,
    exchangeAddress: "0x885d7c61ca9865e33f6bbefec081ee4cdf42844a"
  },
  {
    symbol: "CHP",
    name: "Poker Chips",
    tokenAddress: "0xf3db7560e820834658b590c96234c333cd3d5e5e",
    tokenDecimals: 18,
    exchangeAddress: "0xeece8a4e30b46e5b456083e474b89c931248f588"
  },
  {
    symbol: "ETO",
    name: "Engage Token",
    tokenAddress: "0x4b50e6f7050f184a3657b8c5f0ef8a48596f5c8a",
    tokenDecimals: 18,
    exchangeAddress: "0xdd5168dc064efc79d632dbb2c5b66558a2d85654"
  },
  {
    symbol: "VSF",
    name: "VeriSafe",
    tokenAddress: "0xac9ce326e95f51b5005e9fe1dd8085a01f18450c",
    tokenDecimals: 18,
    exchangeAddress: "0x1e0056b00a9a2162ed314243f041d51e27d37837"
  },
  {
    symbol: "INSTAR",
    name: "Insights Network",
    tokenAddress: "0xc72fe8e3dd5bef0f9f31f259399f301272ef2a2d",
    tokenDecimals: 18,
    exchangeAddress: "0x1f89c1281c60d8ef6b78005241321bbe3bddbf40"
  },
  {
    symbol: "STX",
    name: "Suptex STX",
    tokenAddress: "0x9c6452092abacac981736bdf384740cf0e37901a",
    tokenDecimals: 18,
    exchangeAddress: "0xdb7dcf6f408708ee6b90ec0a6b1e7b9f408291d7"
  },
  {
    symbol: "KAV",
    name: "KAVAL",
    tokenAddress: "0x781fc0bcfc20f5d395779724c8698c6442d65e59",
    tokenDecimals: 8,
    exchangeAddress: "0x08ee8d105f401a6bdd1b1a7f8fca541a08bd13ca"
  },
  {
    symbol: "NXC",
    name: "Nixma Coin",
    tokenAddress: "0x93ec2b9d85a7f4b0abc66abf4ca8d5e50c355516",
    tokenDecimals: 18,
    exchangeAddress: "0xf623d64ae122a0539536a04fba32cabeb2a303df"
  },
  {
    symbol: "STRAW",
    name: "STRAW Coin",
    tokenAddress: "0xb92179b36794e169a2e5582ece92936480754da9",
    tokenDecimals: 18,
    exchangeAddress: "0x009593513eba0b19766a779e94ee3f432b633237"
  },
  {
    symbol: "MUXE",
    name: "MUXE Token",
    tokenAddress: "0x515669d308f887fd83a471c7764f5d084886d34d",
    tokenDecimals: 18,
    exchangeAddress: "0x5796383bc0b02076ae0798fcbb9761478fd97603"
  },
  {
    symbol: "JRT",
    name: "Jarvis Reward Token",
    tokenAddress: "0x082582c4271f3f6dd5f4306cbcac822076516c53",
    tokenDecimals: 18,
    exchangeAddress: "0x475481f46da08727fff0ca69e339be87d732031d"
  },
  {
    symbol: "TEO",
    name: "Tokeneo",
    tokenAddress: "0x70f414b2bcc447f8e41a57c357c20e3ad1bb864d",
    tokenDecimals: 18,
    exchangeAddress: "0x4957a4338b05dfaa95c001a549fbf26662cf4db7"
  },
  {
    symbol: "DANK",
    name: "Dank Signals",
    tokenAddress: "0xc354dde9ac078ed9572df94063c300d1d92468fd",
    tokenDecimals: 18,
    exchangeAddress: "0x761b53593d6959dab73b68c216b735a404fee59b"
  },
  {
    symbol: "ECOM",
    name: "Omnitude Token",
    tokenAddress: "0x171d750d42d661b62c277a6b486adb82348c3eca",
    tokenDecimals: 18,
    exchangeAddress: "0x17988c2d019e954be15128631fe9f6cdde05aa5e"
  },
  {
    symbol: "INFT",
    name: "Infinito Token",
    tokenAddress: "0x83d60e7aed59c6829fb251229061a55f35432c4d",
    tokenDecimals: 6,
    exchangeAddress: "0xe32f1d8795458c049d226bce1f0675870a6a9476"
  },
  {
    symbol: "PLY",
    name: "PLAY",
    tokenAddress: "0xfb41f7b63c8e84f4ba1ecd4d393fd9daa5d14d61",
    tokenDecimals: 18,
    exchangeAddress: "0x8fc12e88a8dfddd65c6cb6c3ff1f08c26e5bcf24"
  },
  {
    symbol: "ECT",
    name: "SuperEdge",
    tokenAddress: "0x4ccc3759eb48faf1c6cfadad2619e7038db6b212",
    tokenDecimals: 8,
    exchangeAddress: "0x8f565323634fd9949860d6ae1031df459429efc1"
  },
  {
    symbol: "QUAD",
    name: "QuadCore Chain",
    tokenAddress: "0xe0e705c9bff67188a79dc5f59f0b2675031a6055",
    tokenDecimals: 8,
    exchangeAddress: "0x1cb48621a6e0f04442cd3e8b95fd6ee49921a7d9"
  },
  {
    symbol: "SCB",
    name: "SCB",
    tokenAddress: "0x8aaa0d43cc86ed98b7aa9c8e1f87a319cd873dc4",
    tokenDecimals: 4,
    exchangeAddress: "0x51083be1c8ffbedcec56f28aa41b6707310ac489"
  },
  {
    symbol: "BTCA",
    name: "BitAir",
    tokenAddress: "0x02725836ebf3ecdb1cdf1c7b02fcbbfaa2736af8",
    tokenDecimals: 8,
    exchangeAddress: "0xcf54672b4d3a4477a5ef3031206d06f54fef654a"
  },
  {
    symbol: "PYGOZ",
    name: "PYGOZ",
    tokenAddress: "0xbb98fc1fd1080d2b8bdad75c51d30b50c6f59b62",
    tokenDecimals: 4,
    exchangeAddress: "0xa8566d5ad1ba44cd763d8ba8846310a7b12e5647"
  },
  {
    symbol: "WGM",
    name: "WGM",
    tokenAddress: "0x219803d17f3067eb53d521ba8948d2734f402f7d",
    tokenDecimals: 4,
    exchangeAddress: "0x4ee32485431b366bb7e8a3a200954265c5f7cd57"
  },
  {
    symbol: "FACE",
    name: "Faceter Token",
    tokenAddress: "0x1ccaa0f2a7210d76e1fdec740d5f323e2e1b1672",
    tokenDecimals: 18,
    exchangeAddress: "0xd5544bf3a1e9b364fb81c6f541c35602e91becf3"
  },
  {
    symbol: "UNI-V1",
    name: "Uniswap V1",
    tokenAddress: "0x93ff2c787c140c4ce21f01cc211fbdace274077f",
    tokenDecimals: 18,
    exchangeAddress: "0x7a3ecac09316e3c10b9158887704422e2469f141"
  },
  {
    symbol: "TRUST",
    name: "Harmony Block Capital",
    tokenAddress: "0x0ee815f8be0b0259e2657c8b8d1e57bd3d60f26b",
    tokenDecimals: 6,
    exchangeAddress: "0xabf6fbb379f8fb359b74c341d849d64816894e76"
  },
  {
    symbol: "aDAI",
    name: "Aave Interest bearing DAI",
    tokenAddress: "0x363edc62b8236a0079c00320340485ee0e7b17ae",
    tokenDecimals: 18,
    exchangeAddress: "0x302c7a502524179768ee47d04d43f0cad0f5724e"
  },
  {
    symbol: "EMR",
    name: "Emaar Utility Token",
    tokenAddress: "0x745d62d3b23344ca200beb83effecc8f762057ed",
    tokenDecimals: 18,
    exchangeAddress: "0xfb3e8f087ad7e732741989de0afc3bfcd39ca346"
  },
  {
    symbol: "LSNX_20200114",
    name: "MARKET Protocol Long Position Token",
    tokenAddress: "0x5bcf04986e164edb7ea45f6e5fb8976b7fcdb3d8",
    tokenDecimals: 5,
    exchangeAddress: "0xfb234ad911eb1e4b52121591668ff9c5ce72feb2"
  },
  {
    symbol: "SSNX_20200114",
    name: "MARKET Protocol Short Position Token",
    tokenAddress: "0x72cdfdc0f6dfd6e1805c8714766bf8d0a2b88038",
    tokenDecimals: 5,
    exchangeAddress: "0x33c9a6925044905f861e3da62b0737a44f92146a"
  },
  {
    symbol: "RONC",
    name: "RONCoin",
    tokenAddress: "0xf1b819fdb689f43afc161db789800ed799f18388",
    tokenDecimals: 18,
    exchangeAddress: "0x9567e37fedd6fd60186d4829a70dfac7c9907714"
  },
  {
    symbol: "CMS",
    name: "COMSA",
    tokenAddress: "0xf83301c5cd1ccbb86f466a6b3c53316ed2f8465a",
    tokenDecimals: 6,
    exchangeAddress: "0x87d4cc18b2ee0fb2d46f369128eb6afc0278196d"
  },
  {
    symbol: "Sp",
    name: "Sponsorships",
    tokenAddress: "0x0ab346a16cea1b1363b20430c414eab7bc179324",
    tokenDecimals: 0,
    exchangeAddress: "0x15ea569369b48b1dcc4571beb35142ee14331356"
  },
  {
    symbol: "ANJ",
    name: "Aragon Network Juror",
    tokenAddress: "0xcd62b1c403fa761baadfc74c525ce2b51780b184",
    tokenDecimals: 18,
    exchangeAddress: "0x64a9edd3f5fce0252cd708e26c8dd11205742826"
  },
  {
    symbol: "PYRA",
    name: "PYRAHEX.NETWORK",
    tokenAddress: "0x3f83c5f5e89f604883ac2454edd287abea343ec2",
    tokenDecimals: 8,
    exchangeAddress: "0x35ec0972457aef3944dafe020a39477d4e3af1a3"
  },
  {
    symbol: "EECO",
    name: "E Coin",
    tokenAddress: "0x5ad432ad3ccf0239dc56d3540a1e5e5cbafb37c3",
    tokenDecimals: 18,
    exchangeAddress: "0x6f103b55de3ed6ecd5b8c99ac5eccf2821db965a"
  },
  {
    symbol: "OD",
    name: "Origin D",
    tokenAddress: "0x3c2cf21b9d4b543b93a9bcfe637f673d8bd944d8",
    tokenDecimals: 18,
    exchangeAddress: "0x1d9fbf656b1a5d441038a4b63709909ce6961203"
  },
  {
    symbol: "KEY",
    name: "KEY",
    tokenAddress: "0x4cd988afbad37289baaf53c13e98e2bd46aaea8c",
    tokenDecimals: 18,
    exchangeAddress: "0x5780bcd22e3c08c4b6b5c47c406ea6dc53e278be"
  },
  {
    symbol: "CIEX",
    name: "ChinaInvestmentExchangeToken",
    tokenAddress: "0x195336ffb6792b8e268d206e985e931e236539d6",
    tokenDecimals: 18,
    exchangeAddress: "0x31ba13a00b2d7d7e3ae6740e7485b883f3c8d1f4"
  },
  {
    symbol: "MANA",
    name: "Decentraland",
    tokenAddress: "0xc51c4405aab4dd716c2f2873ff7565eb68fdb36f",
    tokenDecimals: 18,
    exchangeAddress: "0x60af3d8212d20db13486388ef7129a3de312ceb9"
  },
  {
    symbol: "💲PC",
    name: "Star Pacific Coin",
    tokenAddress: "0xcf7d119bcb6822283003adc7c1a40e9ae7097b75",
    tokenDecimals: 1,
    exchangeAddress: "0xd1fd7bef3074fda1cc6abd19630a16d7e7dd9efc"
  },
  {
    symbol: "NGNT",
    name: "Naira Token",
    tokenAddress: "0x05bbed16620b352a7f889e23e3cf427d1d379ffe",
    tokenDecimals: 2,
    exchangeAddress: "0x1de44c32e2c4866c6f873b2dafa8d0acc45842e8"
  },
  {
    symbol: "ETR",
    name: "Ethereum Rush",
    tokenAddress: "0x6f371ca338bbddd0baf719e1d5d0797cce20774f",
    tokenDecimals: 18,
    exchangeAddress: "0x713458ad4751d6980c5a9eb097b9fab8b2d7d5b8"
  },
  {
    symbol: "CELC",
    name: "CelCoin",
    tokenAddress: "0x19b58d95929586ad750893caad43e77aa6e8ce9e",
    tokenDecimals: 8,
    exchangeAddress: "0x5b0d9e4099bf629387a842ed6bff4dab70573f31"
  },
  {
    symbol: "GMT",
    name: "Global Messaging Token",
    tokenAddress: "0xb3bd49e28f8f832b8d1e246106991e546c323502",
    tokenDecimals: 18,
    exchangeAddress: "0xab0b841641fd546837a5e6ad98f796f66fd3ea2d"
  },
  {
    symbol: "FORCER",
    name: "Forcer",
    tokenAddress: "0xc1fb6c015fc535abd331d3029de76a62e412fb23",
    tokenDecimals: 4,
    exchangeAddress: "0x8dc13e59ad8bbe4424ba8c65ff1361543c195395"
  },
  {
    symbol: "ERC",
    name: "ERC20",
    tokenAddress: "0x26d5bd2dfeda983ecd6c39899e69dae6431dffbb",
    tokenDecimals: 18,
    exchangeAddress: "0x728ad96d9db76339411131f4e533c9c7419210b0"
  },
  {
    symbol: "ADT",
    name: "AdToken",
    tokenAddress: "0xd0d6d6c5fe4a677d343cc433536bb717bae167dd",
    tokenDecimals: 9,
    exchangeAddress: "0x042f17156da0e2d7ee58f9f138f0e1c9880344c3"
  },
  {
    symbol: "GOLD",
    name: "Ethernet Gold",
    tokenAddress: "0xc9c7ba7618419e6dc57389358a0836ed75079315",
    tokenDecimals: 0,
    exchangeAddress: "0xf75338e853cd3cf1732cc6705cfcc7c9c634c94c"
  },
  {
    symbol: "SUPER",
    name: "Super Human",
    tokenAddress: "0x19686a8058adc1ce23c1a5fdd515ecd493b69e10",
    tokenDecimals: 0,
    exchangeAddress: "0x6542f8cdafcdb147bfdf3e8a78518eb92567df01"
  },
  {
    symbol: "ETM",
    name: "Ethermoney",
    tokenAddress: "0x28926c46bc5c0aeab39c72f7c1201bfb8056d509",
    tokenDecimals: 18,
    exchangeAddress: "0xdc1fcb2659c49fe1726692594d5f9afbe6fd1883"
  },
  {
    symbol: "GOD",
    name: "Nike GOD",
    tokenAddress: "0xf4b9dce551fc370593605ad91c5aa31f76b7b16b",
    tokenDecimals: 0,
    exchangeAddress: "0x2bda0887989bc0b4b2a2f530bcce45a61975e237"
  },
  {
    symbol: "JAMIE",
    name: "Jamie Bitcoin",
    tokenAddress: "0x417d2562603b7d3bae74ad3b03557e2f2e026cb2",
    tokenDecimals: 0,
    exchangeAddress: "0x6d4c200106b7fe27cbc643c18358f37646122385"
  },
  {
    symbol: "NDC",
    name: "NEVERDIE",
    tokenAddress: "0xa54ddc7b3cce7fc8b1e3fa0256d0db80d2c10970",
    tokenDecimals: 18,
    exchangeAddress: "0x4492b94cb6272ced76ae7c27b834e8e36e39fa74"
  },
  {
    symbol: "DFB",
    name: "DeFiBurn",
    tokenAddress: "0x939cafa8630b3876b092ec2b71772db183c11758",
    tokenDecimals: 18,
    exchangeAddress: "0x62b39dfc4b507ee771b7d2179a28add6adb5ed5e"
  },
  {
    symbol: "HOLO",
    name: "Hologram",
    tokenAddress: "0x80b02cac429730081571a9e5513635da7e8f76c0",
    tokenDecimals: 0,
    exchangeAddress: "0x9ed6d616d5ce50b0b489dab7769c108d426fbaf3"
  },
  {
    symbol: "aDAI",
    name: "Aave Interest bearing DAI",
    tokenAddress: "0xfc1e690f61efd961294b3e1ce3313fbd8aa4f85d",
    tokenDecimals: 18,
    exchangeAddress: "0x7cfab87aac0899c093235b342ac0e5b1acf159eb"
  },
  {
    symbol: "BITS",
    name: "Ethereum Bits",
    tokenAddress: "0x890196c13906ccbcc604ccb0ba48938c1217db5c",
    tokenDecimals: 0,
    exchangeAddress: "0x4355fdeac69301db38493a5c65f41fd4e4f06184"
  },
  {
    symbol: "MNFT",
    name: "MNFT",
    tokenAddress: "0xdb7eb3ede973665b1bb9f3016861e3255062e4ed",
    tokenDecimals: 4,
    exchangeAddress: "0x6ad2fb782ff5feba6acc6321bfd24e14d6db4f5e"
  },
  {
    symbol: "PYRO",
    name: "PYRO Network",
    tokenAddress: "0x14409b0fc5c7f87b5dad20754fe22d29a3de8217",
    tokenDecimals: 18,
    exchangeAddress: "0xf9a489e82cf4a090fd1fc766eb21edec249d7e71"
  },
  {
    symbol: "VOKE",
    name: "Voke",
    tokenAddress: "0xd858c11a1e990d7d02e0897b9b19dadef8171832",
    tokenDecimals: 4,
    exchangeAddress: "0x488e9d8195a08acabb30c14fddd35bab3a15be0f"
  },
  {
    symbol: "BERT",
    name: "Bertbit",
    tokenAddress: "0x6e9de2e85a8c1188995fecea289b3f22e489bb12",
    tokenDecimals: 4,
    exchangeAddress: "0x0476ceda88b20b5e0af1a598530db64667b03507"
  },
  {
    symbol: "PUBLX",
    name: "PUBLX",
    tokenAddress: "0x1a6658f40e51b372e593b7d2144c1402d5cf33e8",
    tokenDecimals: 18,
    exchangeAddress: "0x51178a657a183ac593c58e9b961eefd8e20bc9c2"
  },
  {
    symbol: "$PEW:DAI",
    name: "PEW PEW PUT",
    tokenAddress: "0x51c5faedc00b0649918d2f26b6237646eeca1951",
    tokenDecimals: 18,
    exchangeAddress: "0xbcdf3d061bbcd6591e9fed1ad46c3f07d43654dc"
  },
  {
    symbol: "WYS",
    name: "wys Token",
    tokenAddress: "0xd8950fdeaa10304b7a7fd03a2fc66bc39f3c711a",
    tokenDecimals: 18,
    exchangeAddress: "0xb69f24efa39eace10055984c8f25bcfea1a94baa"
  },
  {
    symbol: "aETH",
    name: "Aave Interest bearing ETH",
    tokenAddress: "0x3a3a65aab0dd2a17e3f1947ba16138cd37d08c04",
    tokenDecimals: 18,
    exchangeAddress: "0xdf9da8616d462985f3207aebbc2fe1500087f1b6"
  },
  {
    symbol: "STO",
    name: "storeum",
    tokenAddress: "0xcb39c3502415152b2ec90ff07ee18cc94f681a72",
    tokenDecimals: 18,
    exchangeAddress: "0xc3e7d05555afcb36fac93fd42fe8692129074720"
  },
  {
    symbol: "MAGIC",
    name: "PET3R USES THE FORCE",
    tokenAddress: "0x51876a15aff97a68ed7df051ce11fade0b91b384",
    tokenDecimals: 1,
    exchangeAddress: "0x26b7ea8b1c8c5709c0852bf8fd8136afda4e9ed3"
  },
  {
    symbol: "TSD",
    name: "TimesDollar",
    tokenAddress: "0xe9865ee5fb3b9c4c99cfe865beb5c303ab4d9539",
    tokenDecimals: 5,
    exchangeAddress: "0x4565e521ec1ca1c32786e51c8062a94fcdf06581"
  },
  {
    symbol: "CYMT",
    name: "CyberMusic",
    tokenAddress: "0x78c292d1445e6b9558bf42e8bc369271ded062ea",
    tokenDecimals: 8,
    exchangeAddress: "0x1ed0fa36e0c411c2052a81702cbbfce772675729"
  },
  {
    symbol: "MGC",
    name: "More Gold Coin",
    tokenAddress: "0x174bfa6600bf90c885c7c01c7031389ed1461ab9",
    tokenDecimals: 18,
    exchangeAddress: "0x385eb222c05e9251a6979a076c54cd5a3b199ded"
  },
  {
    symbol: "NANA",
    name: "nana token",
    tokenAddress: "0x00fb4ce3f7edb8dd1a0ec5c6b2e6a656219e2ced",
    tokenDecimals: 2,
    exchangeAddress: "0x06f52a0a0620bc9ee5a6229d99a8c98336e1b19d"
  },
  {
    symbol: "iBBT",
    name: "iBBT Utility Token",
    tokenAddress: "0x691c25c461dafc47792b6e4d674fbb637bca1c6f",
    tokenDecimals: 18,
    exchangeAddress: "0xfc3155e9789c6ada9078e96c9fbf812b521f4087"
  },
  {
    symbol: "MDT",
    name: "MillionDollarToken",
    tokenAddress: "0x37f014c64d186eaf879c0033846b51924ce42584",
    tokenDecimals: 0,
    exchangeAddress: "0x35e0b74a6828afe72972a35ecc19305a7837fd2c"
  },
  {
    symbol: "DEC",
    name: "DarkEnergyCrystals",
    tokenAddress: "0x9393fdc77090f31c7db989390d43f454b1a6e7f3",
    tokenDecimals: 3,
    exchangeAddress: "0x32a40bf367bbf528c1b5605003cd2e33e00d6ad4"
  },
  {
    symbol: "ZAPH",
    name: "ZAPH Token",
    tokenAddress: "0x9f675e2c53ed88168e5928747caf31062da24f21",
    tokenDecimals: 4,
    exchangeAddress: "0xe042cb321e2fdb520ccc047337b7298f4972e7cb"
  },
  {
    symbol: "AMIR",
    name: "Amir",
    tokenAddress: "0xe8ed6fe37def6d06d8f3b7af06aafb5da6541094",
    tokenDecimals: 6,
    exchangeAddress: "0xa4cc94a1d23564da127d87d5602f0ab00539fafd"
  },
  {
    symbol: "BOO",
    name: "Bamboo Token",
    tokenAddress: "0x4336a5629bf30bee8bf571a6243cf50487b0de21",
    tokenDecimals: 10,
    exchangeAddress: "0x9afbdf81a5e6d00b1d04c915998a5aea88ab71f4"
  },
  {
    symbol: "HBC",
    name: "HOPE BILLION COIN",
    tokenAddress: "0xc7c9f20a6268cfe4b3f28f279c2da273f7ec189a",
    tokenDecimals: 18,
    exchangeAddress: "0xadf852e0ce8b611a38b2d15b946f33ec646c444b"
  },
  {
    symbol: "YGG",
    name: "YGG",
    tokenAddress: "0xc254664c7408dde413969fbcd593328f6099e32f",
    tokenDecimals: 4,
    exchangeAddress: "0xda556c0c74e66039ca9fe257ce3ddeb72f77a2e3"
  },
  {
    symbol: "LIB",
    name: "BankLife",
    tokenAddress: "0x3fd2e747cea0e8a78f1827ea2ffd3334628a600b",
    tokenDecimals: 18,
    exchangeAddress: "0x197155ec827864075f3c83e9597d005c69e63b80"
  },
  {
    symbol: "SWL",
    name: "Swiftlance token",
    tokenAddress: "0x8cd480260a47f04589670a313d27a15b321ad266",
    tokenDecimals: 8,
    exchangeAddress: "0xe1048f6b00565b2e575b6f4f0c26ff3ac25e98f8"
  },
  {
    symbol: "BFF",
    name: "BffDoom",
    tokenAddress: "0xcabf96a41a4d98ee91d4fb1004dc4b3b8548cb53",
    tokenDecimals: 8,
    exchangeAddress: "0xffaa84a2c03e7ac86626d0b0e37f0e3fe1b78e00"
  },
  {
    symbol: "TMB",
    name: "TemboCoin",
    tokenAddress: "0x1de09690e0d3c75c22cd19acc1aebde46bbc7d25",
    tokenDecimals: 0,
    exchangeAddress: "0x64d80812093be374e014406b73caf60994b2be96"
  },
  {
    symbol: "coby",
    name: "coby Token",
    tokenAddress: "0xd3b5c0d63475309201ef9acd0f6a4542db119335",
    tokenDecimals: 1,
    exchangeAddress: "0xa0619040bc67668c27e10b6dbb5f132815fd5575"
  },
  {
    symbol: "SIM",
    name: "SimpleToken",
    tokenAddress: "0x8f1b950d4eed71fa5f7d16e01e7905a518fbed4a",
    tokenDecimals: 18,
    exchangeAddress: "0x0d0d9fef65f845551f50b9c12bdea611507d1569"
  },
  {
    symbol: "JULIEN",
    name: "Julien",
    tokenAddress: "0xe6710e0cda178f3d921f456902707b0d4c4a332b",
    tokenDecimals: 4,
    exchangeAddress: "0x4ce8d670c0ccea741829551b347e2ebabdba638f"
  },
  {
    symbol: "PLAT",
    name: "BitGuild PLAT",
    tokenAddress: "0x7e43581b19ab509bcf9397a2efd1ab10233f27de",
    tokenDecimals: 18,
    exchangeAddress: "0x9b40c045cc0e2e8ed958cb79f8b7c403bf960f2f"
  },
  {
    symbol: "ZXC",
    name: "0xcert Protocol Token",
    tokenAddress: "0x83e2be8d114f9661221384b3a50d24b96a5653f5",
    tokenDecimals: 18,
    exchangeAddress: "0xb263893655286dafc58c1d1ee0670ef296c2488c"
  },
  {
    symbol: "IAN",
    name: "Ian Coin",
    tokenAddress: "0x19c506211a26a67ad7e6d45cd274bad1863f8667",
    tokenDecimals: 18,
    exchangeAddress: "0x649281c5ae2134cab9834cca30653e5c63424051"
  },
  {
    symbol: "MARS",
    name: "Mars",
    tokenAddress: "0x5d3a4b00db536f7e2be988bc84d92598ed116217",
    tokenDecimals: 18,
    exchangeAddress: "0x8debd17284a21865819d1ce1fb2dbcef2a86a616"
  },
  {
    symbol: "LAW",
    name: "Plutocracy",
    tokenAddress: "0x9b03f09d259fba1ad3111729bdb8ffa55f49190f",
    tokenDecimals: 0,
    exchangeAddress: "0x33e0a5a6727ebd1b0c6874e1332c557916d0b047"
  },
  {
    symbol: "YOT",
    name: "Yo Token",
    tokenAddress: "0xa817a9bcccb3cc79a588879214357e0b4a1a2e28",
    tokenDecimals: 18,
    exchangeAddress: "0x529744fd99f9684c9bfa73dc0adb873238dcd1b4"
  },
  {
    symbol: "YUNG",
    name: "YUNG",
    tokenAddress: "0xbe47f50c85d9f3da055bc8cddaa33dea16926d9d",
    tokenDecimals: 18,
    exchangeAddress: "0xbb51faef044941f996f2db81cf7270845a76156d"
  },
  {
    symbol: "YGG",
    name: "YGG",
    tokenAddress: "0x4ff2b0f58bc8f24e5cfb2a3ef4500162ada1f6da",
    tokenDecimals: 4,
    exchangeAddress: "0xaae7426b8d24cda480329609379cea29f76c2cb3"
  },
  {
    symbol: "TRUSD",
    name: "TrustUSD",
    tokenAddress: "0xdd436a0dce9244b36599ae7b22f0373b4e33992d",
    tokenDecimals: 18,
    exchangeAddress: "0x041ac4e52e8e83f3f389fe7e419fa4eecd4dfb2b"
  },
  {
    symbol: "WEEBS",
    name: "Weebs",
    tokenAddress: "0x1074608e45b42eb25d1e97382e8a1d151987eaba",
    tokenDecimals: 4,
    exchangeAddress: "0x4d11123334ac820862162bfbc010fffc2a73ee57"
  },
  {
    symbol: "CALVIN",
    name: "Calvin",
    tokenAddress: "0xdc8092aaf83e00ebf9b01a2e90b7b7ef867ba503",
    tokenDecimals: 4,
    exchangeAddress: "0x657de502ee9fed80d5496a1da0007fe72b2bd18b"
  },
  {
    symbol: "DRPU",
    name: "DRP Utility",
    tokenAddress: "0xe30e02f049957e2a5907589e06ba646fb2c321ba",
    tokenDecimals: 8,
    exchangeAddress: "0x0fee4ac8f7e8239e02dc1c6cdc02b78e1b289839"
  },
  {
    symbol: "ZERO",
    name: "Zero Coin",
    tokenAddress: "0xc975ebf130ad3ded5545216aaf23191aba69f291",
    tokenDecimals: 0,
    exchangeAddress: "0x901cb3a323221fe4a2b392c0a5c59027cec08ae6"
  },
  {
    symbol: "XAI",
    name: "AICoin",
    tokenAddress: "0x268b7976e94e84a48bf8b2b57ba34b59ed836a74",
    tokenDecimals: 8,
    exchangeAddress: "0x0573cd872ff6b6efd20f00e7a9fb02fcd7cd9faf"
  },
  {
    symbol: "BLAQ",
    name: "BLAQUE",
    tokenAddress: "0x7a7f8d1a19e9a9547035e494d204448bb1388fb5",
    tokenDecimals: 18,
    exchangeAddress: "0xaa3eed5178d3239a8d9faf11f16ae3adbbc7ea7e"
  },
  {
    symbol: "BRC",
    name: "Brettcoin",
    tokenAddress: "0x4777819cccf1a8d1964a27963b7341c3aa653051",
    tokenDecimals: 18,
    exchangeAddress: "0x868c87253a02c48ea3c3b1364587620cbc680627"
  },
  {
    symbol: "TRD",
    name: "Thirdhalf.com Token",
    tokenAddress: "0x4a479bc7330719bf843634f8fb1c53ea88884e8f",
    tokenDecimals: 18,
    exchangeAddress: "0x5a463b374b486c2055e6f392c8895dd3e1b2e656"
  },
  {
    symbol: "DM",
    name: "Digitale Mark",
    tokenAddress: "0xbd5dd4d4c51137ee47d080d19cd13670c90df2e9",
    tokenDecimals: 2,
    exchangeAddress: "0xa150f7e63e3f2053fc493153b7a43d14d9698ff8"
  },
  {
    symbol: "AIRDROP",
    name: "AirdropToken",
    tokenAddress: "0xba7435a4b4c747e0101780073eeda872a69bdcd4",
    tokenDecimals: 18,
    exchangeAddress: "0x6acb64fc1e111c47ac9a7c2767459d9d3ed062d9"
  },
  {
    symbol: "DGO",
    name: "Dinngo",
    tokenAddress: "0x6d38574be6c230272daad16fa5f291f825bd0da1",
    tokenDecimals: 18,
    exchangeAddress: "0xf04f5df7e9754482cf9dd76b52bc3693e231e399"
  },
  {
    symbol: "CTO",
    name: "CotteToken",
    tokenAddress: "0x7fd483c9f72cf1bf9be2852810e50def29ff2f7f",
    tokenDecimals: 18,
    exchangeAddress: "0xcb4c79e50da5aa01d8016218bcdb8b2e1c3f191f"
  },
  {
    symbol: "SLI",
    name: "Sleipnirwallet",
    tokenAddress: "0x625ce07842a307f190c93316e8215073ce6bd4c4",
    tokenDecimals: 6,
    exchangeAddress: "0x1ac7f6257710c788631ec4e35fda7bdd27f82e0b"
  },
  {
    symbol: "CAMO",
    name: "CAMO",
    tokenAddress: "0xe86a746330b0b691323d2cbb5c140f77d7f198a4",
    tokenDecimals: 4,
    exchangeAddress: "0xe5f208b9f709d42c0e43658f34b9b6d6f531e39f"
  },
  {
    symbol: "HLS",
    name: "Hungry of Loves",
    tokenAddress: "0x3a32a83b1a0a6f266bc54069e8677fefc4059da9",
    tokenDecimals: 18,
    exchangeAddress: "0x406153404823e61003d6f302089621c264bdb728"
  },
  {
    symbol: "FDAI",
    name: "Fake DAI",
    tokenAddress: "0x69215a5c0cf2e69b0803ca283a5ad6dcc0a105bc",
    tokenDecimals: 18,
    exchangeAddress: "0x97a5df8bcc5c297067fb807409139b5038684111"
  },
  {
    symbol: "MP",
    name: "Mark Powell",
    tokenAddress: "0x344c00d6ef1eaf1c0d592915ca976a71a7a95715",
    tokenDecimals: 18,
    exchangeAddress: "0x6445075bbf02c597a5a2ab29c73292e64fc7ede9"
  },
  {
    symbol: "MTX",
    name: "Matrix",
    tokenAddress: "0x3154bf7cbb077e1a46eadf4c1ed019157e8e0687",
    tokenDecimals: 18,
    exchangeAddress: "0x8313d98f9ed87e37341c72d47271c6a197d878cf"
  },
  {
    symbol: "MCX",
    name: "MachiX Token",
    tokenAddress: "0xd15ecdcf5ea68e3995b2d0527a0ae0a3258302f8",
    tokenDecimals: 18,
    exchangeAddress: "0xc4c18dec88a6576a8e345887fb1a229e97ba55e7"
  },
  {
    symbol: "BOL",
    name: "Freight Trust Protocol",
    tokenAddress: "0xefe98765da3824ef4a5358ba798cec87c13d8c62",
    tokenDecimals: 18,
    exchangeAddress: "0xe0759863816a0fa5ece145336ae8b72ad2fc3d2f"
  },
  {
    symbol: "AS1",
    name: "Andy Simon",
    tokenAddress: "0xe3dc650b0054c5fd4aea05cb110c1c19733bfe05",
    tokenDecimals: 18,
    exchangeAddress: "0xd78ef5938ffbec6edde49d2524bde929cf47ec8a"
  },
  {
    symbol: "UNI-V1",
    name: "Uniswap V1",
    tokenAddress: "0x9bf7805f5deb58dbb881e05b1af09819f8e90eaa",
    tokenDecimals: 18,
    exchangeAddress: "0x6e48a8c8a0407652261564e49ed2a6915a48f028"
  },
  {
    symbol: "ROOBEE",
    name: "ROOBEE",
    tokenAddress: "0xa31b1767e09f842ecfd4bc471fe44f830e3891aa",
    tokenDecimals: 18,
    exchangeAddress: "0xc48ded68b38efb8f9f221d17d7820ba99c58b7cb"
  },
  {
    symbol: "LBRTY",
    name: "LIBERTY",
    tokenAddress: "0xb1f2b122139dacd2ad29840e92cbc38716568994",
    tokenDecimals: 18,
    exchangeAddress: "0xc86b9736d32eefa307282e7da92d6b734bb345ef"
  },
  {
    symbol: "NINA",
    name: "Christina",
    tokenAddress: "0x17b76cc75d3e2d8e2d3e595e5b20b8b1d83fcbde",
    tokenDecimals: 18,
    exchangeAddress: "0x1418f2134ed80dc06c0159f5ab4e235fa2a03f94"
  },
  {
    symbol: "DMEX",
    name: "DMEX Token",
    tokenAddress: "0x45fcf164baffbefaee70a368c96de6f33bdccab0",
    tokenDecimals: 18,
    exchangeAddress: "0x6ca505899b49533d23a26737c2efbefc3e5e7350"
  },
  {
    symbol: "SEM",
    name: "Sem",
    tokenAddress: "0xd129364a82eb0d901ac7ee1998f39b4419f7721c",
    tokenDecimals: 18,
    exchangeAddress: "0xd8f656799bb28608beb168709199913c1ffcdd63"
  },
  {
    symbol: "ELIX",
    name: "elixir",
    tokenAddress: "0xc8c6a31a4a806d3710a7b38b7b296d2fabccdba8",
    tokenDecimals: 18,
    exchangeAddress: "0x1bafbe8963131289f466638b8b948a25236c893a"
  },
  {
    symbol: "UQn",
    name: "Uqinzen",
    tokenAddress: "0xac298353ab790e668986ac9e2d3a9ddfc600ff78",
    tokenDecimals: 2,
    exchangeAddress: "0x2298a208c509a7ab0879b8d37100cd1474b136ca"
  },
  {
    symbol: "CALLIL",
    name: "CALLIL",
    tokenAddress: "0x92c5fb8031d6d0caaf053e88b099c5e1701c1116",
    tokenDecimals: 18,
    exchangeAddress: "0xb3899d8b45ac320ffd07d8e3cf1a26086faaddde"
  },
  {
    symbol: "JJJ",
    name: "Jonathan Joseph",
    tokenAddress: "0x3c35132d0b129f068fdfa65b2c4d265fa5d8cea6",
    tokenDecimals: 4,
    exchangeAddress: "0xb94ca1547e01376b1fbae749928b3db4bd22d2cc"
  },
  {
    symbol: "UKI",
    name: "UK Investments",
    tokenAddress: "0xbdf46502dd5001ed841ad741c8aac4b4e322b320",
    tokenDecimals: 10,
    exchangeAddress: "0x08f38eaa40c7089960591baa2b3aa912c6b7a98a"
  },
  {
    symbol: "EAI",
    name: "ethereumAI Token",
    tokenAddress: "0x2f102963f61acf1ca4badfe82057b440f2fc722c",
    tokenDecimals: 6,
    exchangeAddress: "0x390f0c2bd0fbf2e876a2269a14700f0183ce9b28"
  },
  {
    symbol: "GST",
    name: "GAMESTARS TOKEN",
    tokenAddress: "0x67a9099f0008c35c61c00042cd9fb03684451097",
    tokenDecimals: 18,
    exchangeAddress: "0xd8c676ee01d6429b94d1b4b6b328907dbc613f3b"
  },
  {
    symbol: "SRH",
    name: "SRH",
    tokenAddress: "0xc350e846e2c57f9eece90febc253d14c8080871b",
    tokenDecimals: 18,
    exchangeAddress: "0x685a4a592bfac11a91c8c940bf34f7cd7be6f6f8"
  },
  {
    symbol: "BNANA",
    name: "Chimpion",
    tokenAddress: "0x07ef9e82721ac16809d24dafbe1792ce01654db4",
    tokenDecimals: 18,
    exchangeAddress: "0xab9488f145aaa84d57f2b7b595e14ff6cb810674"
  },
  {
    symbol: "CRAD",
    name: "CRAD CASH",
    tokenAddress: "0x608f006b6813f97097372d0d31fb0f11d1ca3e4e",
    tokenDecimals: 18,
    exchangeAddress: "0xd883926830cc566f8ecc415ae6513d2829422574"
  },
  {
    symbol: "WOPS",
    name: "Westerops",
    tokenAddress: "0x87ee5f6fa770311842c007a748260ddbe2ca930f",
    tokenDecimals: 6,
    exchangeAddress: "0x237c8060b3c5a63cc3080ad8f4aabca03ecf4d11"
  },
  {
    symbol: "STS",
    name: "Status Security",
    tokenAddress: "0x2193b9f2b5e5051e41c32c71b25587d6a6f045c8",
    tokenDecimals: 18,
    exchangeAddress: "0xa192439e9510cb9198b11132cd823842b13f7839"
  },
  {
    symbol: "TEN",
    name: "Tithe",
    tokenAddress: "0xb45cecdf04a0cd7dc30181572e2352b510ef7b93",
    tokenDecimals: 18,
    exchangeAddress: "0x6914e8e0179d6dca70b2c3c76f5ff502a2d8b023"
  },
  {
    symbol: "EDO",
    name: "Eidoo Token",
    tokenAddress: "0xced4e93198734ddaff8492d525bd258d49eb388e",
    tokenDecimals: 18,
    exchangeAddress: "0x1e8f3b01ceb7544db5d47a251c2d7942ac257fa4"
  },
  {
    symbol: "MGO",
    name: "MobileGo Token",
    tokenAddress: "0x40395044ac3c0c57051906da938b54bd6557f212",
    tokenDecimals: 8,
    exchangeAddress: "0x145a085a1432b86207e2d3844ea14a3679cf6112"
  },
  {
    symbol: "DMEX",
    name: "DMEX Token",
    tokenAddress: "0x13bfb9164746afecdd0d5db71d037328661fc49f",
    tokenDecimals: 18,
    exchangeAddress: "0x6089e4a1ae7754334aa5a91cf5ab16a34029b518"
  },
  {
    symbol: "MNE",
    name: "minereum",
    tokenAddress: "0x1a95b271b0535d15fa49932daba31ba612b52946",
    tokenDecimals: 8,
    exchangeAddress: "0xd6a1271f0ea94217bb73ca813b72404c08475682"
  },
  {
    symbol: "NOKU",
    name: "NOKU",
    tokenAddress: "0x1fc52f1abade452dd4674477d4711951700b3d27",
    tokenDecimals: 18,
    exchangeAddress: "0x9a20550f841e930131bf8528c6c87f3afa191629"
  },
  {
    symbol: "IKTK",
    name: "IKTkroner",
    tokenAddress: "0x8af44e92c0236422934e4224e7e252ce0e21735b",
    tokenDecimals: 0,
    exchangeAddress: "0xf291dfe9d6533a7305bebc3e7a2d47f25e4123fe"
  },
  {
    symbol: "SCOTT",
    name: "SCOTT",
    tokenAddress: "0x27fd686db10e0ae047fe8fe1de9830c0e0dc3cfa",
    tokenDecimals: 4,
    exchangeAddress: "0x76f455c38ab1fef84cf27f51065ee1374fa400e5"
  },
  {
    symbol: "USD",
    name: "USD",
    tokenAddress: "0x22a39c2dd54b71ac884657bb3e37308abe2d02e1",
    tokenDecimals: 0,
    exchangeAddress: "0x8085d4f288d36c20a632f27361ccc74e9b4bb725"
  },
  {
    symbol: "HGBT",
    name: "CrazyBoxToken",
    tokenAddress: "0x00471ae525110087bbc6847cb6e9691bacd13c89",
    tokenDecimals: 8,
    exchangeAddress: "0xe9008308f4401bde01fd55b8722fe0f7eec128ac"
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    tokenAddress: "0x390bf02a7e842ed3ffd22be931ec87430428f1d8",
    tokenDecimals: 18,
    exchangeAddress: "0xb8aae1eeac9485953ce7ae84a25dc992bc55feca"
  },
  {
    symbol: "CARD",
    name: "Cardstack",
    tokenAddress: "0x954b890704693af242613edef1b603825afcd708",
    tokenDecimals: 18,
    exchangeAddress: "0x93d2ce3df3f79f5accadabd7647a42ffd1fe6f78"
  },
  {
    symbol: "eUSD",
    name: "Eurodollar",
    tokenAddress: "0x8c4f045c35288f899fe7b034dbe13bab2bb454ab",
    tokenDecimals: 18,
    exchangeAddress: "0x91b7fd1f4d6a28d782299fabd00a6c7adff77564"
  },
  {
    symbol: "B0T",
    name: "The Emperial Currency",
    tokenAddress: "0xdd60f9dd5b891b728955149bd59f42c6513c8dc6",
    tokenDecimals: 18,
    exchangeAddress: "0x1b399e4052d715997659d3a6a6507c5b22ed66b6"
  },
  {
    symbol: "PLA",
    name: "PlayChip",
    tokenAddress: "0x0198f46f520f33cd4329bd4be380a25a90536cd5",
    tokenDecimals: 18,
    exchangeAddress: "0xdf28084119560321bbbd45d1da4aa83d3112e153"
  },
  {
    symbol: "UTNP",
    name: "UTN-P: Universa Token",
    tokenAddress: "0x9e3319636e2126e3c0bc9e3134aec5e1508a46c7",
    tokenDecimals: 18,
    exchangeAddress: "0x020049960ca05a7e76aefe8a7dba2b557bfc3259"
  },
  {
    symbol: "SKATE",
    name: "Sk8coin",
    tokenAddress: "0x8f01ebcdc9972cf3c7ea61ddf57d124846896db8",
    tokenDecimals: 18,
    exchangeAddress: "0xd7f67c9340dda558905b9f773e97e4fe86e2e3dd"
  },
  {
    symbol: "USDCUSDB",
    name: "USD//C Smart Relay Token",
    tokenAddress: "0x976a003d2e8ba230e9c7fb65da5de448a4bc2d0d",
    tokenDecimals: 6,
    exchangeAddress: "0xf161855f78e71838ade1cf9ca90566220758b534"
  },
  {
    symbol: "BDP",
    name: "BidiPass",
    tokenAddress: "0x593114f03a0a575aece9ed675e52ed68d2172b8c",
    tokenDecimals: 18,
    exchangeAddress: "0xa6391e46e686976cd2101c1353919211e8c00705"
  },
  {
    symbol: "CURA",
    name: "CuraDAI",
    tokenAddress: "0x0a4b2d4b48a63088e0897a3f147ba37f81a27722",
    tokenDecimals: 18,
    exchangeAddress: "0xc07b2fba5ec3cb810244f8499943564455322dc9"
  },
  {
    symbol: "CHSB",
    name: "SwissBorg Token",
    tokenAddress: "0xba9d4199fab4f26efe3551d490e3821486f135ba",
    tokenDecimals: 8,
    exchangeAddress: "0x897ee0b6c3ef0168052a3f599b1a74b5a02f4366"
  },
  {
    symbol: "RPAI",
    name: "Painthereum RED",
    tokenAddress: "0x96f4c85e7830c755981c12fb7c702ef580047b2a",
    tokenDecimals: 18,
    exchangeAddress: "0xdb4b2df12487acf6d7a2bc8600e9a65c9ee4e60c"
  },
  {
    symbol: "GPAI",
    name: "Painthereum GREEN",
    tokenAddress: "0x3865cb3cb00041d7e1b4f8189aa73a8cc590c28c",
    tokenDecimals: 18,
    exchangeAddress: "0x0d61a26bc6a7e5e9ae4f4759c5e3e5c5f1b0c69b"
  },
  {
    symbol: "BPAI",
    name: "Painthereum BLUE",
    tokenAddress: "0x3c023a75da4635ce931778ce24a36b041e503eff",
    tokenDecimals: 18,
    exchangeAddress: "0xb63935e23dc8f6f7410a5d253aecd474cc3ec19a"
  },
  {
    symbol: "BBSC",
    name: "BaoBoShiCoin",
    tokenAddress: "0xf89ba2862dfae69bc2546568d56b087d7454c9c9",
    tokenDecimals: 18,
    exchangeAddress: "0x7247326e46cfb46bbe704e36ff9bdf40866aeff0"
  },
  {
    symbol: "PSC",
    name: "PRODATA SHARES COIN",
    tokenAddress: "0x6744ebb5214d06ec62a310f72a2e8e0770180fc7",
    tokenDecimals: 18,
    exchangeAddress: "0x6947d6b18db1a2468a3aa888a5a2d64b0f8b6dbb"
  },
  {
    symbol: "HCC",
    name: "HOPE COLLATERAL COIN",
    tokenAddress: "0x3193271d8cb966234ca9bd1eda066fdc2dddae30",
    tokenDecimals: 18,
    exchangeAddress: "0xaa87891bd4c16b8cb35532a379ab40ad343375d2"
  },
  {
    symbol: "PEW",
    name: "BroFistCoin",
    tokenAddress: "0xa701122c1b67220a8b6883d03c8ad67896b12466",
    tokenDecimals: 8,
    exchangeAddress: "0x80eba0fd9438b38486ca83206fc4a12951cb6cf3"
  },
  {
    symbol: "BKMcoffee",
    name: "书影币",
    tokenAddress: "0x1ce167d0e32f05af1d7ec02769161c70bdf84609",
    tokenDecimals: 3,
    exchangeAddress: "0xcea1b0209ad24a10ca2b350459c358a1590693f7"
  },
  {
    symbol: "CNAC",
    name: "Crypto is not a Crime",
    tokenAddress: "0xfb17aada497f76cae49326f9c19d6e661888d70b",
    tokenDecimals: 18,
    exchangeAddress: "0x5909e61cafcc8fa307ce0ba5812cd602c01ad093"
  },
  {
    symbol: "real",
    name: "realcoin",
    tokenAddress: "0x8e656797a8c494ab9148b21e30250ced0afd9f17",
    tokenDecimals: 3,
    exchangeAddress: "0xff28aec0850738010cfafdeafeb388c2ac648c2d"
  },
  {
    symbol: "TJL",
    name: "Timo Lehes",
    tokenAddress: "0xd190167c333069ba4f92f6336b884045b1160a54",
    tokenDecimals: 18,
    exchangeAddress: "0x5f9a13df22c691e7880e8864ce84675b3cfa8971"
  },
  {
    symbol: "CNSL",
    name: "Counsel",
    tokenAddress: "0xea0bea4d852687c45fdc57f6b06a8a92302baabc",
    tokenDecimals: 18,
    exchangeAddress: "0x4389d757fa071fd714fd74afdcc7da384c9a7ede"
  },
  {
    symbol: "OHFF",
    name: "OHFF",
    tokenAddress: "0xf0aabeacbc2d91baf21bda0006c9d65de736053a",
    tokenDecimals: 4,
    exchangeAddress: "0x1ea22dfec6f1022d053e7fe0909e3a42fe4167dd"
  },
  {
    symbol: "null",
    name: "HEXTEWKEN",
    tokenAddress: "0xd495cc8c7c29c7fa3e027a5759561ab68c363609",
    tokenDecimals: 8,
    exchangeAddress: "0xdd1f46dbc88ba7ebcb0edcaf023643d2c5098850"
  },
  {
    symbol: "JT",
    name: "JungleToken",
    tokenAddress: "0x285ce65705d26c28f7a720cf3bfe8b868c82a48f",
    tokenDecimals: 18,
    exchangeAddress: "0xa31a0b8e8a73f0cdc625436d516c9bed91529ace"
  },
  {
    symbol: "BLK",
    name: "BLANK",
    tokenAddress: "0x6fbf4e57ec93cdd33c74762f7d99694228a68cd2",
    tokenDecimals: 2,
    exchangeAddress: "0xacbd1201ca450f646ff2f04bc7d73d5252fd5de5"
  },
  {
    symbol: "DCO",
    name: "Decentralized chain offer",
    tokenAddress: "0x65668f5d2b4ec78e31eb4db47d2258320761de72",
    tokenDecimals: 18,
    exchangeAddress: "0x3fc9c3ad3853c54109f9ff6b262127e234d2a1df"
  },
  {
    symbol: "JOB",
    name: "Jobchain",
    tokenAddress: "0x17280da053596e097604839c61a2ef5efb7d493f",
    tokenDecimals: 8,
    exchangeAddress: "0xf3311aa6c9aa3b4663343ef68aa884561afa73ef"
  },
  {
    symbol: "SCS",
    name: "Smart Contract Service",
    tokenAddress: "0xa662e2fa780c4cdaa5134435824dc2f16ad6f329",
    tokenDecimals: 18,
    exchangeAddress: "0xcc788a4db4f1781eed07650ad17de90f979b7af0"
  },
  {
    symbol: "FENIX",
    name: "fenix",
    tokenAddress: "0x0b0d58ac4ad856c4600a233c8169dba39d7326ab",
    tokenDecimals: 18,
    exchangeAddress: "0xd2537136e12dc2c3a89194258f8401844e2db87c"
  },
  {
    symbol: "RV",
    name: "Herve",
    tokenAddress: "0xe97d2d78c51c277eddc110cf3869861359968b99",
    tokenDecimals: 18,
    exchangeAddress: "0x31c7a4fa09dfaaf0a6d595f4a0161f43da775b3d"
  },
  {
    symbol: "LCX",
    name: "LCX",
    tokenAddress: "0x037a54aab062628c9bbae1fdb1583c195585fe41",
    tokenDecimals: 18,
    exchangeAddress: "0xade1a79d149aee8536cb6c422571c4bf7ec62a11"
  },
  {
    symbol: "CTW",
    name: "CTWorld Token",
    tokenAddress: "0x29d82a45143569e02a0566f94f94b38f946858db",
    tokenDecimals: 18,
    exchangeAddress: "0x26a021133d1686476966f9882cae832508e3c083"
  },
  {
    symbol: "CB",
    name: "Chris Blec",
    tokenAddress: "0x2043f5f3e44c76e6fb9266c7247cef569172d664",
    tokenDecimals: 18,
    exchangeAddress: "0x1fe2ee65e684c246099001751f01cd17736a8490"
  },
  {
    symbol: "SREUR",
    name: "EURO TOKEN",
    tokenAddress: "0x7a0e91c4204355e0a6bbf746dc0b7e32dfefdecf",
    tokenDecimals: 8,
    exchangeAddress: "0x09212cbfcd3d2aeefb6c605de6c1a497d71f0e63"
  },
  {
    symbol: "ZAM",
    name: "Zamrud",
    tokenAddress: "0x9d3571f685e0fec61925b248977a09f8da047f48",
    tokenDecimals: 18,
    exchangeAddress: "0xa301e30b899e9d8c51e71435ae472566df34c26e"
  },
  {
    symbol: "CRF",
    name: "CRYPTOFRIDGE",
    tokenAddress: "0xdb399d5d44cfb9cb7cbbdc64be1dc3b978ca1f06",
    tokenDecimals: 18,
    exchangeAddress: "0x541eb6e395f2bbb5ae8deeb93af7750a252fdae7"
  },
  {
    symbol: "TRON",
    name: "Bitcoin Tron",
    tokenAddress: "0x9693dded163393f18810c7a799c662998bf8bf3e",
    tokenDecimals: 18,
    exchangeAddress: "0x0b684f0755c261b027c0258bf1ff077f7b33aa0c"
  },
  {
    symbol: "EVC",
    name: "Evcoin",
    tokenAddress: "0x6957cbcf451fd1b1dc04dc67b7682d62fba9e2ad",
    tokenDecimals: 3,
    exchangeAddress: "0xd4291adf8982cf9fd1aaab8fe12f398c1f10530d"
  },
  {
    symbol: "ALEX",
    name: "AlexMasmej",
    tokenAddress: "0x8ba6dcc667d3ff64c1a2123ce72ff5f0199e5315",
    tokenDecimals: 4,
    exchangeAddress: "0xb49c53f2e459ce96b04318610abd77f4e83113db"
  },
  {
    symbol: "SNC",
    name: "SunContract",
    tokenAddress: "0xf4134146af2d511dd5ea8cdb1c4ac88c57d60404",
    tokenDecimals: 18,
    exchangeAddress: "0x0f0c85fc12ac26059f2e991716d6ce9a9437e121"
  },
  {
    symbol: "ART",
    name: "ART Token",
    tokenAddress: "0x33e1b26d699d923e4cdba286cc5783d3c04831c3",
    tokenDecimals: 0,
    exchangeAddress: "0x468188c85df476d0c4037318de0d38162d0c3786"
  },
  {
    symbol: "TBCUSDB",
    name: "ThunderBoltCoin Smart Relay Token",
    tokenAddress: "0x323e4d8097b0a58ab8210ac6efcc4a89285cfc6b",
    tokenDecimals: 18,
    exchangeAddress: "0x3d3f82c19774bff701420244091bc14a75fb07da"
  },
  {
    symbol: "LIT",
    name: "LITonium",
    tokenAddress: "0x2e3c062e16c1a3a04ddc5003c62e294305d83684",
    tokenDecimals: 2,
    exchangeAddress: "0x2f31baa72804ce5a32968646a1e44806162e7954"
  },
  {
    symbol: "cDAIUSDC",
    name: "Stablecoins.exchange cDAI/cUSDC",
    tokenAddress: "0x3740fb63ab7a09891d7c0d4299442a551d06f5fd",
    tokenDecimals: 18,
    exchangeAddress: "0x8174c73908e5c61d7158dc291729778ea99e078a"
  },
  {
    symbol: "REAK",
    name: "Reakoin",
    tokenAddress: "0xa5b2dbba9a3c04ec4f56cbe16520debecbf35545",
    tokenDecimals: 18,
    exchangeAddress: "0x6d74b580df8829f20ba570c1cde4468ddec35b7c"
  },
  {
    symbol: "NMP",
    name: "Neuromorphic",
    tokenAddress: "0x4d6b9f281af31916a0f16d1cea2ec7384851eaab",
    tokenDecimals: 18,
    exchangeAddress: "0xdf6f8fdde0965862a7da5db0649e7c523b719f78"
  },
  {
    symbol: "SCRO",
    name: "JustEscrowCoin",
    tokenAddress: "0x0a133dfa1f65ff6f834205ed43d66344306fa02c",
    tokenDecimals: 18,
    exchangeAddress: "0x6bbcae545a4b26e64883deaee14dab5a17b9d127"
  },
  {
    symbol: "RMBC",
    name: "RMBC",
    tokenAddress: "0x4ad280a2f38404ce1fd75556f3b9951e63acaf03",
    tokenDecimals: 6,
    exchangeAddress: "0xcae4f1407ee7f129ce5f06d010260c3570bcfe28"
  },
  {
    symbol: "0xETH",
    name: "0xEthereum Token",
    tokenAddress: "0x36d06ccc92cefd9ec38fe759d957da0b0ecc249f",
    tokenDecimals: 8,
    exchangeAddress: "0x918e7dcb95226f9ed937f7a05b93c1e29aeaa74b"
  },
  {
    symbol: "UNI",
    name: "Unipot",
    tokenAddress: "0x97c795a8028b96e5e2a508468b1c132fca5caa19",
    tokenDecimals: 8,
    exchangeAddress: "0xb3e22422398aad8c7b12ae25766ad37e56fb8715"
  },
  {
    symbol: "VTX",
    name: "VorteX Network",
    tokenAddress: "0xd957e08ac5421e2c28510586b57d095e5094836a",
    tokenDecimals: 18,
    exchangeAddress: "0x0085146bd3b67f9b80c54640cb25185d685a2d7e"
  },
  {
    symbol: "DLH",
    name: "DELHUMEAU",
    tokenAddress: "0x0651e4a1de38691677f2c82bd89793a8d42e7293",
    tokenDecimals: 18,
    exchangeAddress: "0x685e22b182e4766fc28ba87eccc480cf871dd432"
  },
  {
    symbol: "HD",
    name: "Herve Delhumeau",
    tokenAddress: "0x667e1a2f05f15897fb74331031b9f829d5d3d7e5",
    tokenDecimals: 18,
    exchangeAddress: "0x0f85e8ceb45bc5281834b1a80deef05ecfc7e003"
  },
  {
    symbol: "FICO",
    name: "FIND Coin",
    tokenAddress: "0xe0132738036603760c0e9cb8aeb502a32c1b3348",
    tokenDecimals: 18,
    exchangeAddress: "0x44f1e90ff2a3575137810f6cfea2dc84385e9d40"
  },
  {
    symbol: "HOWL",
    name: "Howl",
    tokenAddress: "0xd1dc64b4bdaab103a72bf4778a33740704aff380",
    tokenDecimals: 4,
    exchangeAddress: "0xaf1785b6f83ba096d311543f72951e040a417da2"
  },
  {
    symbol: "SCT",
    name: "SatoshiCrypto",
    tokenAddress: "0x3f012e0ab3ff4797231faf20eb71f682240d1b1f",
    tokenDecimals: 18,
    exchangeAddress: "0x1a565ddf5dcbe96dc94371a814793cf9ac9d63fa"
  },
  {
    symbol: "YATX",
    name: "Yattaqi Pro",
    tokenAddress: "0x39043aae9c48a628f5184af7a5bb925137757b15",
    tokenDecimals: 8,
    exchangeAddress: "0x736e8cdc62c59fcd47ad26a8e3a7d7071fbe7bb8"
  },
  {
    symbol: "PSK",
    name: "Pool of Stake Master Token",
    tokenAddress: "0x1c5f43710a1776b0ea7191b7ead75d4b98d69858",
    tokenDecimals: 18,
    exchangeAddress: "0x9ad4f22817d35c645e7ae825a6b8678d2237bf21"
  },
  {
    symbol: "CUBE",
    name: "Somnium Space Cubes",
    tokenAddress: "0xdf801468a808a32656d2ed2d2d80b72a129739f4",
    tokenDecimals: 8,
    exchangeAddress: "0x21e7259f42b68bd89fd85f33584eda9bdf5b7004"
  },
  {
    symbol: "TXH",
    name: "TradeX Token",
    tokenAddress: "0x5432c580e34f590f4dd901b825ddeb92e905e826",
    tokenDecimals: 18,
    exchangeAddress: "0x721517009639fff86759a889d890f77f27514cbb"
  },
  {
    symbol: "BRZE",
    name: "Breeze",
    tokenAddress: "0x77c07555af5ffdc946fb47ce15ea68620e4e7170",
    tokenDecimals: 18,
    exchangeAddress: "0xd164626d50983fefadce6edf934148a4fe29097f"
  },
  {
    symbol: "WCF",
    name: "Wrapped ChainFaces",
    tokenAddress: "0x659046522c5c246a34a7eb17a814ca648436644a",
    tokenDecimals: 18,
    exchangeAddress: "0x8f29e4ffdeb4515e3c6ff1195a449f1fba950a6c"
  },
  {
    symbol: "SPDG",
    name: "SpeedGas",
    tokenAddress: "0x16bc9068f98557609dc0300cd22aa627ee7f4e62",
    tokenDecimals: 8,
    exchangeAddress: "0xab48b8e31e6acb3e4e823d7c2b37fca48829d329"
  },
  {
    symbol: "HEDG",
    name: "HedgeTrade",
    tokenAddress: "0xf1290473e210b2108a85237fbcd7b6eb42cc654f",
    tokenDecimals: 18,
    exchangeAddress: "0xb5b46a2521048d7f2f9d9603eeb1b7abf7d18886"
  },
  {
    symbol: "GOU",
    name: "Gou",
    tokenAddress: "0xb19977b23b40d59254b8f5a0bdb67076b4fa0bc6",
    tokenDecimals: 4,
    exchangeAddress: "0x9845bc0f87585944207526976d83be8129d612ce"
  },
  {
    symbol: "BLC",
    name: "Black Lion Coin",
    tokenAddress: "0x42dbc00e14f711260e606edbd4f14394ab4780d8",
    tokenDecimals: 18,
    exchangeAddress: "0x136a635440822482e8ccaef38760d9234328612e"
  },
  {
    symbol: "ARO",
    name: "Aeronia",
    tokenAddress: "0x8b0b3526b414ed5019049326544c07725a30da92",
    tokenDecimals: 18,
    exchangeAddress: "0x7979d646644a2ff37228740dfbc8e0567856cb48"
  },
  {
    symbol: "WHEN",
    name: "WHEN Token",
    tokenAddress: "0xf4fe95603881d0e07954fd7605e0e9a916e42c44",
    tokenDecimals: 18,
    exchangeAddress: "0x9e6f8d8189ac409e2d9fe4a441d673ec8b611d78"
  },
  {
    symbol: "PTR",
    name: "Petro",
    tokenAddress: "0xe964de82b9b83915ab8591bbebf1bfc4c65bb1dc",
    tokenDecimals: 8,
    exchangeAddress: "0xd4125bf96b48d7efcb23fdcfd782c0cb18449de3"
  },
  {
    symbol: "AETH",
    name: "Atomic Ethereum",
    tokenAddress: "0xb7742216e874c7c33f608c41e625b01a6f323570",
    tokenDecimals: 1,
    exchangeAddress: "0x1029d1ff7862fbe8fa6358dc1313488ed6885fc6"
  },
  {
    symbol: "STMX",
    name: "Crypterio Coin",
    tokenAddress: "0xe5fe68179c71d9fb4c1fed2035f4bbff9dc7b967",
    tokenDecimals: 18,
    exchangeAddress: "0x3e626492cf0a1dd58b6ba4542b47134e3b64e431"
  },
  {
    symbol: "aUSDT",
    name: "Aave Interest bearing USDT",
    tokenAddress: "0x71fc860f7d3a592a4a98740e39db31d25db65ae8",
    tokenDecimals: 6,
    exchangeAddress: "0x967735eb617ad99e86dfe5e13b7dd85df19ea5b1"
  },
  {
    symbol: "ZDR",
    name: "Zloadr Token",
    tokenAddress: "0xbdfa65533074b0b23ebc18c7190be79fa74b30c2",
    tokenDecimals: 18,
    exchangeAddress: "0xc1a7765bdbe7cb90b8e7ac89b9a2c07a2a111880"
  },
  {
    symbol: "SATURN",
    name: "Saturn",
    tokenAddress: "0x73dd6e972b4fce8ca611747b40006bcc8ee38e27",
    tokenDecimals: 18,
    exchangeAddress: "0x901f55986b1ec595d48595d57001827c98160af3"
  },
  {
    symbol: "㏕₧",
    name: "TALEGO",
    tokenAddress: "0xfab890ed2907e860038f67b257e7f3cc75683369",
    tokenDecimals: 18,
    exchangeAddress: "0xc0556e0cd21ac31a98a65e572bc64c41d73892dd"
  },
  {
    symbol: "DINK",
    name: "DINKY",
    tokenAddress: "0xec1721e6fb745217c108e6d99d7115fc251ab88b",
    tokenDecimals: 8,
    exchangeAddress: "0x8ea71b38759c869a1e4ce94e8e51e631b294490f"
  },
  {
    symbol: "DXT",
    name: "DataWallet Token",
    tokenAddress: "0x8db54ca569d3019a2ba126d03c37c44b5ef81ef6",
    tokenDecimals: 8,
    exchangeAddress: "0x39bd9a3c5af0dd9592d0eaef2ddf34b22ec5cd10"
  },
  {
    symbol: "NEOG",
    name: "null",
    tokenAddress: "0x449574c69f3a658794829ed81639a7a9ece041e1",
    tokenDecimals: 0,
    exchangeAddress: "0xa4433596eeeab8329cc6725ca266025472230c11"
  },
  {
    symbol: "ETG",
    name: "null",
    tokenAddress: "0x28c8d01ff633ea9cd8fc6a451d7457889e698de6",
    tokenDecimals: 0,
    exchangeAddress: "0x69738470f8f73539fee0f6867cbd24b8c0a7e50a"
  },
  {
    symbol: "UNI-V1",
    name: "Uniswap V1",
    tokenAddress: "0x17f11fca7a66e8049484ae0a74e0013c5719ec77",
    tokenDecimals: 18,
    exchangeAddress: "0x75121e3a693f8720a9cb1bf8138c85eff37665ea"
  },
  {
    symbol: "UNI-V1",
    name: "Uniswap V1",
    tokenAddress: "0x4cdfd08c4128c48987425846763b01f1570dc825",
    tokenDecimals: 18,
    exchangeAddress: "0xa0b519e9026dfdf5b46eb254584397b2bf38a4c6"
  },
  {
    symbol: "W0xETH",
    name: "Wrapped 0xEthereum Token",
    tokenAddress: "0x716523231368d43bdfe1f06afe1c62930731ab13",
    tokenDecimals: 8,
    exchangeAddress: "0xc1a1090c262b02b1ff26ec5d8868c78e9324a348"
  },
  {
    symbol: "ARCG",
    name: "Arch Crypton Game",
    tokenAddress: "0xf5774f42b28f35429aac35f8eb57541c511fdd49",
    tokenDecimals: 18,
    exchangeAddress: "0xbfb13b8bc14ffe736e13cd3ff8c54e7c8496e596"
  },
  {
    symbol: "EH2",
    name: "EnergonX Hydrogen H₂",
    tokenAddress: "0xa7d768ebd9915793393f117f8ab10f4a206875d8",
    tokenDecimals: 18,
    exchangeAddress: "0xf2ba17e87770fc2b3f5892eef234d9e5a45206a8"
  },
  {
    symbol: "XMRG",
    name: "Monero Gold",
    tokenAddress: "0x0f598112679b78e17a4a9febc83703710d33489c",
    tokenDecimals: 8,
    exchangeAddress: "0xceda48d2d41a6b725c2be17ae306474db5193027"
  },
  {
    symbol: "APX",
    name: "Apex",
    tokenAddress: "0x2b69f7c421f7b5dbda8c0c637b0f15186df50b59",
    tokenDecimals: 18,
    exchangeAddress: "0x0d9e04ad1f4873ce8210f26f8f1686d9d973889f"
  },
  {
    symbol: "XLM",
    name: "Stellar",
    tokenAddress: "0xd37f6655a53d907858efb65de16a561a1c3be751",
    tokenDecimals: 18,
    exchangeAddress: "0x889ffb451d55d0832b54264dea17b4f5ac1a49e4"
  },
  {
    symbol: "ETC",
    name: "Ethereum",
    tokenAddress: "0xa1621d5ceb743bbd4c9b9e65b6ff79cc661908e9",
    tokenDecimals: 18,
    exchangeAddress: "0xcbf2caa4e86f380139469d6dc97048a108e11d48"
  },
  {
    symbol: "CC coinslot.com",
    name: "Coin-coin coinslot.com",
    tokenAddress: "0x7f3eab3491ed282197038f1b89ca33d7e5adffba",
    tokenDecimals: 8,
    exchangeAddress: "0x7a651d199019f1a2e737978d354106d6dd0644e1"
  },
  {
    symbol: "Spark",
    name: "Sparkles Light",
    tokenAddress: "0x4c4c62a08eb49404ab85f3b4a0d6560488f2e216",
    tokenDecimals: 6,
    exchangeAddress: "0xa9b3794a48554d7008875b4e9d9b8961f5605d50"
  },
  {
    symbol: "RES",
    name: "Resfinex",
    tokenAddress: "0x0a9f693fce6f00a51a8e0db4351b5a8078b4242e",
    tokenDecimals: 5,
    exchangeAddress: "0xa9a666ec585bcc8551ac7648258bbfaf936c2c25"
  },
  {
    symbol: "ALU",
    name: "ALUCHAIN",
    tokenAddress: "0x3b2f94c251c2cccb7ad16a68f040a220cc2bdd72",
    tokenDecimals: 8,
    exchangeAddress: "0xd8c324c801aee42a83657887ff37ce859e6e60c6"
  },
  {
    symbol: "STQ",
    name: "Storiqa Token",
    tokenAddress: "0x5c3a228510d246b78a3765c20221cbf3082b44a4",
    tokenDecimals: 18,
    exchangeAddress: "0x39a0b1cafcf65abd0df4c8d20f36391ab6a90b6a"
  },
  {
    symbol: "TTT",
    name: "Tapcoin",
    tokenAddress: "0x9f599410d207f3d2828a8712e5e543ac2e040382",
    tokenDecimals: 18,
    exchangeAddress: "0x0f5d5579547b3fdc99da897135b0ff66cdb95387"
  },
  {
    symbol: "ETHUSDADL4",
    name: "ETHUSD ADL 4H Set",
    tokenAddress: "0xb8243b4eeca27a4191e879760b88fe2270561796",
    tokenDecimals: 18,
    exchangeAddress: "0xa995056b1730a2c4493707dd901c17cc8b9d610c"
  },
  {
    symbol: "BTCS",
    name: "Bitcoin Solar",
    tokenAddress: "0x5f51a196ed91fb14e3b3650c30743675c9a429be",
    tokenDecimals: 18,
    exchangeAddress: "0x07de855ee319d35e603e5d25d247adf3fbb44cb1"
  },
  {
    symbol: "DNN",
    name: "DNN",
    tokenAddress: "0x9d9832d1beb29cc949d75d61415fd00279f84dc2",
    tokenDecimals: 18,
    exchangeAddress: "0x53109f32c4d68e0d728a541b9d7726d50a97ddbf"
  },
  {
    symbol: "BRD",
    name: "Bread Token",
    tokenAddress: "0x558ec3152e2eb2174905cd19aea4e34a23de9ad6",
    tokenDecimals: 18,
    exchangeAddress: "0xb2360c3263ee0c97d5937ad4e598e57ef9923a1e"
  },
  {
    symbol: "FLUZ",
    name: "FluzFluz",
    tokenAddress: "0x954b5de09a55e59755acbda29e1eb74a45d30175",
    tokenDecimals: 18,
    exchangeAddress: "0xd1028b8af0e4e54812f0d0dd726de687cd361e96"
  },
  {
    symbol: "PHM",
    name: "Phoneum",
    tokenAddress: "0x8b6dd2144a3cc6677600735d0e62134839bb85d0",
    tokenDecimals: 2,
    exchangeAddress: "0xe7e2ec57aa0fe59b55e23288bc9a6d748fa4f713"
  },
  {
    symbol: "UNI-V1",
    name: "Uniswap V1",
    tokenAddress: "0x2b7b3dd16488f906d190e241156984bb4274d269",
    tokenDecimals: 18,
    exchangeAddress: "0xe8a90f4a47b54988fe031bceede1449284f1de67"
  },
  {
    symbol: "CBD",
    name: "TheCBDcoin",
    tokenAddress: "0xd02a1ed82fa5091a5639dc507f2f6130e5bc61be",
    tokenDecimals: 18,
    exchangeAddress: "0xf5941b6cd3c2c25c8066a14a946d41902e7efcdc"
  },
  {
    symbol: "UVU",
    name: "Comunion UVU Token",
    tokenAddress: "0xc163eade1a642d8ccef1046bae2569a00cb647ed",
    tokenDecimals: 8,
    exchangeAddress: "0x696725bbf41283cad29ef421b427464a8d87dc37"
  },
  {
    symbol: "STON",
    name: "Mainston",
    tokenAddress: "0xe31cbf04019fb9a859f9dfce6389efeb45170380",
    tokenDecimals: 18,
    exchangeAddress: "0xc9528eaa5f47b994df042fc623648cb07cc0e83e"
  },
  {
    symbol: "XLIC",
    name: "Lico",
    tokenAddress: "0xe17607302cff3a5b246916e6bfd0eda7bbd2c4b0",
    tokenDecimals: 18,
    exchangeAddress: "0xe3412f2155fe1d49febc6f8ed605773682c502d1"
  },
  {
    symbol: "BRZ",
    name: "BRZ",
    tokenAddress: "0x420412e765bfa6d85aaac94b4f7b708c89be2e2b",
    tokenDecimals: 4,
    exchangeAddress: "0xcc7662060ff05ea3ab68c8eb39653c1e52708adf"
  },
  {
    symbol: "UNI",
    name: "Unipot",
    tokenAddress: "0x3e370a6c8255b065bd42bc0ac9255b269cfcc172",
    tokenDecimals: 8,
    exchangeAddress: "0x8c871606331caff597ef08f59d6fd6b97d70ba7b"
  },
  {
    symbol: "DIO",
    name: "Decimated Token",
    tokenAddress: "0x35a5cb585d51d836922b78a9bb1f5c04635c39b6",
    tokenDecimals: 8,
    exchangeAddress: "0xbba5ac05ed924e27347f49bded2b7b323e3b2eb3"
  },
  {
    symbol: "KAPP",
    name: "Kappi Token",
    tokenAddress: "0x2439c0549f1616dab533c8af5d42a77331173b3a",
    tokenDecimals: 18,
    exchangeAddress: "0x5f6bd82aedfc9d8e037269e65e930cdda3ade103"
  },
  {
    symbol: "YGG",
    name: "YGG",
    tokenAddress: "0x0b686de16d57b4d2d0384d06bec6ef5d5d7dce5f",
    tokenDecimals: 18,
    exchangeAddress: "0x3d4b054dacd9a78dc7bb9508045ea353acc3901b"
  },
  {
    symbol: "PHT",
    name: "Phoneum Token",
    tokenAddress: "0xbbd227e805b90b8fe8f4c01a3f4e48bdae0599af",
    tokenDecimals: 2,
    exchangeAddress: "0x0865f2656819f08d38d26e1e134be5e519951526"
  },
  {
    symbol: "KPT",
    name: "krypital",
    tokenAddress: "0x814d76b36a7d34df364f4fc6b075ba47f9ba1f47",
    tokenDecimals: 18,
    exchangeAddress: "0xd30ebbbb823fe8f14ce3d0e1c1ed383cb8b71708"
  },
  {
    symbol: "TAPS",
    name: "TAPSPAY",
    tokenAddress: "0x56bb6f961f2cb9947fea063df1a42c2233487903",
    tokenDecimals: 8,
    exchangeAddress: "0x65b88e9eae685c178c08ef9c9ebf5999b860866b"
  },
  {
    symbol: "BTCN",
    name: "Bitcoin Neo",
    tokenAddress: "0x2976ac3d0bb67c6307a73df852c61c14cdda9863",
    tokenDecimals: 18,
    exchangeAddress: "0xa9c91e55dcbc0c4c7db567f752506620e44a8ba2"
  },
  {
    symbol: "UNI-V1",
    name: "Uniswap V1",
    tokenAddress: "0xe04bc8d7c6e49ae6fb193f0a995046ef63d6526b",
    tokenDecimals: 18,
    exchangeAddress: "0xd180eb4f6ed4fec49916d1538446875713737fe0"
  },
  {
    symbol: "CBU",
    name: "BANQUEUNIVERSAL",
    tokenAddress: "0xcef46305d096fa876dd23048bf80f9345282e3fc",
    tokenDecimals: 0,
    exchangeAddress: "0x446097f12eb3aaaf0c068827633cb516aeb5e53f"
  },
  {
    symbol: "FON",
    name: "fonetones",
    tokenAddress: "0x5666bdc5c4f54f6ef65956e315e1a674932b68d5",
    tokenDecimals: 6,
    exchangeAddress: "0xb5300fa43c9cf6f3b1240b2dbc28fb155c8c5926"
  },
  {
    symbol: "DiP",
    name: "Divided Party",
    tokenAddress: "0xa27be88ad1dce22609a4a7f4c395f861bbabeae2",
    tokenDecimals: 8,
    exchangeAddress: "0xd8703d9b785308174f3d6adfaf9bfa6179642f22"
  },
  {
    symbol: "rDAI",
    name: "Redeemable DAI",
    tokenAddress: "0x261b45d85ccfeabb11f022eba346ee8d1cd488c0",
    tokenDecimals: 18,
    exchangeAddress: "0xbffcd1abd9c05b2b9b9a9a52768a36cfbd3a1d39"
  },
  {
    symbol: "HYM",
    name: "HYMAG Token",
    tokenAddress: "0x9488885f5c49c86f35f9ff8fd9e3ec6eb33534fc",
    tokenDecimals: 18,
    exchangeAddress: "0x5c8c805e407a3b38359add3d777d0dbe0dcbda69"
  },
  {
    symbol: "HAPI",
    name: "HAPI",
    tokenAddress: "0x1d0f1b6833f0ad4f363b5460e336bc129f204a76",
    tokenDecimals: 18,
    exchangeAddress: "0x0a638d29c7c9cd0f5e7a330b6438b27c3bda976a"
  },
  {
    symbol: "JOB",
    name: "Jobchain",
    tokenAddress: "0xdfbc9050f5b01df53512dcc39b4f2b2bbacd517a",
    tokenDecimals: 8,
    exchangeAddress: "0xb8e1a547787c20231adab691dcc2f7b01efd6552"
  }
]
