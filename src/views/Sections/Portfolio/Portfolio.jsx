import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { useStaticQuery, graphql } from "gatsby";

import { Row } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PortfolioItem from "components/PortfolioItem";
import PageSection from "components/PageSection";
import "./Portfolio.scss";

const Portfolio = ({ className }) => {
  const { markdownRemark = {} } = useStaticQuery(graphql`
    query PortfolioQuery {
      markdownRemark(fields: { fileName: { regex: "/portfolio/i" } }) {
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
  `);

  const frontmatter = markdownRemark.frontmatter;
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, portfolios } = frontmatter;

  return (
    <PageSection className={clsx("portfolio-section", className)} id={anchor}>
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
                <ul>
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
};

Portfolio.propTypes = {
  className: PropTypes.string,
};

Portfolio.defaultProps = {
  className: null,
};

export default Portfolio;