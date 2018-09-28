import * as React from 'react';
import styled from 'styled-components';

import LayoutBasis from './LayoutBasis';

export interface IBasicLayoutProps {
  children: any;
}

const Container = styled.main`
  max-width: calc(600px + 2rem);
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
