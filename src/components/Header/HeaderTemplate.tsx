import * as React from 'react';
import styled from 'styled-components';

export interface IHeaderTemplateProps {
  title: string;
}

const Container = styled.div``;

export const HeaderTemplate: React.SFC<IHeaderTemplateProps> = props => {
  return (
    <Container>
      <h1>{props.title}</h1>
    </Container>
  );
};

HeaderTemplate.displayName = 'HeaderTemplate';

export default HeaderTemplate;
