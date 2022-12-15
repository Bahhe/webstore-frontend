import React, { useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import { Badge } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useSendLogoutMutation } from '../features/auth/authApiSlice'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from '../features/auth/authSlice'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  position: fixed;
  background-color: white;
  z-index: 5;
  top: 0;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
`

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  text-align: center;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
`

const Logo = styled.span`
  flex: 1;
  font-weight: 900;
  font-size: 2em;
  cursor: pointer;
  margin: 1em 0;
`
const Links = styled.ul`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-transform: capitalize;
  cursor: pointer;
`
const LinkElement = styled.li`
  flex: 1;
  list-style: none;
  &:hover {
    color: orange;
  }
`
const RegisterContainer = styled.div`
  margin: 1em;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: 400;
  font-size: 0.9em;
`
const Login = styled.span`
  text-transform: capitalize;
  display: flex;
  align-items: center;
  margin: 0.2em;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`
const Register = styled.span`
  text-transform: capitalize;
  margin: 0.2em;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`
const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
const Search = styled.div`
  padding: 0.5em;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`
const Cart = styled.div`
  padding: 0.5em;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`
const Logout = styled.button``

const NavBar = () => {
  const {cart} = useSelector((state) => state.cart)

  const getTotalQuantity = () => {
    let total = 0
    cart.forEach((item) => {
      total += item.quantity
    })
    return total
  }
  const token = useSelector(selectCurrentToken)
  const navigate = useNavigate()

  const onSearchBarClicked = () => {}

  const [sendLogout, { isSuccess, isLoading, isError, error }] =
    useSendLogoutMutation()

  useEffect(() => {
    if (isSuccess) {
      navigate('/')
    }
  }, [isSuccess, navigate])

  const onLogoutClicked = () => sendLogout()

  if (isLoading) return <p>login out...</p>
  if (isError) return <p>{error.message}</p>

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/">
            <Logo>TIMGAD.</Logo>
          </Link>
          <Links>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
              <LinkElement>home</LinkElement>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="shop">
              <LinkElement>shop</LinkElement>
            </Link>
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to="contact"
            >
              <LinkElement>contact us</LinkElement>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="about">
              <LinkElement>about</LinkElement>
            </Link>
          </Links>
        </Left>
        <Right>
          <RegisterContainer>
            <Link to="login">
              <Login>
                <PersonOutlineOutlinedIcon style={{ width: '.7em' }} />
                login
              </Login>
            </Link>
            <span>/</span>
            <Link to="register">
              <Register>register</Register>
            </Link>
            {token && <Logout onClick={onLogoutClicked}>logout</Logout>}
          </RegisterContainer>
          <IconsContainer>
            <Search onClick={onSearchBarClicked}>
              <SearchIcon style={{ width: '1em' }} />
            </Search>
            <Cart>
              <Link to="/cart">
                <Badge badgeContent={getTotalQuantity() || 0} color="success">
                  <ShoppingCartOutlinedIcon style={{ width: '.9em' }} />
                </Badge>
              </Link>
            </Cart>
          </IconsContainer>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default NavBar
