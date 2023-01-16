import React from "react"
import styled from "styled-components"
import { useUpdateUserMutation } from "../../users/usersApiSlice"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { PulseLoader } from "react-spinners"

const Container = styled.main`
  margin: 10em 0 0 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: 1.5em;
  margin-bottom: 1em;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 3em;
  border-radius: 1em;
  border: 1px solid lightgrey;
`
const Label = styled.label`
  text-transform: capitalize;
  font-size: 1.1em;
  font-weight: 600;
  opacity: 0.7;
  margin-left: 0.5em;
  margin-bottom: 0.2em;
`
const Input = styled.input`
  border: 1px solid lightgrey;
  border-radius: 50px;
  padding: 0.5em;
  width: 20em;
  font-size: 1em;
  margin-bottom: 1em;
`
const Button = styled.button`
  font-size: 1.5em;
  font-weight: 500;
  border: none;
  background-color: #333;
  color: white;
  padding: 0.5em;
  margin-top: 1em;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
`

const USER_REGEX = /^[A-z]{3,10}$/
const PWD_REGEX = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

const UserForm = ({ user }) => {
  const navigate = useNavigate()

  const [firstName, setFirstName] = useState(user.firstName || "")
  const [lastName, setLastName] = useState(user.lastName || "")
  const [email, setEmail] = useState(user.email || "")
  const [password, setPassword] = useState("")
  const [address, setAddress] = useState(user.address || "")
  const [number, setNumber] = useState(user.number || "")
  const [city, setCity] = useState(user.city || "")
  const [newsLetter, setNewsLetter] = useState(user.newsLetter || false)
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

  const [updateUser, { isLoading }] = useUpdateUserMutation()

  let canSave
  if (password) {
    canSave = [validFirstName, validLastName, validEmail, validPassword].every(
      Boolean
    )
  } else {
    canSave = [validFirstName, validLastName, validEmail].every(Boolean)
  }

  const onSubmitClicked = async (e) => {
    e.preventDefault()
    await updateUser({
      id: user.id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      address: address,
      number: number,
      city: city,
      newsLetter: newsLetter,
    })
    alert("your personal details changed successfully")
    setPassword("")
    navigate(`/user/${user.id}`)
  }

  let buttonSpinner
  if (isLoading) {
    buttonSpinner = <PulseLoader color="white" />
  } else {
    buttonSpinner = "update"
  }

  return (
    <Container>
      <Title>welcome {user.firstName}</Title>
      <Form onSubmit={onSubmitClicked}>
        <Label htmlFor="firstName">first name</Label>
        <Input
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Label htmlFor="lastName">last name</Label>
        <Input
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Label htmlFor="email">email</Label>
        <Input
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label htmlFor="password">password</Label>
        <Input
          placeholder="new password ?"
          name="password"
          id="password"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Label htmlFor="address">address</Label>
        <Input
          placeholder="1234 Main Stree"
          name="address"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Label htmlFor="number">phone number</Label>
        <Input
          placeholder="+213 066 666 666"
          name="number"
          id="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <Label htmlFor="city">city</Label>
        <Input
          placeholder="Batna"
          name="city"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Label htmlFor="newsLetter">newsLetter</Label>
        <Input
          type="checkbox"
          name="newsLetter"
          id="newsLetter"
          checked={newsLetter}
          value={newsLetter}
          onChange={(e) => setNewsLetter((prev) => !prev)}
        />
        <Button disabled={!canSave}>{buttonSpinner}</Button>
      </Form>
    </Container>
  )
}

export default UserForm
