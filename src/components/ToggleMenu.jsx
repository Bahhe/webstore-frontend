import React, { useState } from "react"
import SearchIcon from "@mui/icons-material/Search"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { PulseLoader } from "react-spinners"
import styled from "styled-components"
import { mobile } from "../assests/globalStyles/responsive"
import { useSendLogoutMutation } from "../features/auth/authApiSlice"
import { selectCurrentToken } from "../features/auth/authSlice"
import { useGetUserByIdQuery } from "../features/users/usersApiSlice"
import useAuth from "../hooks/useAuth"
import Loader from "./Loader"

const Container = styled.div`
  position: fixed;
  top: 4.4em;
  left: 0;
  right: 0;
  margin: auto;
  min-width: 90%;
  min-height: 40vh;
  z-index: 4;
  background-color: white;
  display: none;
  box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.2);
  transform: translateX(${(props) => props.translate});
  transition: 300ms ease-in-out;
  ${mobile({
    display: "flex",
  })}
`
const Links = styled.ul`
  margin-top: 1em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: capitalize;
  cursor: pointer;
`
const LinkElement = styled.li`
  list-style: none;
  font-size: 1em;
  font-weight: 500;
  border-top: 1px solid black;
  width: 80%;
  text-align: center;
  padding: 1em 0 1em 1em;
`

const UserName = styled.p`
  font-weight: 500;
`
const User = styled.div`
  width: 80%;
  text-align: left;
  display: flex;
  align-items: center;
  margin-bottom: 1em;
`
const Avatar = styled.img`
  width: 4em;
  height: 4em;
  border-radius: 50%;
  cursor: pointer;
`

const SearchItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 80%;
`
const SearchBar = styled.input`
  border: none;
  border-radius: 0.5em;
  padding: 0.5em 2em;
  margin: 0.5em 0;
  outline: none;
`

const ToggleMenu = ({ translate, toggle }) => {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()
  const token = useSelector(selectCurrentToken)
  const { id } = useAuth()
  const { data: user, isLoading: isLoadingUser } = useGetUserByIdQuery(id)
  const [sendLogout, { isLoading, isError, error }] = useSendLogoutMutation()
  const onLogoutClicked = async () => {
    await sendLogout()
    toggle(!translate)
  }

  const onSearch = (e) => {
    setSearch(e.target.value)
  }
  const onEnter = (e) => {
    if (e.key === "Enter") {
      navigate(`/shop?search=${search}`)
      setSearch("")
      toggle(false)
    }
  }
  if (isLoading) return <Loader />
  if (isError) return <p>{error?.data?.message}</p>

  return (
    <Container translate={translate ? "0" : "-100%"}>
      <Links>
        <SearchItems>
          <SearchBar
            type="text"
            name="search"
            id="search"
            value={search}
            onChange={onSearch}
            onKeyDown={onEnter}
            placeholder="search laptops..."
          />
          <SearchIcon />
        </SearchItems>
        {token ? (
          <User
            onClick={() => {
              toggle(!translate)
              navigate(`/user/${id}`)
            }}
          >
            <Avatar src="https://firebasestorage.googleapis.com/v0/b/webstore-d48be.appspot.com/o/user(1).png?alt=media&token=477b5102-c1b2-4580-a74b-c3ce9907acae" />
            <UserName
              onClick={() => {
                toggle(!translate)
                navigate(`/user/${id}`)
              }}
            >
              {isLoadingUser ? (
                <PulseLoader />
              ) : (
                user.firstName + " " + user.lastName
              )}
            </UserName>
          </User>
        ) : (
          <>
            <LinkElement
              style={{ color: "blue" }}
              onClick={() => {
                navigate("/login")
                toggle(!translate)
              }}
            >
              login
            </LinkElement>
            <LinkElement
              style={{ color: "blue" }}
              onClick={() => {
                navigate("/register")
                toggle(!translate)
              }}
            >
              register
            </LinkElement>
          </>
        )}
        <LinkElement
          onClick={() => {
            toggle(!translate)
            navigate(`/`)
          }}
        >
          home
        </LinkElement>
        <LinkElement
          onClick={() => {
            toggle(!translate)
            navigate(`/shop`)
          }}
        >
          shop
        </LinkElement>
        <LinkElement
          onClick={() => {
            toggle(!translate)
            window.scrollBy({
              top: document.documentElement.scrollHeight,
              behavior: "smooth",
            })
          }}
        >
          contact us
        </LinkElement>
        <LinkElement onClick={() => toggle(!translate)}>about</LinkElement>
        {token && (
          <LinkElement style={{ color: "red" }} onClick={onLogoutClicked}>
            logout
          </LinkElement>
        )}
      </Links>
    </Container>
  )
}

export default ToggleMenu
