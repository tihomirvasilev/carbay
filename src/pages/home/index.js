import React, { useContext, useState, useEffect } from "react";

import { FirebaseContext } from "../../firebase";
import Ad from "../../components/ad";

const HomePage = () => {
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

export default HomePage;
