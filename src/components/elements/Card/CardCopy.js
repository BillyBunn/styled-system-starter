import React from "react";
import styled from "styled-components";
import { lineClamp } from "../../utilities";

const CardCopy = ({ text, lineLimit = 3, ...props }) => {
  return (
    <p lineLimit={lineLimit} {...props}>
      {text}
    </p>
  );
};

export default styled(CardCopy)`
  margin: 0;
  padding: 0.5em 1em;
  ${lineClamp(3)}
`;
