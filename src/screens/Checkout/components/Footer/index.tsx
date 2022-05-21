import React from "react";
import { Button } from "@/shared/Button";
import { Typograph } from "@/shared/Typograph";
import { Container, Content } from "./styles";
import { Props } from "./types";
import { Separator } from "@/shared/Separator";

export const Footer = ({ sum, confirmCheckout }: Props) => {
  if (sum < 1) return null;
  return (
    <Container>
      <Content>
        <Typograph color="#404040">Total:</Typograph>
        <Typograph>${sum.toFixed(2)}</Typograph>
      </Content>
      <Separator height={30} />
      <Button onPress={() => confirmCheckout()} style={{ alignSelf: "center" }} title="FINALIZAR COMPRA" />
    </Container>
  );
};
