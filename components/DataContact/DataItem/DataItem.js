import React from "react";
import Image from "next/image";
import profile from "../../../public/contact.png";
import styles from "../../../styles/dataItem.module.scss";

const DataItem = (props) => {
  const { item, onEdit, onDelete } = props;

  return (
    <div className={styles.data__card}>
      <div className={styles.data__card_logo}>
        <Image src={profile} alt="Profile" width={70} height={70} />
      </div>
      <div className={styles.data__card_item}>
        <div className={styles.data__card_text}>
          <b className={styles.data__card_name}>{item.name}</b>
          <span className={styles.data__card_phone}>{item.phone}</span>
        </div>
        <div className={styles.data__card_actions}>
          <button className={styles.data__card_edit} onClick={onEdit}>
            Edit
          </button>
          <button className={styles.data__card_delete} onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataItem;
