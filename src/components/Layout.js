import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import styled from 'styled-components'

const Container = styled.div`
  width: 80%;
  margin: auto;
`

const Layout = () => {
  return (
    <>
      <Container>
        <NavBar />
        <Outlet />
      </Container>
      <Footer />
    </>
  )
}

export default Layout
