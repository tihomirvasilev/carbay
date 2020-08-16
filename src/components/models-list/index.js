import React from "react";

const ModelsList = ({ models }) => {
  return (
    <ul>
      {models.map((model, index) => (
        <li key={index}>{model}</li>
      ))}
    </ul>
  );
};

export default ModelsList;
