import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import plus from "../../image/plus.png";
import DataItem from "./DataItem/DataItem";
import styles from "../../styles/dataContact.module.scss";
import Modal from "../Modal/Modal";
import { getListContact } from "../../actions/contactAction";
import {AddContact} from "../index";

const DataContact = () => {
  const { getListContactResult, getListContactLoading, getListContactError, deleteListContactResult } =
    useSelector((state) => state.ContactReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListContact());
  }, [dispatch]);

  useEffect(() => {
    if (deleteListContactResult) {
      dispatch(getListContact());
    }
  }, [deleteListContactResult, dispatch]);

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
            <Image
              src={plus}
              alt="Plus"
              width={60}
              height={60}
              onClick={togglePopup}
            />
            {showModal && (
              <Modal title="Add Contact" close={togglePopup}>
                <button className={styles.modal__close} onClick={togglePopup}>
                  X
                </button>
                <AddContact togglePopup={togglePopup} />
              </Modal>
            )}
          </div>
        </div>

        <div className={styles.data__body}>
          {getListContactResult.length > 0 ? (
            getListContactResult.map((contact) => (
              <DataItem contact={contact} key={contact.id} />
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
