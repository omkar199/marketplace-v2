import { convertWeiToEth } from '@/utils/converter'

export const calculateReturnFromGraphData = <T extends object>(graphData: T[], value: keyof T) => {
  let dayReturn = 0

  if (graphData.length > 0) {
    const oldGraphRateWei = graphData[0][value]
    const latestGraphRateWei = graphData[graphData.length - 1][value]

    const oldRate = +convertWeiToEth(oldGraphRateWei)
    const latestRate = +convertWeiToEth(latestGraphRateWei)

    if (oldRate !== 0) {
      dayReturn = ((latestRate - oldRate) / oldRate) * 100
    }
  }

  return dayReturn
}
