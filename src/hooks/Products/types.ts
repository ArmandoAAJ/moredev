import { ReactNode } from "react";

export type ProductContextData = {
  searchProducts: () => Promise<void>;
  products: ProductType[];
  productsNews: ProductType[];
  searchCategorys: () => Promise<void>;
  isLoading: boolean;
  categories: CategoryType;
  searchProductsByCategory: (category: string) => void;
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
  quantity?: number 
};

export type CategoryType = string[];
