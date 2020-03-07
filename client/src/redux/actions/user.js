import axios from "../../axios";
import * as layoutActions from "./layout";
export const LOGIN_USER = "LOGIN_USER";

export const loginUser = (email, password) => dispatch => {
  dispatch(layoutActions.loadingStart());
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  const body = JSON.stringify({
    email,
    password
  });

  axios
    .post("auth/login", body, config)
    .then(res => {
      dispatch({
        type: LOGIN_USER,
        payload: {
          email,
          password,
          isAuth: true
        }
      });
      dispatch(layoutActions.loadingEnd());
      dispatch(layoutActions.snackbarShow("success", res.data.msg[0]));
    })
    .catch(err => {
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

      // console.log(err.response);
    });
};
