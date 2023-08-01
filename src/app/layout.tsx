import '@/styles/globals.css'

import { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'V2 Frontend | Marketplace',
  description: 'Velvet Capital V2 Frontend Marketplace',
}
import dynamic from 'next/dynamic'

// const Navbar = dynamic(() => import('@/components/Navbar/Navbar'), { ssr: false })

import Navbar from '@/components/Navbar/Navbar'

import StyledComponentsRegistry from '@/libs/styledComponents'
import { WagmiConfig } from 'wagmi'
import { config } from '@/config/connectWallet'
import { GlobleProvider } from '@/store/globle'
import InvestmentModal from '@/modal/investment/InvestmentModal'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className} suppressHydrationWarning={true}>
        <GlobleProvider>
          <WagmiConfig config={config}>
            <StyledComponentsRegistry>
              <Navbar />
              {children}
            </StyledComponentsRegistry>
          </WagmiConfig>
        </GlobleProvider>
      </body>
    </html>
  )
}
