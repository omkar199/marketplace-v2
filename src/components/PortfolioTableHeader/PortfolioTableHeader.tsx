'use client'

import ProcessingModal from '@/modal/ProcessingModal/ProcessingModal'
import {
  TableHeaderContainer,
  TableHeaderHead,
  TableHeaderControlsContainer,
  TableHeaderOption,
  TableHeaderSelect,
} from './PortfolioTableHeader.style'

import InvestmentModal from '@/modal/investment/InvestmentModal'
import SuccessError from '@/modal/SuccessErrorModal/SuccessError'

export default function PortfolioTableHeader() {
  return (
    <TableHeaderContainer>
      <TableHeaderHead>All Funds</TableHeaderHead>
      <TableHeaderControlsContainer>
        <TableHeaderSelect>
          <TableHeaderOption>All Funds</TableHeaderOption>
        </TableHeaderSelect>
        <TableHeaderSelect>
          <TableHeaderOption>All Time</TableHeaderOption>
        </TableHeaderSelect>
      </TableHeaderControlsContainer>
      <InvestmentModal />
      <ProcessingModal />
      <SuccessError />
    </TableHeaderContainer>
  )
}
