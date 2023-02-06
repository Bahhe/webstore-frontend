import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useRef } from 'react'
import Product from './Product'
import { useAddNewOrderMutation } from '../../features/orders/ordersApiSlice'
import { Link, useNavigate } from 'react-router-dom'
import { resetCart } from '../../features/carts/cartSlice'
import useTitle from '../../hooks/useTitle'
import useAuth from '../../hooks/useAuth'
import {
  useGetUserByIdQuery,
  useUpdateUserMutation,
} from '../../features/users/usersApiSlice'
import PulseLoader from 'react-spinners/PulseLoader'
import emailjs from '@emailjs/browser'
import { Toaster } from 'react-hot-toast'
import {
  Container,
  PageTitle,
  SmallTitle,
  SectionsContainer,
  LeftSection,
  RightSection,
  InputContainer,
  Label,
  InputField,
  Shipping,
  Title,
  Wrapper,
  ButtonContainer,
  Button,
  RightSectionContainer,
  Select,
  Option,
  Desc,
} from './Checkout.styles'

const Checkout = () => {
  const form = useRef()
  useTitle('BlackBeard. | Checkout')
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
        '!Congratulations, your order has been placed successfully we will call you soon to confirm your order'
      )
      emailjs
        .sendForm(
          'service_7ifymxp',
          'template_1jluchl',
          form.current,
          'K2SgTvTxH6jO38nqH'
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
      navigate('/')
    }
  }, [isSuccess, navigate, dispatch])

  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [city, setCity] = useState('')
  const [address, setAddress] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [shipping, setShipping] = useState('yaladine')
  const [valid, setValid] = useState(false)

  const canSave = [
    email,
    firstName,
    lastName,
    city,
    address,
    phoneNumber,
  ].every(Boolean)

  useEffect(() => {
    if (canSave) {
      setValid(true)
    } else {
      setValid(false)
    }
  }, [canSave, email, firstName, lastName, address, phoneNumber])

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
      <Toaster toastOptions={{ position: 'top-center' }} />
      <PageTitle>checkout</PageTitle>
      <SmallTitle>shipping address</SmallTitle>
      {user && (
        <p style={{ marginBottom: '1em', fontSize: '.8em', opacity: '.9' }}>
          click <Link to={`/user/${user.id}`}>here</Link> if you want to change
          your shipping address
        </p>
      )}
      <SectionsContainer>
        <LeftSection ref={form} onSubmit={onSubmitClicked}>
          {!user && (
            <>
              <InputContainer>
                <Label>
                  <span style={{ color: 'red', fontWeight: '300' }}>*</span>
                  email address:
                </Label>
                <InputField
                  type="email"
                  id="email"
                  value={email}
                  onChange={onEmailChanged}
                />
              </InputContainer>

              <InputContainer>
                <Label>
                  <span style={{ color: 'red', fontWeight: '300' }}>*</span>
                  first name:
                </Label>
                <InputField
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={onFirstNameChanged}
                />
              </InputContainer>
              <InputContainer>
                <Label>
                  <span style={{ color: 'red', fontWeight: '300' }}>*</span>last
                  name
                </Label>
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
                <Label>
                  <span style={{ color: 'red', fontWeight: '300' }}>*</span>
                  address:
                </Label>
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
              <Label>
                <span style={{ color: 'red', fontWeight: '300' }}>*</span>
                address:
              </Label>
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
                <Label>
                  <span style={{ color: 'red', fontWeight: '300' }}>*</span>
                  city:
                </Label>
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
              <Label>
                <span style={{ color: 'red', fontWeight: '300' }}>*</span>city:
              </Label>
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
                <Label>
                  <span style={{ color: 'red', fontWeight: '300' }}>*</span>
                  phone number:
                </Label>
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
              <Label>
                <span style={{ color: 'red', fontWeight: '300' }}>*</span>phone
                number:
              </Label>
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
                value={shipping || 'yalidine'}
                onChange={onShippingChanged}
              >
                <Option value="yalidine">yalidine</Option>
              </Select>
            </Wrapper>
          </Shipping>
          <ButtonContainer>
            <Button disabled={user ? false : !valid}>
              {isLoading || isLoadingUpdate ? (
                <PulseLoader color="white" />
              ) : (
                'next'
              )}
            </Button>
          </ButtonContainer>
        </LeftSection>
        <RightSection>
          <RightSectionContainer>
            <Title style={{ textTransform: 'uppercase' }}>order summary</Title>
            <Desc>items</Desc>
            {content}
            <Desc>products total</Desc>
            <Desc style={{ padding: '1em 0' }}>{getTotal().totalPrice} DA</Desc>
            <Desc>approximate shippment price</Desc>
            <Desc style={{ padding: '1em 0' }}>500 DA</Desc>
            <Desc>order total</Desc>
            <Desc style={{ padding: '1em 0', color: 'red' }}>
              {getTotal().totalPrice + 500} DA
            </Desc>
            <Button
              onClick={() => navigate('/cart')}
              style={{ margin: '1em 0' }}
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
