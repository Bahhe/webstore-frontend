import SearchIcon from "@mui/icons-material/Search"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import { Dashboard, LogoutOutlined } from "@mui/icons-material"
import MenuIcon from "@mui/icons-material/Menu"
import styled from "styled-components"
import { Badge } from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom"
import { useSendLogoutMutation } from "../features/auth/authApiSlice"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { selectCurrentToken } from "../features/auth/authSlice"
import { mobile, mobileCart } from "../assests/globalStyles/responsive"
import useAuth from "../hooks/useAuth"
import ToggleMenu from "./ToggleMenu"
import Loader from "./Loader"
import logo from "../assests/images/logo.png"

const Container = styled.div`
  display: flex;
  border-radius: 1em;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 1em auto;
  text-align: center;
  position: fixed;
  background-color: white;
  z-index: 5;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.2);
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
  text-transform: uppercase;
  cursor: pointer;
  ${mobile({
    display: "none",
  })}
`
const LinkElement = styled.li`
  flex: 1;
  list-style: none;
  font-weight: 300;
  &:hover {
    opacity: 0.5;
  }
`
const RegisterContainer = styled.div`
  margin: 1em;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: 300;
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
const SearchItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 70%;
  right: 15%;
  z-index: 4;
  border: 1px solid lightgrey;
  background-color: white;
  box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.2);
`
const SearchBar = styled.input`
  border: none;
  border-radius: 0.5em;
  padding: 0.5em 2em;
  margin: 0.5em 0;
  outline: none;
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
  ${mobileCart({
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
  ${mobileCart({
    display: "none",
  })}
`
const User = styled.div``
const Avatar = styled.img`
  width: 2em;
  height: 2em;
  border-radius: 50%;
  cursor: pointer;
`

const NavBar = () => {
  const location = useLocation().pathname
  const [showSearchedItems, setShowSearchedItems] = useState(false)
  const [search, setSearch] = useState("")
  const [translate, setTranslate] = useState(false)
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
  const { isAdmin, id } = useAuth()

  const onSearchBarClicked = () => {
    if (location === "/shop") {
      return alert("there's already a search bar above the products")
    }
    setShowSearchedItems((prev) => !prev)
  }

  const [sendLogout, { isLoading, isError, error }] =
    useSendLogoutMutation()

  const onLogoutClicked = async () => {
    await sendLogout()
  }
  const onSearch = (e) => {
    setSearch(e.target.value)
  }
  const onEnter = (e) => {
    if (e.key === "Enter") {
      navigate(`/shop?search=${search}`)
      setSearch("")
      setShowSearchedItems(false)
    }
  }

  if (isLoading) return <Loader />
  if (isError) return <p>{error?.data?.message}</p>

  return (
    <Container>
      <Wrapper>
        <Left>
          <MenuButton onClick={() => setTranslate((prev) => !prev)}>
            <MenuIcon style={{ color: "black", fontSize: "2em" }} />
          </MenuButton>
          <ToggleMenu translate={translate} toggle={setTranslate} />
          <Logo onClick={() => navigate("/")}>
            <img src={logo} width="50%" height="100%" alt="logo" />
          </Logo>
          <MobileCart onClick={() => navigate("/cart")}>
            <Badge color="success" badgeContent={getTotalQuantity()} showZero>
              <ShoppingCartOutlinedIcon />
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
            <LinkElement
              onClick={() =>
                window.scrollBy({
                  top: document.documentElement.scrollHeight,
                  behavior: "smooth",
                })
              }
            >
              about
            </LinkElement>
          </Links>
        </Left>
        <Right>
          {isAdmin && (
            <AdminDashBoard onClick={() => navigate("/admin")}>
              <Dashboard style={{ color: "#5a5fe5" }} />
            </AdminDashBoard>
          )}
          {!token && (
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
            {showSearchedItems && (
              <SearchItems>
                <SearchBar
                  type="text"
                  name="search"
                  id="search"
                  value={search}
                  onChange={onSearch}
                  onKeyDown={onEnter}
                  autoFocus={showSearchedItems}
                />
                <SearchIcon />
              </SearchItems>
            )}
            <Search onClick={onSearchBarClicked}>
              <SearchIcon />
            </Search>
            <Cart onClick={() => navigate("/cart")}>
              <Badge badgeContent={getTotalQuantity()} color="success" showZero>
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Cart>
          </IconsContainer>
          {token && (
            <>
              <Logout onClick={onLogoutClicked}>
                <LogoutOutlined />
              </Logout>
              <User onClick={() => navigate(`/user/${id}`)}>
                <Avatar src="https://firebasestorage.googleapis.com/v0/b/webstore-d48be.appspot.com/o/user(1).png?alt=media&token=477b5102-c1b2-4580-a74b-c3ce9907acae" />
              </User>
            </>
          )}
        </Right>
      </Wrapper>
    </Container>
  )
}

export default NavBar
