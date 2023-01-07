import React from "react"
import { useNavigate } from "react-router-dom"
import PulseLoader from "react-spinners/PulseLoader"
import styled from "styled-components"

const Title = styled.div`
  text-align: start;
  width: 15em;
  opacity: 0.7;
`
const Status = styled.div`
  text-align: start;
  opacity: 0.7;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 1em;
  border-radius: 1em;
  text-transform: capitalize;
  font-weight: 500;
  opacity: 0.6;
  width: 6em;
`
const UserItem = styled.div`
  text-align: start;
  display: flex;
  align-items: center;
`
const User = styled.div`
  display: flex;
  align-items: center;
  margin: 1em 0 0 0;
`
const Image = styled.img`
  width: 3em;
  height: 3em;
  border-radius: 50%;
`
const Name = styled.div`
  text-transform: capitalize;
  font-size: 0.9em;
  font-weight: 500;
`
const Button = styled.button`
  background-color: green;
  text-transform: capitalize;
  font-size: 1em;
  padding: 1em;
  border: none;
  border-radius: 1em;
  color: white;
  cursor: pointer;
`

const Orders = ({ order }) => {
  const navigate = useNavigate()
  const convertTimeStamp = (timestamp) => {
    const time = new window.Date(timestamp)
    return (
      time.getDate() +
      " " +
      time.toLocaleString("default", { month: "long" }) +
      " " +
      time.getFullYear() +
      " " +
      time.getHours() +
      ":" +
      time.getMinutes()
    )
  }

  if (!order) {
    return <PulseLoader />
  }

  return (
    <User>
      <UserItem style={{ width: "11em" }}>
        <Image
          style={{ margin: "0 1em 0 0" }}
          src="https://firebasestorage.googleapis.com/v0/b/webstore-d48be.appspot.com/o/user(1).png?alt=media&token=477b5102-c1b2-4580-a74b-c3ce9907acae"
        />
        <Name>{`${order.firstName} ${order.lastName}`}</Name>
      </UserItem>
      <Title style={{ width: "13em" }}>
        {convertTimeStamp(order.createdAt)}
      </Title>
      <Title style={{ width: "5em" }}>{order.products?.length}</Title>
      {order.status === "pending" ? (
        <Status style={{ color: "orange" }}>{order.status}</Status>
      ) : order.status === "waiting" ? (
        <Status style={{ color: "red" }}>{order.status}</Status>
      ) : order.status === "approved" ? (
        <Status style={{ color: "green" }}>{order.status}</Status>
      ) : null}
      <Title style={{ marginLeft: "1em", width: "4em" }}>
        <Button onClick={() => navigate(`/admin/orders/${order._id}`)}>
          check
        </Button>
      </Title>
    </User>
  )
}

export default Orders
