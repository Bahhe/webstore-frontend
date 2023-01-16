import React from "react"
import ViewProduct from "./ViewProduct"
import styled from "styled-components"
import useTitle from "../../hooks/useTitle"
import { mobile } from "../../assests/globalStyles/responsive"

const Container = styled.div`
  margin: 10em 0 0 0;
  ${mobile({
    width: "80%",
  })}
`

const ProductView = () => {
  useTitle("TIMGAD. | Product")
  return (
    <Container>
      <ViewProduct />
    </Container>
  )
}

export default ProductView
