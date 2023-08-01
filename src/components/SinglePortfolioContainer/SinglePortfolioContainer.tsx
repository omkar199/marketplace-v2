'use client'

import { PortfolioGraph, PortfolioGraphTVL, SinglePortfolio } from '@/types/home'
import React, { useEffect, useState } from 'react'
import {
  AllocationDiv,
  AllocationDivWrapper,
  AllocationHeadingDiv,
  ApyHeading,
  AssetDetails,
  AssetDetailsSpan,
  AssetHeading,
  AssetLogo,
  BackToDiv,
  ContainerWrapper,
  DaysLi,
  FilterForDays,
  FooterBottom,
  FooterHeading,
  FooterInnerDiv,
  FooterSpan,
  GraphAssetWrapper,
  GraphContainer,
  GraphHeaderContainer,
  HeaderContainer,
  HeaderRightContainer,
  Hr,
  InnerHeading,
  InvestBtn,
  LeftGraphContainer,
  MainContainer,
  PortfolioAllocation,
  PortfolioName,
  PortfolioNameSpan,
  PortfolioNameText,
  RightAssetContainer,
  SingleFooterContainer,
  ValueReturnDiv,
  ValueReturnHeading,
  ValueReturnValue,
  VaultPerformance,
  WeightDetails,
  WeightHeading,
} from './SinglePortfolioContainer.style'
import BackImg from '@/assets/logo/BackToMarketplace.svg'
import VelvetLogo from '@/assets/brand/VelvetLogo.svg'
import Image from 'next/image'
import Graph from '../Graph/Graph'
import { convertWeiToEth } from '@/utils/converter'
import { fetchGetRevalidate } from '@/utils/fetcher'
import { calculateReturnFromGraphData } from '@/helpers/calculateReturn'
import Link from 'next/link'

