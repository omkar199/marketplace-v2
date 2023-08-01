'use client'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { useConnect } from 'wagmi'

import {
  CheckDiv,
  CloseLogo,
  CloseWrapper,
  ConnectBtn,
  ConnectBtnDiv,
  ConnectBtnWrapper,
  ConnectContainer,
  ConnectModalTitle,
  ConnectText,
  CreateWalletDiv,
  CreateWalletInput,
  FooterText,
  MagicImgWrapper,
} from './ConnectModal.style'

import { Fade } from '@mui/material'
import VelvetLogo from '@/assets/logo/VelvetLogo.svg'
import Cross from '@/assets/logo/cross.svg'
import Tick from '@/assets/logo/Path.svg'
import MagicLogo from '@/assets/logo/magicLink.svg'
import WalletConnectLogo from '@/assets/logo/walletConnect.png'
import MetamaskLogo from '@/assets/logo/metamask.png'
import BnbWallet from '@/assets/logo/bnbWallet.png'
import CoinbaseWallet from '@/assets/logo/coinbaseWallet.png'

import Image from 'next/image'
import { ConnectModalType } from '@/types/modal'
import { alertTost } from '@/helpers/alert'
import { useEffect } from 'react'

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
export default function ConnectModal({ active, setActive }: ConnectModalType) {
  const { connect, connectors, error } = useConnect()

  const connectWallet = async (index: number) => {
    connect({ connector: connectors[index] })
    setActive(false)
  }
  useEffect(() => {
    if (error) {
      alertTost(error.message, 'error')
    }
  }, [error])

  return (
    <div>
      <Modal
        open={active}
        onClose={() => setActive(!active)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        BackdropProps={{
          style: backdropStyles,
        }}
      >
        <Fade in={active}>
          <Box sx={style}>
            <CloseWrapper>
              <Image onClick={() => setActive(!active)} src={Cross} alt='cross' />
            </CloseWrapper>
            <ConnectContainer>
              <Image src={VelvetLogo} alt='logo' />
              <ConnectModalTitle>Connect Wallet</ConnectModalTitle>
              <ConnectBtnDiv>
                <ConnectBtnWrapper>
                  <ConnectBtn
                    onClick={(e) => {
                      connectWallet(0)
                    }}
                  >
                    <Image src={MetamaskLogo as any} alt='ConnectBtn' />
                  </ConnectBtn>
                  <ConnectText>Metamask</ConnectText>
                </ConnectBtnWrapper>
                <ConnectBtnWrapper>
                  <ConnectBtn onClick={(e) => connectWallet(1)}>
                    <Image src={CoinbaseWallet as any} alt='Connect Btn' />
                  </ConnectBtn>
                  <ConnectText>Coinbase wallet</ConnectText>
                </ConnectBtnWrapper>
                <ConnectBtnWrapper>
                  <ConnectBtn onClick={(e) => connectWallet(2)}>
                    <Image src={WalletConnectLogo as any} alt='Connect Btn' />
                  </ConnectBtn>
                  <ConnectText>Wallet Connect</ConnectText>
                </ConnectBtnWrapper>
                <ConnectBtnWrapper>
                  <ConnectBtn onClick={(e) => connectWallet(3)}>
                    <Image src={BnbWallet as any} alt='Connect Btn' />
                  </ConnectBtn>
                  <ConnectText>Binance Wallet</ConnectText>
                </ConnectBtnWrapper>
              </ConnectBtnDiv>
              <ConnectModalTitle>Create Wallet</ConnectModalTitle>
              <CreateWalletDiv>
                <CreateWalletInput
                  placeholder='E-mail'
                  // onChange={(e) => {
                  //   setEmail(e.target.value)
                  // }}
                />
                <CheckDiv>
                  <Image src={Tick} alt='check' onClick={(e) => connectWallet(4)} />
                </CheckDiv>
              </CreateWalletDiv>
              <MagicImgWrapper>
                <Image src={MagicLogo} alt='magiclink' />
              </MagicImgWrapper>
              <FooterText>
                By selecting one of the options you are agree to our Terms of Service and Privacy
                Policy
              </FooterText>
            </ConnectContainer>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
