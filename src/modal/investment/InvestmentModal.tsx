'use client'

import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { CloseLogo } from '../ConnectModal/ConnectModal.style'

import { alpha, styled } from '@mui/material/styles'
import { useAccount, useBalance, useWalletClient } from 'wagmi'

import {
  Fade,
  MenuItem,
  Select,
  SelectChangeEvent,
  Skeleton,
  Switch,
  Tooltip,
  Typography,
} from '@mui/material'
import FundLogo from '@/assets/brand/VelvetLogo.svg'
import VelvetLogo from '@/assets/logo/VelvetLogo.svg'
import DownArrow from '../assets/ChevronDown.svg'
import UsdLogos from '../assets/UsdLogo.svg'
import Cross from '../assets/cross.svg'
import oX from '../assets/0x.svg'
import PancakeLogo from '../assets/pancake.svg'
import DepositDark from '../assets/depositDark.svg'
import DepositLight from '../assets/depositLight.svg'
import WithdrawDark from '../assets/withdrawDark.svg'
import WithdrawLight from '../assets/withdrawLight.svg'
import SettingLogo from '../assets/setting.png'
import QuestionLogo from '../assets/question.png'
import {
  AdvanceSettingDiv,
  Balance,
  ConnectContainer,
  HeadDiv,
  InfoQuestion,
  InfoValue,
  InnerContainer,
  InnerInfo,
  InnerInfoWrapper,
  InnerSwithDiv,
  InvestmentIcon,
  InvestmentInput,
  MaxBtn,
  PercentDiv,
  SubmitBtn,
  SwapContainer,
  SwapDiv,
  SwitchDiv,
  TokenPrice,
  UsdConversionDiv,
  UsdLogo,
  UsdText,
  ValueDiv,
  GetBNBBtn,
  ButtonContainer,
  GetBNBModalContainer,
  GetBNBHeader,
  GetBNBBox,
  GetBNBBoxHead,
  GetBNBBoxPara,
  GetBNBBoxDetails,
  InfoWrraper,
  InfoWrraperDeposit,
  SettingIcon,
  QuestionIcon,
  SettingOpenClose,
  MultiTokenBtn,
  CloseLogoWraper,
} from './InvestmentModal.style'
import { useEffect, useState } from 'react'
import SelectToken from './select/SelectToken'
import Image from 'next/image'
import { getTokenMetadataStatic } from '@/constant/tokenRegUpdate'
import { alertTost } from '@/helpers/alert'
import {
  checkIfPortfolioPaused,
  checkInvestment,
  checkPrimary,
  getBalance,
  getPorfolioTokenList,
  getTokenBalance,
} from '@/helpers/getWeb3'
import {
  DepositPortfolio,
  WithdrawPortfolio,
  investZeroX,
  withdrawZerox,
  withdrawZeroxPrimary,
} from '@/helpers/web3'
import { WBNB, tokenRegAddress } from '@/constant/contract'
import ProcessingModal from '../ProcessingModal/ProcessingModal'
import axios from 'axios'
import { useGlobleContext } from '@/store/globle'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  outline: 'none',
  width: 'auto',
  bgcolor: '#FFFFFF',
  border: '1px solid #FCFCFC',
  borderRadius: '20px',
  boxShadow: 24,
}

const backdropStyles = {
  backgroundColor: '#7E77DD',
  opacity: 0.5,
}

const CustomSelectIcon = () => {
  return (
    <Image
      src={DownArrow}
      alt='select icon'
      style={{
        width: 10,
        height: '100%',
        margin: '0 10px',
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        right: '-35px',
        top: '0',
      }}
    />
  )
}
interface UserProps {
  user: {
    address: string
    chainId: number
    isConnected: boolean
    walletType: string
    displayAddress: string
  }
  funds: []
}

const ColorSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: '#7e77dd',
    '&:hover': {
      backgroundColor: alpha('#7e77dd', theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: '#7e77dd',
  },
}))

const ON_CHAIN = 'onchain'
const OFF_CHAIN = 'offchain'

