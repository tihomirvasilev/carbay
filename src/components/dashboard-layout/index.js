import React from "react";

import { Container } from "react-bootstrap";
import DashboardNav from "../dashboard-nav";
import Footer from "../footer";

import styles from "./index.module.css";

const Layout = (props) => {
  return (
    <>
      <DashboardNav />
      <Container>
        <div>{props.children}</div>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
