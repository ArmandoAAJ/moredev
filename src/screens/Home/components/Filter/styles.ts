import styled from "styled-components/native";
import { PropsCard } from "./types";

export const Container = styled.View`
`;

export const Card = styled.Pressable<PropsCard>`
  min-width: 51px;
  padding: 6px 10px;
  border-radius: 8px;
  background-color: ${({ theme, active }) =>
    active ? theme.COLORS.HOME_PURPLE : theme.COLORS.GREY_100};
  border: 1px solid
    ${({ theme, active }) =>
      active ? theme.COLORS.HOME_PURPLE : theme.COLORS.GREY_300};
`;
