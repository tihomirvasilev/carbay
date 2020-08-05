import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { firebaseContext } from "../../firebase/auth-provider";
import { Row, Col, Form, Button } from "react-bootstrap";
import styles from "./index.module.css";

const Login = (props) => {
  const { handleLogin, inputs, setInputs, errors } = useContext(
    firebaseContext
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin();
    props.history.push("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  return (
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
          <div className={styles["button-container"]}>
            <Button className={styles.button} type="submit">
              Login
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  );
};

export default withRouter(Login);
