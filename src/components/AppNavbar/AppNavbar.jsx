import React from "react";
import { useState } from "react";
import AppIcon from "components/AppIcon/AppIcon";
import FeatherIcon from "feather-icons-react";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { DOMAIN_URL } from "utils/settings";
import styles from "./appnavbar.module.scss";

const AppNavbar = () => {
  const [show, setShow] = useState(false);

  return (
    <Navbar expand="lg" fixed="top" className={styles.nav}>
      <Navbar.Brand as={Link} to="/">
        <div className={styles.logo}>
          <div id="brand_logo" />
          <h1>AR</h1>
          <p>Curiosity Gem</p>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="offcanvas-container"
        onClick={() => setShow(true)}
      >
        <AppIcon />
        <FeatherIcon icon="menu" color="white" />
      </Navbar.Toggle>
      <Navbar.Offcanvas
        show={show}
        responsive="lg"
        onHide={() => setShow(false)}
        aria-labelledby="offcanvas-container"
        placement="end"
      >
        <Offcanvas.Header closeButton />
        <Offcanvas.Body>
          <Nav
            onSelect={() => setShow(false)}
            className={styles.offcanvasLinks}
          >
            <NavHashLink to="/#top-article">Homepage</NavHashLink>
            <NavHashLink to="/#homepage-recent-articles">Recent</NavHashLink>
            <a href={DOMAIN_URL + "/trabalhos"}>Projects</a>
            <a href={DOMAIN_URL + "/sobre"}>About</a>
            <a href={DOMAIN_URL + "/contactos"}>Contacts</a>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
};

export default AppNavbar;
