import React from "react";
import PropTypes from "prop-types";

import { Container, Row } from "react-bootstrap";
import "./Services.scss";

const Services = (props) => {
  return (
    <section className="page-section" id="services">
      <Container>
        <Row>
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
        </Row>
        <Row className="text-center">
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary" />
              <i className="fas fa-shopping-cart fa-stack-1x fa-inverse" />
            </span>
            <h4 className="service-heading">E-Commerce</h4>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam
              architecto quo inventore harum ex magni, dicta impedit.
            </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary" />
              <i className="fas fa-laptop fa-stack-1x fa-inverse" />
            </span>
            <h4 className="service-heading">Responsive Design</h4>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam
              architecto quo inventore harum ex magni, dicta impedit.
            </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary" />
              <i className="fas fa-lock fa-stack-1x fa-inverse" />
            </span>
            <h4 className="service-heading">Web Security</h4>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam
              architecto quo inventore harum ex magni, dicta impedit.
            </p>
          </div>
        </Row>
      </Container>
    </section>
  );
};

Services.propTypes = {};

export default Services;
