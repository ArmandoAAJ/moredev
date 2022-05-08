import React, { createContext, useContext, useState } from "react";
import { ProductType } from "../Products/types";
import { CartContextData, CartProviderProps } from "./types";

export const CartContext = createContext({} as CartContextData);

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<ProductType[]>([]);

  function addItemToCart(product: ProductType) {
    const findIndex = cart.findIndex((p) => p.id === product.id);
    if (findIndex === -1) {
      setCart((oldValue) => [...oldValue, { ...product, quantity: 1 }]);
    } else {
      let newCart = cart;
      newCart[findIndex].quantity = newCart[findIndex].quantity! + 1;
      setCart([...newCart]);
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  return context;
}

export { CartProvider, useCart };
