import '@/styles/home.css'

import PortfolioContainer from '@/components/PortfolioContainer/PortfolioContainer'
import PortfolioTableHeader from '@/components/PortfolioTableHeader/PortfolioTableHeader'
import PortfolioTable from '@/components/PortfolioTable/PortfolioTable'

import { fetchNewPortfolioAndCount } from '@/api/portfolioAPIData'

export default async function Home() {
  const newPortfolioResult = await fetchNewPortfolioAndCount(1)
  if (!newPortfolioResult) {
    return
  }

  return (
    <main className='home__main'>
      <PortfolioContainer
        portfolioListType='New'
        portfolioList={newPortfolioResult.newPortfolioList}
        portfolioCount={newPortfolioResult.portfolioCount}
      />
      <PortfolioTableHeader />
      <PortfolioTable
        portfolioListType='New'
        portfolioList={newPortfolioResult.newPortfolioList}
        portfolioCount={newPortfolioResult.portfolioCount}
      />
    </main>
  )
}
