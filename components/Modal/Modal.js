import React from "react";
import styles from "../../styles/modal.module.scss";

const Modal = (props) => {
  const { title, children, close } = props;

  return (
    <div className={styles.modal}>
      <div className={styles.modal__overlay} onClick={close} />
      <div className={styles.modal__box}>
        <div className={styles.modal__content}>
          <div className={styles.modal__title}>{title}</div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
