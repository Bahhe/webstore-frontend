import SearchIcon from "@mui/icons-material/Search"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import { Badge } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { useNavigate } from "react-router-dom"
import { useSendLogoutMutation } from "../features/auth/authApiSlice"
import styled from "styled-components"
import { useSelector } from "react-redux"
import { selectCurrentToken } from "../features/auth/authSlice"
import useAuth from "../hooks/useAuth"
import { Dashboard, LogoutOutlined } from "@mui/icons-material"
import { laptop, mobile } from "../assests/globalStyles/responsive"
import ToggleMenu from "./ToggleMenu"
import { useState } from "react"

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
  ${mobile({
    display: "none",
  })}
`

const Left = styled.div`
  flex: 2;
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
  ${mobile({
    display: "none",
  })}
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
const MobileCart = styled.div`
  padding: 0.5em;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
  ${laptop({
    display: "none",
  })}
`
const Logout = styled.button`
  border: none;
  background-color: transparent;
  margin: 0 1em;
  cursor: pointer;
`
const AdminDashBoard = styled.button`
  border: none;
  background-color: transparent;
  margin: 0 1em;
  cursor: pointer;
`
const MenuButton = styled.div`
  cursor: pointer;
  ${laptop({
    display: "none",
  })}
`
const MenuWrapper = styled.div``

const NavBar = () => {
  const [showButton, setShowButton] = useState(false)
  const { cart } = useSelector((state) => state.cart)

  const getTotalQuantity = () => {
    let total = 0
    cart.forEach((item) => {
      total += item.quantity
    })
    return total
  }
  const token = useSelector(selectCurrentToken)
  const navigate = useNavigate()
  const { isAdmin } = useAuth()

  const onSearchBarClicked = () => {
    navigate("/shop")
  }

  const [sendLogout, { isLoading, isError, error }] = useSendLogoutMutation()

  const onLogoutClicked = () => sendLogout()

  if (isLoading) return <p>login out...</p>
  if (isError) return <p>{error.message}</p>

  return (
    <Container>
      <Wrapper>
        <Left>
          <MenuButton onClick={() => setShowButton((prev) => !prev)}>
            <MenuIcon style={{ color: "black", fontSize: "2em" }} />
          </MenuButton>
          {showButton && (
            <MenuWrapper onClick={() => setShowButton((prev) => !prev)}>
              <ToggleMenu />
            </MenuWrapper>
          )}
          <Logo onClick={() => navigate("/")}>TIMGAD.</Logo>
          <MobileCart onClick={() => navigate("/cart")}>
            <Badge badgeContent={getTotalQuantity() || 0} color="success">
              <ShoppingCartOutlinedIcon style={{ width: ".9em" }} />
            </Badge>
          </MobileCart>
          <Links>
            <LinkElement onClick={() => navigate(`/`)}>home</LinkElement>
            <LinkElement onClick={() => navigate(`/shop`)}>shop</LinkElement>
            <LinkElement
              onClick={() =>
                window.scrollBy({
                  top: document.documentElement.scrollHeight,
                  behavior: "smooth",
                })
              }
            >
              contact us
            </LinkElement>
            <LinkElement>about</LinkElement>
          </Links>
        </Left>
        <Right>
          {isAdmin && (
            <AdminDashBoard onClick={() => navigate("/admin")}>
              <Dashboard />
            </AdminDashBoard>
          )}
          {token ? (
            <Logout onClick={onLogoutClicked}>
              <LogoutOutlined />
            </Logout>
          ) : (
            <RegisterContainer>
              <Login
                onClick={() => {
                  navigate("/login")
                }}
              >
                <PersonOutlineOutlinedIcon style={{ width: ".7em" }} />
                login
              </Login>
              <span>/</span>
              <Register onClick={() => navigate("/register")}>
                register
              </Register>
            </RegisterContainer>
          )}
          <IconsContainer>
            <Search onClick={onSearchBarClicked}>
              <SearchIcon style={{ width: "1em" }} />
            </Search>
            <Cart onClick={() => navigate("/cart")}>
              <Badge badgeContent={getTotalQuantity() || 0} color="success">
                <ShoppingCartOutlinedIcon style={{ width: ".9em" }} />
              </Badge>
            </Cart>
          </IconsContainer>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default NavBar
