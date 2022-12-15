import React from 'react'
import styled from 'styled-components'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 100, pv: 3200, amt: 2900 },
  { name: 'Page C', uv: 300, pv: 1111, amt: 1102 },
  { name: 'Page D', uv: 200, pv: 1400, amt: 2300 },
]

const Container = styled.div`
  border-radius: 1em;
  box-shadow: 2px 6px 5px 3px rgba(0, 0, 0, 0.15);
  padding: 1em;
  margin: 1em;
`
const Title = styled.div`
  margin: 1em;
  font-size: 1em;
  font-weight: 500;
  text-transform: capitalize;
`

const Chart = () => {
  return (
    <Container>
      <Title>sales analytics</Title>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  )
}

export default Chart
