import React from "react";

import { Container, Jumbotron } from "react-bootstrap";
import AdminPanelNav from "../../components/admin-nav";
import Title from "../../components/title";
import Layout from "../../components/layout";
import styles from "./index.module.css";

const AdminPage = () => {
  return (
    <Layout>
      <Container>
        <Title title={"Admin Panel"} />
        <AdminPanelNav>
          <Jumbotron>Hello, Admin!</Jumbotron>
        </AdminPanelNav>
      </Container>
    </Layout>
  );
};

export default AdminPage;
