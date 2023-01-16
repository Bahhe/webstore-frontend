import React from "react"
import styled from "styled-components"
import RotateLoader from "react-spinners/RotateLoader"

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Spinner = ({ color }) => {
  return (
    <Container>
      <RotateLoader color={color} />
    </Container>
  )
}

export default Spinner
