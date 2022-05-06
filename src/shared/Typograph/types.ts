import { TextProps } from "react-native";
import {  } from "styled-components";

export interface Props extends TextProps {
  children: React.ReactNode;
  size?: number;
  color?: string;
  type?: string;
}

export interface TextStylesProps {
  size: number;
  color: string;
  type: string;
}