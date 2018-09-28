# The src/styles folder

This folder is meant to concentrate global styles and reusable styled-components strings and components.

**Suggestion:** before starting, go ahead and create a theme for your website at the [konfigurator typography tool](https://konfigurator.kaordi.ca), the just save the file and replace `src/styles/theme.ts` and you're set ;)

## How it's structured

### The `helpers` folder

Here's where you'll find useful mixins and functions to be used with styled-components, such as mediaQueries and some typography functions. Feel free to create a PR with your addition to this collection!

### The `global` folder

All global CSS is meant to be applied through this folder. The default files are related mostly to typography, setting the rythm for all written content for the website. Make sure to change these - especially the typography, misc and color variables - before styling your website.

**Note:** If you need custom global styles, go ahead and include them in the string exported as default in `customStyles.ts`.

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
