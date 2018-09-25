import { IThemeColors, themeColors } from './colors';
import {
  IThemeBoxShadow,
  IThemeTransitions,
  themeBoxShadow,
  themeTransitions,
} from './misc';
import { IThemeTypography, themeTypography } from './typography';
import { themeMaxContainer, IThemeMaxContainer } from './structure';

interface ITheme {
  colors: IThemeColors;
  boxShadow: IThemeBoxShadow;
  transitions: IThemeTransitions;
  typography: IThemeTypography;
  maxContainer: IThemeMaxContainer;
}

export const theme: ITheme = {
  colors: themeColors,
  boxShadow: themeBoxShadow,
  transitions: themeTransitions,
  typography: themeTypography,
  maxContainer: themeMaxContainer,
};

export default theme;
