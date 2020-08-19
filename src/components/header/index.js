import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {
  BsClipboard,
  BsSearch,
  BsBookmarkCheck,
  BsWrench,
} from "react-icons/bs";

import GC from "../../constants";
import { FirebaseContext } from "../../firebase";
import Menu from "../menu";

import styles from "./index.module.css";

const Header = () => {
  const { currentUser } = useContext(FirebaseContext);

  return (
    <Container fluid className={styles.header}>
      <Container>
        <Navbar collapseOnSelect expand="sm" className={styles.navbar}>
          <Navbar.Brand className={styles.brand} href="/">
            CarBay
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className={styles.navbar}>
            <Nav.Link href="/search" className={styles["nav-item"]}>
              <BsSearch className={styles["icon-item"]} />
              Search
            </Nav.Link>
            {currentUser && (
              <>
                {currentUser.isAdmin && (
                  <Nav.Link
                    href={GC.ROUTES.ADMIN.PANEL}
                    className={styles["nav-item"]}
                  >
                    <BsWrench className={styles["icon-item"]} />
                    Admin Panel
                  </Nav.Link>
                )}
                <Nav.Link
                  href={GC.ROUTES.USER.MYADS}
                  className={styles["nav-item"]}
                >
                  <BsClipboard className={styles["icon-item"]} />
                  My Ads
                </Nav.Link>
                <Nav.Link
                  href={GC.ROUTES.USER.FAVORITES}
                  className={styles["nav-item"]}
                >
                  <BsBookmarkCheck className={styles["icon-item"]} />
                  Favorites
                </Nav.Link>
              </>
            )}
            <Menu />
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Container>
  );
};

export default Header;
