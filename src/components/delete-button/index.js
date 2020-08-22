import React from "react";
import { Link } from "react-router-dom";
import { BsFillXOctagonFill } from "react-icons/bs";

import firebase from "../../firebase";
import styles from "./index.module.css";

const DeleteButton = ({ id, collection, path }) => {
  const handleDeleteDoc = async (id) => {
    await firebase.deleteDoc(collection, id);
  };

  return (
    <div>
      <Link to={path} onClick={() => handleDeleteDoc(id)}>
        <BsFillXOctagonFill className={styles.button} />
        <span className={styles["button-name"]}>Изтриване</span>
      </Link>
    </div>
  );
};

export default DeleteButton;
