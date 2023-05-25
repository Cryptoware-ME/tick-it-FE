import React from "react";
import { CartContext } from "./cart-context";

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = React.useState([]);
  const [cartTotal, setCartTotal] = React.useState(0);

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, cartTotal, setCartTotal }}
      children={children}
    />
  );
};
