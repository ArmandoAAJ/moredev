import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 40px;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Content = styled.View`
  width: 100%;
  height: 180px;
  background-color: ${({ theme: { COLORS } }) => COLORS.WHITE};
  border: 1px solid #e7e7e7;
  border-radius: 10px;
  align-items: center;
  padding: 10px 0;
  justify-content: space-around;
`;

export const Button = styled.Pressable`
  width: 100%;
  height: 40px;
  border-top-width: 1px;
  border-top-color:#E7E7E7;;
  align-items: center;
  justify-content: center;
`;
