import React from "react";
import PropTypes from "prop-types";

import { Navbar, Container, NavbarBrand, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.scss";

const MyNavbar = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" id="mainNav">
      <Container>
        <NavbarBrand className="js-scroll-trigger" href="#page-top">
          Start Bootstrap
        </NavbarBrand>
        <Navbar.Toggle
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu&nbsp;
          <FontAwesomeIcon icon={faBars} />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="text-uppercase ml-auto">
            <Nav.Item>
              <Nav.Link className="js-scroll-trigger" href="#services">
                services
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="js-scroll-trigger" href="#portfolio">
                portfolio
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="js-scroll-trigger" href="#about">
                about
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="js-scroll-trigger" href="#team">
                team
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="js-scroll-trigger" href="#contact">
                contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

MyNavbar.propTypes = {};

export default MyNavbar;
