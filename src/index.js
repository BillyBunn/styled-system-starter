import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";

const theme = {
  breakpoints: ["34em", "48em", "64em", "80em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  colors: {
    text: "#262626",
    background: "#F8F8F8",
    black: "#262626",
    blackScale: ["#262626", "#333", "#4f4f4f", "#828282", "#bdbdbd"],
    white: "#F8F8F8",
    whiteScale: ["#F8F8F8", "#f5f4f6", "#f2f2f2"],
    gray: "#6a737d",
    grayScale: [
      "#fafbfc",
      "#f6f8fa",
      "#e1e4e8",
      "#d1d5da",
      "#959da5",
      "#6a737d",
      "#586069",
      "#444d56",
      "#2f363d",
      "#24292e"
    ]
  }
};

/*

space:	margin, margin-top, margin-right, margin-bottom, margin-left, padding, padding-top, padding-right, padding-bottom, padding-left, grid-gap, grid-column-gap, grid-row-gap
fontSizes:	font-size
colors:	color, background-color, border-color
fonts:	font-family
fontWeights:	font-weight
lineHeights:	line-height
letterSpacings:	letter-spacing
sizes:	width, height, min-width, max-width, min-height, max-height
borders:	border, border-top, border-right, border-bottom, border-left
borderWidths:	border-width
borderStyles:	border-style
radii:	border-radius
shadows:	box-shadow, text-shadow
zIndices:	z-index
*/

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  rootElement
);
