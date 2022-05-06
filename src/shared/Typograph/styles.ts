import styled from "styled-components/native";
import { TextStylesProps } from "./types";

export const Container = styled.Text<TextStylesProps>`
  font-family: ${({ type }) => type};
  font-size: ${({ size }) => size}px;
  color: ${({ color }) => color};
`;
