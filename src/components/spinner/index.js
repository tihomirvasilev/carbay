import React from "react";
import { Spinner } from "react-bootstrap";

import styles from "./index.module.css";

const Loader = () => {
  return (
    <div className={styles.container}>
      <Spinner animation="border" variant="danger" />
    </div>
  );
};

export default Loader;
