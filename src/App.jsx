import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Prefetch from "./features/auth/Prefetch";
import AdminPrefetch from "./features/auth/AdminPrefetch";
import UserAuth from "./features/auth/UserAuth";
import Loader from "./components/Loader";
import PersistLogin from "./features/auth/login/PersistLogin";
import RequireAuth from "./features/auth/RequireAuth";
import Layout from "./components/Layout";
import Home from "./pages/homePage/Home";
import Login from "./features/auth/login/Login";
import Register from "./features/auth/register/Register";
import useTitle from "./hooks/useTitle";
const Shop = lazy(() => import("./pages/shopPage/Shop"));
const Cart = lazy(() => import("./pages/cartPage/Cart"));
const ProductView = lazy(() => import("./pages/productPage/ProductView"));
const Checkout = lazy(() => import("./pages/checkoutPage/Checkout"));
const AdminLayout = lazy(() =>
  import("./pages/admin/adminComponents/AdminLayout")
);
const AdminHomePage = lazy(() =>
  import("./pages/admin/pages/adminHomePage/AdminHomePage")
);
const UsersListPage = lazy(() => import("./pages/admin/pages/UsersListPage"));
const EditUserPage = lazy(() => import("./pages/admin/pages/EditUserPage"));
const CreateUserPage = lazy(() => import("./pages/admin/pages/CreateUserPage"));
const CreateProductPage = lazy(() =>
  import("./pages/admin/pages/CreateProductPage")
);
const ProductListPage = lazy(() =>
  import("./pages/admin/pages/ProductListPage")
);
const EditProductPage = lazy(() =>
  import("./pages/admin/pages/EditProductPage")
);
const OrdersListPage = lazy(() => import("./pages/admin/pages/OrdersListPage"));
const OrderPage = lazy(() => import("./pages/admin/pages/OrderPage"));
const NotFound = lazy(() => import("./pages/notFound/NotFound"));
const UserPage = lazy(() => import("./features/auth/user/UserPage"));

function App() {
  useTitle("BlackBeard.");
  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  );
}

export default App;
