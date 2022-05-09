import React, { createContext, useContext, useState } from "react";
import { ProductType } from "../Products/types";
import { CartContextData, CartProviderProps } from "./types";

export const CartContext = createContext({} as CartContextData);

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<ProductType[]>([]);

  function addItemToCart(product: ProductType) {
    const index = cart.findIndex((p) => p.id === product.id)
    if (index === -1) {
      setCart((oldValue) => [...oldValue, { ...product, quantity: 1 }]);
      return;
    }
    const newCart = cart.map((p) =>
      p.id === product.id ? { ...p, quantity: p.quantity! + 1 } : p
    );
    setCart(newCart);
  }

  function removeItemToCart(product: ProductType) {
    if (product.quantity! === 1 && cart.length === 1) {
      setCart([]);
      return;
    }
    if (product.quantity! === 1) {
      setCart((oldValue) => oldValue.filter((e) => e.id !== product.id));
      return;
    }
    const newCart = cart.map((p) =>
      p.id === product.id ? { ...p, quantity: p.quantity! - 1 } : p
    );
    setCart(newCart);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        removeItemToCart,
        setCart
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
