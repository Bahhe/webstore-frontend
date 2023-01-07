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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5em;
  border-radius: 1em;
  box-shadow: 2px 6px 5px 3px rgba(0, 0, 0, 0.15);
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
  font-size: 1.5em;
  text-transform: capitalize;
  color: rgba(0, 0, 0, 0.7);
`
const MainTitle = styled.div`
  font-size: 2em;
  text-transform: capitalize;
  margin: 1em 1em;
`
const Content = styled.div`
  color: black;
  margin: 0 0 1em 0;
  font-size: 1.4em;
`
const Products = styled.div`
  margin: 1em 5em 1em 1em;
  flex: 1;
`

const Status = styled.div``

const Button = styled.button`
  border: none;
  padding: 1em 1.5em;
  color: white;
  background-color: green;
  margin: 0 1em 0 0;
  border-radius: 1em;
  text-transform: capitalize;
  cursor: pointer;
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
            <Title>name:</Title>
            <Content>{order.firstName + " " + order.lastName}</Content>
            <Title>email:</Title>
            <Content>{order.email}</Content>
            <Title>city:</Title>
            <Content>{order.city}</Content>
            <Title>phone number:</Title>
            <Content>{order.number}</Content>
            <Title>shipping method:</Title>
            <Content>{order.shipping}</Content>
            <Status>
              <Button onClick={hanldePending}>pending</Button>
              <Button onClick={handleApproved}>approved</Button>
              <Button onClick={handleDelete}>delete</Button>
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
