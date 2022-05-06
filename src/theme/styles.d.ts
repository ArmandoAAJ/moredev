import "styled-components";
import dark from "./themeDark";
import light from "./themeLigth";

declare module "styled-components" {
  type ThemeType = typeof dark;
  type ThemeType = typeof light;

  export interface DefaultTheme extends ThemeType {}
}
