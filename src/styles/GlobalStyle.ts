// GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}
  * {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.color.gray900};
    font-family: 'Apple Neo', -apple-system, BlinkMacSystemFont, 'Segoe UI', "Pretendard", 'Helvetica Neue', Arial, sans-serif;
    box-sizing: border-box;
  }
  body {
    font-family: 'Apple Neo', -apple-system, BlinkMacSystemFont, 'Segoe UI', "Pretendard", 'Helvetica Neue', Arial, sans-serif;
    box-sizing: border-box;
  }
  button {
    cursor: pointer;
  }
`;
