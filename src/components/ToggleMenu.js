import { GridMenuIcon } from "@mui/x-data-grid"
import React from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { PulseLoader } from "react-spinners"
import styled from "styled-components"
import { useSendLogoutMutation } from "../features/auth/authApiSlice"
import { selectCurrentToken } from "../features/auth/authSlice"
import { useGetUserByIdQuery } from "../features/users/usersApiSlice"
import useAuth from "../hooks/useAuth"
import Loader from "./Loader"

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  background-color: white;
  display: flex;
  transition: 0.5 ease;
`
const Links = styled.ul`
  margin-top: 3em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: capitalize;
  cursor: pointer;
`
const LinkElement = styled.li`
  list-style: none;
  font-size: 2em;
  border-top: 1px solid black;
  width: 80%;
  text-align: left;
  padding: 1em 0 1em 1em;
`

const UserName = styled.p``
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

const ToggleMenu = () => {
  const navigate = useNavigate()
  const token = useSelector(selectCurrentToken)
  const { id } = useAuth()
  const { data: user, isLoading: isLoadingUser } = useGetUserByIdQuery(id)
  const [sendLogout, { isLoading, isError, error }] = useSendLogoutMutation()
  const onLogoutClicked = async () => await sendLogout()

  if (isLoading) return <Loader />
  if (isError) return <p>{error?.data?.message}</p>

  return (
    <Container>
      <Links>
        <GridMenuIcon style={{ marginBottom: "1em" }} />
        {token ? (
          <User onClick={() => navigate(`/user/${id}`)}>
            <Avatar src="https://firebasestorage.googleapis.com/v0/b/webstore-d48be.appspot.com/o/user(1).png?alt=media&token=477b5102-c1b2-4580-a74b-c3ce9907acae" />
            <UserName onClick={() => navigate(`/user/${id}`)}>
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
              onClick={() => {
                navigate("/login")
              }}
            >
              login
            </LinkElement>
            <LinkElement
              onClick={() => {
                navigate("/register")
              }}
            >
              register
            </LinkElement>
          </>
        )}
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
        {token && <LinkElement onClick={onLogoutClicked}>logout</LinkElement>}
      </Links>
    </Container>
  )
}

export default ToggleMenu
