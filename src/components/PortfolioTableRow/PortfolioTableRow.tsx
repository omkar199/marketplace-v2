'use client'

import Image from 'next/image'

import {
  TR,
  TD,
  TableVaultContainer,
  TableVaultImgContainer,
  TableVaultImg,
  TableVaultName,
  TableTokenContainer,
  TableTokenMain,
  TableToken,
  GraphReturnGreen,
  GraphReturnRed,
  TableGraphContainer,
  TableButtonContainer,
  TableButton,
} from './PortfolioTableRow.style'

import TableGraph from '@/components/TableGraph/TableGraph'

import { convertWeiToEth } from '@/utils/converter'

import type { PortfolioGraphTVL } from '@/types/home'

import VelvetLogo from '@/assets/brand/VelvetLogo.svg'

interface Props {
  data: PortfolioGraphTVL
}

export default function PortfolioTableRow({ data }: Props) {
  return (
    <TR>
      <TD>
        <TableVaultContainer>
          <TableVaultImgContainer>
            {data.logo ? (
              <TableVaultImg src={data.logo} alt='portfolio_logo' />
            ) : (
              <Image src={VelvetLogo} alt='velvet_logo' style={{ width: '100%', height: '100%' }} />
            )}
          </TableVaultImgContainer>
          <TableVaultName>{data.name}</TableVaultName>
        </TableVaultContainer>
      </TD>
      <TD>
        <TableTokenContainer>
          {data?.tokens?.map((token) => (
            <TableTokenMain key={token.address}>
              <TableToken src={token.logo} alt='token_logo' />
            </TableTokenMain>
          ))}
        </TableTokenContainer>
      </TD>
      <TD>${(+convertWeiToEth(data.totalValueLiquidity)).toFixed(2)}</TD>
      <TD>-</TD>
      <TD>
        {data.dayReturn >= 0 ? (
          <GraphReturnGreen>{data.dayReturn.toFixed(2)}%</GraphReturnGreen>
        ) : (
          <GraphReturnRed>{data.dayReturn.toFixed(2)}%</GraphReturnRed>
        )}
      </TD>
      <TD style={{ width: '200px' }}>
        <TableGraphContainer>
          <TableGraph
            graphData={data.dayGraph}
            datakey='indexRate'
            stokeColor={data.dayReturn >= 0 ? '#2ad34f' : '#fe6971'}
          />
        </TableGraphContainer>
      </TD>
      <TD>
        <TableButtonContainer>
          <TableButton>Deposit</TableButton>
        </TableButtonContainer>
      </TD>
    </TR>
  )
}
