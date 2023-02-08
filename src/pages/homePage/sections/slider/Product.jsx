import React from 'react'
import styled from 'styled-components'
import { useGetProductsQuery } from '../../../../features/products/productsApiSlice'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../../features/carts/cartSlice'
import { useNavigate } from 'react-router-dom'
import { tablet } from '../../../../assests/globalStyles/responsive'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import {
  Left,
  InfoContainer,
  ImageContainer,
  Right,
  Title,
  Desc,
  Button,
} from './product.styles'

const Wrapper = styled.div`
  min-width: 80vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${tablet({
    flexDirection: 'column',
  })}
`

const Product = ({ productId }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { product } = useGetProductsQuery('products', {
    selectFromResult: ({ data }) => ({
      product: data?.entities[productId],
    }),
  })

  const onBuyClicked = () => {
    if (product) {
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
  }

  let content

  content = (
    <Wrapper key={product && product.id}>
      <Left>
        <ImageContainer
          onClick={() => navigate(`/shop/product/${product && product.id}`)}
        >
          <LazyLoadImage
            src={product && product.img}
            width="100%"
            effect="blur"
          />
        </ImageContainer>
      </Left>
      <Right>
        <InfoContainer>
          <Title
            onClick={() => navigate(`/shop/product/${product && product.id}`)}
          >
            {product && product.title}
          </Title>
          <Desc>{product && product.desc}</Desc>
          <Button onClick={onBuyClicked}>buy now</Button>
        </InfoContainer>
      </Right>
    </Wrapper>
  )
  return content
}

export default Product
