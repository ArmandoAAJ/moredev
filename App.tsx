import React from "react";
import { useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";
import AppLoading from "expo-app-loading";

import themes from "@/theme/index";

import {
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import {
  useFonts,
  WorkSans_700Bold,
  WorkSans_600SemiBold,
  WorkSans_500Medium,
} from "@expo-google-fonts/work-sans";

import { StackRoutes } from "@/routes/stack.routes";
import { ProductProvider } from "@/hooks/Products";
import { Separator } from "@/shared/Separator";

export default function App() {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.light;

  let [fontsLoaded] = useFonts({
    WorkSans_700Bold,
    WorkSans_600SemiBold,
    WorkSans_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <ProductProvider>
          <StackRoutes />
        </ProductProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
