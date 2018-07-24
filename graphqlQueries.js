// File meant for composing queries that will be ran
// during bootstrap to create pages

// You can compose queries through template strings
const metaQuery = `
  meta {
    ogImage
    seoDescription
    seoTitle
    slug
    title
  }
`;

const allSampleQuery = `
  allSample {
    edges {
      node {
        id
        _createdAt
        _updatedAt
        ${metaQuery.trim()}
      }
    }
  }
`;

// Prefer concentrating them all in a single constant
// for easier access inside gatsby-node.js
const nodeQueries = `
  {
    sample: ${allSampleQuery.trim()}
  }
`;

module.exports = nodeQueries;