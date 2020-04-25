import React from "react";
import PropTypes from "prop-types";

import { useStaticQuery, graphql } from "gatsby";

import { Row, Col } from "react-bootstrap";
import TeamMember from "components/TeamMember";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Team.scss";

const Team = ({ className }) => {
  const { markdownRemark = {} } = useStaticQuery(graphql`
    query TeamQuery {
      markdownRemark(fields: { fileName: { regex: "/team/i" } }) {
        frontmatter {
          anchor
          header
          subheader
          content
          teammember {
            header
            imageFileName
            subheader
            social {
              facebook
              github
              linkedin
              medium
              twitter
            }
          }
        }
      }
    }
  `);

  const frontmatter = markdownRemark.frontmatter;
  if (!frontmatter) {
    return null;
  }

  const {
    anchor,
    header: rootHeader,
    subheader: rootSubHeader,
    content: rootContent,
    teammember,
  } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
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
};

Team.propTypes = {
  className: PropTypes.string,
};

Team.defaultProps = {
  className: null,
};

export default Team;
