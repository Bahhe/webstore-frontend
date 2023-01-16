import React from "react"
import styled from "styled-components"
import { laptop } from "../../../../assests/globalStyles/responsive"
import useTitle from "../../../../hooks/useTitle"
import Users from "./HomePageContent"

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  ${laptop({
    width: "auto",
  })}
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
