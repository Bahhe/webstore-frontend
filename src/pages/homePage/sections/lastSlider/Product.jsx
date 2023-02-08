import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { useGetProductsQuery } from '../../../../features/products/productsApiSlice'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../../features/carts/cartSlice'
import { useNavigate } from 'react-router-dom'
import { StarBorder } from '@mui/icons-material'
import Spinner from '../../../../components/Spinner'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import {
  LinksWrapper,
  Links,
  LinksContainer,
  Container,
  ImgContainer,
  Title,
  Price,
  StarsContainer,
} from './product.styles'

const Product = ({ productId }) => {
  const navigate = useNavigate()
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
    content = <Spinner color="black" />
  }
  if (isSuccess) {
    content = (
      <Container>
        <ImgContainer>
          <LazyLoadImage
            onClick={() => navigate(`/shop/product/${product.id}`)}
            width="95%"
            src={product.img}
            effect="blur"
          />
          <LinksContainer>
            <LinksWrapper>
              <Links onClick={handleClick}>
                <ShoppingCartOutlinedIcon style={{ fontSize: '1.6em' }} />
              </Links>
              <Links onClick={() => navigate(`/shop/product/${product.id}`)}>
                <SearchIcon style={{ fontSize: '1.6em' }} />
              </Links>
            </LinksWrapper>
          </LinksContainer>
        </ImgContainer>
        <Title onClick={() => navigate(`/shop/product/${product.id}`)}>
          {product.title}
        </Title>
        <StarsContainer>
          <StarBorder style={{ fontSize: '1em', color: 'orange' }} />
          <StarBorder style={{ fontSize: '1em', color: 'orange' }} />
          <StarBorder style={{ fontSize: '1em', color: 'orange' }} />
          <StarBorder style={{ fontSize: '1em', color: 'orange' }} />
          <StarBorder style={{ fontSize: '1em', color: 'orange' }} />
        </StarsContainer>
        <Price>{product.price} DA</Price>
      </Container>
    )
  }

  return content
}

export default Product
