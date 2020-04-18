import React from "react";

import { Container, Row } from "react-bootstrap";
import Timeline from "components/Timeline";

const About = () => {
  return (
    <section className="page-section" id="about">
      <Container>
        <Row>
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
        </Row>
        <Row>
          <div className="col-lg-12">
            <Timeline />
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default About;
