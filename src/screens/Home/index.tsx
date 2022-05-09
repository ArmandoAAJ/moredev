import React, { useEffect, useMemo, useState } from "react";
import { useProduct } from "@/hooks/Products";
import Header from "./components/Header";
import Filter from "./components/Filter";
import { DefaultContainer } from "@/shared/Commom/styles";
import { News } from "./components/News";
import { List } from "./components/List";
import { ListDefault } from "./components/ListDefault";
import { Loader } from "@/shared/Loader";
import { useCart } from "@/hooks/Cart";
import { ProductType } from "@/hooks/Products/types";
import { Button } from "@/shared/Button";
import { CardCheckout } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components";
import { useColorScheme } from "react-native";

export const Home: React.FC = () => {
  const deviceTheme = useColorScheme();
  const [isActiveFilter, setIsActiveFilter] = useState("Últimos");
  const {
    searchProducts,
    categories,
    searchCategorys,
    productsNews,
    products,
    searchProductsByCategory,
    isLoading,
  } = useProduct();
  const { addItemToCart, cart } = useCart();
  const navigation = useNavigation();
  const { COLORS } = useTheme();

  useEffect(() => {
    searchProducts();
    searchCategorys();
  }, []);

  function handleSearchProductsByCategory(category: string) {
    setIsActiveFilter(category);
    searchProductsByCategory(category);
  }

  function handleAddProductCart(product: ProductType) {
    addItemToCart(product);
  }

  const countCart = useMemo(() => cart.length, [cart]);

  function handleNavigateCheckout() {
    navigation.navigate("checkout");
  }

  return (
    <>
      <StatusBar
        backgroundColor={COLORS.HOME_BACKGROUND}
        style={"dark" === "dark" ? "light" : "dark"}
      />
      <DefaultContainer>
        <ListDefault>
          <Header sizeCart={countCart} />
          <Filter
            categories={categories}
            active={isActiveFilter}
            loading={isLoading}
            handleSelectCatgory={(category) =>
              handleSearchProductsByCategory(category)
            }
          />
          {isLoading ? (
            <Loader show={isLoading} />
          ) : (
            <>
              <News
                products={productsNews}
                onPress={(product: ProductType) =>
                  handleAddProductCart(product)
                }
              />
              <List
                products={products}
                onPress={(product: ProductType) =>
                  handleAddProductCart(product)
                }
              />
            </>
          )}
        </ListDefault>
        {countCart > 0 && (
          <CardCheckout>
            <Button
              onPressIn={handleNavigateCheckout}
              title="IR PARA CARRINHO"
            />
          </CardCheckout>
        )}
      </DefaultContainer>
    </>
  );
};
