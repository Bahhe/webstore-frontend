import React from "react"
import { useParams } from "react-router-dom"
import { useGetProductsQuery } from "../../../features/products/productsApiSlice"
import EditProductForm from "./EditProductForm"
import styled from "styled-components"
import useTitle from "../../../hooks/useTitle"
import Spinner from "../../../components/Spinner"

const Container = styled.div`
  width: 100%;
`

const EditProductPage = () => {
  useTitle("BlackBeard. | Edit Product")
  const { productId } = useParams()

  const { product, isSuccess, isLoading, isError, error } = useGetProductsQuery(
    "products",
    {
      selectFromResult: ({ data, isSuccess, isLoading, isError, error }) => ({
        product: data?.entities[productId],
        isSuccess,
        isLoading,
        isError,
        error,
      }),
    }
  )
  let content
  if (isError) content = <p>{error?.data?.message}</p>
  if (isLoading) content = <Spinner />
  if (isSuccess)
    content = (
      <Container>
        <EditProductForm product={product} />
      </Container>
    )

  return content
}

export default EditProductPage
