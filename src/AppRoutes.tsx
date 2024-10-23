import { Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import Landing from "./Landing"
import ProductPage from "@/pages/ProductPage"
import CartPage from "./pages/CartPage"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import About from "./pages/About"

const AppRoutes = () => {
  return (
    <div>
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Landing/>
          </Layout>
        }
      />
       <Route
        path="/about"
        element={
          <Layout>
            <About/>
          </Layout>
        }
      />
      <Route
        path="/product"
        element={
          <Layout>
            <ProductPage />
          </Layout>
        }
      />
      <Route
        path="/cart"
        element={
          <Layout>
            <CartPage />
          </Layout>
        }
      />
      <Route
      path="/signup"
      element={
       <Layout>
          <Signup/>
       </Layout>
      }/>
      <Route
      path="/login"
      element={
       <Layout>
          <Login/>
       </Layout>
      }/>
    </Routes>
  </div>
  )
}

export default AppRoutes
