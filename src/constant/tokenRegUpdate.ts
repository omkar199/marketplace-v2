// import axios from 'axios'
// import web3 from 'web3'

const tokenRegistry = {
  '0xe9e7cea3dedca5984780bafc599bd69add087d56': {
    token: 'BUSD',
    address: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4687.png',
    handler: 'Base',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: true,
  },
  '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c': {
    token: 'BTC',
    address: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4023.png',
    handler: 'Base',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: true,
  },
  '0x2170ed0880ac9a755fd29b2688956bd959f933f8': {
    token: 'ETH',
    address: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
    handler: 'Base',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: true,
  },
  '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c': {
    token: 'WBNB',
    address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7192.png',
    handler: 'Base',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: true,
  },
  '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe': {
    token: 'XRP',
    address: '0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png',
    handler: 'Base',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: true,
  },
  '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47': {
    token: 'ADA',
    address: '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png',
    handler: 'Base',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: true,
  },
  '0x8ff795a6f4d97e7887c79bea79aba5cc76444adf': {
    token: 'BCH',
    address: '0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1831.png',
    handler: 'Base',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: true,
  },
  '0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153': {
    token: 'FIL',
    address: '0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2280.png',
    handler: 'Base',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: true,
  },
  '0x7083609fce4d1d8dc0c979aab8c869ea2c873402': {
    token: 'DOT',
    address: '0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png',
    handler: 'Base',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: true,
  },
  '0x85eac5ac2f758618dfa09bdbe0cf174e7d574d5b': {
    token: 'TRX',
    address: '0x85EAC5Ac2F758618dFa09bDbe0cf174e7d574D5B',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png',
    handler: 'Base',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: true,
  },
  '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82': {
    token: 'CAKE',
    address: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7186.png',
    handler: 'Base',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: true,
  },
  '0xcc42724c6683b7e57334c4e856f4c9965ed682bd': {
    token: 'MATIC',
    address: '0xCC42724C6683B7E57334c4E856f4c9965ED682bD',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png',
    handler: 'Base',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: true,
  },
  '0x570a5d26f7765ecb712c0924e4de545b89fd43df': {
    token: 'SOL',
    address: '0x570A5D26f7765Ecb712C0924E4De545B89fD43dF',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/16116.png',
    handler: 'Base',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: true,
  },
  '0xba2ae424d960c26247dd6c32edc70b295c744c43': {
    token: 'DOGE',
    address: '0xbA2aE424d960c26247Dd6c32edC70B295c744C43',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/74.png',
    handler: 'Base',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: true,
  },
  '0x1ce0c2827e2ef14d5c4f29a091d735a204794041': {
    token: 'AVAX',
    address: '0x1CE0c2827e2eF14D5C4f29a091d735A204794041',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png',
    handler: 'Base',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: true,
  },
  '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd': {
    token: 'LINK',
    address: '0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD',
    logo: '	https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png',
    handler: 'Base',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: true,
  },
  '0xbf5140a22578168fd562dccf235e5d43a02ce9b1': {
    token: 'UNI',
    address: '0xBf5140A22578168FD562DCcF235E5D43A02ce9B1',
    logo: '	https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png',
    handler: 'Base',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: true,
  },
  '0x55d398326f99059ff775485246999027b3197955': {
    token: 'USDT',
    address: '0x55d398326f99059fF775485246999027B3197955',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
    handler: 'Base',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: true,
  },
  '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d': {
    token: 'USDC',
    address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png',
    handler: 'Base',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: true,
  },
  '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3': {
    token: 'DAI',
    address: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4943.png',
    handler: 'Base',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: true,
  },
  '0x14016e85a25aeb13065688cafb43044c2ef86784': {
    token: 'TUSD',
    address: '0x14016E85a25aeb13065688cAFB43044C2ef86784',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2563.png',
    handler: 'Base',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: true,
  },
  '0x4338665cbb7b2485a8855a139b75d5e34ab0db94': {
    token: 'LTC',
    address: '0x4338665CBB7B2485A8855A139b75D5e34AB0DB94',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2.png',
    handler: 'Base',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: true,
  },
  '0xca3f508b8e4dd382ee878a314789373d80a5190a': {
    token: 'BIFI',
    address: '0xCa3F508B8e4Dd382eE878A314789373D80A5190A',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7311.png',
    handler: 'Base',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: true,
  },
  '0x0eb3a705fc54725037cc9e008bdede697f62f335': {
    token: 'ATOM',
    address: '0x0Eb3a705fc54725037CC9e008bDede697f62F335',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3794.png',
    handler: 'Base',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: true,
  },
  '0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63': {
    token: 'XVS',
    address: '0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7288.png',
    handler: 'Base',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: true,
  },
  '0x8f0528ce5ef7b51152a59745befdd91d97091d2f': {
    token: 'Alpaca',
    address: '0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8707.png',
    handler: 'Base',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: true,
  },
  '0xa184088a740c695e156f91f5cc086a06bb78b827': {
    token: 'AUTO',
    address: '0xa184088a740c695E156F91f5cC086a06bb78b827',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8387.png',
    handler: 'Base',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: true,
  },
  '0xfb6115445bff7b52feb98650c87f44907e58f802': {
    token: 'AAVE',
    address: '0xfb6115445Bff7b52FeB98650C87f44907E58f802',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7278.png',
    handler: 'Base',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: true,
  },
  '0x965f527d9159dce6288a2219db51fc6eef120dd1': {
    token: 'BSW',
    address: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10746.png',
    handler: 'Base',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: true,
  },
  '0x52ce071bd9b1c4b00a0b92d298c512478cad67e8': {
    token: 'COMP',
    address: '0x52CE071Bd9b1C4B00A0b92D298c512478CaD67e8',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5692.png',
    handler: 'Base',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: true,
  },
  '0xad29abb318791d579433d831ed122afeaf29dcfe': {
    token: 'FTM',
    address: '0xAD29AbB318791D579433D831ed122aFeAf29dcfe',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3513.png',
    handler: 'Base',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: true,
  },
  '0xfe19f0b51438fd612f6fd59c1dbb3ea319f433ba': {
    token: 'MIM',
    address: '0xfE19F0B51438fd612f6FD59C1dbB3eA319f433Ba',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/162.png',
    handler: 'Base',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: true,
  },
  '0x3019bf2a2ef8040c242c9a4c5c4bd4c81678b2a1': {
    token: 'GMT',
    address: '0x3019BF2a2eF8040C242C9a4c5c4BD4C81678b2A1',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/18069.png',
    handler: 'Base',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: true,
  },
  '0x1fa4a73a3f0133f0025378af00236f3abdee5d63': {
    token: 'NEAR',
    address: '0x1Fa4a73a3F0133f0025378af00236f3aBDEE5D63',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6535.png',
    handler: 'Base',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: true,
  },
  '0x2859e4544c4bb03966803b044a93563bd2d0dd4d': {
    token: 'SHIB',
    address: '0x2859e4544C4bB03966803b044A93563Bd2D0DD4D',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png',
    handler: 'Base',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: true,
  },
  '0x947950bcc74888a40ffa2593c5798f11fc9124c4': {
    token: 'SUSHI',
    address: '0x947950BcC74888a40Ffa2593C5798F11Fc9124C4',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6758.png',
    handler: 'Base',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: true,
  },
  '0xf508fcd89b8bd15579dc79a6827cb4686a3592c8': {
    token: 'vETH',
    address: '0xf508fCD89b8bd15579dc79A6827cB4686A3592c8',
    logo: 'https://avatars.githubusercontent.com/u/77491099?s=64&v=64',
    handler: 'Venus',
    rewardToken: '0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63',
    primary: false,
  },
  '0x650b940a1033b8a1b1873f78730fcfc73ec11f1f': {
    token: 'vLINK',
    address: '0x650b940a1033B8A1b1873f78730FcFC73ec11f1f',
    logo: 'https://avatars.githubusercontent.com/u/77491099?s=64&v=64',
    handler: 'Venus',
    rewardToken: '0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63',
    primary: false,
  },
  '0x151b1e2635a717bcdc836ecd6fbb62b674fe3e1d': {
    token: 'vXVS',
    address: '0x151b1e2635a717bcdc836ecd6fbb62b674fe3e1d',
    logo: 'https://avatars.githubusercontent.com/u/77491099?s=64&v=64',
    handler: 'Venus',
    rewardToken: '0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63',
    primary: false,
  },
  '0xeca88125a5adbe82614ffc12d0db554e2e2867c8': {
    token: 'vUSDC',
    address: '0xeca88125a5adbe82614ffc12d0db554e2e2867c8',
    logo: 'https://avatars.githubusercontent.com/u/77491099?s=64&v=64',
    handler: 'Venus',
    rewardToken: '0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63',
    primary: false,
  },
  '0xfd5840cd36d94d7229439859c0112a4185bc0255': {
    token: 'vUSDT',
    address: '0xfd5840cd36d94d7229439859c0112a4185bc0255',
    logo: 'https://avatars.githubusercontent.com/u/77491099?s=64&v=64',
    handler: 'Venus',
    rewardToken: '0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63',
    primary: false,
  },
  '0x95c78222b3d6e262426483d42cfa53685a67ab9d': {
    token: 'vBUSD',
    address: '0x95c78222b3d6e262426483d42cfa53685a67ab9d',
    logo: 'https://avatars.githubusercontent.com/u/77491099?s=64&v=64',
    handler: 'Venus',
    rewardToken: '0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63',
    primary: false,
  },
  '0xa07c5b74c9b40447a954e1466938b865b6bbea36': {
    token: 'vBNB',
    address: '0xa07c5b74c9b40447a954e1466938b865b6bbea36',
    logo: 'https://avatars.githubusercontent.com/u/77491099?s=64&v=64',
    handler: 'Venus',
    rewardToken: '0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63',
    primary: false,
  },
  '0x882c173bc7ff3b7786ca16dfed3dfffb9ee7847b': {
    token: 'vBTC',
    address: '0x882c173bc7ff3b7786ca16dfed3dfffb9ee7847b',
    logo: 'https://avatars.githubusercontent.com/u/77491099?s=64&v=64',
    handler: 'Venus',
    rewardToken: '0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63',
    primary: false,
  },
  '0x57a5297f2cb2c0aac9d554660acd6d385ab50c6b': {
    token: 'vLTC',
    address: '0x57a5297f2cb2c0aac9d554660acd6d385ab50c6b',
    logo: 'https://avatars.githubusercontent.com/u/77491099?s=64&v=64',
    handler: 'Venus',
    rewardToken: '0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63',
    primary: false,
  },
  '0xb248a295732e0225acd3337607cc01068e3b9c10': {
    token: 'vXRP',
    address: '0xb248a295732e0225acd3337607cc01068e3b9c10',
    logo: 'https://avatars.githubusercontent.com/u/77491099?s=64&v=64',
    handler: 'Venus',
    rewardToken: '0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63',
    primary: false,
  },
  '0x5f0388ebc2b94fa8e123f404b79ccf5f40b29176': {
    token: 'vBCH',
    address: '0x5f0388ebc2b94fa8e123f404b79ccf5f40b29176',
    logo: 'https://avatars.githubusercontent.com/u/77491099?s=64&v=64',
    handler: 'Venus',
    rewardToken: '0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63',
    primary: false,
  },
  '0x1610bc33319e9398de5f57b33a5b184c806ad217': {
    token: 'vDOT',
    address: '0x1610bc33319e9398de5f57b33a5b184c806ad217',
    logo: 'https://avatars.githubusercontent.com/u/77491099?s=64&v=64',
    handler: 'Venus',
    rewardToken: '0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63',
    primary: false,
  },
  '0x334b3ecb4dca3593bccc3c7ebd1a1c1d1780fbf1': {
    token: 'vDAI',
    address: '0x334b3ecb4dca3593bccc3c7ebd1a1c1d1780fbf1',
    logo: 'https://avatars.githubusercontent.com/u/77491099?s=64&v=64',
    handler: 'Venus',
    rewardToken: '0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63',
    primary: false,
  },
  '0xf91d58b5ae142dacc749f58a49fcbac340cb0343': {
    token: 'vFIL',
    address: '0xf91d58b5ae142dacc749f58a49fcbac340cb0343',
    logo: 'https://avatars.githubusercontent.com/u/77491099?s=64&v=64',
    handler: 'Venus',
    rewardToken: '0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63',
    primary: false,
  },
  '0x9a0af7fdb2065ce470d72664de73cae409da28ec': {
    token: 'vADA',
    address: '0x9a0af7fdb2065ce470d72664de73cae409da28ec',
    logo: 'https://avatars.githubusercontent.com/u/77491099?s=64&v=64',
    handler: 'Venus',
    rewardToken: '0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63',
    primary: false,
  },
  '0xec3422ef92b2fb59e84c8b02ba73f1fe84ed8d71': {
    token: 'vDOGE',
    address: '0xec3422ef92b2fb59e84c8b02ba73f1fe84ed8d71',
    logo: 'https://avatars.githubusercontent.com/u/77491099?s=64&v=64',
    handler: 'Venus',
    rewardToken: '0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63',
    primary: false,
  },
  '0x5c9476fcd6a4f9a3654139721c949c2233bbbbc8': {
    token: 'vMATIC',
    address: '0x5c9476fcd6a4f9a3654139721c949c2233bbbbc8',
    logo: 'https://avatars.githubusercontent.com/u/77491099?s=64&v=64',
    handler: 'Venus',
    rewardToken: '0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63',
    primary: false,
  },
  '0x86ac3974e2bd0d60825230fa6f355ff11409df5c': {
    token: 'vCAKE',
    address: '0x86ac3974e2bd0d60825230fa6f355ff11409df5c',
    logo: 'https://avatars.githubusercontent.com/u/77491099?s=64&v=64',
    handler: 'Venus',
    rewardToken: '0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63',
    primary: false,
  },
  '0x08ceb3f4a7ed3500ca0982bcd0fc7816688084c3': {
    token: 'vTUSD',
    address: '0x08ceb3f4a7ed3500ca0982bcd0fc7816688084c3',
    logo: 'https://avatars.githubusercontent.com/u/77491099?s=64&v=64',
    handler: 'Venus',
    rewardToken: '0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63',
    primary: false,
  },
  '0x5af1b6ca84693cc8e733c8273ba260095b3d05ca': {
    token: 'qBNB',
    address: '0x5aF1b6cA84693Cc8E733C8273Ba260095B3D05CA',
    logo: 'https://www.cypherhunter.com/_next/image/?url=https%3A%2F%2Fimage.cypherhunter.com%2Fupload%2Fimg%2Fp%2F0ec38d84b1208f3075a5c77cd959f346.jpg-resized&w=64&q=64',
    handler: 'Liqee',
    rewardToken: '0x4A9A2b2b04549C3927dd2c9668A5eF3fCA473623',
    primary: false,
  },
  '0x88131dd9f6a78d3d23abcf4960d91913d2dc2307': {
    token: 'qETH',
    address: '0x88131dd9f6A78d3d23aBcF4960D91913d2dC2307',
    logo: 'https://www.cypherhunter.com/_next/image/?url=https%3A%2F%2Fimage.cypherhunter.com%2Fupload%2Fimg%2Fp%2F0ec38d84b1208f3075a5c77cd959f346.jpg-resized&w=64&q=64',
    handler: 'Liqee',
    rewardToken: '0x4A9A2b2b04549C3927dd2c9668A5eF3fCA473623',
    primary: false,
  },
  '0xadcf9619c404de591766b33e696c737ebe341a87': {
    token: 'qATOM',
    address: '0xAdCF9619C404de591766B33e696c737ebe341A87',
    logo: 'https://www.cypherhunter.com/_next/image/?url=https%3A%2F%2Fimage.cypherhunter.com%2Fupload%2Fimg%2Fp%2F0ec38d84b1208f3075a5c77cd959f346.jpg-resized&w=64&q=64',
    handler: 'Liqee',
    rewardToken: '0x4A9A2b2b04549C3927dd2c9668A5eF3fCA473623',
    primary: false,
  },
  '0x89934cf95c8ffa4d748b3a9963fad13dba52c52f': {
    token: 'qFIL',
    address: '0x89934cF95c8Ffa4D748B3a9963faD13dBA52C52F',
    logo: 'https://www.cypherhunter.com/_next/image/?url=https%3A%2F%2Fimage.cypherhunter.com%2Fupload%2Fimg%2Fp%2F0ec38d84b1208f3075a5c77cd959f346.jpg-resized&w=64&q=64',
    handler: 'Liqee',
    rewardToken: '0x4A9A2b2b04549C3927dd2c9668A5eF3fCA473623',
    primary: false,
  },
  '0xf51422c47c6c3e40cfca4a7b04232aedb7f49948': {
    token: 'qDOT',
    address: '0xF51422c47c6C3e40CFCA4a7b04232aeDb7f49948',
    logo: 'https://www.cypherhunter.com/_next/image/?url=https%3A%2F%2Fimage.cypherhunter.com%2Fupload%2Fimg%2Fp%2F0ec38d84b1208f3075a5c77cd959f346.jpg-resized&w=64&q=64',
    handler: 'Liqee',
    rewardToken: '0x4A9A2b2b04549C3927dd2c9668A5eF3fCA473623',
    primary: false,
  },
  '0xd7d069493685a581d27824fc46eda46b7efc0063': {
    token: 'ibBNB',
    address: '0xd7d069493685a581d27824fc46eda46b7efc0063',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8707.png',
    handler: 'Alpaca',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: false,
  },
  '0x08fc9ba2cac74742177e0afc3dc8aed6961c24e7': {
    token: 'ibBTCB',
    address: '0x08FC9Ba2cAc74742177e0afC3dC8Aed6961c24e7',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8707.png',
    handler: 'Alpaca',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: false,
  },
  '0x7c9e73d4c71dae564d41f78d56439bb4ba87592f': {
    token: 'ibBUSD',
    address: '0x7C9e73d4C71dae564d41F78d56439bB4ba87592f',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8707.png',
    handler: 'Alpaca',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: false,
  },
  '0xbff4a34a4644a113e8200d7f1d79b3555f723afe': {
    token: 'ibETH',
    address: '0xbfF4a34A4644a113E8200D7F1D79b3555f723AfE',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8707.png',
    handler: 'Alpaca',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: false,
  },
  '0xf1be8ecc990cbcb90e166b71e368299f0116d421': {
    token: 'ibALPACA',
    address: '0xf1bE8ecC990cBcb90e166b71E368299f0116d421',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8707.png',
    handler: 'Alpaca',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: false,
  },
  '0x158da805682bdc8ee32d52833ad41e74bb951e59': {
    token: 'ibUSDT',
    address: '0x158Da805682BdC8ee32d52833aD41E74bb951E59',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8707.png',
    handler: 'Alpaca',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: false,
  },
  '0x3282d2a151ca00bfe7ed17aa16e42880248cd3cd': {
    token: 'ibTUSD',
    address: '0x3282d2a151ca00BfE7ed17Aa16E42880248CD3Cd',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8707.png',
    handler: 'Alpaca',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: false,
  },
  '0x800933d685e7dc753758ceb77c8bd34abf1e26d7': {
    token: 'ibUSDC',
    address: '0x800933D685E7Dc753758cEb77C8bd34aBF1E26d7',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8707.png',
    handler: 'Alpaca',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: false,
  },
  '0xff693450dda65df7dd6f45b4472655a986b147eb': {
    token: 'ibCAKE',
    address: '0xfF693450dDa65df7DD6F45B4472655A986b147Eb',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8707.png',
    handler: 'Alpaca',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: false,
  },
  '0x8840c6252e2e86e545defb6da98b2a0e26d8c1ba': {
    token: 'biswap_USDT-WBNB',
    address: '0x8840c6252e2e86e545defb6da98b2a0e26d8c1ba',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10746.png',
    handler: 'BiSwapLP',
    rewardToken: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
    primary: false,
  },
  '0xacaac9311b0096e04dfe96b6d87dec867d3883dc': {
    token: 'biswap_WBNB-BUSD',
    address: '0xacaac9311b0096e04dfe96b6d87dec867d3883dc',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10746.png',
    handler: 'BiSwapLP',
    rewardToken: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
    primary: false,
  },
  '0xda8ceb724a06819c0a5cdb4304ea0cb27f8304cf': {
    token: 'biswap_USDT-BUSD',
    address: '0xda8ceb724a06819c0a5cdb4304ea0cb27f8304cf',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10746.png',
    handler: 'BiSwapLP',
    rewardToken: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
    primary: false,
  },
  '0x63b30de1a998e9e64fd58a21f68d323b9bcd8f85': {
    token: 'biswap_ETH-USDT',
    address: '0x63b30de1a998e9e64fd58a21f68d323b9bcd8f85',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10746.png',
    handler: 'BiSwapLP',
    rewardToken: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
    primary: false,
  },
  '0xa987f0b7098585c735cd943ee07544a84e923d1d': {
    token: 'biswap_USDT-BTCB',
    address: '0xa987f0b7098585c735cd943ee07544a84e923d1d',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10746.png',
    handler: 'BiSwapLP',
    rewardToken: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
    primary: false,
  },
  '0x5bf6941f029424674bb93a43b79fc46bf4a67c21': {
    token: 'biswap_ETH-WBNB',
    address: '0x5bf6941f029424674bb93a43b79fc46bf4a67c21',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10746.png',
    handler: 'BiSwapLP',
    rewardToken: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
    primary: false,
  },
  '0x753c734dfe05af28a732c033e26ea6d369e07662': {
    token: 'biswap_WBNB-XVS',
    address: '0x753c734dfe05af28a732c033e26ea6d369e07662',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10746.png',
    handler: 'BiSwapLP',
    rewardToken: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
    primary: false,
  },
  '0x6216e04cd40db2c6fbed64f1b5830a98d3a91740': {
    token: 'biswap_ETH-BTCB',
    address: '0x6216e04cd40db2c6fbed64f1b5830a98d3a91740',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10746.png',
    handler: 'BiSwapLP',
    rewardToken: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
    primary: false,
  },
  '0xc7e9d76ba11099af3f330ff829c5f442d571e057': {
    token: 'biswap_BTC-WBNB',
    address: '0xc7e9d76ba11099af3f330ff829c5f442d571e057',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10746.png',
    handler: 'BiSwapLP',
    rewardToken: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
    primary: false,
  },
  '0x46492b26639df0cda9b2769429845cb991591e0a': {
    token: 'biswap_BSW-WBNB',
    address: '0x46492b26639df0cda9b2769429845cb991591e0a',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10746.png',
    handler: 'BiSwapLP',
    rewardToken: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
    primary: false,
  },
  '0x2b30c317cedfb554ec525f85e79538d59970beb0': {
    token: 'biswap_USDT-BSW',
    address: '0x2b30c317cedfb554ec525f85e79538d59970beb0',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10746.png',
    handler: 'BiSwapLP',
    rewardToken: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
    primary: false,
  },
  '0x8410c28a6e4074a148f9205712c6b54d12f7282c': {
    token: 'biswap_ALPACA-BUSD',
    address: '0x8410c28a6e4074a148f9205712c6b54d12f7282c',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10746.png',
    handler: 'BiSwapLP',
    rewardToken: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
    primary: false,
  },
  '0x8860922eb2795ab0d57363653dd7ebf18d7c0a42': {
    token: 'biswap_ADA-WBNB',
    address: '0x8860922eb2795ab0d57363653dd7ebf18d7c0a42',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10746.png',
    handler: 'BiSwapLP',
    rewardToken: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
    primary: false,
  },
  '0x52a499333a7837a72a9750849285e0bb8552de5a': {
    token: 'biswap_FIL-USDT',
    address: '0x52a499333a7837a72a9750849285e0bb8552de5a',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10746.png',
    handler: 'BiSwapLP',
    rewardToken: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
    primary: false,
  },
  '0x3530f7d8d55c93d778e17cbd30bf9eb07b884f35': {
    token: 'biswap_SOL-WBNB',
    address: '0x3530f7d8d55c93d778e17cbd30bf9eb07b884f35',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10746.png',
    handler: 'BiSwapLP',
    rewardToken: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
    primary: false,
  },
  '0xa34e97d80b76315665687e36c0e8b7f6a611685f': {
    token: 'biswap_AUTO-WBNB',
    address: '0xa34e97d80b76315665687e36c0e8b7f6a611685f',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10746.png',
    handler: 'BiSwapLP',
    rewardToken: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
    primary: false,
  },
  '0x412b607f4cbe9cae77c6f720a701cd60fa0ebd3f': {
    token: 'biswap_LTC-USDT',
    address: '0x412b607f4cbe9cae77c6f720a701cd60fa0ebd3f',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10746.png',
    handler: 'BiSwapLP',
    rewardToken: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
    primary: false,
  },
  '0x1ef315fa08e0e1b116d97e3dfe0af292ed8b7f02': {
    token: 'biswap_DOGE-WBNB',
    address: '0x1ef315fa08e0e1b116d97e3dfe0af292ed8b7f02',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10746.png',
    handler: 'BiSwapLP',
    rewardToken: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
    primary: false,
  },
  '0xf1a12ec907b3d87b6de7a9a5c3820566c621f68b': {
    token: 'biswap_TWT-WBNB',
    address: '0xf1a12ec907b3d87b6de7a9a5c3820566c621f68b',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10746.png',
    handler: 'BiSwapLP',
    rewardToken: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
    primary: false,
  },
  '0x7bfcd2bda87fd2312a946bd9b68f5acc6e21595a': {
    token: 'biswap_FTM-WBNB',
    address: '0x7bfcd2bda87fd2312a946bd9b68f5acc6e21595a',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10746.png',
    handler: 'BiSwapLP',
    rewardToken: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
    primary: false,
  },
  '0x5dc30bb8d7f02efef28f7e637d17aea13fa96906': {
    token: 'biswap_XRP-WBNB',
    address: '0x5dc30bb8d7f02efef28f7e637d17aea13fa96906',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10746.png',
    handler: 'BiSwapLP',
    rewardToken: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
    primary: false,
  },
  '0x3b09e13ca9189fbd6a196cfe5fbd477c885afbf3': {
    token: 'biswap_WBNB-WMATIC',
    address: '0x3b09e13ca9189fbd6a196cfe5fbd477c885afbf3',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10746.png',
    handler: 'BiSwapLP',
    rewardToken: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
    primary: false,
  },
  '0x49859419c83465eeeedd7b1d30db99ce58c88ec3': {
    token: 'biswap_SHIB-WBNB',
    address: '0x49859419c83465eeeedd7b1d30db99ce58c88ec3',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10746.png',
    handler: 'BiSwapLP',
    rewardToken: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
    primary: false,
  },
  '0x16fe21c91c426e603977b1c6ecd59fc510a518c2': {
    token: 'biswap_WBNB-LINK',
    address: '0x16fe21c91c426e603977b1c6ecd59fc510a518c2',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10746.png',
    handler: 'BiSwapLP',
    rewardToken: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
    primary: false,
  },
  '0x153dc2ebcb551799b13d4e6ff84fc34c7aedf241': {
    token: 'biswap_WBNB-UNI',
    address: '0x153dc2ebcb551799b13d4e6ff84fc34c7aedf241',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10746.png',
    handler: 'BiSwapLP',
    rewardToken: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
    primary: false,
  },
  '0xe0e9fdd2f0bcdbcaf55661b6fa1efc0ce181504b': {
    token: 'biswap_NEAR-WBNB',
    address: '0xe0e9fdd2f0bcdbcaf55661b6fa1efc0ce181504b',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10746.png',
    handler: 'BiSwapLP',
    rewardToken: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
    primary: false,
  },
  '0x2f3899ffb9fdcf635132f7bb94c1a3a0f906cc6f': {
    token: 'biswap_AVAX-WBNB',
    address: '0x2f3899ffb9fdcf635132f7bb94c1a3a0f906cc6f',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10746.png',
    handler: 'BiSwapLP',
    rewardToken: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
    primary: false,
  },
  '0x1483767e665b3591677fd49f724bf7430c18bf83': {
    token: 'biswap_USDT-USDC',
    address: '0x1483767e665b3591677fd49f724bf7430c18bf83',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10746.png',
    handler: 'BiSwapLP',
    rewardToken: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
    primary: false,
  },
  '0x06cd679121ec37b0a2fd673d4976b09d81791856': {
    token: 'biswap_USDC-WBNB',
    address: '0x06cd679121ec37b0a2fd673d4976b09d81791856',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10746.png',
    handler: 'BiSwapLP',
    rewardToken: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
    primary: false,
  },
  '0x51e6d27fa57373d8d4c256231241053a70cb1d93': {
    token: 'apeSwap_WBNB-BUSD',
    address: '0x51e6d27fa57373d8d4c256231241053a70cb1d93',
    logo: 'https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F4031390532-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MTJ1qyFf3rQZjewhth_%252Favatar-1615657020974.png%3Fgeneration%3D1615657021220196%26alt%3Dmedia',
    handler: 'ApeSwapLP',
    rewardToken: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    primary: false,
  },
  '0x2e707261d086687470b515b320478eb1c88d49bb': {
    token: 'apeSwap_USDT-BUSD',
    address: '0x2e707261d086687470b515b320478eb1c88d49bb',
    logo: 'https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F4031390532-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MTJ1qyFf3rQZjewhth_%252Favatar-1615657020974.png%3Fgeneration%3D1615657021220196%26alt%3Dmedia',
    handler: 'ApeSwapLP',
    rewardToken: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    primary: false,
  },
  '0xc087c78abac4a0e900a327444193dbf9ba69058e': {
    token: 'apeSwap_USDT-USDC',
    address: '0xc087c78abac4a0e900a327444193dbf9ba69058e',
    logo: 'https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F4031390532-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MTJ1qyFf3rQZjewhth_%252Favatar-1615657020974.png%3Fgeneration%3D1615657021220196%26alt%3Dmedia',
    handler: 'ApeSwapLP',
    rewardToken: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    primary: false,
  },
  '0xa0c3ef24414ed9c9b456740128d8e63d016a9e11': {
    token: 'apeSwap_ETH-WBNB',
    address: '0xa0c3ef24414ed9c9b456740128d8e63d016a9e11',
    logo: 'https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F4031390532-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MTJ1qyFf3rQZjewhth_%252Favatar-1615657020974.png%3Fgeneration%3D1615657021220196%26alt%3Dmedia',
    handler: 'ApeSwapLP',
    rewardToken: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    primary: false,
  },
  '0x1e1afe9d9c5f290d8f6996ddb190bd111908a43d': {
    token: 'apeSwap_BTCB-WBNB',
    address: '0x1e1afe9d9c5f290d8f6996ddb190bd111908a43d',
    logo: 'https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F4031390532-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MTJ1qyFf3rQZjewhth_%252Favatar-1615657020974.png%3Fgeneration%3D1615657021220196%26alt%3Dmedia',
    handler: 'ApeSwapLP',
    rewardToken: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    primary: false,
  },
  '0x40d4543887e4170a1a40cd8db15a6b297c812cb1': {
    token: 'apeSwap_ADA-WBNB',
    address: '0x40d4543887e4170a1a40cd8db15a6b297c812cb1',
    logo: 'https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F4031390532-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MTJ1qyFf3rQZjewhth_%252Favatar-1615657020974.png%3Fgeneration%3D1615657021220196%26alt%3Dmedia',
    handler: 'ApeSwapLP',
    rewardToken: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    primary: false,
  },
  '0x61fe209e404166a53cc627d0ae30a65606315da7': {
    token: 'apeSwap_ETH-ADA',
    address: '0x61fe209e404166a53cc627d0ae30a65606315da7',
    logo: 'https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F4031390532-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MTJ1qyFf3rQZjewhth_%252Favatar-1615657020974.png%3Fgeneration%3D1615657021220196%26alt%3Dmedia',
    handler: 'ApeSwapLP',
    rewardToken: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    primary: false,
  },
  '0x29a4a3d77c010ce100a45831bf7e798f0f0b325d': {
    token: 'apeSwap_WBNB-MATIC',
    address: '0x29a4a3d77c010ce100a45831bf7e798f0f0b325d',
    logo: 'https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F4031390532-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MTJ1qyFf3rQZjewhth_%252Favatar-1615657020974.png%3Fgeneration%3D1615657021220196%26alt%3Dmedia',
    handler: 'ApeSwapLP',
    rewardToken: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    primary: false,
  },
  '0x0f12362c017fe5101c7bba09390f1cb729f5b318': {
    token: 'apeSwap_LTC-WBNB',
    address: '0x0f12362c017fe5101c7bba09390f1cb729f5b318',
    logo: 'https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F4031390532-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MTJ1qyFf3rQZjewhth_%252Favatar-1615657020974.png%3Fgeneration%3D1615657021220196%26alt%3Dmedia',
    handler: 'ApeSwapLP',
    rewardToken: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    primary: false,
  },
  '0x21cbb561c5d7d70e9e6cc42136cb22f07552aeef': {
    token: 'apeSwap_DOT-WBNB',
    address: '0x21cbb561c5d7d70e9e6cc42136cb22f07552aeef',
    logo: 'https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F4031390532-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MTJ1qyFf3rQZjewhth_%252Favatar-1615657020974.png%3Fgeneration%3D1615657021220196%26alt%3Dmedia',
    handler: 'ApeSwapLP',
    rewardToken: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    primary: false,
  },
  '0x092ada3818db7fbb8e0a2124ff218c5125c1cce6': {
    token: 'apeSwap_WBNB-LINK',
    address: '0x092ada3818db7fbb8e0a2124ff218c5125c1cce6',
    logo: 'https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F4031390532-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MTJ1qyFf3rQZjewhth_%252Favatar-1615657020974.png%3Fgeneration%3D1615657021220196%26alt%3Dmedia',
    handler: 'ApeSwapLP',
    rewardToken: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    primary: false,
  },
  '0x40afc7cbd0dc2be5860f0035b717d20afb4827b2': {
    token: 'apeSwap_AVAX-WBNB',
    address: '0x40afc7cbd0dc2be5860f0035b717d20afb4827b2',
    logo: 'https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F4031390532-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MTJ1qyFf3rQZjewhth_%252Favatar-1615657020974.png%3Fgeneration%3D1615657021220196%26alt%3Dmedia',
    handler: 'ApeSwapLP',
    rewardToken: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    primary: false,
  },
  '0xfd1ef328a17a8e8eeaf7e4ea1ed8a108e1f2d096': {
    token: 'apeSwap_DOGE-WBNB',
    address: '0xfd1ef328a17a8e8eeaf7e4ea1ed8a108e1f2d096',
    logo: 'https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F4031390532-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MTJ1qyFf3rQZjewhth_%252Favatar-1615657020974.png%3Fgeneration%3D1615657021220196%26alt%3Dmedia',
    handler: 'ApeSwapLP',
    rewardToken: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    primary: false,
  },
  '0x6f0f18f5fcc1466ec41c8106689e10befe68d1c0': {
    token: 'apeSwap_XRP-WBNB',
    address: '0x6f0f18f5fcc1466ec41c8106689e10befe68d1c0',
    logo: 'https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F4031390532-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MTJ1qyFf3rQZjewhth_%252Favatar-1615657020974.png%3Fgeneration%3D1615657021220196%26alt%3Dmedia',
    handler: 'ApeSwapLP',
    rewardToken: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    primary: false,
  },
  '0xcaec8648dbac41b6504a8e408892931796d67d87': {
    token: 'apeSwap_FIL-WBNB',
    address: '0xcaec8648dbac41b6504a8e408892931796d67d87',
    logo: 'https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F4031390532-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MTJ1qyFf3rQZjewhth_%252Favatar-1615657020974.png%3Fgeneration%3D1615657021220196%26alt%3Dmedia',
    handler: 'ApeSwapLP',
    rewardToken: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    primary: false,
  },
  '0xc0afb6078981629f7eae4f2ae93b6dbea9d7a7e9': {
    token: 'apeSwap_SHIB-WBNB',
    address: '0xc0afb6078981629f7eae4f2ae93b6dbea9d7a7e9',
    logo: 'https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F4031390532-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MTJ1qyFf3rQZjewhth_%252Favatar-1615657020974.png%3Fgeneration%3D1615657021220196%26alt%3Dmedia',
    handler: 'ApeSwapLP',
    rewardToken: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    primary: false,
  },
  '0x47a0b7ba18bb80e4888ca2576c2d34be290772a6': {
    token: 'apeSwap_FTM-WBNB',
    address: '0x47a0b7ba18bb80e4888ca2576c2d34be290772a6',
    logo: 'https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F4031390532-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MTJ1qyFf3rQZjewhth_%252Favatar-1615657020974.png%3Fgeneration%3D1615657021220196%26alt%3Dmedia',
    handler: 'ApeSwapLP',
    rewardToken: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    primary: false,
  },
  '0xb75724635a6cda850f08b578f23a568cedba099d': {
    token: 'apeSwap_NEAR-WBNB',
    address: '0xb75724635a6cda850f08b578f23a568cedba099d',
    logo: 'https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F4031390532-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MTJ1qyFf3rQZjewhth_%252Favatar-1615657020974.png%3Fgeneration%3D1615657021220196%26alt%3Dmedia',
    handler: 'ApeSwapLP',
    rewardToken: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    primary: false,
  },
  '0xddd3f9d5bd347c55d18752c0c2075698ec657750': {
    token: 'apeSwap_WBNB-BIFI',
    address: '0xddd3f9d5bd347c55d18752c0c2075698ec657750',
    logo: 'https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F4031390532-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MTJ1qyFf3rQZjewhth_%252Favatar-1615657020974.png%3Fgeneration%3D1615657021220196%26alt%3Dmedia',
    handler: 'ApeSwapLP',
    rewardToken: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    primary: false,
  },
  '0x34878f6a484005aa90e7188a546ea9e52b538f6f': {
    token: 'oBNB',
    address: '0x34878F6a484005AA90E7188a546Ea9E52b538F6f',
    logo: 'https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F4031390532-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MTJ1qyFf3rQZjewhth_%252Favatar-1615657020974.png%3Fgeneration%3D1615657021220196%26alt%3Dmedia',
    handler: 'ApeSwapLending',
    rewardToken: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    primary: false,
  },
  '0xaa1b1e1f251610ae10e4d553b05c662e60992eed': {
    token: 'oETH',
    address: '0xaA1b1E1f251610aE10E4D553b05C662e60992EEd',
    logo: 'https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F4031390532-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MTJ1qyFf3rQZjewhth_%252Favatar-1615657020974.png%3Fgeneration%3D1615657021220196%26alt%3Dmedia',
    handler: 'ApeSwapLending',
    rewardToken: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    primary: false,
  },
  '0x5fce5d208dc325ff602c77497dc18f8eadac8ada': {
    token: 'oBTCB',
    address: '0x5fce5D208DC325ff602c77497dC18F8EAdac8ADA',
    logo: 'https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F4031390532-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MTJ1qyFf3rQZjewhth_%252Favatar-1615657020974.png%3Fgeneration%3D1615657021220196%26alt%3Dmedia',
    handler: 'ApeSwapLending',
    rewardToken: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    primary: false,
  },
  '0x0096b6b49d13b347033438c4a699df3afd9d2f96': {
    token: 'oBUSD',
    address: '0x0096B6B49D13b347033438c4a699df3Afd9d2f96',
    logo: 'https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F4031390532-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MTJ1qyFf3rQZjewhth_%252Favatar-1615657020974.png%3Fgeneration%3D1615657021220196%26alt%3Dmedia',
    handler: 'ApeSwapLending',
    rewardToken: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    primary: false,
  },
  '0xdbfd516d42743ca3f1c555311f7846095d85f6fd': {
    token: 'oUSDT',
    address: '0xdBFd516D42743CA3f1C555311F7846095D85F6Fd',
    logo: 'https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F4031390532-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MTJ1qyFf3rQZjewhth_%252Favatar-1615657020974.png%3Fgeneration%3D1615657021220196%26alt%3Dmedia',
    handler: 'ApeSwapLending',
    rewardToken: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    primary: false,
  },
  '0x91b66a9ef4f4cad7f8af942855c37dd53520f151': {
    token: 'oUSDC',
    address: '0x91B66a9Ef4f4CAD7F8AF942855C37Dd53520f151',
    logo: 'https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F4031390532-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MTJ1qyFf3rQZjewhth_%252Favatar-1615657020974.png%3Fgeneration%3D1615657021220196%26alt%3Dmedia',
    handler: 'ApeSwapLending',
    rewardToken: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    primary: false,
  },
  '0x3353f5bcfd7e4b146f2ed8f1e8d875733cd754a7': {
    token: 'oCAKE',
    address: '0x3353f5bcfD7E4b146F2eD8F1e8D875733Cd754a7',
    logo: 'https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F4031390532-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MTJ1qyFf3rQZjewhth_%252Favatar-1615657020974.png%3Fgeneration%3D1615657021220196%26alt%3Dmedia',
    handler: 'ApeSwapLending',
    rewardToken: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    primary: false,
  },
  '0x92d106c39ac068eb113b3ecb3273b23cd19e6e26': {
    token: 'oDOT',
    address: '0x92D106c39aC068EB113B3Ecb3273B23Cd19e6e26',
    logo: 'https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F4031390532-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MTJ1qyFf3rQZjewhth_%252Favatar-1615657020974.png%3Fgeneration%3D1615657021220196%26alt%3Dmedia',
    handler: 'ApeSwapLending',
    rewardToken: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    primary: false,
  },
  '0xf319947ece3823b790dd87b0a509396fe325745a': {
    token: 'MAIN_LP_BUSD',
    address: '0xF319947eCe3823b790dd87b0A509396fE325745a',
    logo: 'https://avatars.githubusercontent.com/u/90596613?s=64&v=64',
    handler: 'Wombat',
    rewardToken: '0xAD6742A35fB341A9Cc6ad674738Dd8da98b94Fb1',
    primary: false,
  },
  '0x9d0a463d5dcb82008e86bf506eb048708a15dd84': {
    token: 'MAIN_LP_DAI',
    address: '0x9D0a463D5dcB82008e86bF506eb048708a15dd84',
    logo: 'https://avatars.githubusercontent.com/u/90596613?s=64&v=64',
    handler: 'Wombat',
    rewardToken: '0xAD6742A35fB341A9Cc6ad674738Dd8da98b94Fb1',
    primary: false,
  },
  '0xb43ee2863370a56d3b7743edcd8407259100b8e2': {
    token: 'MAIN_LP_USDC',
    address: '0xb43Ee2863370a56D3b7743EDCd8407259100b8e2',
    logo: 'https://avatars.githubusercontent.com/u/90596613?s=64&v=64',
    handler: 'Wombat',
    rewardToken: '0xAD6742A35fB341A9Cc6ad674738Dd8da98b94Fb1',
    primary: false,
  },
  '0x4f95fe57bea74b7f642cf9c097311959b9b988f7': {
    token: 'MAIN_LP_USDT',
    address: '0x4F95fE57BEA74b7F642cF9c097311959B9b988F7',
    logo: 'https://avatars.githubusercontent.com/u/90596613?s=64&v=64',
    handler: 'Wombat',
    rewardToken: '0xAD6742A35fB341A9Cc6ad674738Dd8da98b94Fb1',
    primary: false,
  },
  '0xa649be04619a8f3b3475498e1ac15c90c9661c1a': {
    token: 'SIDE_LP_BUSD',
    address: '0xA649Be04619a8F3B3475498E1ac15C90C9661C1A',
    logo: 'https://avatars.githubusercontent.com/u/90596613?s=64&v=64',
    handler: 'Wombat',
    rewardToken: '0xAD6742A35fB341A9Cc6ad674738Dd8da98b94Fb1',
    primary: false,
  },
  '0xcf434949c242c2d32514ba971947bd3700efb015': {
    token: 'INNOVATION_LP_BUSD',
    address: '0xcF434949c242C2D32514BA971947bD3700EFB015',
    logo: 'https://avatars.githubusercontent.com/u/90596613?s=64&v=64',
    handler: 'Wombat',
    rewardToken: '0xAD6742A35fB341A9Cc6ad674738Dd8da98b94Fb1',
    primary: false,
  },
  '0x3c8e744f6c4ed2c9d82e33d69ddcc5961aa05367': {
    token: 'INNOVATION_LP_TUSD',
    address: '0x3C8e744f6c4Ed2c9D82e33D69DDcC5961Aa05367',
    logo: 'https://avatars.githubusercontent.com/u/90596613?s=64&v=64',
    handler: 'Wombat',
    rewardToken: '0xAD6742A35fB341A9Cc6ad674738Dd8da98b94Fb1',
    primary: false,
  },
  '0x0321d1d769cc1e81ba21a157992b635363740f86': {
    token: 'BNBX_LP_BNB',
    address: '0x0321D1D769cc1e81Ba21a157992b635363740f86',
    logo: 'https://avatars.githubusercontent.com/u/90596613?s=64&v=64',
    handler: 'Wombat',
    rewardToken: '0xAD6742A35fB341A9Cc6ad674738Dd8da98b94Fb1',
    primary: false,
  },
  '0x4d41e9ede1783b85756d3f5bd136c50c4fb8e67e': {
    token: 'frxETH_LP_ETH',
    address: '0x4d41E9EDe1783b85756D3f5Bd136C50c4Fb8E67E',
    logo: 'https://avatars.githubusercontent.com/u/90596613?s=64&v=64',
    handler: 'Wombat',
    rewardToken: '0xAD6742A35fB341A9Cc6ad674738Dd8da98b94Fb1',
    primary: false,
  },
  '0x7ff1aec17ea060bbcb7df6b8723f6ea7fc905e8f': {
    token: 'iUSD_LP_BUSD',
    address: '0x7Ff1AEc17ea060BBcB7dF6b8723F6Ea7fc905E8F',
    logo: 'https://avatars.githubusercontent.com/u/90596613?s=64&v=64',
    handler: 'Wombat',
    rewardToken: '0xAD6742A35fB341A9Cc6ad674738Dd8da98b94Fb1',
    primary: false,
  },
  '0x791b2424df9865994ad570425278902e2b5d7946': {
    token: 'axlUSDC_LP_BUSD',
    address: '0x791b2424df9865994Ad570425278902E2B5D7946',
    logo: 'https://avatars.githubusercontent.com/u/90596613?s=64&v=64',
    handler: 'Wombat',
    rewardToken: '0xAD6742A35fB341A9Cc6ad674738Dd8da98b94Fb1',
    primary: false,
  },
  '0x9f9cea30d242d7f5527fa900f9fb0f77a98fda82': {
    token: 'USDD_LP_USDC',
    address: '0x9F9CeA30d242d7f5527Fa900f9fb0F77A98FdA82',
    logo: 'https://avatars.githubusercontent.com/u/90596613?s=64&v=64',
    handler: 'Wombat',
    rewardToken: '0xAD6742A35fB341A9Cc6ad674738Dd8da98b94Fb1',
    primary: false,
  },
  '0x6c7b407411b3db90dfa25da4aa66605438d378ce': {
    token: 'stkBNB_LP_WBNB',
    address: '0x6C7B407411b3DB90DfA25DA4aA66605438D378CE',
    logo: 'https://avatars.githubusercontent.com/u/90596613?s=64&v=64',
    handler: 'Wombat',
    rewardToken: '0xAD6742A35fB341A9Cc6ad674738Dd8da98b94Fb1',
    primary: false,
  },
  '0x6b98d2b6ed0131338c7945db8588da43323d1b8c': {
    token: 'BOB_LP_USDC',
    address: '0x6b98d2B6ed0131338C7945Db8588DA43323d1b8C',
    logo: 'https://avatars.githubusercontent.com/u/90596613?s=64&v=64',
    handler: 'Wombat',
    rewardToken: '0xAD6742A35fB341A9Cc6ad674738Dd8da98b94Fb1',
    primary: false,
  },
  '0x8df8b50b73849f0433ee3314bd956e624e67b3ce': {
    token: 'OVERNIGHT_LP_USDC',
    address: '0x8Df8b50B73849f0433EE3314BD956e624e67b3ce',
    logo: 'https://avatars.githubusercontent.com/u/90596613?s=64&v=64',
    handler: 'Wombat',
    rewardToken: '0xAD6742A35fB341A9Cc6ad674738Dd8da98b94Fb1',
    primary: false,
  },
  '0xa45c0abeef67c363364e0e73832df9986aba3800': {
    token: 'MIM_LP_MIM',
    address: '0xA45C0ABeef67C363364E0e73832df9986aBa3800',
    logo: 'https://avatars.githubusercontent.com/u/90596613?s=64&v=64',
    handler: 'Wombat',
    rewardToken: '0xAD6742A35fB341A9Cc6ad674738Dd8da98b94Fb1',
    primary: false,
  },
  '0x61e338828abbdd7bddad918bb3cd1f09d4345752': {
    token: 'MIM_LP_USDT',
    address: '0x61e338828ABBdD7bddAd918BB3Cd1F09d4345752',
    logo: 'https://avatars.githubusercontent.com/u/90596613?s=64&v=64',
    handler: 'Wombat',
    rewardToken: '0xAD6742A35fB341A9Cc6ad674738Dd8da98b94Fb1',
    primary: false,
  },
  '0x0e99fbfd04c255124a168c6ae68cce3c7dcc5760': {
    token: 'ankrBNB_LP_BNB',
    address: '0x0e99fBfD04c255124A168c6Ae68CcE3c7dCC5760',
    logo: 'https://avatars.githubusercontent.com/u/90596613?s=64&v=64',
    handler: 'Wombat',
    rewardToken: '0xAD6742A35fB341A9Cc6ad674738Dd8da98b94Fb1',
    primary: false,
  },
  '0x517493d1fb90ab0a3ce3a5084065b706e33e0fea': {
    token: 'mooValasUSDC',
    address: '0x517493d1Fb90aB0a3cE3a5084065B706e33e0fEA',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7311.png',
    handler: 'Beefy',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: false,
  },
  '0x6bcd9493dfa06d07003ab6920dace6d4f854e162': {
    token: 'mooValasBTCB',
    address: '0x6bCD9493dFA06D07003aB6920DacE6D4F854E162',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7311.png',
    handler: 'Beefy',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: false,
  },
  '0x725e14c3106ebf4778e01ea974e492f909029ae8': {
    token: 'mooValasETH',
    address: '0x725E14C3106EBf4778e01eA974e492f909029aE8',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7311.png',
    handler: 'Beefy',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: false,
  },
  '0xb78b6a0137ad8745784d3b23c16abea8f527ff54': {
    token: 'mooValasBUSD',
    address: '0xB78b6A0137ad8745784D3B23c16abeA8F527ff54',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7311.png',
    handler: 'Beefy',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: false,
  },
  '0x5ced4dc963f607c82d2c2f22c2ab0a975adc4bb9': {
    token: 'mooValasUSDT',
    address: '0x5cED4Dc963F607C82D2C2F22C2AB0a975adc4Bb9',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7311.png',
    handler: 'Beefy',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: false,
  },
  '0xf66e8edf8a86b2b405ff23e73b72dac01070c8b8': {
    token: 'mooValasDAI',
    address: '0xF66e8edf8A86b2b405fF23e73B72DAC01070c8B8',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7311.png',
    handler: 'Beefy',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: false,
  },
  '0x9749b2d46f0caa661bd84d26264811da968bc4fc': {
    token: 'mooValasTUSD',
    address: '0x9749b2D46f0caa661bD84D26264811DA968bC4Fc',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7311.png',
    handler: 'Beefy',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: false,
  },
  '0x6be4741ab0ad233e4315a10bc783a7b923386b71': {
    token: 'mooVenusBNB',
    address: '0x6BE4741AB0aD233e4315a10bc783a7B923386b71',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7311.png',
    handler: 'Beefy',
    rewardToken: '0x0000000000000000000000000000000000000000',
    primary: false,
  },
}

