import { DefaultContainer } from "@/shared/Commom/styles";
import { Separator } from "@/shared/Separator";
import { Typograph } from "@/shared/Typograph";
import React from "react";
import { FlatList, View } from "react-native";

import { Card, Container } from "./styles";
import { useTheme } from "styled-components/native";
import { PropsFilter } from "./types";

const Filter = ({
  categories,
  active,
  handleSelectCatgory,
  loading,
}: PropsFilter) => {
  const { COLORS } = useTheme();

  return (
    <Container>
      <Separator height={10} />
      <Typograph
        style={{ paddingLeft: 20 }}
        size={8}
        color={COLORS.HOME_TITLE_CATEGORY}
      >
        FILTRAR CATEGORIA
      </Typograph>
      <Separator height={13} />
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <Separator width={14} />}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Card
            active={active === item}
            onPress={() => handleSelectCatgory(item)}
            disabled={active === item || loading}
          >
            <Typograph
              size={8}
              color={active === item ? COLORS.WHITE : COLORS.GREY_300}
            >
              {item}
            </Typograph>
          </Card>
        )}
      />
    </Container>
  );
};

export default Filter;
