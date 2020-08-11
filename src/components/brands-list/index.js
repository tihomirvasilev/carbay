import React, { useContext, useState, useEffect } from "react";
import { FirebaseContext } from "../../firebase";

const BrandsList = () => {
  const { firebase } = useContext(FirebaseContext);

  const [brands, setBrands] = useState([]);

  useEffect(() => {
    function getBrands() {
      return firebase.db
        .collection("brands")
        .orderBy("name")
        .onSnapshot(handleSnapshot);
    }

    async function handleSnapshot(snapshot) {
      const brands = await snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setBrands(brands);
    }
    getBrands();
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
