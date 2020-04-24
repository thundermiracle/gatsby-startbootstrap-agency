import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function makeFAIcon(icon) {
  // eslint-disable-next-line react/display-name
  return (props) => <FontAwesomeIcon icon={icon} {...props} />;
}
