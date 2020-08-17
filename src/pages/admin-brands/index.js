import React, { useContext, useEffect, useState } from "react";

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
      <BrandForm />
      <br />
      <BrandsList brands={brands} />
    </AdminLayout>
  );
};

export default BrandsAdmin;
