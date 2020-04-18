import React from "react";
import { graphql } from "gatsby";

import Navbar from "views/Navbar";
import Top from "views/Top";
import Services from "views/Services";
import Portfolio from "views/Portfolio";
import About from "views/About";
import Team from "views/Team";
import Contact from "views/Contact";
import Footer from "views/Footer";
import "utils/fixFontAwesome";
import "../style/main.scss";

function IndexPage() {
  return (
    <>
      <Navbar />
      <Top />
      <Services />
      <Portfolio />
      <About />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default IndexPage;
