import React from "react";
import { Typograph } from "@/shared/Typograph";
import { useTheme } from "styled-components";
import { Props } from "./types";

export const InfoProduct = ({ category, title, subTitle }: Props) => {
  const { COLORS, FONTS } = useTheme();
  return (
    <>
      <Typograph size={8} color={COLORS.HOME_PRODUCT_CATEGORY}>
        {category}
      </Typograph>
      <Typograph numberOfLines={1} size={14} color={COLORS.HOME_PRODUCT_TITLE}>
        {title}
      </Typograph>
      {!!subTitle && (
        <Typograph
          numberOfLines={2}
          color={COLORS.HOME_PRODUCT_DESCRIPTION}
          type={FONTS.DESCRIPTION}
          size={10}
        >
          {subTitle}
        </Typograph>
      )}
    </>
  );
};
