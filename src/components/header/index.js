import React from "react";

import { Container, Nav, Navbar } from "react-bootstrap";
import {
  BsClipboard,
  BsChevronExpand,
  BsSearch,
  BsBookmarkCheck,
  BsWrench,
} from "react-icons/bs";
import Menu from "../menu";

import styles from "./index.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
          <Navbar.Brand className={styles.brand} href="/">
            CarBay
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-between">
            <Nav.Link href="/dashboard" className={styles["nav-item"]}>
              <BsClipboard className={styles["icon-item"]} />
              Dashboard
            </Nav.Link>
            <Nav.Link href="/favorites" className={styles["nav-item"]}>
              <BsBookmarkCheck className={styles["icon-item"]} />
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
            <Nav.Link href="/admin-panel" className={styles["nav-item"]}>
              <BsWrench className={styles["icon-item"]} />
              Admin Panel
            </Nav.Link>
            <Nav>
              <Menu />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
