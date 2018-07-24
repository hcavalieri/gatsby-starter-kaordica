import styled from 'styled-components';
import { Link } from 'gatsby';

import { theme } from './theme';

export const QuestionCircle = styled.div`
  margin-left: .5rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 1.7em;
  width: 1.7em;
  border-radius: 50%;
  background: ${theme.colors.greyLight};
  color: ${theme.colors.text};
  font-weight: bold;
  text-decoration: none;
  font-size: .8rem;
`;

export const CTATitle = styled(Link)`
  color: ${theme.colors.text};
  font-weight: bold;
  text-decoration: none;
  font-size: 2rem;
  /* display: inline-block; */
  text-align: center;
  position: relative;
  transition: ${theme.transitions.slow} transform;
  margin: 1.5rem auto;
  ::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -.1em;
    transform: translateX(-50%);
    background: ${theme.colors.primary};
    width: 70%;
    height: .2em;
    transition: ${theme.transitions.slow} width;
  };
  :hover {
    opacity: 1;
    transform: scale(1.05);
    ::after {
      width: 95%;
    }
  }
`;