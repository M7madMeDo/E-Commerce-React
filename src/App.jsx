import { RouterProvider } from "react-router";
import "./App.css";
import router from "./router";
import CartSettings from "./hooks/cartSettings/CartSettings";

export default function App() {
  return (
    <>
      <CartSettings>
        <RouterProvider router={router} />
      </CartSettings>
    </>
  );
}
