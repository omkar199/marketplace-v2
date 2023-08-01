'use client'

import { configureChains, createConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { bsc, mainnet } from 'wagmi/chains'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { MagicConnectConnector } from '@everipedia/wagmi-magic-connector'

// Magic Auth integration

const { chains, publicClient } = configureChains([bsc], [publicProvider()])

export const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains: [bsc, mainnet],
      options: {
        projectId: 'b9f8fbde90cba571883acc18bf119908',
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Binance Wallet',
        getProvider: () =>
          typeof window !== 'undefined' ? (window as any).BinanceChain : undefined,
      },
    }),
    new MagicConnectConnector({
      chains,
      options: {
        apiKey: 'pk_live_F7A7B0829340E34D', //required
      },
    }),
  ],
  publicClient,
})
