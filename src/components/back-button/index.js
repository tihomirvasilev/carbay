import React from "react";

import { Nav } from "react-bootstrap";
import { BsFillCaretLeftFill } from "react-icons/bs";

import styles from "./index.module.css";

const BackButton = () => {
  return (
    <Nav.Link href="/" className={styles["color-black"]}>
      <BsFillCaretLeftFill className={styles["icon-item"]} />
      Back
    </Nav.Link>
  );
};

export default BackButton;
