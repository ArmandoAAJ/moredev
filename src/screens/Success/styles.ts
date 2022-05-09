import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme: { COLORS } }) => COLORS.PURPLE_500};
  align-items: center;
  justify-content: center;
`;


