import React, { useState } from "react";
import Image from "next/image";
import iphone from "../../image/fold.png";
import right from "../../image/right.png";
// import Modal from "../Modal/Modal";
// import AddContact from "../AddContact/AddContact";
import styles from "../../styles/screen.module.scss";

const Screen = () => {
  // const [showModal, setShowModal] = useState(false);

  // const togglePopup = () => {
  //   setShowModal(!showModal);
  // };

  return (
    <>
      <div className={styles.screens}>
        <div className={styles.screens__body}>
          <div className={styles.screens__right}>
            <div className={styles.screens__msg1}>
              <p>
                <b>Great way to save your contact</b>
              </p>
              <div className={styles.screens__msg2}>
                <p>
                  Add contact phone in here without limit. <br />
                  You can save for free.
                </p>
              </div>
              <button className={styles.screens__add}>
               GET STARTED
               <Image src={right} alt="Right" width={30} height={30} />
              </button>
              {/* {showModal && (
                <Modal title="Add Contact" close={togglePopup}>
                  <button className={styles.modal__close} onClick={togglePopup}>
                    X
                  </button>
                  <AddContact />
                </Modal>
              )} */}
            </div>
          </div>

          <div className={styles.screens__mid}>
            <div className={styles.screens__img}>
              <Image src={iphone} alt="Iphone" width={380} height={450} />
            </div>
          </div>

          <div className={styles.screens__left}>
            <div className={styles.screens__msg3}>
              <p>
                <b>Keeping your contact</b>
              </p>
              <div className={styles.screens__msg4}>
                <p>
                  Lorem ipsum dolor sit amet dapibus maximus, consectetur adipiscing elit. Fusce
                  pretium purus eu tincidunt maximus. In aliquam, enim volutpat
                  vulputate facilisis, risus augue fringilla elit, quis dapibus
                  ex dolor vel risus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Screen;