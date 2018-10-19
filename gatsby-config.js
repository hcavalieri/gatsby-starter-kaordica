// Pay attention to comments for suggestions

// ================
// USING SANITY
// ================

// Concentrate your Sanity queries in a single,
// isolated file and export an object containing
// all of them for easier maintainability
// const queries = require('./sanityQueries');

// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// });

module.exports = {
  siteMetadata: {
    title: "Kaordica's Gatsby Starter",
    description: 'Your fallback meta description',
    siteUrl: 'https://your-url.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        fileName: false,
      },
    },
    // ============
    // SUGGESTIONS
    // ============
    // 'gatsby-plugin-sharp',
    // 'gatsby-transformer-sharp',
    // ================
    // USING SANITY
    // ================
    // {
    //   resolve: 'gatsby-source-sanity',
    //   options: {
    //     projectId: process.env.SANITY_ID,
    //     dataset: process.env.SANITY_DATASET,
    //     saveImages: true,
    //     queries: [
    //       {
    //         name: 'sample',
    //         type: 'Sample',
    //         groq: queries.sampleQuery,
    //       },
    //     ]
    //   }
    // }
    // ================
    // ================
    // you can use the folder below as a single source for all of your
    // static and local pages, be them in .md or .json format
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'pages',
    //     path: './staticPages',
    //   },
    // },
    // 'gatsby-transformer-json',
    // 'gatsby-transformer-remark',
    // ===================
    // IF HOSTING ON NETLIFY
    'gatsby-plugin-netlify',
  ],
};
