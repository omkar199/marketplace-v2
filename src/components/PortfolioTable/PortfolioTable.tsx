'use client'

import { useEffect, useState } from 'react'

import { Table, THead, TR, TH, PaginationContainer } from './PortfolioTable.style'

import PortfolioTableRow from '@/components/PortfolioTableRow/PortfolioTableRow'
import Pagination from '@/components/Pagination/Pagination'

import { fetchNewPortfolioAndCount } from '@/api/portfolioAPIData'

import type { PortfolioListType, PortfolioGraphTVL } from '@/types/home'

interface Props {
  portfolioListType: PortfolioListType
  portfolioList: PortfolioGraphTVL[]
  portfolioCount: number
}

export default function PortfolioTable({
  portfolioListType,
  portfolioList,
  portfolioCount,
}: Props) {
  const [currentPage, setCurrentPage] = useState(1)
  const [newPortfolioList, setNewPortfolioList] = useState<PortfolioGraphTVL[]>([])

  const onPageChangeHandler = (_: React.ChangeEvent<unknown>, newPage: number) => {
    async function helper() {
      if (portfolioListType === 'New' && newPage > 1) {
        const newPortfolioResult = await fetchNewPortfolioAndCount(newPage)
        if (newPortfolioResult) {
          setNewPortfolioList(newPortfolioResult.newPortfolioList)
        }
      }
      setCurrentPage(newPage)
    }
    helper()
  }

  return (
    <>
      <Table>
        <THead>
          <TR>
            <TH>Value name</TH>
            <TH>Allocation</TH>
            <TH>Total TVL</TH>
            <TH>APY</TH>
            <TH>Return</TH>
            <TH>Change</TH>
            <TH></TH>
          </TR>
        </THead>
        <tbody>
          {portfolioListType === 'New' && currentPage === 1
            ? portfolioList.map((portfolio) => (
                <PortfolioTableRow key={portfolio.indexSwap} data={portfolio} />
              ))
            : newPortfolioList.map((portfolio) => (
                <PortfolioTableRow key={portfolio.indexSwap} data={portfolio} />
              ))}

          {(portfolioListType === 'Top TVL' || portfolioListType === 'Top Performance') &&
            portfolioList
              .slice((currentPage - 1) * 6, (currentPage - 1) * 6 + 6)
              .map((portfolio) => <PortfolioTableRow key={portfolio.indexSwap} data={portfolio} />)}
        </tbody>
      </Table>
      <PaginationContainer>
        <Pagination
          activeColor='#7e77dd'
          page={currentPage}
          count={Math.ceil(portfolioCount / 6)}
          onChangeHandler={onPageChangeHandler}
        />
      </PaginationContainer>
    </>
  )
}
