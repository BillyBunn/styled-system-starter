import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { truncate } from "../../utilities";

const CardTitle = ({ title, subTitle, ...props }) => {
  return (
    <header {...props}>
      <h2>{title}</h2>
      {subTitle && <p>{subTitle}</p>}
    </header>
  );
};

export default styled(CardTitle)`
  grid-area: "title";
  min-width: 0;
  padding: 0.5em 1em 0 1em;
  h2,
  p {
    margin: 0;
    ${truncate}
  }
`;

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
};
