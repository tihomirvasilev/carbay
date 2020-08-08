import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Form, Button } from "react-bootstrap";
import FormValidation from "../../utils/from-validation";
import firebase from "../../firebase";
import validateLogin from "./validation";
import styles from "./index.module.css";

const INITIAL_STATE = {
  email: "",
  password: "",
};
const Login = (props) => {
  const {
    handleSubmit,
    handleChange,
    values,
    errors,
  } = FormValidation(INITIAL_STATE, validateLogin, handleLogin);

  const [token, setToken] = React.useState(null);
  const [firebaseError, setFirebaseError] = React.useState(null);

  function handleLogin() {
    const { email, password } = values;
    try {
      firebase.login(email, password, setToken);
      props.history.push("/");
    } catch (err) {
      console.error("Authentication Error", err);
      setFirebaseError(err.message);
    }
  }
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
              value={values.email}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Password"
              value={values.password}
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
