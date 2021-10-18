import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { actionType } from "../../../store/actions";
import profile from "../../../public/contact.png";
import styles from "../../../styles/dataItem.module.scss";

const DataItem = ({ contact, index }) => {
  const dispatch = useDispatch();

  const deleteDataContact = (index) => {
    dispatch(actionType.deleteContact(index));
    alert(index);
  };

  const setupEdit = (contact, index) => {
    dispatch(actionType.setupEdit(contact, index));
    alert(index);
  };

  return (
    <div className={styles.data__card}>
      <div className={styles.data__card_logo}>
        <Image src={profile} alt="Profile" />
      </div>
      <div className={styles.data__card_item}>
        <div className={styles.data__card_text}>
          <b className={styles.data__card_name}>{contact.value.name}</b>
          <span className={styles.data__card_phone}>{contact.value.phone}</span>
        </div>
        <div className={styles.data__card_actions}>
          <button
            onClick={() => setupEdit(contact.value, index)}
            className={styles.data__card_edit}
          >
            Edit
          </button>
          <button
            onClick={() => deleteDataContact(index)}
            className={styles.data__card_delete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataItem;
