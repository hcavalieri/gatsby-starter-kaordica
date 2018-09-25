import base from './base';
import normalizers from './normalizers';
import customGlobal from './customGlobal';
import helpers from './helpers';
import typography from './typography';

export const globalStyles = `
  ${base}
  ${typography}
  ${normalizers}
  ${helpers}
  ${customGlobal}
`;

export default globalStyles;
