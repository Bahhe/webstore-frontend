import React from "react"
import styled from "styled-components"
import useTitle from "../../../../hooks/useTitle"
import Users from "./HomePageContent"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

const AdminHomePage = () => {
  useTitle("TIMGAD | Admin")
  return (
    <Container>
      <Users />
    </Container>
  )
}

export default AdminHomePage
