module.exports = {
  siteMetadata: {
    title: 'Kaordica\'s Gatsby Starter',
    description: 'Your fallback meta description',
    siteUrl: 'https://your-url.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        file: 'src/styles/main',
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        fileName: false,
      },
    },
    // SUGGESTION
    // you can use the folder below as a single source for all of your
    // static and local pages, be them in .md or .json format
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'pages',
    //     path: './staticPages',
    //   },
    // },
    // JSON and/or markdown sources below
    // 'gatsby-transformer-json',
    // 'gatsby-transformer-remark',
  ],
};
