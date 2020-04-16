import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

const Footer = (props) => {
  return (
    <footer className="bg-light py-5">
      <Container>
        <div className="small text-center text-muted">Copyright © 2020 - Start Bootstrap</div>
      </Container>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
