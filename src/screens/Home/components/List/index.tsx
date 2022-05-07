import React from "react";
import { useTheme } from "styled-components";
import { Product } from "../Product";
import { Separator } from "@/shared/Separator";
import { Typograph } from "@/shared/Typograph";
import { FlatList } from "react-native-gesture-handler";
import { Props } from "./types";

export const List = ({ products, onPress }: Props) => {
  const { FONTS, COLORS } = useTheme();
  return (
    <>
      <Separator height={40} />
      <Typograph
        style={{ marginLeft: 20 }}
        type={FONTS.SECONDARY_TITLE}
        size={24}
        color={COLORS.HOME_PRODUCT_TITLE}
      >
        Listagem
      </Typograph>
      <Separator height={20} />
      <FlatList
        data={products}
        keyExtractor={(item) => String(item.id)}
        numColumns={2}
        ItemSeparatorComponent={() => <Separator height={26} />}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ paddingLeft: 20, paddingRight: 9 }}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <Product
            category={item.category}
            image={item.image}
            price={item.price}
            title={item.title}
            full={false}
            onPress={() => onPress(item.id)}
          />
        )}
      />
    </>
  );
};
