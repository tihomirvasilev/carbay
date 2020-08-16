import React from "react";

const BrandsList = ({ brands }) => {
  return (
    <ul>
      {brands.map((b, id) => (
        <li key={b.id}>{b.name}</li>
      ))}
    </ul>
  );
};

export default BrandsList;
