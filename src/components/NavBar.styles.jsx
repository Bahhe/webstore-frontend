import { mobile, mobileCart, tablet } from "../assests/globalStyles/responsive"
import styled from "styled-components"

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
  ${tablet({
    display: "none",
  })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  ${tablet({
    display: "none",
  })}
`

const Logo = styled.span`
  flex: 1;
  font-weight: 900;
  cursor: pointer;
  margin: 0.5em 0;
`

const LogoImage = styled.img`
  width: 10%;
  ${tablet({
    width: "20%",
    margin: "0 auto",
  })}
`
const LogoWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Links = styled.ul`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-transform: uppercase;
  cursor: pointer;
  ${tablet({
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

export {
  Avatar,
  Logo,
  LogoImage,
  LogoWrapper,
  Links,
  LinkElement,
  RegisterContainer,
  Login,
  Register,
  IconsContainer,
  Search,
  SearchItems,
  SearchBar,
  Cart,
  MobileCart,
  Logout,
  AdminDashBoard,
  MenuButton,
  User,
  Left,
  Right,
  Wrapper
}