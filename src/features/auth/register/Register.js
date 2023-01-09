import React from "react"
import RegisterSection from "./RegisterSection"
import styled from "styled-components"

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
`

const Register = () => {
  return (
    <Container>
      <RegisterSection />
    </Container>
  )
}

export default Register
