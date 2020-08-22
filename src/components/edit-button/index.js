import React from "react";
import { Link } from "react-router-dom";
import { BsFillXDiamondFill } from "react-icons/bs";
import styles from "./index.module.css";

const EditButton = ({ id }) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <BsFillXDiamondFill className={styles.button} />
        <span className={styles["button-name"]}>Редактиране</span>
      </Link>
    </div>
  );
};

export default EditButton;
