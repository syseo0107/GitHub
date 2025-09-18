import { Theme } from "@mui/material";
import { themeSettingsTypes } from "theme";

export const THEMES = { LIGHT: "light", DARK: "dark" };

export const lightTheme = (theme: Theme) => theme.palette.mode === "light";

export const secondarySideBarGap = 80;
export const secondarySideBarWidth = 215;

export const initialThemeSettings: themeSettingsTypes = {
  direction: "ltr",
  theme: THEMES.LIGHT,
  activeLayout: "layout3",
  responsiveFontSizes: true,
};
