import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import FirebaseContext from "../../firebase/context";
import validateOption from "./validateOption";
import FormValidation from "../../utils/from-validation";

const INITIAL_STATE = {
  name: "",
};

const OptionForm = (props) => {
  const { firebase, user } = useContext(FirebaseContext);
  const { handleSubmit, handleChange, values, errors } = FormValidation(
    INITIAL_STATE,
    validateOption,
    handleCreateOption
  );

  function handleCreateOption() {
    const hasErrors = Object.keys(errors).length > 0;
    if (!user) {
      props.history.push("/login");
    } else {
      if (!hasErrors) {
        const { name } = values;
        const newOption = {
          name,
        };
        firebase.db.collection("options").add(newOption);
        props.history.push("/admin/options");
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
          placeholder="Option Name"
          value={values.name}
        />
      </Form.Group>
      <Button type="submit">Add</Button>
    </Form>
  );
};

export default withRouter(OptionForm);
