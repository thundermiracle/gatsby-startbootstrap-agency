import React from "react";
import PropTypes from "prop-types";

import Icon from "components/Icon";

const Facebook = ({ username }) => (
  <a href={`https://facebook.com/${username}`}>
    <Icon iconName="FacebookIcon" />
  </a>
);

Facebook.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Facebook;
