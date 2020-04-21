import React from "react";
import { StaticQuery, graphql } from "gatsby";

import { Row, Col } from "react-bootstrap";

import ServiceItem from "components/ServiceItem";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";

const Services = () => (
  <StaticQuery
    query={graphql`
      query ServicesQuery {
        markdownRemark(fileAbsolutePath: { regex: "/services/i" }) {
          frontmatter {
            header
            subheader
            services {
              content
              header
              iconName
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

      const { header: rootHeader, subheader: rootSubHeader, services } = frontmatter;

      return (
        <PageSection id="services">
          <Row>
            <SectionHeader header={rootHeader} subheader={rootSubHeader} />
          </Row>
          <Row className="text-center">
            {services.map(({ header, content, iconName }) => (
              <Col md={4} key={header}>
                <ServiceItem iconName={iconName} header={header} content={content} />
              </Col>
            ))}
          </Row>
        </PageSection>
      );
    }}
  />
);

export default Services;
