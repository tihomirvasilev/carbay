import React, { useContext, useState, useEffect } from "react";
import FirebaseContext from "../../firebase/context";

const BrandsList = () => {
  const { firebase } = useContext(FirebaseContext);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    getBrands();
  });

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

  return (
    <ul>
      {brands.map((b, id) => (
        <li key={b.id}>{b.name}</li>
      ))}
    </ul>
  );
};

export default BrandsList;
