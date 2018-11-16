import * as React from 'react';

import LayoutBasis from './LayoutBasis';
import styled from '../styles/styledComponents';

export interface IBasicLayoutProps {
  children: any;
}

const Container = styled.main`
  max-width: ${props => props.theme.body.maxWidth}px;
  padding: 0 1rem;
  margin: 5rem auto;
`;

// Go ahead and delete / change this layout, it's meant for readability of
// the guide only ;)
export const BasicLayout: React.SFC<IBasicLayoutProps> = props => {
  return (
    <LayoutBasis>
      <Container>{props.children}</Container>
    </LayoutBasis>
  );
};

BasicLayout.displayName = 'BasicLayout';

export default BasicLayout;
