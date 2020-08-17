import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import FirebaseContext from "../../firebase/context";
import Input from "../input";
import validateBrand from "./validateBrand";
import FormValidation from "../../utils/from-validation";

const INITIAL_STATE = {
  name: "",
};

const Brands = (props) => {
  const { firebase, user } = useContext(FirebaseContext);
  const { handleSubmit, handleChange, values, errors } = FormValidation(
    INITIAL_STATE,
    validateBrand,
    createBrand
  );

  function createBrand() {
    const hasErrors = Object.keys(errors).length > 0;
    if (!user) {
      props.history.push("/login");
    } else {
      if (!hasErrors) {
        const { name } = values;
        const newBrand = {
          name,
          models: [],
        };

        firebase.db.collection("brands").add(newBrand);
      }
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="name"
        placeHolder="Enter Brand"
        value={values.name}
        onChange={handleChange}
        errors={errors}
      />
      <Button type="submit">Add</Button>
    </Form>
  );
};

export default withRouter(Brands);
