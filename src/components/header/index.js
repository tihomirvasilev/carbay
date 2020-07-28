import React from "react";

import { Container, Nav, Navbar } from "react-bootstrap";
import { BsBookmarksFill, BsChevronExpand, BsSearch } from "react-icons/bs";
import Menu from "../menu";

import styles from "./index.module.css";

const Header = () => {
  return (
    <Container fluid className={styles.container}>
      <Container>
        <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-between">
            <Menu />
            <Nav>
              <Nav.Link href="/notebook" className={styles["nav-item"]}>
                <BsBookmarksFill className={styles["icon-item"]} />
                Notebook
              </Nav.Link>
            </Nav>
            <Navbar.Brand className={styles.brand} href="/">
              CarBay
            </Navbar.Brand>
            <Nav>
              <Nav.Link href="/sort" className={styles["nav-item"]}>
                <BsChevronExpand className={styles["icon-item"]} />
                Sort
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/search" className={styles["nav-item"]}>
                <BsSearch className={styles["icon-item"]} />
                Search
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Container>
  );
};

export default Header;
