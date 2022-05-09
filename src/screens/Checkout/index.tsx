import React, { useMemo, useState } from "react";
import Header from "./components/Header";
import { DefaultContainer } from "@/shared/Commom/styles";
import { useNavigation, CommonActions } from "@react-navigation/native";
import ListCart from "./components/ListCart";
import { useCart } from "@/hooks/Cart";
import { ProductType } from "@/hooks/Products/types";
import { Footer } from "./components/Footer";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components";

const Checkout: React.FC = () => {
  const { COLORS } = useTheme();
  const { addItemToCart, removeItemToCart } = useCart();
  const navigation = useNavigation();
  const { cart, setCart } = useCart();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleAddproductToCart(product: ProductType) {
    addItemToCart(product);
  }

  function handleRemoveproductToCart(product: ProductType) {
    removeItemToCart(product);
  }

  function handleSuccessCheckout() {
    setCart([]);
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: "success" }],
      })
    );
  }

  const sum = useMemo(() => {
    const total = cart.reduce((acc, p) => acc + p.price * p.quantity!, 0);
    return total;
  }, [cart]);

  return (
    <>
      <StatusBar backgroundColor={COLORS.BACKGROUND} style="dark" />
      <DefaultContainer>
        <Header onPress={handleGoBack} />
        <ListCart
          cart={cart}
          addProductToCart={(product) => handleAddproductToCart(product)}
          removeProductToCart={(product) => handleRemoveproductToCart(product)}
        />
        <Footer sum={sum} confirmCheckout={handleSuccessCheckout} />
      </DefaultContainer>
    </>
  );
};

export default Checkout;
