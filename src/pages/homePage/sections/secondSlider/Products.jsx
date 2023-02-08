import React from 'react'
import CheckIcon from '@mui/icons-material/Check'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useGetProductsQuery } from '../../../../features/products/productsApiSlice'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../../features/carts/cartSlice'
import Spinner from '../../../../components/Spinner'
import {
  Content,
  ImgContainer,
  InfoContainer,
  Title,
  Points,
  Price,
  BtnsContainer,
  AddToCart,
  ShopNow,
} from './Products.styles'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { data } from './data'

const Slide = styled.div`
  min-width: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}%);
  transition: 0.3s ease-in-out;
`

const Products = ({ productId }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { product, isLoading, isSuccess } = useGetProductsQuery('products', {
    selectFromResult: ({ data, isLoading, isSuccess }) => ({
      product: data?.entities[productId],
      isLoading,
      isSuccess,
    }),
  })

  const onAddToCartClicked = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        image: product.img,
        price: product.price,
      })
    )
  }

  const onShopNowClicked = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        image: product.img,
        price: product.price,
      })
    )
    navigate(`/checkout`)
  }

  let content
  if (isLoading) {
    content = <Spinner color="white" />
  }
  if (isSuccess) {
    content = (
      <Slide>
        <Content key={product.id}>
          <ImgContainer onClick={() => navigate(`/shop/product/${product.id}`)}>
            <LazyLoadImage width="100%" src={product.img} effect="blur" />
          </ImgContainer>
          <InfoContainer>
            <Title onClick={() => navigate(`/shop/product/${product.id}`)}>
              {product.title}
            </Title>
            {data.map((item) => (
              <Points>
                <CheckIcon
                  style={{
                    display: 'flex',
                    width: '1em',
                    height: '1em',
                    borderRadius: '50%',
                    margin: '0 .5em 0 0',
                  }}
                />
                <span
                  style={{
                    textTransform: 'uppercase',
                    fontWeight: '400',
                  }}
                >
                  {item}:{' '}
                </span>
                <span
                  style={{
                    margin: '0 0 0 1em',
                    fontWeight: '400',
                  }}
                >
                  {product[item]}
                </span>
              </Points>
            ))}
            <Price>{product.price} DA</Price>
            <BtnsContainer>
              <AddToCart onClick={onAddToCartClicked}>add to cart</AddToCart>
              <ShopNow onClick={onShopNowClicked}>shop now</ShopNow>
            </BtnsContainer>
          </InfoContainer>
        </Content>
      </Slide>
    )
  }

  return content
}

export default Products
