import React from 'react'
import styled from 'styled-components'

const ProductContainer = styled.div`
  padding: 1em;
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const ProductInfo = styled.div`
  display: flex;
`
const Image = styled.img`
  width: 10em;
  object-fit: contain;
`
const ProductPrice = styled.div``
const ProductTitle = styled.div`
  margin: 0 0 0 1em;
  font-weight: 500;
  text-transform: capitalize;
`

const Product = ({ title, price, image }) => {
  const content = (
    <ProductContainer>
      <ProductInfo>
        <Image src={image} />
        <ProductTitle>{title}</ProductTitle>
      </ProductInfo>
      <ProductPrice>${price}</ProductPrice>
    </ProductContainer>
  )

  return content
}

export default Product
