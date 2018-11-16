import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';
import { IUserTheme } from './themeDefinitions';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<IUserTheme>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
