import axios from "../../axios";
import * as layoutActions from "./layout";
import { loadingEnd } from "./layout";
import { LOADING_END } from "./layout";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const LOAD_USER_DATA = "LOAD_USER_DATA";
export const LOAD_USER_DATA_FAILED = "LOAD_USER_DATA_FAILED";

export const loginUser = (email, password) => (dispatch) => {
  dispatch(layoutActions.loadingStart());
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const body = JSON.stringify({
    email,
    password,
  });

  axios
    .post("auth/login", body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_USER,
        payload: {
          user: res.data.user,
          isAuth: true,
        },
      });
      localStorage.setItem("token", res.data.token);
      dispatch(layoutActions.loadingEnd());
      dispatch(layoutActions.snackbarShow("success", res.data.msg[0]));
    })
    .catch((err) => {
      dispatch(layoutActions.loadingEnd());
      if (err.response) {
        return dispatch(
          layoutActions.snackbarShow("error", err.response.data.error[0])
        );
      }
      return dispatch(
        layoutActions.snackbarShow(
          "error",
          "Internal Error, Please Try Again Later"
        )
      );
    });
};

export const loadUserData = (userId = undefined, cb = undefined) => (
  dispatch
) => {
  axios
    .get(`/user/get${userId ? "/" + userId : ""}`)
    .then((res) => {
      dispatch({
        type: LOAD_USER_DATA,
        payload: res.data,
      });
      dispatch({
        type: LOADING_END,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOAD_USER_DATA_FAILED,
      });
      dispatch({
        type: LOADING_END,
      });
      if (!!cb) {
        cb();
      }
    });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: LOGOUT_USER,
  });
  dispatch({
    type: LOADING_END,
  });
};
