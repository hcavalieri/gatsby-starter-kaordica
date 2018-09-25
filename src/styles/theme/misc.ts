export interface IThemeBoxShadow {
  default: string;
  low: string;
  raised: string;
}

export interface IThemeTransitions {
  function: string;
  default: string;
  fast: string;
  slow: string;
}

export const themeBoxShadow: IThemeBoxShadow = {
  default: '0 4px 4px rgba(0,0,0,.24)',
  low: '0 2px 2px rgba(0,0,0,.16)',
  raised: '0 6px 6px rgba(0,0,0,.32)',
};

export const themeTransitions: IThemeTransitions = {
  function: 'ease',
  default: '.25s ease',
  fast: '.15s ease',
  slow: '.45s ease',
};
