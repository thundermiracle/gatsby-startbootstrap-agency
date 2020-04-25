import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Container, Row, Col } from "react-bootstrap";
import * as SocialIcons from "components/SocialIcons";

const Footer = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query FooterQuery {
      markdownRemark(fields: { fileName: { regex: "/footer/i" } }) {
        frontmatter {
          copyright
          privacyHref
          privacyText
          termsHref
          termsText
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
  `);

  const frontmatter = markdownRemark.frontmatter;
  if (!frontmatter) {
    return null;
  }

  const {
    copyright,
    privacyHref,
    privacyText,
    termsHref,
    termsText,
    social: { facebook, github, linkedin, medium, twitter },
  } = frontmatter;

  return (
    <footer className="footer py-3">
      <Container>
        <Row className="align-items-center text-center">
          <Col lg={5} className="text-lg-left">
            {copyright}
          </Col>
          <Col lg={3} className="my-3 my-lg-0">
            {twitter ? <SocialIcons.Twitter userName={twitter} /> : null}
            {facebook ? <SocialIcons.Facebook userName={facebook} /> : null}
            {linkedin ? <SocialIcons.Linkedin userName={linkedin} /> : null}
            {github ? <SocialIcons.Github userName={github} /> : null}
            {medium ? <SocialIcons.Medium userName={medium} /> : null}
          </Col>
          <Col lg={4} className="text-lg-right">
            <a className="mr-3" href={privacyHref}>
              {privacyText}
            </a>
            <a href={termsHref}>{termsText}</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
