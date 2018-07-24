import { css } from 'styled-components';

type TmediaQuery = {
  [key: string]: (...args) => any;
}

export const breakpoints = {
  phone: '468px',
  tablet: '768px',
  large: '940px',
  laptop: '1366px',
  desktop: '1920px',
}

export const media: TmediaQuery = Object.keys(breakpoints).reduce(
  (acc: TmediaQuery, label: string) => {
    acc = {
      ...acc,
      [`${label}Max`]: (...args): any[] => css`
        @media (max-width: ${breakpoints[label]}) {
          /* TODO */
          /* typechecking */
          ${css(...args)}
        }
      `,
      [`${label}Min`]: (...args) => css`
        @media (min-width: ${breakpoints[label]}) {
          ${css(...args)}
        }
      `,
    };

    return acc
}, {})

export default media;