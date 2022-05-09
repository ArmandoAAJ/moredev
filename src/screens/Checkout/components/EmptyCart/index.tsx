import { Button } from "@/shared/Button";
import { Typograph } from "@/shared/Typograph";
import React from "react";
import Svg, { Path } from "react-native-svg";

import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Separator } from "@/shared/Separator";

export const EmptyCart: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Svg width={58} height={67} fill="none">
        <Path
          d="m57.813 58.569-2.971-37.688c-.172-2.345-2.171-4.131-4.57-4.131h-5.257v-1.396C45.015 6.867 37.931 0 29.304 0 20.62 0 13.593 6.867 13.593 15.354v1.396H7.937c-2.4 0-4.4 1.842-4.571 4.187L.738 58.681C.452 63.203 4.108 67 8.736 67h41.078c4.685 0 8.342-3.908 7.999-8.431ZM19.306 15.354c0-5.36 4.456-9.77 9.998-9.77 5.542 0 9.998 4.41 9.998 9.77v1.396H19.306v-1.396ZM15.02 36.292c0-1.564 1.257-2.792 2.857-2.792 1.6 0 2.856 1.228 2.856 2.791 0 1.564-1.257 2.792-2.857 2.792-1.6 0-2.856-1.228-2.856-2.791Zm27.366 12.171c-1.028 4.578-6.513 7.928-13.083 7.928s-12.112-3.35-13.14-7.928c-.286-1.228.514-2.4 1.77-2.624 1.258-.28 2.457.503 2.686 1.73.514 2.122 3.885 4.356 8.684 4.356 4.799 0 8.17-2.233 8.627-4.355.286-1.228 1.485-1.954 2.685-1.731 1.257.223 2 1.452 1.771 2.624Zm-1.657-9.38c-1.6 0-2.856-1.228-2.856-2.791 0-1.564 1.257-2.792 2.856-2.792 1.6 0 2.857 1.228 2.857 2.791 0 1.564-1.314 2.792-2.857 2.792Z"
          fill="#979797"
          fillOpacity={0.27}
        />
      </Svg>
      <Separator height={10} />
      <Typograph style={{ textAlign: "center" }} color="#9A9999">
        {`NENHUM ITEM ADICIONADO\nAO CARRINHO.`}
      </Typograph>
      <Separator height={24} />
      <Button onPress={() => navigation.goBack()} title="ADICIONAR ITENS" />
    </Container>
  );
};
