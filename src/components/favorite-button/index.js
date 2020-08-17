import React from "react";

import { BsHeartFill } from "react-icons/bs";

import styles from "./index.module.css";

const FavoriteButton = ({ isFavorite = false }) => {
  return (
    <>
      {isFavorite && (
        <div>
          <BsHeartFill className={styles["fav-orange"]} />
        </div>
      )}
      {!isFavorite && (
        <div>
          <BsHeartFill className={styles["fav-black"]} />
        </div>
      )}
    </>
  );
};

export default FavoriteButton;
