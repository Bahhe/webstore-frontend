import { store } from '../../app/store'
import { productsApiSlice } from '../products/productsApiSlice'
import { cartsApiSlice } from '../carts/cartsApiSlice'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

const Prefetch = () => {
  useEffect(() => {
    store.dispatch(
      cartsApiSlice.util.prefetch('getCarts', 'carts', { force: true })
    )
    store.dispatch(
      productsApiSlice.util.prefetch('getProducts', 'products', { force: true })
    )
  }, [])
  return <Outlet />
}

export default Prefetch
