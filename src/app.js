import React from "react";

import { Container } from "react-bootstrap";
import Header from "./components/header";
import Register from "./components/register";

function App() {
  return (
    <Container fluid>
      <Header />
      <Register />
    </Container>
  );
}

export default App;
