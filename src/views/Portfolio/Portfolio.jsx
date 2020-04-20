import React from "react";

import { Row } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PortfolioItem from "components/PortfolioItem";
import PageSection from "components/PageSection";
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <PageSection className="bg-light" id="portfolio">
      <Row>
        <SectionHeader header="Portfolio" subheader="Lorem ipsum dolor sit amet consectetur." />
      </Row>
      <Row>
        <PortfolioItem
          imageFileName="portfolio/01-thumbnail.jpg"
          header="Threads"
          subheader="Illustration"
          content="Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!"
          imageFileNameDetail="portfolio/01-full.jpg"
          extraInfo={
            <ul className="list-inline">
              <li>Date: January 2017</li>
              <li>Client: Threads</li>
              <li>Category: Illustration</li>
            </ul>
          }
        />
        <PortfolioItem
          imageFileName="portfolio/02-thumbnail.jpg"
          header="Explore"
          subheader="Graphic Design"
          content="Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!"
          imageFileNameDetail="portfolio/02-full.jpg"
          extraInfo={
            <ul className="list-inline">
              <li>Date: January 2017</li>
              <li>Client: Explorer</li>
              <li>Category: Graphic Design</li>
            </ul>
          }
        />
        <PortfolioItem
          imageFileName="portfolio/03-thumbnail.jpg"
          header="Finish"
          subheader="Identity"
          content="Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!"
          imageFileNameDetail="portfolio/03-full.jpg"
          extraInfo={
            <ul className="list-inline">
              <li>Date: January 2017</li>
              <li>Client: Finish</li>
              <li>Category: Identity</li>
            </ul>
          }
        />
        <PortfolioItem
          imageFileName="portfolio/04-thumbnail.jpg"
          header="Lines"
          subheader="Branding"
          content="Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!"
          imageFileNameDetail="portfolio/04-full.jpg"
          extraInfo={
            <ul className="list-inline">
              <li>Date: January 2017</li>
              <li>Client: Lines</li>
              <li>Category: Branding</li>
            </ul>
          }
        />
        <PortfolioItem
          imageFileName="portfolio/05-thumbnail.jpg"
          header="Southwest"
          subheader="Website Design"
          content="Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!"
          imageFileNameDetail="portfolio/05-full.jpg"
          extraInfo={
            <ul className="list-inline">
              <li>Date: January 2017</li>
              <li>Client: Southwest</li>
              <li>Category: Website Design</li>
            </ul>
          }
        />
        <PortfolioItem
          imageFileName="portfolio/06-thumbnail.jpg"
          header="Window"
          subheader="Photography"
          content="Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!"
          imageFileNameDetail="portfolio/06-full.jpg"
          extraInfo={
            <ul className="list-inline">
              <li>Date: January 2017</li>
              <li>Client: Window</li>
              <li>Category: Photography</li>
            </ul>
          }
        />
      </Row>
    </PageSection>
  );
};

export default Portfolio;
