export const actionType = {
    addContact: (data) => ({ type: "ADD_CONTACT", payload: data }),
    deleteContact: (data) => ({ type: "DELETE_CONTACT", payload: data }),
    editContact: (data, index) => ({ type: "EDIT_CONTACT", payload: data, idx:index }),
    setupEdit: (data, index) => ({ type: "SETUP_EDIT", payload: data, idx: index}),
    setEditFalse: () => ({ type: "SET_EDIT_FALSE", payload: '' })
};