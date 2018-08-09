import { theme } from "../theme";

export default `
  .html_modal-open {
    overflow-y: hidden;
  }
  html {
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.primary};
    }
  }
`;
