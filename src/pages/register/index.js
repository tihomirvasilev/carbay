import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { FirebaseContext } from "../../firebase";
import FormValidation from "../../utils/from-validation";
import validateRegister from "./validation";
import Input from "../../components/input";
import styles from "./index.module.css";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
  rePassword: "",
};

const RegisterPage = ({ history }) => {
  const { firebase } = useContext(FirebaseContext);
  const { handleSubmit, handleChange, values, errors } = FormValidation(
    INITIAL_STATE,
    validateRegister,
    handleRegister
  );

  const [firebaseError, setFirebaseError] = useState(null);

  function handleRegister() {
    const { name, email, password } = values;
    try {
      firebase.register(name, email, password);
    } catch (err) {
      setFirebaseError(err.message);
    }
    console.log(errors);
    if (Object.keys(errors).length === 0) {
      history.push("/");
    }
  }
  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Form className={styles.form} onSubmit={handleSubmit}>
              <Input
                label="Name"
                name="name"
                onChange={handleChange}
                placeHolder="Your Name"
                value={values.name}
                errors={errors}
              />
              <Input
                label="Email address"
                name="email"
                onChange={handleChange}
                type="email"
                placeHolder="Enter email"
                value={values.email}
                errors={errors}
              />
              <Input
                label="Password"
                name="password"
                onChange={handleChange}
                type="password"
                placeHolder="Enter Password"
                value={values.password}
                errors={errors}
              />
              <Input
                label="Repeat Password"
                name="rePassword"
                onChange={handleChange}
                type="password"
                placeHolder="Repeat Password"
                value={values.rePassword}
                errors={errors}
              />
              {firebaseError && <span>{{ firebaseError }}</span>}

              <div className={styles["button-container"]}>
                <Button className={styles.button} type="submit">
                  Register
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default withRouter(RegisterPage);
