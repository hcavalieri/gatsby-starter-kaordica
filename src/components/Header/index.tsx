import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import { IHeaderTemplateProps, HeaderTemplate } from './HeaderTemplate';

export interface IHeaderData {
  site: {
    siteMetadata: IHeaderTemplateProps;
  }
}

export const Header = () => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={({ site: { siteMetadata }}: IHeaderData) => <HeaderTemplate {...siteMetadata} />}
  />
);

export default Header;