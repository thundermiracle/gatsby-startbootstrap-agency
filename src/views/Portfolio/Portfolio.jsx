import React from "react";
import { StaticQuery, graphql } from "gatsby";

import { Row } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PortfolioItem from "components/PortfolioItem";
import PageSection from "components/PageSection";
import "./Portfolio.scss";

const Portfolio = () => (
  <StaticQuery
    query={graphql`
      query PortfolioQuery {
        markdownRemark(fileAbsolutePath: { regex: "/portfolio/i" }) {
          frontmatter {
            anchor
            header
            subheader
            portfolios {
              content
              extraInfo
              header
              imageFileName
              imageFileNameDetail
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

      const { anchor, header: rootHeader, subheader: rootSubHeader, portfolios } = frontmatter;

      return (
        <PageSection className="bg-light portfolio-section" id={anchor}>
          <Row>
            <SectionHeader header={rootHeader} subheader={rootSubHeader} />
          </Row>
          <Row>
            {portfolios.map(
              ({ content, extraInfo, header, imageFileName, imageFileNameDetail, subheader }) => (
                <PortfolioItem
                  key={header}
                  imageFileName={imageFileName}
                  header={header}
                  subheader={subheader}
                  content={content}
                  imageFileNameDetail={imageFileNameDetail}
                  extraInfo={
                    <ul className="list-inline">
                      {extraInfo.map((ei) => (
                        <li key={ei}>{ei}</li>
                      ))}
                    </ul>
                  }
                />
              ),
            )}
          </Row>
        </PageSection>
      );
    }}
  />
);

export default Portfolio;
