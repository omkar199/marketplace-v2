import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import {
  BnbPrice,
  CloseLogo,
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
  SubHeadingProcess,
  UsdConversiom,
} from './ProcessingModal.style'

import { Fade } from '@mui/material'
import VelvetLogo from '@/assets/logo/VelvetLogo.svg'
import VelvetBrandLogo from '@/assets/brand/VelvetLogo.svg'
import Cross from '@/assets/logo/cross.svg'
import ModalSpinner from '@/components/Spinner/ModalSpinner'
import BNBImg from '@/assets/logo/Bnb.svg'
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
export default function ProcessingModal({}: // bnbRate,
// fundRate,
// usd,
// isProcessModalVisible,
// setIsProcessModalVisible,
any) {
  const {
    processType,
    usdValue,
    bnbRate,
    fundRate,
    isProcessModalVisible,
    setIsProcessModalVisible,
  } = useGlobleContext()
  const closeModal = () => {
    setIsProcessModalVisible(false)
  }

  return (
    <div>
      <Modal
        open={isProcessModalVisible}
        onClose={closeModal}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        BackdropProps={{
          style: backdropStyles,
        }}
      >
        <Fade in={isProcessModalVisible}>
          <Box sx={style}>
            <CrossImgWrapper>
              <Image onClick={closeModal} src={Cross} alt='cross' />
            </CrossImgWrapper>

            <ConnectContainer>
              <Image src={VelvetLogo} alt='logo' />
              {processType.transactionType === 'deposit' ? (
                <ProcessInnerContainer>
                  <ProgressMainDiv>
                    <LogoDiv>
                      <LogoImg src={processType.tokenDetails.logo} />
                      <BnbPrice>
                        {processType.amount} {processType.tokenDetails.token}
                      </BnbPrice>
                      <UsdConversiom>
                        {(parseFloat(processType.buyTokenValue) * usdValue).toFixed(2)} USD
                      </UsdConversiom>
                    </LogoDiv>
                    <SpinnerDiv>
                      <ModalSpinner />
                    </SpinnerDiv>
                    <LogoDiv>
                      <Image src={VelvetBrandLogo} alt='velvetlogo' />
                      <BnbPrice>
                        {(parseFloat(processType.buyTokenValue) * fundRate).toFixed(2)}{' '}
                        {processType?.details?.symbol}
                      </BnbPrice>
                      <UsdConversiom></UsdConversiom>
                    </LogoDiv>
                    <HorizontalLine />
                  </ProgressMainDiv>
                  <HeadingProcess>Transaction in progress…</HeadingProcess>
                  <SubHeadingProcess>
                    (please press “Confirm” in your Metamask wallet)
                  </SubHeadingProcess>
                </ProcessInnerContainer>
              ) : (
                <ProcessInnerContainer>
                  <ProgressMainDiv>
                    <LogoDiv>
                      <Image src={VelvetBrandLogo} alt='velvetlogo' />
                      <BnbPrice>
                        {parseFloat(processType.amount).toFixed(4)}
                        {/* {processType?.details?.symbol} */}
                      </BnbPrice>
                      <UsdConversiom></UsdConversiom>
                    </LogoDiv>
                    <SpinnerDiv>
                      <ModalSpinner />
                    </SpinnerDiv>
                    <LogoDiv>
                      <Image
                        src={BNBImg}
                        alt='velvetlogo'
                        width={64}
                        height={64}
                        style={{
                          border: '1px solid #f1f0fa',
                          borderRadius: '50%',
                          padding: '10px',
                        }}
                      />
                      <BnbPrice>
                        {(parseFloat(processType.amount) * bnbRate).toFixed(2)} BNB
                      </BnbPrice>
                      <UsdConversiom>
                        {(parseFloat(processType.amount) * usdValue).toFixed(2)}USD
                      </UsdConversiom>
                    </LogoDiv>
                    <HorizontalLine />
                  </ProgressMainDiv>
                  <HeadingProcess>Transaction in progress…</HeadingProcess>
                  <SubHeadingProcess>
                    (please press “Confirm” in your Metamask wallet)
                  </SubHeadingProcess>
                </ProcessInnerContainer>
              )}
            </ConnectContainer>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
