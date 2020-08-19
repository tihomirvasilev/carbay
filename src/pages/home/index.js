import React, { useContext, useState, useEffect } from "react";

import { FirebaseContext } from "../../firebase";
import Layout from "../../components/layout";
import Ad from "../../components/ad";

const HomePage = () => {
  const { firebase } = useContext(FirebaseContext);
  const [ads, setAds] = useState([]);

  useEffect(() => {
    firebase.getCollectionDocs("ads", setAds);
  }, [firebase]);

  return (
    <Layout>
      {ads.map((ad, index) => (
        <Ad key={index} {...ad} />
      ))}
    </Layout>
  );
};

export default HomePage;
