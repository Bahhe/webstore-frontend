import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { mobile } from "../../../assests/globalStyles/responsive"
import {
  useAddNewUserMutation,
  useGetUsersQuery,
} from "../../users/usersApiSlice"

const Form = styled.form`
  width: 100%;
`
const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 2em;
  ${mobile({
    flexDirection: "column",
  })}
`
const Title = styled.div`
  width: 100%;
  font-size: 2.5em;
  text-transform: capitalize;
  padding: 0.5em 0;
`
const Left = styled.div`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 1em;
`
const Right = styled.div`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 1em;
`
const SectionTitle = styled.div`
  font-size: 1.3em;
  text-transform: uppercase;
  padding: 1em 0;
  margin: 1em 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  opacity: 0.9;
`
const SmallTitle = styled.label`
  text-transform: capitalize;
  font-weight: 500;
  opacity: 0.9;
`
const Input = styled.input`
  width: 100%;
  height: 2.9em;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 1em 0;
`
const RadioButton = styled.div`
  margin: 2em 0;
  display: flex;
`
const Label = styled.label`
  margin: 0 0 0 1em;
  text-transform: capitalize;
  opacity: 0.9;
`
const Radio = styled.input`
  width: 2em;
  border: none;
`
const Button = styled.button`
  width: 10em;
  font-size: 1.2em;
  font-weight: 500;
  text-transform: uppercase;
  background-color: #333;
  border: none;
  color: white;
  text-align: center;
  padding: 0.7em;
  margin: 1em 0;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
`

const USER_REGEX = /^[A-z]{3,20}$/
const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/
const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

const RegisterSection = () => {
  const [showPassword, setShowPassword] = useState(false)
  const { users } = useGetUsersQuery("users", {
    selectFromResult: ({ data, isFetching }) => ({
      users: data?.entities,
      isFetching,
    }),
  })

  const [addNewUser, { isLoading, isSuccess, isError, error }] =
    useAddNewUserMutation()

  const navigate = useNavigate()

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [validPassword, setValidPassword] = useState(false)
  const [validFirstName, setValidFirstName] = useState(false)
  const [validLastName, setValidLastName] = useState(false)
  const [validEmail, setValidEmail] = useState(false)

  useEffect(() => {
    setValidFirstName(USER_REGEX.test(firstName))
  }, [firstName])

  useEffect(() => {
    setValidLastName(USER_REGEX.test(lastName))
  }, [lastName])

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email))
  }, [email])

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password))
  }, [password])

  useEffect(() => {
    if (isSuccess) {
      setFirstName("")
      setLastName("")
      setEmail("")
      setPassword("")
      navigate("/login")
    }
  }, [isSuccess, navigate])

  const onEmailChanged = (e) => setEmail(e.target.value)
  const onFirstNameChanged = (e) => setFirstName(e.target.value)
  const onLastNameChanged = (e) => setLastName(e.target.value)
  const onPasswordChanged = (e) => setPassword(e.target.value)

  const canSave =
    [validFirstName, validLastName, validPassword, validEmail].every(Boolean) &&
    !isLoading

  const existingUser =
    users && Object.values(users).filter((user) => user.email === email)

  const onSubmitClicked = async (e) => {
    e.preventDefault()
    if (canSave) {
      if (existingUser.length) {
        alert("this email already exists please login")
        navigate("/login")
      }
      await addNewUser({ firstName, lastName, email, password })
    }
  }

  return (
    <Form onSubmit={onSubmitClicked}>
      <Title>create new customer account</Title>
      <span style={{ color: "red" }}>{isError && error}</span>
      <Container>
        <Left>
          <SectionTitle>personal information</SectionTitle>
          <SmallTitle htmlFor="firstName">first name</SmallTitle>
          <span style={{ color: "red" }}>
            {firstName && !validFirstName && "first name not valid"}
          </span>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="off"
            value={firstName}
            onChange={onFirstNameChanged}
          />
          <SmallTitle htmlFor="lastName">last name</SmallTitle>
          <span style={{ color: "red" }}>
            {lastName && !validLastName && "last name not valid"}
          </span>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="off"
            value={lastName}
            onChange={onLastNameChanged}
          />
          <RadioButton>
            <Radio type="checkbox" name="radio" />
            <Label htmlfor="radio">sign up for newsletter</Label>
          </RadioButton>
        </Left>
        <Right>
          <SectionTitle>sign-in information</SectionTitle>
          <SmallTitle htmlFor="email">email</SmallTitle>
          <span style={{ color: "red" }}>
            {email && !validEmail && "email not valid"}
          </span>
          <Input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={onEmailChanged}
          />
          <SmallTitle htmlFor="password">password</SmallTitle>
          <span style={{ color: "red" }}>
            {password && !validPassword && "password not valid"}
          </span>
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={onPasswordChanged}
          />
          <RadioButton>
            <Radio
              onClick={() => setShowPassword((prev) => !prev)}
              value={showPassword}
              checked={showPassword}
              type="checkbox"
              name="radio"
            />
            <Label htmlfor="radio">show password</Label>
          </RadioButton>
        </Right>
      </Container>
      <Button type="submit" disabled={!canSave}>
        register
      </Button>
    </Form>
  )
}

export default RegisterSection
