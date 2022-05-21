import React, { useMemo } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@/screens/Home";
import Checkout from "@/screens/Checkout";
import { Success } from "@/screens/Success";

import { useTheme } from "styled-components/native";
import { Badge, Content } from "./styles";
import { Typograph } from "@/shared/Typograph";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "@/hooks/Cart";

const { Navigator, Screen } = createNativeStackNavigator();

export const StackRoutes = () => {
  const { COLORS } = useTheme();
  const { navigate, goBack } = useNavigation();
  const { cart } = useCart();

  const sizeCart = useMemo(() => cart.length, [cart]);

  return (
    <Navigator
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: COLORS.BACKGROUND,
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          title: "Produtos",
          headerTintColor: COLORS.HOME_TITLE_HEADER,
          headerStyle: {
            backgroundColor: COLORS.HOME_BACKGROUND,
          },
          contentStyle: {
            backgroundColor: COLORS.HOME_BACKGROUND,
          },
          headerRight: () => (
            <Content onPress={() => navigate("checkout")}>
              {sizeCart > 0 && (
                <Badge>
                  <Typograph size={8} color={COLORS.HOME_PURPLE}>
                    {sizeCart}
                  </Typograph>
                </Badge>
              )}
              <Svg width={22} height={22} fill="none">
                <Path
                  d="M20.156 18.795 19.203 6.7c-.055-.753-.697-1.326-1.467-1.326H16.05v-.448C16.05 2.204 13.776 0 11.008 0 8.221 0 5.966 2.204 5.966 4.927v.448H4.151c-.77 0-1.411.591-1.466 1.344L1.84 18.83c-.091 1.452 1.082 2.67 2.567 2.67H17.59c1.503 0 2.676-1.254 2.566-2.705ZM7.8 4.927c0-1.72 1.43-3.135 3.208-3.135 1.778 0 3.208 1.415 3.208 3.135v.448H7.8v-.448Zm-1.375 6.719c0-.502.403-.896.916-.896.514 0 .917.394.917.896a.898.898 0 0 1-.917.896.898.898 0 0 1-.916-.896Zm8.781 3.906c-.33 1.469-2.09 2.544-4.198 2.544-2.108 0-3.887-1.075-4.217-2.544a.693.693 0 0 1 .569-.842.708.708 0 0 1 .861.555c.165.68 1.247 1.398 2.787 1.398 1.54 0 2.622-.717 2.768-1.398a.74.74 0 0 1 .862-.555.714.714 0 0 1 .568.842Zm-.531-3.01a.898.898 0 0 1-.917-.896c0-.502.403-.896.917-.896.513 0 .916.394.916.896a.91.91 0 0 1-.916.896Z"
                  fill={`${COLORS.HOME_PURPLE}`}
                />
              </Svg>
            </Content>
          ),
        }}
      />
      <Screen
        options={{
          title: "CARRINHO",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 12,
            fontWeight: "bold",
            color: COLORS.GREY_800,
          },
          headerLeft: () => (
            <Content onPress={() => goBack()}>
              <Svg width={10} height={11} fill="none">
                <Path
                  d="m7.103 10.012-5-5 5-5 1.125 1.125L4.36 5.012l3.867 3.875-1.125 1.125Z"
                  fill="#85868A"
                />
              </Svg>
            </Content>
          ),
        }}
        name="checkout"
        component={Checkout}
      />
      <Screen
        name="success"
        component={Success}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};
