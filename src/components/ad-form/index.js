import React, { useContext, useEffect, useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { FirebaseContext } from "../../firebase";
import FormValidation from "../../utils/from-validation";

import validateAd from "./validateAd";

const INITIAL_STATE = {
  brand: "",
  model: "",
  modification: "",
  category: "",
  firstRegistration: "",
  milage: "",
  engine: "",
  transmission: "",
  power: "",
  price: "",
  description: "",
  city: "",
  address: "",
};

const AdForm = () => {
  const { firebase, user } = useContext(FirebaseContext);
  const { handleSubmit, handleChange, values, errors } = FormValidation(
    INITIAL_STATE,
    validateAd,
    createAd
  );

  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);

  useEffect(() => {
    generateYearsTillNow();
    getBrands();
  }, []);

  function generateYearsTillNow() {
    let date = new Date();
    const lastYear = date.getFullYear();

    let years = [];
    for (let i = 1930; i <= lastYear; i++) {
      years.push(i);
    }

    setYears(years);
  }

  function handleBrandChange(e) {
    const currentBrand = JSON.parse(e.target.value);
    setModels(currentBrand.models);
    handleChange(e);
  }

  function createAd() {
    console.log(values);
    const newAd = {
      brand: JSON.parse(values.brand).name,
      model: values.model,
      modification: values.modification,
      category: values.category,
      firstRegistration: values.firstRegistration,
      milage: Number(values.milage),
      engine: values.engine,
      transmission: values.transmission,
      power: values.power,
      price: values.price,
      description: values.description,
      city: values.city,
      address: values.address,
    };

    firebase.db.collection("ads").add(newAd);
  }

  function getBrands() {
    return firebase.db
      .collection("brands")
      .orderBy("name")
      .onSnapshot(handleSnapshot);
  }

  async function handleSnapshot(snapshot) {
    const brands = await snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    setBrands(brands);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} sm={3} controlId="brand">
          <Form.Label>Brand</Form.Label>
          <Form.Control as="select" name="brand" onChange={handleBrandChange}>
            <option key="" value="">
              Select Brand
            </option>
            {brands.map((b) => (
              <option key={b.id} value={JSON.stringify(b)}>
                {b.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} sm={3} controlId="model">
          <Form.Label>Model</Form.Label>
          <Form.Control as="select" name="model" onChange={handleChange}>
            <option>Select Model</option>
            {models.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="modification">
          <Form.Label>Modification</Form.Label>
          <Form.Control
            name="modification"
            onChange={handleChange}
            placeholder="Modification"
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} sm={3} controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control as="select" name="category" onChange={handleChange}>
            <option>Select Category</option>
            <option>Estate</option>
            <option>Hatchback</option>
            <option>Coupe</option>
            <option>Van</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} sm={3} controlId="first-registration">
          <Form.Label>First Registration</Form.Label>
          <Form.Control
            as="select"
            name="firstRegistration"
            type="number"
            onChange={handleChange}
          >
            <option>Select Year</option>
            {years.map((y, i) => (
              <option key={i}>{y}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} sm={3} controlId="milage">
          <Form.Label>Milage</Form.Label>
          <Form.Control
            name="milage"
            type="number"
            onChange={handleChange}
            placeholder="Enter Milage"
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} sm={2} controlId="engine">
          <Form.Label>Engine</Form.Label>
          <Form.Control as="select" name="engine" onChange={handleChange}>
            <option value="">Select Engine</option>
            <option>Petrol</option>
            <option>Diesel</option>
            <option>LPG</option>
            <option>SNG</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} sm={2} controlId="transmission">
          <Form.Label>Transmission</Form.Label>
          <Form.Control as="select" name="transmission" onChange={handleChange}>
            <option>Select Transmission</option>
            <option>Manual</option>
            <option>Automatic</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} sm={2} controlId="power">
          <Form.Label>Power</Form.Label>
          <Form.Control
            name="power"
            type="number"
            onChange={handleChange}
            placeholder="Enter Power"
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} sm={2} controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            type="number"
            onChange={handleChange}
            placeholder="Enter Price"
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} sm={6} controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows="4"
            name="description"
            onChange={handleChange}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} sm={3} controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            name="city"
            onChange={handleChange}
            placeholder="Enter City"
          />
        </Form.Group>
        <Form.Group as={Col} sm={3} controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            name="address"
            onChange={handleChange}
            placeholder="Enter Address"
          />
        </Form.Group>
      </Form.Row>
      <Button type="submit">Add</Button>
    </Form>
  );
};

export default AdForm;
