import { ReactNode } from "react";

export type ProductContextData = {
  searchProducts: () => Promise<void>;
  products: ProductType[];
  productsNews: ProductType[];
  isLoading: boolean;
};

export type ProductProviderProps = {
  children: ReactNode;
};

export type ProductType = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
};
