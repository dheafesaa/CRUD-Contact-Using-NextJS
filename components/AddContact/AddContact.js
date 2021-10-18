import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionType } from "../../store/actions";
import styles from "../../styles/addContact.module.scss";

const addContact = () => {
  const dispatch = useDispatch();

  const [contact, setContact] = useState("");
  const [editing, setEditing] = useState("");

  const editContact = useSelector((state) => state.editsContact);
  var statusEdit = useSelector((state) => state.statusEdit);
  var indexEdit = useSelector((state) => state.indexEdit);

  useEffect(() => {
    if (statusEdit) {
      setContact(editContact)
      statusEdit = false
      dispatch(actionType.setEditFalse())
      setEditing(true)
    }
  }, [statusEdit, editContact]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      editing
        ? actionType.editContact(contact, indexEdit)
        : actionType.addContact(contact)
    );
    setContact("");
    setEditing(false);

    console.log(contact);
  };

  const handleClear = () => {
    setEditing(false);
    setContact("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.form__input}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={styles.input}
          value={contact.name || ''}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          min="0"
          name="phone"
          placeholder="Phone Number"
          className={styles.input}
          value={contact.phone || ''}
          onChange={handleChange}
          required
        />
        {editing ? (
          <div className={styles.form__editing}>
            <button className={styles.form__editing_update}>Update</button>
            <button className={styles.form__editing_cancel} onClick={handleClear}>Cancel</button>
          </div>
        ) : (
          <button className={styles.form__submit} type="submit">
            Save
          </button>
        )}
      </div>
    </form>
  );
};


export default addContact;
