import { useNavigate } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../authSlice'
import { useLoginMutation } from '../authApiSlice'
import jwtDecode from 'jwt-decode'
import Loader from '../../../components/Loader'
import {
  Container,
  Section,
  Title,
  Left,
  Right,
  SectionTitle,
  SmallTitle,
  Input,
  RadioButton,
  Label,
  Radio,
  Button,
  Desc,
  Wrapper,
} from './LoginSection.styles'

const LoginSection = () => {
  const userRef = useRef()
  const errRef = useRef()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')
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
      setEmail('')
      setPassword('')
      if (isAdmin) {
        navigate('/admin')
      } else {
        navigate('/')
      }
    } catch (err) {
      if (!err.status) {
        setErrMsg('No server response')
      } else if (err.status === 400) {
        setErrMsg('Missing Email or password')
      } else if (err.status === 401) {
        setEmail('')
        setPassword('')
        setErrMsg(err?.data?.message)
      } else if (err.status === 429) {
        setEmail('')
        setPassword('')
        setErrMsg('To many login attempts try again after 60 seconds')
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
    setErrMsg('')
    setEmail(e.target.value)
  }
  const onPasswordChanged = (e) => {
    setErrMsg('')
    setPassword(e.target.value)
  }

  const [login, { isLoading }] = useLoginMutation()

  if (isLoading) return <Loader />

  return (
    <Container>
      <Title>customer login</Title>
      <Section>
        <Left onSubmit={handleSubmit}>
          <SectionTitle>registered customers</SectionTitle>
          <Desc>If you have an account, sign in with your email address.</Desc>
          <SmallTitle htmlFor="email">email</SmallTitle>
          <br />
          {errMsg && (
            <p
              style={{ color: 'red', marginLeft: '1em', fontSize: '.8em' }}
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
            type={showPassword ? 'text' : 'password'}
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
          <Button onClick={() => navigate('/register')}>register</Button>
        </Right>
      </Section>
    </Container>
  )
}

export default LoginSection
