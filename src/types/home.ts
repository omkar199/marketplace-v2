export interface Portfolio {
  _id: string
  indexId: string
  time: string
  name: string
  symbol: string
  indexSwap: string
  rebalancing: string
  offChainRebalancing: string
  metaAggregator: string
  owner: string
  exchangeHandler: string
  assetManagerConfig: string
  feeModule: string
  offChainIndexSwap: string
  vaultAddress: string
  gnosisModule: string
  accessController: string
  isConfirmed: boolean
  public: boolean
  whitelistedUsers: string[]
  whitelistAccessGrantedUsers: string[]
  assetManagerAccessGrantedUsers: string[]
  permittedTokens: string[]
  maxInvestmentAmount: string
  minInvestmentAmount: string
  managementFee: string
  performanceFee: string
  entryFee: string
  exitFee: string
  assetManagerTreasury: string
  createdAt: string
  updatedAt: string
  creatorName: string
  strategy: string
  logo: string
}

export interface PortfolioGraph {
  _id: string
  index: string
  totalValueLiquidity: string
  indexRate: string
  bnbUSDPrice: string
  createdAt: string
}

export interface PortfolioDayGraphMetadata {
  dayGraph: PortfolioGraph[]
  dayReturn: number
}

export interface PortfolioMetadata {
  indexSwap: string
  indexRate: string
  tokenHolders: string
  portfolioHasInvestment: boolean
  totalValueLiquidity: string
  primaryBalance: string
  nonPrimaryBalance: string
  tokenAddresses: string[]
  tokenWeightInfo: string[]
  tokenAmount: string[]
  individualTokenValueInUSD: string[]
  tokenDecimal: string[]
}

export interface PortfolioTokenMetadata {
  symbol: string
  address: string
  allocation: string
  logo: string
  handler: string
  APY: string
  rewardToken: string
  primary: boolean
  amount: string
  USDValue: string
  decimal: string
}

export type PortfolioGraphTVL = Portfolio &
  PortfolioDayGraphMetadata & { totalValueLiquidity: string; tokens: PortfolioTokenMetadata[] }

export type TopTVLPortfolio = Portfolio & { totalValueLiquidity: string }

export type TopPerformancePortfolio = Portfolio & {
  graphData: PortfolioGraph[]
  performance: {
    latestPortfolioRate: number
    oldPortfolioRate: number
    value: number
  }
}

export type SinglePortfolio = Portfolio &
  PortfolioDayGraphMetadata &
  PortfolioMetadata & {
    tokens: PortfolioTokenMetadata[]
  }

export type PortfolioListType = 'Featured' | 'New' | 'Top TVL' | 'Top Performance'

export type GraphType = 'Day' | 'Week' | 'All Time'
