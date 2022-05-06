import React, { createContext, useContext, useState } from "react";
import { instance } from "@/config/axios";

import { ProductContextData, ProductProviderProps, ProductType } from "./types";

export const ProductContext = createContext({} as ProductContextData);

function ProductProvider({ children }: ProductProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [productsNews, setProductsNews] = useState<ProductType[]>([]);

  // Get all products start app
  async function searchProducts() {
    setIsLoading(true);
    try {
      const response = await instance.get(`/products`);
      if (response.data.lenght < 1) return;
      setProducts(response.data);
      const news = response.data.slice(0, 5);
      setProductsNews(news);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(true);
    }
  }

  return (
    <ProductContext.Provider value={{ searchProducts, products, productsNews, isLoading }}>
      {children}
    </ProductContext.Provider>
  );
}

function useProduct() {
  const context = useContext(ProductContext);
  return context;
}

export { ProductProvider, useProduct };
