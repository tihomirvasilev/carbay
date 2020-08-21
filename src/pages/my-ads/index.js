import React, { useContext, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { FirebaseContext } from "../../firebase";
import Ad from "../../components/ad";

const MyAdsPage = ({ history }) => {
  const { firebase } = useContext(FirebaseContext);
  const currentUser = JSON.parse(localStorage.getItem("authUser"));
  const id = currentUser.uid;
  const [ads, setAds] = useState([]);

  useEffect(() => {
    firebase.getMyAds(id, setAds);
  }, [firebase, id]);

  const handleDelete = async (id) => {
    await firebase.deleteAd(id);
    history.push("/my-ads");
  };

  return (
    <>
      {ads.map((ad, index) => (
        <Ad key={index} {...ad} isCreator={true} handleDelete={handleDelete} />
      ))}
    </>
  );
};

export default withRouter(MyAdsPage);
