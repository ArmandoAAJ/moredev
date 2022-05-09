import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

import { ButtonCard } from "./styles";
import { Props } from "./types";

export const More = ({ ...rest }: Props) => {
  return (
    <ButtonCard {...rest} borderRight={true}>
      <Svg width={10} height={10} fill="none">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.841 8.835V6.15h-2.69C.513 6.15 0 5.637 0 5a1.16 1.16 0 0 1 1.15-1.165h2.691v-2.67A1.16 1.16 0 0 1 4.992 0C5.645 0 6.16.528 6.16 1.165v2.67h2.69C9.487 3.835 10 4.363 10 5s-.513 1.15-1.15 1.15H6.158v2.685c0 .637-.514 1.165-1.167 1.165a1.16 1.16 0 0 1-1.15-1.165Z"
          fill="#CCC"
        />
      </Svg>
    </ButtonCard>
  );
};
