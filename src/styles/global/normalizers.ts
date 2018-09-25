import { theme } from '../theme';
import { hexToRgb } from '../helpers/hexToRgb';
import { leading } from '../helpers/typography';

export default `
  a {
    color: ${theme.colors.link || theme.colors.primary};
    transition: ${theme.transitions.default} color;

    &:hover {
      color: ${hexToRgb(theme.colors.link || theme.colors.primary, 0.7)};
    }
  }

  button {
    font-family: inherit;
    font-size: 1rem;
  }

  img {
    display: block;
    max-width: 100%;
    margin: ${leading(1.5, 0)};
  }

  hr {
    height: 1px;
    border: 0;
    background: ${hexToRgb(theme.colors.heading || theme.colors.text, 0.7)};
    margin: ${leading(1.5, 0)};
  }

  ul, ol {
    padding: 0 0 0 1rem;
    margin: ${leading(1, 0)};
  }

  li {
    margin: ${leading(0.5, 0)}
  }
`;
