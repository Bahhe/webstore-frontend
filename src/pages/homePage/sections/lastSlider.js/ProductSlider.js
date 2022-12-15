import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import styled from 'styled-components'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useGetProductsQuery } from '../../../../features/products/productsApiSlice'
import Product from './Product'

const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0);
  width: 5em;
  height: 5em;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '1em'};
  right: ${(props) => props.direction === 'right' && '1em'};
  transform: translateX(
    ${(props) => (props.direction === 'right' ? '6' : '-6')}em
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
`

const MainContainer = styled.div`
  margin: 0 0 5em 0;
  width: 100%;
  height: 30em;
  position: relative;
  &:hover ${Arrow} {
    visibility: visible;
  }
`

const ProductSlider = () => {
  const {
    data: products,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery('products')

  let product
  if (isError) {
    return <p>{error}</p>
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
        <ArrowBackIcon style={{ fontSize: '1.3em' }} />
      </Arrow>
      <Arrow direction="right" className="image-swiper-button-next">
        <ArrowForwardIcon style={{ fontSize: '1.3em' }} />
      </Arrow>
      <Swiper
        navigation={{
          nextEl: '.image-swiper-button-next',
          prevEl: '.image-swiper-button-prev',
          disabledClass: 'swiper-button-disabled',
        }}
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={50}
        loop={true}
      >
        {product}
      </Swiper>
    </MainContainer>
  )
}

export default ProductSlider
