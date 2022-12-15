import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import { useGetProductByIdQuery } from '../../features/products/productsApiSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/carts/cartSlice'

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 2em;
`
const InfoSection = styled.div`
  flex: 1;
  margin: 3em;
`
const ImageSection = styled.div`
  overflow: hidden;
  flex: 1;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.05);
`

const ImageSlider = styled.div`
  height: 80%;
  min-width: 80%;
  margin: 5em;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`
const Title = styled.div`
  font-size: 1.5em;
  text-transform: capitalize;
`
const Price = styled.div`
  font-size: 1.5em;
  color: orange;
  margin: 1em 0;
`
const Desc = styled.div`
  font-size: 0.9em;
  letter-spacing: 0.15em;
  color: rgba(0, 0, 0, 0.5);
`
const ButtonContainer = styled.div`
  margin: 3em 0;
  display: flex;
  align-items: center;
`
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  width: 13em;
  height: 2.5em;
  border: none;
  font-size: 1.1em;
  font-weight: 300;
  color: white;
  text-transform: uppercase;
  margin: 0 1em 0 0;
  cursor: pointer;
`

const ViewProduct = () => {
  const { userId } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { product, isLoading } = useGetProductByIdQuery('getProductById', {
    selectFromResult: ({ data, isLoading }) => ({
      product: data?.entities[userId],
      isLoading,
    }),
  })

  const onAddToCartClicked = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        image: product.img,
        price: product.price,
      })
    )
  }
  const onBuyClicked = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        image: product.img,
        price: product.price,
      })
    )
    navigate(`/checkout`)
  }

  if (isLoading) return <p>loading...</p>

  if (!product) return <p>product not found</p>

  return (
    <Container>
      <ImageSection>
        <Swiper
          pagination={{
            type: 'fraction',
          }}
          modules={[Navigation, Pagination]}
          navigation={true}
          slidesPerView={1}
        >
          <SwiperSlide>
            <ImageSlider>
              <Image src={product.img} />
            </ImageSlider>
          </SwiperSlide>
          <SwiperSlide>
            <ImageSlider>
              <Image src={product.img} />
            </ImageSlider>
          </SwiperSlide>
        </Swiper>
      </ImageSection>
      <InfoSection>
        <Title>{product.title}</Title>
        <Price>${product.price}</Price>
        <Desc>{product.desc}</Desc>
        <ButtonContainer>
          <Button onClick={onAddToCartClicked}>
            <ShoppingCartOutlinedIcon style={{ margin: '0 .7em 0 0' }} />
            add to cart
          </Button>
          <Button onClick={onBuyClicked} style={{ backgroundColor: 'orange' }}>
            <LocalMallOutlinedIcon style={{ margin: '0 .7em 0 0' }} />
            buy now
          </Button>
        </ButtonContainer>
      </InfoSection>
    </Container>
  )
}

export default ViewProduct
