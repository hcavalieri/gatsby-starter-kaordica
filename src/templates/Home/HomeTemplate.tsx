import * as React from 'react';
import { BasicLayout } from '../../layouts/BasicLayout';

export interface IHomeTemplateProps {
  meta: {
    title: string;
    description: string;
  }
}

export const HomeTemplate: React.SFC<IHomeTemplateProps> = props => {
  return (
    <BasicLayout>
      {/*
        text_center class can be found at
        src/styles/_helpers.sass and can
        be used as a quick styling tool
       */}
      <h1 className="text_center">{props.meta.title}</h1>
      <p>This starter is in constant evolution to provide a faster and better way to set-up a Gatsby website project. It relies on <b>Typescript</b> for typechecking, <b>styled-components</b> for styling components (duh) and <b>sass</b> for global styles.</p>
      <p>It also includes some boilerplate code for fetching data from a Sanity project inside <code>gatsby-node.js</code> and a few gatsby plugins that tend to be used by us. To start using this, we recommend to follow some first steps:</p>
      <ol>
        <li>Update <code>package.json</code> and <code>gatsby-config.js</code> at the root of the project to represent your information.</li>
        <li>Go through all files in src/styles/sass/vars and update them to use your site's visual variables (typography, colors, etc.)</li>
        <li>Do the same for the src/styles/theme.ts file</li>
        <li>Replace the current favicon with your desired one at src/images</li>
        <li>If you haven't already, be sure to install the Prettier extension in your editor.</li>
        <li>Start building your site!</li>
      </ol>
      <p>Feel free to leave your feedback and ask some questions by filing an issue in <a href="https://github.com/hcavalieri/gatsby-starter-kaordica">the repo</a> and if you want to contribute, just fork this repo and submit a PR!</p>
    </BasicLayout>
  )
}

HomeTemplate.displayName = 'HomeTemplate'

export default HomeTemplate;