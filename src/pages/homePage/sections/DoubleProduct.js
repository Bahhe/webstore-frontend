import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 25em;
  display: flex;
  align-items: center;
  justify-content: center;
`
const ImgOne = styled.img`
  object-fit: cover;
  cursor: pointer;
  width: 50%;
  height: 100%;
  &:hover {
    opacity: 0.8;
  }
`

const ImgTwo = styled.img`
  object-fit: cover;
  cursor: pointer;
  width: 50%;
  height: 100%;
  &:hover {
    opacity: 0.8;
  }
`

const DoubleProduct = () => {
  return (
    <Container>
      <ImgOne src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
      <ImgTwo src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2096&q=80" />
    </Container>
  )
}

export default DoubleProduct
