import styled, { css } from "styled-components/native";
import { ButtonCardProps } from "./types";

export const ButtonCard = styled.Pressable<ButtonCardProps>`
  width: 40px;
  height: 25px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme: { COLORS } }) => COLORS.WHITE};
  border-width: 1px;
  border-color: ${({ theme: { COLORS } }) => COLORS.GREY_400};

  ${({ borderRight }) =>
    !borderRight &&
    css`
      border-bottom-left-radius: 15px;
      border-top-left-radius: 15px;
    `}

  ${({ borderRight }) =>
    borderRight &&
    css`
      border-bottom-right-radius: 15px;
      border-top-right-radius: 15px;
    `}
`;
