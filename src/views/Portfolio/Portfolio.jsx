import React from "react";

import { Container, Row } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PortfolioItem from "components/PortfolioItem";
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <section className="bg-light page-section" id="portfolio">
      <Container>
        <Row>
          <SectionHeader header="Portfolio" subheader="Lorem ipsum dolor sit amet consectetur." />
        </Row>
        <Row>
          <PortfolioItem
            imageFileName="portfolio/01-thumbnail.jpg"
            header="Threads"
            subheader="Illustration"
          />
          <PortfolioItem
            imageFileName="portfolio/02-thumbnail.jpg"
            header="Explore"
            subheader="Graphic Design"
          />
          <PortfolioItem
            imageFileName="portfolio/03-thumbnail.jpg"
            header="Finish"
            subheader="Identity"
          />
          <PortfolioItem
            imageFileName="portfolio/04-thumbnail.jpg"
            header="Lines"
            subheader="Branding"
          />
          <PortfolioItem
            imageFileName="portfolio/05-thumbnail.jpg"
            header="Southwest"
            subheader="Website Design"
          />
          <PortfolioItem
            imageFileName="portfolio/06-thumbnail.jpg"
            header="Window"
            subheader="Photography"
          />
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
