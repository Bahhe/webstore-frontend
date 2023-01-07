import React from "react"
import LoginSection from "./LoginSection"
import styled from "styled-components"

const Container = styled.main`
  margin: 10em 0 0 0;
`

const Login = () => {
  return (
    <Container>
      <LoginSection />
    </Container>
  )
}

export default Login
