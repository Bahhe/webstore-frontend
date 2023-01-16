import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"
import styled from "styled-components"
import ScrollToTopButton from "./ScrollToTopButton"
import { mobile } from "../assests/globalStyles/responsive"

const Container = styled.div`
  width: 80%;
  margin: auto;
  ${mobile({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflowX: "hidden",
    width: "100%",
  })}
  
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
