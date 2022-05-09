import React, { useState } from "react";
import { Props } from "./types";
import { FlatList } from "react-native-gesture-handler";

import { Typograph } from "@/shared/Typograph";
import { Separator } from "@/shared/Separator";
import { useTheme } from "styled-components";
import { Card } from "../Card";
import { ConfirmModal } from "../Modal";
import { ProductType } from "@/hooks/Products/types";
import { EmptyCart } from "../EmptyCart";
import { Footer } from "../Footer";
import { View } from "react-native";
import { Container } from "./styles";

const ListCart = ({ cart, addProductToCart, removeProductToCart }: Props) => {
  const { FONTS } = useTheme();
  const [isVisible, setIsVisivle] = useState(false);
  const [productSelected, setProductSelected] = useState({} as ProductType);

  function verifyQuantityProduct(product: ProductType) {
    if (product.quantity! < 2) {
      setProductSelected(product);
      setIsVisivle(true);
    } else {
      removeProductToCart(product);
    }
  }

  return (
    <Container>
      <FlatList
        data={cart}
        keyExtractor={(item) => String(item.id)}
        ListHeaderComponent={() => (
          <>
            <Typograph size={24} type={FONTS.SECONDARY_TITLE}>
              Meu Carrinho
            </Typograph>
            <Separator height={30} />
          </>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginHorizontal: 20, paddingBottom: 20 }}
        ItemSeparatorComponent={() => <Separator height={16} />}
        ListEmptyComponent={() => <EmptyCart />}
        renderItem={({ item }) => (
          <Card
            image={item.image}
            title={item.title}
            quantity={item.quantity!}
            price={item.price}
            addProductToCart={() => addProductToCart(item)}
            removeProductToCart={() => verifyQuantityProduct(item)}
          />
        )}
      />
      <ConfirmModal
        confirmModal={() => {
          removeProductToCart(productSelected);
          setIsVisivle(false);
        }}
        show={isVisible}
        cancelModal={() => setIsVisivle(false)}
      />
    </Container>
  );
};

export default ListCart;
