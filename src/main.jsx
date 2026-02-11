import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router";
import { Provider } from "react-redux";
import routes from "./routes/index.jsx";
import { LoadingProvider } from "./context/LoadingContext";
import { store } from "./store/index.js";

const router = createHashRouter(routes);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <LoadingProvider>
      <RouterProvider router={router} />
    </LoadingProvider>
  </Provider>,
);
