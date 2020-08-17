import React from "react";
import { Row, Col } from "react-bootstrap";

import AdminPanelNav from "../../components/admin-nav";
import Title from "../../components/title";
import Layout from "../../components/layout";

const AdminLayout = ({ children }) => {
  return (
    <Layout>
      <Title title={"Admin Panel"} />
      <AdminPanelNav>
        <Row>
          <Col sm={{ span: 5, offset: 2 }}>{children}</Col>
        </Row>
      </AdminPanelNav>
    </Layout>
  );
};

export default AdminLayout;
