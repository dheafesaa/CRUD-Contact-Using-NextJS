import React from "react";
import styles from "../../styles/head.module.scss";

const Header = () => {
  return (
    <header>
      <div className={styles.headerku_head}>
        <h3>CONTACT PHONE</h3>
      </div>
      <div className={styles.headerku_sub}>
        <p>Home</p>
        <p>Download</p>
        <p>Premium</p>
        <p>About</p>
      </div>
    </header>
  );
};

export default Header;
