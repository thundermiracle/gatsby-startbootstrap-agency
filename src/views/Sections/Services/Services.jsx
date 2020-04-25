import React from "react";
import PropTypes from "prop-types";

import { useStaticQuery, graphql } from "gatsby";

import { Row, Col } from "react-bootstrap";

import ServiceItem from "components/ServiceItem";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";

const Services = ({ className }) => {
  const { markdownRemark = {} } = useStaticQuery(graphql`
    query ServicesQuery {
      markdownRemark(fields: { fileName: { regex: "/services/i" } }) {
        frontmatter {
          anchor
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
  `);

  const frontmatter = markdownRemark.frontmatter;
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, services } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
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
};

Services.propTypes = {
  className: PropTypes.string,
};

Services.defaultProps = {
  className: null,
};

export default Services;
