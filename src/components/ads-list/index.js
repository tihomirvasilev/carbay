import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../../firebase";

import Ad from "../ad";

const AdsList = (props) => {
  const { firebase } = useContext(FirebaseContext);
  const [ads, setAds] = useState([]);

  useEffect(() => {
    function getAds() {
      return firebase.db.collection("ads").onSnapshot(handleSnapshot);
    }

    async function handleSnapshot(snapshot) {
      const adsDb = await snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setAds(adsDb);
      console.log(adsDb);
    }
    getAds();
  }, [firebase]);

  return (
    <>
      {ads.map((ad, index) => (
        <Ad key={index} ad={ad} />
      ))}
    </>
  );
};

export default AdsList;
