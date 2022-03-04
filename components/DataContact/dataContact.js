import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUserById, getUsers } from "../../store/users/actions";
import Image from "next/image";
import plus from "../../image/plus.png";
import DataItem from "./DataItem/DataItem";
import Modal from "../Modal/Modal";
import styles from "../../styles/dataContact.module.scss";

const DataContact = () => {
  const dispatch = useDispatch();
  const stateUsers = useSelector((state) => state.users);
  const [showModal, setShowModal] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const openModal = () => setShowModal(!showModal);

  const handleCreate = () => {
    openModal();
    setIsUpdate(false);
  };

  const setUpdate = (data) => {
    dispatch(getUserById(data));
    openModal();
    setIsUpdate(true);
  };

  const handleDelete = (data) => {
    if (window.confirm("Anda yakin ingin menghapus kontak ini?")) {
      dispatch(deleteUser(data)).then(() => {
        dispatch(getUsers());
      });
    }
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (stateUsers.loading) {
    return <p>Loadinggggggggg</p>;
  }

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
              onClick={handleCreate}
            />
            <Modal
              showModal={showModal}
              setShowModal={setShowModal}
              isUpdate={isUpdate}
              setIsUpdate={setIsUpdate}
            />
          </div>
        </div>
        <div className={styles.data__body}>
          {stateUsers?.users.length > 0 ? (
            stateUsers?.users.map((item) => (
              <DataItem
                item={item}
                key={item.id}
                onEdit={() => setUpdate(item)}
                onDelete={() => handleDelete(item.id)}
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
