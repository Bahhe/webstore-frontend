import React from "react"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { useState } from "react"
import { useGetProductsQuery } from "../../../../features/products/productsApiSlice"
import Products from "./Products"

import styled from "styled-components"
import { mobile } from "../../../../assests/globalStyles/responsive"
import Spinner from "../../../../components/Spinner"

const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0);
  width: 5em;
  height: 5em;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "1em"};
  right: ${(props) => props.direction === "right" && "1em"};
  margin: auto;
  border-radius: 50%;
  position: absolute;
  cursor: pointer;
  transition: 0.5s ease;
  z-index: 3;
  opacity: 0.2;
  visibility: hidden;
  &:hover {
    opacity: 1;
  }
  ${mobile({
    opacity: (props) => (props.direction === "left" ? "0" : "1"),
    visibility: (props) => (props.direction === "left" ? "hidden" : "visible"),
    backgroundColor: "white",
    width: "3em",
    height: "3em",
  })}
`

const Container = styled.div`
  /* background-color: rgba(0, 0, 0, 0.01); */
  background: linear-gradient(to right, #f857a6, #ff5858);
  box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.2);
  border-radius: 1em;
  overflow: hidden;
  width: 100%;
  display: flex;
  margin: 0 0 5em 0;
  padding: 2em 0;
  align-items: center;
  justify-content: center;
  position: relative;
  &:hover ${Arrow} {
    visibility: visible;
  }
  ${mobile({
    width: "80%",
  })}
`

const SlideContainer = styled.div`
  width: 100%;
  display: flex;
`

const SecondSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0)

  const {
    data: products,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetProductsQuery("products")
  let sliderContent
  let filteredIds
  let dataLength

  if (isLoading) {
    sliderContent = <Spinner color="black" />
  }
  if (isError) {
    sliderContent = <p>{error?.data?.message}</p>
  }
  if (isSuccess) {
    const { ids, entities } = products

    filteredIds =
      ids?.length &&
      ids.filter((productId) =>
        entities[productId].section.includes("secondSlider")
      )
    dataLength = filteredIds?.length && filteredIds.length - 1

    sliderContent =
      filteredIds?.length &&
      filteredIds.map((productId) => (
        <Products
          key={productId}
          productId={productId}
          slideIndex={slideIndex}
        />
      ))
  }

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : dataLength)
    } else {
      setSlideIndex(slideIndex < dataLength ? slideIndex + 1 : 0)
    }
  }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIcon style={{ fontSize: "1.5em" }} />
      </Arrow>
      <SlideContainer>{sliderContent}</SlideContainer>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIcon style={{ fontSize: "1.5em" }} />
      </Arrow>
    </Container>
  )
}

export default SecondSlider
