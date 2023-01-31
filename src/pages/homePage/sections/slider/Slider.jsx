import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useRef, useState } from 'react'
import { useGetProductsQuery } from '../../../../features/products/productsApiSlice'
import Product from './Product'
import styled from 'styled-components'
import { mobile } from '../../../../assests/globalStyles/responsive'
import Spinner from '../../../../components/Spinner'

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
  ${mobile({
    opacity: '1',
  })}
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
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #4b2fff;
    transform: skewY(15deg);
  }
`

const Slide = styled.div`
  overflow: hidden;
  width: 80%;
  margin: 0 auto;
  display: flex;
`

const Slider = () => {
  const ref = useRef(null)

  const [slideIndex, setSlideIndex] = useState(0)

  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery('products')

  let filteredIds
  let sliderContent
  let dataLength
  let handleClick
  if (isLoading) {
    sliderContent = <Spinner color="white" />
  }
  if (isError) {
    sliderContent = <p>{error?.data?.message}</p>
  }

  if (isSuccess) {
    const { ids, entities } = products
    filteredIds =
      ids?.length &&
      ids.filter((productId) => entities[productId].section.includes('slider'))
    dataLength = filteredIds?.length && filteredIds.length - 1

    handleClick = (direction) => {
      if (direction === 'left') {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : dataLength)
      } else {
        setSlideIndex(slideIndex < dataLength ? slideIndex + 1 : 0)
      }
    }

    sliderContent =
      ids?.length &&
      filteredIds.map((productId) => (
        <Product
          key={productId}
          productId={productId}
          slideIndex={slideIndex}
        />
      ))
  }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowBackIosIcon style={{ fontSize: '1em' }} />
      </Arrow>
      <Slide>{sliderContent}</Slide>
      <Arrow ref={ref} direction="right" onClick={() => handleClick('right')}>
        <ArrowForwardIosIcon style={{ fontSize: '1em' }} />
      </Arrow>
    </Container>
  )
}

export default Slider
