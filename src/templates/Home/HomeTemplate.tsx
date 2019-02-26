import * as React from 'react';

import { HomeFeedback } from './components/HomeFeedback';
import { Header } from '../../components/Header';
import { PageMeta } from '../../components/PageMeta';
import LayoutBasis from '../../layouts/LayoutBasis';

export interface IHomeTemplateProps {
  title: string;
  description: string;
}

export const HomeTemplate: React.SFC<IHomeTemplateProps> = props => {
  return (
    <LayoutBasis>
      <PageMeta title={props.title} />
      <Header />
      <p>
        This starter is in constant evolution to provide a faster and better way
        to set-up a Gatsby website project. It relies on <b>Typescript</b> for
        typechecking, <b>styled-components</b> for styling components (duh) and{' '}
        <b>sass</b> for global styles.
      </p>
      <p>
        It also includes some boilerplate code for fetching data from a Sanity
        project inside <code>gatsby-node.js</code> and a few gatsby plugins that
        tend to be used by us. To start using this, we recommend to follow some
        first steps:
      </p>
      <ol>
        <li>
          Update <code>package.json</code> and <code>gatsby-config.js</code> at
          the root of the project to represent your information.
        </li>
        <li>
          Go through all files in src/styles/theme and update them to use your
          site's visual variables (typography, colors, etc.). Read on{' '}
          <code>src/styles/README.md</code>
        </li>
        <li>Replace the current favicon with your desired one at src/images</li>
        <li>
          If you haven't already, be sure to install the Prettier extension in
          your editor.
        </li>
        <li>Start building your site!</li>
      </ol>
      <HomeFeedback />
    </LayoutBasis>
  );
};

HomeTemplate.displayName = 'HomeTemplate';

export default HomeTemplate;
