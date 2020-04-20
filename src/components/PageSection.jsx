import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Container } from "react-bootstrap";

import "./PageSection.scss";

const PageSection = ({ children, className, ...restProps }) => {
  return (
    <section className={clsx("page-section", className)} {...restProps}>
      <Container>{children}</Container>
    </section>
  );
};

PageSection.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

PageSection.defaultProps = {
  children: null,
  className: null,
};

export default PageSection;
