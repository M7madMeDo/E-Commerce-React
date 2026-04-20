import { createContext, useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";

const CartContext = createContext();

export default function CartSettings({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem("myCart")) || [];
    return savedCart;
  });

  useEffect(() => {
    localStorage.setItem("myCart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = async (product, userId = 1) => {
    await fetch("https://dummyjson.com/carts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userId,
        products: [{ id: product.id, quantity: 1 }],
      }),
    });

    setCartItems((items) => {
      const isExisting = items.find((item) => item.id === product.id);

      if (isExisting) {
        return items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...items, { ...product, quantity: 1 }];
    });

    Swal.fire({
      title: "Success",
      text: "Product added!",
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  const deleteFromTheCart = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const Updatequantity = (id, amount) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item,
      ),
    );
  };
  const clearCart = () => {
    setCartItems([]);
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        deleteFromTheCart,
        Updatequantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
