import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { CloseLogo } from '../ConnectModal/ConnectModal.style'
import { Fade } from '@mui/material'
import VelvetLogo from '@/assets/logo/VelvetLogo.svg'
import Cross from '@/assets/logo/cross.svg'
import SuccessLogo from '@/assets/logo/success.svg'
import ErrorLogo from '@/assets/logo/error.svg'
import {
  AddTokenBtn,
  BackToFundBtn,
  BnbPrice,
  BtnWrapper,
  ConnectContainer,
  CrossImgWrapper,
  HeadingProcess,
  HorizontalLine,
  Logo,
  LogoDiv,
  LogoImg,
  ProcessInnerContainer,
  ProgressMainDiv,
  SpinnerDiv,
  SubHeadingError,
  SubHeadingProcess,
  SuccessErrorImg,
  Tx,
  UsdConversiom,
} from './SuccessError.style'
import VelvetBrandLogo from '@/assets/brand/VelvetLogo.svg'
import BNBImg from '@/assets/brand/bnb.svg'
import { useGlobleContext } from '@/store/globle'
import Image from 'next/image'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: '#FFFFFF',
  border: '1px solid #FCFCFC',
  borderRadius: '20px',
  boxShadow: 24,
  p: 2,
}
const backdropStyles = {
  backgroundColor: '#7E77DD',
  opacity: 0.5,
}

