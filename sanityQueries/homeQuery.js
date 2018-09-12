const generic = require('./genericFragments');

const homeId = '4ba57aa0-e433-45d0-asd23-1edbd66ead2b';

// Example of a query for a single document.
// For maximum reusability, we standardize some generic query
// fragments such as the image field

module.exports = `
  *[_id == '${homeId}']{
    _id,
    ${generic.metaFragment},
  }
`