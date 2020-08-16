import React from "react";

import { Container } from "react-bootstrap";
import Layout from "../../components/layout";
import AdForm from "../../components/ad-form";
import styles from "./index.module.css";

const NewAdPage = () => {
  return (
    <Layout>
      <Container className={styles.body}>
        <AdForm />
      </Container>
    </Layout>
  );
};

export default NewAdPage;
