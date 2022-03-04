import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createUser, getUsers, updateUser } from "../../store/users/actions";
import styles from "../../styles/addContact.module.scss";

export default function AddContact({
  showModal,
  setShowModal,
  isUpdate,
  setIsUpdate,
}) {
  const refModal = useRef(null);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { user } = useSelector((state) => state.users);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isUpdate) {
      dispatch(updateUser(user.id, form)).then(() => {
        dispatch(getUsers());
      });
      setIsUpdate((prev) => !prev);
    } else {
      dispatch(createUser(form)).then(() => {
        dispatch(getUsers());
      });
    }

    setShowModal((prev) => !prev);
    setForm("");
  };

  const handleClose = (e) => {
    if (refModal.current === e.target) {
      setShowModal((prev) => !prev);
      setIsUpdate((prev) => !prev);
      setForm("");
    }
  };

  const escapePress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal((prev) => !prev);
        setIsUpdate((prev) => !prev);
        setForm("");
      }
    },
    [setShowModal, showModal, setIsUpdate]
  );

  useEffect(() => {
    document.addEventListener("keydown", escapePress);

    return () => document.removeEventListener("keydown", escapePress);
  }, [escapePress]);

  useEffect(() => {
    if (isUpdate) {
      setForm({
        ...form,
        name: user.name,
        email: user.email,
        phone: user.phone,
      });
    } else {
      setForm("");
    }
  }, [isUpdate]);

  return (
    <form>
      <div className={styles.form__input}>
        <input
          type="text"
          name="nama"
          placeholder="Name"
          className={styles.input}
          value={form.name || ""}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          min="0"
          name="nohp"
          placeholder="Phone Number"
          className={styles.input}
          value={form.phone || ""}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className={styles.form__submit}
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </form>
  );
}
