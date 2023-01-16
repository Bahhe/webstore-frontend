import { createEntityAdapter } from "@reduxjs/toolkit"
import { apiSlice } from "../../app/api/apiSlice"

const ordersAdapter = createEntityAdapter({})

const initialState = ordersAdapter.getInitialState()

export const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => ({
        url: "/orders",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError
        },
      }),
      transformResponse: (responseData) => {
        const loadedOrders = responseData.map((order) => {
          order.id = order._id
          return order
        })
        return ordersAdapter.setAll(initialState, loadedOrders)
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Order", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Order", id })),
          ]
        } else return [{ type: "Order", id: "LIST" }]
      },
    }),
    updateOrder: builder.mutation({
      query: (order) => ({
        url: "/orders",
        method: "PATCH",
        body: { order },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Order", id: arg.id }],
    }),
    addNewOrder: builder.mutation({
      query: (order) => ({
        url: "/orders",
        method: "POST",
        body: order,
      }),
      invalidatesTags: [{ type: "Order", id: "LIST" }],
    }),
    deleteOrder: builder.mutation({
      query: ({ id }) => ({
        url: "/orders",
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: [{ type: "Order", id: "LIST" }],
    }),
  }),
})

export const {
  useGetOrdersQuery,
  useAddNewOrderMutation,
  useDeleteOrderMutation,
  useUpdateOrderMutation,
} = ordersApiSlice
