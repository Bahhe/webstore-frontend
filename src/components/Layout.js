import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"
import styled from "styled-components"
import ScrollToTopButton from "./ScrollToTopButton"

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
      <ScrollToTopButton />
    </>
  )
}

export default Layout
