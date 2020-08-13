import React from "react";
import { Row, Col, Nav } from "react-bootstrap";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import styles from "./index.module.css";

const Ad = (props) => {
  return (
    <>
      <Row className={styles["ad-card"]}>
        <Col md={2}>
          <img
            className={styles["image-small"]}
            src={props.ad.imageUrls[0]}
            alt="img"
          ></img>
        </Col>
        <Col md={{ span: 3, offset: 1 }}>
          <span className={styles.date}>
            {props.ad.createdOn.toLocaleString()}
          </span>
          <br />
          <a className={styles["car-link"]} href="/">
            <span className={styles["car-name"]}>
              {props.ad.brand} {props.ad.model}
            </span>
          </a>
          <br />
          <span className={styles.milage}>{props.ad.milage} km</span>
          <p className={styles.description}>
            {props.ad.description.substring(0, 90)} ...
          </p>
        </Col>
        <Col md={1}>
          <span>{props.ad.firstRegistration} г.</span>
        </Col>
        <Col md={1}>
          <span>{props.ad.price} лв.</span>
        </Col>
        <Col md={2}>
          <span>{props.ad.creator.name}</span>
          <p>{props.ad.city}</p>
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
