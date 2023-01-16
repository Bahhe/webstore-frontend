import React from "react"

import styled from "styled-components"
import { DataGrid } from "@mui/x-data-grid"
import { Delete } from "@mui/icons-material"
import {
  useDeleteOrderMutation,
  useGetOrdersQuery,
} from "../../../features/orders/ordersApiSlice"
import { useNavigate } from "react-router-dom"
import PulseLoader from "react-spinners/PulseLoader"
import useTitle from "../../../hooks/useTitle"
import { Tooltip } from "@mui/material"

const Grid = styled.div``

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 5em 0 0 0;
  display: flex;
  justify-content: center;
`
const CellContainer = styled.div`
  display: flex;
  align-items: center;
`
const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
`
const CheckButton = styled.button`
  border: none;
  background-color: #0ae;
  color: white;
  padding: 0.8em 1.5em;
  border-radius: 1em;
  cursor: pointer;
`

const OrdersListPage = () => {
  useTitle("TIMGAD. | Orders")
  const navigate = useNavigate()
  const [deleteOrder] = useDeleteOrderMutation()
  const { orders, isLoading, isSuccess } = useGetOrdersQuery("orders", {
    selectFromResult: ({ data, isLoading, isSuccess }) => ({
      orders: data?.entities,
      isLoading,
      isSuccess,
    }),
  })

  if (isLoading) {
    return <PulseLoader />
  }

  if (isSuccess) {
    const columns = [
      { field: "id", headerName: "ID", width: 220 },
      {
        field: "firstName",
        headerName: "FirstName",
        width: 130,
      },
      { field: "lastName", headerName: "LastName", width: 130 },
      { field: "email", headerName: "Email", width: 220 },
      {
        field: "city",
        headerName: "City",
        width: 100,
      },
      {
        field: "number",
        headerName: "Number",
        width: 120,
      },
      {
        field: "shipping",
        headerName: "Shipping",
        width: 120,
      },
      {
        field: "status",
        headerName: "Status",
        width: 100,
      },
      {
        field: "settings",
        headerName: "Settings",
        width: 90,
        renderCell: (params) => {
          return (
            <CellContainer>
              <Tooltip title="delete">
                <DeleteButton
                  onClick={async () => await deleteOrder({ id: params.row.id })}
                >
                  <Delete style={{ color: "red", cursor: "pointer" }} />
                </DeleteButton>
              </Tooltip>
            </CellContainer>
          )
        },
      },
      {
        field: "check",
        headerName: "Check",
        width: 100,
        renderCell: (params) => {
          return (
            <CellContainer>
              <CheckButton
                onClick={() => navigate(`/admin/orders/${params.row.id}`)}
              >
                check
              </CheckButton>
            </CellContainer>
          )
        },
      },
    ]

    const rows = Object.values(orders).map((order) => ({
      id: order.id,
      firstName: order.firstName,
      lastName: order.lastName,
      email: order.email,
      city: order.city,
      number: order.number,
      shipping: order.shipping,
      status: order.status,
    }))

    return (
      <Container>
        <Grid style={{ height: 800, width: "95%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pemailSize={5}
            rowsPerPemailOptions={[5]}
            checkboxSelection
          />
        </Grid>
      </Container>
    )
  }
}

export default OrdersListPage
