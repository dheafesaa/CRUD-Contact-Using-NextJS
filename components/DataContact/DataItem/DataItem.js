import React, { useState } from "react";
import Image from "next/image";
import profile from "../../../public/contact.png";
import styles from "../../../styles/dataItem.module.scss";
import Modal from "../../Modal/Modal";
import { useDispatch } from "react-redux";
import {
  deleteListContact,
  detailListContact,
} from "../../../actions/contactAction";
import AddContact from "../../AddContact/AddContact";

const DataItem = ({ contact }) => {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const togglePopup = () => {
    setShowModal(!showModal);
  };

  const updateDetail = () => {
    dispatch(detailListContact(contact))
    togglePopup()
  }

  return (
    <div className={styles.data__card}>
      <div className={styles.data__card_logo}>
        <Image src={profile} alt="Profile" width={70} height={70} />
      </div>

      <div className={styles.data__card_item}>
        <div className={styles.data__card_text}>
          <b className={styles.data__card_name}>{contact.nama}</b>
          <span className={styles.data__card_phone}>{contact.nohp}</span>
        </div>
        <div className={styles.data__card_actions}>
          <button
            onClick={updateDetail}
            className={styles.data__card_edit}
            // onClick={togglePopup}
          >
            Edit
          </button>
          {showModal && (
            <Modal title="Edit Contact" close={togglePopup}>
              <button className={styles.modal__close} onClick={togglePopup}>
                X
              </button>
              <AddContact togglePopup={togglePopup} />
            </Modal>
          )}
          <button
            className={styles.data__card_delete}
            onClick={() => dispatch(deleteListContact(contact.id))}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataItem;
