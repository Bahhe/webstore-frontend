import React from "react"
import RegisterSection from "./RegisterSection"
import styled from "styled-components"

const Container = styled.main`
  margin: 10em 0 0 0;
`

const Register = () => {
  return (
    <Container>
      <RegisterSection />
    </Container>
  )
}

export default Register
