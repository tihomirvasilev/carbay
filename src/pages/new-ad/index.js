import React from "react";

import { Container } from "react-bootstrap";
import Layout from "../../components/layout";
import AdForm from "../../components/ad-form";

const NewAdPage = () => {
  return (
    <Layout>
      <Container>
        <AdForm />
      </Container>
    </Layout>
  );
};

export default NewAdPage;
