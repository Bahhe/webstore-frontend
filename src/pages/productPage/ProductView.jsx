import React from "react"
import ViewProduct from "./ViewProduct"
import styled from "styled-components"
import useTitle from "../../hooks/useTitle"

const Container = styled.div`
  padding: 10em 0;
  width: 80%;
  margin: 0 auto;
`

const ProductView = () => {
  useTitle("BlackBeard. | Product")
  return (
    <Container>
      <ViewProduct />
    </Container>
  )
}

export default ProductView
