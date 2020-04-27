import React from "react";
import PropTypes from "prop-types";

import Icon from "components/Icon";

import "./IconText.scss";

const IconText = ({ iconName, text }) => {
  return (
    <span className="icon-text">
      <Icon className="icon" iconName={iconName} />
      {text}
    </span>
  );
};

IconText.propTypes = {
  iconName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default IconText;
