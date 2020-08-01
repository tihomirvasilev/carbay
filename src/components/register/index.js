import React, { useContext } from "react";
import { firebaseAuth } from "../../utils/auth-provider";
import { withRouter } from "react-router-dom";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

import styles from "./index.module.css";

const SignUp = (props) => {
  const { handleSignUp, inputs, setInputs, errors } = useContext(firebaseAuth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //wait to sign up
    await handleSignUp();
    //push home
    props.history.push("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
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
                value={inputs.email}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="Password"
                value={inputs.password}
              />
            </Form.Group>
            <Form.Group controlId="repeatPassword">
              <Form.Label>Repeat Password</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="rePassword"
                type="password"
                placeholder="Repeat Password"
                value={inputs.password}
              />
            </Form.Group>
            <div className={styles["button-container"]}>
              <Button className={styles.button} type="submit">
                Register
              </Button>
            </div>
            {errors.length > 0
              ? errors.map((error) => <p style={{ color: "red" }}>{error}</p>)
              : null}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(SignUp);
