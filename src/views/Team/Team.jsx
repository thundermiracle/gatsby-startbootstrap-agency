import React from "react";

import { Row, Col } from "react-bootstrap";
import TeamMember from "components/TeamMember";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Team.scss";

const Team = () => {
  return (
    <PageSection className="bg-light" id="team">
      <Row>
        <SectionHeader
          header="Our Amazing Team"
          subheader="Lorem ipsum dolor sit amet consectetur."
        />
      </Row>
      <Row>
        <Col sm={4}>
          <TeamMember
            imageFileName="team/1.jpg"
            header="Kay Garland"
            subheader="Lead Designer"
            twitter="#"
            facebook="#"
            linkedin="#"
          />
        </Col>
        <Col sm={4}>
          <TeamMember
            imageFileName="team/2.jpg"
            header="Larry Parker"
            subheader="Lead Marketer"
            twitter="#"
            facebook="#"
            medium="#"
          />
        </Col>
        <Col sm={4}>
          <TeamMember
            imageFileName="team/3.jpg"
            header="Diana Pertersen"
            subheader="Lead Developer"
            twitter="#"
            facebook="#"
            github="#"
          />
        </Col>
      </Row>
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <p className="large text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam
            veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.
          </p>
        </Col>
      </Row>
    </PageSection>
  );
};

export default Team;
