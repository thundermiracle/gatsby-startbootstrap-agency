import React from "react";
import PropTypes from "prop-types";

import { Container, Row } from "react-bootstrap";

import { faShoppingCart, faLaptop, faLock } from "@fortawesome/free-solid-svg-icons";

import CircleFAButton from "components/CircleFAButton";
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
            <CircleFAButton iconName="ShoppingCartIcon" />
            <h4 className="service-heading">E-Commerce</h4>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam
              architecto quo inventore harum ex magni, dicta impedit.
            </p>
          </div>
          <div className="col-md-4">
            <CircleFAButton iconName="LaptopIcon" />
            <h4 className="service-heading">Responsive Design</h4>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam
              architecto quo inventore harum ex magni, dicta impedit.
            </p>
          </div>
          <div className="col-md-4">
            <CircleFAButton iconName="LockIcon" />
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
