import { createEntityAdapter, createSelector } from "@reduxjs/toolkit"
import { apiSlice } from "../../app/api/apiSlice"

const productsAdapter = createEntityAdapter({
  sortComparer: (a, b) =>
    a.createdAt === b.createdAt ? 0 : a.createdAt ? 1 : -1,
})

const initialState = productsAdapter.getInitialState()

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    listProducts: builder.query({
      query: (args) => {
        return {
          url: `/products/list`,
          params: { ...args },
          validateStatus: (response, result) => {
            return response.status === 200 && !result.isError
          },
        }
      },
      transformResponse: (responseData) => {
        const loadedProducts = responseData.products.map((product) => {
          product.id = product._id
          return product
        })
        return { ...responseData, loadedProducts }
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Product", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Product", id })),
          ]
        } else return [{ type: "Product", id: "LIST" }]
      },
    }),
    getProducts: builder.query({
      query: () => {
        return {
          url: `/products`,
          validateStatus: (response, result) => {
            return response.status === 200 && !result.isError
          },
        }
      },
      transformResponse: (responseData) => {
        const loadedProducts = responseData.map((product) => {
          product.id = product._id
          return product
        })
        return productsAdapter.setAll(initialState, loadedProducts)
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Product", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Product", id })),
          ]
        } else return [{ type: "Product", id: "LIST" }]
      },
    }),
    getProductById: builder.query({
      query: (id) => ({
        url: `/products/?userId=${id}`,
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError
        },
      }),
      transformResponse: (responseData) => {
        const loadedProducts = responseData.map((product) => {
          product.id = product._id
          return product
        })
        return productsAdapter.setAll(initialState, loadedProducts)
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Product", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Product", id })),
          ]
        } else return [{ type: "Product", id: "LIST" }]
      },
    }),
    addNewProduct: builder.mutation({
      query: (product) => ({
        url: "/products",
        method: "POST",
        body: product,
      }),
      nvalidatesTags: [{ type: "Product", id: "LIST" }],
    }),
    updateProduct: builder.mutation({
      query: (product) => ({
        url: `/products/${product.id}`,
        method: "PATCH",
        body: { product },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Product", id: arg.id },
      ],
    }),
    deleteProduct: builder.mutation({
      query: ({ id }) => ({
        url: "/products",
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Product", id: arg.id },
      ],
    }),
  }),
})
export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useAddNewProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useListProductsQuery,
} = productsApiSlice

export const selectProductsResult =
  productsApiSlice.endpoints.getProducts.select()

const selectProductsData = createSelector(
  selectProductsResult,
  (productsResult) => productsResult.data
)

export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
  selectIds: selectProductIds,
} = productsAdapter.getSelectors(
  (state) => selectProductsData(state) ?? initialState
)
