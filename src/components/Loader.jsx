import React from "react"
import styled from "styled-components"
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader"


const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  z-index: 999;
`

const Loader = ({ color }) => {
  return (
    <Container>
      <ClimbingBoxLoader color={color} />
    </Container>
  )
}

export default Loader
