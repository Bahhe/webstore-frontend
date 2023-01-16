import React from 'react'
import styled from 'styled-components'
import ShoppingCart from './ShoppingCart'

const Container = styled.div`
  margin: 10em 0 0 0;
`

const Cart = () => {
  return (
    <Container>
      <ShoppingCart />
    </Container>
  )
}

export default Cart
