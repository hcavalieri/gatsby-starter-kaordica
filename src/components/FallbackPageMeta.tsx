import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import favicon from '../images/favicon-md.png';
import PageMeta from './PageMeta';

export const FallbackPageMeta: React.SFC<{}> = props => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => (
        <PageMeta
          title={data.site.siteMetadata.title}
          seoDescription={data.site.siteMetadata.description}
        >
          <link rel="icon" type="image/png" sizes="64x64" href={favicon} />
        </PageMeta>
      )}
    />
  );
};

FallbackPageMeta.displayName = 'FallbackPageMeta';

export default FallbackPageMeta;
