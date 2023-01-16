import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/homePage/Home"
import Login from "./features/auth/login/Login"
import Register from "./features/auth/register/Register"
import Shop from "./pages/shopPage/Shop"
import Cart from "./pages/cartPage/Cart"
import ProductView from "./pages/productPage/ProductView"
import Checkout from "./pages/checkoutPage/Checkout"
import Prefetch from "./features/auth/Prefetch"
import PersistLogin from "./features/auth/login/PersistLogin"
import AdminLayout from "./pages/admin/adminComponents/AdminLayout"
import AdminHomePage from "./pages/admin/pages/adminHomePage/AdminHomePage"
import UsersListPage from "./pages/admin/pages/UsersListPage"
import EditUserPage from "./pages/admin/pages/EditUserPage"
import CreateUserPage from "./pages/admin/pages/CreateUserPage"
import CreateProductPage from "./pages/admin/pages/CreateProductPage"
import ProductListPage from "./pages/admin/pages/ProductListPage"
import EditProductPage from "./pages/admin/pages/EditProductPage"
import OrdersListPage from "./pages/admin/pages/OrdersListPage"
import OrderPage from "./pages/admin/pages/OrderPage"
import RequireAuth from "./features/auth/RequireAuth"
import NotFound from "./pages/notFound/NotFound"
import useTitle from "./hooks/useTitle"
import UserPage from "./features/auth/user/UserPage"
import AdminPrefetch from "./features/auth/AdminPrefetch"
import UserAuth from "./features/auth/UserAuth"

function App() {
  useTitle("TIMGAD.")
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />

      {/* public routes */}
      <Route path="/">
        {/* auth */}
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        {/* auth */}

        <Route element={<PersistLogin />}>
          <Route element={<Prefetch />}>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route element={<UserAuth />}>
                <Route path="user/:id" element={<UserPage />} />
              </Route>
              <Route path="shop">
                <Route index element={<Shop />} />
                <Route path="product/:userId" element={<ProductView />} />
              </Route>
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
            </Route>
          </Route>
        </Route>
      </Route>
      {/* public routes */}

      {/* protected routes */}
      <Route element={<PersistLogin />}>
        <Route element={<RequireAuth />}>
          <Route element={<AdminPrefetch />}>
            <Route path="admin" element={<AdminLayout />}>
              <Route index element={<AdminHomePage />} />
              <Route path="users" element={<UsersListPage />} />
              <Route path="user/edit/:userId" element={<EditUserPage />} />
              <Route path="user/create" element={<CreateUserPage />} />
              <Route path="products" element={<ProductListPage />} />
              <Route
                path="product/edit/:productId"
                element={<EditProductPage />}
              />
              <Route path="product/create" element={<CreateProductPage />} />
              <Route path="orders" element={<OrdersListPage />} />
              <Route path="orders/:orderId" element={<OrderPage />} />_
            </Route>
          </Route>
        </Route>
      </Route>
      {/* protected routes */}
    </Routes>
  )
}

export default App
