import React from 'react'
import Chart from '../adminComponents/Chart'
import Counter from '../adminComponents/Counter'
import styled from 'styled-components'
import Users from '../adminComponents/Users'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-left: 13%;
  margin-top: 5%;
`

const AdminHomePage = () => {
  return (
    <Container>
      <Counter />
      <Chart />
      <Users />
    </Container>
  )
}

export default AdminHomePage
