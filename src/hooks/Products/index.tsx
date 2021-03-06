import React, { createContext, useContext, useState } from "react";
import { instance } from "@/config/axios";
import {
  CategoryType,
  ProductContextData,
  ProductProviderProps,
  ProductType,
} from "./types";

export const ProductContext = createContext({} as ProductContextData);

function ProductProvider({ children }: ProductProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [productsNews, setProductsNews] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<CategoryType>(["Últimos"]);

  // Get all categorys start app
  async function searchCategorys() {
    if (categories.length > 1) return;
    setIsLoading(true);
    try {
      const response = await instance.get(`/products/categories`);
      setCategories((oldValue) => [...oldValue, ...response.data]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

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
      setIsLoading(false);
    }
  }

  // Get products by category
  async function searchProductsByCategory(category: string) {
    if (category === "Últimos") {
      searchProducts();
      return;
    }
    setIsLoading(true);
    try {
      const response = await instance.get(`/products/category/${category}`);
      if (response.data.lenght < 1) return;
      setProducts(response.data);
      const news = response.data.slice(0, 5);
      setProductsNews(news);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <ProductContext.Provider
      value={{
        searchProducts,
        products,
        productsNews,
        isLoading,
        searchCategorys,
        categories,
        searchProductsByCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

function useProduct() {
  const context = useContext(ProductContext);
  return context;
}

export { ProductProvider, useProduct };
