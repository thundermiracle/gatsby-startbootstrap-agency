import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { useStaticQuery, graphql } from "gatsby";

import { Row, Col } from "react-bootstrap";
import PageSection from "components/PageSection";
import Client from "components/Client";

const Clients = ({ className }) => {
  const { markdownRemark = {} } = useStaticQuery(graphql`
    query ClientsQuery {
      markdownRemark(fields: { fileName: { regex: "/clients/i" } }) {
        frontmatter {
          anchor
          clients {
            href
            imageFileName
          }
        }
      }
    }
  `);

  const frontmatter = markdownRemark.frontmatter;
  if (!frontmatter) {
    return null;
  }

  const { anchor, clients } = frontmatter;

  return (
    <PageSection className={clsx("py-5", className)} id={anchor}>
      <Row>
        {clients.map(({ href, imageFileName }) => (
          <Col md={3} sm={6} className="my-3" key={imageFileName}>
            <Client href={href} imageFileName={imageFileName} />
          </Col>
        ))}
      </Row>
    </PageSection>
  );
};

Clients.propTypes = {
  className: PropTypes.string,
};

Clients.defaultProps = {
  className: null,
};

export default Clients;
