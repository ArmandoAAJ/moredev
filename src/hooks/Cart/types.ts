import { ReactNode } from "react";
import { ProductType } from "../Products/types";

export type CartContextData = {
  cart: ProductType[];
  addItemToCart: (id: ProductType) => void;
};

export type CartProviderProps = {
  children: ReactNode;
};

