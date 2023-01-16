import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { useRef, useState } from "react"
import { useGetProductsQuery } from "../../../../features/products/productsApiSlice"
import Product from "./Product"
import styled from "styled-components"
import { mobile } from "../../../../assests/globalStyles/responsive"
import Spinner from "../../../../components/Spinner"

const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.7);
  width: 3.5em;
  height: 3.5em;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "1em"};
  right: ${(props) => props.direction === "right" && "1em"};
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
    opacity: "1",
  })}
`

const Container = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
  display: flex;
  border-radius: 1em;
  box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to right, #f857a6, #ff5858);
  /* background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(90, 92, 106, 1) 0%,
    rgba(32, 45, 58, 1) 81.3%
  ); */
  margin: 9em 0;
  &:hover ${Arrow} {
    opacity: 1;
  }
  ${mobile({
    width: "80%",
  })}
`

const Slide = styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;
`

const Slider = () => {
  const ref = useRef(null)

  const [slideIndex, setSlideIndex] = useState(0)

  const { products, isLoading, isSuccess, isError, error } =
    useGetProductsQuery("products", {
      selectFromResult: ({ data, isLoading, isSuccess, isError, error }) => ({
        products: data,
        isLoading,
        isSuccess,
        isError,
        error,
      }),
    })

  let filteredIds
  let sliderContent
  let dataLength
  let handleClick
  if (isLoading) {
    sliderContent = <Spinner />
  }
  if (isError) {
    sliderContent = <p>{error?.data?.message}</p>
  }

  if (isSuccess) {
    const { ids, entities } = products
    filteredIds =
      ids?.length &&
      ids.filter((productId) => entities[productId].section.includes("slider"))
    dataLength = filteredIds?.length && filteredIds.length - 1

    handleClick = (direction) => {
      if (direction === "left") {
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
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosIcon style={{ fontSize: "1em" }} />
      </Arrow>
      <Slide>{sliderContent}</Slide>
      <Arrow ref={ref} direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosIcon style={{ fontSize: "1em" }} />
      </Arrow>
    </Container>
  )
}

export default Slider
