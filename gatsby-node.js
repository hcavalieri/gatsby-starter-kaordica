// FOLOW INSTRUCTIONS IN COMMENTS
// (FEEL FREE TO DELETE THEM)

// ================
// MODIFYING NODES CREATED BY SOURCE-SANITY
// ================

// const slugify = require('slugify');

// Sometimes you'll need to attach new fields to
// nodes created by the gatsby-source-sanity plugin
// To do so, you'll use the onCreateNode API and check
// the node's type:

// exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions;
//   const { type } = node.internal;

//   // Example of attaching a "slug" field to
//   // post nodes (although this should be generated
//   // inside of Sanity using the slug object)
//   if (type === 'POST') {
//     createNodeField({
//       node,
//       name: 'slug',
//       value: slugify(node.name, { lower: true }),
//     })
//   }
// }

// ================
// CREATING PAGES FROM DATA
// ================

// const path = require('path');

// Write your GraphQL queries for data that will be
// used to create pages in ./graphqlQueries.js
// const graphqlQueries = require('./graphqlQueries');

// And then use the createPages API to do so
// Reference: https://next.gatsbyjs.org/docs/node-apis/#createPages
// exports.createPages = async ({ actions, graphql }) => {
//   const { createPage } = actions;

//   // Creating sample pages from previously created nodes
//   const sampleTemplate = path.resolve(`src/templates/Sample/Sample.tsx`);

//   const graphqlData = await graphql(graphqlQueries);

//   graphqlData.data.sample.edges.forEach(({ node }) => {
//     const path = `/samples/${node.slug}`;
//     createPage({
//       path,
//       component: sampleTemplate,
//       context: {
//         node, // you can access this inside the template
//       },
//     });
//   })
// }