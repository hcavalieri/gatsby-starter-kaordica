import { breakpoints } from '../styles/helpers/mediaQueries';

export const scrollToId = (id: string) => {
  const object = document.getElementById(id);

  if (object) {
    object.scrollIntoView({
      behavior: 'smooth',
    });
  }
};

export const isLargeScreen =
  typeof window !== 'undefined' && window.innerWidth > breakpoints.large;
