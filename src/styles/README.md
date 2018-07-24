# The src/styles folder

This folder is meant to concentrate global styles and reusable styled-components strings and components.

## How it's structured

### The `helpers` folder

Here's where you'll find useful mixins and functions to be used with styled-components, such as mediaQueries. Feel free to create a PR with your addition to this collection!

### The `sass` folder

All global CSS is meant to be applied through this sass folder. The default files are related mostly to typography, setting the rythm for all written content for the website. Make sure to change these before styling your website.

### `theme.ts`

Focus all of your theme-related variables in this folder to be used throughout the website. The default file contains variables on transition, color and boxShadow. Feel free to add others!

Example of a component using `theme.ts`:

```js
import styled from 'styled-components';

import { theme } from './theme.ts';
import { media } from './helpers/mediaQueries.ts';
import { buttonReset } from './helpers/snippets.ts';

const Button = styled.button`
  ${buttonReset}
  transition: ${theme.transitions.default} color;
  color: ${theme.colors.primary};
  box-shadow: ${theme.boxShadow.low};
  ${media.largeMin`
    font-size: 3rem;
  `};
  :hover {
    color: ${theme.colors.secondary};
    box-shadow: ${theme.boxShadow.raised};
  };
`;
```