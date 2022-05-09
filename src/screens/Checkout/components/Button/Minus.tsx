import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ButtonCard } from './styles';
import { Props } from './types';

export const Minus = ({...rest}: Props) => {
  return (
    <ButtonCard {...rest} >
    <Svg width={11} height={4} fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 .913A1.169 1.169 0 0 1 9 3.25H1.33a1.169 1.169 0 0 1 0-2.337H9Z"
        fill="#CCC"
      />
    </Svg>
  </ButtonCard>
  )
}

