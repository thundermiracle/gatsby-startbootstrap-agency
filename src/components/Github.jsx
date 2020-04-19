import React from "react";
import PropTypes from "prop-types";

import Icon from "components/Icon";

const Github = ({ username }) => (
  <a href={`https://github.com/${username}`}>
    <Icon iconName="GithubIcon" />
  </a>
);

Github.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Github;
