import React from "react";

import { Jumbotron } from "react-bootstrap";
import AdminPanelNav from "../../components/admin-nav";
import Title from "../../components/title";
import Layout from "../../components/layout";

const AdminPage = () => {
  return (
    <Layout>
      <Title title={"Admin Panel"} />
      <AdminPanelNav>
        <Jumbotron>Hello, Administrator!</Jumbotron>
      </AdminPanelNav>
    </Layout>
  );
};

export default AdminPage;
