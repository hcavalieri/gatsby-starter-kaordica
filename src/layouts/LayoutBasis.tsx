import * as React from 'react';
import { ThemeProvider } from '../styles/styledComponents';

import { GlobalStyles } from '../styles/global';
import theme from '../styles/theme';
import FallbackPageMeta from '../components/FallbackPageMeta';

const LayoutBasis = ({ children }: any) => (
  <ThemeProvider theme={theme}>
    <>
      <FallbackPageMeta />
      <GlobalStyles />
      {children}
    </>
  </ThemeProvider>
);

export default LayoutBasis;
