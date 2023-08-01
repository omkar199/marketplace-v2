import '@/styles/home.css'

import PortfolioContainer from '@/components/PortfolioContainer/PortfolioContainer'
import PortfolioTableHeader from '@/components/PortfolioTableHeader/PortfolioTableHeader'
import PortfolioTable from '@/components/PortfolioTable/PortfolioTable'

import { fetchTopPerformancePortfolioAndCount } from '@/api/portfolioAPIData'

export default async function topPerformance() {
  const topPerfPortfolioResult = await fetchTopPerformancePortfolioAndCount()
  if (!topPerfPortfolioResult) {
    return
  }

  return (
    <main className='home__main'>
      <PortfolioContainer
        portfolioListType='Top Performance'
        portfolioList={topPerfPortfolioResult.topPerformancePortfolioList}
        portfolioCount={topPerfPortfolioResult.portfolioCount}
      />
      <PortfolioTableHeader />
      <PortfolioTable
        portfolioListType='Top Performance'
        portfolioList={topPerfPortfolioResult.topPerformancePortfolioList}
        portfolioCount={topPerfPortfolioResult.portfolioCount}
      />
    </main>
  )
}
