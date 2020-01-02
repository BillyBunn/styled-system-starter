import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Box from "./Box";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Box
        as="main"
        // backgroundColor="grayScale.2"
        margin="0 auto"
        // maxWidth="700px"
        minHeight="85vh"
        padding={4}
      >
        Main
        <Box backgroundColor="grayScale.3" mt={3} p={4}>
          Box
        </Box>
        <Box
          backgroundColor="grayScale.3"
          mt={3}
          p={4}
          width={[
            1, // 100% below the smallest breakpoint
            7 / 8, // 25% from the next breakpoint and up
            // 3 / 4, // 25% from the next breakpoint and up
            1 / 2 // 50% from the next breakpoint and up
          ]}
        >
          Responsive Box
        </Box>
        {/* {children} */}
      </Box>
      <Footer />
    </>
  );
};

// const Main = styled.main`
//   margin: 0 auto;
//   max-width: var(--maxWidth);
//   min-height: 100vh;
//   padding-bottom: 2em;
// `;

export default Layout;
