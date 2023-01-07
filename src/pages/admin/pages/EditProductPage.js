import React from "react"
import { useParams } from "react-router-dom"
import { useGetProductsQuery } from "../../../features/products/productsApiSlice"
import EditProductForm from "./EditProductForm"
import styled from "styled-components"
import PulseLoader from "react-spinners/PulseLoader"
import useTitle from "../../../hooks/useTitle"

const Container = styled.div`
  width: 100%;
`

const EditProductPage = () => {
  useTitle("TIMGAD. | Edit Product")
  const { productId } = useParams()

  const { product } = useGetProductsQuery("products", {
    selectFromResult: ({ data }) => ({
      product: data?.entities[productId],
    }),
  })

  if (!product) return <PulseLoader />

  const content = (
    <Container>
      <EditProductForm product={product} />
    </Container>
  )

  return content
}

export default EditProductPage
