import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../../firebase";

import Ad from "../ad";

const AdsList = (props) => {
  const { firebase } = useContext(FirebaseContext);
  const [ads, setAds] = useState([]);

  useEffect(() => {
    firebase.getCollectionDocs("ads", setAds);
  }, [firebase]);

  return (
    <>
      {ads.map((ad, index) => (
        <Ad key={index} {...ad} />
      ))}
    </>
  );
};

export default AdsList;
