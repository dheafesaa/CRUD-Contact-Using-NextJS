import {
  GET_USERS,
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
  GET_USERBYID
} from "../constans";
import axios from "axios";

export const getUsers = () => (dispatch) => {
  return axios.get("http://localhost:3000/users").then((res) => {
    console.log(res, "masuk");
    dispatch({
      type: GET_USERS,
      payload: res.data
    });
  });
};

export const createUser = (data) => (dispatch) => {
  return axios.post("http://localhost:3000/users", data).then(() => {
    dispatch({ type: ADD_USER });
  });
};

export const getUserById = (data) => (dispatch) => {
  dispatch({ type: GET_USERBYID, payload: data });
};

export const updateUser = (id, data) => (dispatch) => {
  return axios.put(`http://localhost:3000/users/${id}`, data).then(() => {
    dispatch({ type: UPDATE_USER });
  });
};

export const deleteUser = (id) => (dispatch) => {
  return axios.delete(`http://localhost:3000/users/${id}`).then(() => {
    dispatch({
      type: DELETE_USER
    });
  });
};
