import React from "react";
import ModelForm from "../../components/model-form";
import ModelsList from "../../components/models-list";

import { Container, Row, Col } from "react-bootstrap";
import AdminPanelNav from "../../components/admin-nav";
import Title from "../../components/title";
import Layout from "../../components/layout";

const ModelsAdmin = (params) => {
  return (
    <Layout>
      <Container>
        <Title title={"Admin Panel"} />
        <AdminPanelNav>
          <Row>
            <Col sm={2} />
            <Col sm={5}>
              <ModelForm />
              <br />
            </Col>
          </Row>
        </AdminPanelNav>
      </Container>
    </Layout>
  );
};

export default ModelsAdmin;
