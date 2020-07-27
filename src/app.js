import React from "react";

import { Container } from "react-bootstrap";
import Header from "./components/header";
import Register from "./components/register";
import Login from "./components/login";

import styles from "./app.module.css";

function App() {
  return (
    <Container fluid>
      <Header />
      <hr className={styles.hr} />
      <Register></Register>
      <hr className={styles.hr} />
      <Login />
    </Container>
  );
}

export default App;
