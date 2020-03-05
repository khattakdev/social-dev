import axios from "../../axios";

export const LOGIN_USER = "LOGIN_USER";

export const loginUser = (email, password) => dispatch => {
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
      console.log(res.data);
      dispatch({
        type: LOGIN_USER,
        payload: {
          email,
          password
        }
      });
    })
    .catch(err => {
      console.log(err.response);
    });
};
