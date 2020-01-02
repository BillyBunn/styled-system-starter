import React from "react";
import styled from "styled-components";
import { space, color, layout, flexbox, position } from "styled-system";

export const List = ({
  as: As = React.Fragment,
  items = [],
  renderItem = item => <li key={item}>{item}</li>,
  ...props
}) => {
  return <As {...props}>{items.map(renderItem)}</As>;
};

export default styled(List)`
  display: flex;
  color: green;
  ${layout}
  ${flexbox}
  ${space}
`;
