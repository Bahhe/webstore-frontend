import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useRef } from 'react'
import { useGetProductsQuery } from '../../../../features/products/productsApiSlice'
import Product from './Product'
import styled from 'styled-components'
import { mobile } from '../../../../assests/globalStyles/responsive'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import Loader from '../../../../components/Loader'

const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.7);
  width: 3.5em;
  height: 3.5em;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '5em'};
  right: ${(props) => props.direction === 'right' && '5em'};
  margin: auto;
  border-radius: 50%;
  position: absolute;
  cursor: pointer;
  transition: 0.5s ease;
  z-index: 2;
  opacity: 0;
  &:hover {
    background-color: orange;
    color: white;
  }
`

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  height: 80vh;
  position: relative;
  display: flex;
  margin: 0 auto;
  &:hover ${Arrow} {
    opacity: 1;
  }
  ${mobile({
    width: '100%',
    margin: '4em 0 0 0',
  })}
  &::before {
    background: #0575e6; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #021b79,
      #0575e6
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #021b79,
      #0575e6
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

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

const Slide = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
`

const Slider = () => {
  const ref = useRef(null)

  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery('products')

  let filteredIds
  let sliderContent
  if (isLoading) {
    return <Loader color="black" />
  }
  if (isError) {
    sliderContent = <p>{error?.data?.message}</p>
  }

  if (isSuccess) {
    const { ids, entities } = products
    filteredIds =
      ids?.length &&
      ids.filter((productId) => entities[productId].section.includes('slider'))

    sliderContent =
      ids?.length &&
      filteredIds.map((productId) => (
        <SwiperSlide key={productId}>
          <Product productId={productId} />
        </SwiperSlide>
      ))
  }

  return (
    <Container>
      <Arrow direction="left" className="image-swiper-button-prev">
        <ArrowBackIosIcon style={{ fontSize: '1em' }} />
      </Arrow>
      <Arrow ref={ref} direction="right" className="image-swiper-button-next">
        <ArrowForwardIosIcon style={{ fontSize: '1em' }} />
      </Arrow>
      <Slide>
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
      </Slide>
    </Container>
  )
}

export default Slider
