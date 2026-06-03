import { Navigate, Outlet } from "react-router";
import Cookies from "js-cookie";

export default function GuestRoute() {
  const isAuth = Cookies.get("Token");

  if (isAuth) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
