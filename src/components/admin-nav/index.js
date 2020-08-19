import React from "react";
import { Tab, Row, Col, Nav, Container } from "react-bootstrap";

import GC from "../../constants";
import styles from "./index.module.css";

const AdminNav = (props) => {
  return (
    <Container>
      <Tab.Container id="tabs" defaultActiveKey="1">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item className={styles["nav-item"]}>
                <Nav.Link
                  href={GC.ROUTES.ADMIN.BRANDS}
                  className={styles["nav-link"]}
                >
                  Brands
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles["nav-item"]}>
                <Nav.Link
                  href={GC.ROUTES.ADMIN.MODELS}
                  className={styles["nav-link"]}
                >
                  Models
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles["nav-item"]}>
                <Nav.Link
                  href={GC.ROUTES.ADMIN.OPTIONS}
                  className={styles["nav-link"]}
                >
                  Options
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles["nav-item"]}>
                <Nav.Link
                  href={GC.ROUTES.ADMIN.ADS}
                  className={styles["nav-link"]}
                >
                  Ads
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <div>{props.children}</div>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default AdminNav;
