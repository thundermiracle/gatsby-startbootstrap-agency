import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Medium = ({ userName }) => (
  <CircleIcon href={`https://medium.com/@${userName}`} iconName="MediumIcon" />
);

Medium.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Medium;
