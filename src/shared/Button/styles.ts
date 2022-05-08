import styled from "styled-components/native";

export const Container = styled.Pressable`
  background-color: ${({ theme: { COLORS } }) => COLORS.PURPLE_700};
  width: 317px;
  height: 50px;
  align-items: center;
  justify-content: center;
  elevation: 2;
  border-radius: 37px;
`;
