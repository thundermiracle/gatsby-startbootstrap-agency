import React from "react";
import PropTypes from "prop-types";

import CircleFAButton from "components/CircleFAButton";
import "./ServiceItem.scss";

const ServiceItem = ({ iconName, header, content }) => {
  return (
    <>
      <CircleFAButton iconName={iconName} />
      <h4 className="service-item-heading">{header}</h4>
      <p className="text-muted">{content}</p>
    </>
  );
};

ServiceItem.propTypes = {
  iconName: PropTypes.string.isRequired,
  header: PropTypes.string,
  content: PropTypes.string,
};

ServiceItem.defaultProps = {
  header: "",
  content: "",
};

export default ServiceItem;
