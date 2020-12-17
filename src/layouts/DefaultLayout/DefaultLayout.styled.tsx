import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const CssReset = createGlobalStyle`
  ${reset}

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    * {
        font-family: 'Roboto', sans-serif;
    }
  }
`;
