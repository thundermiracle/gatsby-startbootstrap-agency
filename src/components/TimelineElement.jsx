import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import Image from "components/Image";

import "./TimelineElement.scss";

const TimelineElement = ({
  invert,
  imageFileName,
  imageAlt,
  imageContent,
  header,
  subheader,
  content,
}) => {
  const headerPart = header ? <h4>{header}</h4> : null;
  const subheaderPart = subheader ? <h4 className="subheading">{subheader}</h4> : null;

  const liClassName = clsx("timeline-element", { "timeline-inverted": invert });

  return (
    <li className={liClassName}>
      <div className="timeline-image">
        {imageContent || (
          <Image
            className="rounded-circle img-fluid"
            fileName={imageFileName}
            alt={imageAlt || header || subheader}
          />
        )}
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          {headerPart}
          {subheaderPart}
        </div>
        <div className="timeline-body">
          <p className="text-muted">{content}</p>
        </div>
      </div>
    </li>
  );
};

TimelineElement.propTypes = {
  invert: PropTypes.bool,
  imageFileName: PropTypes.string,
  imageAlt: PropTypes.string,
  imageContent: PropTypes.any,
  header: PropTypes.string,
  subheader: PropTypes.string,
  content: PropTypes.string,
};

TimelineElement.defaultProps = {
  invert: false,
  imageFileName: "",
  imageAlt: "",
  imageContent: null,
  header: "",
  subheader: "",
  content: "",
};

export default TimelineElement;
