import React from "react";

import { Container } from "react-bootstrap";
import AdminPanelNav from "../../components/admin-panel";
import BackButton from "../../components/back-button";
import Title from "../../components/title";

import styles from "./index.module.css";

const AdminPanelPage = () => {
  return (
    <Container>
      <Title title={"Admin Panel"} />
      <div className={styles["button-container"]}>
        <BackButton />
      </div>
      <AdminPanelNav />
    </Container>
  );
};

export default AdminPanelPage;
