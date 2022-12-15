import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/homePage/Home'
import Login from './features/auth/login/Login'
import Register from './features/auth/register/Register'
import Shop from './pages/shopPage/Shop'
import Cart from './pages/cartPage/Cart'
import ProductView from './pages/productPage/ProductView'
import Checkout from './pages/checkoutPage/Checkout'
import Prefetch from './features/auth/Prefetch'
import PersistLogin from './features/auth/login/PersistLogin'
import AdminLayout from './pages/admin/adminComponents/AdminLayout'
import AdminHomePage from './pages/admin/pages/AdminHomePage'
import UserPage from './pages/admin/pages/UserPage'
import EditUserPage from './pages/admin/pages/EditUserPage'

function App() {
  return (
    <Routes>
      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<AdminHomePage />} />
        <Route path="users" element={<UserPage />} />
        <Route path="user/edit" element={<EditUserPage />} />
      </Route>
      <Route path="/" element={<Layout />}>
        {/* auth */}
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        {/* auth */}

        {/* protected routes */}
        <Route element={<PersistLogin />}>
          <Route element={<Prefetch />}>
            <Route index element={<Home />} />
            <Route path="shop">
              <Route index element={<Shop />} />
              <Route path="product/:userId" element={<ProductView />} />
            </Route>
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Route>
        {/* protected routes */}
      </Route>
    </Routes>
  )
}

export default App
