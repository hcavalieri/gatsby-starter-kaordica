# Kaordica's Gatsby starter

A very opinionated [Gatsby](https://gatsbyjs.org) starter that reflects [Kaordica](https://kaordica.com.br)'s way of working with clients' website.

## Our way of working

- CMS of choice for most projects: [Sanity](https://sanity.io)
- Styling through [Styled Components](https://www.styled-components.com/)
- Global styling with a strong focus on typography based on the desired line height
- Hosting through [Netlify](https://www.netlify.com/)
- Scripting in Typescript and `.tsx` files. For an example of this in practice, as this extension is not very well supported by Gatsby if put inside the `/src/pages` folder, we usually just run GraphQL queries in simple `.jsx` files and then render template components written in `.tsx`. You can take a look at this pattern by referencing to `./src/index.jsx`.

## Usage

1. Install [Node](https://nodejs.org), [npm](https://www.npmjs.com/) and the gatsby cli (`npm i -g gatsby-cli`)
2. `cd` into the desired folder to store your project
3. Run `gatsby new site-name https://github.com/hcavalieri/gatsby-starter-kaordica`
4. `cd` into the created directory
5. Install all recommended extensions if using VSCode
6. Run `gatsby develop` and follow the instructions from there

Feel free to leave your feedback and/or pull request!

## Folder structure

- root (`./`)
  - `.env` files for Sanity-related data
  - `tsconfig.json` to dictate Typescript's rules
  - `.prettierrc` to guide our code style enforced by [Prettier](https://prettier.io/)
  - `gatsby-config.js` and `gatsby-node.js` for configuring Gatsby. Go through these files before starting your site
  - `graphqlQueries.js` and `sanityQueries.js` are meant for building queries in isolation for easier maintainability. The sanity ones will be used for fetching data from the CMS, whereas the GraphQl queries will be ran to create pages in `gatsby-node.js`
- `/src`
  - `/images` - Here's where site-wide pictures are stored, such as a favicon or logo (although you should probably use a SVG for the logo)
  - `/layouts` - The different layouts that will be used as basis for templates.
  - `/templates` - Folder containing all of the page templates, with the corresponding template-specific components stored under `/components` folders
  - `/styles` - Global styles and helpers for styled-components. Read more about it in `src/styles/README.md`
  - `/pages` - Self explanatory. Every `.js|.jsx` file will put here will become a page with a path defined by the file's name (ex: `About.jsx` will be come site.com/about)
  - `/utils` - Some useful functions you might want to use throughout your code. We're always creating new ones based on our necessities, feel free to give your suggestions or do a PR ;)

## Starting with Sanity

Please refer to Sanity's ["Getting Started"](https://www.sanity.io/docs/introduction/getting-started) section in their docs, it's pretty straightforward. We're currently checking with their team if we can create our own project template, more on this later!

## Hosting

If you're like us, Netlify will probably be a great fit. Publish your repo to Github, Gitlab or Bitbucket, log into [app.netlify.com](https://app.netlify.com) and choose "new site from Git", the wizard will take you from there.

## Rebuilding the website when content is changed

To trigger automatic builds based on content authoring in Sanity, add a webhook at your site's "Build & deploy" settings in [app.netlify.com](https://app.netlify.com), copy it. Then go into [manage.sanity.io](https://manage.sanity.io) and in the corresponding project's settings add this copied webhook to call when content is changed.

## Roadmap / TODO

- Normalizers for lists
- change breakpoints in mediaQueries.ts to be numbers for better flexibility