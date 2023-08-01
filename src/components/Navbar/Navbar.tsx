'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SnackbarProvider } from 'notistack'
import { usePathname } from 'next/navigation'
import { useAccount, useDisconnect } from 'wagmi'
import {
  ConnectBtn,
  DetailsHeading,
  DetailsInnerDiv,
  DetailsValue,
  Header,
  ImageDiv,
  Li,
  NavMain,
  ReferFriendImgDiv,
  Ul,
  UserDetailsDiv,
} from './Navbar.style'

import ConnectModal from '@/modal/ConnectModal/ConnectModal'

import ReferFriend from '@/assets/logo/ReferFriend.svg'
import VelvetLogo from '@/assets/brand/VelvetLogo.svg'
import Link1 from '@/assets/logo/Vector.svg'
import Link2 from '@/assets/logo/Vector1.svg'
import Link3 from '@/assets/logo/Vector3.svg'
import Link4 from '@/assets/logo/Vector4.svg'
import Link5 from '@/assets/logo/Vector5.svg'
import { formatAddress } from '@/helpers/helper'

export default function Navbar() {
  const [connetWalletVisible, setConnetWalletVisible] = useState(false)
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()
  const pathname = usePathname()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <Header>
      <NavMain>
        <ImageDiv>
          <Image src={VelvetLogo} alt='velvet_logo' />
        </ImageDiv>
        <Ul>
          <Li isActive={pathname === '/'}>
            <Link href='/'>
              <Image
                src={pathname === '/' ? Link4 : Link1}
                alt='velvet_logo'
                style={{ margin: 'auto 5px' }}
              />{' '}
              Marketplace
            </Link>
          </Li>
          <Li
            isActive={pathname === '/my_vault'}
            style={{ opacity: '0.2' }}
            onClick={() => alert('Coming Soon!')}
          >
            {/* <Link href='/my_vault'> */}
            <Image
              src={pathname === '/my_vault' ? Link5 : Link2}
              alt='velvet_logo'
              style={{ margin: 'auto 5px' }}
            />{' '}
            My Vaults
            {/* </Link> */}
          </Li>
          <Li isActive={pathname === '/Create | Manage'}>
            <Image src={Link3} alt='velvet_logo' style={{ margin: 'auto 5px' }} />
            <a href='https://velvet-capital.github.io/V2-Frontend' target='_blank'>
              Create | Manage
            </a>
          </Li>
        </Ul>
        <ReferFriendImgDiv>
          <Image src={ReferFriend} alt='Refer_Friend' />
        </ReferFriendImgDiv>
      </NavMain>
      <UserDetailsDiv>
        {/* <DetailsInnerDiv>
          <DetailsHeading>Value</DetailsHeading>
          <DetailsValue>$50000</DetailsValue>
        </DetailsInnerDiv>
        <DetailsInnerDiv>
          <DetailsHeading>Return</DetailsHeading>
          <DetailsValue>+$50</DetailsValue>
        </DetailsInnerDiv> */}
        {isClient ? (
          <ConnectBtn onClick={() => (isConnected ? disconnect() : setConnetWalletVisible(true))}>
            {isConnected ? formatAddress(address) : 'Connect Wallet'}
          </ConnectBtn>
        ) : (
          <ConnectBtn onClick={() => setConnetWalletVisible(true)}>Connect Wallet</ConnectBtn>
        )}

        {/* <ConnectBtn onClick={() => setConnetWalletVisible(true)}>Connect Wallet</ConnectBtn> */}
        {/* {!isConnected ? ( */}
        {/* <ConnectBtn onClick={() => disconnect()}>{address}</ConnectBtn> */}
        {/* <ConnectBtn onClick={() => setConnetWalletVisible(true)}>Connect Wallet</ConnectBtn> */}
        {/* ) : null} */}
      </UserDetailsDiv>
      <ConnectModal active={connetWalletVisible} setActive={setConnetWalletVisible} />
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      />
    </Header>
  )
}
