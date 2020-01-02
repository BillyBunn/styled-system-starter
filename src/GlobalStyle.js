import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

const GlobalStyle = createGlobalStyle`
  ${normalize()};
  html {
    box-sizing: border-box;
    /* font-size: var(--baseFontSize); */
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }


  body {
    background-color: var(--white);
    color: var(--black);
    line-height: var(--lineHeight);
    font-family: var(--bodyFont);
    font-size: var(--baseFontSize);
  }

  main {
    overflow: hidden;
  }

  :root {
    --baseFontSize: 18px;
    --bodyFont: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --lineHeight: 1.5;
    --black: #262626;
    --black-10: #333;
    --black-20: #4f4f4f;
    --black-40: #828282;
    --black-60: #bdbdbd;
    --white-60: #e0e0e0;
    --white-40: #f2f2f2;
    --white-20: #f5f4f6;
    --white: #F8F8F8;

    --maxWidth: 95%;
    --gutter: calc((100% - var(--maxWidth)) / 2);
    --elevation-0: inset 0 7px 9px -7px rgba(0,0,0,0.7);
    --elevation-1: 0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);
    --elevation-2: 0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);
    --elevation-3: 0 10px 20px rgba(0,0,0,0.1),0 6px 6px rgba(0,0,0,0.1);
    --elevation-4: 0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22);
    --elevation-5: 0 19px 38px rgba(0,0,0,0.3),0 15px 12px rgba(0,0,0,0.22);
  }
  
`;

export default GlobalStyle;
