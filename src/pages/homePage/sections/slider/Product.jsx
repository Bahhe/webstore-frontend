import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useGetProductsQuery } from '../../../../features/products/productsApiSlice'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../../features/carts/cartSlice'
import { useNavigate } from 'react-router-dom'
import { mobile } from '../../../../assests/globalStyles/responsive'
import 'swiper/css/lazy'

const Wrapper = styled.div`
  min-width: 80vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(${(props) => props.slideIndex * -80}vw);
  transition: 0.5s ease-in-out;
  ${mobile({
    flexDirection: 'column',
  })}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`
const InfoContainer = styled.div`
  width: 80%;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 70%;
  ${mobile({
    width: '90%',
  })}
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
`
const Title = styled.h1`
  font-weight: 800;
  font-size: 4em;
  text-transform: uppercase;
  color: white;
  cursor: pointer;
  margin: 1em 0;
  ${mobile({
    fontSize: '1.6em',
  })}
`
const Desc = styled.p`
  width: 30ch;
  font-weight: 400;
  font-size: 1.4em;
  text-transform: uppercase;
  word-spacing: 0.4em;
  color: #ffffffbc;
  ${mobile({
    width: '100%',
    fontSize: '.9em',
  })}
`

const glowing = keyframes`
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  `

const Button = styled.button`
  text-transform: uppercase;
  margin: 2em 0;
  width: 220px;
  height: 50px;
  border: none;
  outline: none;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    width: 220px;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
  }
  &:before {
    content: '';
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: ${glowing} 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }
  &:active {
    color: #000;
  }
  &:active:after {
    background: transparent;
  }
  &:hover:before {
    opacity: 1;
  }
  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
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
          <Image data-src={product && product.img} className="swiper-lazy" />
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
