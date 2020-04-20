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
import SEO from "components/SEO";
import "utils/fixFontAwesome";
import "../style/main.scss";

function IndexPage() {
  return (
    <>
      <SEO
        title="Main"
        keywords={[
          "gatsby",
          "gatsbyjs",
          "landing page",
          "landing",
          "i18n",
          "eslint",
          "bootstrap",
          "startbootstrap-agency",
        ]}
        description="gatsby version of startbootstrap-agency with i18n support"
      />
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
