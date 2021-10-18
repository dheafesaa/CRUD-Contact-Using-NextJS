import React from "react";
import Image from "next/image";
import styles from "../../styles/breadCrumb.module.scss";
import id from "../../image/id.png";
import call from "../../image/call.png";
import save from "../../image/check.png";
import contact from "../../image/contact.png";
import all from "../../image/all.png";

const BreadCrumb = () => {
  return (
    <div className={styles.breadCrumb}>
      <div className={styles.breadCrumb__heading}>
        <div className={styles.breadCrumb__head}>
          <p>HOW IT WORKS</p>
        </div>
        <div className={styles.breadCrumb__title}>
          <p>
            <b>Best Features to Help You</b>
          </p>
        </div>
      </div>

      <div className={styles.breadCrumb__body}>

        <div className={styles.card}>
          <Image src={id} alt="Id_card" width={75} height={75} />
          <div className={styles.card__title}>Caller ID</div>
          <div className={styles.card__desc}>
            <p>
              Recognize unknown <br /> numbers.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <Image src={call} alt="Ring_call" width={75} height={75} />
          <div className={styles.card__title}>Smart Caller</div>
          <div className={styles.card__desc}>
            <p>
              Always contact the right <br /> people.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <Image src={save} alt="Save" width={75} height={75} />
          <div className={styles.card__title}>Save Contact</div>
          <div className={styles.card__desc}>
            <p>
              You can manage your <br /> contact.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <Image src={contact} alt="Contact_book" width={75} height={75} />
          <div className={styles.card__title}>Unlimited Contact</div>
          <div className={styles.card__desc}>
            <p>
              Add your contact without <br /> limit and free.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <Image src={all} alt="All" width={75} height={75} />
          <div className={styles.card__title}>All In One</div>
          <div className={styles.card__desc}>
            <p>
              We manage <br /> your comunication.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default BreadCrumb;
