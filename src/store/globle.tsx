'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

export type GlobleType = {
  isInvestmentModalVisible: boolean
  setIsInvestmentModalVisible: () => void
  invesmentDetails: any
}

export type GlobleContext = {
  isInvestmentModalVisible: boolean
  setIsInvestmentModalVisible: any
  invesmentDetails: any
  setInvesmentDetails: any
  setProcessType: any
  usdValue: any
  setUsdValue: any
  bnbRate: any
  setbnbRate: any
  fundRate: any
  setfundRate: any
  isProcessModalVisible: boolean
  setIsProcessModalVisible: any
  processType: any
  isSuccessErrorModalVisible: boolean
  setIsSuccessErrorModalVisible: any
  SuccessOrErrorState: {
    tx: string
    type: string
    transactionType: string
    details: any
    amount: string
    tokenDetails: any
    buyTokenValue: any
  }
  setSuccessOrErrorState: any
}

export const globleContext = createContext<GlobleContext | null>(null)

export function GlobleProvider({ children }: { children: ReactNode }) {
  const [isInvestmentModalVisible, setIsInvestmentModalVisible] = useState<boolean>(false)
  const [invesmentDetails, setInvesmentDetails] = useState()
  const [isProcessModalVisible, setIsProcessModalVisible] = useState(false)
  const [fundRate, setfundRate] = useState('')
  const [bnbRate, setbnbRate] = useState('')
  const [usdValue, setUsdValue] = useState('')
  const [isSuccessErrorModalVisible, setIsSuccessErrorModalVisible] = useState(false)
  const [SuccessOrErrorState, setSuccessOrErrorState] = useState({
    tx: '',
    type: '',
    transactionType: '',
    details: '',
    amount: '',
    tokenDetails: '',
    buyTokenValue: '',
  })
  const [processType, setProcessType] = useState({
    transactionType: '',
    amount: '',
    details: null,
    tokenDetails: '',
    buyTokenValue: '',
  })
  return (
    // @ts-ignore
    <globleContext.Provider
      value={{
        isInvestmentModalVisible,
        setIsInvestmentModalVisible,
        invesmentDetails,
        setInvesmentDetails,
        setProcessType,
        processType,
        usdValue,
        setUsdValue,
        bnbRate,
        setbnbRate,
        fundRate,
        setfundRate,
        isProcessModalVisible,
        setIsProcessModalVisible,
        isSuccessErrorModalVisible,
        setIsSuccessErrorModalVisible,
        SuccessOrErrorState,
        setSuccessOrErrorState,
      }}
    >
      {children}
    </globleContext.Provider>
  )
}

export function useGlobleContext() {
  const globleContextValue = useContext(globleContext)
  if (!globleContextValue) {
    throw new Error('useContext used outside of Provider')
  }

  return globleContextValue
}
