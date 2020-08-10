import React from "react";
import BrandForm from "../../components/brand-form";
import BrandsList from "../../components/brands-list";

import { Container, Row, Col } from "react-bootstrap";
import AdminPanelNav from "../../components/admin-nav";
import Title from "../../components/title";
import Layout from "../../components/layout";

const BrandsAdmin = (params) => {
  return (
    <Layout>
      <Container>
        <Title title={"Admin Panel"} />
        <AdminPanelNav>
          <Row>
            <Col sm={2} />
            <Col sm={5}>
              <BrandForm />
              <br />
              <BrandsList />
            </Col>
          </Row>
        </AdminPanelNav>
      </Container>
    </Layout>
  );
};

export default BrandsAdmin;
