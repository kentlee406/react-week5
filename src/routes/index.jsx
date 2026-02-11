import Layout from "../Layout";
import Cart from "../views/Cart";
import Home from "../views/Home";
import Product from "../views/Product";
import Products from "../views/Products";
import NotFound from "../views/NotFound";
import AdminLogin from "../views/AdminLogin";
import AdminProduct from "../views/AdminProduct";
const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "product/:id", element: <Product /> },
      { path: "cart", element: <Cart /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  { path: "login", element: <AdminLogin /> },
  { path: "admin/product", element: <AdminProduct /> },
];
export default routes;
