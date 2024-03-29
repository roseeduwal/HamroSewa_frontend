import { useContext } from "react";
import { CartContext } from "../context/cart-context";

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) throw Error("Something went wrong");

  return context;
};
