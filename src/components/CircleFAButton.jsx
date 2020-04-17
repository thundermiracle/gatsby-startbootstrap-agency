import React from "react";
import PropTypes from "prop-types";

import Icon from "./Icon";

import "./CircleFAButton.scss";

const CircleFAButton = ({ iconName, ...restProps }) => {
  return (
    <div className="circle-fa-button">
      <Icon iconName={iconName} inverse size="4x" {...restProps} />
    </div>
  );
};

CircleFAButton.propTypes = {
  iconName: PropTypes.string.isRequired,
};

export default CircleFAButton;
