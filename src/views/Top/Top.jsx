import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Button } from "react-bootstrap";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import ImageCard from "components/ImageCard";

const Top = () => {
  const { markdownRemark = {} } = useStaticQuery(
    graphql`
      query TopQuery {
        markdownRemark(fileAbsolutePath: { regex: "/top/i" }) {
          frontmatter {
            header
            subheader
            imageFileName
            jumpToSection
            jumpToSectionText
          }
        }
      }
    `,
  );

  const frontmatter = markdownRemark.frontmatter;
  if (!frontmatter) {
    return null;
  }

  const { header, subheader, imageFileName, jumpToSection, jumpToSectionText } = frontmatter;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const scrollToSection = useSmoothScrollTo(jumpToSection);

  let extraInfoPart;
  if (jumpToSection && jumpToSectionText) {
    extraInfoPart = (
      <Button size="xl" variant="primary" className="text-uppercase" onClick={scrollToSection}>
        {jumpToSectionText}
      </Button>
    );
  }

  return (
    <ImageCard
      imageFileName={imageFileName}
      header={header}
      subheader={subheader}
      extraInfo={extraInfoPart}
    />
  );
};

export default Top;
