import React from "react";

import { Container } from "react-bootstrap";
import Header from "../header";
import Footer from "../footer";

import styles from "./index.module.css";

const Layout = (props) => {
  return (
    <>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
