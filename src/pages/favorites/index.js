import React, { useContext, useState, useEffect } from "react";
import Layout from "../../components/layout";
import Ad from "../../components/ad";
import { FirebaseContext } from "../../firebase";

const FavoritesPage = () => {
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

export default FavoritesPage;
