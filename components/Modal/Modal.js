import React, { useState, useRef, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, getUsers, updateUser } from "../../store/users/actions";
import styles from "../../styles/modal.module.scss";

export default function Modal({
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
        phone: user.phone,
      });
    } else {
      setForm("");
    }
  }, [isUpdate]);
  return (
    <>
      {showModal ? (
        <div className={styles.modal}>
          <div
            className={styles.modal__overlay}
            onClick={handleClose}
            ref={refModal}
          />
          <div className={styles.modal__box}>
            <div className={styles.modal__content}>
              <div className={styles.modal__title}>
                {isUpdate ? "Edit" : "Add"} Contact
              </div>
              <button
                className={styles.modal__close}
                onClick={() => setShowModal((prev) => !prev)}
              >
                X
              </button>
            </div>

            <div className={styles.form__input}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className={styles.input}
                value={form.name || ""}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                min="0"
                name="phone"
                placeholder="Phone Number"
                className={styles.input}
                value={form.phone || ""}
                onChange={handleChange}
                required
              />
              <button
                className={styles.form__submit}
                type="submit"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
