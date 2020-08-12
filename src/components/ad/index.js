import React from "react";
import { Row, Col, Nav } from "react-bootstrap";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import styles from "./index.module.css";

const Ad = () => {
  return (
    <>
      <Row className={styles["ad-card"]}>
        <Col md={2}>
          <img
            className={styles["image-small"]}
            src="https://firebasestorage.googleapis.com/v0/b/carbay-b65be.appspot.com/o/ads%2FVEPWlWhrkFQ561yuadLEG2QlG923-car.jpg?alt=media&token=d406df55-e059-485d-a181-0131a39bff96"
          ></img>
        </Col>
        <Col md={{ span: 3, offset: 1 }}>
          <span className={styles.date}>today, 01:13</span>
          <br />
          <a className={styles["car-link"]} href="/">
            <span className={styles["car-name"]}>VW GOLF</span>
          </a>
          <br />
          <span className={styles.milage}>185 000 km</span>
          <p className={styles.description}>
            Перфектно техническо състояние. Без ражди и драскотини. Всичко с
            което е оборудван автомобила работи е оборудван автомобила работи е
            оборудван автомобила работи
          </p>
        </Col>
        <Col md={1}>
          <span>2005 g.</span>
        </Col>
        <Col md={1}>
          <span>7 000 lv.</span>
        </Col>
        <Col md={2}>
          <span>Tihomir Vasilev</span>
          <p>Varna</p>
        </Col>
        <Col xs={0} md={1}>
          <Nav.Link className={styles.fav}>
            <BsHeart />
            <BsHeartFill />
          </Nav.Link>
        </Col>
      </Row>
      <hr className={styles.hr} />
    </>
  );
};

export default Ad;
