import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Form, Button } from "react-bootstrap";
import FormValidation from "../../utils/from-validation";
import { FirebaseContext } from "../../firebase";
import validateLogin from "./validation";
import styles from "./index.module.css";
import Input from "../../components/input";

const INITIAL_STATE = {
  email: "",
  password: "",
};

const LoginPage = (props) => {
  const { firebase } = useContext(FirebaseContext);
  const { handleSubmit, handleChange, values, errors } = FormValidation(
    INITIAL_STATE,
    validateLogin,
    handleLogin
  );

  const [firebaseError, setFirebaseError] = useState(null);

  function handleLogin() {
    const { email, password } = values;
    try {
      firebase.login(email, password);
    } catch (err) {
      setFirebaseError(err.message);
    }
    if (Object.keys(errors).length === 0) {
      props.history.push("/");
    }
  }

  return (
    <>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <Form className={styles.form} onSubmit={handleSubmit}>
            <Input
              label="Email Address"
              onChange={handleChange}
              name="email"
              type="email"
              placeHolder="Enter Email"
              value={values.email}
              errors={errors}
            />
            <Input
              label="Password"
              onChange={handleChange}
              name="password"
              type="password"
              placeHolder="Enter Password"
              value={values.password}
              errors={errors}
            />
            {firebaseError && <span>{{ firebaseError }}</span>}
            <div className={styles["button-container"]}>
              <Button className={styles.button} type="submit">
                Login
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default withRouter(LoginPage);
