export interface IThemeColors {
  primary: string;
  success: string;
  text: string;
  heading?: string;
  greyLight: string;
  greyBluish: string;
  greyMed: string;
  link?: string;
}

export const themeColors: IThemeColors = {
  primary: '#F04140',
  success: '#3DC670',
  text: '#474747',
  heading: '#362e5c',
  greyLight: '#f1f1f1',
  greyBluish: '#dfe6e9',
  greyMed: '#636e72',
};

export default themeColors;