import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addListContact,
  getListContact,
  updateListContact,
} from "../../actions/contactAction";
import styles from "../../styles/addContact.module.scss";

const addContact = () => {
  const {
    addListContactResult,
    detailListContactResult,
    updateListContactResult,
  } = useSelector((state) => state.ContactReducer);

  console.log(detailListContactResult);

  const [nama, setNama] = useState("");
  const [nohp, setNohp] = useState("");
  const [id, setId] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (id) {
      //update
      dispatch(updateListContact({ id: id, nama: nama, nohp: nohp }));
    } else {
      //add
      dispatch(addListContact({ nama: nama, nohp: nohp }));
    }
    // dispatch(addListContact({ nama: nama, nohp: nohp }));
  };

  useEffect(() => {
    if (addListContactResult) {
      dispatch(getListContact());
      setNama("");
      setNohp("");
    }
  }, [addListContactResult, dispatch]);

  useEffect(() => {
    if (detailListContactResult) {
      dispatch(getListContact());
      setNama(detailListContactResult.nama);
      setNohp(detailListContactResult.nohp);
      setId(detailListContactResult.id)
    }
  }, [detailListContactResult, dispatch]);

  useEffect(() => {
    if (updateListContactResult) {
      dispatch(getListContact());
      setNama("");
      setNohp("");
      setId("");
    }
  }, [updateListContactResult, dispatch]);

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <div className={styles.form__input}>
        <input
          type="text"
          name="nama"
          placeholder="Name"
          className={styles.input}
          value={nama}
          onChange={(event) => setNama(event.target.value)}
          required
        />
        <input
          type="number"
          min="0"
          name="nohp"
          placeholder="Phone Number"
          className={styles.input}
          value={nohp}
          onChange={(event) => setNohp(event.target.value)}
          required
        />
        <button className={styles.form__submit} type="submit">
          Save
        </button>
      </div>
    </form>
  );
};

export default addContact;
