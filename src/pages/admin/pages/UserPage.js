import styled from 'styled-components'
import { DataGrid } from '@mui/x-data-grid'
import { Delete } from '@mui/icons-material'

const Grid = styled.div``

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 5em 0 0 15%;
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
  background-color: green;
  border: none;
  border-radius: 1em;
  color: white;
  cursor: pointer;
`

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'email', headerName: 'Email', width: 190 },
  {
    field: 'status',
    headerName: 'Status',
    width: 160,
  },
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
          <EditButton>edit</EditButton>
          <Delete style={{ color: 'red', cursor: 'pointer' }} />
        </CellContainer>
      )
    },
  },
]

const rows = [
  {
    id: 1,
    lastName: 'Snow',
    firstName: 'Jon',
    email: 'baha@baha.com',
    status: 'active',
    transactions: '$1030',
  },
  {
    id: 2,
    lastName: 'Lannister',
    firstName: 'Cersei',
    email: 'baha@baha.com',
    status: 'active',
    transactions: '$1200',
  },
  {
    id: 3,
    lastName: 'Lannister',
    firstName: 'Jaime',
    email: 'baha@baha.com',
    status: 'active',
    transactions: '$1000',
  },
  {
    id: 4,
    lastName: 'Stark',
    firstName: 'Arya',
    email: 'baha@baha.com',
    status: 'active',
    transactions: '$1234',
  },
  {
    id: 5,
    lastName: 'Targaryen',
    firstName: 'Daenerys',
    email: 'baha@baha.com',
    status: 'active',
    transactions: '$1234',
  },
  {
    id: 6,
    lastName: 'Melisandre',
    firstName: null,
    email: 'baha@baha.com',
    status: 'active',
    transactions: '$1234',
  },
  {
    id: 7,
    lastName: 'Clifford',
    firstName: 'Ferrara',
    email: 'baha@baha.com',
    status: 'active',
    transactions: '$1234',
  },
  {
    id: 8,
    lastName: 'Frances',
    firstName: 'Rossini',
    email: 'baha@baha.com',
    status: 'active',
    transactions: '$1234',
  },
  {
    id: 9,
    lastName: 'Roxie',
    firstName: 'Harvey',
    email: 'baha@baha.com',
    status: 'active',
    transactions: '$1234',
  },
]

const UserPage = () => {
  return (
    <Container>
      <Grid style={{ height: 800, width: '95%' }}>
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

export default UserPage
