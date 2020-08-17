import React from "react";
import { Row, Col } from "react-bootstrap";

import AdminPanelNav from "../../components/admin-nav";
import Layout from "../../components/layout";
import ModelForm from "../../components/model-form";
import Title from "../../components/title";

const ModelsAdmin = (params) => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default ModelsAdmin;
