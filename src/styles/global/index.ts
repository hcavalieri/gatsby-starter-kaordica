import { createGlobalStyle } from '../styledComponents';
import { baseStyles } from './baseStyles';
import { customStyles } from './customStyles';
import { getBaseTypography, getBlockTextTypography } from './globalTypography';

export const GlobalStyles = createGlobalStyle`
  ${baseStyles}
  ${props => getBaseTypography(props.theme)}
  ${props => getBlockTextTypography(props.theme)}
  ${customStyles}
`;

export default GlobalStyles;
