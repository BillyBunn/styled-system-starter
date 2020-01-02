import React from "react";
import GlobalStyle from "./GlobalStyle";
import Layout from "./components/Layout";
import { Deck } from "./components/elements";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Deck
          cards={cards}
          // variant
          //
        />
      </Layout>
    </>
  );
}

export const navLinks = [
  {
    text: "Home",
    href: "/"
  },
  {
    text: "Page Two",
    href: "/page-2"
  },
  {
    text: "Page Three",
    href: "/page-3"
  },
  {
    text: "Page-Four",
    href: "/page-4"
  }
];

const cards = [
  {
    title: "Project Name",
    subTitle: "Sub Name of project",
    text:
      "This is some random content about some amazing and awesome stuff for this card that you really need to read about some more, folks",
    media: "https://via.placeholder.com/200/0000FF/FFF?text=Card Media",
    links: [
      { href: "https://github.com", text: "GitHub" },
      { href: "https://google.com", text: "Other" }
    ]
  },
  {
    title: "Project Name 1",
    subTitle: "Sub Name of project",
    text:
      "This is some random content about some amazing and awesome stuff for this card that you really need to read about some more, folks",
    githubLink: "https://github.com",
    otherLink: "https://google.com",
    media: "https://via.placeholder.com/200/0000FF/FFF?text=Card Media",
    links: [
      { href: "https://github.com", text: "GitHub" },
      { href: "https://google.com", text: "Other" }
    ]
  },
  {
    title: "Project Name 2",
    subTitle: "Sub Name of project",
    text:
      "This is some random content about some amazing and awesome stuff for this card that you really need to read about some more, folks",
    githubLink: "https://github.com",
    otherLink: "https://google.com",
    media: "https://via.placeholder.com/200/0000FF/FFF?text=Card Media"
  },
  {
    title: "Project Name 3 Project Name 3",
    subTitle: "Sub Name of project",
    text:
      "This is some random content about some amazing and awesome stuff for this card that you really need to read about some more, folks",
    githubLink: "https://github.com",
    otherLink: "https://google.com",
    media: "https://via.placeholder.com/200/0000FF/FFF?text=Card Media"
  },
  {
    title: "Project Name 4 is way way way too long and probably shouldn't wrap",
    subTitle: "Sub Name of project could be way too long also",
    text:
      "This is some random content about some amazing and awesome stuff for this card that you really need to read about some more, folks",
    githubLink: "https://github.com",
    otherLink: "https://google.com"
  }
];
