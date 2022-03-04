import {
  GET_USERS,
  DELETE_USER,
  ADD_USER,
  UPDATE_USER,
  GET_USERBYID,
  CLEAR_USER
} from "../constans";

const initialState = {
  users: [],
  user: {},
  loading: true
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_USERS}`:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case `${ADD_USER}`:
      return {
        ...state,
        loading: false
      };
    case `${GET_USERBYID}`:
      return { ...state, user: action.payload, loading: false };
    case `${UPDATE_USER}`:
      return {
        ...state,
        loading: false
      };
    case `${DELETE_USER}`:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
};

export default users;
