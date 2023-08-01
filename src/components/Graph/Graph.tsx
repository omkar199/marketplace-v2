import {
  AreaChart,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  Area,
  ResponsiveContainer,
} from 'recharts'

import { formatMonthToString } from '@/utils/formatMonth'
import { convertWeiToEth } from '@/utils/converter'

interface Props<T extends object> {
  graphData: T[]
  datakey: keyof T
}

export default function Graph<T extends object>({ graphData, datakey }: Props<T>) {
  return (
    <ResponsiveContainer>
      <AreaChart
        data={graphData}
        margin={{
          right: 2,
          top: 5,
        }}
      >
        <defs>
          <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='10%' stopColor='#7e77dd' />
            <stop offset='100%' stopColor='#f5f5f5' />
          </linearGradient>
        </defs>
        <XAxis dataKey='date' hide />
        <YAxis hide domain={['dataMin - 5000000000000000000', 'dataMax + 5000000000000000000']} />
        <RechartsTooltip content={<CustomTooltip displayKey={datakey as string} />} />
        <Area
          type='monotone'
          dataKey={datakey as string}
          stroke='#564dd0'
          strokeWidth='1.7px'
          fillOpacity='1'
          fill='url(#colorUv)'
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

interface CustomTooltipProps {
  active?: boolean
  payload?: any
  displayKey: string
}

function CustomTooltip({ active, payload, displayKey }: CustomTooltipProps) {
  if (active && payload && payload.length > 0) {
    const displayData = payload[0]?.payload?.[displayKey]

    const date = `${new Date(payload[0]?.payload?.createdAt).getUTCDate()} ${formatMonthToString(
      new Date(payload[0]?.payload?.createdAt).getUTCMonth() + 1,
    )}`
    const time = `${new Date(payload[0]?.payload?.createdAt).getUTCHours()}:${new Date(
      payload[0]?.payload?.createdAt,
    ).getUTCMinutes()}`

    return (
      <div className='custom-tooltip'>
        <p className='custom-tooltip-label'>Rate: ${(+convertWeiToEth(displayData)).toFixed(2)}</p>
        <p className='custom-tooltip-intro'>Time : {time} (UTC)</p>
        <p className='custom-tooltip-intro'>Date : {date}</p>
      </div>
    )
  }

  return null
}
