import React, { useState, useEffect } from "react";
import FirebaseContext from "../../firebase/context";

const BrandsList = (props) => {
  const { firebase } = React.useContext(FirebaseContext);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    getBrands();
  }, []);

  function getBrands() {
    return firebase.db.collection("brands").onSnapshot(handleSnapshot);
  }

  async function handleSnapshot(snapshot) {
    const brands = await snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    setBrands(brands);
  }

  return (
    <div>
      {brands.map((b, id) => (
        <h4 key={b.id}>
          {id}.{b.name}
        </h4>
      ))}
    </div>
  );
};

export default BrandsList;
