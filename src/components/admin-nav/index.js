import React from "react";

import { Tab, Row, Col, Nav, Container } from "react-bootstrap";
import BrandForm from "../brand-form";
import BrandsList from "../brands-list";
import ModelForm from "../model-form";
import ModelList from "../models-list";
import OptionForm from "../option-form";
import OptionsList from "../options-list";

import styles from "./index.module.css";

const AdminNav = (props) => {
  return (
    <Container>
      <Tab.Container id="tabs" defaultActiveKey="1">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item className={styles["nav-item"]}>
                <Nav.Link href="/admin/brands" className={styles["nav-link"]}>
                  Brands
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles["nav-item"]}>
                <Nav.Link href="/admin/models" className={styles["nav-link"]}>
                  Models
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles["nav-item"]}>
                <Nav.Link href="/admin/options" className={styles["nav-link"]}>
                  Options
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles["nav-item"]}>
                <Nav.Link href="/admin/ads" className={styles["nav-link"]}>
                  Ads
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles["nav-item"]}>
                <Nav.Link href="/admin/users" className={styles["nav-link"]}>
                  Users
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
