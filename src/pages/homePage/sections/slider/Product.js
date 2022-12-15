import React from 'react'
import styled from 'styled-components'
import { useGetProductsQuery } from '../../../../features/products/productsApiSlice'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../../features/carts/cartSlice'
import { useNavigate } from 'react-router-dom'

const Wrapper = styled.div`
  min-width: 80vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(${(props) => props.slideIndex * -80}vw);
  transition: 1s ease;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`
const InfoContainer = styled.div``

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80%;
`

const Image = styled.img`
  display: flex;
  width: 100%;
  object-fit: contain;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1em;
`
const Title = styled.h1`
  font-weight: 300;
  font-size: 5em;
  text-transform: capitalize;
`
const Desc = styled.p`
  font-weight: 300;
  font-size: 1.3em;
  text-transform: capitalize;
`
const Button = styled.button`
  border: 1px solid lightgrey;
  border-radius: 1em;
  background-color: orange;
  color: white;
  width: 10em;
  height: 3em;
  margin-top: 1em;
  font-size: 1em;
  text-transform: uppercase;
  cursor: pointer;
`

const Product = ({ productId, slideIndex }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { product, isLoading, isSuccess } = useGetProductsQuery('products', {
    selectFromResult: ({ data, isLoading, isSuccess }) => ({
      product: data?.entities[productId],
      isLoading,
      isSuccess,
    }),
  })

  const onBuyClicked = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        image: product.img,
        price: product.price,
      })
    )
    navigate('/checkout')
  }
  let content

  if (isLoading) {
    content = <p>loading...</p>
  }
  if (isSuccess) {
    content = (
      <Wrapper key={product.id} slideIndex={slideIndex}>
        <Left>
          <ImageContainer>
            <Image src={product.img} />
          </ImageContainer>
        </Left>
        <Right>
          <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>{product.desc}</Desc>
            <Button onClick={onBuyClicked}>buy now</Button>
          </InfoContainer>
        </Right>
      </Wrapper>
    )
  }

  return content
}

export default Product
