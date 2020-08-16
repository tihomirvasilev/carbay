import React from "react";
import Ad from "../ad";

const AdsList = ({ ads }) => {
  return (
    <>
      {ads.map((ad, index) => (
        <Ad key={index} {...ad} />
      ))}
    </>
  );
};

export default AdsList;
