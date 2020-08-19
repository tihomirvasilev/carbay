import React, { useContext, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { FirebaseContext } from "../../firebase";
import Layout from "../../components/layout";
import Ad from "../../components/ad";

const MyAdsPage = () => {
  const { firebase, currentUser } = useContext(FirebaseContext);
  const [ads, setAds] = useState([]);

  useEffect(() => {
    firebase.getMyAds(currentUser, setAds);
  }, [currentUser, firebase, ads]);

  const handleDelete = async (id) => {
    console.log(id);
    await firebase.deleteAd(id);
  };

  return (
    <Layout>
      {ads.map((ad, index) => (
        <Ad key={index} {...ad} isCreator={true} handleDelete={handleDelete} />
      ))}
    </Layout>
  );
};

export default withRouter(MyAdsPage);
