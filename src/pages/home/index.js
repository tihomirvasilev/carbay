import React, { useContext, useState, useEffect } from "react";

import { FirebaseContext } from "../../firebase";
import Layout from "../../components/layout";
import AdsList from "../../components/ads-list";

const HomePage = (props) => {
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

export default HomePage;
