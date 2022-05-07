import React from "react";
import { FlatList, View } from "react-native";
import { useTheme } from "styled-components";
import { Product } from "../Product";
import { Separator } from "@/shared/Separator";
import { Typograph } from "@/shared/Typograph";

import { Props } from "./types";

export const News = ({ products, onPress }: Props) => {
  const { FONTS, COLORS } = useTheme();
  return (
    <View>
      <Separator height={25} />
      <Typograph
        style={{ marginLeft: 20 }}
        type={FONTS.SECONDARY_TITLE}
        size={24}
        color={COLORS.HOME_PRODUCT_TITLE}
      >
        Novidades
      </Typograph>
      <Separator height={20} />
      <FlatList
        data={products}
        keyExtractor={(item) => String(item.id)}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        ItemSeparatorComponent={() => <Separator width={49} />}
        renderItem={({ item }) => (
          <Product
            category={item.category}
            image={item.image}
            price={item.price}
            title={item.title}
            description={item.description}
            full
            onPress={() => onPress(item.id)}
          />
        )}
      />
    </View>
  );
};
