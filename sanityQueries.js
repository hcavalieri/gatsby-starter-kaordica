// This file is intended for concentrating all
// queries to be fetched by Sanity on build time

// By splitting each collection query into its own
// constant, we can have more readable and maintanable
// code that is easily digestible inside of gatsby-node.js

const sampleQuery = `
	*{
		_id
	}
`;

const queries = `
{
	"sample": ${sampleQuery.trim()},
}
`;

module.exports = queries;