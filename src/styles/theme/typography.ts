// Each heading will have an object with these options
export interface IHeadingProps {
  // heading's font-size (calculated in rem)
  size: number;
  // line-height (without units to be relative
  // to the font-size)
  lineHeight: number;
  // margin-top and bottom based on the leading
  // function (multiplies by the line-height)
  mgTop: number;
  mgBottom: number;
}

export interface IThemeTypography {
  // The base font-size - will be used in px
  size: number;
  // [OPTIONAL] font-size for large screens
  sizeLg?: number;
  // Number that will be used with the rem unit for
  // the final line height based on the font-size
  lineHeight: number;
  // [OPTIONAL] Your main font family for the body
  // if null, only fallback font families will be used
  fontFamily?: string;
  // [OPTIONAL] Headings' font family
  fontFamilyHeading?: string;
  // [OPTIONAL] Fallback fonts
  // Defaults to '-apple-system, (...)'
  fallbackFont?: string;
  // [OPTIONAL] Max width of paragraphs.
  // You must include the unit.
  pMaxWidth?: string;
  // Array of objects dictating the properties
  // for each heading. Max length = 6 (h1 thru h6)
  headings: IHeadingProps[];
  headingsLg?: IHeadingProps[] | null;
}

const headings: IHeadingProps[] = [
  // H1
  {
    size: 2.25,
    lineHeight: 1.1,
    mgTop: 0,
    mgBottom: 1,
  },
  // H2
  {
    size: 1.75,
    lineHeight: 1.2,
    mgTop: 2.5,
    mgBottom: 1,
  },
  // H3
  {
    size: 1.5,
    lineHeight: 1.4,
    mgTop: 1.5,
    mgBottom: 1,
  },
  // H4
  {
    size: 1.2,
    lineHeight: 1.5,
    mgTop: 2,
    mgBottom: .5,
  },
  // H5
  {
    size: 1,
    lineHeight: 1.5,
    mgTop: 1,
    mgBottom: .5,
  },
];

const headingsLg: IHeadingProps[] = [
  // H1
  {
    size: 3.2,
    lineHeight: 1.1,
    mgTop: 0,
    mgBottom: 1,
  },
  // H2
  {
    size: 2.25,
    lineHeight: 1.2,
    mgTop: 1.5,
    mgBottom: 3,
  },
  // H3
  {
    size: 1.8,
    lineHeight: 1.4,
    mgTop: 2,
    mgBottom: .5,
  },
  // H4
  {
    size: 1.2,
    lineHeight: 1,
    mgTop: 1.5,
    mgBottom: .5,
  },
  // H5
  {
    size: 1,
    lineHeight: 1.5,
    mgTop: 1,
    mgBottom: .5,
  },
];

// Customize the headings properties for large
// screens if needed
// const headingsLg: IHeadingProps[] | null = null;

export const themeTypography: IThemeTypography = {
  size: 18,
  lineHeight: 1.5,
  headings,
  headingsLg: headingsLg,
}

export default themeTypography;