import React from "react";
import { Modal } from "react-native";
import { DefaultContainer } from "@/shared/Commom/styles";
import { Props } from "./types";
import { Typograph } from "@/shared/Typograph";

import { Content, Container, Button } from "./styles";
import { useTheme } from "styled-components";

export const ConfirmModal = ({ show, cancelModal, confirmModal }: Props) => {
  const { FONTS, COLORS } = useTheme();

  return (
    <DefaultContainer>
      <Modal
        animationType="slide"
        transparent={true}
        visible={show}
        style={{ alignSelf: "center" }}
      >
        <Container>
          <Content>
            <Typograph type={FONTS.TERTIARY_700} color={COLORS.GRAY_750}>
              Remover Item
            </Typograph>
            <Typograph
              style={{ textAlign: "center" }}
              size={10}
              type={FONTS.TERTIARY_600}
              color={COLORS.GREY_250}
            >
              Se deseja remover o item do carrinho clique em prosseguir.
            </Typograph>
            <Button onPressIn={confirmModal}>
              <Typograph size={10} type={FONTS.TERTIARY_700} color="#5A9ACF">
                PROSSEGUIR
              </Typograph>
            </Button>
            <Button onPressIn={cancelModal}>
              <Typograph size={10} type={FONTS.TERTIARY_700} color="#FD746A">
                CANCELAR
              </Typograph>
            </Button>
          </Content>
        </Container>
      </Modal>
    </DefaultContainer>
  );
};
