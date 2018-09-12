const metaFragment = `
  meta {
    seoDescription
    seoTitle
    slug
    title
    image {
      imageUrl
    }
  }
`;

const fluidSharpFragment = `
src
aspectRatio
base64
sizes
srcSet
srcSetWebp
srcWebp
`;

const fixedSharpFragment = `
base64
height
width
src
srcSet
srcSetWebp
srcWebp
`;

const imageFragment = `
  image {
    imageUrl
    localFile {
      childImageSharp {
        fluid(maxWidth: 800){
          ${fluidSharpFragment}
        }
      }
    }
  }
`;

module.exports = {
  metaFragment,
  imageFragment,
}