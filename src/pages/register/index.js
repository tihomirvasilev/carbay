import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { FirebaseContext } from "../../firebase";
import FormValidation from "../../utils/from-validation";
import validateRegister from "./validation";
import Input from "../../components/input";
import Layout from "../../components/layout";

import styles from "./index.module.css";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
  rePassword: "",
};

const RegisterPage = (props) => {
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
    if (Object.keys(errors).length === 0) {
      try {
        firebase.register(name, phone, email, password);
        props.history.push("/");
      } catch (err) {
        console.error("Authentication Error", err);
        setFirebaseError(err.message);
      }
    }

    if (firebaseError) {
      props.history.push("/error");
    }
  }
  return (
    <Layout>
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Form className={styles.form} onSubmit={handleSubmit}>
              <Input
                label="Name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                placeHolder="Your Name"
                value={values.name}
                errors={errors}
              />
              <Input
                label="Email address"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                placeHolder="Enter email"
                value={values.email}
                errors={errors}
              />
              <Input
                label="Password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                placeHolder="Enter Password"
                value={values.password}
                errors={errors}
              />
              <Input
                label="Repeat Password"
                name="rePassword"
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                placeHolder="Repeat Password"
                value={values.rePassword}
                errors={errors}
              />
              <div className={styles["button-container"]}>
                <Button className={styles.button} type="submit">
                  Register
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default withRouter(RegisterPage);
