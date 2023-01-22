import React from "react"
import styled from "styled-components"
import { mobile } from "../../assests/globalStyles/responsive"
import ShoppingCart from "./ShoppingCart"

const Container = styled.div`
  padding: 10em 0;
  width: 80%;
  margin: 0 auto;
  ${mobile({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })}
`

const Cart = () => {
  return (
    <Container>
      <ShoppingCart />
    </Container>
  )
}

export default Cart
