import React, { useContext } from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { firebaseAuth } from "../../utils/auth-provider";
import { withRouter } from "react-router-dom";
import styles from "./index.module.css";

const SignIn = () => {
  const { handleSignIn, inputs, setInputs, errors } = useContext(firebaseAuth);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    handleSignIn();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(inputs);
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <Form className={styles.form} onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <div className={styles["button-container"]}>
              <Button className={styles.button} type="submit">
                Login
              </Button>
              {errors.length > 0
                ? errors.map((error) => <p style={{ color: "red" }}>{error}</p>)
                : null}
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
