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
  top: 8em;
  border-radius: 1em;
  margin: auto;
  min-width: 90%;
  min-height: 40vh;
  z-index: 4;
  background-color: white;
  display: flex;
  box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.2);
  transform: translateX(${(props) => props.translate});
  transition: 0.5s ease-in-out;
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

const ToggleMenu = ({ translate, toggle }) => {
  const navigate = useNavigate()
  const token = useSelector(selectCurrentToken)
  const { id } = useAuth()
  const { data: user, isLoading: isLoadingUser } = useGetUserByIdQuery(id)
  const [sendLogout, { isLoading, isError, error }] = useSendLogoutMutation()
  const onLogoutClicked = async () => await sendLogout()

  if (isLoading) return <Loader />
  if (isError) return <p>{error?.data?.message}</p>

  return (
    <Container
      onClick={() => toggle(!translate)}
      translate={translate ? "0" : "-100%"}
    >
      <Links>
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
              style={{ color: "blue" }}
              onClick={() => {
                navigate("/login")
              }}
            >
              login
            </LinkElement>
            <LinkElement
              style={{ color: "blue" }}
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
