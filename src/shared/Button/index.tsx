import React from "react";
import { useTheme } from "styled-components";
import { Typograph } from "../Typograph";
import { Container } from "./styles";
import { Props } from "./types";

export const Button = ({ title, ...rest}: Props) => {
  const { COLORS } = useTheme();
  return (
    <Container {...rest}>
      <Typograph color={COLORS.WHITE}>{title}</Typograph>
    </Container>
  );
};
