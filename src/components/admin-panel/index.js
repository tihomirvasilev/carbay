import React from "react";

import { Tab, Row, Col, Nav, Container } from "react-bootstrap";
import BrandForm from "../brand-form";
import BrandsList from "../brands-list";
import ModelForm from "../model-form";
import ModelList from "../models-list";
import OptionForm from "../option-form";
import OptionsList from "../options-list";

import styles from "./index.module.css";

const AdminPanel = () => {
  return (
    <Container>
      <Tab.Container id="tabs" defaultActiveKey="1">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item className={styles["nav-item"]}>
                <Nav.Link eventKey="1" className={styles["nav-link"]}>
                  Brands
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles["nav-item"]}>
                <Nav.Link eventKey="2" className={styles["nav-link"]}>
                  Models
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles["nav-item"]}>
                <Nav.Link eventKey="3" className={styles["nav-link"]}>
                  Options
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles["nav-item"]}>
                <Nav.Link eventKey="4" className={styles["nav-link"]}>
                  Ads
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles["nav-item"]}>
                <Nav.Link eventKey="5" className={styles["nav-link"]}>
                  Users
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="1">
                <h1 className={styles.title}>Brands</h1>
                <BrandForm />
                <br />
                <BrandsList />
              </Tab.Pane>
              <Tab.Pane eventKey="2">
                <h1 className={styles.title}>Models</h1>
                <ModelForm />
                <br />
                <ModelList />
              </Tab.Pane>
              <Tab.Pane eventKey="3">
                <h1 className={styles.title}>Options</h1>
                <OptionForm />
                <br />
                <OptionsList />
              </Tab.Pane>
              <Tab.Pane eventKey="4">
                <h1 className={styles.title}>Ads</h1>
              </Tab.Pane>
              <Tab.Pane eventKey="5">
                <h1 className={styles.title}>Users</h1>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default AdminPanel;
