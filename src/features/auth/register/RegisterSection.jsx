import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { mobile } from "../../../assests/globalStyles/responsive"
import Loader from "../../../components/Loader"
import { useAddNewUserMutation } from "../../users/usersApiSlice"

const Form = styled.form`
  width: 80%;
  position: relative;
  padding-bottom: 5em;
  padding-top: 10em;
`
const Container = styled.main`
  width: 100%;
  display: flex;
  gap: 2em;
  ${mobile({
    flexDirection: "column",
  })}
`
const Title = styled.h2`
  width: 100%;
  font-size: 2.5em;
  font-weight: 400;
  text-transform: capitalize;
  padding: 0.5em 0;
  ${mobile({
    display: "none",
  })}
`
const Left = styled.section`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 1em;
`
const Right = styled.section`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 1em;
`
const SectionTitle = styled.h2`
  font-size: 1.3em;
  text-transform: uppercase;
  padding: 1em 0;
  margin: 1em 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  opacity: 0.7;
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
  cursor: pointer;
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
const LegalInformations = styled.footer`
  font-size: 0.8em;
  opacity: 0.8;
`
// /^[A-z0-9!@#$%]{4,12}$/
const USER_REGEX = /^[A-z]{3,10}$/
const PWD_REGEX = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

const RegisterSection = () => {
  const [addNewUser, { isLoading, isSuccess, isError, error }] =
    useAddNewUserMutation()

  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [newsLetter, setNewsLetter] = useState(false)
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
  const onNewsLetterChanged = () => setNewsLetter((prev) => !prev)

  const canSave =
    [validFirstName, validLastName, validPassword, validEmail].every(Boolean) &&
    !isLoading

  const onSubmitClicked = async (e) => {
    e.preventDefault()
    if (canSave) {
      await addNewUser({ firstName, lastName, email, password, newsLetter })
    }
  }
  if (isLoading) {
    return <Loader />
  }

  return (
    <Form onSubmit={onSubmitClicked}>
      <Title>create new customer account</Title>
      <Container>
        <Left>
          <SectionTitle>personal information</SectionTitle>
          <span style={{ color: "red" }}>
            {isError && error?.status !== 409 && error?.data?.message}
          </span>
          <SmallTitle htmlFor="firstName">first name</SmallTitle>
          <br />
          {firstName && !validFirstName && (
            <span
              style={{ color: "red", fontSize: ".8em", margin: "0 0 0 1em" }}
            >
              * First Name length 3 to 8 characters and only English letters
            </span>
          )}
          <Input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="off"
            value={firstName}
            onChange={onFirstNameChanged}
          />
          <SmallTitle htmlFor="lastName">last name</SmallTitle>
          <br />
          {lastName && !validLastName && (
            <span
              style={{ color: "red", fontSize: ".8em", margin: "0 0 0 1em" }}
            >
              * First Name length 3 to 8 characters and only English letters
            </span>
          )}
          <Input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="off"
            value={lastName}
            onChange={onLastNameChanged}
          />
          <RadioButton>
            <Radio
              type="checkbox"
              name="newsletter"
              id="newsletter"
              value={newsLetter}
              onChange={onNewsLetterChanged}
            />
            <Label htmlfor="newsletter">sign up for newsletter</Label>
          </RadioButton>
          <LegalInformations>
            By continuing, you agree to Timgad's
            <Link style={{ textDecoration: "none" }} to="">
              {" "}
              Conditions of Use{" "}
            </Link>
            and
            <Link style={{ textDecoration: "none" }} to="">
              {" "}
              Privacy Notice.{" "}
            </Link>
          </LegalInformations>
          <p style={{ fontSize: ".9em", marginTop: "1em", opacity: ".8" }}>
            Already have an account ? <Link to="/login">sign in</Link>
          </p>
        </Left>
        <Right>
          <SectionTitle>sign-in information</SectionTitle>
          <SmallTitle htmlFor="email">email</SmallTitle>
          <br />
          {email && !validEmail && (
            <span
              style={{ color: "red", fontSize: ".8em", margin: "0 0 0 1em" }}
            >
              * Email is not valid
            </span>
          )}
          {isError && error?.status === 409 && (
            <span
              style={{ color: "red", fontSize: ".8em", margin: "0 0 0 1em" }}
            >
              {error?.data?.message} <Link to="/login">login</Link>
            </span>
          )}
          <Input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={onEmailChanged}
          />
          <SmallTitle htmlFor="password">password</SmallTitle>
          <br />
          <span
            style={{
              color: "red",
              fontSize: ".8em",
              margin: "0 0 0 3em",
              textTransform: "capitalize",
            }}
          >
            {password && !validPassword && (
              <>
                <br />
                <span style={{ margin: "0 0 0 1em" }}>
                  * Passwords will contain at least 1 upper case letter
                </span>
                <br />
                <span style={{ margin: "0 0 0 1em" }}>
                  * 1 lower case letter
                </span>
                <br />
                <span style={{ margin: "0 0 0 1em" }}>
                  * 1 number or special character
                </span>
                <span style={{ margin: "0 0 0 1em" }}>
                  * only English Letters
                </span>
              </>
            )}
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
              onChange={() => setShowPassword((prev) => !prev)}
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