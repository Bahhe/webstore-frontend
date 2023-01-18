import React, { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import {
  useDeleteOrderMutation,
  useGetOrdersQuery,
  useUpdateOrderMutation,
} from "../../../features/orders/ordersApiSlice"
import OrderProduct from "./OrderProduct"
import PulseLoader from "react-spinners/PulseLoader"
import useTitle from "../../../hooks/useTitle"
import FeedIcon from "@mui/icons-material/Feed"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5em;
  border-radius: 3em;
  box-shadow: 0 0 20px #ccc;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Info = styled.div`
  margin: 2em;
  flex: 1;
`
const Title = styled.div`
  font-size: 1.1em;
  font-weight: 500;
  text-transform: capitalize;
  opacity: 0.5;
`
const MainTitle = styled.div`
  font-size: 2em;
  text-transform: uppercase;
  margin: 1em 1em;
`
const Content = styled.div`
  color: black;
  font-size: 1.2em;
`
const Products = styled.div`
  margin: 1em 5em 1em 1em;
  flex: 1;
`

const Status = styled.div`
  margin: 2em 0 0 1em;
`

const Button = styled.button`
  border: none;
  padding: 1em 1.5em;
  color: white;
  background-color: #0ae;
  margin: 0 1em 0 0;
  border-radius: 1em;
  text-transform: capitalize;
  cursor: pointer;
  box-shadow: 0 0 5px #4a4a4a;
`

const InfoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #d3d3d323;
  box-shadow: 0 0 20px #ccc;
  padding: 1em;
  padding-left: 5em;
  margin: 0.5em;
  border-radius: 1em;
`
const Icon = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  left: 1em;
  display: flex;
  align-items: center;
`

const OrderPage = () => {
  useTitle("TIMGAD. | Orders")
  const { orderId } = useParams()
  const navigate = useNavigate()
  const [updateOrder, { isSuccess: isOrderSuccess }] = useUpdateOrderMutation()
  const [deleteOrder, { isSuccess: isDeleteOrderSuccess }] =
    useDeleteOrderMutation()
  const { order, isLoading, isSuccess } = useGetOrdersQuery("orders", {
    selectFromResult: ({ data, isLoading, isSuccess }) => ({
      order: data?.entities[orderId],
      isLoading,
      isSuccess,
    }),
  })

  useEffect(() => {
    if (isOrderSuccess) {
      navigate("/admin/orders")
    }
  }, [isOrderSuccess, navigate])

  const handleApproved = async () => {
    await updateOrder({ id: order.id, status: "approved" })
  }

  const hanldePending = async () => {
    await updateOrder({ id: order.id, status: "pending" })
  }

  const handleDelete = async () => {
    await deleteOrder({ id: order.id })
  }

  useEffect(() => {
    if (isDeleteOrderSuccess) {
      navigate("/admin/orders")
    }
  }, [isDeleteOrderSuccess, navigate])

  useEffect(() => {
    if (isOrderSuccess) {
      navigate("/admin/orders")
    }
  }, [isOrderSuccess, navigate])

  if (isLoading) {
    return <PulseLoader />
  }
  if (isSuccess) {
    return (
      <Container>
        <MainTitle>order</MainTitle>
        <Wrapper>
          <Info>
            <InfoWrapper>
              <Icon>
                <FeedIcon style={{ opacity: ".5", fontSize: "3em" }} />
              </Icon>
              <Title>name:</Title>
              <Content>{order.firstName + " " + order.lastName}</Content>
            </InfoWrapper>
            <InfoWrapper>
              <Icon>
                <FeedIcon style={{ opacity: ".5", fontSize: "3em" }} />
              </Icon>
              <Title>email:</Title>
              <Content>{order.email}</Content>
            </InfoWrapper>
            <InfoWrapper>
              <Icon>
                <FeedIcon style={{ opacity: ".5", fontSize: "3em" }} />
              </Icon>
              <Title>city:</Title>
              <Content>{order.city}</Content>
            </InfoWrapper>
            <InfoWrapper>
              <Icon>
                <FeedIcon style={{ opacity: ".5", fontSize: "3em" }} />
              </Icon>
              <Title>phone number:</Title>
              <Content>{order.number}</Content>
            </InfoWrapper>
            <InfoWrapper>
              <Icon>
                <FeedIcon style={{ opacity: ".5", fontSize: "3em" }} />
              </Icon>
              <Title>shipping method:</Title>
              <Content>{order.shipping}</Content>
            </InfoWrapper>
            <Status>
              <Button onClick={hanldePending}>pending</Button>
              <Button onClick={handleApproved}>approve</Button>
              <Button style={{ backgroundColor: "red" }} onClick={handleDelete}>
                delete
              </Button>
            </Status>
          </Info>
          <Products>
            {order.products.map((productId) => (
              <OrderProduct key={productId} productId={productId} />
            ))}
          </Products>
        </Wrapper>
      </Container>
    )
  }
}

export default OrderPage
