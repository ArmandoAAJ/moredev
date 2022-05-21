import React from "react";
import { Pressable, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useTheme } from "styled-components";
import { Typograph } from "@/shared/Typograph";

import { Back, Container } from "./styles";
import { Separator } from "@/shared/Separator";
import { Props } from "./types";

const Header = ({ onPress }: Props) => {
  const { COLORS } = useTheme();
  return (
    <>
      <Separator height={11} />
      <Container>
        <Back onPress={() => onPress()}>
          <Svg width={10} height={11} fill="none">
            <Path
              d="m7.103 10.012-5-5 5-5 1.125 1.125L4.36 5.012l3.867 3.875-1.125 1.125Z"
              fill="#85868A"
            />
          </Svg>
        </Back>
        <Typograph size={12} color={COLORS.GREY_800}>
          CARRINHO
        </Typograph>
        <View />
      </Container>
    </>
  );
};

export default Header;
