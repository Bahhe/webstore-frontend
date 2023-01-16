import React from "react"
import styled from "styled-components"
import { mobile } from "../../assests/globalStyles/responsive"
import ShoppingCart from "./ShoppingCart"

const Container = styled.div`
  margin: 10em 0 0 0;
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
