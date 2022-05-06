import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { Typograph } from "@/shared/Typograph/index";

import { useProduct } from "@/hooks/Products";
import Header from "./components/Header";

export const Home: React.FC = () => {
  const { searchProducts, products, productsNews } = useProduct();

  useEffect(() => {
    searchProducts();
  }, []);

  return <Header />;
};
