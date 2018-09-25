import * as React from 'react';
import styled from 'styled-components';

import { theme } from '../../../styles/theme';

export interface IBaseIconProps {
  color?: string;
  hoverColor?: string;
  children?: JSX.Element;
  width?: string;
  margin?: string;
  notHoverable?: boolean;
}

export interface IIconProps extends IBaseIconProps {
  classes?: string;
  title?: string;
  hidden?: boolean;
}

const StyledBaseIcon = styled.span`
  display: inline-block;
  padding: 0;
  margin: ${(props: IBaseIconProps) => props.margin || '0'};
  width: ${(props: IBaseIconProps) => props.width || '2rem'};
  svg {
    fill: ${(props: IBaseIconProps) => props.color || theme.colors.text};
    transition: ${theme.transitions.default} fill;
    max-width: 100%;
    max-height: 100%;
    display: block;
  }
`;

export const BaseIcon: React.SFC<IBaseIconProps> = props => {
  return <StyledBaseIcon {...props}>{props.children}</StyledBaseIcon>;
};

BaseIcon.displayName = 'Icon';

export default BaseIcon;
