import React from "react";

const OptionsList = ({ options }) => {
  return (
    <ul>
      {options.map((b, id) => (
        <li key={b.id}>{b.name}</li>
      ))}
    </ul>
  );
};

export default OptionsList;
