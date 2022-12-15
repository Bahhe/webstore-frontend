import React from 'react'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { testimonials } from '../../../assests/data'

const Container = styled.div`
  width: 100%;
  position: relative;
  transform: translateY(30%);
  z-index: 1;
  background-color: white;
`
const Slide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0 10em 0;
`
const Title = styled.div`
  font-size: 3em;
  font-weight: 300;
  text-transform: capitalize;
  margin: 0.5em 0 1em 0;
  width: 100%;
  text-align: center;
`
const ProfilePicture = styled.img`
  width: 5em;
  height: 5em;
  border-radius: 50%;
  object-fit: cover;
  margin: 1em 0;
`
const Desc = styled.div`
  max-width: 50ch;
  text-align: center;
  font-size: 1.5em;
  opacity: 0.4;
  margin: 1em 0;
`
const Name = styled.div`
  font-size: 1.2em;
  font-weight: 500;
  text-transform: capitalize;
  letter-spacing: 0.2em;
`
const UnderName = styled.div`
  font-size: 1em;
  font-weight: 500;
  text-transform: capitalize;
  opacity: 0.4;
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
  left: ${(props) => props.direction === 'left' && '1em'};
  right: ${(props) => props.direction === 'right' && '1em'};
  margin: auto;
  border-radius: 50%;
  position: absolute;
  cursor: pointer;
  transition: 0.5s ease;
  z-index: 2;
  opacity: 0.3;
  &:hover {
    opacity: 1;
  }
`

const Testimonials = () => {
  return (
    <Container>
      <Arrow direction="left" className="image-swiper-button-prev">
        <ArrowBackIcon style={{ fontSize: '1.5em' }} />
      </Arrow>
      <Arrow direction="right" className="image-swiper-button-next">
        <ArrowForwardIcon style={{ fontSize: '1.5em' }} />
      </Arrow>
      <FormatQuoteIcon
        style={{ fontSize: '3em', textAlign: 'center', width: '100%' }}
      />
      <Title>testimonial</Title>
      <Swiper
        navigation={{
          nextEl: '.image-swiper-button-next',
          prevEl: '.image-swiper-button-prev',
          disabledClass: 'swiper-button-disabled',
        }}
        grabCursor={true}
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={50}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <Slide>
              <ProfilePicture src={item.profilePicture} />
              <Desc>"{item.desc}"</Desc>
              <Name>{item.name}</Name>
              <UnderName>{item.underName}</UnderName>
            </Slide>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

export default Testimonials
