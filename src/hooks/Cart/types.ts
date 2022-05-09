import { ReactNode } from "react";
import { ProductType } from "../Products/types";

export type CartContextData = {
  cart: ProductType[];
  addItemToCart: (product: ProductType) => void;
  removeItemToCart: (product: ProductType) => void;
  setCart: Function;
};

export type CartProviderProps = {
  children: ReactNode;
};
