// Use these files if programatically generating pages
// from GraphQL data

const postsQuery = require('./postsQuery');

// exporting a single query to be ran in gatsby-node.js with
// Gatsby's createPages API
module.exports = `
  {
    posts: ${postsQuery}
  }
`