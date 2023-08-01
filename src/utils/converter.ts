import { utils } from 'ethers'

export const convertWeiToEth = (value: string) => {
  try {
    const valueInETH = utils.formatEther(value)

    return valueInETH
  } catch (e) {
    const err = e as Error
    throw new Error(`failed convertWeiToEth ${err.message}`)
  }
}

export const convertToDecimal = (amount: string, decimal: string) => {
  try {
    const _amount = !amount ? '0' : amount
    return utils.parseUnits(_amount, decimal).toString()
  } catch (e) {
    console.log(e)
  }
}
