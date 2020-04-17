import React from "react";
import PropTypes from "prop-types";

import { Container, Button } from "react-bootstrap";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import "./Top.scss";

const Top = (props) => {
  const scrollToServices = useSmoothScrollTo("services");

  return (
    <div className="masthead">
      <Container>
        <div className="intro-text">
          <div className="intro-lead-in">Welcome To Our Studio!</div>
          <div className="intro-heading text-uppercase">It&apos;s Nice To Meet You</div>
          <Button size="xl" variant="primary" className="text-uppercase" onClick={scrollToServices}>
            Tell Me More
          </Button>
        </div>
      </Container>
    </div>
  );
};

Top.propTypes = {};

export default Top;
