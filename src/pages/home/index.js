import React, { useContext, useState, useEffect } from "react";

import { FirebaseContext } from "../../firebase";
import Ad from "../../components/ad";

const HomePage = (props) => {
  const { firebase } = useContext(FirebaseContext);
  const [ads, setAds] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem("authUser"));
  const [user, setUser] = useState(null);
  const [isCreator, setIsCreator] = useState(false);

  useEffect(() => {
    firebase.getCollectionDocs("ads", setAds);
    async function getUserFromDb() {
      if (currentUser) {
        const user = await firebase.getUserById(currentUser.uid);
        setUser(user);
      }
    }
    getUserFromDb();
  }, [firebase, currentUser]);

  return (
    <>
      {ads.map((ad, index) => (
        <Ad
          key={index}
          {...ad}
          currentUser={currentUser}
          user={user}
          isCreator={isCreator}
        />
      ))}
    </>
  );
};

export default HomePage;
