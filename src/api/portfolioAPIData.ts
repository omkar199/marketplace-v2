import { calculateReturnFromGraphData } from '@/helpers/calculateReturn'

import { fetchGetRevalidate } from '@/utils/fetcher'

import type {
  Portfolio,
  PortfolioGraph,
  PortfolioDayGraphMetadata,
  PortfolioGraphTVL,
  PortfolioTokenMetadata,
  TopTVLPortfolio,
  TopPerformancePortfolio,
} from '@/types/home'

export const fetchNewPortfolioAndCount = async (page: number) => {
  try {
    const newPortfolioList: PortfolioGraphTVL[] = []

    // new portfolio
    const res = await fetchGetRevalidate(
      `https://defivas.org/api/v2/portfolio/public/all?page=${page}`,
      20,
    )
    const portfolioList: Portfolio[] = res.data.portfolioList

    // portfolio count
    const portfolioCount: number = res.data.portfolioCount

    // portfolio day graph data
    const graphRequests = []
    for (const { indexSwap } of portfolioList) {
      graphRequests.push(
        fetchGetRevalidate(`https://defivas.org/api/v2/graph/portfolio/day/${indexSwap}`, 30),
      )
    }
    const graphResult = await Promise.all(graphRequests)
    for (let i = 0; i < graphResult.length; i++) {
      const portfolio = portfolioList[i]
      const dayGraphResult: PortfolioGraph[] = graphResult[i].data
      const dayReturn = calculateReturnFromGraphData<PortfolioGraph>(dayGraphResult, 'indexRate')
      const portfolioGraphData: PortfolioDayGraphMetadata = {
        dayGraph: dayGraphResult,
        dayReturn,
      }
      newPortfolioList.push({
        ...portfolio,
        ...portfolioGraphData,
        totalValueLiquidity: '',
        tokens: [],
      })
    }

    // portfolio tvl
    const tvlRequests = []
    for (const { indexSwap } of newPortfolioList) {
      tvlRequests.push(
        fetchGetRevalidate(`https://defivas.org/api/v2/portfolioMetadata/tvl/${indexSwap}`, 20),
      )
    }
    const tvlResults = await Promise.all(tvlRequests)
    for (let i = 0; i < tvlResults.length; i++) {
      const portfolio = newPortfolioList[i]
      const totalValueLiquidity: string = tvlResults[i].data.totalValueLiquidity
      portfolio.totalValueLiquidity = totalValueLiquidity
    }

    // portfolio token metadata
    const tokenRequests = []
    for (const { indexSwap } of newPortfolioList) {
      tokenRequests.push(
        fetchGetRevalidate(`https://defivas.org/api/v2/portfolioMetadata/token/${indexSwap}`, 20),
      )
    }
    const tokenResults = await Promise.all(tokenRequests)
    for (let i = 0; i < tokenResults.length; i++) {
      const portfolio = newPortfolioList[i]
      const tokenData: PortfolioTokenMetadata[] = tokenResults[i].data
      portfolio.tokens = tokenData
    }

    return {
      newPortfolioList,
      portfolioCount,
    }
  } catch (e) {
    console.log('failed fetchPublicPortfolio')
    console.log(e)
  }
}

export const fetchTopTVLPortfolioAndCount = async () => {
  try {
    const topTVLPortfolioList: PortfolioGraphTVL[] = []

    // top tvl portfolio
    const res = await fetchGetRevalidate('https://defivas.org/api/v2/portfolio/public/topTVL', 20)
    const topTVLPortfolio: TopTVLPortfolio[] = res.data

    // portfolio day graph data
    const graphRequests = []
    for (const { indexSwap } of topTVLPortfolio) {
      graphRequests.push(
        fetchGetRevalidate(`https://defivas.org/api/v2/graph/portfolio/day/${indexSwap}`, 30),
      )
    }
    const graphResult = await Promise.all(graphRequests)
    for (let i = 0; i < graphResult.length; i++) {
      const portfolio = topTVLPortfolio[i]
      const dayGraphResult: PortfolioGraph[] = graphResult[i].data
      const dayReturn = calculateReturnFromGraphData<PortfolioGraph>(dayGraphResult, 'indexRate')
      const portfolioGraphData: PortfolioDayGraphMetadata = {
        dayGraph: dayGraphResult,
        dayReturn,
      }
      topTVLPortfolioList.push({ ...portfolio, ...portfolioGraphData, tokens: [] })
    }

    // portfolio token metadata
    const tokenRequests = []
    for (const { indexSwap } of topTVLPortfolioList) {
      tokenRequests.push(
        fetchGetRevalidate(`https://defivas.org/api/v2/portfolioMetadata/token/${indexSwap}`, 20),
      )
    }
    const tokenResults = await Promise.all(tokenRequests)
    for (let i = 0; i < tokenResults.length; i++) {
      const portfolio = topTVLPortfolioList[i]
      const tokenData: PortfolioTokenMetadata[] = tokenResults[i].data
      portfolio.tokens = tokenData
    }

    return { topTVLPortfolioList, portfolioCount: topTVLPortfolioList.length }
  } catch (e) {
    console.log('failed fetchTopTVLPortfolioAndCount')
    console.log(e)
  }
}

export const fetchTopPerformancePortfolioAndCount = async () => {
  try {
    const topPerformancePortfolioList: PortfolioGraphTVL[] = []

    // top performance portfolio
    const res = await fetchGetRevalidate(
      'https://defivas.org/api/v2/portfolio/public/topPerformance',
      20,
    )
    const topPerformancePortfolio: TopPerformancePortfolio[] = res.data

    // portfolio tvl
    const tvlRequests = []
    for (const { indexSwap } of topPerformancePortfolio) {
      tvlRequests.push(
        fetchGetRevalidate(`https://defivas.org/api/v2/portfolioMetadata/tvl/${indexSwap}`, 20),
      )
    }
    const tvlResults = await Promise.all(tvlRequests)
    for (let i = 0; i < tvlResults.length; i++) {
      const { graphData, performance, ...portfolio } = topPerformancePortfolio[i]
      const totalValueLiquidity: string = tvlResults[i].data.totalValueLiquidity
      const dayReturn = calculateReturnFromGraphData<PortfolioGraph>(graphData, 'indexRate')
      const pushPortfolio: PortfolioGraphTVL = {
        ...portfolio,
        dayGraph: graphData,
        dayReturn,
        totalValueLiquidity,
        tokens: [],
      }
      topPerformancePortfolioList.push(pushPortfolio)
    }

    // portfolio token metadata
    const tokenRequests = []
    for (const { indexSwap } of topPerformancePortfolioList) {
      tokenRequests.push(
        fetchGetRevalidate(`https://defivas.org/api/v2/portfolioMetadata/token/${indexSwap}`, 20),
      )
    }
    const tokenResults = await Promise.all(tokenRequests)
    for (let i = 0; i < tokenResults.length; i++) {
      const portfolio = topPerformancePortfolioList[i]
      const tokenData: PortfolioTokenMetadata[] = tokenResults[i].data
      portfolio.tokens = tokenData
    }

    return { topPerformancePortfolioList, portfolioCount: topPerformancePortfolioList.length }
  } catch (e) {
    console.log('failed fetchTopPerformancePortfolioAndCount')
    console.log(e)
  }
}