type TokenRegistry = typeof tokenRegistry

type KeyOfTokenRegistry = keyof TokenRegistry

// export const getTokenMetadata = async (_address: string) => {
//   const address = _address.toLowerCase() as KeyOfTokenRegistry

//   const token = tokenRegistry[address]

//   if (token) {
//     const tokenData: any = { ...token }

//     if (tokenData.handler === 'Base') {
//       tokenData.apy = '-'
//       tokenData.handler = '-'
//     } else if (tokenData.handler === 'Venus') {
//       const res = await axios.get('https://api.venus.io/api/governance/venus')
//       const marketData = res.data.data.markets
//       const vData = marketData.find(
//         (data: any) => data.address.toLowerCase() === tokenData.address.toLowerCase(),
//       )
//       if (vData) {
//         tokenData.apy = `${+vData.supplyApy + +vData.supplyVenusApy}`
//       } else {
//         tokenData.apy = '-'
//       }
//     } else if (tokenData.handler === 'Liqee') {
//       const res = await axios.get('https://app.liqee.io/pos/markets?network=bsc')
//       const marketData = res.data.supplyMarkets
//       const lData = marketData.find(
//         (data: any) => data.address.toLowerCase() === tokenData.address.toLowerCase(),
//       )
//       if (lData) {
//         const supplyAPY = +web3.utils.fromWei(lData.supplyAPY, 'ether') * 100

