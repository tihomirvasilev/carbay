import React, { useContext, useEffect, useState } from "react";
import randomString from "crypto-random-string";
import { withRouter } from "react-router-dom";
import { Form, Col, Button, Row } from "react-bootstrap";
import { FirebaseContext } from "../../firebase";
import Title from "../../components/title";
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

const CreateAdPage = ({ history }) => {
  //TODO: VALIDATIONS
  const { firebase, currentUser } = useContext(FirebaseContext);
  const userData = JSON.parse(localStorage.getItem("authUser"));
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
  } = FormValidation(INITIAL_STATE, validateAd, createAd);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [options, setOptions] = useState([]);
  const [currentOptions, setCurrentOptions] = useState([]);
  const [years, setYears] = useState([]);
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    firebase.getCollectionDocs("brands", setBrands);
    firebase.getCollectionDocs("options", setOptions);

    func.generateYearsTillNow(1970, setYears);
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

  async function createAd() {
    try {
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
        creatorId: currentUser.uid,
        creatorName: userData.displayName,
      };
      console.log(newAd);
      console.log(errors);
      if (Object.keys(errors).length === 0) {
        await firebase.db.collection("ads").add(newAd);
        history.push("/");
      }
    } catch (e) {}
  }

  return (
    <>
      <Title title="Нова Обява" />
      <Form onSubmit={handleSubmit}>
        <h5>Информация</h5>
        <hr />
        <Form.Row>
          <Form.Group as={Col} sm={4} controlId="brand">
            <Form.Label>Марка</Form.Label>
            <Form.Control
              as="select"
              name="brand"
              onChange={handleBrandChange}
              onBlur={handleBlur}
            >
              <option key="" value={JSON.stringify({ models: [] })}>
                Избери Марка
              </option>
              {brands.map((b, i) => (
                <option key={i} value={JSON.stringify(b)}>
                  {b.name}
                </option>
              ))}
            </Form.Control>
            {errors["brand"] && (
              <p className={styles.error}>{errors["brand"]}</p>
            )}
          </Form.Group>
          <Form.Group as={Col} sm={4} controlId="model">
            <Form.Label>Модел</Form.Label>
            <Form.Control
              as="select"
              name="model"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option key="" value="">
                Избери Модел
              </option>
              {models.map((b, index) => (
                <option key={index} value={b}>
                  {b}
                </option>
              ))}
            </Form.Control>
            {errors["model"] && (
              <p className={styles.error}>{errors["model"]}</p>
            )}
          </Form.Group>
          <Form.Group as={Col} sm={4} controlId="modification">
            <Form.Label>Разновидност</Form.Label>
            <Form.Control
              name="modification"
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Разновидност"
            ></Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} sm={3} controlId="category">
            <Form.Label>Категория</Form.Label>
            <Form.Control
              as="select"
              name="category"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option key="select category">Избери категория</option>
              <option key="Estate" value="Estate">
                Комби
              </option>
              <option key="Hatchback" value="Hatchback">
                Хечбек
              </option>
              <option key="Coupe" value="Coupe">
                Купе
              </option>
              <option key="Van" value="Van">
                Ван
              </option>
              <option key="Sedan" value="Sedan">
                Седан
              </option>
            </Form.Control>
            {errors["category"] && (
              <p className={styles.error}>{errors["category"]}</p>
            )}
          </Form.Group>

          <Form.Group as={Col} sm={3} controlId="first-registration">
            <Form.Label>Първа Регистрация</Form.Label>
            <Form.Control
              as="select"
              name="firstRegistration"
              onBlur={handleBlur}
              type="number"
              onChange={handleChange}
            >
              <option>Избери година</option>
              {years.map((y, i) => (
                <option key={i}>{y}</option>
              ))}
            </Form.Control>
            {errors["firstRegistration"] && (
              <p className={styles.error}>{errors["firstRegistration"]}</p>
            )}
          </Form.Group>
          <Form.Group as={Col} sm={3} controlId="milage">
            <Form.Label>Пробег</Form.Label>
            <Form.Control
              name="milage"
              type="number"
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Пробег км."
            />
            {errors["milage"] && (
              <p className={styles.error}>{errors["milage"]}</p>
            )}
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} sm={2} controlId="engine">
            <Form.Label>Гориво</Form.Label>
            <Form.Control
              as="select"
              name="engine"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">Избери гориво</option>
              <option value="Petrol">Бензин</option>
              <option value="Diesel">Дизел</option>
              <option value="LPG">Газ</option>
              <option value="SNG">Метан</option>
            </Form.Control>
            {errors["engine"] && (
              <p className={styles.error}>{errors["engine"]}</p>
            )}
          </Form.Group>

          <Form.Group as={Col} sm={2} controlId="transmission">
            <Form.Label>Скорости</Form.Label>
            <Form.Control
              as="select"
              name="transmission"
              onBlur={handleBlur}
              onChange={handleChange}
            >
              <option key="" value="Select Transmission">
                Избери скорости
              </option>
              <option key="manual" value="manual">
                Ръчни
              </option>
              <option key="automatic" value="automatic">
                Автоматични
              </option>
            </Form.Control>
            {errors["transmission"] && (
              <p className={styles.error}>{errors["transmission"]}</p>
            )}
          </Form.Group>
          <Form.Group as={Col} sm={2} controlId="power">
            <Form.Label>Мощност</Form.Label>
            <Form.Control
              name="power"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Мощност конски сили"
            />
            {errors["power"] && (
              <p className={styles.error}>{errors["power"]}</p>
            )}
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} sm={2} controlId="price">
            <Form.Label>Цена</Form.Label>
            <Form.Control
              name="price"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Цена в лв."
            />
            {errors["price"] && (
              <p className={styles.error}>{errors["price"]}</p>
            )}
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} sm={5}>
            <Form.Label>Добави Снимка</Form.Label>
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
            <Form.Label>Допълнителна Информация</Form.Label>
            <Form.Control
              as="textarea"
              rows="4"
              name="description"
              onChange={handleChange}
            />
          </Form.Group>
        </Form.Row>
        <h5>Допълнителни Екстри</h5>
        <hr />
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
        <h5>Контакти</h5>
        <hr />
        <Form.Row>
          <Form.Group as={Col} sm={3} controlId="phone">
            <Form.Label>Телефон за връзка</Form.Label>
            <Form.Control
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Телефон за връзка..."
            />
            {errors["phone"] && (
              <p className={styles.error}>{errors["phone"]}</p>
            )}
          </Form.Group>
          <Form.Group as={Col} sm={3} controlId="city">
            <Form.Label>Град</Form.Label>{" "}
            <Form.Control
              name="city"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Град.."
            />
            {errors["city"] && <p className={styles.error}>{errors["city"]}</p>}
          </Form.Group>
        </Form.Row>
        <hr />
        <div className={styles["button-container"]}>
          <Button type="submit" className={styles.button}>
            Добави
          </Button>
        </div>
      </Form>
    </>
  );
};

export default withRouter(CreateAdPage);
