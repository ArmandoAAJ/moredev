import React from "react";
import { useTheme } from "styled-components";

import { Container } from "./styles";
import { Props } from "./types";

export const Typograph = ({
  size = 14,
  color,
  type,
  children,
  ...rest
}: Props) => {
  const { COLORS, FONTS } = useTheme();
  return (
    <Container
      type={type || FONTS.PRIMARY_TITLE}
      size={size}
      color={color || COLORS.BLACK}
      {...rest}
    >
      {children}
    </Container>
  );
};
