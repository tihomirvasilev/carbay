import React from "react";

import { Container } from "react-bootstrap";
import Layout from "../../components/layout";
import AdsList from "../../components/ads-list";

const HomePage = () => {
  return (
    <Layout>
      <Container>
        <AdsList />
      </Container>
    </Layout>
  );
};

export default HomePage;
