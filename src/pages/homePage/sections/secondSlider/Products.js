import React from 'react'
import CheckIcon from '@mui/icons-material/Check'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { useGetProductsQuery } from '../../../../features/products/productsApiSlice'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../../features/carts/cartSlice'

const Slide = styled.div`
  min-width: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}%);
  transition: 1s ease-in-out;
`

const Content = styled.div`
  min-width: 100%;
  display: flex;
  align-items: center;
  padding: 4em;
  gap: 5em;
`
const ImgContainer = styled.div`
  width: 50%;
`
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`
const InfoContainer = styled.div`
  width: 50%;
  flex: 1;
`
const Title = styled.div`
  font-size: 2em;
  text-transform: capitalize;
  margin: 0 0 1em 0;
`
const Points = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9em;
  opacity: 0.9;
  margin: 0 0 0.5em 0;
`
const Price = styled.div`
  font-size: 1.7em;
  margin: 1em 0 1em 0;
  color: orange;
`
const BtnsContainer = styled.div`
  display: flex;
`
const AddToCart = styled.div`
  text-transform: capitalize;
  text-align: center;
  width: 10em;
  height: 3em;
  padding: 1em;
  margin: 0 0.3em 0 0;
  background-color: black;
  color: white;
  border-radius: 0.5em;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  cursor: pointer;
  transition: 0.5s ease-in-out;
`
const ShopNow = styled.div`
  text-transform: capitalize;
  text-align: center;
  width: 10em;
  height: 3em;
  padding: 1em;
  background-color: white;
  border: 1px solid black;
  border-radius: 0.5em;
  &:hover {
    background-color: black;
    color: white;
  }
  cursor: pointer;
  transition: 0.5s ease-in-out;
`

const Products = ({ productId, slideIndex }) => {
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
    content = <p>loading...</p>
  }
  if (isSuccess) {
    content = (
      <Slide slideIndex={slideIndex}>
        <Content key={product.id}>
          <ImgContainer>
            <Img src={product.img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{product.title}</Title>
            <Points>
              <CheckIcon
                style={{
                  display: 'flex',
                  width: '1em',
                  height: '1em',
                  borderRadius: '50%',
                  color: 'orange',
                  margin: '0 .5em 0 0',
                }}
              />
              <span style={{ textTransform: 'uppercase' }}>cpu: </span>
              {product.cpu}
            </Points>
            <Points>
              <CheckIcon
                style={{
                  display: 'flex',
                  width: '1em',
                  height: '1em',
                  borderRadius: '50%',
                  color: 'orange',
                  margin: '0 .5em 0 0',
                }}
              />
              <span style={{ textTransform: 'uppercase' }}>ram: </span>
              {product.display}
            </Points>
            <Points>
              <CheckIcon
                style={{
                  display: 'flex',
                  width: '1em',
                  height: '1em',
                  borderRadius: '50%',
                  color: 'orange',
                  margin: '0 .5em 0 0',
                }}
              />
              <span style={{ textTransform: 'uppercase' }}>hard drive: </span>
              {product.hardDrive}
            </Points>
            <Points>
              <CheckIcon
                style={{
                  display: 'flex',
                  width: '1em',
                  height: '1em',
                  borderRadius: '50%',
                  color: 'orange',
                  margin: '0 .5em 0 0',
                }}
              />
              <span style={{ textTransform: 'uppercase' }}>display: </span>
              {product.ram}
            </Points>
            <Points>
              <CheckIcon
                style={{
                  display: 'flex',
                  width: '1em',
                  height: '1em',
                  borderRadius: '50%',
                  color: 'orange',
                  margin: '0 .5em 0 0',
                }}
              />
              <span style={{ textTransform: 'uppercase' }}>vga: </span>
              {product.vga}
            </Points>
            <Price>${product.price}</Price>
            <BtnsContainer>
              <AddToCart onClick={onAddToCartClicked}>add to cart</AddToCart>
              <ShopNow onClick={onShopNowClicked}>
                <Link to="/checkout">shop now</Link>
              </ShopNow>
            </BtnsContainer>
          </InfoContainer>
        </Content>
      </Slide>
    )
  }

  return content
}

export default Products
