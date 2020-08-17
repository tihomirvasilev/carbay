import React, { useContext, useState, useEffect } from "react";
import Layout from "../../components/layout";
import AdsList from "../../components/ads-list";
import { FirebaseContext } from "../../firebase";

const FavoritesPage = () => {
  const { firebase } = useContext(FirebaseContext);
  const [ads, setAds] = useState([]);

  useEffect(() => {
    firebase.getCollectionDocs("ads", setAds);
  }, [firebase]);

  return (
    <Layout>
      <AdsList ads={ads} />
    </Layout>
  );
};

export default FavoritesPage;
