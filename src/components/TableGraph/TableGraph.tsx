import { AreaChart, XAxis, YAxis, Area, ResponsiveContainer } from 'recharts'

interface Props<T extends object> {
  graphData: T[]
  datakey: keyof T
  stokeColor: string
}

export default function TableGraph<T extends object>({ graphData, datakey, stokeColor }: Props<T>) {
  return (
    <ResponsiveContainer>
      <AreaChart data={graphData}>
        <XAxis dataKey='date' hide />
        <YAxis hide domain={['dataMin - 5000000000000000000', 'dataMax + 5000000000000000000']} />
        <Area
          type='monotone'
          dataKey={datakey as string}
          stroke={stokeColor}
          strokeWidth='1.7px'
          fillOpacity='1'
          fill='#ffffff'
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
