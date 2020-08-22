import React, { useContext, useState, useEffect } from "react";
import * as firestore from "firebase/app";
import { FirebaseContext } from "../../firebase";
import Ad from "../../components/ad";

const FavoritesPage = (props) => {
  const { firebase } = useContext(FirebaseContext);
  const [ads, setAds] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getAds() {
      const currentUser = JSON.parse(localStorage.getItem("authUser"));
      setUser(currentUser);
      const listIds = currentUser.favorites;

      const adsRef = firebase.db.collection("ads");

      const adsList = (
        await Promise.all(listIds.map((id) => adsRef.doc(id).get()))
      )
        .filter((doc) => doc.exists)
        .map((doc) => ({ id: doc.id, ...doc.data() }));
      setAds(adsList);
    }

    getAds();
  }, [firebase]);

  async function handleRemoveFavorite(id) {
    const currentUser = JSON.parse(localStorage.getItem("authUser"));
    const userRef = firebase.db.collection("users").doc(user.id);

    await userRef.update({
      favorites: firestore.firestore.FieldValue.arrayRemove(id),
    });

    currentUser.favorites.splice(currentUser.favorites.indexOf(id), 1);
    localStorage.setItem("authUser", JSON.stringify(currentUser));
  }

  return (
    <>
      {ads.map((ad, index) => (
        <Ad
          key={index}
          {...ad}
          isFavorites={true}
          removeFavorite={handleRemoveFavorite}
        />
      ))}
    </>
  );
};

export default FavoritesPage;
