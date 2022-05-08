import styled from "styled-components/native";

export const CardCheckout = styled.View`
  width: 100%;
  height: 108px;
  background-color: ${({ theme: { COLORS } }) => COLORS.HOME_CARD_CHECKOUT};
  align-items: center;
  justify-content: center;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
`;
