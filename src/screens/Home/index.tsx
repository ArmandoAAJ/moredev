import React, { useEffect, useState } from "react";

import { useProduct } from "@/hooks/Products";
import Header from "./components/Header";
import Filter from "./components/Filter";
import { DefaultContainer } from "@/shared/Commom/styles";

export const Home: React.FC = () => {
  const [isActiveFilter, setIsActiveFilter] = useState("Últimos");
  const { searchProducts, categories, searchCategorys } = useProduct();

  useEffect(() => {
    searchProducts();
    searchCategorys();
  }, []);

  return (
    <DefaultContainer>
      <Header />
      <Filter
        categories={categories}
        active={isActiveFilter}
        handleSelectCatgory={setIsActiveFilter}
      />
    </DefaultContainer>
  );
};
