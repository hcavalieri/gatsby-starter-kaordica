import { theme } from "../theme";
import { hexToRgb } from "../helpers/hexToRgb";
import { leading } from "../helpers/typography";

export default `
  a {
    color: ${theme.colors.link || theme.colors.primary};
    transition: ${theme.transitions.default} color;

    &:hover {
      color: ${hexToRgb(
        theme.colors.link || theme.colors.primary,
        .7
      )};
    }
  }

  button {
    font-family: inherit;
    font-size: 1rem;
  }

  img {
    display: block;
    max-width: 100%;
    margin: ${leading(1.5, 'auto')};
  }

  hr {
    height: 1px;
    border: 0;
    background: ${hexToRgb(
      theme.colors.heading || theme.colors.text,
      .7
    )};
    margin: ${leading(1.5, 0)};
  }
`;