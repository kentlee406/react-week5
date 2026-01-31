import Layout from "../Layout";
import Cart from "../views/Cart";
import Home from "../views/Home";
import Product from "../views/Product";
import Products from "../views/Products";
const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "product/:id", element: <Product /> },
      { path: "cart", element: <Cart /> },
    ],
  },
];
export default routes;
