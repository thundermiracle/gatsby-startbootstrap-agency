import React from "react";

import { Row, Col } from "react-bootstrap";
import Timeline from "components/Timeline";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";

const About = () => {
  return (
    <PageSection id="about">
      <Row>
        <SectionHeader header="About" subheader="Lorem ipsum dolor sit amet consectetur." />
      </Row>
      <Row>
        <Col lg={12}>
          <Timeline />
        </Col>
      </Row>
    </PageSection>
  );
};

export default About;
