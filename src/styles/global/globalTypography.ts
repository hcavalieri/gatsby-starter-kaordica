import { getHeadingBaseStyle, getHeadingMargins } from './getHeadingStyles';
import { fontFallbacks } from './styleConstants';
import { IUserTheme } from '../themeDefinitions';
import { hexToRgb } from '../helpers/hexToRgb';

// These styles are truly global to the app/website as they don't
// mess-up custom layouts and provide a good basis for efficient
// typography
export const getBaseTypography = (theme: IUserTheme) => `
  :root {
    font-size: ${theme.fontSize}px;
    font-family: "${theme.fontFamilyBody}", ${fontFallbacks[
  theme.familyCategoryBody
] || fontFallbacks['sans-serif']};
    color: ${theme.colors.text};
  }

  // paragraphs, uls and ols share similar typography settings
  p, ul, ol {
    line-height: ${theme.body.lineHeight};
    margin: ${theme.body.margin}rem 0;
    font-weight: ${theme.bodyWeight};
    padding: 0;
  }

  // lis should have vertical margins and inherit their parents'
  // line-heights for better readability
  li {
    margin: ${theme.body.margin / 2}rem 0;
    line-height: inherit;
  }

  // Button browser styles are annoying, but the safest to change
  // globally is the font-size
  button {
    font-size: 1rem;
  }

  // Give more control to styling hrs
  hr {
    height: 1px;
    border: 0;
    background: ${(hexToRgb(theme.colors.text), 0.7)};
    margin: 2em 0;
  }

  // All headings share the same font-family. Override this if you need
  h1, h2, h3, h4 {
    font-weight: ${theme.headingWeight};
    font-family: ${
      theme.fontFamilyHeading && theme.familyCategoryHeading
        ? `"${theme.fontFamilyHeading}", ${fontFallbacks[
            theme.familyCategoryHeading
          ] || fontFallbacks['sans-serif']}`
        : 'inherit'
    };
    color: ${theme.colors.heading || 'inherit'};
  }

  ${theme.headings
    .map((heading, i) => getHeadingBaseStyle(heading, i))
    .join('\n')};
  @media screen and (min-width: 500px) {
    :root {
      font-size: ${theme.fontSizeLg}px;
    }
    p, ul, ol {
      line-height: ${theme.body.lineHeightLg || theme.body.lineHeight};
      max-width: ${theme.body.maxWidth}px;
    }
    ${theme.headingsLg
      .map((heading, i) => getHeadingBaseStyle(heading, i))
      .join('\n')};
  }
`;

// These styles only take place inside components with the class .article-content
// Rationale: these properties will be overwritten by most components,
// so to reduce repetition and avoid messing up custom layouts, we keep
// them only to those components that have long body texts in them, such
// as an <article> tag for a blog ;)
export const getBlockTextTypography = (theme: IUserTheme) => `
  .block-content {
    // Paragraphs coming right after headings should have margin-top: 0
    // to give the margin control to the heading
    h1 ~ p, h2 ~ p, h3 ~ p, h4 ~ p {
      margin-top: 0;
    }

    ul, ol {
      padding: 0 0 0 1rem;
    }

      ${theme.headings
        .map((heading, i) => getHeadingMargins(heading, i))
        .join('\n')};
    @media screen and (min-width: 500px) {
      ${theme.headingsLg
        .map((heading, i) => getHeadingMargins(heading, i))
        .join('\n')};
    }
  }
`;
