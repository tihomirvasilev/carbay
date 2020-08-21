import React from "react";
import { Row, Col } from "react-bootstrap";

import AdminPanelNav from "../../components/admin-nav";
import Title from "../../components/title";

const AdminLayout = ({ children }) => {
  return (
    <>
      <Title title={"Admin Panel"} />
      <AdminPanelNav>
        <Row>
          <Col sm={{ span: 5, offset: 2 }}>{children}</Col>
        </Row>
      </AdminPanelNav>
    </>
  );
};

export default AdminLayout;
