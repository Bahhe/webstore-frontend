import React from "react"
import AdminSideBar from "./AdminSideBar"
import styled from "styled-components"
import { Outlet } from "react-router-dom"

const Container = styled.main`
  width: 100%;
  height: 100%;
`
const Wrapper = styled.section`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AdminLayout = () => {
  return (
    <Container>
      <AdminSideBar />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </Container>
  )
}

export default AdminLayout
