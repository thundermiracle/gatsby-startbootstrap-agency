import React from "react";
import { StaticQuery, graphql } from "gatsby";

import { Row, Col } from "react-bootstrap";
import TimelineItem from "components/TimelineItem";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import nl2br from "utils/nl2br";

import "./About.scss";

const About = () => (
  <StaticQuery
    query={graphql`
      query AboutQuery {
        markdownRemark(fileAbsolutePath: { regex: "/about/i" }) {
          frontmatter {
            header
            subheader
            timeline {
              content
              header
              imageContent
              imageFileName
              subheader
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

      const { header: rootHeader, subheader: rootSubHeader, timeline } = frontmatter;

      return (
        <PageSection id="about">
          <Row>
            <SectionHeader header={rootHeader} subheader={rootSubHeader} />
          </Row>
          <Row>
            <Col lg={12}>
              <ul className="timeline">
                {timeline.map(
                  ({ content, header, imageContent, imageFileName, subheader }, ind) => (
                    <TimelineItem
                      invert={ind % 2 === 1}
                      key={header}
                      imageFileName={imageFileName}
                      header={header}
                      subheader={subheader}
                      content={content}
                      imageContent={
                        imageContent ? (
                          <div
                            dangerouslySetInnerHTML={{ __html: `<h4>${nl2br(imageContent)}</h4>` }}
                          />
                        ) : null
                      }
                    />
                  ),
                )}
              </ul>
            </Col>
          </Row>
        </PageSection>
      );
    }}
  />
);

export default About;
