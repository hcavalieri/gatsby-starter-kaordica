import * as React from 'react';
import styled from 'styled-components';

export interface IHeaderTemplateProps {
  title: string;
}

const Wrapper = styled.header``;

export const HeaderTemplate: React.SFC<IHeaderTemplateProps> = props => {
  return (
    <Wrapper>
      <h1>{props.title}</h1>
    </Wrapper>
  );
};

HeaderTemplate.displayName = 'HeaderTemplate';

export default HeaderTemplate;
