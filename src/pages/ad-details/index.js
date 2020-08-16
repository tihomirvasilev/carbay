import React, { useEffect, useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import { Container, Carousel } from "react-bootstrap";
import { FirebaseContext } from "../../firebase";
import { Row, Col } from "react-bootstrap";

import Layout from "../../components/layout";
import styles from "./index.module.css";

const INITIAL_STATE = {
  brand: "",
  model: "",
  modification: "",
  category: "",
  milage: "",
  description: "",
  imageUrls: [],
};
const AdDetailsPage = (props) => {
  const { id } = props.match.params;
  const { firebase, user } = useContext(FirebaseContext);

  const [ad, setAd] = useState(INITIAL_STATE);

  useEffect(() => {
    firebase.getDoc("ads", id, setAd);
  }, [firebase, id]);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Layout>
      <Container className={styles.body}>
        <Row lg={12}>
          <Col lg={6}>
            <div>
              {ad.brand} {ad.model} {ad.modification}
              <br />
              {ad.category}
            </div>
            <div>{ad.milage} км.</div>
            <div>{ad.description}</div>
          </Col>
          <Col className={styles.image} lg={6}>
            <Carousel
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
      </Container>
    </Layout>
  );
};

export default withRouter(AdDetailsPage);
