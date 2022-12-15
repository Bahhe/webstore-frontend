import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import StarIcon from '@mui/icons-material/Star'
import 'swiper/css'
import 'swiper/css/free-mode'
import { useGetProductsQuery } from '../../../../features/products/productsApiSlice'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../../features/carts/cartSlice'
import { Link } from 'react-router-dom'

const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: white;
`

const Links = styled.div`
  margin: 0.5em 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
const LinksContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  opacity: 0;
  transition: 0.5s ease;
  transform: translateY(15%);
  z-index: -1;
`
const Container = styled.div`
  width: 20em;
  height: 30em;
  margin: 1em;
  &:hover ${LinksContainer} {
    opacity: 1;
    transform: translateY(0);
    z-index: 2;
  }
`
const ImgContainer = styled.div`
  width: 100%;
  height: 60%;
  background-color: rgba(0, 0, 0, 0.05);
  position: relative;
`
const Img = styled.img`
  border-radius: 1em;
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
`
const Title = styled.div`
  text-transform: capitalize;
  font-size: 1em;
  text-align: center;
  margin: 2em 0 1em 0;
  cursor: pointer;
  &:hover {
    color: orange;
  }
`
const Price = styled.div`
  text-align: center;
  opacity: 0.9;
  color: orange;
`
const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1em 0;
`

const Product = ({ productId }) => {
  const dispatch = useDispatch()
  const { product, isLoading, isSuccess } = useGetProductsQuery('products', {
    selectFromResult: ({ data, isLoading, isSuccess }) => ({
      product: data?.entities[productId],
      isLoading,
      isSuccess,
    }),
  })

  const handleClick = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        image: product.img,
        price: product.price,
      })
    )
  }

  let content
  if (isLoading) {
    content = <p>loading...</p>
  }
  if (isSuccess) {
    content = (
      <Container>
        <ImgContainer>
          <Img src={product.img} />
          <LinksContainer>
            <LinksWrapper>
              <Links onClick={handleClick}>
                <ShoppingCartOutlinedIcon style={{ fontSize: '1.6em' }} />
              </Links>
              <Links>
                <Link to={`/shop/product/${product.id}`}>
                  <SearchIcon style={{ fontSize: '1.6em' }} />
                </Link>
              </Links>
              <Links>
                <FavoriteBorderOutlinedIcon style={{ fontSize: '1.6em' }} />
              </Links>
            </LinksWrapper>
          </LinksContainer>
        </ImgContainer>
        <Title>{product.title}</Title>
        <StarsContainer>
          <StarIcon style={{ fontSize: '1em', color: 'orange' }} />
          <StarIcon style={{ fontSize: '1em', color: 'orange' }} />
          <StarIcon style={{ fontSize: '1em', color: 'orange' }} />
          <StarIcon style={{ fontSize: '1em', color: 'orange' }} />
          <StarIcon style={{ fontSize: '1em', color: 'orange' }} />
        </StarsContainer>
        <Price>{product.price}</Price>
      </Container>
    )
  }

  return content
}

export default Product
