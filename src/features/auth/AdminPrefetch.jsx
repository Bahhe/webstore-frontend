import { store } from "../../app/store"
import { productsApiSlice } from "../products/productsApiSlice"
import { usersApiSlice } from "../users/usersApiSlice"
import { ordersApiSlice } from "../orders/ordersApiSlice"
import { useEffect } from "react"
import { Outlet } from "react-router-dom"

const Prefetch = () => {
  useEffect(() => {
    store.dispatch(
      productsApiSlice.util.prefetch("getProducts", "products", {
        force: true,
      })
    )
    store.dispatch(
      usersApiSlice.util.prefetch("getUsers", "users", { force: true })
    )
    store.dispatch(
      ordersApiSlice.util.prefetch("getOrders", "orders", { force: true })
    )
  }, [])
  return <Outlet />
}

export default Prefetch
