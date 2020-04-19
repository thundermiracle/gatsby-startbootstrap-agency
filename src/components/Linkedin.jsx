import React from "react";
import PropTypes from "prop-types";

import Icon from "components/Icon";

const Linkedin = ({ username }) => (
  <a href={`https://linkedin.com/in/${username}`}>
    <Icon iconName="LinkedinIcon" />
  </a>
);

Linkedin.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Linkedin;
