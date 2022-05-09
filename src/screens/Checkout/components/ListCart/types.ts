import { ProductType } from "@/hooks/Products/types";

export interface Props {
  cart: ProductType[];
  addProductToCart: (product: ProductType) => void;
  removeProductToCart: (product: ProductType) => void;
}
