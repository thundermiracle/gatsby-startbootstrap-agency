import React from "react";
import PropTypes from "prop-types";

import Icon from "components/Icon";

const Twitter = ({ username }) => (
  <a href={`https://twitter.com/${username}`}>
    <Icon iconName="TwitterIcon" />
  </a>
);

Twitter.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Twitter;
