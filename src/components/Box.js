import styled from "styled-components";
import { space, color, layout, flexbox, position } from "styled-system";
import { themeGet } from "@styled-system/theme-get";

const Box = styled.div(
  {
    backgroundColor: themeGet("colors.background"),
    boxSizing: "border-box",
    color: themeGet("colors.text"),
    minWidth: 0
  },
  space,
  color,
  layout,
  flexbox,
  position
);

export default Box;
