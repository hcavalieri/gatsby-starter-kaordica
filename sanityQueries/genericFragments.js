const imageField = `
  image{
    _type,
    alt,
    crop,
    hotspot,
    asset->,
  }
`;

const metaFragment = `
  meta{
    ${imageField},
    seoDescription,
    seoTitle,
    "slug": slug.current,
    title,
  }
`;

module.exports = {
  imageField,
  metaFragment,
};