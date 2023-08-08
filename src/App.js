import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Inventory from "./components/Inventory/Inventory";
import Orders from "./components/Orders/Orders";
import Shop from "./components/shop/Shop";
import Main from "./Layouts/Main";
import { ProductsAndCartLoaders } from "./Loaders/ProductsAndCartLoaders";
import Login from "./components/login/Login";
import Signup from "./components/Signup/Signup";
import Shipping from "./components/Shipping/Shipping";
import PrivateRoutes from "./components/Routes/PrivateRoutes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("products.json"),
          element: <Shop></Shop>,
        },
        {
          path: "/orders",
          loader: ProductsAndCartLoaders,
          element: <Orders></Orders>,
        },
        {
          path: "/inventory",
          element: (
            <PrivateRoutes>
              <Inventory></Inventory>
            </PrivateRoutes>
          ),
        },
        {
          path: "/shipping",
          element: (
            <PrivateRoutes>
              <Shipping></Shipping>
            </PrivateRoutes>
          ),
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <Signup></Signup>,
        },
        {
          path: "About",
          element: <About></About>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
