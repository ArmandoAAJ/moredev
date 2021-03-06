import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 18px;
  align-items: center;
`;

export const Content = styled.Pressable`
  height: 30px;
  width: 30px;
  align-items: center;
  justify-content: center;
`;

export const Badge = styled.View`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({ theme: { COLORS } }) => COLORS.HOME_BADGE};
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  align-items: center;
  justify-content: center;
`;
