import styled from 'styled-components'
import { DataGrid } from '@mui/x-data-grid'
import { Delete } from '@mui/icons-material'
import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from '../../../features/users/usersApiSlice'
import { useNavigate } from 'react-router-dom'
import useTitle from '../../../hooks/useTitle'
import { Tooltip } from '@mui/material'
import { toast, Toaster } from 'react-hot-toast'
import { useEffect } from 'react'
import Spinner from '../../../components/Spinner'

const Grid = styled.div``

const Container = styled.div`
  width: 80%;
  height: 100vh;
  margin: 5em 0 0 0;
  display: flex;
  justify-content: center;
`
const CellContainer = styled.div`
  display: flex;
  align-items: center;
`
const EditButton = styled.div`
  padding: 0.5em 2em;
  margin: 0 1em 0 0;
  text-transform: capitalize;
  background-color: #0ae;
  border: none;
  border-radius: 1em;
  color: white;
  cursor: pointer;
  box-shadow: 0 0 5px #4a4a4a;
`

const UsersListPage = () => {
  useTitle('TIMGAD. | Users')
  const [deleteUser, { isSuccess: isSuccessDeleted }] = useDeleteUserMutation()
  const navigate = useNavigate()
  const { data: users, isLoading, isSuccess } = useGetUsersQuery('users')

  useEffect(() => {
    if (isSuccessDeleted) {
      toast.success('Success!, user deleted', {
        duration: 3000,
        icons: '🎉',
      })
    }
  }, [isSuccessDeleted])
  let content

  if (isLoading) {
    content = <Spinner />
  }

  if (isSuccess) {
    const columns = [
      { field: 'id', headerName: 'ID', width: 250 },
      { field: 'firstName', headerName: 'First name', width: 130 },
      { field: 'lastName', headerName: 'Last name', width: 130 },
      { field: 'email', headerName: 'Email', width: 220 },
      {
        field: 'transactions',
        headerName: 'Transactions',
        width: 160,
      },
      {
        field: 'settings',
        headerName: 'Settings',
        width: 160,
        renderCell: (params) => {
          return (
            <CellContainer>
              <EditButton
                onClick={() => navigate(`/admin/user/edit/${params.row.id}`)}
              >
                edit
              </EditButton>
              {!params.row.admin && (
                <Tooltip title="delete">
                  <Delete
                    onClick={async () =>
                      await deleteUser({ id: params.row.id })
                    }
                    style={{ color: 'red', cursor: 'pointer' }}
                  />
                </Tooltip>
              )}
            </CellContainer>
          )
        },
      },
    ]

    const rows = Object.values(users?.entities).map((user) => ({
      id: user.id,
      lastName: user.lastName,
      firstName: user.firstName,
      email: user.email,
      admin: user.isAdmin,
      transactions: 'to be filled later',
    }))

    content = (
      <Grid style={{ height: 800, width: '95%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={3}
          rowsPerPageOptions={[3]}
          checkboxSelection
        />
      </Grid>
    )
  }
  return (
    <Container>
      <Toaster toastOptions={{ position: 'top-center' }} />
      {users?.length ? content : <p>no users</p>}
    </Container>
  )
}

export default UsersListPage
