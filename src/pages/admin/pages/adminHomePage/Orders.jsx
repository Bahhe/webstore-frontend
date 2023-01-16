import React from "react"
import { useNavigate } from "react-router-dom"
import PulseLoader from "react-spinners/PulseLoader"
import styled from "styled-components"

const Date = styled.div`
  text-align: start;
  width: 15em;
  opacity: 0.7;
`
const StatusSection = styled.div`
  text-align: start;
  width: 15em;
  opacity: 0.7;
`
const ButtonContainer = styled.div`
  text-align: start;
  width: 15em;
  opacity: 0.7;
`
const Status = styled.div`
  text-align: start;
  opacity: 0.7;
  padding: 1em;
  border-radius: 1em;
  text-transform: capitalize;
  font-weight: 500;
  opacity: 0.6;
  width: 6em;
  box-shadow: 0 0 5px #ccc;
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
  padding: 0.2em;
  border-radius: 1em;
  background: linear-gradient(90deg, rgba(230,220,220,1) 0%, rgba(255,255,255,0.6783088235294117) 100%);
`
const Image = styled.img`
  width: 3em;
  height: 3em;
  border-radius: 50%;
`
const Name = styled.h2`
  text-transform: capitalize;
  font-size: 0.9em;
  font-weight: 500;
  margin-right: 1em;
`
const Button = styled.button`
  background-color: #0ae;
  text-transform: capitalize;
  font-size: 1em;
  padding: 1em 2em;
  border: none;
  border-radius: 1em;
  color: white;
  cursor: pointer;
  box-shadow: 0 0 5px #ccc;
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
      <UserItem style={{ width: "30%" }}>
        <Image
          style={{ margin: "0 1em 0 0" }}
          src="https://firebasestorage.googleapis.com/v0/b/webstore-d48be.appspot.com/o/user(1).png?alt=media&token=477b5102-c1b2-4580-a74b-c3ce9907acae"
        />
        <Name>{`${order.firstName} ${order.lastName}`}</Name>
      </UserItem>
      <Date style={{ width: "30%" }}>{convertTimeStamp(order.createdAt)}</Date>
      <StatusSection style={{ width: "10%" }}>
        {order.products?.length}
      </StatusSection>
      {order.status === "pending" ? (
        <Status style={{ color: "orange", border: "1px solid orange" }}>
          {order.status}
        </Status>
      ) : order.status === "waiting" ? (
        <Status style={{ color: "red", border: "1px solid red" }}>
          {order.status}
        </Status>
      ) : order.status === "approved" ? (
        <Status style={{ color: "#198754", border: "1px solid #198754" }}>
          {order.status}
        </Status>
      ) : null}
      <ButtonContainer style={{ marginLeft: "1em", width: "4em" }}>
        <Button onClick={() => navigate(`/admin/orders/${order._id}`)}>
          check
        </Button>
      </ButtonContainer>
    </User>
  )
}

export default Orders
