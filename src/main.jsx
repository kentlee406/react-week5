import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router";
import routes from "./routes/index.jsx";
import { LoadingProvider } from "./context/LoadingContext";

const router = createHashRouter(routes);

createRoot(document.getElementById("root")).render(
  <LoadingProvider>
    <RouterProvider router={router} />
  </LoadingProvider>,
);
