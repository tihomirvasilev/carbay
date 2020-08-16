import React, { useContext, useEffect, useState } from "react";
import randomString from "crypto-random-string";
import { withRouter } from "react-router-dom";
import { Form, Col, Button, Row, Container } from "react-bootstrap";
import { FirebaseContext } from "../../firebase";
import Layout from "../../components/layout";
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

const CreateAdPage = (props) => {
  const { firebase, user } = useContext(FirebaseContext);
  const { handleSubmit, handleChange, values, errors } = FormValidation(
    INITIAL_STATE,
    validateAd,
    createAd
  );
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [options, setOptions] = useState([]);
  const [currentOptions, setCurrentOptions] = useState([]);
  const [years, setYears] = useState([]);
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    firebase.getCollectionDocs("brands", setBrands);
    firebase.getCollectionDocs("options", setOptions);

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
  }, [firebase]);

  function handleOptionCheckbox(e) {
    const tempOptions = [...currentOptions];
    const index = tempOptions.indexOf(e.target.name);
    if (index !== -1) {
      tempOptions.splice(index, 1);
    } else {
      tempOptions.push(e.target.name);
    }

    setCurrentOptions([...tempOptions]);
    console.log(tempOptions);
  }

  function handleBrandChange(e) {
    const currentBrand = JSON.parse(e.target.value);
    setModels(currentBrand.models);
    handleChange(e);
  }

  async function handleImageAsFile(e) {
    e.persist();
    const uniqueImageName = randomString({ length: 30, type: "base64" });
    const imageUrls = [...pictures];
    const file = e.target.files[0];
    const metadata = {
      contentType: "image/jpeg",
    };

    const uploadTask = await firebase.storage
      .ref(`/ads/${user.uid}-${uniqueImageName}`)
      .put(file, metadata);

    await uploadTask.ref.getDownloadURL().then(function (downloadURL) {
      imageUrls.push(downloadURL);
    });

    setPictures(imageUrls);
  }

  async function createAd() {
    const newAd = {
      imageUrls: pictures,
      brand: JSON.parse(values.brand).name,
      model: values.model,
      modification: values.modification,
      category: values.category,
      firstRegistration: Number(values.firstRegistration),
      milage: Number(values.milage),
      engine: values.engine,
      transmission: values.transmission,
      power: Number(values.power),
      options: currentOptions,
      price: Number(values.price),
      description: values.description,
      city: values.city,
      phone: values.phone,
      createdOn: Date.now(),
      creatorId: user.uid,
      creatorName: user.displayName,
    };

    await firebase.db.collection("ads").add(newAd);
    props.history.push("/");
  }

  return (
    <Layout>
      <Container className={styles.body}>
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} sm={3} controlId="brand">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                as="select"
                name="brand"
                onChange={handleBrandChange}
              >
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
              <Form.Control
                as="select"
                name="transmission"
                onChange={handleChange}
              >
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
            <Form.Group as={Col} sm={5}>
              <Form.Label>Add Photos</Form.Label>
              <Form.File
                onChange={handleImageAsFile}
                name="image"
                type="file"
                id="add-picture"
              />
            </Form.Group>
            <Col>
              <Row>
                <div as={Col} sm={7}>
                  {pictures.map((p, i) => (
                    <img
                      className={styles["image-preview"]}
                      key={i}
                      src={p}
                      alt="pic"
                    />
                  ))}
                </div>
              </Row>
            </Col>
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
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formBasicCheckbox">
              <Row sm={12}>
                {options.map((option, index) => (
                  <Col key={index} sm={2}>
                    <Form.Check
                      onChange={handleOptionCheckbox}
                      type="checkbox"
                      key={option.id}
                      label={option.name}
                      name={option.name}
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>
          </Form.Row>
          <Button type="submit">Add</Button>
        </Form>
      </Container>
    </Layout>
  );
};

export default withRouter(CreateAdPage);

// import React from "react";

// import { Container } from "react-bootstrap";
// import Layout from "../../components/layout";
// import AdForm from "../../components/ad-form";
// import styles from "./index.module.css";

// const NewAdPage = () => {
//   return (

//   );
// };

// export default NewAdPage;
