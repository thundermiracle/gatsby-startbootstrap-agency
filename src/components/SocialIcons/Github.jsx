import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Github = ({ userName }) => (
  <CircleIcon href={`https://github.com/${userName}`} iconName="GithubIcon" />
);

Github.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Github;
