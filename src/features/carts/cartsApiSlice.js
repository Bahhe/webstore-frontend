import { createEntityAdapter } from "@reduxjs/toolkit"
import { apiSlice } from "../../app/api/apiSlice"

const cartsAdapter = createEntityAdapter({})

const initialState = cartsAdapter.getInitialState()

export const cartsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCarts: builder.query({
      query: () => ({
        url: "/carts",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError
        },
      }),
      transformErrorResponse: (responseData) => {
        const loadedCarts = responseData.map((cart) => {
          cart.id = cart._id
          return cart
        })
        return cartsAdapter.setAll(initialState, loadedCarts)
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Cart", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Cart", id })),
          ]
        } else return [{ type: "Cart", id: "LIST" }]
      },
    }),
    addNewCart: builder.mutation({
      query: (cart) => ({
        url: "/carts",
        method: "POST",
        body: cart,
      }),
      invalidatesTags: [{ type: "Cart", id: "LIST" }],
    }),
    deleteCart: builder.mutation({
      query: ({ id }) => ({
        url: "/carts",
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: [{ type: "Cart", id: "LIST" }],
    }),
  }),
})

export const {
  useGetCartsQuery,
  useAddNewCartMutation,
  useDeleteCartMutation,
} = cartsApiSlice
