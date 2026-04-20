import { createBrowserRouter } from "react-router";
import Mainlayout from "./mainlayout/Mainlayout";
import Home from "./components/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ShowSingleProduct from "./pages/showsingleProduct/ShowSingleProduct";
import Profile from "./pages/profile/Profile";
import Error from "./pages/error/Error";
import ShopingCart from "./pages/shopingCart/ShopingCart";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/singleProduct/:id",
        element: <ShowSingleProduct />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/shopCart",
        element: <ShopingCart />,
      },
    ],
  },
]);

export default router;
