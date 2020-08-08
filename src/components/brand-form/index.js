import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import FirebaseContext from "../../firebase/context";
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
    handleCreateBrand
  );

  function handleCreateBrand() {
    if (!user) {
      props.history.push("/login");
    } else {
      if (!errors) {
        const { name } = values;
        const newBrand = {
          name,
          createdBy: {
            id: user.uid,
            name: user.displayName,
          },
          created: Date.now(),
          models: [],
        };
        firebase.db.collection("brands").add(newBrand);
        props.history.push("/admin-panel");
      }
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="Brand Name"
          value={values.name}
        />
        {errors.name && <p>{errors.name}</p>}
      </Form.Group>
      <Button type="submit">Add</Button>
    </Form>
  );
};

export default withRouter(Brands);
