import { RouterProvider } from "react-router";
import "./App.css";
import router from "./router";
import CartSettings from "./hooks/cartSettings/CartSettings";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export default function App() {
  const client = new QueryClient();
  return (
    <>
      <CartSettings>
        <QueryClientProvider client={client}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </CartSettings>
    </>
  );
}
