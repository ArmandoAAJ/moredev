import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { Typograph } from "@/shared/Typograph/index";

import { useProduct } from "@/hooks/Products";

export const Home: React.FC = () => {
  const { searchProducts, products, productsNews } = useProduct();

  console.log(productsNews);

  useEffect(() => {
    searchProducts();
  }, []);

  return (
    <View>
      <Typograph>soidjaiodjosai</Typograph>
    </View>
  );
};
