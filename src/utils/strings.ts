import * as React from 'react';
import slugify from 'slugify';

export const keyFromString = (str: string, length: number = 10) => {
  return (
    str.substr(0, length / 2) + str.substr(str.length - length / 2, str.length)
  );
};

export const textToParagraphs = (body: string | undefined) => {
  if (body) {
    return body
      .split('\n')
      .map(paragraph =>
        React.createElement('p', { key: keyFromString(paragraph) }, paragraph)
      );
  } else {
    return null;
  }
};

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const lowercaseFirstLetter = (str: string) => {
  return str.charAt(0).toLowerCase() + str.slice(1);
};

export const slugifyString = (str: string) => {
  return slugify(str, { lower: true });
};

export const getRandomNumber = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};
