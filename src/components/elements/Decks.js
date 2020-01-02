import React from "react";
import styled from "styled-components";
import { List } from "./List";
import Card from "./Card";

const DeckComponent = ({
  as = "section",
  cards = [],
  cardProps,
  renderCard = card => <Card key={card.title} data={card} />,
  ...props
}) => {
  return <List as={as} items={cards} renderItem={renderCard} {...props} />;
};

export const Deck = styled(DeckComponent)`
  display: flex;
  flex-flow: row wrap;
`;

// export const List = ({
//   as: As = React.Fragment,
//   items = [],
//   renderItem = item => <li key={item}>{item}</li>,
//   ...props
// }) => {
//   return <As {...props}>{items.map(renderItem)}</As>;
// };

// export default List;
