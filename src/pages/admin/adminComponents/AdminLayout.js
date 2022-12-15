import React from 'react'
import AdminNavBar from './AdminNavBar'
import AdminSideBar from './AdminSideBar'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`
const Pages = styled.div`
  display: flex;
`

const AdminLayout = () => {
  return (
    <Container>
      <AdminNavBar />
      <Pages>
        <AdminSideBar />
        <Outlet />
      </Pages>
    </Container>
  )
}

export default AdminLayout
