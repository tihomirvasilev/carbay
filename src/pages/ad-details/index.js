import React, { useEffect, useContext, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { BsFillStarFill } from "react-icons/bs";
import { FirebaseContext } from "../../firebase";
import { Row, Col } from "react-bootstrap";

import styles from "./index.module.css";

const INITIAL_STATE = {
  brand: "",
  model: "",
  modification: "",
  category: "",
  milage: "",
  description: "",
  imageUrls: [],
  options: [],
};
const AdDetailsPage = (props) => {
  const { id } = props.match.params;
  const { firebase, currentUser } = useContext(FirebaseContext);

  const [ad, setAd] = useState(INITIAL_STATE);

  useEffect(() => {
    firebase.getDoc("ads", id, setAd);
  }, [firebase, id]);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  async function addToFavorites() {
    const favorites = currentUser.favorites;

    if (!favorites.includes(id)) {
      favorites.push(id);
      currentUser.favorites = favorites;
      localStorage.setItem("authUser", JSON.stringify(currentUser));
      const brandRef = firebase.db.collection("users").doc(currentUser.id);
      await brandRef.update({
        favorites: favorites,
      });
    }
  }

  return (
    <>
      <Row md={12}>
        <Col md={6}>
          <Row>
            <Col md={6}>
              <h4>
                {ad.brand} {ad.model} {ad.modification}
              </h4>
            </Col>
            {currentUser && (
              <Col md={6}>
                <Link to="/favorites" onClick={addToFavorites}>
                  <BsFillStarFill className={styles.favorites} />{" "}
                  <span className={styles["button-name"]}>
                    Добави към Бележник
                  </span>
                </Link>
              </Col>
            )}
          </Row>
          <hr />
          <Row>
            <Col md={6}>
              <span>Цена: {ad.price} лв. </span>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <span>Първа регистрация: {ad.firstRegistration} г.</span>
            </Col>
            <Col md={6}>
              <span>Пробег: {ad.milage} км.</span>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <span>Категория: {ad.category} </span>
            </Col>
            <Col md={6}>
              <span>Скорости: {ad.transmission} </span>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <span>Гориво: {ad.engine} </span>
            </Col>
            <Col md={6}>
              <span>Мощност: {ad.power} кс.</span>
            </Col>
          </Row>
          <hr />
          <h5>Особенности и екстри:</h5>
          <Row>
            {ad.options.map((option, index) => (
              <Col key={index} md={4}>
                <span>{option}</span>
              </Col>
            ))}
          </Row>
          <hr />
          <h5>Информация: </h5>
          <p className={styles.text}>{ad.description}</p>
          <hr />
          <h5>За Контакти: </h5>
          <p>
            <span>{ad.phone}</span> - <span>{ad.creatorName}</span>
          </p>
        </Col>
        <Col className={styles.image} md={6}>
          <Carousel
            fade={true}
            interval={null}
            activeIndex={index}
            onSelect={handleSelect}
          >
            {ad.imageUrls.map((image, index) => (
              <Carousel.Item key={index}>
                <img className="d-block w-100" src={image} alt="" />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </>
  );
};

export default withRouter(AdDetailsPage);
