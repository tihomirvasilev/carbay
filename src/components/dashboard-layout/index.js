import React from "react";

import { Container } from "react-bootstrap";
import DashboardHeader from "../dashboard-header";
import Footer from "../footer";

import styles from "./index.module.css";

const Layout = (props) => {
  return (
    <Container fluid className={styles.container}>
      <Container>
        <DashboardHeader />
        <div>{props.children}</div>
        <Footer />
      </Container>
    </Container>
  );
};

export default Layout;
