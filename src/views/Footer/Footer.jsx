import React from "react";
import { StaticQuery, graphql } from "gatsby";

import { Container } from "react-bootstrap";

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={({ site }) => {
      const { title } = site.siteMetadata;

      return (
        <footer className="bg-light py-5">
          <Container>
            <div className="small text-center text-muted">Copyright © 2020 - {title}</div>
          </Container>
        </footer>
      );
    }}
  />
);

export default Footer;
