import React, { useState, useContext, useEffect } from "react";
import * as fire from "firebase/app";
import { Button, Form } from "react-bootstrap";
import FirebaseContext from "../../firebase/context";
import FormValidation from "../../utils/from-validation";
import ValidateModel from "./validation";

const INITIAL_STATE = {
  brandId: "",
  name: "",
};

const ModelAdd = () => {
  const { firebase } = useContext(FirebaseContext);

  const { handleSubmit, handleChange, values } = FormValidation(
    INITIAL_STATE,
    ValidateModel,
    handleAddModel
  );

  const [brands, setBrands] = useState([]);
  const [currentBrand, setCurrentBrand] = useState({});
  const [currentModels, setCurrentModels] = useState(null);

  useEffect(() => {
    getBrandsList();
  });

  function getBrandsList() {
    return firebase.db.collection("brands").onSnapshot(handleSnapshot);
  }

  async function handleSnapshot(snapshot) {
    const brands = await snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    console.log(brands);
    setBrands(brands);
  }

  async function handleAddModel() {
    const brandRef = firebase.db.collection("brands").doc(values.brandId);

    await brandRef.update({
      models: fire.firestore.FieldValue.arrayUnion(values.name),
    });
  }

  function handleChangeOption(event) {
    handleChange(event);
    setCurrentBrand({
      id: event.target.value,
    });
    getCurrentBrand();
    //TODO: fix models list to get current models
    console.log(event.target);
  }

  function getCurrentBrand() {
    const brand = brands.filter((x) => x.id === currentBrand.id)[0];
    console.log(brand);
    if (brand) {
      setCurrentModels(brand.models);
    }
  }

  if (currentModels) {
    return (
      <>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control
              as="select"
              name="brandId"
              onChange={handleChangeOption}
              value={values.brandId}
            >
              <option value="">SELECT BRAND</option>
              {brands.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Model Name"
              value={values.name}
            />
          </Form.Group>
          <Form.Group hidden>
            <Form.Control
              onChange={handleChange}
              name="models"
              type="text"
              placeholder="Model Name"
              value={values.models}
            />
          </Form.Group>
          <Button type="submit">Add</Button>
        </Form>
        <br />
        <ul>
          {currentModels.map((model, key) => (
            <li key={key}>{model}</li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Control
          as="select"
          name="brandId"
          onChange={handleChangeOption}
          value={values.brandId}
        >
          <option value="">SELECT BRAND</option>
          {brands.map((b) => (
            <option key={b.id} value={b.id}>
              {b.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Control
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="Model Name"
          value={values.name}
        />
      </Form.Group>
      <Button type="submit">Add</Button>
    </Form>
  );
};

export default ModelAdd;
