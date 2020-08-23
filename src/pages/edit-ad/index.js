import React, { useContext, useEffect, useState } from "react";
import randomString from "crypto-random-string";
import { withRouter } from "react-router-dom";
import { Form, Col, Button, Row } from "react-bootstrap";
import { FirebaseContext } from "../../firebase";
import FormValidation from "../../utils/from-validation";
import validateAd from "./validateAd";
import func from "../../utils/date";
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

const EditAdPage = (props) => {
  const id = props.match.params.id;
  const { firebase, currentUser } = useContext(FirebaseContext);
  const [ad, setAd] = useState(INITIAL_STATE);
  const [years, setYears] = useState([]);
  const [pictures, setPictures] = useState([]);
  const [currentValues, setCurrentValues] = useState([]);

  const { handleSubmit } = FormValidation(ad, validateAd, updateAd);

  useEffect(() => {
    firebase.getEditAd("ads", id, setAd, setPictures, setCurrentValues);
    func.generateYearsTillNow(1960, setYears);
  }, [firebase, id]);

  function handleEdit(event) {
    event.persist();
    setCurrentValues((previousValues) => ({
      ...previousValues,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleImageAsFile(e) {
    e.persist();
    const uniqueImageName = randomString({ length: 10, type: "base64" });
    const imageUrls = [...pictures];
    const file = e.target.files[0];
    const metadata = {
      contentType: "image/jpeg",
    };

    const uploadTask = await firebase.storage
      .ref(`/ads/${currentUser.uid}/-${uniqueImageName}`)
      .put(file, metadata);

    await uploadTask.ref.getDownloadURL().then(function (downloadURL) {
      imageUrls.push(downloadURL);
    });

    setPictures(imageUrls);
  }

  async function updateAd() {
    const updatedData = {
      imageUrls:
        ad.imageUrls.length !== pictures.length ? [...pictures] : ad.imageUrls,
      modification: currentValues.modification
        ? currentValues.modification
        : ad.modification,
      category: currentValues.category ? currentValues.category : ad.category,
      firstRegistration: currentValues.firstRegistration
        ? currentValues.firstRegistration
        : ad.firstRegistration,
      milage: currentValues.milage ? currentValues.milage : ad.milage,
      engine: currentValues.engine ? currentValues.engine : ad.engine,
      transmission: currentValues.transmission
        ? currentValues.transmission
        : ad.transmission,
      power: currentValues.power ? currentValues.power : ad.power,
      price: +currentValues.price ? +currentValues.price : +ad.price,
      description: currentValues.description
        ? currentValues.description
        : ad.description,
      city: currentValues.city ? currentValues.city : ad.city,
      phone: currentValues.phone ? currentValues.phone : ad.phone,
    };
    await firebase.updateDoc("ads", id, updatedData);
    props.history.push("/my-ads");
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} sm={3} controlId="brand">
            <Form.Label>Brand</Form.Label>
            <Form.Control as="select" name="brand" disabled value={ad.brand}>
              <option disabled key="" value={ad.brand}>
                {currentValues.brand}
              </option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} sm={3} controlId="model">
            <Form.Label>Model</Form.Label>
            <Form.Control as="select" name="model" disabled value={ad.model}>
              <option disabled key="" value={ad.model}>
                {currentValues.model}
              </option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} sm={3} controlId="modification">
            <Form.Label>Modification</Form.Label>
            <Form.Control
              name="modification"
              onChange={handleEdit}
              placeholder="Modification"
              value={currentValues.modification}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} sm={3} controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control as="select" name="category" onChange={handleEdit}>
              <option key="select category" value={ad.category}>
                {currentValues.category}
              </option>
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
              onChange={handleEdit}
              value={currentValues.firstRegistration}
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
              onChange={handleEdit}
              placeholder="Enter Milage"
              value={currentValues.milage}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} sm={2} controlId="engine">
            <Form.Label>Engine</Form.Label>
            <Form.Control
              as="select"
              name="engine"
              onChange={handleEdit}
              value={currentValues.engine}
            >
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
              onChange={handleEdit}
              value={currentValues.transmission}
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
              onChange={handleEdit}
              placeholder="Enter Power"
              value={currentValues.power}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} sm={2} controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              name="price"
              type="number"
              onChange={handleEdit}
              placeholder="Enter Price"
              value={currentValues.price}
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
              onChange={handleEdit}
              value={currentValues.description}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} sm={3} controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              name="phone"
              onChange={handleEdit}
              placeholder="Enter Phone Number"
              value={currentValues.phone}
            />
          </Form.Group>
          <Form.Group as={Col} sm={3} controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              name="city"
              onChange={handleEdit}
              value={currentValues.city}
              placeholder="Enter City"
            />
          </Form.Group>
        </Form.Row>{" "}
        <hr />
        <div className={styles["button-container"]}>
          <Button type="submit" className={styles.button}>
            Запази
          </Button>
        </div>
      </Form>
    </>
  );
};

export default withRouter(EditAdPage);
