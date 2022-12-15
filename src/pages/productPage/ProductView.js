import React from 'react'
import ViewProduct from './ViewProduct'
import styled from 'styled-components'

const Container = styled.div`
  margin: 10em 0 0 0;
`

const ProductView = () => {
  return (
    <Container>
      <ViewProduct />
    </Container>
  )
}

export default ProductView
