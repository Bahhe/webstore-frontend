import { GridMenuIcon } from "@mui/x-data-grid"
import React from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { PulseLoader } from "react-spinners"
import styled from "styled-components"
import { useSendLogoutMutation } from "../features/auth/authApiSlice"
import { selectCurrentToken } from "../features/auth/authSlice"

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
const ToggleMenu = () => {
  const navigate = useNavigate()
  const token = useSelector(selectCurrentToken)
  const [sendLogout, { isLoading, isError, error }] = useSendLogoutMutation()
  const onLogoutClicked = () => sendLogout()
  if (isLoading) return <PulseLoader />
  if (isError) return <p>{error.message}</p>
  return (
    <Container>
      <Links>
        <GridMenuIcon style={{ marginBottom: "1em" }} />
        {token ? (
          <LinkElement onClick={onLogoutClicked}>logout</LinkElement>
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
        <LinkElement
          style={{
            borderBottom: "1px solid black",
          }}
        >
          about
        </LinkElement>
      </Links>
    </Container>
  )
}

export default ToggleMenu
