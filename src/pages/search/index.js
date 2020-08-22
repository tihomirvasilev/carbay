import React, { useEffect, useContext, useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { FirebaseContext } from "../../firebase";
import FormValidation from "../../utils/from-validation";
import validateSearch from "./validateSearch";
import Ad from "../../components/ad";

import styles from "./index.module.css";

const INITIAL_STATE = {
  brand: "",
  model: "",
  engine: "",
  price: "",
};

const Search = () => {
  const { firebase } = useContext(FirebaseContext);

  const { handleSubmit, handleChange, values, errors } = FormValidation(
    INITIAL_STATE,
    validateSearch,
    doSearch
  );
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [currentBrand, setCurrentBrand] = useState(null);
  const [ads, setAds] = useState([]);

  useEffect(() => {
    firebase.getCollectionSnapshotDocs("brands", setBrands);
  }, [firebase, ads]);

  async function doSearch() {
    console.log(errors);
    if (Object.keys(errors).length === 0) {
      const ads = [];
      const model = values.model;
      const engine = values.engine;
      const price = +values.price;
      const ref = firebase.db
        .collection("ads")
        .where("brand", "==", currentBrand)
        .where("model", "==", model)
        .where("price", "<=", price)
        .where("engine", "==", engine);

      await ref.get().then((qs) => {
        qs.forEach((doc) => {
          ads.push({ id: doc.id, ...doc.data() });
        });
      });
      setAds(ads);
      console.log(ads);
    }
  }

  function handleBrandChange(e) {
    const currentBrand = JSON.parse(e.target.value);
    setModels(currentBrand.models);
    setCurrentBrand(currentBrand.name);
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Row className={styles.search}>
          <Form.Group as={Col} sm={3} controlId="brand">
            <Form.Control as="select" name="brand" onChange={handleBrandChange}>
              <option key="" value="brand">
                -- Марка --
              </option>
              {brands.map((b, i) => (
                <option key={i} value={JSON.stringify(b)}>
                  {b.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} sm={3} controlId="model">
            {errors["model"] && (
              <Form.Label className={styles.error}>
                {errors["model"]}
              </Form.Label>
            )}
            <Form.Control
              as="select"
              name="model"
              onChange={handleChange}
              value={values.model}
            >
              <option key="" value="">
                -- Модел --
              </option>
              {models.map((b, index) => (
                <option key={index} value={b}>
                  {b}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} sm={3} controlId="engine">
            {errors["engine"] && (
              <Form.Label className={styles.error}>
                {errors["engine"]}
              </Form.Label>
            )}
            <Form.Control
              as="select"
              name="engine"
              onChange={handleChange}
              value={values.engine}
            >
              <option value="">--Гориво--</option>
              <option value="Petrol">Бензин</option>
              <option value="Diesel">Дизел</option>
              <option value="LPG">Газ</option>
              <option value="SNG">Метан</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} sm={3} controlId="model">
            {errors["price"] && (
              <Form.Label className={styles.error}>
                {errors["price"]}
              </Form.Label>
            )}
            <Form.Control
              name="price"
              type="number"
              placeholder="До Цена в лв."
              onChange={handleChange}
              value={values.price}
            ></Form.Control>
          </Form.Group>
        </Form.Row>
        <div className={styles["button-container"]}>
          <Button className={styles.button} type="submit">
            Търси
          </Button>
        </div>
      </Form>
      {ads.map((ad, index) => (
        <Ad key={index} {...ad} />
      ))}
    </>
  );
};

export default Search;
