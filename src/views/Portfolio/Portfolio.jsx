import React from "react";
import PropTypes from "prop-types";

import { Container, Row } from "react-bootstrap";
import Icon from "components/Icon";
import "./Portfolio.scss";

const Portfolio = (props) => {
  return (
    <section className="bg-light page-section" id="portfolio">
      <Container>
        <Row>
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Portfolio</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
        </Row>
        <Row>
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <Icon iconName="PlusIcon" />
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>Threads</h4>
              <p className="text-muted">Illustration</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <Icon iconName="PlusIcon" />
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/02-thumbnail.jpg" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>Explore</h4>
              <p className="text-muted">Graphic Design</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <Icon iconName="PlusIcon" />
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/03-thumbnail.jpg" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>Finish</h4>
              <p className="text-muted">Identity</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <Icon iconName="PlusIcon" />
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/04-thumbnail.jpg" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>Lines</h4>
              <p className="text-muted">Branding</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal5">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <Icon iconName="PlusIcon" />
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/05-thumbnail.jpg" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>Southwest</h4>
              <p className="text-muted">Website Design</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <Icon iconName="PlusIcon" />
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/06-thumbnail.jpg" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>Window</h4>
              <p className="text-muted">Photography</p>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

Portfolio.propTypes = {};

export default Portfolio;
