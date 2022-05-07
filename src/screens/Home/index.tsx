import React, { useCallback, useEffect, useState } from "react";

import { useProduct } from "@/hooks/Products";
import Header from "./components/Header";
import Filter from "./components/Filter";
import { DefaultContainer } from "@/shared/Commom/styles";
import { News } from "./components/News";
import { List } from "./components/List";
import { ListDefault } from "./components/ListDefault";

export const Home: React.FC = () => {
  const [isActiveFilter, setIsActiveFilter] = useState("Últimos");
  const {
    searchProducts,
    categories,
    searchCategorys,
    productsNews,
    products,
    searchProductsByCategory,
  } = useProduct();

  useEffect(() => {
    searchProducts();
    searchCategorys();
  }, []);

  function handleSearchProductsByCategory(category: string) {
    setIsActiveFilter(category);
    searchProductsByCategory(category);
  }

  function handleAddProductCart(id: number) {
    console.log(id);
  }

  return (
    <DefaultContainer>
      <ListDefault>
        <Header />
        <Filter
          categories={categories}
          active={isActiveFilter}
          handleSelectCatgory={(category) =>
            handleSearchProductsByCategory(category)
          }
        />
        <News
          products={productsNews}
          onPress={(id: number) => handleAddProductCart(id)}
        />
        <List
          products={products}
          onPress={(id: number) => handleAddProductCart(id)}
        />
      </ListDefault>
    </DefaultContainer>
  );
};
