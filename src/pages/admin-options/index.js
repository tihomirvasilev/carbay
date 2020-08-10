import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AdminPanelNav from "../../components/admin-nav";
import Layout from "../../components/layout";
import OptionForm from "../../components/option-form";
import OptionsList from "../../components/options-list";
import Title from "../../components/title";

const ModelsAdmin = () => {
  return (
    <Layout>
      <Container>
        <Title title={"Admin Panel"} />
        <AdminPanelNav>
          <Row>
            <Col sm={2} />
            <Col sm={5}>
              <OptionForm />
              <br />
              <OptionsList />
            </Col>
          </Row>
        </AdminPanelNav>
      </Container>
    </Layout>
  );
};

export default ModelsAdmin;
