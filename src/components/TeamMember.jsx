import React from "react";
import PropTypes from "prop-types";

import Image from "components/Image";
import Twitter from "components/Twitter";
import Facebook from "components/Facebook";
import Linkedin from "components/Linkedin";
import Github from "components/Github";
import Medium from "components/Medium";

import "./TeamMember.scss";

const TeamMember = ({
  imageFileName,
  imageAlt,
  header,
  subheader,
  twitter,
  facebook,
  linkedin,
  github,
  medium,
}) => {
  const twitterPart = twitter ? (
    <li className="list-inline-item">
      <Twitter username={twitter} />
    </li>
  ) : null;
  const facebookPart = facebook ? (
    <li className="list-inline-item">
      <Facebook username={facebook} />
    </li>
  ) : null;
  const linkedinPart = linkedin ? (
    <li className="list-inline-item">
      <Linkedin username={linkedin} />
    </li>
  ) : null;
  const githubPart = github ? (
    <li className="list-inline-item">
      <Github username={github} />
    </li>
  ) : null;
  const mediumPart = medium ? (
    <li className="list-inline-item">
      <Medium username={medium} />
    </li>
  ) : null;

  return (
    <div className="team-member">
      <Image
        className="mx-auto circle rounded-circle"
        fileName={imageFileName}
        alt={imageAlt || header || subheader}
      />
      <h4>{header}</h4>
      <p className="text-muted">{subheader}</p>
      <ul className="list-inline social-buttons">
        {twitterPart}
        {facebookPart}
        {linkedinPart}
        {githubPart}
        {mediumPart}
      </ul>
    </div>
  );
};

TeamMember.propTypes = {
  imageFileName: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  twitter: PropTypes.string,
  facebook: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string,
  medium: PropTypes.string,
};

TeamMember.defaultProps = {
  imageAlt: null,
  header: "",
  subheader: "",
  twitter: null,
  facebook: null,
  linkedin: null,
  github: null,
  medium: null,
};

export default TeamMember;
