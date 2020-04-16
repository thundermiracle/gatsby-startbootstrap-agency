import React from "react";
import { graphql } from "gatsby";

import Navbar from "views/Navbar";
import Top from "views/Top";
import Services from "views/Services";
import Portfolio from "views/Portfolio";
import Timeline from "views/Timeline";
import Team from "views/Team";
import Contact from "views/Contact";
import Footer from "views/Footer";
import "../style/main.scss";

function IndexPage() {
  return (
    <>
      <Navbar />
      <Top />
      <Services />
      <Portfolio />
      <Timeline />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default IndexPage;
