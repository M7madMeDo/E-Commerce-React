import { createBrowserRouter } from "react-router";
import Mainlayout from "./mainlayout/Mainlayout";
import Home from "./components/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ShowSingleProduct from "./pages/showsingleProduct/ShowSingleProduct";
import Profile from "./pages/profile/Profile";
import Error from "./pages/error/Error";
import ShopingCart from "./pages/shopingCart/ShopingCart";
import AuthRoute from "./protectedRoute/authRoute/AuthRoute";
import GuestRoute from "./protectedRoute/guestRoute/GuestRoute";
import Whistlist from "./pages/wishlist/Whistlist";
import About from "./pages/about/About";
import Contactus from "./pages/contact Us/Contactus";
import Blog from "./pages/blog/Blog";

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
        element: <GuestRoute />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/register",
            element: <Register />,
          },
        ],
      },
      {
        element: <AuthRoute />,
        children: [
          {
            path: "/profile",
            element: <Profile />,
          },
          {
            path: "/shopCart",
            element: <ShopingCart />,
          },
          {
            path: "/whislist",
            element: <Whistlist />,
          },
        ],
      },
      {
        path: "/singleProduct/:id",
        element: <ShowSingleProduct />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contactus />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

export default router;
