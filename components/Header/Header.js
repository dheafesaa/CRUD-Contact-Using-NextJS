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
        {/* <button className={styles.headerku_login}>Login</button> */}
      </div>
    </header>
  );
};

export default Header;
