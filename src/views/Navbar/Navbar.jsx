import React from "react";
import PropTypes from "prop-types";

import { Navbar, Container, NavbarBrand, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

import useWindowOnScroll from "hooks/useWindowOnScroll";
import Icon from "components/Icon";

import "./Navbar.scss";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";

const MyNavbar = (props) => {
  const [shrink, setShrink] = React.useState(false);
  const handleScrollToTop = useSmoothScrollTo(0);

  const handleWindowScroll = React.useCallback(() => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setShrink(scrollTop > 100);
  }, []);

  React.useEffect(() => {
    handleWindowScroll();
  }, [handleWindowScroll]);

  useWindowOnScroll(handleWindowScroll);

  return (
    <Navbar
      className={shrink ? "navbar-shrink" : ""}
      collapseOnSelect
      expand="lg"
      fixed="top"
      id="mainNav"
    >
      <Container>
        <NavbarBrand className="cursor-pointer" onClick={handleScrollToTop}>
          Start Bootstrap
        </NavbarBrand>
        <Navbar.Toggle
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu&nbsp;
          <Icon iconName="BarsIcon" />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="text-uppercase ml-auto">
            <Nav.Item>
              <Link
                className="nav-link cursor-pointer"
                activeClass="active"
                to="services"
                spy
                smooth="easeInOutQuart"
              >
                services
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                className="nav-link cursor-pointer"
                activeClass="active"
                to="portfolio"
                spy
                smooth="easeInOutQuart"
              >
                portfolio
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                className="nav-link cursor-pointer"
                activeClass="active"
                to="about"
                spy
                smooth="easeInOutQuart"
              >
                about
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                className="nav-link cursor-pointer"
                activeClass="active"
                to="team"
                spy
                smooth="easeInOutQuart"
              >
                team
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                className="nav-link cursor-pointer"
                activeClass="active"
                to="contact"
                spy
                smooth="easeInOutQuart"
              >
                contact
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

MyNavbar.propTypes = {};

export default MyNavbar;
