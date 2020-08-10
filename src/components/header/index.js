import React, { useContext } from "react";

import { Container, Nav, Navbar } from "react-bootstrap";
import {
  BsClipboard,
  BsSearch,
  BsBookmarkCheck,
  BsWrench,
} from "react-icons/bs";

import Menu from "../menu";

import styles from "./index.module.css";
import { FirebaseContext } from "../../firebase";

const Header = () => {
  const { user } = useContext(FirebaseContext);

  return (
    <Container fluid className={styles.header}>
      <Container>
        <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
          <Navbar.Brand className={styles.brand} href="/">
            CarBay
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-between">
            <Nav.Link href="/my-ads" className={styles["nav-item"]}>
              <BsClipboard className={styles["icon-item"]} />
              My Ads
            </Nav.Link>
            <Nav.Link href="/favorites" className={styles["nav-item"]}>
              <BsBookmarkCheck className={styles["icon-item"]} />
              Favorites
            </Nav.Link>
            <Nav.Link href="/search" className={styles["nav-item"]}>
              <BsSearch className={styles["icon-item"]} />
              Search
            </Nav.Link>
            {user && (
              <Nav.Link href="/admin" className={styles["nav-item"]}>
                <BsWrench className={styles["icon-item"]} />
                Admin Panel
              </Nav.Link>
            )}
            <Nav>
              <Menu />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Container>
  );
};

export default Header;
