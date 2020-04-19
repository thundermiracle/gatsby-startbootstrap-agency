import React from "react";
import PropTypes from "prop-types";

import Icon from "components/Icon";

const Medium = ({ username }) => (
  <a href={`https://medium.com/@${username}`}>
    <Icon iconName="MediumIcon" />
  </a>
);

Medium.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Medium;
