import styled from "styled-components"
import { DataGrid } from "@mui/x-data-grid"
import { Delete } from "@mui/icons-material"
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../../features/products/productsApiSlice"
import { useNavigate } from "react-router-dom"
import PulseLoader from "react-spinners/PulseLoader"
import useTitle from "../../../hooks/useTitle"

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
const Image = styled.img`
  width: 5em;
  height: 5em;
`
const DeleteButton = styled.button`
  background-color: white;
  border: none;
`

const ProductListPage = () => {
  useTitle("TIMGAD. | Products")
  const navigate = useNavigate()

  const [deleteProduct] = useDeleteProductMutation()

  const {
    data: products,
    isLoading,
    isSuccess,
  } = useGetProductsQuery("products", {
    refetchOnMountOrArgChange: true,
  })

  if (isLoading) {
    return <PulseLoader />
  }

  if (isSuccess) {
    const { entities } = products
    const columns = [
      { field: "id", headerName: "ID", width: 240 },
      {
        field: "image",
        headerName: "Image",
        width: 130,
        renderCell: (params) => {
          return (
            <CellContainer>
              <Image src={params.row.image} />
            </CellContainer>
          )
        },
      },
      { field: "title", headerName: "Title", width: 130 },
      { field: "description", headerName: "Description", width: 190 },
      {
        field: "stock",
        headerName: "Stock",
        width: 100,
      },
      {
        field: "price",
        headerName: "Price",
        width: 100,
      },
      {
        field: "settings",
        headerName: "Settings",
        width: 160,
        renderCell: (params) => {
          return (
            <CellContainer>
              <EditButton
                onClick={() => navigate(`/admin/product/edit/${params.row.id}`)}
              >
                edit
              </EditButton>
              <DeleteButton
                onClick={async () => await deleteProduct({ id: params.row.id })}
              >
                <Delete style={{ color: "red", cursor: "pointer" }} />
              </DeleteButton>
            </CellContainer>
          )
        },
      },
    ]

    const rows = Object.values(entities).map((product) => ({
      id: product.id,
      image: product.img,
      title: product.title,
      description: product.desc,
      stock: product.inStock ? "inStock" : "notInStock",
      price: product.price,
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

export default ProductListPage
