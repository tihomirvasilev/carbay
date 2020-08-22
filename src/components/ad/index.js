import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { BsFillXOctagonFill } from "react-icons/bs";
import DeleteButton from "../../components/delete-button";
import EditButton from "../../components/edit-button";

import func from "../../utils/date";
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
  isCreator = false,
  isFavorites = false,
  removeFavorite,
}) => {
  const favorites = !isCreator && isFavorites;
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
          <div className={styles.date}>{func.DateFormat(createdOn)}</div>
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
        <Col lg={2}>
          {isCreator && (
            <>
              <EditButton id={id} />
              <DeleteButton id={id} collection="ads" />
            </>
          )}
          {favorites && (
            <div>
              <Link to="/" onClick={() => removeFavorite(id)}>
                <BsFillXOctagonFill className={styles.button} />
              </Link>
            </div>
          )}
        </Col>
      </Row>
      <hr className={styles.hr} />
    </Container>
  );
};

export default withRouter(Ad);
