import React from "react";
import { Typograph } from "@/shared/Typograph";
import {
  Background,
  Container,
  Content,
  ContentButtonCard,
  Row,
} from "./styles";
import { Props } from "./types";
import { useTheme } from "styled-components";
import { Minus } from "../Button/Minus";
import { More } from "../Button/More";

export const Card = ({
  image,
  price,
  quantity,
  title,
  addProductToCart,
  removeProductToCart,
}: Props) => {
  const { COLORS } = useTheme();
  return (
    <Container>
      <Background imageStyle={{ borderRadius: 10 }} source={{ uri: image }} />
      <Content>
        <Typograph numberOfLines={1}>{title}</Typograph>
        <Row>
          <Typograph
            style={{ paddingRight: 10 }}
            size={10}
            color={COLORS.PURPLE_500}
          >
            {quantity}x
          </Typograph>
          <Typograph size={12} color={COLORS.PURPLE_500}>
            ${price}
          </Typograph>
        </Row>
      </Content>
      <ContentButtonCard>
        <Minus onPress={() => removeProductToCart()} />
        <More onPress={() => addProductToCart()} />
      </ContentButtonCard>
    </Container>
  );
};
