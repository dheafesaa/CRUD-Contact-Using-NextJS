import axios from "axios";

export const GET_LIST_CONTACT = "GET_LIST_CONTACT";
export const ADD_LIST_CONTACT = "ADD_LIST_CONTACT";
export const DELETE_LIST_CONTACT = "DELETE_LIST_CONTACT";
export const DETAIL_LIST_CONTACT = "DETAIL_LIST_CONTACT";
export const UPDATE_LIST_CONTACT = "UPDATE_LIST_CONTACT";

export const getListContact = () => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_LIST_CONTACT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get API
    axios({
      method: "GET",
      url: "http://localhost:3000/contacts",
      timeout: 12000,
    })
      .then((response) => {
        //berhasil get api
        dispatch({
          type: GET_LIST_CONTACT,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // gagal get api
        dispatch({
          type: GET_LIST_CONTACT,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const addListContact = (data) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: ADD_LIST_CONTACT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get API
    axios({
      method: "POST",
      url: "http://localhost:3000/contacts",
      timeout: 12000,
      data: data,
    })
      .then((response) => {
        //berhasil get api
        dispatch({
          type: ADD_LIST_CONTACT,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })

      .catch((error) => {
        //gagal get api
        dispatch({
          type: ADD_LIST_CONTACT,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteListContact = (id) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: DELETE_LIST_CONTACT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get API
    axios({
      method: "DELETE",
      url: "http://localhost:3000/contacts/" + id,
      timeout: 12000,
    })
      .then((response) => {
        //berhasil get api
        dispatch({
          type: DELETE_LIST_CONTACT,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //gagal get api
        dispatch({
          type: DELETE_LIST_CONTACT,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const detailListContact = (data) => {
  return (dispatch) => {
    dispatch({
      type: DETAIL_LIST_CONTACT,
      payload: {
        data: data,
      },
    });
  };
};

export const updateListContact = (data) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: UPDATE_LIST_CONTACT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get API
    axios({
      method: "PUT",
      url: " http://localhost:4000/contacts/" + data.id,
      timeout: 12000,
      data: data,
    })
      .then((response) => {
        dispatch({
          type: UPDATE_LIST_CONTACT,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_LIST_CONTACT,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
