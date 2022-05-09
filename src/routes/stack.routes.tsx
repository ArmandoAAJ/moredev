import React from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@/screens/Home";
import Checkout from "@/screens/Checkout";
import { Success } from "@/screens/Success";

import { useTheme } from "styled-components/native";

const { Navigator, Screen } = createNativeStackNavigator();

export const StackRoutes = () => {
  const { COLORS } = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      defaultScreenOptions={{
        contentStyle: {
          backgroundColor: COLORS.BACKGROUND,
          paddingTop: StatusBar.currentHeight,
        },
      }}
    >
      <Screen
        options={{
          contentStyle: {
            backgroundColor: COLORS.HOME_BACKGROUND,
            paddingTop: StatusBar.currentHeight,
          },
        }}
        name="home"
        component={Home}
      />
      <Screen
        options={{
          contentStyle: {
            backgroundColor: COLORS.BACKGROUND,
            paddingTop: StatusBar.currentHeight,
          },
        }}
        name="checkout"
        component={Checkout}
      />
      <Screen
        name="success"
        component={Success}
      />
    </Navigator>
  );
};
