import React from "react";
import { Link, List } from "./elements";
import { navLinks } from "../App";
import styled from "styled-components";
import Box from "./Box";

const Footer = ({ ...props }) => {
  return (
    <Box
      {...props}
      backgroundColor="grayScale.9"
      color="white"
      paddingTop={3}
      paddingBottom={4}
    >
      <List
        as="nav"
        // className="footer-nav"
        items={navLinks}
        renderItem={({ text, href }) => (
          <a key={href} href={href}>
            {text}
          </a>
        )}
      />
      <p>
        © {new Date().getFullYear()}, Made by
        {` `}
        <Link href="https://billybunn.com">
          Billy Bunn{" "}
          <span role="img" aria-label="rock on">
            🤟🏻
          </span>
        </Link>
      </p>
    </Box>
  );
};

export default Footer;

// export default styled(Footer)`
//   background: var(--black-10);
//   color: var(--white);
//   padding: 2em var(--gutter) 5em;
//   .footer-nav {
//     align-items: center;
//     display: flex;
//     justify-content: center;
//     margin: 0 auto;
//     > * {
//       margin: 0 1em;
//     }
//   }
//   p {
//     text-align: center;
//   }
// `;

// {" "}
// <nav className="footer-nav">
//   <Link as={GatsbyLink} to="/">
//     Home
//   </Link>
//   <Link as={GatsbyLink} to="/page-2/">
//     Cards
//   </Link>
//   <Link as={GatsbyLink} to="/page-3/">
//     Page Three
//   </Link>
//   <Link as={GatsbyLink} to="/page-4/">
//     Page Four
//   </Link>
// </nav>
// <p>
//   © {new Date().getFullYear()}, Built with
//   {` `}
//   <Link href="https://www.gatsbyjs.org">Gatsby</Link>
// </p>
