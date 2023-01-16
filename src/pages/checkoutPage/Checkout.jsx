import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useState, useRef } from "react"
import styled from "styled-components"
import Product from "./Product"
import { useAddNewOrderMutation } from "../../features/orders/ordersApiSlice"
import { Link, useNavigate } from "react-router-dom"
import { resetCart } from "../../features/carts/cartSlice"
import { mobile } from "../../assests/globalStyles/responsive"
import useTitle from "../../hooks/useTitle"
import useAuth from "../../hooks/useAuth"
import {
  useGetUserByIdQuery,
  useUpdateUserMutation,
} from "../../features/users/usersApiSlice"
import PulseLoader from "react-spinners/PulseLoader"
import emailjs from "@emailjs/browser"

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
  const form = useRef()
  useTitle("TIMGAD. | Checkout")
  const { id } = useAuth()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { data: user } = useGetUserByIdQuery(id, {
    refetchOnMountOrArgChange: true,
  })
  const [addNewOrder, { isSuccess, isLoading }] = useAddNewOrderMutation()
  const [updateUser, { isLoading: isLoadingUpdate }] = useUpdateUserMutation()

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
        "Thanks for purchasing from us we we'll call you to confirm your order"
      )
      emailjs
        .sendForm(
          "service_7ifymxp",
          "template_1jluchl",
          form.current,
          "K2SgTvTxH6jO38nqH"
        )
        .then(
          (result) => {
            console.log(result.text)
          },
          (error) => {
            console.log(error.text)
          }
        )
      dispatch(resetCart())
      navigate("/")
    }
  }, [isSuccess, navigate, dispatch])

  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [city, setCity] = useState("")
  const [address, setAddress] = useState("")
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
  const onAddressChanged = (e) => {
    setAddress(e.target.value)
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
    if (user) {
      await addNewOrder({
        products: productId,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        city: user.city ? user.city : city,
        address: user.address ? user.address : address,
        number: user.number ? user.number : phoneNumber,
        shipping: shipping,
      })
      await updateUser({
        ...user,
        id: user.id,
        city: user.city ? user.city : city,
        address: user.address ? user.address : address,
        number: user.number ? user.number : phoneNumber,
      })
    } else {
      await addNewOrder({
        products: productId,
        email: email,
        firstName: firstName,
        lastName: lastName,
        city: city,
        address: address,
        number: phoneNumber,
        shipping: shipping,
      })
    }
  }

  return (
    <Container>
      <PageTitle>checkout</PageTitle>
      <SmallTitle>shipping address</SmallTitle>
      {user && (
        <p style={{ marginBottom: "1em", fontSize: ".8em", opacity: ".9" }}>
          click <Link to={`/user/${user.id}`}>here</Link> if you want to change
          your shipping address
        </p>
      )}
      <SectionsContainer>
        <LeftSection ref={form} onSubmit={onSubmitClicked}>
          {!user && (
            <>
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
                  name="firstName"
                  value={firstName}
                  onChange={onFirstNameChanged}
                />
              </InputContainer>
              <InputContainer>
                <Label>last name</Label>
                <InputField
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={onLastNameChanged}
                />
              </InputContainer>
            </>
          )}
          {user ? (
            user.address ? null : (
              <InputContainer>
                <Label>address</Label>
                <InputField
                  type="text"
                  id="address"
                  name="address"
                  value={address}
                  onChange={onAddressChanged}
                />
              </InputContainer>
            )
          ) : (
            <InputContainer>
              <Label>address</Label>
              <InputField
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={onAddressChanged}
              />
            </InputContainer>
          )}
          {user ? (
            user.city ? null : (
              <InputContainer>
                <Label>city</Label>
                <InputField
                  type="text"
                  id="city"
                  name="city"
                  value={city}
                  onChange={onCityChanged}
                />
              </InputContainer>
            )
          ) : (
            <InputContainer>
              <Label>city</Label>
              <InputField
                type="text"
                id="city"
                name="city"
                value={city}
                onChange={onCityChanged}
              />
            </InputContainer>
          )}
          {user ? (
            user.number ? null : (
              <InputContainer>
                <Label>phone number</Label>
                <InputField
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={onPhoneNumberChanged}
                />
              </InputContainer>
            )
          ) : (
            <InputContainer>
              <Label>phone number</Label>
              <InputField
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={onPhoneNumberChanged}
              />
            </InputContainer>
          )}
          <Shipping>
            <Title>shipping method</Title>
            <Wrapper>
              <Select
                type="select"
                id="shipping"
                name="shipping"
                value={shipping || "yalidine"}
                onChange={onShippingChanged}
              >
                <Option value="yalidine">yalidine</Option>
                <Option value="EMS">EMS</Option>
              </Select>
            </Wrapper>
          </Shipping>
          <ButtonContainer>
            <Button>
              {isLoading || isLoadingUpdate ? <PulseLoader /> : "next"}
            </Button>
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
            <Button
              onClick={() => navigate("/cart")}
              style={{ margin: "1em 0" }}
            >
              edit cart
            </Button>
          </RightSectionContainer>
        </RightSection>
      </SectionsContainer>
    </Container>
  )
}

export default Checkout
