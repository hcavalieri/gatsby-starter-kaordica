import { defaultHeadingMgTop, defaultHeadingMgBottom } from './styleConstants';
import { IHeadingTypography } from '../themeDefinitions';

// We want to set headings' font-size and line-height independently of
// where they come in the document
export const getHeadingBaseStyle = (h: IHeadingTypography, i: number) => {
  return `
    h${i + 1} {
      font-size: ${h.fontSize}px;
      line-height: ${h.lineHeight || 'inherit'};
    }
  `.trim();
};

// However, margins tend to be based on each use case, and for such we
// only define them when headers are wrapped by a component with the
// .block-content class name
export const getHeadingMargins = (h: IHeadingTypography, i: number) => {
  return `
    h${i + 1} {
      margin: ${
        h.marginTop || h.marginTop === 0
          ? `${h.marginTop}px`
          : `${defaultHeadingMgTop}em`
      } 0 ${
    h.marginBottom || h.marginBottom === 0
      ? `${h.marginBottom}px`
      : `${defaultHeadingMgBottom}rem`
  };
    }
  `.trim();
};
