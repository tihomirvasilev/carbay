import React, { useContext, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { FirebaseContext } from "../../firebase";
import AdminPanelNav from "../../components/admin-nav";
import Title from "../../components/title";
import Layout from "../../components/layout";
import BrandForm from "../../components/brand-form";
import BrandsList from "../../components/brands-list";

const BrandsAdmin = () => {
  const { firebase } = useContext(FirebaseContext);

  const [brands, setBrands] = useState([]);

  useEffect(() => {
    firebase.getCollectionSnapshotDocs("brands", setBrands);
  }, [firebase]);

  return (
    <Layout>
      <Title title={"Admin Panel"} />
      <AdminPanelNav>
        <Row>
          <Col sm={2} />
          <Col sm={5}>
            <BrandForm />
            <br />
            <BrandsList brands={brands} />
          </Col>
        </Row>
      </AdminPanelNav>
    </Layout>
  );
};

export default BrandsAdmin;
