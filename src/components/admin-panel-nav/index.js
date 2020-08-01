import React from "react";

import { Tab, Row, Col, Nav, Container } from "react-bootstrap";

import styles from "./index.module.css";

const AdminPanelNav = () => {
  return (
    <Container>
      <Tab.Container id="tabs" defaultActiveKey="1">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item className={styles["color-nav-item"]}>
                <Nav.Link eventKey="1" className={styles["color-orangered"]}>
                  Brands
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles["color-nav-item"]}>
                <Nav.Link eventKey="2" className={styles["color-orangered"]}>
                  Models
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles["color-nav-item"]}>
                <Nav.Link eventKey="3" className={styles["color-orangered"]}>
                  Extras
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles["color-nav-item"]}>
                <Nav.Link eventKey="4" className={styles["color-orangered"]}>
                  All Ads
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles["color-nav-item"]}>
                <Nav.Link eventKey="5" className={styles["color-orangered"]}>
                  All Users
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="1">
                <h1>Brands</h1>
              </Tab.Pane>
              <Tab.Pane eventKey="2">
                <h1>Models</h1>
              </Tab.Pane>
              <Tab.Pane eventKey="3">
                <h1>Extras</h1>
              </Tab.Pane>
              <Tab.Pane eventKey="4">
                <h1>All Ads</h1>
              </Tab.Pane>
              <Tab.Pane eventKey="5">
                <h1>All Users</h1>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default AdminPanelNav;
