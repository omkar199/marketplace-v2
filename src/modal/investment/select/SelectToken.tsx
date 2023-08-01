import React, { useEffect, useState } from 'react'
import { useSnackbar } from 'notistack'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { tokenRegistry } from '@/constant/token'
import { getTokenMetadataStatic } from '@/constant/tokenRegUpdate'
import DownArrow from '../../assets/ChevronDown.svg'
import BnbLogo from '../../assets/Bnb.svg'
import { Typography } from '@mui/material'
import styled from 'styled-components'
import Image from 'next/image'

export interface TokenArrayProps {
  tokenArray: {
    token: string
    allocation: string
    logo: string
    address: string
  }[]
  setTokenArray: React.Dispatch<
    React.SetStateAction<
      {
        token: string
        allocation: string
        address: string
        logo: string
      }[]
    >
  >
  selectToken:
    | {
        address: string
        handler: string
        primary: boolean
        rewardToken: string
        token: string
        logo: string
      }
    | undefined
  setSelectToken: React.Dispatch<
    React.SetStateAction<
      | {
          address: string
          handler: string
          primary: boolean
          rewardToken: string
          token: string
          logo: string
        }
      | undefined
    >
  >
}
const LogoImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`

export default function SelectToken({
  tokenArray,
  setTokenArray,
  selectToken,
  setSelectToken,
  getDetailsForSelected,
}: TokenArrayProps & { getDetailsForSelected?: () => Promise<void> }) {
  const { enqueueSnackbar } = useSnackbar()

  const [selectedToken, setSelectedToken] = useState('pleas')

  const CustomSelectIcon = () => {
    return (
      <Image
        src={DownArrow}
        alt='select icon'
        style={{
          width: 15,
          height: '100%',
          margin: '0 10px',
          display: 'flex',
          alignItems: 'center',
          position: 'absolute',
          right: '-25px',
          top: '0',
        }}
      />
    )
  }

  const handleChange = async (event: { target: { value: string } }) => {
    const logoTokenRegistry = tokenRegistry.map((tokenData) => {
      const logo = getTokenMetadataStatic(tokenData.address.toLowerCase()).logo
      return {
        ...tokenData,
        logo,
      }
    })

    const result = logoTokenRegistry.find((elem) => elem.token === event.target.value)
    setSelectToken(result)
  }

  return (
    <Box
      sx={{
        minWidth: 150,
        backgroundColor: '#ffffff',
        margin: '5px',
        borderRadius: '5px',
        // pointerEvents: 'none',
      }}
    >
      <FormControl
        fullWidth
        sx={{
          borderRadius: '5px',
        }}
      >
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={selectToken?.token}
          onChange={handleChange}
          style={{ padding: '0' }}
          sx={{
            height: '40px',
            fontFamily: "'Montserrat'",
            color: '#261047',
            boxShadow: '0px 2px 4px #D9D9D9',
            '.MuiOutlinedInput-notchedOutline': { border: '1px solid #F1F0FA' },
            '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
              border: '1px solid #F1F0FA',
            },
            '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
              border: '1px solid #F1F0FA',
            },
            borderRadius: '5px',
          }}
          MenuProps={{
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left',
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'left',
            },
          }}
          IconComponent={() => null}
          renderValue={(value) => {
            const token = tokenArray.find((tokenData) => tokenData.token === value)

            return (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                }}
              >
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <LogoImg
                    src={token?.logo}
                    alt='logo'
                    height={20}
                    width={20}
                    style={{ marginRight: '5px', borderRadius: '50px' }}
                  />
                  {value == 'WBNB' ? 'BNB' : value || 'BNB'}
                </Typography>
                <CustomSelectIcon />
              </Box>
            )
          }}
        >
          {tokenArray.map((elem, indx) => {
            return (
              <MenuItem key={indx} value={elem.token}>
                <LogoImg
                  src={elem.logo}
                  alt='logo'
                  height={20}
                  width={20}
                  style={{ marginRight: '5px', borderRadius: '50px' }}
                />
                {elem?.token}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </Box>
  )
}
