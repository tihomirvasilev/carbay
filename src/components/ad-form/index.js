import React, { useContext, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Form, Col, Button } from "react-bootstrap";
import { FirebaseContext } from "../../firebase";

import FormValidation from "../../utils/from-validation";
import validateAd from "./validateAd";
import styles from "./index.module.css";

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
  imageUrls: [],
  phone: "",
};

const AdForm = (props) => {
  const { firebase, user } = useContext(FirebaseContext);
  const { handleSubmit, handleChange, values, errors } = FormValidation(
    INITIAL_STATE,
    validateAd,
    createAd
  );
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);
  const [pictureFile, setPictureFile] = useState([]);
  const [pictures, setPictures] = useState([]);
  console.log(user);

  useEffect(() => {
    async function getBrands() {
      const brands = [];
      await firebase.db
        .collection("brands")
        .get()
        .then((querySnapshot) => {
          querySnapshot.docs.forEach((doc) => {
            brands.push(doc.data());
          });
        })
        .catch((e) => console.log(e));
      setBrands(brands);
    }

    function generateYearsTillNow() {
      let years = [];
      let date = new Date();
      const lastYear = date.getFullYear();

      for (let i = 1950; i <= lastYear; i++) {
        years.push(i);
      }
      setYears(years);
    }
    generateYearsTillNow();
    getBrands();
  }, [firebase]);

  function handleBrandChange(e) {
    const currentBrand = JSON.parse(e.target.value);
    setModels(currentBrand.models);
    handleChange(e);
  }

  async function handleImageAsFile(e) {
    e.persist();
    const imageUrls = pictures;
    console.log(user.uid);
    const file = e.target.files[0];
    const metadata = {
      contentType: "image/jpeg",
    };

    const uploadTask = await firebase.storage
      .ref(`/ads/${user.uid}-${file.name}`)
      .put(file, metadata);

    await uploadTask.ref.getDownloadURL().then(function (downloadURL) {
      imageUrls.push(downloadURL);
    });

    setPictures(imageUrls);
    setPictureFile(file);
  }

  async function createAd() {
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
      imageUrls: pictures,
      phone: values.phone,
      createdOn: Date.now(),
      creator: {
        id: user.uid,
        name: user.displayName,
      },
    };
    console.log(newAd);
    await firebase.db.collection("ads").add(newAd);
    props.history.push("/");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} sm={3} controlId="brand">
          <Form.Label>Brand</Form.Label>
          <Form.Control as="select" name="brand" onChange={handleBrandChange}>
            <option key="" value={JSON.stringify({ models: [] })}>
              Select Brand
            </option>
            {brands.map((b, i) => (
              <option key={i} value={JSON.stringify(b)}>
                {b.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} sm={3} controlId="model">
          <Form.Label>Model</Form.Label>
          <Form.Control as="select" name="model" onChange={handleChange}>
            <option key="" value="">
              Select Model
            </option>
            {models.map((b, index) => (
              <option key={index} value={b}>
                {b}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} sm={3} controlId="modification">
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
            <option key="select category">Select Category</option>
            <option key="Estate">Estate</option>
            <option key="Hatchback">Hatchback</option>
            <option key="Coupe">Coupe</option>
            <option key="Van">Van</option>
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
        <Form.Group as={Col} sm={5} controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows="4"
            name="description"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group as={Col} sm={1}>
          <Form.Label>Add Photos</Form.Label>
          <Form.File
            onChange={handleImageAsFile}
            name="image"
            type="file"
            id="add-picture"
          />
        </Form.Group>
        <div as={Col} sm={3}>
          {pictures.map((p, i) => (
            <img
              className={styles["image-preview"]}
              key={i}
              src={p}
              alt="pic"
            />
          ))}
        </div>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} sm={3} controlId="phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            name="phone"
            onChange={handleChange}
            placeholder="Enter Phone Number"
          />
        </Form.Group>
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

export default withRouter(AdForm);
