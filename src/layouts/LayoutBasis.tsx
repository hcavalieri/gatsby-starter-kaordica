import * as React from 'react';
import Helmet from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';

import '../styles/sass/main.sass';
import favicon from '../images/favicon-md.png';

const LayoutBasis = ({ children }: any) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
            description,
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />
          <link rel="icon" type="image/png" sizes="64x64" href={favicon} />
        </Helmet>
        {children}
      </>
    )}
  />
)

export default LayoutBasis