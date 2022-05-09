import { ProductType } from "@/hooks/Products/types";

export interface Props {
  image: string
  quantity: number
  title: string
  price: number
  addProductToCart: () => void;
  removeProductToCart: () => void;
}