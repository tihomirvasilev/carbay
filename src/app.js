import React from "react";

import styles from "./app.module.css";
import { Container } from "react-bootstrap";
import Header from "./components/header";

function App() {
  return (
    <Container>
      <div className={styles.app}>
        <Header />
      </div>
    </Container>
  );
}

export default App;
