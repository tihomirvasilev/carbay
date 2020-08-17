import React, { useContext, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { FirebaseContext } from "../../firebase";
import Layout from "../../components/layout";
import AdsList from "../../components/ads-list";

const MyAdsPage = () => {
  const { firebase, currentUser } = useContext(FirebaseContext);
  const [ads, setAds] = useState([]);

  useEffect(() => {
    firebase.getMyAds(currentUser, setAds);
  }, [currentUser, firebase]);

  return <Layout>{currentUser && <AdsList ads={ads} />}</Layout>;
};

export default withRouter(MyAdsPage);
