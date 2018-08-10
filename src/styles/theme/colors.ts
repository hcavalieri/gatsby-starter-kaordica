export interface IThemeColors {
  // Brand colors
  primary: string;
  secondary?: string;
  // Typography
  text: string;
  heading?: string;
  link?: string;
  // Helpers
  success: string;
  // Greys (useful for UI)
  greyLight?: string;
  greyMed?: string;
  greyDark?: string;
}

export const themeColors: IThemeColors = {
  primary: '#F04140',
  success: '#3DC670',
  text: '#474747',
  heading: '#362e5c',
  greyLight: '#f1f1f1',
  greyMed: '#636e72',
};

export default themeColors;