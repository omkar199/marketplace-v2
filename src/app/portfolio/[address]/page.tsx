import { calculateReturnFromGraphData } from '@/helpers/calculateReturn'

import { fetchGetRevalidate } from '@/utils/fetcher'

import {
  Portfolio,
  PortfolioGraph,
  PortfolioMetadata,
  PortfolioTokenMetadata,
  SinglePortfolio,
} from '@/types/home'
import SinglePortfolioContainer from '@/components/SinglePortfolioContainer/SinglePortfolioContainer'

interface Props {
  params: { address: string }
}

export default async function SinglePortfolio({ params }: Props) {
  const { address } = params

  const [
    portfolioResponse,
    graphResponse,
    portfolioMetadataResponse,
    portfolioTokenMetadataResponse,
  ] = await Promise.all([
    fetchGetRevalidate(`https://defivas.org/api/v2/portfolio/${address}`, 20),
    fetchGetRevalidate(`https://defivas.org/api/v2/graph/portfolio/day/${address}`, 30),
    fetchGetRevalidate(`https://defivas.org/api/v2/portfolioMetadata/${address}`, 20),
    fetchGetRevalidate(`https://defivas.org/api/v2/portfolioMetadata/token/${address}`, 20),
  ])

  const portfolio: Portfolio = portfolioResponse.data

  const dayGraphData: PortfolioGraph[] = graphResponse.data
  const dayReturn = calculateReturnFromGraphData<PortfolioGraph>(dayGraphData, 'indexRate')

  const portfolioMetadata: PortfolioMetadata = portfolioMetadataResponse.data

  const portfolioTokenMetadata: PortfolioTokenMetadata[] = portfolioTokenMetadataResponse.data

  const portfolioData: SinglePortfolio = {
    ...portfolio,
    dayGraph: dayGraphData,
    dayReturn,
    ...portfolioMetadata,
    tokens: portfolioTokenMetadata,
  }

  return (
    <main>
      <SinglePortfolioContainer data={portfolioData} />
    </main>
  )
}
