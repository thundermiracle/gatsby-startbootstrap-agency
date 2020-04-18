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
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false; /* eslint-disable import/first */

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
