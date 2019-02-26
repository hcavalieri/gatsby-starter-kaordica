import * as React from 'react';

import { GlobalStyles } from '../styles/global';
import FallbackPageMeta from '../components/FallbackPageMeta';

const LayoutBasis = ({ children }: any) => (
  <>
    <FallbackPageMeta />
    <GlobalStyles />
    {children}
  </>
);

export default LayoutBasis;
