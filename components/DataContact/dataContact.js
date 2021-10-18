import React, {useState} from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import plus from "../../image/plus.png";
import DataItem from "./DataItem/DataItem";
import styles from "../../styles/dataContact.module.scss";
import Modal from "../Modal/Modal";
import AddContact from "../AddContact/AddContact";

const DataContact = () => {
  const contacts = useSelector((state) => state.contacts);

  const [showModal, setShowModal] = useState(false);

  const togglePopup = () => {
    setShowModal(!showModal);
  };

  return (
    <>
    <div className={styles.data}>
      <div className={styles.data__up}>
        <div className={styles.data__heading}>
          <div className={styles.data__title}>
            <p>
              <b>Contact Phones</b>
            </p>
          </div>
          <div className={styles.data__desc}>
            <span>Get and Keep Your Contact In Here</span>
          </div>
        </div>
        <div className={styles.data__plus}>
          <Image src={plus} alt="Plus" width={50} height={50}  onClick={togglePopup} />
          {showModal && (
            <Modal title="Add Contact" close={togglePopup}>
              <button className={styles.modal__close} onClick={togglePopup}>
                X
              </button>
              <AddContact />
            </Modal>
          )}
        </div>
      </div>

      <div className={styles.data__body}>
        {contacts.length > 0 ? (
          contacts.map((contact, index) => (
            <DataItem
              contact={contact}
              index={index}
              key={index}
              value={index}
            />
          ))
        ) : (
          <div className={styles.data__empty}>
            <b>No Contact Phone.</b>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default DataContact;
