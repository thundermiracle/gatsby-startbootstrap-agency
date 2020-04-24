import React from "react";
import PropTypes from "prop-types";

import * as AllIcons from "components/SystemIcons";

const Icon = ({ iconName, ...restProps }) => {
  const IconComponent = AllIcons[iconName];
  if (IconComponent == null) {
    throw new Error(`icon [${iconName}] is not defined in config/Icons.jsx`);
  }

  return <IconComponent {...restProps} />;
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
};

export default Icon;
