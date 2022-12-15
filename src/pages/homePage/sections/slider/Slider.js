import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useState } from 'react'
import { useGetProductsQuery } from '../../../../features/products/productsApiSlice'
import Product from './Product'
import styled from 'styled-components'

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
  width: 100%;
  position: relative;
  display: flex;
  background-color: rgba(0, 0, 0, 0.06);
  margin: 8em 0;
  &:hover ${Arrow} {
    opacity: 1;
  }
`

const Slide = styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;
`

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)

  const {
    data: products,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetProductsQuery('products')

  let content
  if (isError) return <p>{error}</p>
  if (isLoading) return <p>loading...</p>
  if (isSuccess) {
    const { ids, entities } = products
    const filteredIds = ids.filter((productId) =>
      entities[productId].section.includes('slider')
    )
    const dataLength = filteredIds.length - 1
    const handleClick = (direction) => {
      if (direction === 'left') {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : dataLength)
      } else {
        setSlideIndex(slideIndex < dataLength ? slideIndex + 1 : 0)
      }
    }

    const sliderContent = filteredIds.map((productId) => (
      <Product key={productId} productId={productId} slideIndex={slideIndex} />
    ))

    content = (
      <Container>
        <Arrow direction="left" onClick={() => handleClick('left')}>
          <ArrowBackIosIcon style={{ fontSize: '1em' }} />
        </Arrow>
        <Slide>{sliderContent}</Slide>
        <Arrow direction="right" onClick={() => handleClick('right')}>
          <ArrowForwardIosIcon style={{ fontSize: '1em' }} />
        </Arrow>
      </Container>
    )
  }

  return content
}

export default Slider
