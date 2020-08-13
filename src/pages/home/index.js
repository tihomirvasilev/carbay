import React from "react";

import { Container } from "react-bootstrap";
import Layout from "../../components/layout";
import AdsList from "../../components/ads-list";

import styles from "./index.module.css";

const HomePage = () => {
  return (
    <Layout>
      <Container className={styles.body}>
        <AdsList />
      </Container>
    </Layout>
  );
};

export default HomePage;