export default function SuccessError({}: any) {
  const {
    bnbRate,
    fundRate,
    usdValue,
    isSuccessErrorModalVisible,
    SuccessOrErrorState,
    setIsSuccessErrorModalVisible,
  } = useGlobleContext()
  // const addToken = async () => {
  //   const result = await addTokenToWallet(
  //     SuccessOrErrorState.details.indexSwap,
  //     SuccessOrErrorState.details.symbol,
  //   )
  // }
  const closeModal = async () => {
    setIsSuccessErrorModalVisible(false)
  }

  return (
    <div>
      <Modal
        open={isSuccessErrorModalVisible}
        onClose={closeModal}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        BackdropProps={{
          style: backdropStyles,
        }}
      >
        <Fade in={isSuccessErrorModalVisible}>
          <Box sx={style}>
            <CrossImgWrapper>
              {' '}
              <Image onClick={closeModal} src={Cross} alt='cross' />{' '}
            </CrossImgWrapper>
            <ConnectContainer>
              <Image src={VelvetLogo} alt='logo' />

              {SuccessOrErrorState?.type === 'success' ? (
                <ProcessInnerContainer>
                  <ProgressMainDiv>
                    <LogoDiv>
                      {SuccessOrErrorState.transactionType === 'deposit' ? (
                        <LogoImg src={SuccessOrErrorState?.tokenDetails?.logo} />
                      ) : (
                        <Image src={VelvetBrandLogo} alt='logo' />
                      )}

                      {SuccessOrErrorState.transactionType === 'deposit' ? (
                        <>
                          <BnbPrice>
                            {SuccessOrErrorState.amount}{' '}
                            {SuccessOrErrorState.tokenDetails.token === 'WBNB'
                              ? 'BNB'
                              : SuccessOrErrorState.tokenDetails.token}
                          </BnbPrice>
                          <UsdConversiom>
                            {(parseFloat(SuccessOrErrorState.buyTokenValue) * usdValue).toFixed(2)}{' '}
                            USD
                          </UsdConversiom>
                        </>
                      ) : (
                        <>
                          {' '}
                          <BnbPrice>
                            {parseFloat(SuccessOrErrorState.amount).toFixed(4)}{' '}
                            {SuccessOrErrorState?.details?.symbol}
                          </BnbPrice>
                          <UsdConversiom></UsdConversiom>
                        </>
                      )}
                    </LogoDiv>
                    <SpinnerDiv>
                      <Image src={SuccessLogo} alt='logo' />
                    </SpinnerDiv>
                    <LogoDiv>
                      {SuccessOrErrorState.transactionType === 'deposit' ? (
                        <Image src={VelvetBrandLogo} alt='logo' />
                      ) : (
                        <LogoImg src={SuccessOrErrorState?.tokenDetails?.logo} />
                      )}

                      {SuccessOrErrorState.transactionType === 'deposit' ? (
                        <>
                          <BnbPrice>
                            {(parseFloat(SuccessOrErrorState.buyTokenValue) * fundRate).toFixed(2)}{' '}
                            {SuccessOrErrorState.details.symbol}
                          </BnbPrice>
                          <UsdConversiom></UsdConversiom>
                        </>
                      ) : (
                        <>
                          {' '}
                          <BnbPrice>
                            {(parseFloat(SuccessOrErrorState.amount) * bnbRate).toFixed(2)} BNB
                          </BnbPrice>
                          <UsdConversiom>
                            {(parseFloat(SuccessOrErrorState.amount) * usdValue).toFixed(2)}USD
                          </UsdConversiom>
                        </>
                      )}
                    </LogoDiv>
                    <HorizontalLine />
                    {/* <SuccessErrorImg src={SuccessLogo} /> */}
                  </ProgressMainDiv>
                  <HeadingProcess>Success.!</HeadingProcess>
                  <BtnWrapper>
                    <AddTokenBtn>+ Add token to the wallet</AddTokenBtn>
                    <BackToFundBtn onClick={closeModal}>Back to the portfolios</BackToFundBtn>
                    <Tx href={`https://bscscan.com/tx/${SuccessOrErrorState.tx}`} target='_blank'>
                      View txn on BSCscan
                    </Tx>
                  </BtnWrapper>
                </ProcessInnerContainer>
              ) : (
                <ProcessInnerContainer>
                  <ProgressMainDiv>
                    <LogoDiv>
                      {SuccessOrErrorState.transactionType === 'deposit' ? (
                        <LogoImg src={SuccessOrErrorState?.tokenDetails?.logo} />
                      ) : (
                        <Image src={VelvetBrandLogo} alt='logo' />
                      )}

                      {SuccessOrErrorState.transactionType === 'deposit' ? (
                        <>
                          <BnbPrice>
                            {SuccessOrErrorState.amount}{' '}
                            {SuccessOrErrorState.tokenDetails.token === 'WBNB'
                              ? 'BNB'
                              : SuccessOrErrorState.tokenDetails.token}
                          </BnbPrice>
                          <UsdConversiom>
                            {(parseFloat(SuccessOrErrorState.buyTokenValue) * usdValue).toFixed(2)}{' '}
                            USD
                          </UsdConversiom>
                        </>
                      ) : (
                        <>
                          <BnbPrice>
                            {parseFloat(SuccessOrErrorState.amount).toFixed(4)}{' '}
                            {SuccessOrErrorState?.details?.symbol}
                          </BnbPrice>
                          <UsdConversiom></UsdConversiom>
                        </>
                      )}
                    </LogoDiv>
                    <SpinnerDiv>
                      <Image src={ErrorLogo} alt='error' />
                    </SpinnerDiv>
                    <LogoDiv>
                      {SuccessOrErrorState.transactionType === 'deposit' ? (
                        <Image src={VelvetBrandLogo} alt='logo' />
                      ) : (
                        <LogoImg src={SuccessOrErrorState?.tokenDetails?.logo} />
                      )}

                      {SuccessOrErrorState.transactionType === 'deposit' ? (
                        <>
                          <BnbPrice>
                            {(parseFloat(SuccessOrErrorState.buyTokenValue) * fundRate).toFixed(2)}{' '}
                            {SuccessOrErrorState.details.symbol}
                          </BnbPrice>
                          <UsdConversiom></UsdConversiom>
                        </>
                      ) : (
                        <>
                          {' '}
                          <BnbPrice>
                            {(parseFloat(SuccessOrErrorState.amount) * bnbRate).toFixed(2)} BNB
                          </BnbPrice>
                          <UsdConversiom>
                            {(parseFloat(SuccessOrErrorState.amount) * usdValue).toFixed(2)}USD
                          </UsdConversiom>
                        </>
                      )}
                    </LogoDiv>
                    <HorizontalLine />
                  </ProgressMainDiv>
                  <HeadingProcess>Error!</HeadingProcess>
                  <SubHeadingError>
                    Looks like this transaction has failed, it happens sometimes due to network
                    congestion, please try depositing again
                  </SubHeadingError>
                  <BtnWrapper>
                    <BackToFundBtn onClick={closeModal}>Back to the portfolios</BackToFundBtn>
                    {SuccessOrErrorState.tx != '' ? (
                      <Tx href={`https://bscscan.com/tx/${SuccessOrErrorState.tx}`} target='_blank'>
                        View txn on BSCscan
                      </Tx>
                    ) : null}
                  </BtnWrapper>
                </ProcessInnerContainer>
              )}
            </ConnectContainer>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
