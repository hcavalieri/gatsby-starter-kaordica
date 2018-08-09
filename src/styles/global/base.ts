import { theme } from '../theme';
import { hexToRgb } from '../helpers/hexToRgb';
import { themeBodyFontFamily } from '../helpers/typography';
import { media, breakpoints } from '../helpers/mediaQueries';

export default `
  :root {
    font-size: ${theme.typography.size}px;
  }

  *, *::before, *::after {
    box-sizing: inherit;
    font-family: inherit;
  }

  ::selection {
    background: ${hexToRgb(theme.colors.primary, 0.3)};
    color: white;
  }

  html {
    box-sizing: border-box;
    overflow-x: hidden;
    color: ${theme.colors.text};
    font-family: ${themeBodyFontFamily};
  }

  body {
    margin: 0;
    overflow-x: hidden;
  }
  @media screen and (min-width: ${breakpoints.large}) {
    :root {
      font-size: ${theme.typography.sizeLg || theme.typography.size}px;
    }
  }
`