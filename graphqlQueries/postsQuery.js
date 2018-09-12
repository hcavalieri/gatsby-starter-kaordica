// Example for a GraphQL posts. Delete this file at will.

const generic = require('./genericQueries');

module.exports = `
allPosts {
  edges {
    node {
      id
      ${generic.metaFragment}
    }
  }
}
`;