import React from "react"
import styled from "styled-components"
import { mobile } from "../../../assests/globalStyles/responsive"

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 25em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  ${mobile({ display: "none" })}
`
const ImgOne = styled.img`
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  object-fit: cover;
  cursor: pointer;
  width: 50%;
  border-radius: 1em;
  height: 90%;
  &:hover {
    opacity: 0.8;
  }
  ${mobile({ width: "100%" })}
`

const ImgTwo = styled.img`
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  object-fit: cover;
  cursor: pointer;
  width: 50%;
  border-radius: 1em;
  height: 90%;
  &:hover {
    opacity: 0.8;
  }
  ${mobile({ width: "100%" })}
`

const DoubleProduct = () => {
  return (
    <Container>
      <ImgOne src="https://firebasestorage.googleapis.com/v0/b/webstore-d48be.appspot.com/o/doubleProductOne.webp?alt=media&token=15b54d60-d68e-49bf-8da1-4bad7b8d6855" />
      <ImgTwo src="https://firebasestorage.googleapis.com/v0/b/webstore-d48be.appspot.com/o/doubleProductTwo.webp?alt=media&token=0f44b67c-2145-42bb-92a2-f2042d8d6d0e" />
    </Container>
  )
}

export default DoubleProduct
