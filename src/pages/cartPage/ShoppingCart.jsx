import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import CartProduct from "./CartProduct"
import { useSelector } from "react-redux"
import { tablet } from "../../assests/globalStyles/responsive"
import useTitle from "../../hooks/useTitle"

const Container = styled.div`
  width: 100%;
  ${tablet({
    width: '90%',
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  })}
`
const TitleSection = styled.div``
const MainContent = styled.div`
  display: flex;
  gap: 5em;
  ${tablet({
    flexDirection: "column",
  })}
`

const Title = styled.h1`
  font-size: 2em;
  font-weight: 600;
  text-transform: uppercase;
  margin: 1em;
`
const Left = styled.div`
  width: 100%;
  flex: 6;
`
const Right = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  width: 100%;
  flex: 1.5;
  padding: 1em;
  opacity: 0.9;
`
const Labels = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  text-transform: capitalize;
  opacity: 0.8;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`
const LeftLabels = styled.div`
  display: flex;
  align-items: center;
  padding: 1em;
`
const RightLabels = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Label = styled.div`
  padding: 1em;
`

const Button = styled.button`
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  padding: 1em;
  margin: 0 1em 0 0;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  text-transform: capitalize;
  cursor: pointer;
`

const LowerSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1em 0;
`
const MainTitle = styled.div`
  font-size: 1.3em;
  font-weight: 600;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0 0 1em 0;
`
const Pricing = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8em 0;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 0.85em;
  color: rgba(0, 0, 0, 0.8);
  text-transform: capitalize;
`
const PricingTitle = styled.div``
const Amount = styled.div``
const OrderTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 0.9em;
  color: rgba(0, 0, 0, 0.8);
  text-transform: capitalize;
`
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const CheckOutButton = styled.button`
  width: 90%;
  height: 3em;
  font-size: 1em;
  font-weight: 600;
  color: white;
  background-color: #333;
  border: none;
  text-transform: capitalize;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
`

const ShoppingCart = () => {
  useTitle("TIMGAD. | Cart")
  const navigate = useNavigate()
  const { cart } = useSelector((state) => state.cart)

  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach((item) => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return { totalPrice, totalQuantity }
  }

  let shippingPrice = 500 
  let subtotal = getTotal().totalPrice
  let orderTotal = getTotal().totalPrice + shippingPrice

  const product = cart?.length
    ? cart?.map((product) => (
        <CartProduct
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          quantity={product.quantity}
        />
      ))
    : "no products in your cart"

  return (
    <Container>
      <TitleSection>
        <Title>shopping cart</Title>
      </TitleSection>
      <MainContent>
        <Left>
          <Labels>
            <LeftLabels>
              <Label>items</Label>
            </LeftLabels>
            <RightLabels>
              <Label>price</Label>
            </RightLabels>
          </Labels>
          {product}
          <LowerSection>
            <Button onClick={() => navigate("/shop")}>continue shopping</Button>
          </LowerSection>
        </Left>
        <Right>
          <MainTitle>summary</MainTitle>
          <Pricing style={{ borderTop: "none" }}>
            <PricingTitle>subtotal</PricingTitle>
            <Amount>{subtotal} DA</Amount>
          </Pricing>
          <Pricing>
            <PricingTitle>shipping</PricingTitle>
            <Amount>{shippingPrice} DA</Amount>
          </Pricing>
          <OrderTotal style={{ padding: "2em 0" }}>
            <PricingTitle>order total</PricingTitle>
            <Amount style={{ fontWeight: "600" }}>
              {subtotal && orderTotal} DA
            </Amount>
          </OrderTotal>
          <ButtonContainer>
            <CheckOutButton
              disabled={!cart?.length}
              onClick={() => navigate(`/checkout`)}
            >
              proceed to checkout
            </CheckOutButton>
          </ButtonContainer>
        </Right>
      </MainContent>
    </Container>
  )
}

export default ShoppingCart
