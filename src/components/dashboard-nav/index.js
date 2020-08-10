import React from "react";

import { Container, Navbar } from "react-bootstrap";
import Title from "../title";
import styles from "./index.module.css";

const DashboardNav = () => {
  return (
    <Container className={styles.header}>
      <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
        <Navbar.Brand className={styles.brand} href="/">
          Dashboard
        </Navbar.Brand>
      </Navbar>
    </Container>
  );
};

export default DashboardNav;
