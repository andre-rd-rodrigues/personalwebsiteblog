import React from "react";
import { useState } from "react";
import AppIcon from "components/AppIcon/AppIcon";
import FeatherIcon from "feather-icons-react";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./appnavbar.module.scss";
import { domain_name } from "utils/settings";

const AppNavbar = () => {
  const [show, setShow] = useState(false);

  return (
    <Navbar expand="lg" fixed="top" className={styles.nav}>
      <Navbar.Brand as={Link} to="/">
        <div className={styles.logo}>
          <div id="personal_picture" />
          <h1>AR</h1>
          <p>Blog</p>
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
            <a href={domain_name + "/trabalhos"}>Trabalhos</a>
            <br />
            <a href="/">Blog</a> <br />
            <a href={domain_name + "/sobre"}>Sobre</a> <br />
            <a href={domain_name + "/contactos"}>Contactos</a>
            <br />
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
};

export default AppNavbar;
