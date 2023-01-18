import React from "react";
import { useState } from "react";
import AppIcon from "components/AppIcon/AppIcon";
import SearchBar from "components/AppSearchBar/AppSearchBar";
import FeatherIcon from "feather-icons-react";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CATEGORIES } from "utils";
import styles from "./appnavbar.module.scss";

const AppNavbar = () => {
  const [show, setShow] = useState(false);

  const navLinks = CATEGORIES.map(({ type, name }, index) => {
    // Remove categories: All, Recent and Top
    const isInvalidCategory =
      type === "all" || type === "recent" || type === "top";

    if (!isInvalidCategory) {
      return (
        <Nav.Link
          as={Link}
          href={`/article/search?category=${type}`}
          key={index}
          to={`/article/search?category=${type}`}
        >
          <li>{name}</li>
        </Nav.Link>
      );
    }
  });

  return (
    <Navbar expand="lg" fixed="top" className={styles.nav}>
      <Navbar.Brand as={Link} to="/">
        <div className={styles.logo}>
          <div id="brand_logo" />
          <h1>CG</h1>
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
            {navLinks}
            <SearchBar className={styles.search} />
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
};

export default AppNavbar;
