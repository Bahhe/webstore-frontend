import StarOutlinedIcon from '@mui/icons-material/StarOutlined'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import { Link } from 'react-router-dom'
import { useGetProductsQuery } from '../../features/products/productsApiSlice'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/carts/cartSlice'

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
const Container = styled.div`
  margin: 2em 2em 0 0;
  width: 22em;
  height: 30em;
  &:hover ${LinksContainer} {
    opacity: 1;
    transform: translateY(0);
    z-index: 2;
  }
`
const ProductContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ImageSection = styled.div`
  position: relative;
  width: 100%;
  height: 70%;
`
const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.02);
  cursor: pointer;
`
const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.div`
  margin: 1em 0;
  text-transform: capitalize;
  cursor: pointer;
  &:hover {
    color: orange;
  }
`
const StarsSection = styled.div``
const Stars = styled.div``
const Price = styled.div`
  margin: 1em 0;
  font-size: 1.4em;
  color: orange;
`

const Products = ({ productId }) => {
  const dispatch = useDispatch()

  const { product, isLoading } = useGetProductsQuery('products', {
    selectFromResult: ({ data, isLoading }) => ({
      product: data?.entities[productId],
      isLoading,
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

  if (isLoading) return <p>loading...</p>

  return (
    <Container>
      <ProductContainer>
        <ImageSection>
          <Image src={product.img} />
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
        </ImageSection>
        <InfoSection>
          <Title>{product.title}</Title>
          <StarsSection>
            <Stars>
              <StarOutlinedIcon style={{ fontSize: '1em', color: 'orange' }} />
              <StarOutlinedIcon style={{ fontSize: '1em', color: 'orange' }} />
              <StarOutlinedIcon style={{ fontSize: '1em', color: 'orange' }} />
              <StarOutlinedIcon style={{ fontSize: '1em', color: 'orange' }} />
              <StarOutlinedIcon style={{ fontSize: '1em', color: 'orange' }} />
            </Stars>
          </StarsSection>
          <Price>{product.price}</Price>
        </InfoSection>
      </ProductContainer>
    </Container>
  )
}

export default Products
