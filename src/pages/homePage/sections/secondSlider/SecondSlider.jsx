import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useState } from 'react'
import { useGetProductsQuery } from '../../../../features/products/productsApiSlice'
import Products from './Products'
import styled from 'styled-components'
import { mobile } from '../../../../assests/globalStyles/responsive'
import Spinner from '../../../../components/Spinner'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0);
  width: 5em;
  height: 5em;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '5em'};
  right: ${(props) => props.direction === 'right' && '5em'};
  margin: auto;
  border-radius: 50%;
  position: absolute;
  cursor: pointer;
  transition: 0.5s ease;
  z-index: 3;
  opacity: 0.6;
  visibility: hidden;
  &:hover {
    opacity: 1;
  }
  ${mobile({
    right: (props) => props.direction === 'right' && '1em',
    opacity: (props) => (props.direction === 'left' ? '0' : '1'),
    visibility: (props) => (props.direction === 'left' ? 'hidden' : 'visible'),
    backgroundColor: 'white',
    width: '3em',
    height: '3em',
  })}
`

const Container = styled.div`
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
    width: '100%',
  })}
  &::before {
    background-color: #E3FF2F;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: skewY(-10deg);
    z-index: -1;
  }
`

const SlideContainer = styled.div`
  width: 100%;
  display: flex;
  ${mobile({
    width: '80%',
    overflow: 'hidden',
  })}
`

const SecondSlider = () => {
  const [slideIndex] = useState(0)

  const {
    data: products,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetProductsQuery('products')
  let sliderContent
  let filteredIds

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
        entities[productId].section.includes('secondSlider')
      )
    sliderContent =
      filteredIds?.length &&
      filteredIds.map((productId) => (
        <SwiperSlide key={productId}>
          <Products productId={productId} slideIndex={slideIndex} />
        </SwiperSlide>
      ))
  }

  return (
    <Container>
      <Arrow direction="left" className="image-swiper-button-prev">
        <ArrowBackIcon style={{ fontSize: '1.5em' }} />
      </Arrow>
      <SlideContainer>
        <Swiper
          navigation={{
            nextEl: '.image-swiper-button-next',
            prevEl: '.image-swiper-button-prev',
            disabledClass: 'swiper-button-disabled',
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          loop={true}
        >
          {sliderContent}
        </Swiper>
      </SlideContainer>
      <Arrow direction="right" className="image-swiper-button-next">
        <ArrowForwardIcon style={{ fontSize: '1.5em' }} />
      </Arrow>
    </Container>
  )
}

export default SecondSlider
