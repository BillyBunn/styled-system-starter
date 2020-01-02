import React from "react";
import styled from "styled-components";
import CardTitle from "./CardTitle";
import CardMedia from "./CardMedia";
import CardCopy from "./CardCopy";
import CardActions from "./CardActions";

const Card = ({
  as: As = "div",
  data: { media, links, text, title, subTitle },
  layout = "default",
  ...props
}) => {
  return (
    <As {...props}>
      {media && <CardMedia media={media} />}
      {title && <CardTitle title={title} subTitle={subTitle} />}
      {text && <CardCopy text={text} />}
      {links && <CardActions links={links} />}
    </As>
  );
};

export default styled(Card)`
  border-radius: 6px;
  background-color: var(--white-60);
  box-shadow: var(--elevation-2);
  display: grid;
  margin: 1em;
  overflow: hidden;
  width: 20em;
`;
