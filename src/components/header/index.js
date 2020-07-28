import React from "react";

import { Container, Nav, Navbar } from "react-bootstrap";
import { BsBookmarksFill, BsChevronExpand, BsSearch } from "react-icons/bs";
import Menu from "../menu";

import styles from "./index.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <Container>
        <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
          <Navbar.Brand className={styles.brand} href="/">
            CarBay
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-between">
            <Nav.Link href="/favorites" className={styles["nav-item"]}>
              <BsBookmarksFill className={styles["icon-item"]} />
              Favorites
            </Nav.Link>
            <Nav.Link href="/sort" className={styles["nav-item"]}>
              <BsChevronExpand className={styles["icon-item"]} />
              Sort
            </Nav.Link>
            <Nav.Link href="/search" className={styles["nav-item"]}>
              <BsSearch className={styles["icon-item"]} />
              Search
            </Nav.Link>
            <Menu />
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
