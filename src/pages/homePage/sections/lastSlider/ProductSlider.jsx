import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Lazy } from "swiper"
import "swiper/css"
import styled from "styled-components"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { useGetProductsQuery } from "../../../../features/products/productsApiSlice"
import Product from "./Product"
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
  transform: translateX(
    ${(props) => (props.direction === "right" ? "6" : "-6")}em
  );
  margin: auto;
  border-radius: 50%;
  position: absolute;
  cursor: pointer;
  transition: 0.5s ease;
  z-index: 2;
  opacity: 0.2;
  visibility: hidden;
  &:hover {
    opacity: 1;
  }
  ${mobile({
    visibility: "visible",
    opacity: "1",
    transform: (props) =>
      props.direction === "right" ? `translateX(4em)` : `translateX(-4em)`,
  })}
`

const MainContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 30em;
  position: relative;
  &:hover ${Arrow} {
    visibility: ${(props) =>
      props.direction === "left" ? "visible" : "visible"};
  }
  ${mobile({
    width: "80%",
  })}
`

const ProductSlider = () => {
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery("products")

  let product
  if (isError) {
    product = <p>{error?.data?.message}</p>
  }
  if (isLoading) {
    product = <Spinner color="white" />
  }
  if (isSuccess) {
    const { ids } = products
    product =
      ids?.length &&
      ids.map((productId) => (
        <SwiperSlide key={productId}>
          <Product key={productId} productId={productId} />
        </SwiperSlide>
      ))
  }

  return (
    <MainContainer>
      <Arrow direction="left" className="image-swiper-button-prev">
        <ArrowBackIcon style={{ fontSize: "1.3em" }} />
      </Arrow>
      <Arrow direction="right" className="image-swiper-button-next">
        <ArrowForwardIcon style={{ fontSize: "1.3em" }} />
      </Arrow>
      <Swiper
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        modules={[Navigation, Lazy]}
        slidesPerView={1}
        spaceBetween={80}
        loop={true}
        lazy={true}
        breakpoints={{
          1600: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 3,
          },
          1180: {
            slidesPerView: 2,
          },
        }}
      >
        {product}
      </Swiper>
    </MainContainer>
  )
}

export default ProductSlider
