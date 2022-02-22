import {
  GET_LIST_CONTACT,
  ADD_LIST_CONTACT,
  DELETE_LIST_CONTACT,
  DETAIL_LIST_CONTACT,
  UPDATE_LIST_CONTACT,
} from "../../actions/contactAction";

const initialState = {
  getListContactResult: false,
  getListContactLoading: false,
  getListContactError: false,

  addListContactResult: false,
  addListContactLoading: false,
  addListContactError: false,

  deleteListContactResult: false,
  deleteListContactLoading: false,
  deleteListContactError: false,

  detailListContactResult: false,

  updateListContactResult: false,
  updateListContactLoading: false,
  updateListContactError: false,
};

const contact = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_CONTACT:
      return {
        ...state,
        getListContactResult: action.payload.data,
        getListContactLoading: action.payload.loading,
        getListContactError: action.payload.errorMessage,
      };

    case ADD_LIST_CONTACT:
      return {
        ...state,
        addListContactResult: action.payload.data,
        addListContactLoading: action.payload.loading,
        addListContactError: action.payload.errorMessage,
      };

    case DELETE_LIST_CONTACT:
      return {
        ...state,
        deleteListContactResult: action.payload.data,
        deleteListContactLoading: action.payload.loading,
        deleteListContactError: action.payload.errorMessage,
      };

    case DETAIL_LIST_CONTACT:
      return {
        ...state,
        detailListContactResult: action.payload.data,
      };

    case UPDATE_LIST_CONTACT:
      return {
        ...state,
        updateListContactResult: action.payload.data,
        updateListContactLoading: action.payload.loading,
        updateListContactError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default contact;
