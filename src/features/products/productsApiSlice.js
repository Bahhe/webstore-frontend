import { createEntityAdapter, createSelector } from '@reduxjs/toolkit'
import { apiSlice } from '../../app/api/apiSlice'

const productsAdapter = createEntityAdapter({})

const initialState = productsAdapter.getInitialState()

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (args) => {
        const { category, sort } = args
        return {
          url: `/products`,
          params: { category, sort },
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
            { type: 'Product', id: 'LIST' },
            ...result.ids.map((id) => ({ type: 'Product', id })),
          ]
        } else return [{ type: 'Product', id: 'LIST' }]
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
            { type: 'Product', id: 'LIST' },
            ...result.ids.map((id) => ({ type: 'Product', id })),
          ]
        } else return [{ type: 'Product', id: 'LIST' }]
      },
    }),
  }),
})

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApiSlice

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
