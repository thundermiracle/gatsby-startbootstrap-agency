import React from "react";
import { StaticQuery, graphql } from "gatsby";

import { Row, Col } from "react-bootstrap";
import Icon from "components/Icon";
import PageSection from "components/PageSection";

const Contact = () => (
  <StaticQuery
    query={graphql`
      query ContactQuery {
        markdownRemark(fileAbsolutePath: { regex: "/contact/i" }) {
          frontmatter {
            anchor
            header
            subheader
            telephone
            email
          }
        }
      }
    `}
    render={({ markdownRemark = {} }) => {
      const frontmatter = markdownRemark.frontmatter;

      if (!frontmatter) {
        return null;
      }

      const { anchor, header, subheader, telephone, email } = frontmatter;

      return (
        <PageSection id={anchor}>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2 className="mt-0">{header}</h2>
              <hr className="divider my-4" />
              <p className="text-muted mb-5">{subheader}</p>
            </Col>
          </Row>
          <Row>
            <Col lg={4} className="ml-auto text-center">
              <Icon iconName="PhoneIcon" size="3x" className="text-muted mb-3" />
              <a className="d-block" href={`tel:${telephone}`}>
                {telephone}
              </a>
            </Col>
            <Col lg={4} className="mr-auto text-center">
              <Icon iconName="EnvelopIcon" size="3x" className="text-muted mb-3" />
              <a className="d-block" href={`mailto:${email}`}>
                {email}
              </a>
            </Col>
          </Row>
        </PageSection>
      );
    }}
  />
);

export default Contact;
