import React from "react"
import AdminSideBar from "./AdminSideBar"
import styled from "styled-components"
import { Outlet } from "react-router-dom"
import Footer from "../../../components/Footer"
import { laptop } from "../../../assests/globalStyles/responsive"

const Container = styled.main`
  width: 100%;
`
const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  ${laptop({
    width: "100%",
  })}
`
const Pages = styled.div`
  display: flex;
`

const AdminLayout = () => {
  return (
    <Container>
      <Wrapper>
        <Pages>
          <AdminSideBar />
          <Outlet />
        </Pages>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default AdminLayout
