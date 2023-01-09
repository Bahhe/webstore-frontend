import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useRef, useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { setCredentials } from "../authSlice"
import { useLoginMutation } from "../authApiSlice"
import jwtDecode from "jwt-decode"
import { mobile } from "../../../assests/globalStyles/responsive"
import PulseLoader from "react-spinners/PulseLoader"
import { Link } from "react-router-dom"

const Container = styled.main`
  width: 80%;
  position: relative;
  padding-top: 10em;
  padding-bottom: 10em;
`
const Logo = styled.h1`
  position: absolute;
  top: 1em;
  left: 50%;
  transform: translate(-50%, 50%);
  cursor: pointer;
`

const Section = styled.section`
  width: 100%;
  display: flex;
  gap: 2em;
  ${mobile({
    flexDirection: "column",
  })}
`
const Title = styled.h1`
  width: 100%;
  font-size: 2.5em;
  text-transform: capitalize;
  padding: 0.5em 0;
  font-weight: 400;
`
const Left = styled.form`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 1em;
`
const Right = styled.div`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 1em;
`
const SectionTitle = styled.h1`
  font-size: 1.3em;
  text-transform: uppercase;
  padding: 1em 0;
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
`
const Button = styled.button`
  width: 7em;
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
  margin: 0 1em 0 0;
  &:disabled {
    opacity: 0.5;
  }
`
const Desc = styled.p`
  font-size: 0.9em;
  opacity: 0.8;
  padding: 1em 0;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const LoginSection = () => {
  const userRef = useRef()
  const errRef = useRef()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errMsg, setErrMsg] = useState("")
  const [disableButton, setDisableButton] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    userRef.current.focus()
  }, [errMsg])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { accessToken } = await login({ email, password }).unwrap()
      dispatch(setCredentials({ accessToken }))
      const decoded = jwtDecode(accessToken)
      const { isAdmin } = decoded.UserInfo
      setEmail("")
      setPassword("")
      if (isAdmin) {
        navigate("/admin")
      } else {
        navigate("/")
      }
    } catch (err) {
      if (!err.status) {
        setErrMsg("No server response")
      } else if (err.status === 400) {
        setErrMsg("Missing Email or password")
      } else if (err.status === 401) {
        setEmail("")
        setPassword("")
        setErrMsg(err?.data?.message)
      } else if (err.status === 429) {
        setEmail("")
        setPassword("")
        setErrMsg("To many login attempts try again after 60 seconds")
        setDisableButton(true)
        setTimeout(() => {
          setDisableButton(false)
        }, 60000)
      } else {
        setErrMsg(err.data?.message)
      }
      errRef.current && errRef.current.focus()
    }
  }
  const onEmailChanged = (e) => {
    setErrMsg("")
    setEmail(e.target.value)
  }
  const onPasswordChanged = (e) => {
    setErrMsg("")
    setPassword(e.target.value)
  }

  const [login, { isLoading }] = useLoginMutation()

  if (isLoading) return <PulseLoader />

  return (
    <Container>
      <Logo onClick={() => navigate("/")}>TIMGAD.</Logo>
      <Title>customer login</Title>
      <Section>
        <Left onSubmit={handleSubmit}>
          <SectionTitle>registered customers</SectionTitle>
          <Desc>If you have an account, sign in with your email address.</Desc>
          <SmallTitle htmlFor="email">email</SmallTitle>
          <br />
          {errMsg && (
            <p
              style={{ color: "red", marginLeft: "1em", fontSize: ".8em" }}
              ref={errRef}
              aria-live="assertive"
            >
              {`* ${errMsg}`}
            </p>
          )}
          <Input
            value={email}
            onChange={onEmailChanged}
            ref={userRef}
            type="email"
            id="email"
            name="email"
            required
          />
          <SmallTitle htmlFor="password">password</SmallTitle>
          <Input
            onChange={onPasswordChanged}
            value={password}
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            required
          />
          <RadioButton>
            <Radio
              onChange={() => setShowPassword((prev) => !prev)}
              value={showPassword}
              checked={showPassword}
              type="checkbox"
              name="radio"
              id="radio"
            />
            <Label htmlFor="radio">show password</Label>
          </RadioButton>
          <Button disabled={disableButton} type="submit">
            login
          </Button>
          <Wrapper>
            <Desc>forgot password ?</Desc>
          </Wrapper>
        </Left>
        <Right>
          <SectionTitle>new customers</SectionTitle>
          <Desc>
            Creating an account has many benefits: check out faster, keep more
            than one address, track orders and more.
          </Desc>
          <Button onClick={() => navigate("/register")}>register</Button>
        </Right>
      </Section>
      <br />
      <p
        style={{
          opacity: ".7",
          fontSize: ".8em",
          position: "absolute",
          bottom: "2em",
          left: "50%",
          transform: "translate(-50%, 50%)",
        }}
      >
        <Link style={{ textDecoration: "none", marginRight: "1em" }} to="">
          {" "}
          Conditions of Use{" "}
        </Link>
        <Link style={{ textDecoration: "none" }} to="">
          {" "}
          Privacy Notice.{" "}
        </Link>
      </p>
      <p
        style={{
          opacity: ".7",
          fontSize: ".8em",
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translate(-50%, 50%)",
        }}
      >
        © 1996-2022, timgad.com, Inc.
      </p>
    </Container>
  )
}

export default LoginSection
