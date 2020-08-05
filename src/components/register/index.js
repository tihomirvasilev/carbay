import React, { useContext } from "react";
import { withRouter } from "react-router-dom";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { firebaseContext } from "../../firebase/auth-provider";

import styles from "./index.module.css";

const Register = (props) => {
  const { handleRegister, inputs, setInputs, errors } = useContext(
    firebaseContext
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleRegister();
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
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="Your name"
                value={inputs.name}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="phone"
                type="text"
                placeholder="Your phone"
                value={inputs.phone}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="Enter email"
                value={inputs.email}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="Password"
                value={inputs.password}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Repeat Password</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="rePassword"
                type="password"
                placeholder="Repeat Password"
                value={inputs.rePassword}
              />
            </Form.Group>
            <div className={styles["button-container"]}>
              <Button className={styles.button} type="submit">
                Register
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(Register);
