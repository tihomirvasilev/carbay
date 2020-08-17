import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import FavoriteButton from "../favorite-button";
import DateFormat from "../../utils/date";
import styles from "./index.module.css";

const Ad = ({
  id,
  imageUrls,
  createdOn,
  brand,
  model,
  milage,
  description,
  firstRegistration,
  price,
  city,
}) => {
  return (
    <Container fluid>
      <Row className={styles["ad-wrapper"]}>
        <Col lg={{ span: 2, offset: 1 }}>
          <Link className={styles["car-link"]} id={id} to={"/ad/" + id}>
            <img
              className={styles["thumbnail"]}
              src={imageUrls[0]}
              alt="img"
            ></img>
          </Link>
        </Col>
        <Col lg={4}>
          <div className={styles.date}>{DateFormat(createdOn)}</div>
          <Link className={styles["car-link"]} id={id} to={"/ad/" + id}>
            <div className={styles["bold-lg"]}>
              {brand} {model}
            </div>
          </Link>
          <div className={styles.milage}>{milage} км.</div>
          <p className={styles.description}>
            {description.substring(0, 65)} ...
          </p>
        </Col>
        <Col lg={1}>
          <div className={styles["first-reg"]}>{firstRegistration} г.</div>
        </Col>
        <Col lg={1}>
          <div className={styles["bold-md"]}>{price} лв.</div>
        </Col>
        <Col lg={1}>
          <div className={styles["bold-md"]}>{city}</div>
        </Col>
        <Col lg={1}>
          <FavoriteButton />
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(Ad);
