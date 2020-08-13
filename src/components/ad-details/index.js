import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { FirebaseContext } from "../../firebase";
import styles from "./index.module.css";

const AdDetails = ({ brand, imageUrls }, props) => {
  return (
    <Row>
      <Col sm={6}>
        <h1>{brand}</h1>
      </Col>
    </Row>
  );
};

export default withRouter(AdDetails);
