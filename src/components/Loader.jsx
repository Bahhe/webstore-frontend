import React from "react"
import styled from "styled-components"
import PulseLoader from "react-spinners/PulseLoader"

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  /* filter: blur(8px); */
  z-index: 999;
`

const Loader = ({ color }) => {
  return (
    <Container>
      <PulseLoader color={color} />
    </Container>
  )
}

export default Loader
