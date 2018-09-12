// Refer to gatsby-source-sanity's documentation if you
// need to modify nodes coming in from Sanity:
// https://github.com/hcavalieri/gatsby-source-sanity

// ================
// CREATING PAGES FROM DATA
// ================

// const path = require('path');

// Write your GraphQL queries for data that will be
// used to create pages in ./graphqlQueries
// const graphqlQueries = require('./graphqlQueries');

// And then use the createPages API to do so
// Reference: https://next.gatsbyjs.org/docs/node-apis/#createPages
// exports.createPages = async ({ actions, graphql }) => {
//   const { createPage } = actions;

//   // Creating sample pages from previously created nodes
//   const sampleTemplate = path.resolve(`src/templates/Sample/Sample.tsx`);

//   const graphqlData = await graphql(graphqlQueries);

//   graphqlData.data.posts.edges.forEach(({ node }) => {
//     const { slug } = node.meta;
//     const path = slug.substr(0,1) === '/' ?
//       slug : `/${slug}`;
//     createPage({
//       path,
//       component: sampleTemplate,
//       context: {
//         node,
//       },
//     });
//   })
// }