export default function InvestmentModal({}: // invesmentDetails,
// isInvestmentModalVisible,
// setIsInvestmentModalVisible,
any) {
  const {
    isInvestmentModalVisible,
    setIsInvestmentModalVisible,
    invesmentDetails,
    setProcessType,
    usdValue,
    setUsdValue,
    bnbRate,
    setbnbRate,
    fundRate,
    setfundRate,
    setIsProcessModalVisible,
    setIsSuccessErrorModalVisible,
    setSuccessOrErrorState,
  } = useGlobleContext()
  const { address, isConnected } = useAccount()
  const { data, isError, isLoading } = useBalance({
    address: address,
  })
  const web3 = useWalletClient()
  const [multiToken, setMultiToken] = useState(false)
  const [active, setActive] = useState(true)
  const [additionalSettings, setAdditionalSettings] = useState(false)
  const [additionalSettingsDeposit, setAdditionalSettingsDeposit] = useState(false)
  const [maxValue, setMaxValue] = useState('')
  const [usdtValue, setUsdtValue] = useState('')
  const [usdcValue, setUsdcValue] = useState('')
  // const [usdValue, setUsdValue] = useState('')
  const [lpSlippage, setLpSlippage] = useState('')
  // const [fundRate, setfundRate] = useState('')
  // const [bnbRate, setbnbRate] = useState('')
  const [normalSlippage, setNormalSlippage] = useState('')
  const [smartRebalanceType, setSmartRebalanceType] = useState<string>(ON_CHAIN)
  const [amount, setAmount] = useState<any>('')
  const [buyTokenValue, setBuyTokenValue] = useState<any>('')
  const [balance, setBalance] = useState('0')
  const [bnbBalance, setBnbBalance] = useState('')
  const [investBehalf, setInvestBehalf] = useState(false)
  const [loading, setLoading] = useState(false)
  const [toAddress, setToAddress] = useState('')
  const [showGetBNBModal, setShowGetBNBModal] = useState(false)
  const [tokenArrayToSwap, setTokenArrayToSwap] = useState<
    {
      logo: string
      token: string
      allocation: string
      address: string
    }[]
  >([])
  const [tokenToSwap, setTokenToSwap] = useState<any>({
    address: '',
    handler: '',
    primary: false,
    rewardToken: '',
    token: 'Select',
  })
  const [tokenArray, setTokenArray] = useState<
    {
      token: string
      address: string
      allocation: string
      logo: string
    }[]
  >([])
  const [tokenFromSwap, setTokenFromSwap] = useState<any>({
    address: '',
    logo: '',
    token: '',
  })

  const swapDepositWithdraw = () => {
    setActive(!active)
    setAmount('')
  }
  const toggleSmartRebalanceType = (e: SelectChangeEvent) => {
    setSmartRebalanceType(e.target.value)
  }
  const DepositFund = async () => {
    if (!amount || parseFloat(amount) > parseFloat(bnbBalance)) {
      alertTost('Please enter valid amount', 'error')
      return
    }
    setIsInvestmentModalVisible(false)
    setProcessType({
      transactionType: 'deposit',
      amount: amount,
      details: invesmentDetails,
      tokenDetails: tokenToSwap,
      buyTokenValue: buyTokenValue,
    })
    setIsProcessModalVisible(true)
    const fund = await getPorfolioTokenList((invesmentDetails as any)?.indexSwap)

    const array = fund?.map(() => {
      return lpSlippage ? (parseInt(lpSlippage) * 100).toString() : '200'
    })
    const array1 = fund?.map(() => {
      return normalSlippage ? (parseInt(normalSlippage) * 100).toString() : '200'
    })

    const ispause = await checkIfPortfolioPaused((invesmentDetails as any)?.indexSwap)
    if (!ispause) {
      await DepositPortfolio(
        amount,
        (invesmentDetails as any)?.indexSwap,
        array1!,
        array!,
        tokenToSwap,
        toAddress,
        investBehalf,
        null,
        invesmentDetails,
        web3.data,
        buyTokenValue,
        setIsProcessModalVisible,
        setIsSuccessErrorModalVisible,
        setSuccessOrErrorState,
      )

      //   dispatch(fetchSingleFund(id as any))
    } else {
      alertTost('fund is paused ', 'error')
    }
  }

  const WithdrawFund = async () => {
    if (!amount) {
      alertTost('Please enter valid amount', 'error')
      return
    }
    setIsInvestmentModalVisible(false)
    setProcessType({
      transactionType: 'withdraw',
      amount: amount,
      details: invesmentDetails,
    })
    setIsProcessModalVisible(true)
    const fund = await getPorfolioTokenList((invesmentDetails as any)?.indexSwap)
    const array = fund?.map(() => {
      return lpSlippage ? (parseInt(lpSlippage) * 100).toString() : '200'
    })
    const array1 = fund?.map(() => {
      return normalSlippage ? (parseInt(normalSlippage) * 100).toString() : '200'
    })
    const ispause = await checkIfPortfolioPaused((invesmentDetails as any)?.indexSwap)
    if (!ispause) {
      await WithdrawPortfolio(
        (invesmentDetails as any)?.indexSwap,
        amount,
        multiToken,
        array1!,
        array!,
        null,
        invesmentDetails,
        web3.data,
        tokenToSwap,
        setIsProcessModalVisible,
        setIsSuccessErrorModalVisible,
        setSuccessOrErrorState,
      )
      //   dispatch(fetchSingleFund(id as any))
    } else {
      alertTost('fund is paused ', 'error')
    }
  }

  const OffChainDeposit = async () => {
    if (!amount) {
      alertTost('Please enter valid amount', 'error')
      return
    }
    setIsInvestmentModalVisible(false)
    setProcessType({
      transactionType: 'deposit',
      amount: amount,
      details: invesmentDetails,
      tokenDetails: tokenToSwap,
      buyTokenValue: buyTokenValue,
    })
    setIsProcessModalVisible(true)
    const fund = await getPorfolioTokenList((invesmentDetails as any)?.indexSwap)
    const array = fund?.map(() => {
      return lpSlippage ? (parseInt(lpSlippage) * 100).toString() : '200'
    })
    const ispause = await checkIfPortfolioPaused((invesmentDetails as any)?.indexSwap)
    setProcessType({
      transactionType: 'deposit',
      amount: amount,
      details: invesmentDetails,
      tokenDetails: tokenToSwap,
      buyTokenValue: buyTokenValue,
    })
    setIsProcessModalVisible(true)
    if (!ispause) {
      await investZeroX(
        (invesmentDetails as any)?.indexSwap,
        (invesmentDetails as any)?.offChainIndexSwap,
        tokenRegAddress,
        tokenToSwap,
        amount,
        array!,
        toAddress,
        investBehalf,
        null,
        invesmentDetails as any,
        amount,
        web3.data,
        buyTokenValue,
        normalSlippage,
        setIsProcessModalVisible,
        setIsSuccessErrorModalVisible,
        setSuccessOrErrorState,
      )
      //   dispatch(fetchSingleFund(id as any))
    } else {
      alertTost('fund is paused ', 'error')
    }
  }

  const OffWithDraw = async () => {
    if (!amount) {
      alertTost('Please enter valid amount', 'error')
      return
    }
    setIsInvestmentModalVisible(false)
    setProcessType({
      transactionType: 'withdraw',
      amount: amount,
      details: invesmentDetails,
    })
    setIsProcessModalVisible(true)
    const fund = await getPorfolioTokenList((invesmentDetails as any)?.indexSwap)
    const array = fund?.map(() => {
      return lpSlippage ? (parseInt(lpSlippage) * 100).toString() : '200'
    })
    const ispause = await checkIfPortfolioPaused((invesmentDetails as any)?.indexSwap)

    if (!ispause) {
      const result = await checkPrimary(
        (invesmentDetails as any)?.indexSwap,
        tokenRegAddress,
        address,
      )

      if (!result) {
        await withdrawZerox(
          (invesmentDetails as any)?.indexSwap,
          (invesmentDetails as any)?.offChainIndexSwap,
          tokenRegAddress,
          WBNB,
          array!,
          amount,
          null,
          invesmentDetails as any,
          web3?.data,
          tokenToSwap,
          normalSlippage,
          setIsProcessModalVisible,
          setIsSuccessErrorModalVisible,
          setSuccessOrErrorState,
        )
        // dispatch(fetchSingleFund(id as any))
      } else {
        await withdrawZeroxPrimary(
          (invesmentDetails as any)?.indexSwap,
          (invesmentDetails as any)?.offChainIndexSwap,
          tokenRegAddress,
          WBNB,
          array!,
          amount,
          null,
          invesmentDetails,
          web3?.data,
          tokenToSwap,
          normalSlippage,
          setIsProcessModalVisible,
          setIsSuccessErrorModalVisible,
          setSuccessOrErrorState,
        )
        // dispatch(fetchSingleFund(id as any))
      }
    } else {
      alertTost('fund is paused ', 'error')
    }
  }
  useEffect(() => {
    const checkBalance = async () => {
      const result: any = await checkInvestment((invesmentDetails as any)?.indexSwap, address)
      setBalance(result)
      if (tokenToSwap.token === 'WBNB') {
        const bnbBalance = await getBalance(address as any)

        setBnbBalance(bnbBalance as any)
      } else {
        const bnbBalance = await getTokenBalance(tokenToSwap.address, address)
        setBnbBalance(bnbBalance as any)
      }
    }
    checkBalance()
  }, [active, tokenToSwap])
  const getUsdPrice = async () => {
    setLoading(true)
    const result = await axios.get(
      'https://api.bscscan.com/api?module=gastracker&action=gasoracle&apikey=AJ4KP2CIWV6DWF2SSPQ5SX16C9YZ78B2B4',
    )
    const usdc = await axios.get('https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDC')
    const usdt = await axios.get('https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT')
    // const fundRate = await axios.get(
    //   `${apiUrl}api/v2/portfolio/investment?portfolioAddress=${
    //     (invesmentDetails as any).indexSwap
    //   }&bnbAmount=1`,
    //   { headers: apiHeader },
    // )
    // const bnbRate = await axios.get(
    //   `${apiUrl}api/v2/portfolio/withdrawal?portfolioAddress=${
    //     (invesmentDetails as any).indexSwap
    //   }&tokenAmount=1`,
    //   { headers: apiHeader },
    // )
    setUsdcValue(usdc?.data?.price)
    setUsdtValue(usdt?.data?.price)
    setLoading(false)
    setfundRate('1')
    setbnbRate('1')
    setUsdValue((result as any).data.result.UsdPrice)
  }

  useEffect(() => {
    if (invesmentDetails !== '') {
      getUsdPrice()
    }
  }, [invesmentDetails])
  useEffect(() => {
    const BnbObj = {
      token: 'WBNB',
      address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7192.png',
      handler: 'Base',
      rewardToken: '0x0000000000000000000000000000000000000000',
      primary: true,
    }
    let logoTokenRegistry = []
    if ((invesmentDetails as any)?.permittedTokens?.length > 0) {
      logoTokenRegistry = (invesmentDetails as any)?.permittedTokens?.map((tokenData: any) => {
        const logo = getTokenMetadataStatic(tokenData.toLowerCase())
        return logo
      })
    }
    logoTokenRegistry.unshift(BnbObj)
    setTokenArrayToSwap(logoTokenRegistry as any)
    setTokenToSwap(logoTokenRegistry[0])
  }, [invesmentDetails])

  useEffect(() => {
    if (invesmentDetails !== '') {
      setTokenFromSwap({
        address: (invesmentDetails as any)?.indexSwap,
        logo: (invesmentDetails as any)?.logo !== '' ? (invesmentDetails as any)?.logo : FundLogo,
        token: (invesmentDetails as any)?.name,
      })
      setTokenArray([
        {
          address: (invesmentDetails as any)?.indexSwap,
          logo: (invesmentDetails as any)?.logo,
          token: (invesmentDetails as any)?.name,
          allocation: 'string',
        },
      ])
      setProcessType({
        transactionType: 'deposit',
        amount: amount,
        details: invesmentDetails,
        tokenDetails: tokenToSwap,
        buyTokenValue: buyTokenValue,
      })
    }
  }, [invesmentDetails])
  const getTokenValueUsdValue = () => {
    if (tokenToSwap.token === 'USDT') {
      setBuyTokenValue(parseFloat(amount) / parseFloat(usdtValue))
    } else if (tokenToSwap.token === 'USDC') {
      setBuyTokenValue(parseFloat(amount) / parseFloat(usdcValue))
    } else {
      setBuyTokenValue(amount)
    }
  }
  useEffect(() => {
    getTokenValueUsdValue()
  }, [amount])
  return (
    <div>
      <Modal
        open={isInvestmentModalVisible}
        onClose={() => {
          setActive(true)
          setMultiToken(false)
          setIsInvestmentModalVisible(false)
        }}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        BackdropProps={{
          style: backdropStyles,
        }}
      >
        <Fade in={isInvestmentModalVisible}>
          <Box sx={{ ...style, left: showGetBNBModal ? '35%' : '50%' }}>
            <div
              style={{
                position: 'relative',
                padding: '16px',
                background: '#fff',
                borderRadius: '20px',
                borderRight: '1px solid #ccc',
              }}
            >
              <GetBNBModalContainer show={showGetBNBModal}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image src={VelvetLogo} alt='logo' />
                </div>

                <GetBNBHeader> How to get BNB</GetBNBHeader>

                <GetBNBBox>
                  <GetBNBBoxHead>Transfer from any exchange account</GetBNBBoxHead>
                  <GetBNBBoxPara>
                    You can withdraw BNB from any exchange to your wallet address:
                    <GetBNBBoxDetails>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        {address}
                        {/* <IoMdCopy
                          onClick={() => navigator.clipboard.writeText(address!)}
                          style={{ width: '15px', height: '15px', cursor: 'pointer' }}
                        /> */}
                      </div>
                    </GetBNBBoxDetails>
                  </GetBNBBoxPara>
                </GetBNBBox>

                <GetBNBBox>
                  <GetBNBBoxHead>Buy with fiat (debit/credit card)</GetBNBBoxHead>
                  <GetBNBBoxPara>
                    You can buy BNB with fiat using Binance Connect or any other solution of your
                    choice.
                    <GetBNBBoxDetails>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        Buy BNB now
                        {/* <AiOutlineArrowRight style={{ display: 'inline' }} /> */}
                      </div>
                    </GetBNBBoxDetails>
                  </GetBNBBoxPara>
                </GetBNBBox>

                <GetBNBBox>
                  <GetBNBBoxHead>Bridge from another Chain</GetBNBBoxHead>
                  <GetBNBBoxPara>
                    You can bridge crypto from Ethereum, Polygon or any other chain with these
                    bridges.
                    <GetBNBBoxDetails>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <a
                          href='https://cbridge.celer.network/1/56/ETH'
                          target='_blank'
                          rel='noreferrer'
                        >
                          Bridge now
                        </a>
                        {/* <AiOutlineArrowRight /> */}
                      </div>
                    </GetBNBBoxDetails>
                  </GetBNBBoxPara>
                </GetBNBBox>
              </GetBNBModalContainer>
              <CloseLogoWraper>
                <Image
                  onClick={() => {
                    setActive(true)
                    setMultiToken(false)
                    setIsInvestmentModalVisible(false)
                  }}
                  src={Cross}
                  alt='cross'
                />
              </CloseLogoWraper>
              <ConnectContainer>
                <Image src={VelvetLogo} alt='logo' />
                {loading ? (
                  <>
                    <Skeleton
                      variant='rounded'
                      width={380}
                      height={100}
                      sx={{ margin: '5px auto', background: 'rgb(241, 240, 250)' }}
                    />
                    <Skeleton
                      variant='rounded'
                      width={380}
                      height={50}
                      sx={{ margin: '5px auto', background: 'rgb(241, 240, 250)' }}
                    />
                    <Skeleton
                      variant='rounded'
                      width={380}
                      height={240}
                      sx={{ margin: '5px auto', background: 'rgb(241, 240, 250)' }}
                    />
                    <Skeleton
                      variant='rounded'
                      width={380}
                      height={50}
                      sx={{ margin: '5px auto', background: 'rgb(241, 240, 250)' }}
                    />
                  </>
                ) : active ? (
                  <InnerContainer>
                    <SwitchDiv>
                      <InnerSwithDiv onClick={swapDepositWithdraw} color={active ? 'active' : ''}>
                        <Image src={DepositDark} alt='deposit' style={{ margin: 'auto 5px' }} />{' '}
                        Deposit
                      </InnerSwithDiv>
                      <InnerSwithDiv onClick={swapDepositWithdraw} color={!active ? 'active' : ''}>
                        <Image src={WithdrawLight} alt='withdraw' style={{ margin: 'auto 5px' }} />{' '}
                        Withdraw
                      </InnerSwithDiv>
                    </SwitchDiv>
                    <HeadDiv>
                      <PercentDiv>
                        <MaxBtn
                          onClick={() => {
                            setAmount(parseFloat(bnbBalance) * 0.15)
                            setMaxValue('0.15')
                          }}
                        >
                          15%
                        </MaxBtn>
                        <MaxBtn
                          onClick={() => {
                            setAmount(parseFloat(bnbBalance) * 0.3)
                            setMaxValue('0.3')
                          }}
                        >
                          30%
                        </MaxBtn>
                        <MaxBtn
                          onClick={() => {
                            setAmount(parseFloat(bnbBalance) * 0.5)
                            setMaxValue('0.5')
                          }}
                        >
                          50%
                        </MaxBtn>
                        <MaxBtn
                          onClick={() => {
                            setAmount(bnbBalance)
                            setMaxValue('1')
                          }}
                        >
                          Max
                        </MaxBtn>
                      </PercentDiv>
                      <ButtonContainer>
                        <Balance>
                          Balance {(+bnbBalance).toFixed(5)}{' '}
                          {tokenToSwap.token === 'WBNB' ? 'BNB' : tokenToSwap.token}
                        </Balance>
                        <GetBNBBtn onClick={() => setShowGetBNBModal((prev) => !prev)}>
                          Get BNB
                        </GetBNBBtn>
                      </ButtonContainer>
                    </HeadDiv>
                    <SwapContainer>
                      <SwapDiv>
                        <UsdConversionDiv>
                          {/* <div style={{ pointerEvents: 'none' }}> */}
                          <SelectToken
                            tokenArray={tokenArrayToSwap}
                            setTokenArray={setTokenArrayToSwap}
                            selectToken={tokenToSwap}
                            setSelectToken={setTokenToSwap}
                            // getDetailsForSelected={getDetailsForSelected}
                          />
                          {/* </div> */}

                          <ValueDiv>
                            <TokenPrice
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}
                              placeholder='0.01'
                            />
                          </ValueDiv>
                        </UsdConversionDiv>
                        <UsdConversionDiv>
                          <UsdText>
                            <Image src={UsdLogos} alt='USD' style={{ marginRight: '5px' }} /> USD
                          </UsdText>
                          <ValueDiv>
                            <TokenPrice
                              value={
                                isNaN(parseFloat(usdValue) * parseFloat(buyTokenValue))
                                  ? '0.0'
                                  : (parseFloat(usdValue) * parseFloat(buyTokenValue)).toFixed(2)
                              }
                            />
                          </ValueDiv>
                        </UsdConversionDiv>
                      </SwapDiv>
                      <SwapDiv>
                        <UsdConversionDiv>
                          <SelectToken
                            tokenArray={tokenArray}
                            setTokenArray={setTokenArray}
                            selectToken={tokenFromSwap}
                            setSelectToken={setTokenFromSwap}
                          />
                          <ValueDiv>
                            <TokenPrice
                              value={
                                isNaN(parseFloat(fundRate) * parseFloat(buyTokenValue))
                                  ? '0.0'
                                  : (parseFloat(fundRate) * parseFloat(buyTokenValue)).toFixed(2)
                              }
                              // onChange={(e) => setTokenvalue(e.target.value)}
                              placeholder='0.01'
                            />
                          </ValueDiv>
                        </UsdConversionDiv>
                      </SwapDiv>
                    </SwapContainer>
                    <InnerInfoWrapper>
                      <InfoWrraperDeposit activeToggle={additionalSettingsDeposit}>
                        <InnerInfo>
                          <InfoQuestion>Estimated gas fees</InfoQuestion>
                          <InfoValue>--</InfoValue>
                        </InnerInfo>
                        <InnerInfo>
                          <InfoQuestion>Router</InfoQuestion>
                          <InfoValue>
                            <Select
                              sx={{
                                display: 'flex',
                                height: '20px',
                                fontWeight: '400',
                                fontSize: '10px',
                                lineHeight: '14px',
                                fontFamily: "'Montserrat'",
                                color: '#262626',
                                boxShadow: 'none',
                                '.MuiOutlinedInput-notchedOutline': { border: '2px solid #F1F0FA' },
                                '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                                  border: '2px solid #F1F0FA',
                                },
                                '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                                  {
                                    border: '2px solid #F1F0FA',
                                  },
                                padding: 0,
                              }}
                              value={smartRebalanceType}
                              onChange={toggleSmartRebalanceType}
                              IconComponent={() => null}
                              renderValue={(value) => {
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
                                        fontWeight: '400',
                                        fontSize: '10px',
                                        lineHeight: '14px',
                                        color: '#262626',
                                      }}
                                    >
                                      <Image
                                        src={value === OFF_CHAIN ? oX : PancakeLogo}
                                        alt='ox'
                                        width={10}
                                        style={{ marginRight: '5px' }}
                                      />
                                      {value === OFF_CHAIN ? '0x Aggregator' : 'PancakeSwap'}
                                    </Typography>
                                    <CustomSelectIcon />
                                  </Box>
                                )
                              }}
                            >
                              <MenuItem value={ON_CHAIN}>
                                <Image
                                  src={PancakeLogo}
                                  alt='ox'
                                  width={10}
                                  style={{ marginRight: '5px' }}
                                />
                                PancakeSwap
                              </MenuItem>
                              <MenuItem value={OFF_CHAIN}>
                                <Image
                                  src={oX}
                                  alt='ox'
                                  width={10}
                                  style={{ marginRight: '5px' }}
                                />
                                0x Aggregator
                              </MenuItem>
                            </Select>
                          </InfoValue>
                        </InnerInfo>
                        <InnerInfo style={{ marginTop: '17px' }}>
                          <InfoQuestion>
                            Max swap slippage
                            {/* <Tooltip
                              title='This only sets a maximum value per every single token, the resulting slippage might be much lower'
                              placement='top'
                              arrow
                            >
                              <QuestionIcon src={QuestionLogo} alt='question' />
                            </Tooltip> */}
                          </InfoQuestion>
                          <InfoValue>
                            <InvestmentInput
                              placeholder='2'
                              onChange={(e) => setNormalSlippage(e.target.value)}
                            />
                            %
                          </InfoValue>
                        </InnerInfo>
                        <InnerInfo>
                          <InfoQuestion>
                            Max LP price impact{' '}
                            {/* <Tooltip
                              title='This only sets a maximum value per every single token, the resulting slippage might be much lower'
                              placement='top'
                              arrow
                            >
                              <QuestionIcon src={QuestionLogo} />
                            </Tooltip> */}
                          </InfoQuestion>
                          <InfoValue>
                            <InvestmentInput
                              placeholder='2'
                              onChange={(e) => setLpSlippage(e.target.value)}
                            />
                            %
                          </InfoValue>
                        </InnerInfo>
                      </InfoWrraperDeposit>
                      <AdvanceSettingDiv
                        onClick={() => setAdditionalSettingsDeposit(!additionalSettingsDeposit)}
                      >
                        Advanced settings
                        {/* <SettingIcon src={SettingLogo} /> */}
                        <SettingOpenClose
                          activeToggle={additionalSettingsDeposit}
                          src={DownArrow}
                        />
                      </AdvanceSettingDiv>
                    </InnerInfoWrapper>

                    {active ? (
                      <SubmitBtn
                        onClick={smartRebalanceType === ON_CHAIN ? DepositFund : OffChainDeposit}
                      >
                        Deposit
                      </SubmitBtn>
                    ) : (
                      <SubmitBtn
                        onClick={smartRebalanceType === ON_CHAIN ? WithdrawFund : OffWithDraw}
                      >
                        Withdraw
                      </SubmitBtn>
                    )}
                  </InnerContainer>
                ) : (
                  <InnerContainer>
                    <SwitchDiv>
                      <InnerSwithDiv onClick={swapDepositWithdraw} color={active ? 'active' : ''}>
                        <Image src={DepositLight} alt='Deposit' style={{ margin: 'auto 5px' }} />{' '}
                        Deposit
                      </InnerSwithDiv>
                      <InnerSwithDiv onClick={swapDepositWithdraw} color={!active ? 'active' : ''}>
                        <Image src={WithdrawDark} alt='Withdraw' style={{ margin: 'auto 5px' }} />{' '}
                        Withdraw
                      </InnerSwithDiv>
                    </SwitchDiv>
                    <HeadDiv>
                      <PercentDiv>
                        <MaxBtn
                          onClick={() => {
                            setAmount(parseFloat(balance) * 0.15)
                            setMaxValue('0.15')
                          }}
                        >
                          15%
                        </MaxBtn>
                        <MaxBtn
                          onClick={() => {
                            setAmount(parseFloat(balance) * 0.3)
                            setMaxValue('0.3')
                          }}
                        >
                          30%
                        </MaxBtn>
                        <MaxBtn
                          onClick={() => {
                            setAmount(parseFloat(balance) * 0.5)
                            setMaxValue('0.5')
                          }}
                        >
                          50%
                        </MaxBtn>
                        <MaxBtn
                          onClick={() => {
                            setAmount(balance)
                            setMaxValue('1')
                          }}
                        >
                          Max
                        </MaxBtn>
                      </PercentDiv>
                      <Balance>Balance {balance}</Balance>
                    </HeadDiv>
                    <SwapContainer>
                      <SwapDiv>
                        <UsdConversionDiv>
                          <SelectToken
                            tokenArray={tokenArray}
                            setTokenArray={setTokenArray}
                            selectToken={tokenFromSwap}
                            setSelectToken={setTokenFromSwap}
                          />
                          <ValueDiv>
                            <TokenPrice
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}
                              placeholder='0.01'
                            />
                          </ValueDiv>
                        </UsdConversionDiv>
                      </SwapDiv>
                      <SwapDiv>
                        <UsdConversionDiv>
                          <div style={{ pointerEvents: 'none' }}>
                            <SelectToken
                              tokenArray={tokenArrayToSwap}
                              setTokenArray={setTokenArrayToSwap}
                              selectToken={tokenToSwap}
                              setSelectToken={setTokenToSwap}
                              // getDetailsForSelected={getDetailsForSelected}
                            />
                          </div>
                          <ValueDiv>
                            <TokenPrice
                              value={
                                isNaN(parseFloat(bnbRate) * parseFloat(amount))
                                  ? '0.0'
                                  : (parseFloat(bnbRate) * parseFloat(amount)).toFixed(2)
                              }
                              // onChange={(e) => setTokenvalue(e.target.value)}
                              placeholder='0.01'
                            />
                          </ValueDiv>
                        </UsdConversionDiv>
                        <UsdConversionDiv>
                          <UsdText>
                            <Image src={UsdLogos} alt='USD' style={{ marginRight: '5px' }} /> USD
                          </UsdText>
                          <ValueDiv>
                            <TokenPrice
                              value={
                                isNaN(parseFloat(usdValue) * parseFloat(amount))
                                  ? '0.0'
                                  : (parseFloat(usdValue) * parseFloat(amount)).toFixed(2)
                              }
                            />
                          </ValueDiv>
                        </UsdConversionDiv>
                      </SwapDiv>
                    </SwapContainer>
                    <InnerInfoWrapper>
                      <InfoWrraper activeToggle={additionalSettings}>
                        <InnerInfo>
                          <InfoQuestion>Estimated gas fees</InfoQuestion>
                          <InfoValue>--</InfoValue>
                        </InnerInfo>
                        <InnerInfo>
                          <InfoQuestion>Router</InfoQuestion>
                          <InfoValue>
                            <Select
                              sx={{
                                display: 'flex',
                                height: '20px',
                                fontWeight: '400',
                                fontSize: '10px',
                                lineHeight: '14px',
                                fontFamily: "'Montserrat'",
                                color: '#262626',
                                boxShadow: 'none',
                                '.MuiOutlinedInput-notchedOutline': { border: '2px solid #F1F0FA' },
                                '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                                  border: '2px solid #F1F0FA',
                                },
                                '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                                  {
                                    border: '2px solid #F1F0FA',
                                  },
                                padding: 0,
                              }}
                              value={smartRebalanceType}
                              onChange={toggleSmartRebalanceType}
                              IconComponent={() => null}
                              renderValue={(value) => {
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
                                        fontWeight: '400',
                                        fontSize: '10px',
                                        lineHeight: '14px',
                                        color: '#262626',
                                        height: '20px',
                                      }}
                                    >
                                      <Image
                                        src={value === OFF_CHAIN ? oX : PancakeLogo}
                                        alt='ox'
                                        width={10}
                                        style={{ marginRight: '5px' }}
                                      />
                                      {value === OFF_CHAIN ? '0x Aggregator' : 'PancakeSwap'}
                                    </Typography>
                                    <CustomSelectIcon />
                                  </Box>
                                )
                              }}
                            >
                              <MenuItem value={ON_CHAIN}>
                                <Image
                                  src={PancakeLogo}
                                  alt='ox'
                                  width={10}
                                  style={{ marginRight: '5px' }}
                                />
                                PancakeSwap
                              </MenuItem>
                              <MenuItem value={OFF_CHAIN}>
                                <Image
                                  src={oX}
                                  alt='ox'
                                  width={10}
                                  style={{ marginRight: '5px' }}
                                />
                                0x Aggregator
                              </MenuItem>
                            </Select>
                          </InfoValue>
                        </InnerInfo>
                        <InnerInfo style={{ marginTop: '17px' }}>
                          <InfoQuestion>
                            Max swap slippage
                            {/* <Tooltip
                              title='This only sets a maximum value per every single token, the resulting slippage might be much lower'
                              placement='top'
                              arrow
                            >
                              <QuestionIcon src={QuestionLogo} />
                            </Tooltip> */}
                          </InfoQuestion>
                          <InfoValue>
                            <InvestmentInput
                              placeholder='2'
                              onChange={(e) => setNormalSlippage(e.target.value)}
                            />
                            %
                          </InfoValue>
                        </InnerInfo>
                        <InnerInfo>
                          <InfoQuestion>
                            Max LP price impact{' '}
                            {/* <Tooltip
                              title='This only sets a maximum value per every single token, the resulting slippage might be much lower'
                              placement='top'
                              arrow
                            >
                              <QuestionIcon src={QuestionLogo} />
                            </Tooltip> */}
                          </InfoQuestion>
                          <InfoValue>
                            <InvestmentInput
                              placeholder='2'
                              onChange={(e) => setLpSlippage(e.target.value)}
                            />
                            %
                          </InfoValue>
                        </InnerInfo>
                        {smartRebalanceType === ON_CHAIN ? (
                          <InnerInfo>
                            <InfoQuestion>
                              Multitoken withdrawal
                              {/* <Tooltip
                                title='If the option is chosen your share won’t be exchanged into BNB and you will receive the underlying tokens directly instead'
                                placement='top'
                                arrow
                              >
                                <QuestionIcon src={QuestionLogo} />
                              </Tooltip> */}
                            </InfoQuestion>
                            <InfoValue>
                              {/* <CustomizedSwitches active={multiToken} setActive={setMultiToken} /> */}
                            </InfoValue>
                          </InnerInfo>
                        ) : (
                          <InnerInfo>
                            <InfoQuestion>
                              Multitoken withdrawal
                              {/* <Tooltip
                                title='If the option is chosen your share won’t be exchanged into BNB and you will receive the underlying tokens directly instead'
                                placement='top'
                                arrow
                              >
                                <QuestionIcon src={QuestionLogo} />
                              </Tooltip> */}
                            </InfoQuestion>
                            <InfoValue>
                              <MultiTokenBtn
                              // onClick={() =>
                              //   multiTokenOffChain(
                              //     (invesmentDetails as any).offChainIndexSwap,
                              //     web3.data,
                              //   )
                              // }
                              >
                                Multi token
                              </MultiTokenBtn>
                              {/* <CustomizedSwitches active={multiToken} setActive={setMultiToken} /> */}
                            </InfoValue>
                          </InnerInfo>
                        )}
                      </InfoWrraper>
                      <AdvanceSettingDiv onClick={() => setAdditionalSettings(!additionalSettings)}>
                        Advanced settings
                        {/* <SettingIcon src={SettingLogo} /> */}
                        <SettingOpenClose activeToggle={additionalSettings} src={DownArrow} />
                      </AdvanceSettingDiv>
                    </InnerInfoWrapper>

                    {active ? (
                      <SubmitBtn
                        disabled={amount === ''}
                        onClick={smartRebalanceType === ON_CHAIN ? DepositFund : OffChainDeposit}
                      >
                        Deposit
                      </SubmitBtn>
                    ) : (
                      <SubmitBtn
                        onClick={
                          smartRebalanceType === ON_CHAIN
                            ? WithdrawFund
                            : multiToken
                            ? WithdrawFund
                            : OffWithDraw
                        }
                      >
                        Withdraw
                      </SubmitBtn>
                    )}
                  </InnerContainer>
                )}
              </ConnectContainer>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
