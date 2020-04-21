import React from "react";
import { StaticQuery, graphql } from "gatsby";

import { Row, Col } from "react-bootstrap";
import TeamMember from "components/TeamMember";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Team.scss";

const Team = () => (
  <StaticQuery
    query={graphql`
      query TeamQuery {
        markdownRemark(fileAbsolutePath: { regex: "/team/i" }) {
          frontmatter {
            header
            subheader
            content
            teammember {
              header
              imageFileName
              subheader
              facebook
              github
              linkedin
              medium
              twitter
            }
          }
        }
      }
    `}
    render={({ markdownRemark = {} }) => {
      const frontmatter = markdownRemark.frontmatter;

      if (!frontmatter) {
        return null;
      }

      const {
        header: rootHeader,
        subheader: rootSubHeader,
        content: rootContent,
        teammember,
      } = frontmatter;

      return (
        <PageSection className="bg-light" id="team">
          <Row>
            <SectionHeader header={rootHeader} subheader={rootSubHeader} />
          </Row>
          <Row>
            {teammember.map(({ header, ...tmProps }) => (
              <Col sm={4} key={header}>
                <TeamMember header={header} {...tmProps} />
              </Col>
            ))}
          </Row>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <p className="large text-muted">{rootContent}</p>
            </Col>
          </Row>
        </PageSection>
      );
    }}
  />
);

export default Team;
