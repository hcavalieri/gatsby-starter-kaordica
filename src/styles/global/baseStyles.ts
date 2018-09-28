export const baseStyles = `
  *, *::before, *::after {
    box-sizing: inherit;
    font-family: inherit;
  }

  *::-webkit-scrollbar-thumb {
    background: #CE003C; // just a nicer color for the sidebar :)
  }

  html {
    box-sizing: border-box;
    overflow-x: hidden;
  }

  body {
    margin: 0;
    overflow-x: hidden;
  }

  img {
    max-width: 100%
  }
`;

export default baseStyles;
