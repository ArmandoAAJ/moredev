import React from "react";
import { useTheme } from "styled-components";
import { ButtonAddCart } from "../ButtonAddCart";
import { InfoProduct } from "../InfoProduct";
import { Separator } from "@/shared/Separator";
import { Typograph } from "@/shared/Typograph";

import { Container, Background, PriceContent, AddCart } from "./styles";
import { Props } from "./types";

export const Product = ({
  image,
  category,
  title,
  description,
  full,
  price,
  onPress,
}: Props) => {
  const { COLORS } = useTheme();
  return (
    <Container full={full}>
      <Background
        full={full}
        source={{ uri: image }}
        imageStyle={{ borderRadius: 8 }}
      />
      {!full && (
        <AddCart>
          <ButtonAddCart onPress={() => onPress()} />
        </AddCart>
      )}
      <Separator height={7} />
      <InfoProduct category={category} title={title} subTitle={description} />
      <PriceContent>
        <Typograph size={20} color={COLORS.HOME_PRODUCT_PRICE}>
          ${price}
        </Typograph>
        {full && <ButtonAddCart onPress={() => onPress()} />}
      </PriceContent>
    </Container>
  );
};
