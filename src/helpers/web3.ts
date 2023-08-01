import Web3 from 'web3'
import IndexSwap from '../constant/abi/indexSwap.json'
import OffChainIndexSwap from '../constant/abi/offChainIndexSwap.json'
import Erc20Abi from '../constant/abi/erc20.json'
import qs from 'qs'
import { SwapHandlerAddress, WBNB, oXAddress } from '@/constant/contract'
import { apiHeader, apiUrl } from '@/api/Url'
import axios from 'axios'

export const DepositPortfolio = async (
  amount: string,
  portfolioAddress: string,
  newArray: string[],
  slippagelp: string[],
  tokenDetails: any,
  toAddress: string,
  behalf: boolean,
  dispatch: any = null,
  details: any = null,
  provider: any,
  buyTokenValue: any,
  setIsProcessModalVisible: any,
  setIsSuccessErrorModalVisible: any,
  setSuccessOrErrorState: any,
) => {
  try {
    const web3 = new Web3(provider)

    const account = await web3.eth.requestAccounts()
    const buyAddress = account[0]

    const ContractInstance = new web3.eth.Contract(IndexSwap?.abi as [], portfolioAddress)
    const Erc20Instance = new web3.eth.Contract(Erc20Abi?.abi as [], tokenDetails.address)
    let txHash: string
    if (tokenDetails.address.toLowerCase() !== WBNB.toLowerCase()) {
      await Erc20Instance.methods
        .approve(portfolioAddress, web3?.utils?.toWei(amount.toString(), 'ether'))
        .send({
          from: buyAddress,
          gas: '500000',
        })
    }
    const contractData = await ContractInstance.methods
      .investInFund({
        _slippage: newArray,
        _lpSlippage: slippagelp,
        _to: behalf ? toAddress : buyAddress,
        _tokenAmount: web3.utils.toWei(amount.toString(), 'ether'),
        _swapHandler: SwapHandlerAddress,
        _token: tokenDetails.address,
      })
      .send(
        tokenDetails.address.toLocaleLowerCase() === WBNB.toLowerCase()
          ? {
              value: web3.utils.toWei(amount.toString(), 'ether'),
              from: buyAddress,
              gas: 8000000,
            }
          : {
              from: buyAddress,
              gas: 8000000,
            },
      )
      .on('transactionHash', (data: any) => {
        console.log('transactionHash', data)
        txHash = data
      })
      .on('error', (error: any) => {
        console.log('error', error)
        setIsProcessModalVisible(false)
        setSuccessOrErrorState({
          tx: txHash,
          type: 'error',
          details: details,
          transactionType: 'deposit',
          amount: amount,
          tokenDetails: tokenDetails,
          buyTokenValue: buyTokenValue,
        })

        setIsSuccessErrorModalVisible(true)
      })
      .on('receipt', async (data: any) => {
        setIsProcessModalVisible(false)
        setSuccessOrErrorState({
          tx: txHash,
          type: 'success',
          details: details,
          transactionType: 'deposit',
          amount: amount,
          tokenDetails: tokenDetails,
          buyTokenValue: buyTokenValue,
        }),
          setIsSuccessErrorModalVisible(true)
      })

    return contractData
  } catch (error) {
    throw new Error((error as Error).message)
  }
}

