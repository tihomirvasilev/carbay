import React from "react";

import { Container } from "react-bootstrap";
import Header from "../header";
import Footer from "../footer";

import styles from "./index.module.css";

const Layout = (props) => {
  return (
    <Container fluid className={styles.container}>
      <Container>
        <Header />
        <div>{props.children}</div>
        <Footer />
      </Container>
    </Container>
  );
};

export default Layout;
