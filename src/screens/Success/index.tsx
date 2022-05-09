import React from "react";
import { View, StatusBar } from "react-native";

import { Container } from "./styles";
import { useTheme } from "styled-components";
import Svg, { Path, Rect } from "react-native-svg";
import { Separator } from "@/shared/Separator";
import { Typograph } from "@/shared/Typograph";
import { Button } from "@/shared/Button";
import { CommonActions, useNavigation } from "@react-navigation/native";

export const Success: React.FC = () => {
  const { COLORS } = useTheme();
  const navigation = useNavigation();

  function handleNextCheckout() {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: "home" }],
      })
    );
  }

  return (
    <>
      <StatusBar backgroundColor={COLORS.PURPLE_500} barStyle="light-content" />
      <Container>
        <Svg width={161} height={160} fill="none">
          <Path
            d="M73.807 99.939a5.618 5.618 0 0 1-3.955-1.652L52.23 80.665c-2.152-2.153-2.152-5.708 0-7.86 2.153-2.153 5.708-2.153 7.86 0l13.717 13.717 27.335-27.334c2.152-2.153 5.707-2.153 7.859 0 2.153 2.152 2.153 5.707 0 7.86L77.762 98.337c-1.101 1.101-2.553 1.602-3.955 1.602Z"
            fill="#fff"
          />
          <Rect
            x={3.269}
            y={2.769}
            width={154.462}
            height={154.462}
            rx={77.231}
            stroke="#fff"
            strokeWidth={5.538}
          />
        </Svg>
        <Separator height={30} />
        <Typograph color={COLORS.WHITE} size={22}>
          SUCESSO!
        </Typograph>
        <Separator height={10} />
        <Typograph color={COLORS.WHITE}>
          Compra realizada com sucesso, aproveite!
        </Typograph>
        <Button
          onPress={handleNextCheckout}
          style={{ position: "absolute", bottom: 30 }}
          title="PROSSEGUIR"
        />
      </Container>
    </>
  );
};
