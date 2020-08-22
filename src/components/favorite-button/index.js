import React, { useState, useEffect } from "react";
import { BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import firebase from "../../firebase";

import styles from "./index.module.css";

const FavoriteButton = ({ currentUser, adId }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [userDb, setUserDb] = useState(currentUser);

  useEffect(() => {}, [isFavorite]);

  async function removeFromFavorites() {
    const user = await firebase.getUserById(userDb.uid);
    setUserDb(user);
    let favs = user.favorites;
    favs.splice(favs.indexOf(adId), 1);

    const brandRef = firebase.db.collection("users").doc(currentUser.docId);
    await brandRef.update({
      favorites: favs,
    });
    setIsFavorite(false);
  }

  async function addToFavorites() {
    const user = await firebase.getUserById(currentUser.uid);
    setUserDb(user);
    let favs = user.favorites;
    if (favs.includes(adId)) {
      favs.splice(favs.indexOf(adId), 1);
    } else {
      favs.push(adId);
    }
    const brandRef = firebase.db.collection("users").doc(currentUser.docId);
    await brandRef.update({
      favorites: favs,
    });
    setIsFavorite(true);
  }

  return (
    <>
      {isFavorite && (
        <Link to="/">
          <BsHeartFill
            onClick={() => removeFromFavorites()}
            className={styles["fav-orange"]}
          />
        </Link>
      )}
      {!isFavorite && (
        <Link to="/">
          <BsHeartFill
            onClick={() => addToFavorites()}
            className={styles["fav-black"]}
          />
        </Link>
      )}
    </>
  );
};

export default FavoriteButton;