export const WithdrawPortfolio = async (
  portfolioAddress: string,
  amount: string,
  isMultiAsset: boolean,
  newArray: string[],
  slippagelp: string[],
  dispatch: any,
  details: any,
  provider: any,
  tokenDetails: any,
  setIsProcessModalVisible: any,
  setIsSuccessErrorModalVisible: any,
  setSuccessOrErrorState: any,
) => {
  try {
    const web3 = new Web3(provider)
    const account = await web3.eth.requestAccounts()
    const buyAddress = account[0]
    console.log(
      web3.utils.toWei(amount.toString(), 'ether'),
      newArray,
      isMultiAsset,
      SwapHandlerAddress,
      '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    )
    const ContractInstance = await new web3.eth.Contract(IndexSwap.abi as [], portfolioAddress)
    console.log({
      tokenAmount: web3.utils.toWei(amount.toString(), 'ether'),
      _slippage: newArray,
      _lpSlippage: slippagelp,
      isMultiAsset: isMultiAsset,
      _swapHandler: SwapHandlerAddress,
      _token: WBNB,
    })
    let txHash: string
    const contractData = await ContractInstance.methods
      .withdrawFund({
        tokenAmount: web3.utils.toWei(amount.toString(), 'ether'),
        _slippage: newArray,
        _lpSlippage: slippagelp,
        isMultiAsset: isMultiAsset,
        _swapHandler: SwapHandlerAddress,
        _token: WBNB,
      })
      .send({
        from: buyAddress,
        gas: '8000000',
      })
      .on('transactionHash', (data: any) => {
        console.log('transactionHash', data)
        txHash = data
      })
      .on('error', (error: any) => {
        console.log('error', error)
        setIsProcessModalVisible(false)
        setSuccessOrErrorState({
          tx: txHash,
          type: 'error',
          details: details,
          transactionType: 'withdraw',
          amount: amount,
          tokenDetails: tokenDetails,
          buyTokenValue: amount,
        })
        setIsSuccessErrorModalVisible(true)
      })
      .on('receipt', async (data: any) => {
        setIsProcessModalVisible(false)
        setSuccessOrErrorState({
          tx: txHash,
          type: 'success',
          details: details,
          transactionType: 'withdraw',
          amount: amount,
          tokenDetails: tokenDetails,
          buyTokenValue: amount,
        }),
          setIsSuccessErrorModalVisible(true)
      })

    return contractData
  } catch (error) {
    return error
  }
}

export const investZeroX = async (
  indexSwapAddress: string,
  offChainAddress: string,
  tokenRegAddress: string,
  tokenDetails: any,
  data: string,
  slippagelp: string[],
  toAddress: string,
  behalf: boolean,
  dispatch: any = null,
  details: any = null,
  amount = '',
  provider: any,
  buyTokenValue: any,
  normalSlippage: any,
  setIsProcessModalVisible: any,
  setIsSuccessErrorModalVisible: any,
  setSuccessOrErrorState: any,
) => {
  try {
    const web3 = new Web3(provider)
    const OffChainContractInstance = await new web3.eth.Contract(
      OffChainIndexSwap.abi as [],
      offChainAddress,
    )

    const account = await web3.eth.requestAccounts()
    const address = account[0]

    const params = {
      indexSwapAddress: indexSwapAddress,
      offChainIndexAddress: offChainAddress,
      sellTokenAddress: tokenDetails.address,
      investmentAmount: web3.utils.toWei(data, 'ether'),
      slippage: normalSlippage !== '' ? (parseFloat(normalSlippage) / 100).toString() : '0.02',
    }

    const response = await axios.get(
      `${apiUrl}api/v2/offChain/investment?${qs.stringify(params)}`,
      { headers: apiHeader },
    )

    const Erc20Instance = new web3.eth.Contract(Erc20Abi.abi as [], tokenDetails.address)
    let txHash: string
    if (tokenDetails.address.toLowerCase() !== WBNB.toLowerCase()) {
      await Erc20Instance.methods
        .approve(offChainAddress, web3.utils.toWei(amount.toString(), 'ether'))
        .send({
          from: address,
          gas: '500000',
        })
    }

    const fund = await OffChainContractInstance.methods
      .investInFundOffChain(
        {
          sellTokenAddress: tokenDetails.address,
          _buyToken: response.data.data.buyUnderlyingTokensContract,
          buyAmount: response.data.data.buyTokenAmountContract,
          // swapHandler: SwapHandlerAddress,
          protocolFee: response.data.data.protocolFee,
          _buySwapData: response.data.data.buyTokenSwapData,
          _offChainHandler: oXAddress,
        },
        web3.utils.toWei(data.toString(), 'ether'),
        slippagelp,
        behalf ? toAddress : address,
      )
      .send(
        tokenDetails.address.toLocaleLowerCase() === WBNB.toLowerCase()
          ? {
              value: web3.utils.toWei(data.toString(), 'ether'),
              from: address,
              gas: '8000000',
            }
          : {
              from: address,
              gas: '8000000',
            },
      )
      .on('transactionHash', (data: any) => {
        console.log('transactionHash', data)
        txHash = data
      })
      .on('error', (error: any) => {
        console.log('error', error)
        setIsProcessModalVisible(false)
        setSuccessOrErrorState({
          tx: txHash,
          type: 'error',
          details: details,
          transactionType: 'deposit',
          amount: amount,
          tokenDetails: tokenDetails,
          buyTokenValue: buyTokenValue,
        })

        setIsSuccessErrorModalVisible(true)
      })
      .on('receipt', async (data: any) => {
        console.log(data)
        setIsProcessModalVisible(false)
        setSuccessOrErrorState({
          tx: txHash,
          type: 'success',
          details: details,
          transactionType: 'deposit',
          amount: amount,
          tokenDetails: tokenDetails,
          buyTokenValue: buyTokenValue,
        }),
          setIsSuccessErrorModalVisible(true)
      })

    return fund
  } catch (e) {
    throw new Error((e as Error).message)
  }
}

export const withdrawZerox = async (
  indexSwapAddress: string,
  offChainAddress: string,
  tokenRegAddress: string,
  wbnb: string,
  slippagelp: string[],
  amount: string,
  dispatch: any,
  details: any,
  provider: any,
  tokenDetails: any,
  normalSlippage: any,
  setIsProcessModalVisible: any,
  setIsSuccessErrorModalVisible: any,
  setSuccessOrErrorState: any,
) => {
  try {
    const web3 = new Web3(provider)
    const OffChainContractInstance = await new web3.eth.Contract(
      OffChainIndexSwap.abi as [],
      offChainAddress,
    )
    const account = await web3.eth.requestAccounts()
    const address = account[0]

    // Mining the tx
    const sellAmount = await OffChainContractInstance.methods
      .redeemTokens({
        tokenAmount: web3.utils.toWei(amount.toString(), 'ether'),
        _lpSlippage: slippagelp,
        token: wbnb,
      })
      .send({
        from: address,
        gas: '8000000',
      })

    const params = {
      offChainIndexAddress: offChainAddress,
      withdrawTokenAddress: WBNB,
      userAddress: address,
      slippage: normalSlippage !== '' ? (parseFloat(normalSlippage) / 100).toString() : '0.02',
    }

    const response = await axios.get(
      `${apiUrl}api/v2/offchain/withdrawal/nonPrimary?${qs?.stringify(params)}`,
      { headers: apiHeader },
    )
    let txHash: string
    const fund = await OffChainContractInstance.methods
      .withdrawOffChain({
        sellTokenAddress: response.data.data.sellTokensContract,
        sellAmount: response.data.data.sellTokenAmountContract,
        protocolFee: response.data.data.protocolFee,
        buySwapData: response.data.data.sellTokenSwapData,
        offChainHandler: oXAddress,
      })
      .send({
        from: address,
        gas: '8000000',
      })
      .on('transactionHash', (data: any) => {
        console.log('transactionHash', data)
        txHash = data
      })
      .on('error', (error: any) => {
        console.log('error', error)
        setIsProcessModalVisible(false)
        setSuccessOrErrorState({
          tx: txHash,
          type: 'error',
          details: details,
          transactionType: 'withdraw',
          amount: amount,
          tokenDetails: tokenDetails,
          buyTokenValue: amount,
        })
        setIsSuccessErrorModalVisible(true)
      })
      .on('receipt', async (data: any) => {
        setIsProcessModalVisible(false)
        setSuccessOrErrorState({
          tx: txHash,
          type: 'success',
          details: details,
          transactionType: 'withdraw',
          amount: amount,
          tokenDetails: tokenDetails,
          buyTokenValue: amount,
        }),
          setIsSuccessErrorModalVisible(true)
      })
  } catch (e) {
    console.log(e)
  }
}
export const withdrawZeroxPrimary = async (
  indexSwapAddress: string,
  offChainAddress: string,
  tokenRegAddress: string,
  wbnb: string,
  slippagelp: string[],
  amount: string,
  dispatch: any,
  details: any,
  provider: any,
  tokenDetails: any,
  normalSlippage: any,
  setIsProcessModalVisible: any,
  setIsSuccessErrorModalVisible: any,
  setSuccessOrErrorState: any,
) => {
  try {
    const web3 = new Web3(provider)
    const account = await web3.eth.requestAccounts()
    const address = account[0]

    const OffChainContractInstance = await new web3.eth.Contract(
      OffChainIndexSwap.abi as [],
      offChainAddress,
    )
    const params = {
      indexSwapAddress: indexSwapAddress,
      offChainIndexAddress: offChainAddress,
      withdrawTokenAddress: WBNB,
      withdrawAmount: web3.utils.toWei(amount.toString(), 'ether'),
      slippage: normalSlippage !== '' ? (parseFloat(normalSlippage) / 100).toString() : '0.02',
    }
    const response = await axios.get(
      `${apiUrl}api/v2/offchain/withdrawal/primary?${qs.stringify(params)}`,
      { headers: apiHeader },
    )

    let txHash = await OffChainContractInstance.methods
      .withdraw({
        tokenAmount: web3.utils.toWei(amount.toString(), 'ether'),
        buyToken: WBNB,
        sellAmount: response.data.data.sellTokenAmountContract,
        protocolFee: response.data.data.protocolFee,
        buySwapData: response.data.data.sellTokenSwapData,
        offChainHandler: oXAddress,
      })
      .send({
        from: address,
        gas: '8000000',
      })
      .on('transactionHash', (data: any) => {
        console.log('transactionHash', data)
        txHash = data
      })
      .on('error', (error: any) => {
        console.log('error', error)
        setIsProcessModalVisible(false)
        setSuccessOrErrorState({
          tx: txHash,
          type: 'error',
          details: details,
          transactionType: 'withdraw',
          amount: amount,
          tokenDetails: tokenDetails,
          buyTokenValue: amount,
        })
        setIsSuccessErrorModalVisible(true)
      })
      .on('receipt', async (data: any) => {
        setIsProcessModalVisible(false)
        setSuccessOrErrorState({
          tx: txHash,
          type: 'success',
          details: details,
          transactionType: 'withdraw',
          amount: amount,
          tokenDetails: tokenDetails,
          buyTokenValue: amount,
        }),
          setIsSuccessErrorModalVisible(true)
      })
  } catch (e) {
    console.log(e)
  }
}
