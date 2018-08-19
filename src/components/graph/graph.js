import React from 'react'
import './_graph.scss'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import graphColors from '../../pages/partials/_graph-colors'

class Graph extends React.Component {
  state = {
    data: [
      { name: 'Jan', uv: 65, pv: 49, amt: 2400 },
      { name: 'Feb', uv: 60, pv: 49, amt: 2210 },
      { name: 'Mar', uv: 40, pv: 60, amt: 2290 },
      { name: 'Apr', uv: 50, pv: 40, amt: 2000 },
      { name: 'May', uv: 36, pv: 58, amt: 2181 },
      { name: 'Jun', uv: 25, pv: 38, amt: 2500 },
      { name: 'Jul', uv: 40, pv: 30, amt: 2100 }
    ]
  }

  render() {
    return (
      <div className="graph__container">
        <ResponsiveContainer>
          <AreaChart
            width={700}
            height={225}
            data={this.state.data}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
          >
            <XAxis dataKey="name" />
            <YAxis domain={[20, 70]} ticks={[20, 30, 40, 50, 60, 70]} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              name="Movie 1"
              stroke={graphColors.color1}
              fillOpacity={0.7}
              fill={graphColors.color1}
            />
            <Area
              type="monotone"
              dataKey="pv"
              name="Movie 2"
              stroke={graphColors.color2}
              fillOpacity={0.5}
              fill={graphColors.color2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default Graph
