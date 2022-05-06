import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import { Home } from "@/screens/Home";
import { useTheme } from "styled-components/native";

const { Navigator, Screen } = createNativeStackNavigator();

export const StackRoutes = () => {
  const { COLORS } = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { paddingTop: StatusBar.currentHeight },
      }}
      defaultScreenOptions={{
        contentStyle: {
          backgroundColor: COLORS.BACKGROUND,
        },
      }}
    >
      <Screen name="home" component={Home} />
    </Navigator>
  );
};
