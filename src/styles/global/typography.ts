import { themeHeadingFontFamily, leading } from "../helpers/typography";
import { theme } from "../theme";
import { breakpoints } from "../helpers/mediaQueries";

export default `
  h1, h2, h3, h4, h5, h6 {
    color: ${theme.colors.heading || 'inherit'};
    font-family: ${themeHeadingFontFamily};
  }

  ${theme.typography.headings.map((heading, i) => `
    h${i + 1} {
      font-size: ${heading.size}rem;
      line-height: ${heading.lineHeight};
      margin: ${leading(heading.mgTop, 0, heading.mgBottom)};
    }
  `).join('')}

  p {
    font-size: 1rem;
    line-height: ${leading(1)};
    margin: ${leading(1, 'auto')};
    color: inherit;
    max-width: ${theme.typography.pMaxWidth || 'none'};
  }

  * {
    &.text_right {
      text-align: right;
      margin-right: 0;
      margin-left: auto;
    }

    &.text_center {
      text-align: center;
      margin-right: auto;
      margin-left: auto;
    }
  }

  ${theme.typography.headingsLg ?
    `@media screen and (min-width: ${breakpoints.large}) {
        ${theme.typography.headingsLg.map((heading, i) => `
        h${i + 1} {
          font-size: ${heading.size}rem;
          line-height: ${heading.lineHeight};
          margin: ${leading(heading.mgTop, 0, heading.mgBottom)};
        }
      `).join('')}
    }`
  : ''}
`;