import { Navigate, Outlet } from "react-router";
import Cookies from "js-cookie";
export default function AuthRoute() {
  const isAuth = Cookies.get("Token");

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
