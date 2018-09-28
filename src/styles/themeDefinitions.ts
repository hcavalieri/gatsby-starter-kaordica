export interface IHeadingTypography {
  fontSize: number;
  marginTop?: number;
  marginBottom?: number;
  lineHeight?: number;
}

export interface IBodyTypography {
  margin: number;
  lineHeight: number;
  lineHeightLg?: number;
  maxWidth: number;
}

export interface IThemeColors {
  text: string;
  heading?: string;
}

export interface IUserTheme {
  // Size
  fontSize: number;
  fontSizeLg: number;
  // Family
  fontFamilyBody: string;
  fontFamilyHeading?: string;
  familyCategoryBody: 'sans-serif' | 'serif' | 'monospace';
  familyCategoryHeading?: 'sans-serif' | 'serif' | 'monospace';
  // Tag-specific typography
  body: IBodyTypography;
  headingWeight: number;
  bodyWeight: number;
  headings: IHeadingTypography[];
  headingsLg: IHeadingTypography[];
  // General
  colors: IThemeColors;
  customCSS?: string;
}
