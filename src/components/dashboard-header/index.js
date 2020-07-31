import React from "react";

import { Container, Nav, Navbar } from "react-bootstrap";
import { BsFillCaretLeftFill } from "react-icons/bs";

import styles from "./index.module.css";

const DashboardHeader = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-between">
            <Nav.Link href="/" className={styles["nav-item"]}>
              <BsFillCaretLeftFill className={styles["icon-item"]} />
              Back
            </Nav.Link>
            <Navbar.Brand className={styles.brand} href="/">
              Dashboard
            </Navbar.Brand>
            <Navbar.Brand className={styles.brand} href="/">
              CarBay
            </Navbar.Brand>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default DashboardHeader;
