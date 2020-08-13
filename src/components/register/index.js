import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import FormValidation from "../../utils/from-validation";
import validateRegister from "./validation";
import { FirebaseContext } from "../../firebase";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import styles from "./index.module.css";

const INITIAL_STATE = {
  name: "",
  phone: "",
  email: "",
  password: "",
  rePassword: "",
};

const Register = (props) => {
  const { firebase } = useContext(FirebaseContext);
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
  } = FormValidation(INITIAL_STATE, validateRegister, handleRegister);

  const [firebaseError, setFirebaseError] = useState(null);

  function handleRegister() {
    const { name, phone, email, password } = values;

    try {
      firebase.register(name, phone, email, password);
      props.history.push("/");
    } catch (err) {
      console.error("Authentication Error", err);
      setFirebaseError(err.message);
    }
  }

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
                value={values.name}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="phone"
                type="text"
                placeholder="Your phone"
                value={values.phone}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                name="email"
                type="email"
                className={errors.email && "error-input"}
                placeholder="Enter email"
                autoComplete="off"
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className={errors.password && "error-input"}
                name="password"
                type="password"
                placeholder="Password"
              />
              {errors.password && (
                <p className="error-text">{errors.password}</p>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label>Repeat Password</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="rePassword"
                type="password"
                placeholder="Repeat Password"
                value={values.rePassword}
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
