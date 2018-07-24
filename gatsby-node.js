// UNCOMMENT EVERYTHING BELOW AND FOLOW INSTRUCTIONS

// const crypto = require('crypto');
// const path = require('path');
// const slugify = require('slugify');
// const sanityClient = require('@sanity/client');

// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// });

// // Write your sanity queries in the file required below:
// const queries = require('./sanityQueries');

// // And your GraphQL queries in graphqlQueries.js
// const graphqlQueries = require('./graphqlQueries');

// // Remember to update your .env files with the
// // correct IDs and Datasets
// const Sanity = sanityClient({
//   projectId: process.env.SANITY_ID,
//   dataset: process.env.SANITY_DATASET,
//   useCdn: true,
// });

// // sourceNodes is used to fetch data from external
// // sources. Reference: https://next.gatsbyjs.org/docs/node-apis/#sourceNodes
// exports.sourceNodes = async ({
//   actions
// }) => {
//   const {
//     createNode
//   } = actions;
//   const data = await Sanity.fetch(queries);

//   // Sample on how to create nodes for the data:
//   if (data.sample) {
//     data.sample.forEach(node => {
//     // Gatsby's API for creating nodes on graphQL
//     // reference: https://next.gatsbyjs.org/docs/actions/#createNode
//       createNode({
//         ...node,

//         // mandatory fields
//           id: node._id,
//           parent: null,
//           children: [],
//           internal: {
//             type: 'Sample',
//             // Content digest is used for caching the node
//             contentDigest: crypto
//               .createHash(`md5`)
//               .update(JSON.stringify(node))
//               .digest(`hex`),
//             description: node.title,
//           }
//       })
//     })
//   }

// }

// // Reference: https://next.gatsbyjs.org/docs/node-apis/#createPages
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