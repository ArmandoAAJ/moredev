import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@/screens/Home";
import { useTheme } from "styled-components/native";

const { Navigator, Screen } = createNativeStackNavigator();

export const StackRoutes = () => {
  const { COLORS } = useTheme();
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      defaultScreenOptions={{
        contentStyle: { backgroundColor: COLORS.BACKGROUND },
      }}
    >
      <Screen name="home" component={Home} />
    </Navigator>
  );
};
