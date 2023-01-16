import React from "react"
import CheckIcon from "@mui/icons-material/Check"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useGetProductsQuery } from "../../../../features/products/productsApiSlice"
import { useDispatch } from "react-redux"
import { addToCart } from "../../../../features/carts/cartSlice"
import { mobile } from "../../../../assests/globalStyles/responsive"
import Spinner from "../../../../components/Spinner"

const Slide = styled.div`
  min-width: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}%);
  transition: 0.3s ease-in-out;
`

const Content = styled.div`
  min-width: 100%;
  display: flex;
  align-items: center;
  gap: 5em;
  ${mobile({
    flexDirection: "column",
  })}
`
const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 50%;
  ${mobile({
    width: "100%",
    marginTop: "1em",
  })}
`
const Img = styled.img`
  width: 70%;
  object-fit: contain;
`
const InfoContainer = styled.div`
  width: 50%;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 5em;
  ${mobile({
    width: "85%",
    margin: "0",
  })}
`
const Title = styled.div`
  font-size: 2em;
  text-transform: capitalize;
  margin: 0 0 1em 0;
  cursor: pointer;
  color: #f4fffd;
`
const Points = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9em;
  opacity: 0.8;
  margin: 0 0 0.5em 0;
  color: white;
`
const Price = styled.div`
  font-size: 1.7em;
  margin: 1em 0 1em 0;
  color: #f7f7ff;
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
  background-color: #2e282a;
  color: white;
  border-radius: 0.5em;
  &:hover {
    background-color: white;
    color: #2e282a;
  }
  cursor: pointer;
  transition: 0.3s ease-in-out;
`
const ShopNow = styled.div`
  text-transform: capitalize;
  text-align: center;
  width: 10em;
  height: 3em;
  padding: 1em;
  background-color: white;
  border-radius: 0.5em;
  &:hover {
    background-color: #2e282a;
    color: white;
  }
  cursor: pointer;
  transition: 0.3s ease-in-out;
`

const Products = ({ productId, slideIndex }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { product, isLoading, isSuccess } = useGetProductsQuery("products", {
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
      <Slide slideIndex={slideIndex}>
        <Content key={product.id}>
          <ImgContainer onClick={() => navigate(`/shop/product/${product.id}`)}>
            <Img src={product.img} />
          </ImgContainer>
          <InfoContainer>
            <Title onClick={() => navigate(`/shop/product/${product.id}`)}>
              {product.title}
            </Title>
            <Points>
              <CheckIcon
                style={{
                  display: "flex",
                  width: "1em",
                  height: "1em",
                  borderRadius: "50%",
                  margin: "0 .5em 0 0",
                }}
              />
              <span
                style={{
                  textTransform: "uppercase",
                  fontWeight: "400",
                }}
              >
                cpu:{" "}
              </span>
              <span
                style={{
                  textTransform: "capitalize",
                  margin: "0 0 0 1em",
                  fontWeight: "400",
                }}
              >
                {product.cpu}
              </span>
            </Points>
            <Points>
              <CheckIcon
                style={{
                  display: "flex",
                  width: "1em",
                  height: "1em",
                  borderRadius: "50%",
                  margin: "0 .5em 0 0",
                }}
              />
              <span
                style={{
                  textTransform: "uppercase",
                  fontWeight: "400",
                }}
              >
                ram:{" "}
              </span>
              <span
                style={{
                  textTransform: "capitalize",
                  margin: "0 0 0 1em",
                  fontWeight: "400",
                }}
              >
                {product.display}
              </span>
            </Points>
            <Points>
              <CheckIcon
                style={{
                  display: "flex",
                  width: "1em",
                  height: "1em",
                  borderRadius: "50%",
                  margin: "0 .5em 0 0",
                }}
              />
              <span
                style={{
                  textTransform: "uppercase",
                  fontWeight: "400",
                }}
              >
                hard drive:{" "}
              </span>
              <span
                style={{
                  textTransform: "capitalize",
                  margin: "0 0 0 1em",
                  fontWeight: "400",
                }}
              >
                {product.storage}
              </span>
            </Points>
            <Points>
              <CheckIcon
                style={{
                  display: "flex",
                  width: "1em",
                  height: "1em",
                  borderRadius: "50%",
                  margin: "0 .5em 0 0",
                }}
              />
              <span
                style={{
                  textTransform: "uppercase",
                  fontWeight: "400",
                }}
              >
                display:{" "}
              </span>
              <span
                style={{
                  textTransform: "capitalize",
                  margin: "0 0 0 1em",
                  fontWeight: "400",
                }}
              >
                {product.ram}
              </span>
            </Points>
            <Points>
              <CheckIcon
                style={{
                  display: "flex",
                  width: "1em",
                  height: "1em",
                  borderRadius: "50%",
                  margin: "0 .5em 0 0",
                }}
              />
              <span
                style={{
                  textTransform: "uppercase",
                  fontWeight: "400",
                }}
              >
                vga:{" "}
              </span>
              <span
                style={{
                  textTransform: "capitalize",
                  margin: "0 0 0 1em",
                  fontWeight: "400",
                }}
              >
                {product.vga}
              </span>
            </Points>
            <Price>${product.price}</Price>
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
