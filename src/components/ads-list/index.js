import React from "react";
import Ad from "../ad";

const AdsList = ({ ads, isCreator, handleDelete }) => {
  return (
    <>
      {ads.map((ad, index) => (
        <Ad
          key={index}
          {...ad}
          isCreator={isCreator}
          handleDelete={handleDelete}
        />
      ))}
    </>
  );
};

export default AdsList;
