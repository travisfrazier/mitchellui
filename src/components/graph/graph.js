import React from 'react'
import './_graph.scss'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { name: 'Jan', uv: 65, pv: 49, amt: 2400 },
  { name: 'Feb', uv: 60, pv: 49, amt: 2210 },
  { name: 'Mar', uv: 40, pv: 60, amt: 2290 },
  { name: 'Apr', uv: 50, pv: 40, amt: 2000 },
  { name: 'May', uv: 36, pv: 58, amt: 2181 },
  { name: 'Jun', uv: 25, pv: 38, amt: 2500 },
  { name: 'Jul', uv: 40, pv: 30, amt: 2100 },
]

export class Graph extends React.Component {
  render() {
    return (
      <ResponsiveContainer>
        <AreaChart
          width={700}
          height={225}
          data={data}
          margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis domain={[20, 70]} ticks={[20, 30, 40, 50, 60, 70]} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            name="Movie 1"
            stroke="#adadad"
            fillOpacity={1}
            fill="#adadadc7"
          />
          <Area
            type="monotone"
            dataKey="pv"
            name="Movie 2"
            stroke="#209787"
            fillOpacity={1}
            fill="#209787a2"
          />
        </AreaChart>
      </ResponsiveContainer>
    )
  }
}
