import styled from "styled-components";
import { complement } from "polished";
export const Button = styled.button`
  background: var(--white);
  border: none;
  border-radius: 4px;
  box-shadow: var(--elevation-1);
  color: var(--black);
  font-size: 1.2em;
  padding: 5px 20px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

export const CancelButton = styled(Button)`
  background: tomato;
`;
