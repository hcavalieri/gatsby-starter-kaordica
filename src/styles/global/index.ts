import { createGlobalStyle } from 'styled-components';
import { baseStyles } from './baseStyles';
import { customStyles } from './customStyles';
import { getBaseTypography, getBlockTextTypography } from './globalTypography';
import theme from '../theme';

export const GlobalStyles = createGlobalStyle`
  ${baseStyles}
  ${getBaseTypography(theme)}
  ${getBlockTextTypography(theme)}
  ${customStyles}
`;

export default GlobalStyles;
