import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import Timeline from "components/Timeline";
import SectionHeader from "components/SectionHeader";

const About = () => {
  return (
    <section className="page-section" id="about">
      <Container>
        <Row>
          <SectionHeader header="About" subheader="Lorem ipsum dolor sit amet consectetur." />
        </Row>
        <Row>
          <Col lg={12}>
            <Timeline />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
