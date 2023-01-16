import styled from "styled-components"
import SearchIcon from "@mui/icons-material/Search"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addToCart } from "../../features/carts/cartSlice"
import { StarBorder } from "@mui/icons-material"
import PulseLoader from "react-spinners/PulseLoader"

const LinksContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  opacity: 0;
  transition: 0.5s ease-in-out;
  transform: translateY(15%);
  z-index: -1;
`

const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  background-color: white;
  border-radius: 1em;
  box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.2);
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
    transform: translateY(-10%);
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
  width: 20em;
  height: 26em;
`
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* background-color: rgba(0, 0, 0, 0.02); */
  background-image: radial-gradient(
    circle 879px at 10.4% 22.3%,
    rgba(255, 235, 238, 1) 0%,
    rgba(186, 190, 245, 1) 93.6%
  );
  border-radius: 1em;
`

const Image = styled.img`
  object-fit: contain;
  width: 90%;
  height: 100%;
  cursor: pointer;
`
const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.div`
  font-weight: 300;
  opacity: 0.7;
  letter-spacing: 0.1em;
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
  margin: 1.5em 0;
  color: red;
`

const Products = ({ product }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
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
  if (!product) {
    return <PulseLoader />
  }

  return (
    <Container>
      <ProductContainer>
        <ImageSection>
          <ImageContainer>
            <Image
              onClick={() => navigate(`/shop/product/${product.id}`)}
              src={product.img}
            />
          </ImageContainer>
          <LinksContainer>
            <LinksWrapper>
              <Links onClick={handleClick}>
                <ShoppingCartOutlinedIcon style={{ fontSize: "1.6em" }} />
              </Links>
              <Links onClick={() => navigate(`/shop/product/${product.id}`)}>
                <SearchIcon style={{ fontSize: "1.6em" }} />
              </Links>
            </LinksWrapper>
          </LinksContainer>
        </ImageSection>
        <InfoSection>
          <Title onClick={() => navigate(`/shop/product/${product.id}`)}>
            {product.title}
          </Title>
          <StarsSection>
            <Stars>
              <StarBorder style={{ fontSize: "1em", color: "orange" }} />
              <StarBorder style={{ fontSize: "1em", color: "orange" }} />
              <StarBorder style={{ fontSize: "1em", color: "orange" }} />
              <StarBorder style={{ fontSize: "1em", color: "orange" }} />
              <StarBorder style={{ fontSize: "1em", color: "orange" }} />
            </Stars>
          </StarsSection>
          <Price>${product.price}</Price>
        </InfoSection>
      </ProductContainer>
    </Container>
  )
}
// }

export default Products
