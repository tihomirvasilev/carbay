import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { BsFillXOctagonFill, BsFillXDiamondFill } from "react-icons/bs";
import FavoriteButton from "../favorite-button";
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
  handleDelete,
  isCreator = false,
  user,
  currentUser,
}) => {
  const haveButtons = isCreator && currentUser;
  const haveFavorites = !isCreator && currentUser && !haveButtons;
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
              <div>
                <Link to={`/edit/${id}`}>
                  <BsFillXDiamondFill className={styles.button} />
                  <span className={styles["button-name"]}>Edit</span>
                </Link>
              </div>
              <div>
                <Link to="/my-ads" onClick={() => handleDelete(id)}>
                  <BsFillXOctagonFill className={styles.button} />
                  <span className={styles["button-name"]}>Remove</span>
                </Link>
              </div>
            </>
          )}
          {haveFavorites && (
            <FavoriteButton
              user={user}
              currentUser={currentUser}
              adId={id}
              isCreator={isCreator}
            />
          )}
        </Col>
      </Row>
      <hr className={styles.hr} />
    </Container>
  );
};

export default withRouter(Ad);
