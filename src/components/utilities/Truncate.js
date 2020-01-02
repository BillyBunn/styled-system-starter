import { css } from "styled-components";

export const lineClamp = lineLimit => css`
  display: -webkit-box;
  overflow: hidden;

  /* keeps overflow from appearing below ellipsis */
  padding-bottom: 0 !important;

  -webkit-line-clamp: ${lineLimit};
  -webkit-box-orient: vertical;
`;

// Note: `min-width: 0` needed on parent grid items
export const truncate = () => css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
