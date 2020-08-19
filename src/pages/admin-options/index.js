import React, { useContext, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

import GC from "../../constants";
import FirebaseContext from "../../firebase/context";
import validateOption from "../../pages/admin-options/validateOption";
import FormValidation from "../../utils/from-validation";
import OptionsList from "../../components/options-list";
import AdminLayout from "../../components/admin-layout";

const INITIAL_STATE = {
  name: "",
};

const OptionsPage = ({ history }) => {
  const { firebase, currentUser } = useContext(FirebaseContext);
  const { handleSubmit, handleChange, values, errors } = FormValidation(
    INITIAL_STATE,
    validateOption,
    handleCreateOption
  );
  const [options, setOptions] = useState([]);

  useEffect(() => {
    firebase.getCollectionSnapshotDocs("options", setOptions);
  }, [firebase]);

  function handleCreateOption() {
    const hasErrors = Object.keys(errors).length > 0;
    if (!currentUser) {
      history.push(GC.ROUTES.USER.LOGIN);
    } else {
      if (!hasErrors) {
        const { name } = values;
        const newOption = {
          name,
        };
        firebase.db.collection("options").add(newOption);
        history.push(GC.ROUTES.ADMIN.OPTIONS);
      }
    }
  }

  return (
    <AdminLayout>
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
      <br />
      <OptionsList options={options} />
    </AdminLayout>
  );
};

export default withRouter(OptionsPage);
