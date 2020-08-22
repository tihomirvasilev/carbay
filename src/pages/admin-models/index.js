import React, { useState, useContext, useEffect } from "react";
import * as fire from "firebase/app";
import { Button, Form } from "react-bootstrap";

import GC from "../../constants";
import FirebaseContext from "../../firebase/context";
import FormValidation from "../../utils/from-validation";
import ValidateModel from "./validation";
import Input from "../../components/input";
import AdminList from "../../components/admin-list";
import AdminLayout from "../../components/admin-layout";

const INITIAL_STATE = {
  brand: "",
  name: "",
};

const ModelsAdmin = ({ history }) => {
  const { firebase } = useContext(FirebaseContext);

  const { handleSubmit, handleChange, values, errors } = FormValidation(
    INITIAL_STATE,
    ValidateModel,
    AddModel
  );

  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);

  useEffect(() => {
    firebase.getCollectionSnapshotDocs("brands", setBrands);
  }, [firebase]);

  async function AddModel() {
    const brandId = await JSON.parse(values.brand).id;
    const brandRef = firebase.db.collection("brands").doc(brandId);

    await brandRef.update({
      models: fire.firestore.FieldValue.arrayUnion(values.name),
    });
    setModels([]);
    history.push(GC.ROUTES.ADMIN.MODELS);
  }

  function handleChangeOption(e) {
    const currentBrand = JSON.parse(e.target.value);
    setModels(currentBrand.models);
    handleChange(e);
  }
  return (
    <AdminLayout>
      <Form onSubmit={handleSubmit}>
        <Input
          as="select"
          name="brand"
          onChange={handleChangeOption}
          value={values.brand}
          errors={errors}
        >
          <option value="">SELECT BRAND</option>
          {brands.map((b, index) => (
            <option key={index} value={JSON.stringify(b)}>
              {b.name}
            </option>
          ))}
        </Input>
        <Input
          name="name"
          onChange={handleChange}
          placeHolder="Enter Model"
          value={values.name}
          errors={errors}
        />
        <Button type="submit">Add</Button>
      </Form>
      <br />
      <AdminList items={models} collection="models" />
    </AdminLayout>
  );
};

export default ModelsAdmin;
