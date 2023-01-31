import React from 'react'
import styled from 'styled-components'
import { useGetProductsQuery } from '../../../features/products/productsApiSlice'
import Spinner from '../../../components/Spinner'

const ProductContainer = styled.div`
  padding: 1em;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.055);
  margin: 1em 0;
  box-shadow: 0 0 30px #ccc;
  border-radius: 1em;
`
const ProductInfo = styled.div`
  display: flex;
`
const Image = styled.img`
  width: 10em;
  object-fit: contain;
`
const ProductPrice = styled.div`
  margin: 1em 0 0 1em;
`

const ProductTitle = styled.div`
  margin: 0 0 0 1em;
  font-weight: 500;
  text-transform: capitalize;
`
const InfoSection = styled.div``

const OrderProduct = ({ productId }) => {
  const { product, isLoading } = useGetProductsQuery('products', {
    selectFromResult: ({ data, isLoading, isSuccess }) => ({
      product: data?.entities[productId],
      isLoading,
      isSuccess,
    }),
  })
  let content
  if (isLoading) {
    content = <Spinner />
  }
  if (!product) {
    content = <p>no product found</p>
  }
  content = (
    <ProductInfo>
      <Image src={product.img} />
      <InfoSection>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice>${product.price}</ProductPrice>
      </InfoSection>
    </ProductInfo>
  )

  return <ProductContainer>{content}</ProductContainer>
}

export default OrderProduct
