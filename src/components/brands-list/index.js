import React, { useContext, useState, useEffect } from "react";
import { FirebaseContext } from "../../firebase";

const BrandsList = () => {
  const { firebase } = useContext(FirebaseContext);

  const [brands, setBrands] = useState([]);

  useEffect(() => {
    firebase.getCollectionSnapshotDocs("brands", setBrands);
  }, [firebase]);

  return (
    <ul>
      {brands.map((b, id) => (
        <li key={b.id}>{b.name}</li>
      ))}
    </ul>
  );
};

export default BrandsList;
