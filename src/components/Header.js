import React from "react";
import styled from "styled-components";
// import { position } from "polished";
// import logo from "../../images/logo.svg";
// import { Link, List } from "./elements";
import { navLinks } from "../App";
import Box from "./Box";
import { space, color, layout, flexbox } from "styled-system";
import { themeGet } from "@styled-system/theme-get";

const Link = styled.a`
  color: inherit;
  display: block;
  text-decoration: none;
  white-space: nowrap;
  &:hover {
    background-color: ${themeGet("colors.grayScale.4", "gray")};
  }
  ${space}
  ${color}
  ${flexbox}
`;

const Logo = styled(Link)`
  &:hover {
    background-color: inherit;
  }
`;

const Header = () => (
  <Box
    as="header"
    backgroundColor="gray"
    color="white"
    display="flex"
    justifyContent="flex-end"
    paddingX={3}
    position="sticky"
    top="0"
  >
    <Logo href="https://billybunn.com" marginRight="auto" padding="3">
      Logo
    </Logo>
    {navLinks.map(({ text, href }) => (
      <Link href={href} padding={3}>
        {text}
      </Link>
    ))}
  </Box>
);

export default Header;
// export default styled(Header)`
//   box-shadow: var(--elevation-2);
//   background: var(--black-20);
//   color: var(--white);
//   height: 4em;
//   ${position("sticky", "0px")}
//   width: 100%;
//   > div {
//     align-items: center;
//     display: flex;
//     height: 100%;
//     padding: 0 var(--gutter);
//     .logo {
//       flex: 0 1 auto;
//       width: 60px;
//     }
//     .header-nav {
//       display: flex;
//       flex: 2 1 auto;
//       > * {
//         margin-left: 1em;
//       }
//     }
//   }
// `;
