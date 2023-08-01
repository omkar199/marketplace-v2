'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import {
  PortfolioCardContainer,
  PortfolioCardDivideBar,
  PortfolioCardGraphButtonContainer,
  PortfolioCardButton,
  PortfolioCardHeaderLogoContainer,
  PortfolioCardHeader,
  PortfolioCardGraphContainer,
  PortfolioCardGraphReturn,
  PortfolioCardGraphReturnContainer,
  PortfolioCardGraphReturnHead,
  PortfolioCardHeaderCreator,
  PortfolioCardHeaderMetadata,
  PortfolioCardHeaderTitle,
  PortfolioCardToken,
  PortfolioCardTokenContainer,
  PortfolioCardHeaderLogo,
  PortfolioCardTokenMain,
  PortfolioCardGraphSelect,
  PortfolioCardGraphOption,
  PortfolioCardGraphReturnRed,
  PortfolioCardGraphReturnGreen,
} from './PortfolioCard.style'

import Graph from '@/components/Graph/Graph'

import { calculateReturnFromGraphData } from '@/helpers/calculateReturn'

import { fetchGetRevalidate } from '@/utils/fetcher'

import type { PortfolioGraphTVL, GraphType, PortfolioGraph } from '@/types/home'
import Link from 'next/link'
import InvestmentModal from '@/modal/investment/InvestmentModal'
import { useGlobleContext } from '@/store/globle'

import VelvetLogo from '@/assets/brand/VelvetLogo.svg'

interface Props {
  data: PortfolioGraphTVL
}

export default function PortfolioCard({ data }: Props) {
  const [graphType, setGraphType] = useState<GraphType>('Day')
  const [weekGraphData, setWeekGraphData] = useState<PortfolioGraph[]>([])
  const [weekGraphReturn, setWeekGraphReturn] = useState(0)

  // const [isInvestmentModalVisible, setIsInvestmentModalVisible] = useState(false)
  const { isInvestmentModalVisible, setIsInvestmentModalVisible, setInvesmentDetails } =
    useGlobleContext()
  useEffect(() => {
    async function helper() {
      if (graphType === 'Week') {
        const res = await fetchGetRevalidate(
          `https://defivas.org/api/v2/graph/portfolio/week/${data.indexSwap}`,
          30,
        )
        const weekGraphData: PortfolioGraph[] = res.data

        const weekReturn = calculateReturnFromGraphData<PortfolioGraph>(weekGraphData, 'indexRate')

        setWeekGraphData(weekGraphData)
        setWeekGraphReturn(weekReturn)
      }
    }
    helper()
  }, [graphType, data.indexSwap])

  return (
    <PortfolioCardContainer>
      <PortfolioCardHeader>
        <PortfolioCardHeaderLogoContainer>
          {data.logo ? (
            <PortfolioCardHeaderLogo src={data.logo} alt='portfolio_logo' />
          ) : (
            <Image src={VelvetLogo} alt='velvet_logo' style={{ width: '100%', height: '100%' }} />
          )}
        </PortfolioCardHeaderLogoContainer>
        <PortfolioCardHeaderMetadata>
          <PortfolioCardHeaderTitle>{data.name}</PortfolioCardHeaderTitle>
          <PortfolioCardHeaderCreator>By {data.creatorName}</PortfolioCardHeaderCreator>
        </PortfolioCardHeaderMetadata>
      </PortfolioCardHeader>
      <PortfolioCardTokenContainer>
        {data?.tokens?.map((token) => (
          <PortfolioCardTokenMain key={token.address}>
            <PortfolioCardToken src={token.logo} alt='token_logo' />
          </PortfolioCardTokenMain>
        ))}
      </PortfolioCardTokenContainer>
      <PortfolioCardDivideBar />
      <PortfolioCardGraphButtonContainer>
        <PortfolioCardGraphReturnContainer>
          <PortfolioCardGraphReturnHead>Return</PortfolioCardGraphReturnHead>
          <PortfolioCardGraphReturn>
            {data.dayReturn >= 0 ? (
              <PortfolioCardGraphReturnGreen>
                {graphType === 'Day' ? data.dayReturn.toFixed(2) : weekGraphReturn.toFixed(2)}%
              </PortfolioCardGraphReturnGreen>
            ) : (
              <PortfolioCardGraphReturnRed>
                {graphType === 'Day' ? data.dayReturn.toFixed(2) : weekGraphReturn.toFixed(2)}%
              </PortfolioCardGraphReturnRed>
            )}
          </PortfolioCardGraphReturn>
        </PortfolioCardGraphReturnContainer>
        <PortfolioCardGraphSelect
          value={graphType}
          onChange={(e) => setGraphType(e.target.value as GraphType)}
        >
          <PortfolioCardGraphOption value='Day'>Day</PortfolioCardGraphOption>
          <PortfolioCardGraphOption value='Week'>Week</PortfolioCardGraphOption>
          <PortfolioCardGraphOption value='All Time'>All Time</PortfolioCardGraphOption>
        </PortfolioCardGraphSelect>
      </PortfolioCardGraphButtonContainer>
      <PortfolioCardGraphContainer>
        <Graph
          graphData={graphType === 'Day' ? data.dayGraph : weekGraphData}
          datakey='indexRate'
        />
      </PortfolioCardGraphContainer>
      <PortfolioCardButton
        onClick={() => {
          if (data.tokens.length === 0) {
            alert(
              'Token not initialized for the portfolio. Please invest in other portfolio where token is initialized',
            )
            return
          }

          setIsInvestmentModalVisible(true)
          setInvesmentDetails(data)
        }}
      >
        Deposit
      </PortfolioCardButton>
    </PortfolioCardContainer>
    // </Link>
  )
}
