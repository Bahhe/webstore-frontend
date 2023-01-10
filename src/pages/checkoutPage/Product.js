import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { mobile } from "../../assests/globalStyles/responsive"

const ProductContainer = styled.div`
  padding: 1em;
  width: 100%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  ${mobile({
    flexDirection: "column",
  })}
`
const ProductInfo = styled.div`
  display: flex;
`
const Image = styled.img`
  width: 10em;
  object-fit: contain;
`
const ProductPrice = styled.div`
  ${mobile({
    width: "100%",
    textAlign: "right",
  })}
`
const ProductTitle = styled.div`
  margin: 0 0 0 1em;
  font-weight: 500;
  text-transform: capitalize;
`

const Product = ({ title, price, image, id }) => {
  const navigate = useNavigate()
  const content = (
    <ProductContainer onClick={() => navigate(`/shop/product/${id}`)}>
      <ProductInfo>
        <Image src={image} />
        <ProductTitle>{title}</ProductTitle>
      </ProductInfo>
      <ProductPrice>${price}</ProductPrice>
    </ProductContainer>
  )

  return content
}

export default Product
