'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import {
  PortfolioCardContainer,
  PortfolioContainerButton,
  PortfolioContainerButtonBar,
  PortfolioContainerHeader,
  PortfolioContainerHeaderTitle,
} from './PortfolioContainer.style'

import PortfolioCard from '@/components/PortfolioCard/PortfolioCard'

import type { PortfolioListType, PortfolioGraphTVL } from '@/types/home'

interface Props {
  portfolioListType: PortfolioListType
  portfolioList: PortfolioGraphTVL[]
  portfolioCount: number
}

export default function PortfolioContainer({ portfolioListType, portfolioList }: Props) {
  const pathname = usePathname()

  return (
    <div>
      <PortfolioContainerHeader>
        <PortfolioContainerHeaderTitle>{portfolioListType} Vaults</PortfolioContainerHeaderTitle>
        <PortfolioContainerButtonBar>
          {/* <PortfolioContainerButton isActive={pathname === '/featured'} href='/featured'>
            Featured
          </PortfolioContainerButton> */}
          <PortfolioContainerButton isActive={pathname === '/'}>
            <Link href='/'>New</Link>
          </PortfolioContainerButton>
          <PortfolioContainerButton isActive={pathname === '/topTVL'}>
            <Link href='/topTVL'>Top TVL</Link>
          </PortfolioContainerButton>
          <PortfolioContainerButton isActive={pathname === '/topPerformance'}>
            <Link href='/topPerformance'>Top Performance</Link>
          </PortfolioContainerButton>
        </PortfolioContainerButtonBar>
      </PortfolioContainerHeader>
      <PortfolioCardContainer>
        {portfolioList.map((portfolio) => (
          <PortfolioCard key={portfolio.indexSwap} data={portfolio} />
        ))}
      </PortfolioCardContainer>
    </div>
  )
}
