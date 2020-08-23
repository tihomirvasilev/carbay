import React, { useContext, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

import FirebaseContext from "../../firebase/context";
import AdminList from "../../components/admin-list";
import Input from "../../components/input";
import AdminLayout from "../../components/admin-layout";
import FormValidation from "../../utils/from-validation";
import validateBrand from "./validateBrand";

import styles from "./index.module.css";

const INITIAL_STATE = {
  name: "",
};

const BrandsAdmin = () => {
  const { firebase } = useContext(FirebaseContext);

  const [brands, setBrands] = useState([]);

  useEffect(() => {
    firebase.getCollectionSnapshotDocs("brands", setBrands);
  }, [firebase]);

  const { handleSubmit, handleChange, values, errors } = FormValidation(
    INITIAL_STATE,
    validateBrand,
    createBrand
  );

  function createBrand() {
    const hasErrors = Object.keys(errors).length > 0;
    if (!hasErrors) {
      const { name } = values;
      const newBrand = {
        name,
        models: [],
      };

      firebase.db.collection("brands").add(newBrand);
    }
  }
  return (
    <AdminLayout>
      <Form onSubmit={handleSubmit}>
        <Input
          name="name"
          placeHolder="Enter Brand"
          value={values.name}
          onChange={handleChange}
          errors={errors}
        />
        <div className={styles["button-container"]}>
          <Button type="submit" className={styles.button}>
            Добави
          </Button>
        </div>
      </Form>
      <AdminList items={brands} collection="brands" path="/admin/brands" />
    </AdminLayout>
  );
};

export default withRouter(BrandsAdmin);
