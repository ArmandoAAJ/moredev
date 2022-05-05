import React from "react";
import { ThemeProvider } from "styled-components/native";
import AppLoading from "expo-app-loading";

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

import theme from "@/theme";

export default function App() {
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
  return <ThemeProvider theme={theme}></ThemeProvider>;
}
