import { Pagination } from '@mui/material'
import styled from 'styled-components'

interface Props {
  activeColor: string
}

export const CustomPagination = styled(Pagination)<Props>`
  button {
    color: #7678b5;
  }
  button.Mui-selected {
    background: ${({ activeColor }) => activeColor};
    color: #fff;
  }
`
