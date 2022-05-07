import styled, { css } from "styled-components/native";
import { ContainerProps, BackgroundProps } from "./types";

export const Container = styled.View<ContainerProps>`
  width: ${({ full }) => (full ? 170 : 158)}px;
  height: ${({ full }) => (full ? 293 : 223)}px;
`;

export const Background = styled.ImageBackground.attrs({
  resizeMode: "cover",
})<BackgroundProps>`
  height: ${({ full }) => (full ? 183 : 140)}px;
  width: 100%;
`;

export const PriceContent = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AddCart = styled.View`
  position: absolute;
  top: 109px;
  right: 0px;
`;
