import React, { useContext, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { FirebaseContext } from "../../firebase";
import BrandForm from "../../components/brand-form";
import BrandsList from "../../components/brands-list";
import AdminLayout from "../../components/admin-layout";

const BrandsAdmin = () => {
  const { firebase } = useContext(FirebaseContext);

  const [brands, setBrands] = useState([]);

  useEffect(() => {
    firebase.getCollectionSnapshotDocs("brands", setBrands);
  }, [firebase]);

  return (
    <AdminLayout>
      <Row>
        <Col sm={2} />
        <Col sm={5}>
          <BrandForm />
          <br />
          <BrandsList brands={brands} />
        </Col>
      </Row>
    </AdminLayout>
  );
};

export default BrandsAdmin;
