import React from "react"
import LoginSection from "./LoginSection"
import styled from "styled-components"

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

const Login = () => {
  return (
    <Container>
      <LoginSection />
    </Container>
  )
}

export default Login
