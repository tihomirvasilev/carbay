import React from "react";

import { Container, Navbar } from "react-bootstrap";
import BackButton from "../back-button";

import styles from "./index.module.css";

const DashboardNav = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-between">
            <BackButton />
            <Navbar.Brand className={styles.brand} href="/">
              CarBay
            </Navbar.Brand>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default DashboardNav;
