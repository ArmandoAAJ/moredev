import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  background-color: ${({ theme: { COLORS } }) => COLORS.GREY_200};
  height: 72px;
  border-radius: 12px;
  width: 100%;
  padding: 11px;
`;

export const Content = styled.View`
  flex: 1;
  height: 100%;
  justify-content: center;
  margin-left: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const Background = styled.ImageBackground.attrs({
  resizeMode: "cover",
})`
  height: 50px;
  width: 38px;
`;

export const ContentButtonCard = styled.View`
  width: 100px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
