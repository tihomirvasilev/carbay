import React from "react";

import { Container } from "react-bootstrap";
import DashboardNav from "../dashboard-nav";
import Footer from "../footer";

import styles from "./index.module.css";

const Layout = (props) => {
  return (
    <Container fluid className={styles.container}>
      <Container>
        <DashboardNav />
        <div>{props.children}</div>
        <Footer />
      </Container>
    </Container>
  );
};

export default Layout;
