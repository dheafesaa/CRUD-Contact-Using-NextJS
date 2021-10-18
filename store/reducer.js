const initialState = {
  contacts: [],
  editing: {
    name: '',
    phone: '',
  },
  statusEdit: false,
  indexEdit: null,
};

const deleteDataContact = (array, action) => {
  return array.filter((contact, index) => index !== action.payload);
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [
          ...state.contacts,
          {
            value: action.payload,
          },
        ],
      };
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: deleteDataContact(state.contacts, action),
      };
    case "EDIT_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map((content, i) =>
          i === action.idx ? { ...content, value: action.payload } : content
        ),
      };

    case "SET_EDIT_FALSE":
      return {
        ...state,
        statusEdit: false,
      };

    case "SETUP_EDIT":
      return {
        ...state,
        editsContact: action.payload,
        statusEdit: true,
        indexEdit: action.idx,
      };
    default:
      return state;
  }
};

export default contactReducer;
