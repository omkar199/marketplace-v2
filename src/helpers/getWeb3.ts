import Web3 from 'web3'
import IndexSwap from '../constant/abi/indexSwap.json'
import OffChainIndexSwap from '../constant/abi/offChainIndexSwap.json'
import TokenRegAbi from '../constant/abi/tokenReg.json'
import Erc20Abi from '../constant/abi/erc20.json'
import { convertWeiToEth } from '@/utils/converter'
const web3 = new Web3('https://bscrpc.com')

export const getBalance = async (account: string) => {
  try {
    let balance: any = await web3.eth.getBalance(account)
    const result = web3.utils.fromWei(balance, 'ether')
    console.log(result, 'result')

    return result
  } catch (e) {
    console.log(e, 'error')
  }
}

export const getPorfolioTokenList = async (portfolioAddress: string) => {
  try {
    const ContractInstance = new web3.eth.Contract(IndexSwap.abi as [], portfolioAddress)
    const listOfToken = await ContractInstance.methods.getTokens().call()
    return listOfToken
  } catch (e) {
    const err = e as Error
    throw new Error(err.message)
  }
}
export const checkIfPortfolioPaused = async (portfolioAddress: string) => {
  try {
    const ContractInstance = new web3.eth.Contract(IndexSwap.abi as [], portfolioAddress)
    const isPaused = await ContractInstance.methods.paused().call()
    console.log(isPaused, 'p')

    return isPaused
  } catch (e) {
    const err = e as Error
    throw new Error(err.message)
  }
}
export const checkPrimary = async (tokenRegAddress: string, tokenAddress: string, address: any) => {
  try {
    const TokenRegContractInstance: any = new web3.eth.Contract(
      TokenRegAbi.abi as [],
      tokenRegAddress,
    )
    let checkState
    console.log(TokenRegContractInstance, TokenRegAbi, 'check', tokenAddress)

    const tokenCheck = await TokenRegContractInstance.methods
      .getTokenInformation(tokenAddress)
      .call({
        from: address,
        gas: '800000',
      })
    console.log(tokenCheck, 'tokenCheck')

    if (tokenCheck?.primary) {
      checkState = true
    } else {
      checkState = false
    }

    return checkState
  } catch (e) {
    console.log(e)
  }
}
export const checkInvestment = async (portfolioAddress: string, account: string | undefined) => {
  try {
    const ContractInstance = await new web3.eth.Contract(IndexSwap.abi as [], portfolioAddress)

    const contractData = await ContractInstance.methods.balanceOf(account).call()

    return web3.utils.fromWei(contractData, 'ether')
  } catch (error) {
    console.log(error)
  }
}
export const getTokenBalance = async (
  address: string,

  userAddress: string | undefined,
) => {
  try {
    console.log(address, 'address', userAddress)

    const Erc20Instance = new web3.eth.Contract(Erc20Abi.abi as [], address)
    console.log(Erc20Instance, 'web3')
    const decimal = await Erc20Instance.methods.decimals().call()
    console.log(decimal)

    const buyAmount = await Erc20Instance.methods.balanceOf(userAddress).call()
    console.log(buyAmount)
    return convertWeiToEth(buyAmount)
  } catch (e) {
    console.log(e)
  }
}
