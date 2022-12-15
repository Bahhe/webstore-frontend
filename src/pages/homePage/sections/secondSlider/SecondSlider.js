import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useState } from 'react'
import { useGetProductsQuery } from '../../../../features/products/productsApiSlice'
import Products from './Products'

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
  opacity: 0.2;
  visibility: hidden;
  &:hover {
    opacity: 1;
  }
`

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  margin: 10em 0 10em 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:hover ${Arrow} {
    visibility: visible;
  }
`

const SlideContainer = styled.div`
  width: 100%;
  display: flex;
`

const SecondSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0)

  let filteredIds
  let dataLength
  const { data, isSuccess, isError, error } = useGetProductsQuery('products')
  if (isError) {
    return <p>{error?.data?.message}</p>
  }
  if (isSuccess) {
    const { ids, entities } = data
    filteredIds = ids.filter((productId) =>
      entities[productId].section.includes('secondSlider')
    )
    dataLength = filteredIds.length - 1
  }

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : dataLength)
    } else {
      setSlideIndex(slideIndex < dataLength ? slideIndex + 1 : 0)
    }
  }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowBackIcon style={{ fontSize: '1.5em' }} />
      </Arrow>
      <SlideContainer>
        {filteredIds?.length &&
          filteredIds.map((productId) => (
            <Products
              key={productId}
              productId={productId}
              slideIndex={slideIndex}
            />
          ))}
      </SlideContainer>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowForwardIcon style={{ fontSize: '1.5em' }} />
      </Arrow>
    </Container>
  )
}

export default SecondSlider
