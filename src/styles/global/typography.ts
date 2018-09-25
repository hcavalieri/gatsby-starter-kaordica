import { themeHeadingFontFamily, leading } from '../helpers/typography';
import { theme } from '../theme';
import { breakpoints } from '../helpers/mediaQueries';

export default `
  h1, h2, h3, h4, h5, h6 {
    color: ${theme.colors.heading || 'inherit'};
    font-family: ${themeHeadingFontFamily};
  }
  ${
    // Map through all of the headings inside the
    // theme's headings array and add properties on
    // font-size and line-height. The top margin will
    // only be added for elements inside containers
    // that have the class "block-content"
    theme.typography.headings
      .map(
        (heading, i) => `
    h${i + 1} {
      font-size: ${heading.size}rem;
      line-height: ${heading.lineHeight};
      margin: ${leading(0, 0, heading.mgBottom)};
    }
  `
      )
      .join('')
  }

  p {
    font-size: 1rem;
    line-height: ${leading(1)};
    margin: ${leading(1, 0)};
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

  ${
    // If there's a headingsLg array, we want to go through it
    // and add large-screen-specific properties for headings
    theme.typography.headingsLg
      ? `@media screen and (min-width: ${breakpoints.large}) {
        ${theme.typography.headingsLg
          .map(
            (heading, i) => `
        h${i + 1} {
          font-size: ${heading.size}rem;
          line-height: ${heading.lineHeight};
          margin: ${leading(heading.mgTop, 0, heading.mgBottom)};
        }
      `
          )
          .join('')}
    }`
      : ''
  }

  ${
    // For containers with the class "block-content"
    // we want to add a top margin to headers in order
    // to separate them from previous content
    theme.typography.headings
      .map(
        (heading, i) => `
    .block-content h${i + 1} {
      margin-top: ${leading(heading.mgTop)};
    }
  `
      )
      .join('')
  }
  ${
    // The same "block-content" logic for large headings
    theme.typography.headingsLg
      ? `@media screen and (min-width: ${breakpoints.large}) {
        ${theme.typography.headingsLg
          .map(
            (heading, i) => `
        h${i + 1} {
          margin-top: ${leading(heading.mgTop)};
        }
      `
          )
          .join('')}
    }`
      : ''
  }
`;
