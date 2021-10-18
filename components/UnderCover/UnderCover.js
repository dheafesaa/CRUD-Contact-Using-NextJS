import React from "react";
import Image from "next/image";
import sweetie from "../../image/hug.jpg";
import styles from "../../styles/underCover.module.scss";

const UnderCover = () => {
  return (
    <div className={styles.cover}>
      <div className={styles.cover__content}>
        <div className={styles.cover__head}>
          <p>
            <b>
              Make Stories and Having Fun With Your Friends From Comunication
            </b>
          </p>
        </div>
        <div className={styles.cover__body}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit leo. Nulla
            pretium lacus ut fringilla semper. Nam ultricies magna elit elit, id
            sodales ex fringilla ac. Nunc in placerat amet elit. Suspendisse elit vel sem a
            leo sem elementum tristique. Nulla fringilla dapibus varius.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit leo. Nulla
            pretium lacus ut fringilla semper. Nam ultricies magna elit, id
            sodales ex fringilla ac. Nunc in placerat leo.
          </p>
        </div>
      </div>
      <div className={styles.cover__pict}>
        <Image src={sweetie} alt="Sweetie" width={300} height={230} />
      </div>
    </div>
  );
};

export default UnderCover;
