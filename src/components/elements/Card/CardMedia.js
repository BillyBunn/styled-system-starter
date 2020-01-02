import React from "react";
import styled from "styled-components";
import { backgroundImages } from "polished";

const CardMedia = ({ media, ...props }) => {
  return <div {...props} />;
};

export default styled(CardMedia)`
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* border-radius: 6px; */
  height: 0;
  padding-top: 56.25%;
  ${({ media }) =>
    backgroundImages(
      `url("${media}")`,
      `linear-gradient(var(--white), var(--black))`
    )}
`;
