import React from "react";

import styles from "./index.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>CARBAY</div>
      <div className={styles.author}>© 2020 Copyright: Tihomir Vasilev</div>
    </footer>
  );
};

export default Footer;
