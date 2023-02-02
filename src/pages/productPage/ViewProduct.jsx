import React, { useState } from "react"
import styled from "styled-components"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined"
import { useGetProductByIdQuery } from "../../features/products/productsApiSlice"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addToCart } from "../../features/carts/cartSlice"
import { mobile } from "../../assests/globalStyles/responsive"
import Loader from "../../components/Loader"
import CloseIcon from "@mui/icons-material/Close"

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  gap: 2em;
  ${mobile({
    flexDirection: "column",
  })}
`
const InfoSection = styled.div`
  flex: 1;
  padding: 3em;
  border: 1px solid lightgrey;
  border-radius: 50px;
`
const ImageSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.02);
  border: 1px solid lightgrey;
  border-radius: 50px;
  cursor: pointer;
`

const Image = styled.img`
  width: 90%;
  height: 90%;
  object-fit: contain;
  cursor: pointer;
`
const Title = styled.div`
  font-size: 1.5em;
  text-transform: capitalize;
  font-weight: 500;
  opacity: 0.8;
`
const Price = styled.div`
  font-size: 1.3em;
  color: red;
  margin: 0.5em 0 2em 0;
`
const Desc = styled.div`
  font-size: 0.9em;
  letter-spacing: 0.15em;
  color: rgba(0, 0, 0, 0.5);
`
const ButtonContainer = styled.div`
  margin: 3em 0;
  display: flex;
  align-items: center;
  ${mobile({
    flexDirection: "column",
  })}
`
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  width: 10em;
  height: 2.5em;
  border: none;
  font-size: 1.1em;
  font-weight: 300;
  color: white;
  text-transform: uppercase;
  margin: 0 1em 0 0;
  cursor: pointer;
`
const ProductDetails = styled.div``
const Detail = styled.div`
  font-weight: 500;
  text-transform: uppercase;
  margin: 0 1em 0 0;
  opacity: 0.6;
`
const DetailContent = styled.div`
  font-weight: 500;
  text-transform: uppercase;
  opacity: 0.8;
`
const InStock = styled.div`
  color: red;
  text-transform: capitalize;
  font-size: 1.2em;
  margin: 1em 0;
`
const Wrapper = styled.div`
  display: flex;
`
const PopUpImageContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.7);
`
const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Img = styled.img`
  max-height: 80%;
  max-width: 80%;
`

const ViewProduct = () => {
  const [showImage, setShowImage] = useState(false)
  const { userId } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { product, isLoading } = useGetProductByIdQuery("getProductById", {
    selectFromResult: ({ data, isLoading }) => ({
      product: data?.entities[userId],
      isLoading,
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
  const onBuyClicked = () => {
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

  if (isLoading) return <Loader />

  if (!product) return <p>product not found</p>

  return (
    <Container>
      {showImage && (
        <PopUpImageContainer onClick={() => setShowImage((prev) => !prev)}>
          <CloseIcon
            style={{
              position: "absolute",
              top: "100px",
              right: "200px",
              color: "white",
              backgroundColor: "black",
              zIndex: "100",
              fontSize: "3em",
              cursor: "pointer",
            }}
          />
          <ImageWrapper>
            <Img src={product.img} alt={product.title} />
          </ImageWrapper>
        </PopUpImageContainer>
      )}
      <ImageSection onClick={() => setShowImage((prev) => !prev)}>
        <Image src={product.img} alt={product.title} />
      </ImageSection>
      <InfoSection>
        <Title>{product.title}</Title>
        <Price>{product.price} DA</Price>
        <Desc>{product.desc}</Desc>
        <InStock>{product.inStock ? "In stock." : "Out of stock"}</InStock>
        <ButtonContainer>
          <Button onClick={onAddToCartClicked}>
            <ShoppingCartOutlinedIcon style={{ margin: "0 .7em 0 0" }} />
            add to cart
          </Button>
          <Button onClick={onBuyClicked} style={{ backgroundColor: "orange" }}>
            <LocalMallOutlinedIcon style={{ margin: "0 .7em 0 0" }} />
            buy now
          </Button>
        </ButtonContainer>
        <ProductDetails>
          <Title style={{ margin: "1em 0" }}>product details:</Title>
          <Wrapper>
            <Detail>cpu:</Detail>
            <DetailContent>{product.cpu}</DetailContent>
          </Wrapper>
          <Wrapper>
            <Detail>ram:</Detail>
            <DetailContent>{product.ram}</DetailContent>
          </Wrapper>
          <Wrapper>
            <Detail>storage:</Detail>
            <DetailContent>{product.storage}</DetailContent>
          </Wrapper>
          <Wrapper>
            <Detail>display:</Detail>
            <DetailContent>{product.display}</DetailContent>
          </Wrapper>
          <Wrapper>
            <Detail>graphics card:</Detail>
            <DetailContent>{product.vga}</DetailContent>
          </Wrapper>
        </ProductDetails>
      </InfoSection>
    </Container>
  )
}

export default ViewProduct
