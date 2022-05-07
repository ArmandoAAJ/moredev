import React from "react";
import { ActivityIndicator, View } from "react-native";
import { useTheme } from "styled-components/native";
import { Container } from "./styles";
import { Props } from "./types";

export const Loader = ({ show }: Props) => {
  if (!show) {
    return <></>
  }
  const { COLORS } = useTheme();
  return (
    <Container>
      <ActivityIndicator
        size={30}
        color={COLORS.HOME_PURPLE}
        style={{ alignItems: "center", justifyContent: "center" }}
      />
    </Container>
  );
};


