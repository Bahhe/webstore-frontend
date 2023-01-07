import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import styled from "styled-components"
import Product from "./Product"
import { useAddNewOrderMutation } from "../../features/orders/ordersApiSlice"
import { useNavigate } from "react-router-dom"
import { resetCart } from "../../features/carts/cartSlice"
import { mobile } from "../../assests/globalStyles/responsive"
import useTitle from "../../hooks/useTitle"

const Container = styled.div`
  margin: 1em 0 0 0;
`
const PageTitle = styled.div`
  font-size: 2.5em;
  font-weight: 600;
  text-transform: uppercase;
  margin: 4em 0 0 0;
`
const SmallTitle = styled.div`
  margin: 2em 0 1em 0;
  font-size: 1.4em;
  font-weight: 500;
  text-transform: capitalize;
`
const SectionsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 2em;
  ${mobile({
    flexDirection: "column",
  })}
`
const LeftSection = styled.form`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  flex: 4;
  padding: 2em 0 0 0;
`
const RightSection = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  flex: 2;
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2em 0;
`
const Label = styled.label`
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1em;
  margin: 0 0 0.5em 0;
  color: rgba(0, 0, 0, 0.8);
`
const InputField = styled.input`
  padding: 0.9em 0;
  border: 1.5px solid rgba(0, 0, 0, 0.1);
`
const Shipping = styled.div`
  width: 100%;
`
const Title = styled.div`
  margin: 2em 0 1em 0;
  font-size: 1.4em;
  font-weight: 500;
  text-transform: capitalize;
`
const Wrapper = styled.div`
  display: flex;
  padding: 1em 0;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.9);
  text-transform: capitalize;
`
const ButtonContainer = styled.div`
  width: 100%;
  text-align: end;
`
const Button = styled.button`
  font-size: 1.2em;
  text-transform: capitalize;
  font-weight: 500;
  color: white;
  border: none;
  background-color: #333;
  padding: 0.7em 2em;
  cursor: pointer;
`
const RightSectionContainer = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 1em 0 0 1em;
`
const Desc = styled.div`
  text-transform: capitalize;
  font-weight: 500;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
`
const Select = styled.select`
  padding: 1em;
  text-transform: capitalize;
  font-weight: 500;
  border: none;
  border-radius: 50px;
`
const Option = styled.option``

const Checkout = () => {
  useTitle("TIMGAD. | Checkout")
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [addNewOrder, { isSuccess }] = useAddNewOrderMutation()
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
  const content = cart?.map((product) => (
    <Product
      key={product.id}
      id={product.id}
      image={product.image}
      title={product.title}
      price={product.price}
      quantity={product.quantity}
    />
  ))

  useEffect(() => {
    if (isSuccess) {
      alert(
        "your order has been requested we will call you to confirm your order"
      )
      dispatch(resetCart())
      navigate("/")
    }
  }, [isSuccess, navigate, dispatch])

  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [city, setCity] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [shipping, setShipping] = useState("yaladine")

  const onEmailChanged = (e) => {
    setEmail(e.target.value)
  }
  const onFirstNameChanged = (e) => {
    setFirstName(e.target.value)
  }
  const onLastNameChanged = (e) => {
    setLastName(e.target.value)
  }
  const onCityChanged = (e) => {
    setCity(e.target.value)
  }
  const onPhoneNumberChanged = (e) => {
    setPhoneNumber(e.target.value)
  }
  const onShippingChanged = (e) => {
    setShipping(e.target.value)
  }

  const onSubmitClicked = async (e) => {
    e.preventDefault()
    const productId = cart?.map((product) => {
      return product.id
    })
    await addNewOrder({
      products: productId,
      email: email,
      firstName: firstName,
      lastName: lastName,
      city: city,
      number: phoneNumber,
      shipping: shipping,
    })
  }

  return (
    <Container>
      <PageTitle>checkout</PageTitle>
      <SmallTitle>shipping address</SmallTitle>
      <SectionsContainer>
        <LeftSection onSubmit={onSubmitClicked}>
          <InputContainer>
            <Label>email address</Label>
            <InputField
              type="email"
              id="email"
              value={email}
              onChange={onEmailChanged}
            />
          </InputContainer>
          <InputContainer>
            <Label>first name</Label>
            <InputField
              type="text"
              id="firstName"
              value={firstName}
              onChange={onFirstNameChanged}
            />
          </InputContainer>
          <InputContainer>
            <Label>last name</Label>
            <InputField
              type="text"
              id="lastName"
              value={lastName}
              onChange={onLastNameChanged}
            />
          </InputContainer>
          <InputContainer>
            <Label>city</Label>
            <InputField
              type="text"
              id="city"
              value={city}
              onChange={onCityChanged}
            />
          </InputContainer>
          <InputContainer>
            <Label>phone number</Label>
            <InputField
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={onPhoneNumberChanged}
            />
          </InputContainer>
          <Shipping>
            <Title>shipping method</Title>
            <Wrapper>
              <Select
                type="select"
                id="shipping"
                value={shipping || "yalidine"}
                onChange={onShippingChanged}
              >
                <Option value="yalidine">yalidine</Option>
                <Option value="EMS">EMS</Option>
              </Select>
            </Wrapper>
          </Shipping>
          <ButtonContainer>
            <Button>next</Button>
          </ButtonContainer>
        </LeftSection>
        <RightSection>
          <RightSectionContainer>
            <Title style={{ textTransform: "uppercase" }}>order summary</Title>
            <Desc>items</Desc>
            {content}
            <Desc>products total</Desc>
            <Desc style={{ padding: "1em 0" }}>${getTotal().totalPrice}</Desc>
            <Desc>approximate shippment price</Desc>
            <Desc style={{ padding: "1em 0" }}>$10</Desc>
            <Desc>order total</Desc>
            <Desc style={{ padding: "1em 0", color: "red" }}>
              ${getTotal().totalPrice + 10}
            </Desc>
          </RightSectionContainer>
        </RightSection>
      </SectionsContainer>
    </Container>
  )
}

export default Checkout
