import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Product from './Product'

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
`
const LeftSection = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  flex: 4;
  padding: 2em 0 0 0;
`
const RightSection = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  flex: 2;
`
const InputContainer = styled.form`
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
const RadioButton = styled.input`
  margin-right: 10em;
`
const Price = styled.div`
  margin-right: 10em;
`
const Name = styled.div`
  margin-right: 10em;
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

const Checkout = () => {
  const { cart } = useSelector((state) => state.cart)

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

  return (
    <Container>
      <PageTitle>checkout</PageTitle>
      <SmallTitle>shipping address</SmallTitle>
      <SectionsContainer>
        <LeftSection>
          <InputContainer>
            <Label>email address</Label>
            <InputField />
          </InputContainer>
          <InputContainer>
            <Label>first name</Label>
            <InputField />
          </InputContainer>
          <InputContainer>
            <Label>last name</Label>
            <InputField />
          </InputContainer>
          <InputContainer>
            <Label>company</Label>
            <InputField />
          </InputContainer>
          <InputContainer>
            <Label>street address</Label>
            <InputField style={{ margin: '0 0 1em 0' }} />
            <InputField style={{ margin: '0 0 1em 0' }} />
            <InputField style={{ margin: '0 0 1em 0' }} />
          </InputContainer>
          <InputContainer>
            <Label>city</Label>
            <InputField />
          </InputContainer>
          <InputContainer>
            <Label>zip/postal code</Label>
            <InputField />
          </InputContainer>
          <InputContainer>
            <Label>phone number</Label>
            <InputField />
          </InputContainer>
          <Shipping>
            <Title>shipping method</Title>
            <Wrapper>
              <RadioButton type="radio" />
              <Price>$5.00</Price>
              <Name>yalidine</Name>
            </Wrapper>
          </Shipping>
          <ButtonContainer>
            <Button>next</Button>
          </ButtonContainer>
        </LeftSection>
        <RightSection>
          <RightSectionContainer>
            <Title style={{ textTransform: 'uppercase' }}>order summary</Title>
            <Desc>items</Desc>
            {content}
          </RightSectionContainer>
        </RightSection>
      </SectionsContainer>
    </Container>
  )
}

export default Checkout
