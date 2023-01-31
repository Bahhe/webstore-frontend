import React, { useEffect } from 'react'
import styled from 'styled-components'
import { DataGrid } from '@mui/x-data-grid'
import { Delete } from '@mui/icons-material'
import {
  useDeleteOrderMutation,
  useGetOrdersQuery,
} from '../../../features/orders/ordersApiSlice'
import { useNavigate } from 'react-router-dom'
import useTitle from '../../../hooks/useTitle'
import { Tooltip } from '@mui/material'
import { toast, Toaster } from 'react-hot-toast'
import Spinner from '../../../components/Spinner'

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
  box-shadow: 0 0 5px #4a4a4a;
  cursor: pointer;
`

const OrdersListPage = () => {
  useTitle('TIMGAD. | Orders')
  const navigate = useNavigate()
  const [deleteOrder, { isSuccess: isSuccessDeleted }] =
    useDeleteOrderMutation()
  const { data: orders, isLoading, isSuccess } = useGetOrdersQuery('orders')
  useEffect(() => {
    if (isSuccessDeleted) {
      toast.success('Success!, order deleted', {
        duration: 3000,
        icon: '🎉',
      })
    }
  }, [isSuccessDeleted])
  let content
  if (isLoading) {
    content = <Spinner />
  }

  if (isSuccess) {
    const columns = [
      { field: 'id', headerName: 'ID', width: 220 },
      {
        field: 'firstName',
        headerName: 'FirstName',
        width: 130,
      },
      { field: 'lastName', headerName: 'LastName', width: 130 },
      { field: 'email', headerName: 'Email', width: 220 },
      {
        field: 'city',
        headerName: 'City',
        width: 100,
      },
      {
        field: 'number',
        headerName: 'Number',
        width: 120,
      },
      {
        field: 'shipping',
        headerName: 'Shipping',
        width: 120,
      },
      {
        field: 'status',
        headerName: 'Status',
        width: 100,
      },
      {
        field: 'settings',
        headerName: 'Settings',
        width: 90,
        renderCell: (params) => {
          return (
            <CellContainer>
              <Tooltip title="delete">
                <DeleteButton
                  onClick={async () => await deleteOrder({ id: params.row.id })}
                >
                  <Delete style={{ color: 'red', cursor: 'pointer' }} />
                </DeleteButton>
              </Tooltip>
            </CellContainer>
          )
        },
      },
      {
        field: 'check',
        headerName: 'Check',
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

    const rows = Object.values(orders?.entities).map((order) => ({
      id: order.id,
      firstName: order.firstName,
      lastName: order.lastName,
      email: order.email,
      city: order.city,
      number: order.number,
      shipping: order.shipping,
      status: order.status,
    }))
    content = (
      <Grid style={{ height: 800, width: '95%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </Grid>
    )
  }

  return (
    <Container>
      <Toaster toastOptions={{ position: 'top-center' }} />
      {orders?.length ? content : <p>no orders</p>}
    </Container>
  )
}

export default OrdersListPage
