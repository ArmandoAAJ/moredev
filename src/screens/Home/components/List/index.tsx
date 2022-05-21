import React from "react";
import { Product } from "../Product";
import { Separator } from "@/shared/Separator";
import { FlatList } from "react-native-gesture-handler";
import { Props } from "./types";

export const List = ({ products, onPress, headerComponent }: Props) => {
  return (
    <>
      <Separator height={20} />
      <FlatList
        data={products}
        keyExtractor={(item) => String(item.id)}
        numColumns={2}
        ItemSeparatorComponent={() => <Separator height={26} />}
        ListHeaderComponent={headerComponent}
        columnWrapperStyle={{ justifyContent: "space-around" }}
        renderItem={({ item }) => (
          <Product
            category={item.category}
            image={item.image}
            price={item.price}
            title={item.title}
            full={false}
            onPress={() => onPress(item)}
          />
        )}
      />
    </>
  );
};