//         tokenData.apy = supplyAPY
//       } else {
//         tokenData.apy = '-'
//       }
//     } else if (tokenData.handler === 'Alpaca') {
//       const res = await axios.get(
//         'https://alpaca-static-api.alpacafinance.org/bsc/v1/landing/summary.json',
//       )
//       const marketData = res.data.data.lendingPools
//       const alpData = marketData.find(
//         (data: any) => data.ibToken.address.toLowerCase() === tokenData.address.toLowerCase(),
//       )
//       if (alpData) {
//         tokenData.apy = alpData.totalApy
//       } else {
//         tokenData.apy = '-'
//       }
//     } else if (tokenData.handler === 'BiSwapLP') {
//       tokenData.apy = '-'
//     } else if (tokenData.handler === 'ApeSwapLP') {
//       tokenData.apy = '-'
//     } else if (tokenData.handler === 'ApeSwapLending') {
//       tokenData.apy = '-'
//     } else if (tokenData.handler === 'Wombat') {
//       // const res = await axios.post(
//       //   'https://api.thegraph.com/subgraphs/name/wombat-exchange/wombat-apr',
//       //   {
//       //     query:
//       //       '{\n  assets {\n    id\n    symbol\n    womBaseAPR\n    medianBoostedAPR\n    totalBonusTokenAPR\n  }\n}',
//       //   },
//       // )
//       // const data = res.data.data.assets
//       // const token = data.find(
//       //   (item: any) => item.id.toLowerCase() === tokenData.address.toLowerCase(),
//       // )
//       // if (token) {
//       //   tokenData.apy = (+token.womBaseAPR * 100).toFixed(2)
//       // } else {
//       //   tokenData.apy = '-'
//       // }
//       tokenData.apy = '-'
//     } else if (tokenData.handler === 'Beefy') {
//       const vaultRes = await axios.get('https://api.beefy.finance/vaults')
//       const vaultData = vaultRes.data

//       const tokenKeyData = vaultData.find(
//         (item: any) => item.earnedTokenAddress.toLowerCase() === tokenData.address.toLowerCase(),
//       )

//       if (tokenKeyData) {
//         const tokenKey = tokenKeyData.id
//         const apyRes = await axios.get('https://api.beefy.finance/apy/breakdown?_=1685429160000')
//         const apyData = apyRes.data

//         const tokenApyData = apyData[tokenKey]

//         if (tokenApyData) {
//           tokenData.apy = (tokenApyData.totalApy * 100).toFixed(2)
//         } else {
//           tokenData.apy = '-'
//         }
//       } else {
//         tokenData.apy = '-'
//       }
//     }

//     return tokenData
//   } else {
//     throw new Error('token not found in registery')
//   }
// }

export const getTokenMetadataStatic = (_address: string) => {
  const address = _address.toLowerCase() as KeyOfTokenRegistry

  const token = tokenRegistry[address]
  if (token) {
    const tokenData: any = { ...token }
    return tokenData
  } else {
    throw new Error('token not found in registery')
  }
}