interface Props {
  data: SinglePortfolio
}
const SinglePortfolioContainer = ({ data }: Props) => {
  const [graphTimeing, setGraphTimeing] = useState('24H')
  const [weekGraphData, setWeekGraphData] = useState<PortfolioGraph[]>([])
  const [weekGraphReturn, setWeekGraphReturn] = useState(0)

  useEffect(() => {
    async function helper() {
      if (graphTimeing === '1W') {
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
  }, [graphTimeing, data.indexSwap])
  console.log(data, 'data')

  return (
    <ContainerWrapper>
      <BackToDiv>
        <Link href={`/`}>
          <Image src={BackImg} alt='goback' style={{ marginRight: '5px' }} width={30} height={30} />
        </Link>
        back to Marketplace
      </BackToDiv>
      <MainContainer>
        <HeaderContainer>
          <PortfolioName>
            <Image src={VelvetLogo} alt='logo' width={40} height={40} />
            <PortfolioNameText>
              {data.name}
              <PortfolioNameSpan>by Community</PortfolioNameSpan>
            </PortfolioNameText>
          </PortfolioName>
          <HeaderRightContainer>
            <ValueReturnDiv>
              <ValueReturnHeading>Value</ValueReturnHeading>
              <ValueReturnValue>-</ValueReturnValue>
            </ValueReturnDiv>
            <ValueReturnDiv>
              <ValueReturnHeading>Return</ValueReturnHeading>
              <ValueReturnValue>-</ValueReturnValue>
            </ValueReturnDiv>
            <InvestBtn>Deposit / Withdraw</InvestBtn>
          </HeaderRightContainer>
        </HeaderContainer>
        <Hr />
        <InnerHeading>{data.strategy}</InnerHeading>
        <GraphAssetWrapper>
          <LeftGraphContainer>
            <GraphHeaderContainer>
              <VaultPerformance>Vault perfomance</VaultPerformance>
              <FilterForDays>
                <DaysLi
                  active={graphTimeing === '24H' ? 'active' : ''}
                  onClick={() => setGraphTimeing('24H')}
                >
                  24H
                </DaysLi>
                <DaysLi
                  active={graphTimeing === '1W' ? 'active' : ''}
                  onClick={() => setGraphTimeing('1W')}
                >
                  1W
                </DaysLi>
                <DaysLi
                  active={graphTimeing === '1M' ? 'active' : ''}
                  onClick={() => setGraphTimeing('1M')}
                >
                  1M
                </DaysLi>
                <DaysLi
                  active={graphTimeing === '3M' ? 'active' : ''}
                  onClick={() => setGraphTimeing('3M')}
                >
                  3M
                </DaysLi>
                <DaysLi
                  active={graphTimeing === '1Y' ? 'active' : ''}
                  onClick={() => setGraphTimeing('1Y')}
                >
                  1Y
                </DaysLi>
                <DaysLi
                  active={graphTimeing === 'ALl' ? 'active' : ''}
                  onClick={() => setGraphTimeing('All')}
                >
                  All
                </DaysLi>
              </FilterForDays>
            </GraphHeaderContainer>
            <GraphContainer>
              <Graph
                graphData={graphTimeing === '1W' ? weekGraphData : data.dayGraph}
                datakey='indexRate'
              />
            </GraphContainer>
          </LeftGraphContainer>
          <RightAssetContainer>
            <PortfolioAllocation>
              <AllocationHeadingDiv>
                <AssetHeading>Assets</AssetHeading>
                <WeightHeading>Weight</WeightHeading>
                <WeightHeading>APY</WeightHeading>
              </AllocationHeadingDiv>

              <AllocationDiv>
                {data?.tokens &&
                  data?.tokens?.map((elem, index) => {
                    return (
                      <AllocationDivWrapper key={index}>
                        <AssetDetails>
                          <AssetLogo src={elem.logo} alt='assetLogo' />
                          {elem.symbol}
                          {/* <AssetDetailsSpan>BTC</AssetDetailsSpan> */}
                        </AssetDetails>
                        <WeightDetails>
                          {(parseFloat(elem.allocation) / 100).toFixed(2)}%
                        </WeightDetails>
                        <ApyHeading>
                          {elem?.APY !== '-' ? `${parseFloat(elem?.APY).toFixed(2)}%` : '-'}
                        </ApyHeading>
                      </AllocationDivWrapper>
                    )
                  })}
              </AllocationDiv>
            </PortfolioAllocation>
          </RightAssetContainer>
        </GraphAssetWrapper>
        <SingleFooterContainer>
          <FooterInnerDiv>
            <FooterHeading>TVL</FooterHeading>
            <FooterBottom>
              {parseFloat(convertWeiToEth(data?.totalValueLiquidity)).toFixed(2)}
            </FooterBottom>
          </FooterInnerDiv>
          <FooterInnerDiv>
            <FooterHeading># of holders</FooterHeading>
            <FooterBottom>{data?.tokenHolders}</FooterBottom>
          </FooterInnerDiv>
          <FooterInnerDiv>
            <FooterHeading>Current supply</FooterHeading>
            <FooterBottom>-</FooterBottom>
          </FooterInnerDiv>
          <FooterInnerDiv>
            <FooterHeading>
              Fee
              <FooterSpan> (charged every 2 weeks)</FooterSpan>
            </FooterHeading>
            <FooterBottom>-</FooterBottom>
          </FooterInnerDiv>
          <FooterInnerDiv>
            <FooterHeading> Deposit Fee </FooterHeading>
            <FooterBottom>No</FooterBottom>
          </FooterInnerDiv>
          <FooterInnerDiv>
            <FooterHeading>Withdrawal Fee </FooterHeading>
            <FooterBottom>No</FooterBottom>
          </FooterInnerDiv>
          <FooterInnerDiv>
            <FooterHeading>Token price </FooterHeading>
            <FooterBottom>{parseFloat(convertWeiToEth(data.indexRate)).toFixed(2)}</FooterBottom>
          </FooterInnerDiv>
        </SingleFooterContainer>
      </MainContainer>
    </ContainerWrapper>
  )
}

export default SinglePortfolioContainer
