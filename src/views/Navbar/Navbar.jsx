import React from "react";
import clsx from "clsx";
import { useStaticQuery, graphql } from "gatsby";

import { Navbar, Container, Nav } from "react-bootstrap";

import useWindowOnScroll from "hooks/useWindowOnScroll";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import Icon from "components/Icon";
import NavItem from "components/NavItem";

import "./Navbar.scss";

const MyNavbar = () => {
  const {
    allMarkdownRemark: { nodes },
    markdownRemark = { frontmatter: {} },
  } = useStaticQuery(graphql`
    query NavBarQuery {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "//sections//" }
          frontmatter: { anchor: { ne: null } }
        }
        sort: { fields: fileAbsolutePath }
      ) {
        nodes {
          frontmatter {
            anchor
          }
        }
      }
      markdownRemark(fields: { fileName: { regex: "/navbar/i" } }) {
        frontmatter {
          brand
          menuText
        }
      }
    }
  `);

  const handleScrollToTop = useSmoothScrollTo(0);

  const [expanded, setExpanded] = React.useState(false);
  const toggleMenu = React.useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);
  const closeMenu = React.useCallback(() => {
    setExpanded(false);
  }, []);
  const handleBrandClick = React.useCallback(() => {
    closeMenu();
    handleScrollToTop();
  }, [closeMenu, handleScrollToTop]);

  const [shrink, setShrink] = React.useState(false);
  const handleWindowScroll = React.useCallback(() => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setShrink(scrollTop > 100);
  }, []);
  useWindowOnScroll(handleWindowScroll);

  return (
    <Navbar
      className={clsx("navbar-root", { "navbar-shrink": shrink })}
      expand="lg"
      fixed="top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand className="cursor-pointer" onClick={handleBrandClick}>
          {markdownRemark.frontmatter.brand}
        </Navbar.Brand>
        <Navbar.Toggle onClick={toggleMenu} aria-label="Toggle navigation">
          {markdownRemark.frontmatter.menuText}
          <Icon iconName="BarsIcon" />
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="text-uppercase ml-auto">
            {nodes.map(({ frontmatter: { anchor } }) => (
              <NavItem key={anchor} to={anchor} onClick={closeMenu} />
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
