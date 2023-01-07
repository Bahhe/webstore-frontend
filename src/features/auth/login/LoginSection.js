import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useRef, useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { setCredentials } from "../authSlice"
import { useLoginMutation } from "../authApiSlice"
import jwtDecode from "jwt-decode"
import { mobile } from "../../../assests/globalStyles/responsive"

const Container = styled.div`
  width: 100%;
`
const Section = styled.div`
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
const SectionTitle = styled.div`
  font-size: 1.3em;
  text-transform: uppercase;
  padding: 1em 0;
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
`
const Desc = styled.div`
  font-size: 0.9em;
  opacity: 0.8;
  padding: 1em 0;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const LoginSection = () => {
  const [showPassword, setShowPassword] = useState(false)
  const userRef = useRef()
  const errRef = useRef()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errMsg, setErrMsg] = useState("")

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg("")
  }, [email, password])

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
        setErrMsg("Unauthorized")
      } else {
        setErrMsg(err.data?.message)
      }
      errRef.current.focus()
    }
  }

  const onEmailChanged = (e) => setEmail(e.target.value)
  const onPasswordChanged = (e) => setPassword(e.target.value)

  const [login, { isLoading }] = useLoginMutation()
  if (isLoading) return <p>login...</p>

  return (
    <Container>
      <Title>customer login</Title>
      <Section>
        <Left onSubmit={handleSubmit}>
          <SectionTitle>registered customers</SectionTitle>
          <Desc>If you have an account, sign in with your email address.</Desc>
          {errMsg && (
            <span ref={errRef} aria-live="assertive">
              {errMsg}
            </span>
          )}
          <SmallTitle htmlFor="email">email</SmallTitle>
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
              onClick={() => setShowPassword((prev) => !prev)}
              value={showPassword}
              checked={showPassword}
              type="checkbox"
              name="radio"
            />
            <Label htmlFor="radio">show password</Label>
          </RadioButton>
          <Button type="submit">login</Button>
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
    </Container>
  )
}

export default LoginSection
