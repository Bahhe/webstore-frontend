import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.03);
`
const Separation = styled.div`
  opacity: 0.5;
`
const Location = styled.div`
  margin: 1em 1em;
  font-size: .8em;
  text-transform: capitalize;
`

const NavigationBar = () => {
  return (
    <Container>
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
        <Location style={{ opacity: '.5' }}>home</Location>
      </Link>
      <Separation>/</Separation>
      <Link to="/shop" style={{ textDecoration: 'none', color: 'black' }}>
        <Location>shop</Location>
      </Link>
    </Container>
  )
}

export default NavigationBar
