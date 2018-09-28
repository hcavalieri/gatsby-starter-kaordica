export const breakpoints = {
  phone: 468,
  tablet: 768,
  large: 940,
  laptop: 1366,
  desktop: 1920,
};

// Each media fragment only exposes the (min-width / max-width: Ypx)
// so then we can compose multiple media queries such as:
// @media ${medias.phoneMin} and ${media.tabletMax}
export const getMediaFragment = (breakpoint: number, isMax: boolean = false) =>
  `(${isMax ? 'max' : 'min'}-width: ${isMax ? breakpoint - 1 : breakpoint}px)`;

export const medias = {
  phoneMax: getMediaFragment(breakpoints.phone, true),
  phoneMin: getMediaFragment(breakpoints.phone),
  tabletMax: getMediaFragment(breakpoints.tablet, true),
  tabletMin: getMediaFragment(breakpoints.tablet),
  largeMax: getMediaFragment(breakpoints.large, true),
  largeMin: getMediaFragment(breakpoints.large),
  laptopMax: getMediaFragment(breakpoints.laptop, true),
  laptopMin: getMediaFragment(breakpoints.laptop),
  desktopMax: getMediaFragment(breakpoints.desktop, true),
  desktopMin: getMediaFragment(breakpoints.desktop),
};
