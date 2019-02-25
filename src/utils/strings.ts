import * as React from 'react';

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
  const a = 'àáäâãåèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;';
  const b = 'aaaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------';
  const p = new RegExp(a.split('').join('|'), 'g');

  return str
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
};

export const getRandomNumber = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export const removeWhitespace = (str: string) => {
  return str.replace(/\s/g, '');
};

// Useful to get only numbers from phone numbers
// Can be chained with removeWhitespace()
export const removeSpecialCharacters = (str: string) => {
  return str.replace(/[\-\(\)\+]/g, '');
};

// Function meant to check if slugs coming from data start
// with a / or not in order to normalize it for usage in links
export const getProperSlug = (slug: string) => {
  return slug.substr(0, 1) === '/' ? slug : `/${slug}`;
};

export const checkIfAbsURL = (url: string) => {
  return url.includes('http');
};
