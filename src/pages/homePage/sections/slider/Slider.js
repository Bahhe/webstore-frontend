import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { useRef, useState } from "react"
import { useGetProductsQuery } from "../../../../features/products/productsApiSlice"
import Product from "./Product"
import styled from "styled-components"
import PulseLoader from "react-spinners/PulseLoader"
import { mobile } from "../../../../assests/globalStyles/responsive"

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
  height: 40em;
  position: relative;
  display: flex;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(90, 92, 106, 1) 0%,
    rgba(32, 45, 58, 1) 81.3%
  );
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
  const ref = useRef(null)

  const [slideIndex, setSlideIndex] = useState(0)

  const { data: products, isLoading } = useGetProductsQuery("products")

  let content
  if (isLoading) return (content = <PulseLoader />)
  const { ids, entities } = products
  const filteredIds = ids.filter((productId) =>
    entities[productId].section.includes("slider")
  )
  const dataLength = filteredIds.length - 1
  const handleClick = (direction) => {
    if (direction === "left") {
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
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosIcon style={{ fontSize: "1em" }} />
      </Arrow>
      <Slide>{sliderContent}</Slide>
      <Arrow ref={ref} direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosIcon style={{ fontSize: "1em" }} />
      </Arrow>
    </Container>
  )

  return content
}

export default Slider
