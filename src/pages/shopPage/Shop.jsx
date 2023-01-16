import React from "react"
import styled from "styled-components"
import NavigationBar from "./NavigationBar"
import ShopSection from "./ShopSection"

const Container = styled.div`
  margin: 10em 0 0 0;
`

const Shop = () => {
  return (
    <Container>
      <NavigationBar />
      <ShopSection />
    </Container>
  )
}

export default Shop
