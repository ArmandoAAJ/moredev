import { ProductType } from "@/hooks/Products/types";

export interface Props {
  products: ProductType[];
  onPress: (product: ProductType) => void
}
