import React from "react";
import { Row, Col } from "react-bootstrap";

import ModelForm from "../../components/model-form";
import AdminLayout from "../../components/admin-layout";

const ModelsAdmin = (params) => {
  return (
    <AdminLayout>
      <Row>
        <Col sm={2} />
        <Col sm={5}>
          <ModelForm />
          <br />
        </Col>
      </Row>
    </AdminLayout>
  );
};

export default ModelsAdmin;
