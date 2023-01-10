import React from "react"
import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Navigation } from "swiper"
import "swiper/css"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { mobile } from "../../../assests/globalStyles/responsive"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20em;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  ${mobile({
    width: "80%",
  })}
`
const BrandsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10em;
`
const Brand = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 3em;
  font-weight: 700;
  font-style: italic;
  font-family: "Righteous", cursive;
  cursor: pointer;
  transition: 0.5s ease-out;
  &:hover {
    color: orange;
  }
`
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
  color: rgba(0, 0, 0, 0.5);
  &:hover {
    color: black;
  }
  ${mobile({
    transform: (props) =>
      props.direction === "right" ? "translateX(3em)" : "translateX(-3em)",
  })}
`

const Brands = () => {
  return (
    <Container>
      <Arrow direction="left" className="brands-swiper-button-prev">
        <ArrowBackIosIcon style={{ fontSize: "1em" }} />
      </Arrow>
      <Arrow direction="right" className="brands-swiper-button-next">
        <ArrowForwardIosIcon style={{ fontSize: "1em" }} />
      </Arrow>
      <Swiper
        navigation={{
          nextEl: ".brands-swiper-button-next",
          prevEl: ".brands-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        grabCursor={true}
        modules={[Navigation, FreeMode]}
        slidesPerView={1}
        spaceBetween={50}
        freeMode={true}
        loop={true}
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
        <BrandsContainer>
          <SwiperSlide>
            <Brand>apple</Brand>
          </SwiperSlide>
          <SwiperSlide>
            <Brand>dell</Brand>
          </SwiperSlide>
          <SwiperSlide>
            <Brand>asus</Brand>
          </SwiperSlide>
          <SwiperSlide>
            <Brand>hp</Brand>
          </SwiperSlide>
          <SwiperSlide>
            <Brand>acer</Brand>
          </SwiperSlide>
          <SwiperSlide>
            <Brand>lenovo</Brand>
          </SwiperSlide>
          <SwiperSlide>
            <Brand>microsoft</Brand>
          </SwiperSlide>
          <SwiperSlide>
            <Brand>lg</Brand>
          </SwiperSlide>
          <SwiperSlide>
            <Brand>sony</Brand>
          </SwiperSlide>
          <SwiperSlide>
            <Brand>toshiba</Brand>
          </SwiperSlide>
          <SwiperSlide>
            <Brand>samsung</Brand>
          </SwiperSlide>
        </BrandsContainer>
      </Swiper>
    </Container>
  )
}

export default Brands
