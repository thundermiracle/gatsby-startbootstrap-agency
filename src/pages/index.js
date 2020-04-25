import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Navbar from "views/Navbar";
import Top from "views/Top";
import Footer from "views/Footer";
import * as Sections from "views/Sections";
import SEO from "components/SEO";
import "utils/fixFontAwesome";
import fileToComponentName from "utils/fileToComponentName";
import "../style/main.scss";

/**
 * get file name list from content/sections folder
 */
export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//sections//i" } }
      sort: { fields: fields___fileName }
    ) {
      nodes {
        fields {
          fileName
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const {
    allMarkdownRemark: { nodes },
  } = data;

  return (
    <>
      <SEO
        title="Main"
        keywords={[
          "gatsby",
          "gatsbyjs",
          "landing page",
          "landing",
          "i18n",
          "eslint",
          "bootstrap",
          "startbootstrap-agency",
        ]}
        description="gatsby version of startbootstrap-agency with i18n support"
      />
      <Navbar />
      <Top />
      {
        // dynamically import sections
        nodes
          .map((node) => fileToComponentName(node.fields.fileName))
          .filter((x) => x)
          .map((sectionComponentName, ind) => {
            const SectionComponent = Sections[sectionComponentName];
            return SectionComponent ? (
              <SectionComponent
                key={sectionComponentName}
                className={ind % 2 === 1 ? "bg-light" : null}
              />
            ) : null;
          })
      }
      <Footer />
    </>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;
