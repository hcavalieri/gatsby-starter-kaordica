import * as React from 'react';

// Sample of a template-specific component
// These should be stored under /components
// inside the template folder

export const HomeFeedback: React.SFC<{}> = props => {
  return (
    <>
      <p><b>And don't forget to take a look at the README.md file to understand the folder structure!</b></p>
      <p>Feel free to leave your feedback and ask some questions by filing an issue in <a href="https://github.com/hcavalieri/gatsby-starter-kaordica">the repo</a> and if you want to contribute, just fork this repo and submit a PR!</p>
    </>
  )
}

HomeFeedback.displayName = 'HomeFeedback'

export default HomeFeedback;