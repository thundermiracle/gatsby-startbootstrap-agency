import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import ServiceItem from "components/ServiceItem";
import SectionHeader from "components/SectionHeader";

const Services = () => {
  return (
    <section className="page-section" id="services">
      <Container>
        <Row>
          <SectionHeader header="Services" subheader="Lorem ipsum dolor sit amet consectetur." />
        </Row>
        <Row className="text-center">
          <Col md={4}>
            <ServiceItem
              iconName="ShoppingCartIcon"
              header="E-Commerce"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam
              architecto quo inventore harum ex magni, dicta impedit."
            />
          </Col>
          <Col md={4}>
            <ServiceItem
              iconName="LaptopIcon"
              header="Responsive Design"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam
              architecto quo inventore harum ex magni, dicta impedit."
            />
          </Col>
          <Col md={4}>
            <ServiceItem
              iconName="LockIcon"
              header="Web Security"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam
              architecto quo inventore harum ex magni, dicta impedit."
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
