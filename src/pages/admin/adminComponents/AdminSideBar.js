import React from "react"
import styled from "styled-components"
import {
  Dashboard,
  Home,
  Inventory,
  Inventory2Rounded,
  Person,
  ViewList,
} from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import useAuth from "../../../hooks/useAuth"
import { useGetUsersQuery } from "../../../features/users/usersApiSlice"

const Container = styled.div`
  padding: 2em;
  position: sticky;
  top: 0;
  width: 16em;
  height: 20em;
  border-radius: 50px;
  border: 1px solid lightgrey;
  margin: 1em;
`
const Title = styled.div`
  margin: 1.5em 0 0 0;
  font-size: 0.9em;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.3);
  text-transform: capitalize;
`
const ListItem = styled.div`
  margin: 0.5em;
  text-transform: capitalize;
  color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.5 ease-in-out;
  &:hover {
    color: red;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em 0 0 0;
`
const Admin = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.5em;
`
const Img = styled.img`
  width: 4em;
  height: 4em;
  border-radius: 50%;
`
const Name = styled.h1`
  cursor: pointer;
`

const AdminSideBar = () => {
  const { id } = useAuth()
  const { user } = useGetUsersQuery("users", {
    selectFromResult: ({ data }) => ({
      user: data?.entities[id],
    }),
  })
  const navigate = useNavigate()
  return (
    <Wrapper>
      <Admin>
        <Img src="https://firebasestorage.googleapis.com/v0/b/webstore-d48be.appspot.com/o/user(1).png?alt=media&token=477b5102-c1b2-4580-a74b-c3ce9907acae" />
        <Name onClick={() => navigate(`/admin/user/edit/${user.id}`)}>
          {user && user.firstName + " " + user.lastName}
        </Name>
      </Admin>
      <Container>
        <Title>quick menu</Title>
        <ListItem onClick={() => navigate("/admin")}>
          <Dashboard style={{ marginRight: "0.2em" }} />
          home
        </ListItem>
        <ListItem onClick={() => navigate("/")}>
          <Home style={{ marginRight: "0.2em" }} />
          website
        </ListItem>
        <ListItem onClick={() => navigate("/admin/users")}>
          <Person style={{ marginRight: "0.2em" }} />
          users
        </ListItem>
        <ListItem onClick={() => navigate("/admin/products")}>
          <Inventory style={{ marginRight: "0.2em" }} />
          products
        </ListItem>
        <ListItem onClick={() => navigate("/admin/orders")}>
          <ViewList style={{ marginRight: "0.2em" }} />
          orders
        </ListItem>
        <ListItem
          style={{ color: "blue", marginTop: "1em" }}
          onClick={() => navigate("/admin/product/create")}
        >
          <Inventory2Rounded style={{ marginRight: "0.2em" }} />
          add products
        </ListItem>
      </Container>
    </Wrapper>
  )
}

export default AdminSideBar
