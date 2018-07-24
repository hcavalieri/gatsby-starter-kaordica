import React from 'react';
import { graphql } from 'gatsby';

import HomeTemplate from '../templates/Home/HomeTemplate';

const IndexPage = ({ data }) => <HomeTemplate meta={data.site.siteMetadata} />

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title,
        description,
      }
    }
  }
`;
