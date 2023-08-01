import '@/styles/home.css'

import PortfolioContainer from '@/components/PortfolioContainer/PortfolioContainer'
import PortfolioTableHeader from '@/components/PortfolioTableHeader/PortfolioTableHeader'
import PortfolioTable from '@/components/PortfolioTable/PortfolioTable'

import { fetchTopTVLPortfolioAndCount } from '@/api/portfolioAPIData'

export default async function TopTVL() {
  const topTVLPortfolioResult = await fetchTopTVLPortfolioAndCount()
  if (!topTVLPortfolioResult) {
    return
  }

  return (
    <main className='home__main'>
      <PortfolioContainer
        portfolioListType='Top TVL'
        portfolioList={topTVLPortfolioResult.topTVLPortfolioList}
        portfolioCount={topTVLPortfolioResult.portfolioCount}
      />
      <PortfolioTableHeader />
      <PortfolioTable
        portfolioListType='Top TVL'
        portfolioList={topTVLPortfolioResult.topTVLPortfolioList}
        portfolioCount={topTVLPortfolioResult.portfolioCount}
      />
    </main>
  )
}
