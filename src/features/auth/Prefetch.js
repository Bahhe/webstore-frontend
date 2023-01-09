import { store } from "../../app/store"
import { productsApiSlice } from "../products/productsApiSlice"
import { usersApiSlice } from "../users/usersApiSlice"
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
      usersApiSlice.util.prefetch("listProducts", "list", { force: true })
    )
  }, [])
  return <Outlet />
}

export default Prefetch
