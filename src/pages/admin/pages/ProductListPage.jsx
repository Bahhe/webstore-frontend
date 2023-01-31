import styled from 'styled-components'
import { DataGrid } from '@mui/x-data-grid'
import { Delete } from '@mui/icons-material'
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from '../../../features/products/productsApiSlice'
import { useNavigate } from 'react-router-dom'
import PulseLoader from 'react-spinners/PulseLoader'
import useTitle from '../../../hooks/useTitle'
import { Tooltip } from '@mui/material'
import { toast, Toaster } from 'react-hot-toast'
import { useEffect } from 'react'

const Grid = styled.div``

const Container = styled.div`
  width: 90%;
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
const Image = styled.img`
  width: 5em;
  height: 5em;
`
const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
`

const ProductListPage = () => {
  useTitle('TIMGAD. | Products')
  const navigate = useNavigate()

  const [deleteProduct, { isSuccess: isSuccessDeleted }] =
    useDeleteProductMutation()

  const {
    data: products,
    isLoading,
    isSuccess,
  } = useGetProductsQuery('products', {
    refetchOnMountOrArgChange: true,
  })

  useEffect(() => {
    if (isSuccessDeleted) {
      toast.success('Success!, product Deleted', {
        duration: 3000,
        icon: '🎉',
      })
    }
  }, [isSuccessDeleted])
  let content

  if (isLoading) {
    content = <PulseLoader />
  }

  if (isSuccess) {
    const columns = [
      { field: 'id', headerName: 'ID', width: 240 },
      {
        field: 'image',
        headerName: 'Image',
        width: 130,
        renderCell: (params) => {
          return (
            <CellContainer>
              <Image src={params.row.image} />
            </CellContainer>
          )
        },
      },
      { field: 'title', headerName: 'Title', width: 300 },
      { field: 'description', headerName: 'Description', width: 190 },
      {
        field: 'stock',
        headerName: 'Stock',
        width: 100,
      },
      {
        field: 'price',
        headerName: 'Price',
        width: 100,
      },
      {
        field: 'settings',
        headerName: 'Settings',
        width: 160,
        renderCell: (params) => {
          return (
            <CellContainer>
              <EditButton
                onClick={() => navigate(`/admin/product/edit/${params.row.id}`)}
              >
                edit
              </EditButton>
              <Tooltip title="delete">
                <DeleteButton
                  onClick={async () =>
                    await deleteProduct({ id: params.row.id })
                  }
                >
                  <Delete style={{ color: 'red', cursor: 'pointer' }} />
                </DeleteButton>
              </Tooltip>
            </CellContainer>
          )
        },
      },
    ]

    const rows = Object.values(products?.entities).map((product) => ({
      id: product.id,
      image: product.img,
      title: product.title,
      description: product.desc,
      stock: product.inStock ? 'inStock' : 'notInStock',
      price: product.price,
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
      {product?.length ? content : <p>no products found</p>}
    </Container>
  )
}

export default ProductListPage
