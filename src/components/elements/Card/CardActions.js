import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { List } from "../List";
import { Button } from "../Buttons";

const CardActions = ({ links, ...props }) => {
  return (
    <div {...props}>
      <List
        items={links}
        renderItem={link => (
          <Button as="a" key={link.text} href={link.href}>
            {link.text}
          </Button>
        )}
      />
    </div>
  );
};

export default styled(CardActions)`
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0.5em 1em;
`;

CardActions.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired
    })
  ).isRequired
};
